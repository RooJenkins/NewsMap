import 'dotenv/config'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

// TANZANIA EDUCATION
const TANZANIA_EDUCATION = `Tanzania abolished primary school fees in 2001, and enrollment exploded from 59% to 98% in a decade—one of Africa's most dramatic expansions. But here's what the statistics don't say: classrooms built for 40 now hold 120, most teachers have only secondary education themselves, and learning outcomes are catastrophic. Only 31% of Standard 2 pupils can read a simple paragraph in Kiswahili, their own language. In mathematics, just 57% can perform basic addition. Tanzania put millions of children in schools but didn't build a system capable of teaching them. The Free Education Policy eliminated fees through secondary school in 2016, which sounds transformational until you visit a rural school with 180 students per teacher, no textbooks, and a headmaster who spends half his time begging for chalk. This is the paradox of Tanzanian education: nearly universal enrollment masking nearly universal failure to learn.

The structural problem is simple arithmetic. Tanzania's education budget is 3.6% of GDP and 15% of government spending—below the UNESCO targets of 4-6% and 20% respectively. Meanwhile, the student population keeps growing as birth rates remain high and enrollment expands through secondary levels. The government can't build schools fast enough, train teachers fast enough, or print textbooks fast enough. The pupil-teacher ratio in primary schools officially averages 43:1, but in rural areas it exceeds 100:1. Most teachers are unqualified or under-qualified—they've completed Form IV (secondary) themselves and received minimal pedagogical training. Many can't solve the math problems they're assigned to teach. Professional development is sporadic, supervision is minimal, and salaries are low enough that teachers moonlight at second jobs just to survive.

Infrastructure is dismal. Rural schools lack electricity, running water, toilets, and libraries. Students sit on dirt floors because there aren't enough desks. Textbooks are shared among six students. Science labs don't exist. The government's Big Results Now initiative promised 21,000 new classrooms by 2015, but construction lagged, quality was poor, and the deficit persists. Secondary schools fare worse—the transition rate from primary to secondary climbed to 60% after free education expanded, but facilities weren't ready. Students who passed the Standard 7 exam found no space in secondary schools, or schools without teachers, labs, or dormitories.

Higher education reflects the same crisis at a different level. The University of Dar es Salaam, once East Africa's academic jewel, now operates with decaying infrastructure, underpaid faculty, and overcrowded lecture halls. Student protests over fees and conditions are routine. Universities expanded access rapidly, but academic quality declined as resources stagnated. Tanzania graduates thousands of university students annually, but employers complain they lack critical thinking, technical skills, or English proficiency. The disconnect between credentialing and competence undermines the entire education pyramid.

What Tanzania needs isn't mysterious: double the education budget, triple teacher training capacity, ensure every classroom has textbooks and basic furniture, and implement accountability systems that measure learning rather than enrollment. The government knows this—policy documents say all the right things about quality improvement and teacher professional development. But execution stumbles on corruption, capacity constraints, and political will. Tanzania succeeded at getting children into schools; now it must succeed at teaching them, which requires unsexy, sustained investment in teacher quality, infrastructure, and curriculum that actually develops thinking rather than rote memorization. Right now, Tanzanian children attend school for years and leave barely literate—that's not education, it's babysitting with textbooks.`

// UGANDA EDUCATION
const UGANDA_EDUCATION = `Uganda introduced Universal Primary Education in 1997, and enrollment surged from 2.7 million to 8.4 million within four years—a miracle of access that became a cautionary tale about implementation. Classrooms designed for 50 now hold 150. The pupil-teacher ratio officially averages 52:1, but rural schools routinely exceed 100:1. In 2023, only 17.5% of Primary 3 students demonstrated literacy proficiency in English, and just 19.6% achieved numeracy proficiency in mathematics. Uganda put millions of children in schools, but the schools can't teach them. The government spends 11.5% of its budget on education—not terrible by regional standards—but with a population growing 3% annually and infrastructure crumbling, the money doesn't stretch far enough. This is what happens when you expand enrollment without expanding capacity: schools full of children learning almost nothing.

The teacher crisis defines everything else. Uganda has 175,000 primary school teachers for 10 million students. Most are under-qualified—they've completed secondary education (maybe) and received brief training that doesn't prepare them for classrooms of 100+ students with no materials. Teacher motivation is low because salaries are low, often paid months late, and working conditions are terrible. Rural postings mean no electricity, no housing, no support, and community hostility when learning outcomes inevitably disappoint. Professional development barely exists. The government runs some in-service training, but it's sporadic and ineffective. Teachers teach the way they were taught: rote memorization, corporal punishment, and no critical thinking. The curriculum emphasizes facts over understanding, exams over learning, and obedience over curiosity.

Infrastructure failure is visible everywhere. Half of primary schools lack access to safe water, 40% have no functioning toilets, and most rural schools operate without electricity or libraries. Students share textbooks at ratios of 5:1 or worse, often copying from blackboards for entire lessons because there's nothing else to do. Science education is theoretical because labs don't exist. The government's infrastructure targets—construction, renovation, equipment—are routinely underfunded and poorly executed. Corruption siphons resources meant for schools, and monitoring is too weak to catch it.

Secondary and tertiary education compound the crisis. The transition rate to secondary school is only 35%—meaning two-thirds of primary graduates go nowhere. Those who do reach secondary face overcrowded schools, under-qualified teachers, and curricula misaligned with labor market needs. Uganda's universities expanded rapidly, but academic quality collapsed as resources stagnated. Makerere University, once the "Harvard of Africa," now suffers from funding crises, brain drain, and degree programs that employers view skeptically. University graduates struggle to find work because their degrees don't signal competence.

Uganda's education crisis reflects a decade of policy drift. After 2010, the government shifted spending priorities from social sectors to infrastructure—roads, dams, energy. Education budgets stagnated in real terms even as enrollments grew. The National Resistance Movement talks about education as a priority, but budgets tell a different story. What Uganda needs is doubling education spending, tripling teacher training and salaries, ensuring every school has water and toilets before worrying about computers, and rebuilding curriculum around thinking rather than memorization. The cognitive development crisis is measurable: 82.5% of Primary 3 students can't read proficiently in English, which is the language of instruction from Primary 4 onward. This means most Ugandan children spend years in schools where they can't understand lessons, can't read textbooks, and emerge barely literate. That's not education—it's institutional failure on a generational scale.`

// ZIMBABWE EDUCATION
const ZIMBABWE_EDUCATION = `Zimbabwe once had the highest literacy rate in Africa—over 90% in the 1990s—and an education system that was the envy of the continent. Then came hyperinflation, economic collapse, and political decay. By 2024, the system is a shell. Teachers earn $300 monthly—barely survival wages—and the brain drain is catastrophic. Thousands emigrate annually to South Africa, Botswana, or the UK, where salaries are ten times higher. Those who remain are demoralized, often absent, and moonlight at private tutoring just to pay rent. The pupil-teacher ratio in rural schools exceeds 70:1. Infrastructure is crumbling: schools lack textbooks, furniture, electricity, and sometimes even roofs. The pass rate for O-Level exams dropped to 29.8% in 2023—meaning 70% of students who complete secondary school fail the national exam. This isn't about student ability; it's about systemic collapse. Zimbabwe's education system is dying, and the government treats it as a budget afterthought.

The salary crisis drives everything else. Teachers have gone on strike repeatedly, demanding living wages and better conditions. The government makes promises, delivers partial payments, and then inflation erodes them within months. Real teacher salaries have declined 80% since 2000. Experienced educators leave for any job that pays better—driving taxis, farming, emigrating. The workforce that remains is either young and under-trained or older and exhausted. The Zimbabwe Teachers Association reports members skipping meals, unable to afford transport to work, and living in poverty despite university degrees. When teachers can't afford to live, teaching quality collapses. Classes become crowd control, curriculum coverage is abandoned, and learning becomes impossible.

Infrastructure decay is everywhere. Rural schools operate in buildings constructed in the 1960s with no maintenance since. Urban schools fare marginally better, but only marginally. Textbook shortages are chronic—students copy notes from blackboards because there's nothing to read. Science labs are empty shells, computers don't exist, and libraries are non-existent. The government's infrastructure budget for education is laughably small, and corruption diverts much of what's allocated. Schools rely on parent contributions for basics like desks and chalk, but parents are impoverished too, so schools simply go without.

The examination crisis reflects the teaching crisis. Zimbabwe's education system has always been exam-focused—O-Levels and A-Levels determine futures. But when 70% of students fail O-Levels, the system has failed. Subjects requiring labs and equipment—sciences, technical courses—see the worst results because schools can't provide practical training. Mathematics pass rates are abysmal because most teachers themselves struggle with the content. The Zimbabwe Schools Examination Council maintains standards, which is admirable, but the result is mass failure because schools can't prepare students adequately.

Higher education mirrors the school crisis. The University of Zimbabwe, once regionally prestigious, operates with aging infrastructure, underpaid faculty who've lost motivation or emigrated, and students who arrive unprepared because secondary education failed them. Degree programs continue, but academic quality is questionable and employers increasingly view Zimbabwean degrees skeptically. Research has collapsed, libraries haven't acquired new books in years, and lab equipment is obsolete.

Zimbabwe's education system was built over decades and destroyed in two. Rebuilding requires tripling teacher salaries, hiring thousands more educators, fixing infrastructure, ensuring reliable textbook supplies, and restoring professional development systems. None of that happens without economic recovery and political will. The current government treats education as an expense to minimize rather than an investment to prioritize. As long as teachers earn poverty wages and schools operate without basic resources, Zimbabwe's education system will continue producing graduates who can't pass exams, can't find work, and lack the skills their economy needs. The literacy rate that once approached 95% is declining as a generation grows up in schools that teach almost nothing. That's the tragedy: Zimbabwe proved African countries could build world-class education systems, then demonstrated how quickly they collapse when neglected.`

// CAMEROON EDUCATION
const CAMEROON_EDUCATION = `Cameroon operates two parallel education systems—Francophone and Anglophone—inherited from its dual colonial past, and the bifurcation creates inefficiencies and inequities that would be absurd if they weren't so damaging. Students in French-speaking regions follow French curricula and take French exams; students in English-speaking regions follow British-style O-Levels and A-Levels. Teacher training, textbooks, and assessment systems differ. The education ministry struggles to coordinate both, often neglecting one or the other. And since 2016, the Anglophone regions have been war zones, where separatist conflict has killed 6,000 people, destroyed hundreds of schools, and left hundreds of thousands of children out of school entirely. The literacy rate is officially 77.1%, but that average masks brutal disparities: urban areas approach 90%, rural areas drop below 60%, and conflict zones have seen education collapse completely.

The structural challenges start with funding. Cameroon spends around 3.1% of GDP on education—below UNESCO's 4-6% recommendation—and allocates roughly 17% of the government budget, also below the 20% target. With 28 million people and a rapidly growing youth population, these figures mean chronic shortages. Pupil-teacher ratios officially average 47:1 in primary schools but exceed 80:1 in rural areas. Most teachers are under-qualified—they've completed secondary school and received minimal pedagogical training. Professional development is inconsistent, supervision is weak, and salaries are low enough that teachers seek second incomes. The wealthier Francophone regions have better-staffed schools; poorer Anglophone and rural areas make do with whoever shows up.

Infrastructure inequality is stark. Urban schools in Yaoundé and Douala have electricity, furniture, textbooks, and maybe computers. Rural schools operate in crumbling buildings with dirt floors, no toilets, and textbook ratios of 6:1 or worse. The conflict regions are catastrophic: schools burned, looted, or abandoned. Teachers fled, students displaced, and education simply stopped. UNICEF estimates hundreds of thousands of children in the North-West and South-West regions have been out of school for years. Humanitarian organizations try to run informal education programs, but access is limited and safety uncertain. Even in government-controlled areas, parents fear sending children to school because of attacks.

Learning outcomes reflect these failures. Cameroon doesn't participate in international assessments like PISA, so comparative data is scarce, but national exams show alarming patterns. Pass rates for the First School Leaving Certificate (FSLC) and the General Certificate of Education (GCE) vary wildly by region—Francophone urban areas perform reasonably, Anglophone rural areas fail en masse. Science and mathematics results are particularly poor because schools lack labs, equipment, and qualified teachers. English proficiency in Francophone regions is minimal despite being a required subject; French proficiency in Anglophone regions is similarly weak. The dual system means students don't gain functional bilingualism—they learn one language, maybe, and fail to learn the other.

Higher education is concentrated in a few universities—University of Yaoundé I and II, University of Buea, University of Douala—that are overcrowded, underfunded, and academically uneven. Lecture halls built for 200 hold 800. Faculty are poorly paid, research budgets are negligible, and libraries are outdated. Degree programs produce graduates, but employers complain about skills gaps, especially in critical thinking, technical competence, and problem-solving. The conflict disrupted Anglophone universities particularly—University of Buea shut down repeatedly, professors fled, students couldn't attend.

Cameroon's education system is failing because the state is failing. Paul Biya has governed since 1982, prioritizes regime survival over service delivery, and education is invisible in his agenda. The budget isn't enough, distribution is inequitable, and the Anglophone crisis has destroyed education in two entire regions. Fixing this requires ending the conflict, doubling education spending, hiring and training tens of thousands of teachers, rebuilding destroyed schools, and addressing the absurdity of running two separate education systems that serve the same country. None of that is happening. Cameroon's children are paying the price—those in conflict zones miss years of schooling entirely, those in rural areas attend schools that barely function, and even those in cities receive education that doesn't prepare them for modern economies. The literacy rate is declining among young cohorts, and a generation is being lost.`

// ZAMBIA EDUCATION
const ZAMBIA_EDUCATION = `Zambia's Free Education Policy, implemented in 2022, promised to eliminate school fees for all children from Early Childhood Education through Grade 12—a genuinely transformative commitment in a country where half the population lives in poverty. Enrollment surged, attendance improved, and families who couldn't afford fees suddenly found education accessible. But here's the problem: Zambia didn't build the capacity to handle the surge. Classrooms designed for 40 now hold 90. The pupil-teacher ratio officially averages 54:1 in primary schools, but rural schools routinely exceed 100:1. The literacy rate among 15-24 year-olds is officially 87.8%, which sounds impressive until you see that functional literacy—the ability to read and understand complex texts—is far lower. Zambia succeeded at getting children into schools; it's failing at teaching them once they arrive.

The resource crisis is everywhere. Zambia spends about 4.5% of GDP on education—meeting UNESCO's lower threshold—but rapid enrollment growth means the money doesn't stretch. The Ministry of Education faces shortages in everything: teachers, textbooks, classrooms, desks, toilets. The government hired thousands of teachers in 2023, which helped marginally, but the gap persists. Most teachers are under-qualified—they've completed Grade 12 and received one year of college training, which doesn't prepare them for managing 100-student classrooms with minimal materials. Teacher deployment favors urban areas; rural schools are chronically understaffed. Salaries are low and often delayed, morale is terrible, and professional development is sporadic. Teachers teach the way they were taught: rote memorization, copying from blackboards, and corporal punishment.

Infrastructure is grossly inadequate. The government's construction targets—build 3,000 classrooms annually, renovate dilapidated schools, provide clean water and toilets—are chronically underfunded and poorly executed. Rural schools operate in buildings from the 1970s with no maintenance, no electricity, no libraries, and no labs. Students sit on floors because there aren't enough desks. Textbook ratios reach 5:1 or worse, meaning students spend lessons copying notes rather than reading or thinking. Science education is entirely theoretical because labs don't exist. The Free Education Policy increased demand for secondary schools, but construction hasn't kept pace—students who pass Grade 7 exams can't find space in secondary schools.

Learning outcomes are alarming. National assessments show that most Grade 5 students can't read fluently in English, which is the language of instruction from Grade 2 onward. Mathematics proficiency is similarly dismal—most students struggle with basic operations. The disconnect between years in school and actual learning is vast: children attend for a decade and emerge barely literate, innumerate, and unprepared for work or further education. The curriculum emphasizes content coverage over understanding, exams over critical thinking, and memorization over problem-solving. Students can recite facts but can't apply knowledge.

Higher education tells a similar story. The University of Zambia, Copperbelt University, and newer institutions expanded enrollments rapidly but lack resources to maintain quality. Lecture halls are overcrowded, libraries outdated, lab equipment obsolete, and faculty underpaid. Research funding is negligible. Degree programs produce graduates, but employers complain they lack practical skills, critical thinking, and technical competence. The mismatch between university curricula and labor market needs is glaring—graduates can't find jobs matching their qualifications, while employers can't find candidates with needed skills.

What Zambia needs is unsexy and expensive: double teacher training capacity, ensure every classroom has functional furniture and textbooks, rebuild curriculum around competencies rather than content coverage, and implement accountability systems that measure learning rather than enrollment. The government knows this—the Free Education Policy shows political will exists. But execution stumbles on corruption, capacity constraints, and insufficient budgets. Zambia is experiencing an education expansion without an education improvement. Children are in schools, but they're not learning, and that failure will haunt Zambia's development for decades. The literacy statistics look acceptable, but they measure attendance and basic decoding, not comprehension or critical thinking. Zambia needs to shift focus from access to quality, from enrollment to learning, and from political promises to sustained implementation. Right now, it's succeeding at the easy part and failing at the hard part.`

// MALI EDUCATION
const MALI_EDUCATION = `Mali's literacy rate is 35.5%—one of the world's lowest—and that statistic tells you everything about the education system's failure. Two-thirds of Malian adults can't read, which means generations have passed through childhood without accessing functional education. The situation for children is scarcely better: the gross enrollment rate in primary school is officially 83%, but in conflict-affected northern and central regions, it drops below 40%. Over 1,500 schools have closed due to violence since 2012, affecting nearly 500,000 students. Teachers have fled, buildings have been destroyed, and entire communities have no education infrastructure. In areas still functioning, pupil-teacher ratios exceed 60:1, classrooms lack furniture and textbooks, and most teachers are unqualified or under-qualified. Mali's education system isn't in crisis—it barely exists.

The structural collapse reflects state failure. Mali spends around 3.9% of GDP on education, which sounds almost adequate until you see how little reaches schools. Corruption diverts resources, bureaucracy delays what remains, and insecurity makes delivery impossible across large territories. The teacher shortage is catastrophic—Mali needs to triple the teaching workforce just to cover current students, and that's before expanding access to the 35% of primary-age children still out of school. Teachers who exist are poorly trained, irregularly paid, and working in impossible conditions. Urban schools in Bamako have too many students per teacher; rural schools have no teachers at all. Northern schools, when they function, operate without supplies, electricity, or security.

Infrastructure is dismal or destroyed. Schools that remain open often lack walls, roofs, furniture, and toilets. Students sit on dirt floors, share slates because paper doesn't exist, and learn nothing because teachers are absent or unqualified. The 2012 coup and subsequent jihadist insurgency destroyed education infrastructure across northern Mali—schools were looted, burned, or repurposed by armed groups. Reconstruction hasn't happened because the government doesn't control the territory and donors are exhausted. Humanitarian organizations run informal education programs in displacement camps, but coverage is minimal and quality uncertain.

The gender gap is brutal. Boys' enrollment rates are low; girls' are catastrophic. Cultural norms prioritize boys' education when resources are scarce, and early marriage removes girls from school entirely. In rural areas, fewer than 20% of girls complete primary school. Female literacy rates are among the world's lowest—over 80% of women are illiterate. This creates intergenerational cycles of poverty and exclusion: illiterate mothers can't help children with schoolwork, can't access health information, and have less agency in household decisions. Mali's education system is failing everyone, but it's failing girls and women most.

Secondary and higher education are elite privileges. Only students from wealthy urban families who survive the academic obstacle course reach secondary school, and even fewer reach university. The University of Bamako operates with minimal funding, outdated facilities, and faculty who are underpaid or haven't been paid in months. Academic quality is questionable, research is non-existent, and graduates struggle to find work because degrees don't signal competence. The disconnect between Mali's education system and its economic needs is total—schools produce few graduates, and those who graduate lack skills employers need.

Mali's education crisis is inseparable from its security crisis. Schools can't function in war zones, teachers can't work when they're targets for violence, and children can't learn when they're displaced or traumatized. Rebuilding requires peace, which doesn't exist; funding, which is declining as donors withdraw; and governance, which is absent beyond Bamako. The military junta prioritizes regime security over education, and social services are invisible in its agenda. Mali needs to quadruple education spending, rebuild destroyed infrastructure, train tens of thousands of teachers, and ensure security so schools can function. None of that is happening. A generation is growing up illiterate, innumerate, and without prospects. Mali's 35.5% literacy rate isn't just a statistic—it's a development catastrophe that ensures poverty, instability, and dysfunction for decades to come.`

// NIGER EDUCATION
const NIGER_EDUCATION = `Niger has the world's lowest Human Development Index ranking, and its education system shows why. The adult literacy rate is 37.3%—nearly two-thirds of Nigeriens can't read. The youth literacy rate is marginally better at 50.4%, meaning half of 15-24 year-olds are illiterate despite supposedly receiving education. The gross enrollment rate in primary school is officially 76.5%, but that figure masks brutal inequities: urban boys have reasonable access, rural girls have almost none. Over 1.5 million primary-age children are out of school entirely, and those who attend face pupil-teacher ratios exceeding 50:1, classrooms without textbooks or furniture, and instruction in French—a language most students don't speak at home. Niger's education system is failing at the most basic function: teaching children to read and calculate.

The funding crisis is acute. Niger spends roughly 4.5% of GDP on education, meeting UNESCO's minimum threshold, but the absolute amount is tiny because Niger is desperately poor. The education budget must cover a population growing 3.8% annually—the world's fastest population growth rate. Schools can't keep pace: construction lags enrollment growth, teacher training can't match demand, and resources are spread impossibly thin. Pupil-teacher ratios officially average 51:1, but rural schools routinely exceed 80:1. Most teachers are under-qualified—they've completed primary education themselves, received brief training, and are tasked with teaching 80 students across multiple grades in one classroom. Professional development is non-existent, supervision minimal, and salaries too low to survive on.

Infrastructure is grossly inadequate. Half of Niger's schools operate without permanent structures—children learn under trees or in temporary shelters that collapse during rains. Rural schools lack electricity, water, toilets, and furniture. Students sit on rocks or dirt, share slates, and copy lessons because textbooks don't exist. The textbook-student ratio reaches 5:1 or worse. Science education is entirely theoretical because labs and materials don't exist. The Ministry of Education's infrastructure targets—build thousands of classrooms, provide clean water and toilets—are chronically underfunded and poorly executed. Corruption diverts resources, capacity constraints delay construction, and completed facilities often lack teachers or supplies.

The gender and geographic disparities are among the world's worst. Boys' enrollment in primary school is 84%; girls' is 69%. But completion rates tell a darker story: only 47% of boys and 31% of girls finish primary school. In rural areas, fewer than 15% of girls complete primary education. Early marriage, household labor demands, and cultural norms that devalue girls' education combine to exclude most rural girls from schooling. Female literacy rates are catastrophic—less than 25% of adult women can read. This creates intergenerational poverty: illiterate mothers can't help children learn, can't access health information, and have limited economic opportunities.

Secondary education is an elite privilege. Only 17% of secondary-age children are enrolled in school—one of the world's lowest rates. Most students who complete primary school have nowhere to go because secondary schools don't exist in their areas or are unaffordable. Urban areas have some secondary schools, but rural areas have almost none. Higher education is even more exclusive—the University of Niamey serves a tiny fraction of the population, operates with minimal resources, and produces graduates whose skills don't match labor market needs.

Learning outcomes are abysmal. National assessments show most students completing primary school can't read fluently in French, can't solve basic math problems, and lack foundational knowledge in any subject. Years in school don't translate to learning because instruction is poor, materials absent, and curriculum irrelevant. Students memorize and recite but can't comprehend or apply knowledge. The education system credentials students without educating them.

Niger's education crisis reflects its development crisis. The world's fastest population growth overwhelms every system. Extreme poverty means families can't afford schooling costs despite official fee elimination. Insecurity in border regions disrupts education. Cultural barriers prevent girls from attending. And the government has neither the resources nor capacity to build an education system adequate for 26 million people growing toward 65 million by 2050. Niger needs to quintuple education spending, build tens of thousands of schools, train hundreds of thousands of teachers, and address cultural barriers to girls' education. None of that happens without economic growth, fertility decline, and sustained international support—none guaranteed. A generation is growing up illiterate and innumerate, ensuring Niger remains trapped in poverty. The 37.3% adult literacy rate isn't improving fast enough because the system can't educate children faster than the population grows. That's the trap, and Niger hasn't escaped it.`

// CHAD EDUCATION
const CHAD_EDUCATION = `Chad's adult literacy rate is 26.8%—nearly three-quarters of Chadians can't read—and the youth literacy rate is only marginally better at 31.5%. This means the education system is failing generations consecutively. The gross enrollment rate in primary school is officially 81.5%, which sounds almost respectable until you see that completion rates are 41% for boys and 28% for girls. Less than one-third of Chadian children finish primary school, and those who do can barely read or calculate. Chad spends around 2.9% of GDP on education—well below UNESCO's 4-6% recommendation—and with a weak tax base and chronic insecurity, the absolute amount is negligible. The result: schools without teachers, classrooms without roofs, and children copying lessons on dirt because paper doesn't exist. This isn't an education system—it's the absence of one.

The teacher crisis is catastrophic. Chad has among the world's lowest teacher densities, and those who exist are overwhelmingly under-qualified. Most primary teachers have completed only primary or lower secondary education themselves, with minimal pedagogical training. They're tasked with teaching 60-100 students across multiple grades in languages many students don't speak. The medium of instruction is French, but most Chadian children speak Arabic or indigenous languages at home, creating a linguistic barrier from day one. Professional development is non-existent, supervision minimal, and salaries so low and irregular that teachers abandon posts or never show up. Rural areas, especially in the conflict-affected north and east, have no teachers at all—schools exist on paper but are empty.

Infrastructure is among the world's worst. Over 40% of schools operate without permanent buildings—children learn under trees or in temporary shelters. Rural schools lack electricity, water, toilets, furniture, and teaching materials. Students sit on dirt, share slates, and learn nothing because there's nothing to learn from. The textbook-student ratio exceeds 6:1 in most schools. Science education is non-existent because labs and materials don't exist. The Ministry of Education's plans to build classrooms and provide basic materials are chronically unfunded. What little budget exists is often diverted by corruption before reaching schools.

The gender gap is extreme and worsening. Boys' primary enrollment is 90%; girls' is 73%. But those figures hide worse disparities in completion and quality. Only 28% of girls finish primary school, and in rural areas, the rate drops below 15%. Cultural norms, early marriage, household labor demands, and lack of gender-sensitive facilities (toilets, female teachers) combine to exclude girls. Female literacy rates are catastrophic—less than 15% of adult women can read. This creates intergenerational poverty and exclusion: illiterate mothers can't support children's learning, can't access health information, and have minimal economic opportunities.

Secondary education barely exists. The gross enrollment rate is around 20%—four out of five secondary-age children are out of school. Those who attend face overcrowded, under-resourced schools with unqualified teachers and no materials. Examination pass rates are abysmal. Higher education is an elite enclave—the University of N'Djamena serves a tiny fraction of the population, operates with minimal funding, and produces graduates whose skills don't match labor market needs. Research is non-existent, libraries outdated, and faculty underpaid or unpaid.

Chad's education failure is a governance failure. The state lacks capacity, resources, and will to build basic systems. Chronic conflict, extreme poverty, and rapid population growth overwhelm attempts at development. Chad's education budget needs to quadruple just to reach minimum adequacy, but that requires economic growth and political prioritization that don't exist. International donors provide limited support, but Chad's instability and corruption deter sustained investment. The military junta prioritizes security (unsuccessfully) over social services, and education is invisible in its agenda.

The consequence is a lost generation—or more accurately, lost generations. Children grow up illiterate and innumerate, without skills for productive work or civic participation. The 26.8% adult literacy rate hasn't improved because the system educating children is failing as badly as it did decades ago. Chad needs to build an education system from scratch: train hundreds of thousands of teachers, construct tens of thousands of schools, ensure every child has textbooks and furniture, and address cultural barriers to girls' education. None of that happens without peace, governance, and sustained investment—all absent. Chad's education crisis is a development trap that ensures poverty, instability, and human capital catastrophe for decades to come.`

// BURKINA FASO EDUCATION
const BURKINA_FASO_EDUCATION = `Burkina Faso's literacy rate is 46%—slightly better than its Sahel neighbors but still abysmal by any standard. Half of adults can't read, and the youth literacy rate of 61% shows marginal improvement. The education system made progress before the security crisis: primary enrollment reached 90%, the government invested in teacher training, and completion rates improved. Then jihadist insurgency consumed the north and east, displacing over two million people and closing 6,334 schools affecting nearly 900,000 students by late 2024. Teachers fled violence, facilities were destroyed or occupied by armed groups, and entire regions saw education collapse. In areas still functioning, the system struggles with chronic underfunding, teacher shortages, and infrastructure gaps. Burkina Faso built an education system that was beginning to work, and insurgency destroyed it.

The security crisis defines current reality. Over 20% of schools are closed, concentrated in conflict zones where jihadists control territory. Teachers in these areas face threats, kidnapping, or death, leading to mass abandonment of posts. Students are displaced, traumatized, and out of school—many for years. Humanitarian organizations run informal education programs in displacement camps, but coverage is minimal and quality uncertain. The government's education budget increasingly goes toward salaries for teachers who can't work and maintaining schools in accessible areas, while conflict zones are abandoned. The Ministry of Education's plans to recruit 15,000 new teachers and build 3,000 classrooms are meaningless in territories the government doesn't control.

In areas still functioning, the system faces chronic challenges. Pupil-teacher ratios officially average 52:1 in primary schools but exceed 80:1 in displacement-receiving areas overwhelmed by influxes. Most teachers are under-qualified—they've completed lower secondary school and received brief training. Professional development is limited, supervision weak, and salaries low. Infrastructure is inadequate: classrooms lack furniture, textbooks are scarce (ratios reach 5:1), and rural schools operate without electricity, water, or toilets. Science education is theoretical because labs don't exist.

The gender gap persists despite government efforts. Girls' enrollment in primary school reached 89% before the crisis, nearly matching boys at 91%, showing real progress. But completion rates remain lower for girls—early marriage, household labor, and cultural norms still exclude many. In conflict zones, girls' education has collapsed entirely: displacement, insecurity, and family breakdown make schooling impossible. Female literacy rates remain far below male rates, and the crisis is worsening the gap.

Secondary education serves a minority. The transition rate from primary to secondary was improving, reaching 55%, but conflict disrupted this. Many students who completed primary school found secondary schools closed or inaccessible. Those who attend face overcrowded schools with unqualified teachers and minimal materials. Examination pass rates vary by region—urban areas perform reasonably, rural and conflict-affected areas fail en masse. Higher education is concentrated in Ouagadougou—the University of Ouagadougou and Polytechnic University operate with limited resources, produce graduates whose skills don't match labor market needs, and face periodic closures due to unrest.

What Burkina Faso needs first is security. Schools can't function in war zones, teachers can't work under threat, and children can't learn while displaced. Beyond security, the system needs doubled education spending, massive teacher recruitment and training, infrastructure reconstruction in conflict-affected areas, and curriculum reforms emphasizing critical thinking over rote memorization. The government's National Education Strategy contains all the right policies, but implementation is impossible while 30% of the territory is contested or controlled by insurgents.

The tragedy is that Burkina Faso was making progress. Primary enrollment was approaching universal, gender parity was improving, and literacy rates were rising among young cohorts. The insurgency reversed years of gains. Hundreds of thousands of children have missed years of schooling, creating a lost generation without literacy, numeracy, or skills. Even if security improves tomorrow, rebuilding takes decades. Teachers who fled won't return quickly, destroyed schools need reconstruction, and traumatized students need support systems that don't exist. Burkina Faso's education crisis is a security crisis first and a development crisis second—and neither is improving.`

// RWANDA EDUCATION
const RWANDA_EDUCATION = `Rwanda's education transformation is genuinely impressive: the literacy rate climbed from 71% in 2012 to 82.5% in 2024, primary enrollment reached 98%, and the gender gap closed—girls now attend school at the same rates as boys. The government committed to 12 years of basic education for all, enforced mandatory schooling rigorously, and invested heavily in infrastructure and teacher training. The Rwanda Education Board implemented competency-based curricula emphasizing critical thinking over memorization, shifted the language of instruction from French to English (aligning with regional integration), and built thousands of classrooms. The results show political will translating to education progress. But success creates new challenges: quality remains uneven, learning outcomes lag enrollment gains, and higher education struggles with capacity and relevance.

The structural achievements are real. The pupil-teacher ratio in primary schools dropped to 58:1—still high, but improved from over 70:1 a decade ago. The government hired and trained thousands of teachers, deployed them equitably between urban and rural areas, and improved salaries to reduce attrition. Teacher training colleges expanded capacity, and professional development became systematic rather than sporadic. School construction accelerated: the government built thousands of classrooms, ensuring every district has functional primary schools. Infrastructure isn't perfect—rural schools still lack science labs and libraries—but basics like furniture, toilets, and clean water are increasingly standard. Textbook provision improved dramatically, with ratios reaching 1:1 in many schools.

The curriculum shift toward competency-based education is ambitious but implementation struggles. The new curriculum emphasizes understanding, application, and critical thinking rather than rote memorization. Students are assessed on competencies rather than fact recall. This is the right direction, but many teachers were trained in the old system and struggle to adapt. Teaching methods haven't fully changed—classrooms still emphasize teacher-led instruction and memorization, even with the new curriculum. Professional development tries to retrain teachers, but behavior change is slow. Learning outcomes reflect this gap: students perform reasonably on basic literacy and numeracy but struggle with comprehension, problem-solving, and applied knowledge.

The language transition created short-term disruptions. Shifting instruction from French to English required retraining teachers, reprinting textbooks, and adapting curricula. Many teachers lack strong English proficiency themselves, especially those trained before 2008. Students struggle with learning in a language most don't speak at home—Kinyarwanda is universal, but English is foreign. The government maintains Kinyarwanda as the medium for early grades, transitioning to English in upper primary, but the linguistic challenge persists. The shift aligns Rwanda with the East African Community and global English dominance, but execution has been bumpy.

Secondary education expanded rapidly—enrollment reached 60%, up from 35% a decade ago. But quality is uneven. Science and mathematics education suffers because schools lack labs, equipment, and qualified teachers. Examination pass rates improved but remain concerningly low in STEM subjects. The government emphasizes technical and vocational education, building TVET schools to provide practical skills, but enrollment lags because parents still prefer traditional academic pathways. Higher education faces capacity and quality challenges. The University of Rwanda was created by merging several institutions, operates with overcrowded facilities, and produces graduates whose skills don't always match labor market needs. The government emphasizes STEM and technical fields, but humanities and social sciences remain popular despite limited job prospects.

What Rwanda needs now is quality improvement to match access gains. That means completing the competency-based curriculum rollout with genuine pedagogical change, not just policy documents. It requires continued teacher professional development, ensuring science education includes practical lab work, and expanding TVET to provide pathways for students not pursuing university. Higher education needs more funding, better alignment with economic needs, and research capacity building. Rwanda has proven it can achieve rapid education expansion through political will and disciplined execution. The Vision 2050 plan emphasizes knowledge-based economy development, which requires education producing critical thinkers and problem-solvers, not just credential holders. Rwanda is closer than most African countries to achieving that, but the gap between enrollment and learning, between policies and classroom practice, remains. Closing it requires the same discipline and investment that closed the access gap. If any African country can do it, Rwanda's track record suggests it might be the one.`

// BOTSWANA EDUCATION
const BOTSWANA_EDUCATION = `Botswana has a literacy rate of 88.5%—one of Africa's highest—and education outcomes that punch above the country's income level. The government has consistently prioritized education, spending roughly 7% of GDP (well above UNESCO's 4-6% recommendation) and 20% of the national budget. Primary and secondary education are free, enrollment is near universal, and gender parity has been achieved. Infrastructure is solid by regional standards: schools have furniture, textbooks, electricity, and trained teachers. Botswana built an education system that delivers access and basic quality. But here's the problem: the economy is stagnating as diamond revenues decline, youth unemployment exceeds 30%, and universities produce graduates whose skills don't match labor market needs. Botswana succeeds at schooling but struggles with education that leads to employment. The system credentials people without preparing them for productive work.

The structural foundation is strong. Pupil-teacher ratios average 25:1 in primary schools—among the best in Africa—because Botswana invested heavily in teacher training and hiring. Teachers are relatively well-paid, professionally trained, and equitably distributed between urban and rural areas. Infrastructure is maintained: schools have functioning buildings, clean water, toilets, electricity, and textbooks. The curriculum covers standard subjects, examinations are credible, and completion rates are high. Primary school completion exceeds 95%; secondary completion reaches 70%. These are real achievements reflecting decades of sustained investment and political commitment.

But learning outcomes don't match enrollment and completion gains. Botswana participated in the Southern and Eastern Africa Consortium for Monitoring Educational Quality (SACMEQ) assessments, and results were mediocre: students perform below international benchmarks in reading and mathematics. Many complete school without functional literacy or numeracy. The problem isn't access—it's quality. Teaching methods emphasize rote memorization, textbook copying, and exam preparation rather than critical thinking, problem-solving, or creativity. Students can recite facts but struggle to apply knowledge. Science education particularly suffers: labs exist but are underutilized, practical work is minimal, and students learn theory without experimentation.

The curriculum-labor market mismatch is glaring. Botswana's education system was designed for a different economy—one where mining provided steady employment and government absorbed graduates into civil service. That economy is disappearing. Diamond revenues are declining, mining employment is shrinking, and government hiring has frozen. Meanwhile, the economy needs technical skills, entrepreneurship, digital literacy, and adaptability—exactly what the education system doesn't emphasize. Universities produce graduates in humanities and social sciences because those programs are cheap to run, but employers need engineers, technicians, data analysts, and healthcare workers. Youth unemployment exceeds 30% not because jobs don't exist but because graduates lack skills employers need.

Technical and vocational education exists but is underdeveloped and stigmatized. TVET schools offer practical training, but enrollment is low because parents view vocational paths as inferior to university. The government has tried to promote TVET, but cultural preferences for academic credentials persist. Many students pursue university degrees regardless of employment prospects, graduating with debt and no job. The mismatch between education supply and economic demand wastes human capital and public resources.

Higher education expanded rapidly—the University of Botswana, Botswana International University of Science and Technology, and several colleges serve tens of thousands of students. But quality is uneven. Lecture halls are overcrowded, research funding is limited, and degree programs don't always align with economic needs. The new government under Duma Boko promises education reforms emphasizing skills and employability, but translating promises to policy and policy to classroom practice takes years.

What Botswana needs is curriculum reform emphasizing competencies over content, practical application over memorization, and skills over credentials. It needs massive TVET expansion with cultural destigmatization, closer alignment between university programs and labor market needs, and teacher retraining toward active learning methods. The Education and Training Sector Strategic Plan contains these priorities, but implementation is slow. Botswana has the resources, governance capacity, and literacy foundation to fix this—it's not a crisis of state failure like Mali or Chad. It's a challenge of adapting an education system designed for a 20th-century mining economy to a 21st-century economy requiring different skills. Botswana's education system succeeds at access and basic quality; now it must succeed at relevance and outcomes. That requires rethinking what education is for, which is harder than building schools or hiring teachers. But if Botswana maintains political will and couples it with genuine reform rather than rhetorical commitment, it has the foundation to succeed.`

const COUNTRIES = [
  {
    name: 'Tanzania',
    lat: -6.369028,
    lng: 34.888822,
    summary: TANZANIA_EDUCATION,
    chars: TANZANIA_EDUCATION.length
  },
  {
    name: 'Uganda',
    lat: 1.373333,
    lng: 32.290275,
    summary: UGANDA_EDUCATION,
    chars: UGANDA_EDUCATION.length
  },
  {
    name: 'Zimbabwe',
    lat: -19.015438,
    lng: 29.154857,
    summary: ZIMBABWE_EDUCATION,
    chars: ZIMBABWE_EDUCATION.length
  },
  {
    name: 'Cameroon',
    lat: 7.369722,
    lng: 12.354722,
    summary: CAMEROON_EDUCATION,
    chars: CAMEROON_EDUCATION.length
  },
  {
    name: 'Zambia',
    lat: -13.133897,
    lng: 27.849332,
    summary: ZAMBIA_EDUCATION,
    chars: ZAMBIA_EDUCATION.length
  },
  {
    name: 'Mali',
    lat: 17.570692,
    lng: -3.996166,
    summary: MALI_EDUCATION,
    chars: MALI_EDUCATION.length
  },
  {
    name: 'Niger',
    lat: 17.607789,
    lng: 8.081666,
    summary: NIGER_EDUCATION,
    chars: NIGER_EDUCATION.length
  },
  {
    name: 'Chad',
    lat: 15.454166,
    lng: 18.732207,
    summary: CHAD_EDUCATION,
    chars: CHAD_EDUCATION.length
  },
  {
    name: 'Burkina Faso',
    lat: 12.238333,
    lng: -1.561593,
    summary: BURKINA_FASO_EDUCATION,
    chars: BURKINA_FASO_EDUCATION.length
  },
  {
    name: 'Rwanda',
    lat: -1.940278,
    lng: 29.873888,
    summary: RWANDA_EDUCATION,
    chars: RWANDA_EDUCATION.length
  },
  {
    name: 'Botswana',
    lat: -22.328474,
    lng: 24.684866,
    summary: BOTSWANA_EDUCATION,
    chars: BOTSWANA_EDUCATION.length
  }
]

async function addEducationSummaries() {
  console.log('Adding education summaries for 11 African countries (Batch 10 - FINAL)...\n')

  for (const country of COUNTRIES) {
    try {
      await prisma.locationSummary.upsert({
        where: {
          name_type_category: {
            name: country.name,
            type: 'country',
            category: 'education'
          }
        },
        create: {
          name: country.name,
          type: 'country',
          country: country.name,
          lat: country.lat,
          lng: country.lng,
          category: 'education',
          summary: country.summary,
          issues: JSON.stringify([]),
          topStories: JSON.stringify([]),
          storyCount: 0,
          updatedAt: new Date()
        },
        update: {
          summary: country.summary,
          updatedAt: new Date()
        }
      })
      console.log(`✅ ${country.name} education summary saved (${country.chars} characters)`)
    } catch (error) {
      console.error(`❌ Error saving ${country.name}:`, error)
    }
  }

  console.log('\n✅ ALL 11 EDUCATION SUMMARIES COMPLETED!')
  console.log('\n📊 CHARACTER COUNTS:')
  COUNTRIES.forEach(c => {
    console.log(`   ${c.name}: ${c.chars} characters`)
  })
  console.log(`\n🎉 BATCH 10 COMPLETE - THIS CONCLUDES ALL 128 EDUCATION SUMMARIES!`)
}

addEducationSummaries()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
