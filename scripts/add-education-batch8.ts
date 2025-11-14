import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const countries = [
  {
    name: 'Sri Lanka',
    lat: 7.8731,
    lng: 80.7718,
    summary: `Sri Lanka possesses something rare in South Asia: a genuine commitment to universal education that predates independence. Free education from primary through university, enshrined since 1945, has produced literacy rates of 92 percent—extraordinary for the region. Walk into a village in the Central Highlands or the Northern Province and you'll find children in uniform, books under arms, heading to schools that don't charge fees. This is democracy's infrastructure, built through decades of political consensus that education matters more than almost anything else.

Yet beneath this achievement lies a system under severe strain. The economic crisis that engulfed Sri Lanka in 2022-2024—sovereign default, political upheaval, 70 percent inflation—devastated education budgets. Schools that once functioned adequately now lack basic supplies. Teachers, whose monthly salaries became worthless as the rupee collapsed, staged strikes demanding wages that could actually feed families. Parents who never paid school fees suddenly faced "voluntary" contributions for everything from electricity to textbooks, making "free" education increasingly expensive.

The curriculum reflects a system designed for a different era. Rote memorization dominates. The O-Level and A-Level examinations inherited from British colonialism still determine futures, creating intense pressure at ages 16 and 18. Students memorize rather than think critically, regurgitate rather than question. The university entrance exam—the Z-score system—is so competitive that a 0.1 difference determines whether you study medicine or nothing. Tutoring has become a shadow education system consuming family incomes and student childhoods.

Universities remain free, but access is a bottleneck. Only about 15 percent of qualified students gain admission due to capacity constraints. The rest face private universities (expensive and variable quality) or abandoning higher education entirely. Brain drain is acute: graduates in STEM fields, engineering, and medicine emigrate for salaries multiples of what they'd earn home. The country invests in their education; other nations capture the return.

Teacher quality and morale present another crisis. Sri Lanka once produced excellent teachers through rigorous training colleges. Today, many trained educators leave the profession for better-paying work. Those who remain are demoralized by low pay, large classes, and curriculum constraints. In 2024, teachers' unions demanded 100 percent salary increases—not from greed but because their purchasing power had been destroyed by inflation.

Infrastructure varies dramatically. Colombo schools can be well-resourced; rural schools lack internet, libraries, laboratories, sometimes electricity. The civil war (1983-2009) particularly damaged the North and East, where reconstruction continues. Plantation communities—descendants of Indian Tamil laborers—face systemic discrimination, with schools in estate areas often the most neglected.

Language politics complicate everything. Education is provided in Sinhala, Tamil, or English medium, but this segregates students along ethnic lines. English proficiency increasingly determines economic opportunity, creating a class divide between English-educated urban elites and vernacular-educated masses. The education system thus reinforces rather than reduces inequality.

Sri Lanka's education future hinges on whether the country can navigate post-crisis recovery to restore funding, modernize curriculum away from rote learning toward critical thinking, expand university capacity, and retain the teaching workforce. The foundation—universal access, high literacy—is solid. But the superstructure is crumbling, and without repair, Sri Lanka risks squandering its greatest asset: an educated population.`,
    issues: ['Economic crisis devastated education budgets and teacher salaries', 'Rote learning and colonial exam systems stifle critical thinking', 'University admission bottleneck (only 15% acceptance rate)', 'Severe brain drain of educated professionals', 'Language segregation reinforcing ethnic divisions']
  },
  {
    name: 'Yemen',
    lat: 15.5527,
    lng: 48.5164,
    summary: `Yemen's education system hasn't merely declined—it has largely ceased to function as a system at all. A decade of civil war beginning in 2014 has destroyed schools, displaced teachers, and left 8.5 million children without access to education. In a country of 30 million, that's more than one in four Yemenis under 18 who should be in school but aren't. Two-thirds of teachers—approximately 170,000 people—have received no salary for eight years. Read that again: eight years without pay, yet many still show up because they understand education as both profession and mission.

Before the war, Yemen had one of the Arab world's weakest education systems, with literacy at 70 percent overall and female literacy below 55 percent. The conflict obliterated even that inadequate baseline. More than 2,500 schools have been damaged or destroyed by airstrikes and shelling. Another 27 percent of schools are closed or being used for non-educational purposes: military barracks, displacement shelters, or simply abandoned. In areas controlled by the Houthis, curriculum has been weaponized—textbooks revised to promote the movement's ideology, teachers required to incorporate sectarian content.

The crisis affects girls most severely. In conservative rural areas, security concerns and child marriage have pushed girls out of school entirely. Yemen's female literacy rate, already low, is plummeting as a generation misses education. Early marriage accelerated during the conflict as desperate families see daughters as economic burdens rather than students. Girls who would have become doctors, engineers, teachers instead become child brides, their potential extinguished.

Teacher quality was problematic even before the war, with many poorly trained and reliant on rote methods. Now, experienced educators have fled the country or abandoned teaching for survival work. Those who remain teach in buildings without electricity, water, or windows—sometimes literally holding classes under trees. Students lack textbooks, notebooks, pencils. Teachers improvise lesson materials from whatever they can find.

Higher education has collapsed. Universities in Sana'a, Aden, and Taiz have seen enrollment plummet. Faculty aren't paid. Buildings are damaged. Labs lack equipment. Libraries lack books. Graduates—if they manage to complete degrees—face an economy where formal employment has virtually disappeared. The brain drain is severe: educated Yemenis who can leave do.

Humanitarian organizations—UNICEF, Save the Children, local NGOs—run programs to provide some education continuity. Temporary learning spaces, teacher incentive payments, textbook distribution, and psychosocial support keep some children learning. But humanitarian aid can't substitute for a functioning education system, and funding shortfalls mean even these minimal interventions reach only a fraction of need.

Yemen's education catastrophe will have generational consequences. An entire cohort is growing up without schooling—illiterate, innumerate, without the skills modern economies demand. When peace eventually comes, rebuilding the education system will require not just reconstructing buildings but reconstituting the teaching profession, rewriting curriculum, and somehow reaching millions who missed years of schooling.

The indicators are uniformly devastating: 8.5 million out of school, 170,000 unpaid teachers, 2,500 destroyed schools, female literacy collapsing, curriculum weaponized. This isn't education in crisis—it's education in abeyance, waiting for a peace that may be years away while children's futures disappear.`,
    issues: ['8.5 million children out of school due to conflict', '170,000 teachers unpaid for eight years', '2,500 schools destroyed or damaged by war', 'Female literacy collapsing due to security and child marriage', 'Houthi weaponization of curriculum in controlled areas']
  },
  {
    name: 'Saudi Arabia',
    lat: 23.8859,
    lng: 45.0792,
    summary: `Saudi Arabia is attempting something ambitious: transforming an education system designed to produce religiously orthodox subjects into one that produces globally competitive knowledge workers—all while maintaining enough traditional content to satisfy conservative constituencies. The tension between these goals defines Saudi education in 2025.

Vision 2030, Crown Prince Mohammed bin Salman's modernization program, targets education as fundamental infrastructure for economic diversification. The goals are specific: increase the proportion of Saudi students studying STEM to 40 percent by 2030, place at least one Saudi university in the global top 200, and dramatically improve PISA scores that currently rank Saudi students in the bottom third internationally. Progress is real but uneven.

Curriculum reform has been the most visible and controversial change. Religious instruction hours have been reduced. Content promoting sectarian views or "extremism" has been removed—though definitions remain political. English instruction starts earlier. Coding and robotics programs have been introduced in some schools. Critical thinking and problem-solving are new emphases, at least in policy documents. But implementation is inconsistent, and teachers trained in rote methods struggle to teach differently.

The university sector shows Saudi Arabia's resource advantages and limitations. The country spends lavishly—King Abdullah University of Science and Technology (KAUST) has an endowment of $20 billion, one of the world's largest. Salaries attract international faculty. Campuses feature world-class facilities. Yet academic freedom remains constrained; sensitive topics—political, religious, gender—are off-limits. Research output has increased quantitatively but quality lags. The goal of top-200 university status will require not just money but intellectual openness the political system doesn't permit.

Saudi students studying abroad—previously numbered in hundreds of thousands under generous scholarship programs—have declined as programs were scaled back. The intent is to improve domestic universities so students don't need to leave, but this reduces exposure to diverse ideas that foreign education provided. Female education has expanded dramatically; women now outnumber men in universities and enter fields previously closed. Coeducation remains largely forbidden below university level, and female students face restrictions male peers don't.

Literacy is high at 97 percent, and school enrollment near universal through primary and secondary levels. But PISA results tell a different story: Saudi students rank 46th in reading, 47th in science, 48th in mathematics among 79 countries tested in 2022. Memorization remains dominant pedagogically despite policy emphasis on critical thinking. Students excel at recalling information, struggle with applying it.

Teacher quality is improving slowly. Salaries for Saudi nationals are high (teaching is a desirable profession), but reliance on foreign educators—particularly Egyptian, Pakistani, and Jordanian teachers—creates dependence. Professional development programs aim to upgrade skills, but changing classroom practice takes time.

Private education is growing rapidly, catering to wealthy families and expatriates who want international curricula. This creates a two-tier system: elite schools offering IB or American/British curricula preparing students for global universities, and public schools serving everyone else with national curriculum.

The fundamental question is whether Saudi Arabia can produce the critical thinkers its economy needs while maintaining ideological control its politics demands. Education that teaches students to question and analyze doesn't compartmentalize well—students who think critically about science and literature may think critically about governance and religion. Vision 2030's education goals may ultimately conflict with authoritarian political structures.`,
    issues: ['PISA scores rank bottom-third internationally despite spending', 'Tension between critical thinking goals and ideological control', 'Persistent rote learning despite curriculum reforms', 'Growing elite-mass divide via private international schools', 'Academic freedom constraints limiting university quality']
  },
  {
    name: 'United Arab Emirates',
    lat: 23.4241,
    lng: 53.8478,
    summary: `The United Arab Emirates has built a curious education ecosystem: world-class international schools for the global elite, excellent facilities for Emirati nationals, and systematic inequality for the migrant workers who constitute 90 percent of the population. Walk through Dubai or Abu Dhabi and you'll see all three operating side by side, rarely intersecting.

For Emirati citizens—about 1 million people in a population of 10 million—education from kindergarten through university is free and generously resourced. The government spends approximately 21 percent of its budget on education, among the highest allocations globally. Schools feature modern facilities, technology integration, small class sizes. Universities like Khalifa University, Zayed University, and the Higher Colleges of Technology offer quality instruction with no tuition. Emiratis studying abroad receive full scholarships. This is education as citizenship benefit, designed to prepare nationals for leadership roles in government and business.

Yet outcomes don't match inputs. PISA scores place UAE students in the middle range internationally—respectable but not commensurate with spending. In 2022, Emirati students ranked 37th in reading, 31st in mathematics, 32nd in science among 81 participating countries. The gap between resources and results suggests pedagogical problems: rote learning persists despite curriculum reforms emphasizing critical thinking; teacher quality varies widely; and cultural factors including reliance on maids and drivers may reduce student independence and problem-solving skills developed through routine responsibilities.

International schools represent the UAE's most visible education sector globally, attracting expatriate professionals with children. Dubai alone hosts over 200 international schools offering British, American, IB, French, German, Indian, and other national curricula. The best—GEMS World Academy, Dubai American Academy, Jumeirah English Speaking School—charge $15,000-$30,000 annually and deliver education comparable to elite schools anywhere. These institutions teach the children of executives, diplomats, and skilled professionals, preparing them for universities worldwide. This sector is highly profitable and largely unregulated beyond basic safety standards.

Then there are schools for the 90 percent: South Asian, Filipino, and other migrant workers whose children attend budget private schools charging $2,000-$5,000 annually. Quality varies enormously. Some provide decent education; others are diploma mills. Teachers are often underpaid migrants themselves, lacking credentials that would qualify them to teach in their home countries. Facilities range from adequate to appalling. The curriculum often follows the home country (Indian CBSE, Pakistani system, British IGCSE) to facilitate reintegration when families eventually return.

Higher education has become an industry. The UAE hosts branch campuses of NYU, Sorbonne, and other global universities, offering degrees that technically carry the same weight as home campuses but with variable faculty quality and questionable academic freedom. Research output from UAE universities remains modest relative to investment, constrained by political sensitivities and challenges attracting top scholars to a restrictive environment.

The education strategy serves the regime's goals clearly: prepare Emiratis for leadership while attracting global talent and capital through excellent international schools and branch campuses. But it creates a stratified system where educational opportunity correlates perfectly with passport and wealth. Migrant children educated in low-quality schools have limited prospects beyond low-wage labor.

The UAE's education paradox is this: it has built infrastructure that could deliver excellent education to everyone but chooses to allocate quality by nationality and class. This reflects the country's broader social model—a generous welfare state for citizens, exploitative labor regime for migrants. Educationally, it works for regime stability and economic development. Morally, it's deeply troubling.`,
    issues: ['Outcome-spending mismatch: PISA results lag investment', 'Three-tier system creating extreme inequality by nationality', 'Rote learning persisting despite curriculum reforms', 'Branch campuses offering limited academic freedom', 'Migrant worker children trapped in low-quality schools']
  },
  {
    name: 'Lebanon',
    lat: 33.8547,
    lng: 35.8623,
    summary: `Lebanon's education sector, once the Arab world's finest, has been devastated by the compound crisis consuming the country since 2019: economic collapse, currency devaluation exceeding 98 percent, political paralysis, the Beirut port explosion, Syrian refugee burden, and conflict with Israel. In November 2025, schools operate sporadically when they operate at all. Teachers strike because monthly salaries of $100—once $1,000 before the lira's collapse—cannot cover transportation to school, let alone living expenses. This is education in a failed state.

Before the crisis, Lebanon's literacy rate stood at 95 percent, among the region's highest. The education system was multilingual—Arabic, French, and English instruction common even in public schools—and rigorous. Lebanese University and the American University of Beirut (AUB) attracted students regionally. Private schools ranging from elite institutions to modest parish schools educated 70 percent of students, with the public system serving the poorest. This pluralistic, high-quality system was Lebanon's signal achievement.

It has collapsed spectacularly. Teachers' purchasing power has been destroyed. In November 2024, Lebanon's teacher unions went on strike, shutting down public schools and demanding salaries reflecting living costs. The strikes recurred in 2025 because the government cannot pay adequately even when it wants to—state revenues have evaporated with the economy. Private school teachers fare slightly better but face the same inflation eating their incomes. Many educators have emigrated or left teaching for NGO work, remittance-dependent households, or the informal economy.

Public schools now charge fees—illegally but inevitably—because there's no budget for supplies, electricity, maintenance, or anything beyond nominal teacher pay. "Free" public education costs families $200-$500 annually in "contributions," excluding uniforms, books, and transportation. For families earning $50-$100 monthly, this is impossible. Children drop out, particularly from poor and refugee families.

Private schools have raised fees to astronomical levels—$2,000 to $15,000 annually depending on institution—payable in dollars or "fresh" lira at parallel market rates. Only families with foreign currency income (diaspora remittances, NGO salaries, business elite) can afford this. The middle class that once sent children to private schools has been priced out, creating a bifurcated system: elite schools for the wealthy, collapsing public schools for everyone else.

Lebanese University, the only public university, has been paralyzed by strikes, funding cuts, and brain drain. Faculty haven't been paid adequately in years. Buildings deteriorate. Labs lack equipment. The academic calendar is constantly disrupted. Private universities—AUB, Lebanese American University, Université Saint-Joseph—function better but are prohibitively expensive. Tuition at AUB exceeds $20,000 annually, more than most families earn in a year.

The Syrian refugee crisis compounds everything. Lebanon hosts 1.5 million Syrian refugees—the world's highest per capita burden. Many refugee children have never attended school or have missed years. NGOs run programs to provide education, but these reach only a fraction of need. Lebanese public schools already overwhelmed cannot absorb Syrian children without additional resources that don't exist.

The brain drain is catastrophic. Lebanon has lost approximately 340,000 people since 2019, including doctors, engineers, teachers, and other professionals whose education represented the country's investment. Those who remain often work for survival rather than in their trained fields. The country is hemorrhaging human capital it cannot afford to lose.

Lebanon's education system can only recover with broader state reconstruction—currency stabilization, political reform, restoration of public finances. Until then, a generation is losing education, Lebanon is losing its competitive advantage, and the country that once educated the Arab world cannot educate itself.`,
    issues: ['Currency collapse destroyed teacher purchasing power', 'Strikes closing schools as salaries cannot cover living costs', 'Public school fees making "free" education unaffordable', 'Elite-mass bifurcation as middle class priced out of private schools', 'Catastrophic brain drain of 340,000 including educators']
  },
  {
    name: 'Syria',
    lat: 34.8021,
    lng: 38.9968,
    summary: `After nearly 14 years of war, Syria's education system exists only in fragments. Half of all school-age children—approximately 2.4 million—are out of school entirely. One in three schools has been damaged, destroyed, or repurposed for military use. More than 100,000 teachers have fled the country or been killed. The Assad regime has fallen in late 2024, creating new uncertainty about reconstruction and governance. This is what educational annihilation looks like.

Before 2011, Syria had achieved near-universal primary enrollment and literacy rates approaching 90 percent. The education system was centralized, authoritarian, and focused on regime loyalty, but it functioned. Schools existed in every town. Teachers were trained. Textbooks were distributed. Universities in Damascus and Aleppo produced graduates in engineering, medicine, and sciences. That system is gone.

The war destroyed education infrastructure systematically. Schools were bombed, shelled, or occupied by military forces from all sides—the regime, opposition groups, ISIS, Kurdish forces. Aleppo's historic university district was a battlefield. Entire neighborhoods that once housed schools are now rubble. In areas that saw intense fighting, education infrastructure must be rebuilt from zero.

Teachers who survived faced impossible choices. Salaries became worthless as the Syrian pound collapsed and the government could barely pay. Many fled to Turkey, Lebanon, Jordan, or Europe. Those who remained often couldn't reach schools due to frontlines, checkpoints, or displacement. Teacher quality was already variable; now, many positions are filled by unqualified people with only secondary education themselves, hired because there's no one else.

Curriculum became weaponized. The Assad regime revised textbooks to glorify its narrative, demonize opponents, and emphasize sectarian loyalty. ISIS imposed its own curriculum in controlled areas, focusing on religious indoctrination and excluding science, arts, and critical thinking. Opposition-controlled areas improvised curricula or relied on NGOs, creating a generation educated in completely incompatible systems. Syrian children in Damascus, Idlib, and Raqqa learned different "facts" about their own country.

Girls were particularly affected. In conservative areas, security concerns and early marriage pushed girls out of school. ISIS-controlled territories forbade girls' education beyond elementary levels. Even in safer areas, families prioritized boys' education when resources were scarce. Female literacy, once approaching male rates, has plummeted.

Higher education collapsed. Universities became regime strongholds, military targets, or simply emptied as students fled or were conscripted. Those that continued operating offered degraded education—faculty fled, buildings damaged, equipment looted, academic freedom nonexistent. Syrian graduates who once worked across the Arab world as doctors, engineers, and professors now drive taxis in Istanbul or work in Beirut restaurants, their degrees worthless.

International organizations—UNICEF, Save the Children, local NGOs—have run education programs for Syrian children, including refugees in neighboring countries. These temporary learning spaces have prevented total educational loss for some children, but they're stopgaps, not systems. Millions of Syrian children have missed years of schooling and will never catch up.

The Assad regime's fall in late 2024 creates both opportunity and risk. Opportunity: curriculum could be depoliticized, refugees could return, reconstruction could begin. Risk: political fragmentation could perpetuate multiple incompatible education systems, corruption could divert reconstruction funds, and the professional base to rebuild the system has been destroyed.

Syria's education catastrophe will affect the country for generations. An entire cohort has grown up uneducated or poorly educated, without skills to participate in modern economies. Rebuilding will require not just schools but reconstituting the teaching profession, reconciling curricula, and somehow addressing the learning loss of millions. This is education as casualty of war.`,
    issues: ['2.4 million children (half of school-age population) out of school', '100,000 teachers fled or killed during conflict', 'One-third of schools damaged, destroyed, or militarized', 'Curriculum weaponized by regime, ISIS, and other factions', 'Post-Assad uncertainty threatening reconstruction']
  },
  {
    name: 'Solomon Islands',
    lat: -9.6457,
    lng: 160.1562,
    summary: `The Solomon Islands' education system reflects the fundamental challenge of providing modern schooling across 900 islands scattered over 1.35 million square kilometers of ocean. A child born in Honiara on Guadalcanal can attend well-resourced schools with trained teachers. A child in a village on Malaita's remote coast may have a one-room school with an untrained teacher and no books. Geography is educational destiny.

Primary enrollment stands at approximately 85 percent—respectable but leaving 15 percent of children, mainly girls and rural children, out of school entirely. The figure deteriorates sharply at secondary level, where only about 60 percent of children enroll and fewer than 40 percent complete. This dropout rate reflects three factors: financial barriers (secondary school fees that poor families cannot pay), cultural factors (early marriage and pregnancy for girls, expectations that boys work), and logistical impossibility (there simply aren't secondary schools within reach of many communities).

Solomon Islands officially provides free education through primary school, but "free" is theoretical. Families pay for uniforms, books, transportation, and informal fees. For families earning subsistence incomes, these costs are prohibitive. Secondary education charges explicit fees—$500 to $1,500 annually depending on school—which excludes most rural families. Urban families and those with relatives sending remittances from abroad manage; others don't.

Teacher quality presents a structural crisis. Many primary teachers have only secondary education themselves—they've completed Form 5 or Form 6 (equivalent to 11th or 12th grade) and received brief training before deployment to rural schools. They teach what they can remember from their own schooling, using rote methods. Trained teachers with tertiary credentials concentrate in Honiara and provincial capitals. Rural postings are unpopular; isolation, low pay (approximately $8,000 annually), and difficult living conditions mean high turnover.

Curriculum is inherited from British colonialism with minimal adaptation. Students memorize content for the Standard 6 exam (primary) and Form 5/Form 7 exams (secondary) that determine educational futures. Critical thinking, problem-solving, and practical skills receive little emphasis. The curriculum is delivered in English, a language most children don't speak at home, creating linguistic barriers to learning. In villages, Pijin or local languages dominate; children arrive at school expected to learn in a foreign language.

Solomon Islands National University (SINU) in Honiara offers tertiary education, but capacity is limited and quality variable. Only a few hundred students enroll annually in a country of 700,000. Most study education, nursing, or administration; STEM programs are weak. Graduates face an economy with limited formal employment, meaning educated youth often migrate to Australia, New Zealand, or Papua New Guinea under labor schemes.

Development partners—Australia, New Zealand, UNICEF, NGOs—fund education programs focusing on infrastructure, teacher training, and girls' education. The Solomon Islands-Australia Partnership has built schools, provided materials, and trained teachers. But external funding creates dependency, and sustainability is questionable when donor priorities shift.

Gender disparities persist. Girls enroll at lower rates, drop out earlier, and face barriers boys don't: expectations to help with domestic work, early marriage, pregnancy. Some communities resist girls' education beyond primary level. Teenage pregnancy is common, and pregnant girls are expelled from school, ending their education.

The education system's fundamental challenge is reconciling geography with equity. Providing quality education to children on remote atolls costs far more per student than in Honiara. The country lacks resources to achieve this, and political will is uncertain. The result is a system that works adequately for urban, middle-class families and fails everyone else—perpetuating inequality rather than reducing it.`,
    issues: ['Geographic isolation creating urban-rural quality chasm', 'Only 40% of children complete secondary school', 'Many primary teachers lack tertiary education themselves', 'English-language instruction when children speak Pijin or local languages', 'School fees excluding rural poor despite official "free" policy']
  },
  {
    name: 'Vanuatu',
    lat: -15.3767,
    lng: 166.9592,
    summary: `Vanuatu confronts a linguistic paradox: the country has approximately 110 languages for 300,000 people—among the world's highest linguistic diversity per capita. Education must navigate this multiplicity while also teaching Bislama (the national creole), English, and French (the colonial languages and languages of regional opportunity). The result is a system where language of instruction remains contested and children arrive at school speaking languages their teachers may not understand.

Primary enrollment reaches about 95 percent, high for a Pacific island nation. But completion is another matter: only 65 percent finish primary school, and just 45 percent transition to secondary. The dropout rate reflects financial barriers (school fees and indirect costs), cultural factors (children needed for subsistence work or early marriage), and quality issues that make schooling seem irrelevant to rural village life.

Vanuatu's education system inherited a bizarre dual structure from Anglo-French colonial rule. Schools are classified as either English-medium or French-medium, following different curricula, exam systems, and post-secondary pathways. This creates parallel systems that rarely communicate. A child's future opportunities depend partly on which language stream their village school happens to offer. There are efforts toward curriculum unification, but progress is slow and politically sensitive.

Teacher quality is the system's weakest link. Many teachers, particularly in rural areas, have minimal training—perhaps a brief course after completing secondary school. Qualified teachers with university education concentrate in Port Vila and Luganville. Rural postings are unpopular; isolation, low pay (approximately $600-$800 monthly), and hardship conditions mean high turnover. Teachers often instruct in English or French rather than students' first languages, creating comprehension barriers.

Infrastructure is rudimentary outside urban areas. Villages may have one-room schools with no electricity, no running water, no library, no internet. Cyclones regularly destroy buildings; Tropical Cyclone Harold in 2020 damaged or destroyed 60 percent of schools in some provinces. Reconstruction is slow due to budget constraints and logistical challenges reaching remote islands. Children sometimes study under temporary shelters for years.

Secondary education is fee-based, charging $500-$1,500 annually depending on school—prohibitive for families earning $2,000-$3,000 yearly. Boarding fees add costs because secondary schools are concentrated in provincial centers, requiring rural students to board. Only relatively wealthy families or those receiving remittances from relatives abroad can afford this. The result is that education beyond primary level is effectively restricted by class.

Tertiary education is limited to the University of the South Pacific's Vanuatu campus (offering mainly distance courses from Fiji headquarters), and the Vanuatu Institute of Teacher Education. Opportunities are minimal. Most youth seeking higher education must go to Fiji, Papua New Guinea, Australia, or New Zealand—expensive and unattainable for all but a few.

Gender disparities have narrowed but persist. Girls now enroll at rates similar to boys in primary school, but drop out more frequently at secondary level due to pregnancy, early marriage, or family expectations. Teenage pregnancy rates are high, and pregnant girls are typically expelled, ending their education.

The education system's connection to economic opportunity is weak. The formal sector employs only about 15 percent of the workforce; most Ni-Vanuatu engage in subsistence farming and fishing. Students study academic curricula focused on exams with limited practical application to village life. Vocational training is underdeveloped, meaning neither academic nor practical skills are adequately taught.

Climate change poses existential questions. Rising seas threaten entire islands; Cyclones are intensifying. Education planning must consider whether communities will even exist in current locations. Some villages may need relocation, raising questions about where schools should be built and whether investment in infrastructure makes sense.

Vanuatu's education future depends on resolving the language-of-instruction question, expanding secondary access beyond the elite, improving teacher training and deployment to rural areas, and making curriculum relevant to economic realities. The country's linguistic diversity is a cultural treasure but an educational challenge with no simple solution.`,
    issues: ['110 languages creating instruction language challenges', 'Only 45% of children transition to secondary school', 'Dual English-French colonial structure creating parallel systems', 'Rural teachers often minimally trained and high turnover', 'Cyclones repeatedly destroying infrastructure with slow rebuilding']
  },
  {
    name: 'Samoa',
    lat: -13.7590,
    lng: -172.1046,
    summary: `Samoa has achieved something rare in the Pacific: near-universal primary enrollment approaching 99 percent and literacy rates exceeding 99 percent. These figures place Samoa alongside developed nations and far ahead of Pacific neighbors. The explanation is cultural—Samoans value education highly—and structural—the education system is centralized, well-funded by aid, and benefits from Samoa's compact geography and stable governance.

Primary and secondary education are officially free, and the government enforces compulsory schooling to age 16. Village communities support schools through fa'a Samoa (traditional system), contributing labor for maintenance and supplementing government budgets. This community engagement creates ownership and accountability often missing elsewhere. Schools function. Teachers show up. Students attend.

But quality is uneven. While the structure ensures access, learning outcomes lag inputs. PILNA (Pacific Islands Literacy and Numeracy Assessment) results show Samoan students performing below regional averages in reading and numeracy. The gap between enrollment and achievement suggests pedagogical problems. Teaching remains heavily rote-based; memorization for exams dominates over critical thinking and problem-solving. Teachers are trained but often use methods from their own schooling rather than modern approaches.

Language of instruction creates complexity. Samoan is the language of daily life, but English is the language of instruction from upper primary onward and essential for accessing secondary and tertiary education. Students must master academic English while also maintaining Samoan literacy—a dual burden that many struggle with. Code-switching between languages is common, but formal English proficiency often remains weak, limiting comprehension of curriculum content.

Secondary school completion rates, while respectable at around 75 percent, trail primary enrollment. Dropouts reflect several factors: family economic pressures (students needed to work or care for siblings), cultural expectations (particularly affecting girls expected to contribute domestically), and academic struggles (students falling behind due to language or learning difficulties with limited support available). Teenage pregnancy affects girls disproportionately, and while policies nominally support continuing education, social stigma and practical barriers often end their schooling.

The National University of Samoa (NUS) provides tertiary education, offering degrees in education, business, science, and nursing. Enrollment is approximately 2,500 students—modest but respectable for a country of 200,000. NUS faces challenges common to small island institutions: limited resources, difficulty attracting and retaining qualified faculty, dependence on external funding, and brain drain as graduates emigrate. Many Samoan youth pursue higher education in New Zealand, Australia, or Fiji under scholarship programs or family support, and significant numbers don't return.

Emigration fundamentally shapes Samoa's education calculations. Remittances from Samoans abroad—primarily in New Zealand, Australia, and the United States—constitute approximately 20 percent of GDP. Education is viewed partly as investment in emigration: students study to qualify for overseas opportunities. The country invests in education; other nations capture the economic return. This creates a paradox: successful education accelerates brain drain.

Vocational education and training (VET) remain underdeveloped. Academic pathways toward university dominate, but formal sector employment opportunities in Samoa are limited. Most graduates seeking wage employment must emigrate or accept positions unrelated to their training. VET could provide practical skills for local economies, but it's under-resourced and stigmatized as inferior to academic tracks.

Climate change increasingly affects education planning. Samoa is vulnerable to cyclones, flooding, and sea level rise. Schools are damaged regularly; Cyclone Evan in 2012 and more recent storms destroyed or damaged dozens of schools. Rebuilding absorbs resources. More fundamentally, some coastal communities may become uninhabitable, raising questions about where to invest in long-term infrastructure.

Development assistance from Australia, New Zealand, China, and multilateral agencies funds much of Samoa's education system. This enables maintenance and improvements impossible from domestic revenues alone, but creates dependency. If donor priorities shift, Samoa's education budget faces gaps.

Samoa's education system succeeds at access but struggles with quality, retention beyond primary level, brain drain, and climate resilience. The cultural value placed on learning is a foundation; building on it requires improving pedagogy, strengthening English proficiency without losing Samoan language, expanding vocational pathways, and confronting the emigration paradox that sees educated youth as export commodities.`,
    issues: ['PILNA results show learning outcomes lag enrollment rates', 'Rote pedagogy persisting despite teacher training', 'English proficiency barriers limiting comprehension', 'Education success accelerating brain drain to NZ/Australia', 'Climate change repeatedly damaging infrastructure']
  },
  {
    name: 'Tonga',
    lat: -21.1789,
    lng: -175.1982,
    summary: `Tonga's education system functions at a level surprising for a country of 105,000 people scattered across 36 inhabited islands. Literacy exceeds 99 percent. Primary enrollment is universal. Secondary enrollment reaches approximately 85 percent. These achievements reflect the Kingdom's stable governance, strong tradition of church-supported education, and substantial development assistance. But the system faces severe challenges: limited quality, extreme geographic isolation, and brain drain that sees education as preparation for emigration rather than local development.

The education structure is inherited from British and Methodist missionary traditions. Government schools coexist with church-operated schools, particularly at primary and secondary levels. Many of the best schools are church-run, creating a parallel system where religious affiliation affects educational opportunity. The government subsidizes church schools while also operating its own institutions, a pragmatic accommodation of Tonga's deeply religious culture.

Primary education is free and compulsory. Access is nearly universal even on remote islands, though school quality varies dramatically between Tongatapu (the main island where the capital Nuku'alofa is located) and outer islands. Outer island schools often lack trained teachers, adequate materials, libraries, science equipment, and sometimes electricity or internet. Teachers willing to serve in isolated postings are rare; positions are filled by young graduates serving mandatory service before seeking better opportunities.

Secondary education charges fees—typically $200-$500 annually for government schools, more for elite church schools. While modest by global standards, this is significant for families earning $3,000-$5,000 yearly, particularly if they have multiple children. Scholarships exist but cover only a fraction of students. The result is that secondary education, while widely accessed, creates economic stratification.

English is the language of instruction from primary level, which creates both advantages and challenges. Advantage: Tongan students generally achieve higher English proficiency than Pacific counterparts who switch languages mid-education. Challenge: younger children arrive speaking Tongan at home and must immediately learn in English, creating initial barriers. Code-switching is common, and academic English proficiency remains uneven.

Pedagogical methods emphasize rote learning and respect for authority—culturally appropriate but pedagogically limiting. Students excel at memorizing and reciting information but struggle with critical analysis, creative problem-solving, and independent thinking. PILNA assessments show Tongan students performing at or slightly above Pacific averages in literacy and numeracy, but below international benchmarks. The education system produces compliant, respectful students with basic skills but limited capacity for innovation.

Tertiary education options are minimal. The University of the South Pacific (USP) operates a campus in Tonga offering mainly distance courses from Fiji. The Tonga Institute of Higher Education provides teacher training and vocational programs. Enrollment is limited to a few hundred students. Most Tongan youth seeking higher education go to Fiji (USP main campus), New Zealand (under scholarship or family migration), or Australia. Many don't return.

Emigration fundamentally shapes education in Tonga. Remittances from Tongans abroad—estimated at 40 percent of GDP—dwarf domestic economic production. Families invest in children's education explicitly to enable emigration, particularly to New Zealand under migration schemes. Education is valued not for local development but as exit strategy. This creates brain drain that depletes Tonga of educated professionals while providing financial lifeline through remittances. Doctors, nurses, teachers, and engineers study in Tonga or abroad and then emigrate.

The 2022 Hunga Tonga-Hunga Ha'apai volcanic eruption and tsunami demonstrated education system vulnerability. Schools were damaged, particularly on western islands closer to the eruption. Disruption lasted months. Reconstruction continues, funded largely by international assistance. The disaster highlighted infrastructure fragility and dependence on external support.

Climate change poses ongoing threats. Rising seas, intensifying cyclones, and changing weather patterns endanger infrastructure and question long-term planning. Some outer islands may become uninhabitable; where should education investments go if populations must relocate?

Tonga's education system achieves impressive access but faces fundamental questions: How can quality improve without resources? How can brain drain reverse when opportunities abroad vastly exceed local prospects? How can education support development when it primarily prepares youth to leave? These aren't problems with simple solutions—they reflect Tonga's structural reality as a small, isolated, resource-poor island kingdom in a globalized world where education enables mobility that undermines the nation educating its youth.`,
    issues: ['Brain drain as education prepares students for emigration', 'Outer islands lacking trained teachers and resources', 'Rote learning limiting critical thinking and innovation', 'Secondary fees creating economic stratification', 'Climate change and disasters threatening infrastructure']
  },
  {
    name: 'Egypt',
    lat: 26.8206,
    lng: 30.8025,
    summary: `Egypt's education system teaches 25 million students—the largest in the Middle East and North Africa, larger than many countries' entire populations. It achieves near-universal primary enrollment and literacy rates around 73 percent (higher for men, lower for women). Yet the system is widely considered dysfunctional, producing graduates who lack skills employers need, perpetuating inequality, and driving those who can afford it into private alternatives. This is mass education without quality.

Walk into a public school in Cairo or a Delta village and you'll find the same problems: classes of 50-70 students packed into rooms designed for 30, teachers reading from outdated textbooks, students memorizing for the Thanaweya Amma (secondary exam) that determines university placement and thereby life trajectories. Creativity, critical thinking, problem-solving—the skills 21st-century economies demand—are not taught because they're not tested. The exam is everything.

Private tutoring has become a shadow education system consuming family budgets and students' childhoods. In 2025, Egypt's private tutoring market is estimated at $1-2 billion annually. Parents pay teachers privately to teach what should be taught in school, creating a perverse system where underpaid public school teachers (earning $100-$200 monthly) supplement incomes through after-school lessons. Students who can't afford tutoring fall behind. Education becomes a competition won by whoever spends more.

The government has attempted reforms. Egypt Vision 2030 prioritizes education modernization. The "New Education System 2.0" launched in 2018 aims to shift from rote learning to competency-based learning, integrate technology, and reduce reliance on high-stakes exams. Tablets have been distributed. Digital content developed. But implementation is inconsistent, teacher training insufficient, and resistance from families and teachers accustomed to the old system is substantial.

Infrastructure remains inadequate. Egypt needs approximately 50,000 new schools to eliminate overcrowding and shift-systems (where different student groups attend morning or afternoon due to space constraints). The government builds schools annually, but population growth outpaces construction. Rural areas, particularly Upper Egypt, have the worst facilities—buildings without adequate water, electricity, or sanitation.

Teacher quality is the system's Achilles heel. Egypt produces approximately 30,000 new teachers annually from colleges of education, but many are poorly prepared. Rote learning dominates teacher training as it does K-12 education. Teachers emerge able to repeat what they've memorized but not to inspire critical thinking. Salaries are low enough that teaching attracts those with limited alternatives. The profession has lost prestige; talented students avoid education degrees.

Higher education is a mixed picture. Egypt has 50+ universities enrolling over 3 million students—massification that expands access but dilutes quality. Public universities charge minimal fees and accept hundreds of thousands of students based on Thanaweya Amma scores. The best students enter medicine, engineering, and pharmacy; everyone else fills other faculties. Class sizes are enormous—lectures of 500+ students are common. Research output is modest. Academic freedom is constrained by political sensitivities.

Private universities have proliferated, offering better facilities, smaller classes, and international partnerships to students who can afford $5,000-$15,000 annual tuition. The American University in Cairo (AUC), German University in Cairo, and others produce graduates who compete globally. This creates a two-tier system: elite private universities and struggling public institutions.

Gender disparities have narrowed significantly. Girls now enroll at nearly equal rates as boys in primary and secondary education, a substantial achievement. But female literacy still lags male (65 percent vs. 80 percent), reflecting older generations and persistent barriers in rural conservative areas. Higher education sees more women than men enrolled, but fields are gender-segregated—women dominate education and humanities while remaining underrepresented in engineering and sciences.

Inequality is systemic and worsening. Children in Cairo's affluent neighborhoods attend international schools charging $10,000-$25,000 annually, study foreign curricula (British, American, IB), and proceed to Western universities. Their classmates speak Arabic as one language among several, consider Egypt one option among many. Meanwhile, children in Cairo's informal settlements or Upper Egypt villages crowd into crumbling schools, memorize Arabic curriculum for exams that lead to overcrowded public universities or dead-end jobs. Education reinforces class divisions rather than enabling mobility.

Egypt's education system can only improve through massive sustained investment in infrastructure, teacher quality, curriculum reform, and examination systems that reward thinking over memorization. Resources are constrained; political will is uncertain. Until then, Egypt will continue producing millions of graduates with credentials but without skills, perpetuating underemployment, frustration, and the brain drain that sees educated Egyptians seeking futures abroad.`,
    issues: ['Classes of 50-70 students in rooms designed for 30', '$1-2 billion private tutoring industry undermining public system', 'Rote learning and high-stakes exams stifling critical thinking', 'Need for 50,000 new schools to eliminate overcrowding', 'Growing elite-mass divide via international vs. public schools']
  },
  {
    name: 'Ethiopia',
    lat: 9.1450,
    lng: 40.4897,
    summary: `Ethiopia's education system serves 120 million people across 80+ ethnic groups speaking 80+ languages in a country fragmented by civil war, ethnic conflict, and state collapse in some regions. The Tigray War (2020-2022) devastated education infrastructure in the north, destroyed schools, killed or displaced teachers, and left hundreds of thousands of children without schooling. In Oromia, the Amhara region, and elsewhere, ethnic violence and insurgency continue disrupting education. This is a system operating in a failed state.

Before recent conflicts, Ethiopia had made impressive progress. Primary enrollment increased from 20 percent in 1990 to over 85 percent by 2015—a transformation reflecting government prioritization and donor support. Literacy rose from 36 percent to 52 percent. Universities expanded from a handful to 40+. The expansion was quantitatively remarkable even as quality lagged.

The Tigray War reversed decades of progress. In Tigray, 90 percent of schools were damaged or destroyed. Teachers were killed, fled, or were unable to reach schools due to combat. Students were displaced, traumatized, or conscripted. Even after the November 2022 ceasefire, reconstruction is slow—infrastructure destroyed, budgets nonexistent, political resolution uncertain. An entire generation of Tigrayan children has missed years of education with consequences that will affect the region for decades.

Infrastructure even in peacetime is grossly inadequate. Ethiopia needs tens of thousands of additional schools. Many children study under trees or in temporary shelters. Classrooms designed for 40 students hold 80. Rural schools—serving 80 percent of the population—often lack electricity, water, books, or qualified teachers. The student-teacher ratio exceeds 50:1 nationally and is worse in rural areas.

Teacher quality is the system's fundamental constraint. Ethiopia needs approximately 300,000 additional teachers to achieve adequate ratios. The teachers available are often poorly educated themselves—many have only completed secondary school plus brief training. Universities produce education graduates, but quality is variable and graduates avoid rural postings. Teachers in remote areas may be barely literate, teaching what they can remember with few materials.

Language policy is politically explosive. Ethiopia's constitution guarantees education in mother tongues, meaning theoretically, instruction should occur in each ethnicity's language. In practice, resources don't exist to produce curricula and materials in 80+ languages. The solution has been regional—Amharic in Amhara region, Tigrinya in Tigray, Oromiffa in Oromia, etc.—but this creates linguistic balkanization. A student educated in Oromiffa cannot easily transfer to Amharic-medium schools. English is introduced as subject and gradually as medium of instruction, but proficiency remains low.

Higher education expanded rapidly but quality collapsed. Ethiopia has 40+ universities enrolling 750,000+ students, up from 30,000 in 2000. This massification occurred without corresponding investment in faculty, libraries, laboratories, or facilities. Class sizes are enormous. Faculty are often minimally qualified—Master's degree holders teaching without PhD supervision. Research output is negligible. Degrees are granted to students who may not have learned much.

The political situation complicates everything. Ethnic federalism has fragmented education administration. Each region operates semi-autonomously with different priorities, budgets, and capacity. The federal government sets policy but implementation depends on regional states. In regions with active insurgencies—Oromia, Amhara, Benishangul-Gumuz—schools are targets. Teachers are threatened, abducted, or killed for perceived collaboration with the state or ethnic rivals.

Gender disparities persist. Girls' primary enrollment has increased dramatically but still lags boys, particularly in rural areas. Dropout rates for girls are higher, driven by early marriage, pregnancy, domestic work expectations, and security concerns. In conservative rural areas, families prioritize sons' education. Female literacy stands at 42 percent versus 63 percent for males—a gap that will take generations to close.

Development assistance from the World Bank, USAID, UK, and others has funded Ethiopia's education expansion. This external support enabled progress but creates dependency. Donor fatigue, political tensions over human rights abuses, and competing priorities threaten continued funding at levels required.

Ethiopia's education challenges are inseparable from broader state dysfunction. Schools cannot function without security, infrastructure, budgets, and governance—all absent or degraded in much of the country. Education recovery requires not just sectoral investment but political stability, ethnic reconciliation, and state reconstruction. Until then, millions of Ethiopian children will continue learning in destroyed buildings, taught by unqualified teachers, preparing for futures in an economy offering few opportunities.`,
    issues: ['Tigray War destroyed 90% of schools in the north', '300,000 teacher shortage with many unqualified', 'Student-teacher ratios exceeding 50:1', 'Language balkanization across 80+ ethnic groups', 'Ethnic violence disrupting education in multiple regions']
  },
  {
    name: 'Kenya',
    lat: -0.0236,
    lng: 37.9062,
    summary: `Kenya's education system is ambitious, competitive, and brutally unequal. The country has achieved near-universal primary enrollment and literacy rates of 82 percent—impressive for a lower-middle-income country. But the system is dominated by high-stakes examinations that determine life trajectories, creating intense pressure, widespread cheating, and an education culture focused on test performance rather than learning.

The 8-4-4 system—eight years primary, four years secondary, four years university—has structured Kenyan education since 1985. In 2023, Kenya began transitioning to the new Competency-Based Curriculum (CBC), replacing rote learning with skills-based approaches emphasizing critical thinking, creativity, and practical application. The reform is conceptually sound but implementation is chaotic: teachers lack training in new methods, materials are insufficient, and parents accustomed to the old system are anxious about the change. The education sector is attempting transformation mid-flight.

Examinations dominate everything. The Kenya Certificate of Primary Education (KCPE) at Standard 8 and Kenya Certificate of Secondary Education (KCSE) at Form 4 are national events. Results determine secondary school placement and university admission, making them life-defining. Students memorize enormous amounts of content. Schools drill exam techniques. Teachers are evaluated by students' pass rates, creating incentives to teach to tests. Cheating is epidemic—leaks of exam papers, purchased results, and organized fraud occur annually despite harsh penalties.

Private education has exploded. Kenya now has thousands of private primary and secondary schools charging $500-$5,000 annually, serving middle and upper classes. These schools offer smaller classes, better facilities, international curricula (British, American, IB), and English instruction from day one. Meanwhile, public schools—serving 80 percent of students—are overcrowded, under-resourced, and predominantly teach in Kiswahili or mother tongues before switching to English in upper primary. Elite private schools produce graduates who compete globally; public schools produce graduates competing for limited opportunities.

Infrastructure varies from excellent to appalling. Nairobi's elite schools have computer labs, science equipment, libraries, and sports facilities. Rural schools in northern counties like Turkana or Mandera may have thatched structures without desks, toilets, or water. The Free Primary Education policy implemented in 2003 eliminated school fees, massively increasing enrollment but straining infrastructure not built for these numbers. The government builds schools continuously, but population growth and rural-urban migration outpace construction.

Teacher quality is uneven. Kenya has well-trained teachers—many with university degrees from institutions like Kenyatta University and Moi University. But deployment favors urban areas. Rural and marginalized county schools struggle to attract and retain qualified teachers. Salaries of $300-$600 monthly are adequate in rural areas but insufficient in Nairobi where costs are high. Teachers' unions are powerful and have struck repeatedly over pay and working conditions, sometimes shutting down schools for weeks.

Higher education has expanded dramatically. Kenya has 70+ universities (public and private) enrolling over 500,000 students. University education became a constitutional right, pressuring the government to admit vast numbers. But quality is deeply problematic. Public universities are overcrowded and under-resourced. Lecture halls built for 200 hold 500. Faculty are overwhelmed. Strikes over delayed salaries are common. Private universities range from reputable institutions to diploma mills selling worthless degrees.

The Competency-Based Curriculum aims to address the system's rote-learning problem, but implementation reveals the difficulty of changing educational culture. Teachers trained in memorization-based methods must now teach creativity and critical thinking—skills they may not possess. Parents worry that CBC students won't compete on standardized tests, missing the point that the tests are the problem. Confusion over assessment criteria, resource constraints, and insufficient teacher training threaten the reform.

Gender parity has improved significantly. Girls' primary enrollment now matches boys', and the gap narrows in secondary. But disparities persist in marginalized communities, particularly pastoralist areas where girls' education faces cultural resistance. Early pregnancy remains a major cause of girls dropping out; Kenya's teenage pregnancy rate is approximately 18 percent, among the highest in the region. Pregnant girls are officially allowed to return to school after childbirth, but social stigma and practical barriers often prevent this.

Inequality is Kenya's education system's defining feature. Children from wealthy families attend international schools, speak English fluently, and proceed to Western universities or elite Kenyan institutions. Children from poor families attend overcrowded public schools, learn in under-resourced environments, and face limited opportunities. The system is supposed to enable social mobility; in practice, it often reinforces class divisions. The rare student from a poor background who excels faces celebration as exception, proof that the system works. But exceptions prove rules—the system works for the privileged and fails most others.`,
    issues: ['CBC transition creating implementation chaos and anxiety', 'Examination-dominated culture breeding pressure and cheating', 'Stark elite-mass divide via private international vs. public schools', 'Rural schools lacking qualified teachers and basic infrastructure', 'Teenage pregnancy (18%) ending girls\' education despite return policy']
  }
];

(async () => {
  for (const c of countries) {
    await prisma.locationSummary.upsert({
      where: { name_type_category: { name: c.name, type: 'country', category: 'education' } },
      create: { ...c, type: 'country', country: c.name, category: 'education', issues: JSON.stringify(c.issues), topStories: '[]', storyCount: 0 },
      update: { summary: c.summary, issues: JSON.stringify(c.issues), updatedAt: new Date() }
    });
    console.log(`✓ ${c.name}: ${c.summary.length} characters`);
  }
  await prisma.$disconnect();
  console.log('\n✅ ALL 13 BATCH 8 EDUCATION SUMMARIES SAVED!');
})();
