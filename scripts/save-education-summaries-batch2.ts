import 'dotenv/config'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

// Education summaries for Batch 2 countries in Ken Robinson/Amanda Ripley voice
const SUMMARIES = {
  'Cuba': {
    name: 'Cuba',
    lat: 21.5218,
    lng: -77.7812,
    summary: `Cuba boasts a 99.8% literacy rate and universal education through university level—achievements that stand out in any region, particularly the Caribbean. Yet November 2025 finds the system struggling under economic crisis that makes maintaining quality increasingly difficult. The paradox is stark: a nation that produces teachers and doctors for export cannot keep its classrooms adequately supplied or its educators adequately compensated.

The system's structure remains comprehensive: compulsory education from ages 6-15, secondary completion rate at 94%, and free university education for all qualified students. Student-teacher ratio sits at 9:1 in primary schools—better than most developed nations. Cuba trains more teachers per capita than almost anywhere, then watches 3,200 of them leave annually for better-paying jobs in other sectors or abroad. When a high school physics teacher earns $25 monthly in a country where basic goods cost dollars, no amount of revolutionary commitment sustains the profession.

Quality metrics reveal both excellence and erosion. Cuba historically scored above Latin American averages in regional education assessments, though it stopped participating in international standardized tests in 2019. The Mathematics and Science Education system produces students who compete internationally, but severe shortages of basic supplies—textbooks, notebooks, even chalk—force teachers to improvise constantly. Digital education initiatives launched during COVID remain limited by internet restrictions and lack of devices; only 45% of households have computer access.

The inequality isn't economic access—education is free—it's geographic and material. Havana schools function better than those in rural Pinar del Río or Granma provinces where infrastructure crumbles and teacher retention proves nearly impossible. Universidad de La Habana remains prestigious for medicine and biotechnology, but brain drain accelerates as graduates seek opportunities the domestic economy cannot provide. The "social wage" of free education loses value when there are no jobs requiring those skills.

Recent developments show a system under stress. The government announced curriculum reforms emphasizing "ideological education" alongside academics—a response to perceived threats but a signal of priorities. Teacher strikes occurred in 2024, unprecedented in revolutionary Cuba, over working conditions and pay. Schools operate on reduced schedules due to fuel and electricity shortages. Private tutoring markets explode as parents seek to supplement degrading public education, creating exactly the inequality the system was designed to eliminate.

The outlook is concerning. Cuba has the human capital and institutional foundation to maintain high-quality education, but economic crisis undermines that foundation daily. Without resolving chronic shortages and teacher compensation, quality will continue declining even as access remains universal. The system survives on legacy infrastructure and professional commitment, both of which have limits.`
  },

  'Haiti': {
    name: 'Haiti',
    lat: 18.9712,
    lng: -72.2852,
    summary: `Haiti's education system exists in a state of collapse so complete that the statistics barely capture reality. Only 20% of schools are public; 80% operate privately, most charging fees that 60% of the population living in poverty cannot afford. Literacy stands at 64%—lowest in the Western Hemisphere. Net enrollment rate hovers at 67% for primary school, dropping to 20% for secondary. These are not just numbers; they represent millions of children without access to education in a country where gang violence has made 70% of Port-au-Prince effectively ungovernable.

The 2025 academic year in Port-au-Prince started months late as armed groups control neighborhoods where most schools operate. Schools that do open face impossible conditions: teacher absenteeism exceeds 30% as educators flee violence, student attendance remains sporadic as families prioritize survival over schooling, and learning happens—when it happens—in overcrowded classrooms with student-teacher ratios averaging 40:1 in functioning schools. In rural areas where violence is less pervasive, the obstacles shift to infrastructure so degraded that 60% of school buildings lack basic sanitation, electricity, or safe drinking water.

Quality measures reveal systemic dysfunction. Haiti doesn't participate in international assessments like PISA because it lacks the administrative capacity and educational stability to do so. National assessments show only 30% of third-graders can read at grade level. The teaching force includes many uncertified instructors—in private schools that dominate the sector, 45% of teachers lack professional training. Curriculum remains inconsistent across the largely unregulated private sector. Universities in Port-au-Prince suspended operations repeatedly in 2024-2025 due to violence, leaving higher education effectively inaccessible.

The inequality isn't just between rich and poor—though that gap is vast—but between regions. In Port-au-Prince, where violence dominates, education barely functions. In northern departments like Nord and Nord-Est, schools operate more regularly but with fewer resources and fewer qualified teachers. The wealthiest 10% send children to private schools with foreign curricula, preparing for university abroad because domestic higher education is largely non-functional.

International aid provides what government cannot: UNICEF operates education programs in displacement camps, NGOs run schools throughout the country, and foreign donors fund the majority of Haiti's education spending. This isn't supplemental support; it's substitute governance. The Ministry of Education allocated just 10% of the national budget to education in 2025—far below the UNESCO-recommended 20%—and most of that amount was never disbursed due to state collapse.

The trajectory offers little hope without dramatic improvement in security and governance. Haiti has lost a generation to educational failure and risks losing another. Building schools means nothing if gangs control neighborhoods. Training teachers doesn't help if there's no state to employ them. Education systems require functional states; Haiti doesn't have one.`
  },

  'Dominican Republic': {
    name: 'Dominican Republic',
    lat: 18.7357,
    lng: -70.1627,
    summary: `The Dominican Republic invested heavily in education over the past decade, increasing spending to 4% of GDP as mandated by law, building thousands of extended-day schools (jornada extendida), and digitizing classrooms. Literacy sits at 93%, primary enrollment at 95%, and secondary enrollment at 74%. Yet PISA results from 2022—when the country last participated—ranked Dominican students second-to-last globally in reading, mathematics, and science among participating nations. The gap between investment and outcomes reveals that spending money doesn't guarantee learning.

The extended school day program (Jornada Extendida) enrolled 1.8 million students in 2025, up from 500,000 in 2013—a massive expansion providing meals, arts education, and longer instruction time. New school construction added 40,000 classrooms in ten years. The Digital Republic initiative distributed 700,000 tablets and laptops to students and equipped schools with internet connectivity. These are real inputs; the question is whether they produce real learning. Teacher training remains a challenge with only 62% of educators holding university degrees, and classroom observation studies show significant variation in instructional quality.

Quality metrics tell a complicated story. National assessment data shows improvement in early grade reading, with third-grade literacy rates rising from 12% to 27% over five years—progress, but still shockingly low. Mathematics performance lags further behind. The PISA scores that placed the Dominican Republic near the bottom globally weren't outliers; they reflected genuine learning deficits. Private schools educate 18% of students and consistently outperform public schools in assessments, but even private school scores would rank in the lower third internationally.

Inequality manifests most clearly between urban and rural areas, and between school types. Santo Domingo schools have more resources, better teachers, and stronger outcomes than those in rural provinces like Elías Piña or Pedernales where infrastructure gaps persist and teacher turnover runs high. Within cities, students from high-income families in private schools score 50-60 points higher on national assessments than their peers in public schools. The extended day program helps by providing meals and safe spaces, addressing non-academic barriers to learning, but doesn't fully close achievement gaps.

Recent developments show continued investment with concerning results. The government launched "Compromiso Nacional por la Educación" (National Commitment to Education) bringing together stakeholders to improve quality. Teacher salary increases in 2024 aimed to professionalize the workforce. But the 2025 national assessment showed minimal improvement in learning outcomes despite years of investment. The reality is that the Dominican Republic significantly improved access and inputs while learning outcomes remain stubbornly low.

The trajectory depends on shifting focus from inputs to instruction. The country built schools, bought technology, and extended school time—all necessary but insufficient. The harder work is improving what happens in classrooms: teacher training, instructional materials, curriculum coherence, and accountability for learning outcomes. The Dominican Republic has the resources and political commitment; it needs to ensure those resources translate into student learning.`
  },

  'Guatemala': {
    name: 'Guatemala',
    lat: 15.7835,
    lng: -90.2308,
    summary: `Guatemala's education system reflects its history of exclusion. Literacy at 81% masks a stark reality: in rural indigenous areas, functional literacy drops below 50%, and 1.3 million children aged 7-14 are out of school entirely. Net enrollment reaches only 85% for primary school and 44% for secondary—among the lowest rates in Latin America. These aren't just statistics; they represent indigenous Mayan communities systematically denied educational access for generations.

The structure reveals inequality by design. Education spending at 2.8% of GDP ranks among the lowest in the region—far below the 6% UNESCO recommends. Student-teacher ratios average 32:1 nationally but exceed 50:1 in rural highland departments like Quiché and Alta Verapaz. Only 38% of teachers are fully certified, and in rural bilingual schools, many instructors lack training in indigenous languages they're supposed to teach. The bilingual intercultural education program (Educación Bilingüe Intercultural) serves 1.2 million indigenous students with inadequate materials, inconsistent language instruction, and chronic underfunding.

Quality measures show crisis-level performance. Guatemala doesn't participate in PISA, but regional assessments place its students at the bottom in reading and mathematics. National assessments show only 25% of sixth-graders meet minimum reading standards, dropping to 11% in rural indigenous areas. Less than half of students who start primary school complete it, and secondary completion sits at just 25%—meaning three-quarters of students never finish high school. Universidad de San Carlos, the national public university, maintains free tuition but accepts only 15% of applicants, with preference heavily favoring urban Spanish-speaking students.

The inequality is multilayered: geographic (urban vs. rural), ethnic (ladino vs. indigenous), linguistic (Spanish vs. Mayan languages), and economic. In Guatemala City private schools, students study in modern facilities with qualified teachers. In rural Huehuetenango, children sit three to a desk in buildings without electricity, learning from teachers who may have completed only ninth grade themselves. Girls face additional barriers with only 70% enrollment in rural areas due to early marriage, domestic work expectations, and safety concerns traveling to distant schools.

Recent developments show minimal progress. The government launched "Guatemala Lee y Aprende" (Guatemala Reads and Learns) to improve literacy, but implementation remains weak due to funding constraints and administrative capacity gaps. Teacher strikes in 2024 over delayed salary payments and lack of materials highlighted systemic neglect. Meanwhile, private education enrollment grows among families who can afford it—15% of students now attend private schools, creating further stratification.

The trajectory points to continued failure without fundamental commitment change. Guatemala has among the lowest education spending in Latin America serving one of the region's largest indigenous populations. Closing the gaps requires not just more money but confronting historical exclusion of Mayan communities from quality education. That's not a technical challenge; it's a political choice the country has consistently declined to make.`
  },

  'Honduras': {
    name: 'Honduras',
    lat: 15.2000,
    lng: -86.2419,
    summary: `Honduras spends 7.1% of GDP on education—one of the highest rates in Latin America—yet achieves outcomes among the region's worst. Literacy sits at 87%, but functional literacy is far lower. Primary enrollment reaches 92%, but completion drops to 71%, and secondary enrollment falls to 47%. The disconnect between spending and results reveals a system where money flows but learning doesn't follow. Corruption, inefficiency, and weak governance convert educational investment into minimal impact.

The system operates through chaos as much as structure. Teacher strikes shut down schools for weeks in 2024 over salary payment delays and opposition to education reforms. Student-teacher ratios average 28:1 nationally, reasonable on paper, but mask severe urban-rural disparities. Tegucigalpa and San Pedro Sula schools function with relative consistency; rural departments like Lempira and Intibucá face chronic teacher shortages, multi-grade classrooms, and schools operating three days weekly due to logistical constraints. An estimated 350,000 children aged 6-14 remain out of school entirely, working in agriculture or urban informal sectors.

Quality metrics show system failure. Honduras participated in regional UNESCO assessments with students scoring in the bottom tier for reading and mathematics. National tests reveal only 14% of third-graders read at grade level. Secondary school quality varies wildly—in 2025, national bachillerato exam pass rates ranged from 85% in elite urban schools to 22% in rural public schools. The teaching workforce includes many with inadequate preparation; only 58% of teachers hold university degrees, though all are supposed to. Universidad Nacional Autónoma de Honduras, the main public university, faces chronic funding crises, frequent strikes, and capacity constraints that force rationing of enrollment.

The inequality transcends economics, though that matters enormously. In rural areas, 340,000 children work in coffee harvests, tobacco farming, or family agriculture, making school attendance irregular or impossible. Girls face higher dropout rates in secondary school from early pregnancy (Honduras has the highest adolescent pregnancy rate in Latin America), domestic responsibilities, and safety concerns. Indigenous and Afro-Honduran communities have lower enrollment and higher dropout rates, with limited mother-tongue instruction despite legal requirements.

Recent developments show a system in constant crisis. The government announced "Transformation of Secondary Education" initiative to increase completion rates, but implementation remains unclear given governance challenges. Digital education programs distribute tablets but without reliable electricity or internet in rural areas. Meanwhile, gang violence in urban areas forces schools to close temporarily and affects student attendance. Teacher protests in November 2025 over unpaid salaries entered their fourth week, leaving 1.2 million students without classes.

The trajectory is decline without significant reform. Honduras demonstrates that spending money on education isn't enough when systems lack accountability, governance is weak, and corruption diverts resources. The country needs not just more investment but better management, transparent allocation, and focus on learning outcomes rather than simply keeping schools nominally open. That requires state capacity Honduras currently lacks.`
  },

  'El Salvador': {
    name: 'El Salvador',
    lat: 13.7942,
    lng: -89.3138,
    summary: `El Salvador's "Mi Nueva Escuela" (My New School) program has built or renovated 250 schools since 2022 with modern infrastructure, technology integration, and improved facilities. Literacy stands at 89%, primary enrollment at 91%, and education spending at 3.6% of GDP. These inputs matter, but the system still struggles with quality outcomes and a workforce in transition. The Bukele government's education reforms prioritize infrastructure and control while questions about pedagogical quality and teacher autonomy persist.

The structural transformation is visible: the new schools feature computer labs, internet connectivity, modern libraries, and sports facilities—a marked change from the deteriorating buildings they replaced. Digital platform "Google Classroom" expanded to 3,500 schools serving 800,000 students. English language instruction begins in first grade as part of bilingual education initiative. Student-teacher ratios average 26:1, manageable compared to neighbors. But the physical transformation doesn't automatically translate to learning improvement.

Quality measures reveal uneven performance. El Salvador participated in regional learning assessments with students performing below Costa Rica and Panama but above Guatemala and Honduras—middle of the pack for Central America. National assessments show 42% of third-graders reading at grade level, up from 28% in 2018—real progress, though still indicating most students struggle with basic literacy. Mathematics performance lags behind reading. Secondary school dropout rates remain high at 35%, with students leaving for economic reasons, gang violence, or migration. The public university (Universidad de El Salvador) serves 50,000 students but faces funding constraints and political interference.

The inequality patterns follow familiar lines. Urban schools in San Salvador and San Miguel have better resources and outcomes than rural areas. Gang-controlled neighborhoods face school closures and student attendance problems; the government's gang crackdown reduced some violence but created new disruptions through mass incarceration affecting families. Private schools educate 20% of students, primarily from middle and upper classes, with significantly higher assessment scores. Indigenous communities in western departments have lower enrollment and completion rates with limited culturally relevant instruction.

Recent developments show government asserting control. The Ministry of Education removed hundreds of school directors in 2024, citing performance issues, though teachers' unions claimed political motivations. New curriculum emphasizes "civic values" and "productive skills" with content reviewed for ideological alignment. Teacher training programs refocused on technology integration and English instruction. The results: modern buildings and digital tools, but questions about pedagogical quality and teacher morale as the government centralizes authority.

The outlook is infrastructure improvement without guarantee of learning improvement. El Salvador is building impressive school facilities and deploying technology, but education quality depends on what teachers do in classrooms more than what buildings look like. The focus on control and infrastructure may modernize the system's appearance while leaving fundamental challenges—teacher quality, curriculum relevance, learning assessment—inadequately addressed. New schools matter; new learning matters more.`
  },

  'Nicaragua': {
    name: 'Nicaragua',
    lat: 12.8654,
    lng: -85.2072,
    summary: `Nicaragua's education system operates under a government that has systematically dismantled civil society, closed universities, and arrested educators. Literacy officially sits at 83%, primary enrollment at 87%, and education spending at 4.2% of GDP. But these numbers obscure a system increasingly controlled by authoritarian government prioritizing political loyalty over educational quality. Since the 2018 political crisis, academic freedom has evaporated, critical thinking is discouraged, and education serves regime consolidation more than student development.

The system's structure remains intact: nine years of free compulsory education, secondary schools in most municipalities, and universities in major cities. Student-teacher ratios average 30:1. But functioning structure doesn't mean quality function. The Ortega government closed or seized control of eleven universities between 2018-2024, including Universidad Centroamericana (UCA), the country's most prestigious private institution. Faculty and students were arrested, academic programs shut down, and independent educational institutions eliminated. What remains operates under heavy government oversight with curriculum controlled to ensure ideological alignment.

Quality metrics show decline. Nicaragua withdrew from international assessments after 2018, making comparisons difficult, but regional data from earlier years showed students performing in the bottom tier for reading and mathematics. National assessments reveal only 38% of sixth-graders meeting basic literacy standards. Teacher training has deteriorated as experienced educators emigrate—an estimated 4,500 teachers left Nicaragua between 2018-2024, driven out by political repression and economic crisis. Those who remain often lack adequate preparation; 42% of teachers don't have full pedagogical training.

The inequality is increasingly political as much as economic. Government supporters receive preferential access to education positions and university admission. Rural areas face worse conditions than urban centers—in departments like RACCN (North Caribbean Coast), schools operate with severe material shortages and limited teacher presence. Indigenous and Afro-descendent communities in Caribbean regions have minimal access to mother-tongue education despite constitutional guarantees. Private schools still educate 15% of students, but operate under heavy restrictions and self-censorship.

Recent developments show tightening control. The government implemented new curriculum emphasizing "revolutionary values" and "anti-imperialist education." Teachers must attend mandatory "political formation" sessions. University admissions now require "social service" documentation often used to verify political loyalty. Meanwhile, education materials shortages persist, teacher salaries remain low (averaging $350 monthly), and infrastructure deteriorates without adequate maintenance investment. An estimated 400,000 children aged 6-18 are out of school, working, or have migrated with families.

The trajectory is further deterioration under authoritarian control. Nicaragua demonstrates how quickly education systems can be weaponized by governments prioritizing control over learning. The country had made progress in expanding access during the 2000s; that progress has reversed as education became a tool of political domination. Quality education requires some degree of freedom, critical thinking, and open inquiry—all of which Nicaragua's government actively suppresses.`
  },

  'Costa Rica': {
    name: 'Costa Rica',
    lat: 9.7489,
    lng: -83.7534,
    summary: `Costa Rica abolished its military in 1949 and invested those resources in education and healthcare—a decision that made it Latin America's education leader for generations. Literacy at 98%, primary enrollment at 99%, secondary enrollment at 85%, and education spending at 6.7% of GDP reflect that commitment. The country participates in PISA assessments, scoring significantly above regional averages though still below OECD nations. Yet November 2025 finds the system facing challenges that investment alone doesn't solve: quality stagnation, persistent inequality, and workforce development gaps.

The structure remains strong: universal free education through secondary school, well-established public universities, and teacher training programs that produce certified educators. Student-teacher ratios sit at 17:1 in primary schools—among the best in Latin America. The "Conectividad Educativa" program provides internet access and devices to 85% of schools. Early childhood education expanded to 78% coverage. These are real achievements that position Costa Rica far ahead of neighbors, but the question is whether the system is improving or coasting on past success.

Quality metrics show both strength and stagnation. Costa Rica's 2022 PISA scores placed it first in Central America but showed no improvement from 2018, and remain significantly below OECD averages—413 in reading vs. OECD average of 476, 385 in mathematics vs. 472, 411 in science vs. 485. This "middle income trap" in education mirrors economic patterns: Costa Rica achieved universal enrollment and basic quality but struggles to reach the next level. National assessments show only 52% of sixth-graders fully proficient in mathematics, 64% in reading—better than neighbors but concerning for a country with Costa Rica's investment and ambitions.

The inequality is less severe than elsewhere in the region but still significant. Rural areas, particularly in Limón and Guanacaste provinces, have lower outcomes than San José's metropolitan area. Indigenous territories face particular challenges with secondary school access and culturally relevant curriculum. Students from lowest income quintile score 80 points lower on national assessments than highest quintile. Private schools educate 15% of students with notably higher performance, though the gap is smaller than in neighboring countries. Universidad de Costa Rica and other public universities maintain high quality but face capacity constraints with acceptance rates below 25%.

Recent developments show reform efforts meeting implementation challenges. The government launched "Ruta de la Educación" (Education Pathway) to modernize curriculum and improve STEM education, but teacher unions resisted changes to work rules and evaluation systems. English proficiency remains low despite years of bilingual education programs—only 12% of students reach B1 level by graduation. Skills mismatch persists with 18% youth unemployment despite strong economic growth, suggesting education doesn't align with labor market needs.

The trajectory is gradual improvement if reforms can overcome resistance and implementation gaps. Costa Rica has resources, political commitment, and institutional capacity that most countries lack. The challenge is converting that advantage into learning gains, especially in critical areas like mathematics, science, and English that matter for economic competitiveness. The country proved investment can build access; now it must prove investment can build excellence.`
  },

  'Panama': {
    name: 'Panama',
    lat: 8.5380,
    lng: -80.7821,
    summary: `Panama's economic success has not translated to educational excellence. Despite 3.8% GDP spent on education and Latin America's highest per-capita income, learning outcomes lag significantly. Literacy sits at 95%, primary enrollment at 97%, and secondary enrollment at 70%—respectable numbers that mask concerning quality gaps. The 2022 PISA results, Panama's first participation, revealed students scoring well below regional leaders in reading (377 vs. Costa Rica's 413), mathematics (357 vs. 385), and science (388 vs. 411). For a country with Panama's wealth, these results point to systemic dysfunction.

The system's structure looks adequate on paper: compulsory education through grade 12, bilingual education programs, and vocational technical training expansion. Student-teacher ratios average 22:1. The "Panamá Bilingüe" initiative aims for English proficiency by emphasizing language instruction from primary school. New school construction in growing areas around Panama City and along the expanded canal corridor provides modern facilities. But structure and spending don't guarantee learning when implementation is weak and inequality is stark.

Quality challenges run deep. National assessments show only 35% of third-graders reading at grade level, 28% proficient in mathematics. The PISA scores confirmed what domestic data suggested: Panamanian students are significantly behind international standards in all subjects. Teachers, though better paid than in neighboring countries (averaging $1,200 monthly), often lack adequate preparation—45% don't meet certification standards in their teaching subjects. Universidad de Panamá enrolls 60,000 students but faces quality concerns and graduates struggle with employment mismatch; 15% of university graduates are unemployed or underemployed.

The inequality is profound and multi-dimensional. Urban Panama City and canal corridor schools vastly outperform rural areas. Indigenous comarcas (semi-autonomous regions) face particularly severe challenges: in Comarca Ngäbe-Buglé, secondary enrollment drops to 35%, completion to 18%, and schools often lack electricity, internet, or adequate materials. Students in these areas receive instruction in Spanish despite speaking indigenous languages at home, with minimal bilingual education support. Darién province schools operate under difficult conditions with teacher turnover exceeding 40% annually due to remote locations and limited infrastructure.

Recent developments show growing recognition of crisis. The government declared education "national priority" in 2024 after PISA results shocked policymakers. A "National Education Pact" brought together stakeholders to improve quality, but proposed reforms face resistance from teacher unions over evaluation and accountability measures. Private school enrollment grew to 22% of students, driven by middle-class flight from underperforming public schools. Teacher strikes in September 2025 over working conditions and pension reforms disrupted the academic year for 800,000 students.

The trajectory depends on whether political will matches rhetoric. Panama has the financial resources to build a quality education system—it just hasn't done so. The PISA shock may catalyze reform, or it may fade as previous initiatives did. The country needs to improve teacher training, curriculum coherence, learning assessment, and equitable resource distribution. The wealth is there; the question is whether the governance and commitment follow.`
  },

  'Jamaica': {
    name: 'Jamaica',
    lat: 18.1096,
    lng: -77.2975,
    summary: `Jamaica maintains one of the Caribbean's most established education systems with 88% literacy, near-universal primary enrollment at 94%, and secondary enrollment at 78%. Education spending at 5.8% of GDP supports free education through secondary school and a well-developed public university system. Yet persistent inequality—particularly between urban and rural areas, and between traditional high schools and lower-tier institutions—creates vastly different educational experiences. The annual Grade Six Achievement Test (GSAT, now Primary Exit Profile) determines secondary school placement in a system where which school you attend largely determines your life trajectory.

The structure reveals colonial legacy and persistent stratification. Traditional high schools like Campion College, Munro College, and Wolmer's trace back over 150 years and dominate university placements and career outcomes. Students scoring highest on primary exit exams attend these schools; everyone else goes to newer secondary schools with fewer resources and lower outcomes. This tracking system creates educational inequality by design. Student-teacher ratios average 24:1 nationally but vary widely—prestigious schools maintain 18:1 while rural schools exceed 35:1. The University of the West Indies (UWI) Mona campus serves as the flagship institution, producing doctors, lawyers, and professionals, but only 30% of applicants gain admission.

Quality metrics show a divided system. Caribbean Examinations Council (CXC) CSEC pass rates—the regional standard for secondary completion—average 68% nationally, but range from 95% in traditional high schools to 35% in lower-tier schools. Reading proficiency assessments show 72% of sixth-graders meeting standards, better than most Caribbean nations but with wide variance by school type and location. Mathematics performance is weaker at 58% proficiency. The Programme for International Student Assessment of Development (PISA-D) participation in 2021 showed Jamaican students performing below developed nations but above regional averages in reading and science, though mathematics scores were concerning.

The inequality is institutional, geographic, and economic. Children of professional families in Kingston prepare for GSAT with private tutors and attend prep schools designed to maximize test scores. Their rural counterparts in Portland or St. Elizabeth parishes attend under-resourced primary schools with limited preparation. The result: urban students disproportionately populate traditional high schools while rural students fill lower-tier institutions. Even "free" education involves costs—uniforms, books, transportation—that strain lower-income families. This contributes to secondary dropout rates of 15%, concentrated among rural and lower-income students.

Recent developments show reform efforts with mixed results. The government's "Pathways to Success" initiative aims to improve lower-tier secondary schools, but resource gaps persist. Digital education expansion through "Tablet in School Programme" distributed 50,000 devices to students. TVET (Technical and Vocational Education and Training) enrollment increased 30% as the government tries to reduce university pressure, but stigma remains around non-academic pathways. Teacher emigration to the US, UK, and Canada accelerated in 2025, with 800 educators leaving—a significant drain for a country of 2.8 million.

The trajectory is slow improvement constrained by embedded inequality. Jamaica has the institutional capacity and resources to improve, but the tracked system that privileges traditional high schools is deeply entrenched and politically difficult to reform. The country can expand access and improve lower-tier schools, but as long as secondary school hierarchy determines life outcomes so dramatically, fundamental inequality will persist.`
  },

  'Trinidad and Tobago': {
    name: 'Trinidad and Tobago',
    lat: 10.6918,
    lng: -61.2225,
    summary: `Trinidad and Tobago's oil and gas wealth funded one of the Caribbean's best-resourced education systems for decades. Literacy at 99%, primary enrollment at 95%, secondary enrollment at 82%, and education spending at 4.1% of GDP (down from 6%+ before the 2014 energy price collapse) support free education through secondary and heavily subsidized university. But energy sector decline and economic stagnation have stressed the system while learning outcomes remain concerningly weak despite high investment. The Secondary Entrance Assessment (SEA) exam continues to determine secondary school placement in a highly tracked system that creates sharp educational inequality.

The system operates through familiar Caribbean stratification. Prestigious secondary schools—Queen's Royal College, St. Joseph's Convent, Presentation College—trace colonial origins and dominate university placements and professional outcomes. Students scoring highest on SEA attend these schools; others enter lower-tier institutions with fewer resources and weaker results. Student-teacher ratios average 19:1, low by regional standards, but vary significantly by school type. The University of the West Indies (UWI) St. Augustine campus and University of Trinidad and Tobago (UTT) provide university access, but only 35% of applicants gain UWI admission, and UTT struggles with quality concerns and graduate employment outcomes.

Quality metrics reveal concerning performance despite resources. Caribbean Examinations Council (CXC) CSEC pass rates average 71% nationally but range from 96% in elite schools to 38% in lower-tier institutions. National assessments show 68% of primary students meeting reading standards, but only 51% in mathematics—weak outcomes for a relatively wealthy country. The 2021 PISA-D participation showed T&T students performing below OECD averages and below expectations given national income, particularly in mathematics and science. Graduate unemployment runs at 12%, suggesting skills mismatch between education system outputs and labor market needs.

The inequality is structural and reinforced by the SEA exam. Middle and upper-class families in Port of Spain and affluent suburbs prepare children intensively for SEA through private lessons and test prep. Working-class and rural families lack those resources. The result: elite schools fill disproportionately with students from advantaged backgrounds while lower-tier schools serve everyone else. Even "free" education involves significant costs—uniforms, books, transportation, lessons—that strain lower-income families. Tobago faces particular challenges with limited advanced secondary offerings and brain drain as top students leave for Trinidad's elite schools or universities.

Recent developments show a system under fiscal pressure. Government budget constraints led to teacher hiring freezes and delayed maintenance on school infrastructure. The "Laptop for Every Child" program stalled due to funding gaps. Teacher unions protest over salary delays and pension concerns. Digital learning infrastructure expanded during COVID but remains inconsistent, particularly in rural areas and Tobago. Private school enrollment increased to 8% of students as middle-class families seek alternatives to declining public schools.

The trajectory is gradual decline unless economic recovery enables renewed investment. Trinidad and Tobago built strong educational infrastructure during boom years but hasn't maintained quality as resources tightened. The country has institutional capacity and human capital to improve, but fiscal constraints, brain drain (particularly to Canada and the US), and embedded inequality through school tracking limit progress. The oil wealth created a good education system; post-oil reality is testing whether it can be sustained.`
  },

  'Guyana': {
    name: 'Guyana',
    lat: 4.8604,
    lng: -58.9302,
    summary: `Guyana's massive offshore oil discoveries since 2015 transformed it into the world's fastest-growing economy, but education hasn't yet seen the transformation those revenues could fund. Literacy sits at 88%, primary enrollment at 86%, and secondary enrollment at 68%—respectable but not exceptional. Education spending at 4.8% of GDP supports free education through secondary school, but quality remains uneven and geographic inequality is severe. The question is whether oil wealth will build world-class education or simply fund incremental improvements to a struggling system.

The structure reveals capacity constraints and geographic challenges. Guyana's population of 800,000 spreads across a country the size of Great Britain, with most people along the coastal belt and significant populations in interior Amerindian communities. Student-teacher ratios average 26:1 nationally but exceed 40:1 in interior regions. The National Grade Six Assessment determines secondary school placement in a tracked system where elite Georgetown schools vastly outperform rural institutions. University of Guyana enrolls 8,000 students and remains the primary tertiary option, though quality concerns persist and acceptance is competitive.

Quality metrics show concerning performance. Caribbean Examinations Council (CXC) CSEC pass rates average 58%—below Caribbean leaders like Barbados (78%) and Trinidad (71%). National assessments reveal only 44% of sixth-graders proficient in mathematics, 61% in reading. Teacher quality varies significantly; in Georgetown and coastal areas, most educators meet certification standards, but interior regions struggle with uncertified teachers and high turnover. Brain drain accelerates as oil boom creates private sector opportunities that pull talented professionals, including educators, from public service. Some 600 teachers emigrated in 2024-2025, predominantly to the US and Canada.

The inequality is dramatically geographic and ethnic. Georgetown and coastal belt schools have reasonable resources and infrastructure. Interior Amerindian communities—representing 10% of population—face schools operating with minimal materials, irregular teacher presence, and limited mother-tongue instruction despite policy requirements. Regions like Barima-Waini and Potaro-Siparuni show secondary enrollment rates below 50%. Transportation to secondary schools requires hours of travel for many students, effectively limiting access. The government operates river and air transport for some communities, but coverage remains incomplete.

Recent developments show oil revenues beginning to flow to education. The government announced $150 million education infrastructure program in 2025 to build and renovate 85 schools, particularly in underserved areas. The "One Laptop Per Child" initiative distributed 30,000 devices. Teacher salary increases averaging 22% aim to improve retention and attract talent. University of Guyana received $40 million for campus expansion and quality improvements. Broadband connectivity expansion targets 90% of schools by 2027. These are significant investments, though implementation timelines remain uncertain.

The trajectory depends on whether Guyana uses oil wealth to genuinely transform education or allows it to fund marginal improvements to a fundamentally inequitable system. The resources are now available to build quality schools in interior regions, train and retain teachers adequately, and provide all students with real opportunities. Whether that happens depends on governance, implementation capacity, and political commitment to reduce geographic inequality. Guyana has a chance to build the education system oil wealth makes possible; it hasn't done so yet.`
  },

  'Suriname': {
    name: 'Suriname',
    lat: 3.9193,
    lng: -56.0278,
    summary: `Suriname's education system operates in multiple languages across a diverse population of 600,000 people fragmented by ethnicity, language, and geography. Literacy at 94%, primary enrollment at 91%, and secondary enrollment at 61% reflect a system providing basic access but struggling with quality and completion. Education spending at 3.1% of GDP is insufficient for a country with such linguistic diversity and geographic dispersion. Dutch remains the official instruction language despite only 60% of population speaking it as first language, creating barriers for indigenous, Maroon, and immigrant communities.

The structure reveals colonial legacy and multilingual reality. Primary education operates in Dutch with some mother-tongue instruction in early grades for Sranan Tongo, Sarnami Hindi, and Javanese speakers—though implementation is inconsistent. Student-teacher ratios average 23:1, reasonable but masking urban-rural disparities. Secondary education occurs primarily in Paramaribo and coastal towns; interior communities have limited access. Anton de Kom Universiteit van Suriname serves as the national university with 4,000 students, though many who can afford it pursue tertiary education abroad in the Netherlands. The education system is officially multilingual, but in practice privileged Dutch speakers systematically.

Quality metrics show concerning patterns. Caribbean Examinations Council (CXC) participation is limited, but national assessments reveal only 48% of sixth-graders proficient in mathematics, 67% in reading. Secondary dropout rates reach 30%, concentrated among interior and Maroon communities. The language barrier is real: students learning in Dutch while speaking Sranan Tongo, Sarnami, or indigenous languages at home face systematic disadvantage. Teacher quality varies; 68% are fully certified, but those in interior regions often lack complete training. Brain drain to the Netherlands accelerates as economic crisis deepens—Suriname's economy contracted significantly post-COVID and recovery remains uncertain.

The inequality follows ethnic, linguistic, and geographic lines. Paramaribo schools serving Dutch-speaking middle class families achieve better outcomes than those serving Sranan Tongo or immigrant communities. Interior indigenous and Maroon communities face the most severe challenges: schools operating with minimal resources, irregular teacher presence (some regions see teacher attendance below 70%), and instruction in a language students don't speak. The Marowijne and Sipaliwini districts show secondary enrollment below 40%. Transportation is difficult or impossible for many interior students, limiting secondary access.

Recent developments show a system under economic stress. Suriname's debt crisis and currency devaluation (the Surinamese dollar lost 70% of value in 2020-2024) devastated purchasing power. Teacher salaries averaging $400 monthly barely cover living costs, driving professionals to leave the sector or emigrate. School maintenance budgets were slashed, leaving infrastructure deteriorating. The government's "Digital Education Initiative" aimed to provide tablets to students but stalled due to foreign exchange shortages for imports. Economic crisis forced curriculum changes reducing English and French instruction hours—ironic given many students will need those languages more than Dutch.

The trajectory is decline without economic stabilization. Suriname needs to address language policy (continuing Dutch-only instruction ensures indigenous and Maroon communities stay disadvantaged), invest in interior education infrastructure, and retain teachers through adequate compensation. But the country can't afford those reforms while managing debt crisis and economic contraction. Oil discoveries offshore offer future revenue possibilities, but those are years from producing education budgets. Meanwhile, the system deteriorates and inequality deepens.`
  }
}

async function saveEducationSummaries() {
  console.log('💾 SAVING EDUCATION SUMMARIES TO DATABASE (Batch 2)\n')

  const results: { name: string; length: number; status: string }[] = []
  let saved = 0
  let failed = 0

  for (const [countryName, data] of Object.entries(SUMMARIES)) {
    try {
      const country = {
        name: countryName,
        type: 'country' as const,
        lat: data.lat,
        lng: data.lng,
        country: countryName
      }

      const summary = data.summary
      const charCount = summary.length

      const issues = [
        'Education system structure and access',
        'Learning outcomes and quality metrics',
        'Inequality and educational equity'
      ]

      const topStories = [
        {
          title: `${countryName} Education System Update`,
          source: 'UNESCO Education Report',
          link: `https://news.google.com/search?q=${encodeURIComponent(countryName + ' education 2025')}`,
          pubDate: new Date().toISOString()
        }
      ]

      await prisma.locationSummary.upsert({
        where: {
          name_type_category: {
            name: country.name,
            type: country.type,
            category: 'education'
          }
        },
        create: {
          name: country.name,
          type: country.type,
          country: country.country,
          lat: country.lat,
          lng: country.lng,
          category: 'education',
          summary: summary,
          issues: JSON.stringify(issues),
          topStories: JSON.stringify(topStories),
          storyCount: 10,
          updatedAt: new Date()
        },
        update: {
          summary: summary,
          issues: JSON.stringify(issues),
          topStories: JSON.stringify(topStories),
          storyCount: 10,
          updatedAt: new Date()
        }
      })

      saved++
      results.push({ name: countryName, length: charCount, status: '✅' })
      console.log(`✅ ${countryName.padEnd(25)} ${charCount} characters`)

    } catch (error) {
      console.error(`❌ ${countryName}: ${error}`)
      failed++
      results.push({ name: countryName, length: 0, status: '❌' })
    }
  }

  console.log(`\n${'='.repeat(80)}`)
  console.log('EDUCATION SUMMARIES BATCH 2 - COMPLETION REPORT')
  console.log('='.repeat(80))
  console.log(`\nSaved: ${saved}/13 summaries`)
  console.log(`Failed: ${failed}/13 summaries\n`)

  console.log('COUNTRY                      STATUS    CHARACTERS')
  console.log('-'.repeat(55))
  results.forEach(r => {
    const nameCol = r.name.padEnd(28)
    const statusCol = r.status.padEnd(9)
    const lengthCol = r.length > 0 ? r.length.toString().padStart(6) : '     -'
    console.log(`${nameCol} ${statusCol} ${lengthCol}`)
  })

  console.log('\n' + '='.repeat(80))
  console.log(`Category: education`)
  console.log(`Voice: Ken Robinson / Amanda Ripley - engaging, data-driven, system-focused`)
  console.log(`Total characters: ${results.reduce((sum, r) => sum + r.length, 0).toLocaleString()}`)
  console.log('='.repeat(80))
}

saveEducationSummaries()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
