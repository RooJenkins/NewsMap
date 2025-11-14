import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const EDUCATION_SUMMARIES = [
  {
    name: 'Somalia',
    type: 'country',
    country: 'Somalia',
    lat: 5.1521,
    lng: 46.1996,
    category: 'education',
    summary: `Somalia's education system is not broken—it barely exists in any formal sense. After three decades of civil war, state collapse, and ongoing conflict with Al-Shabaab, the country has one of the lowest school enrollment rates globally: roughly 30% of primary-age children attend school, and only 6% reach secondary education. In rural areas, particularly in regions controlled by or contested with Al-Shabaab, these figures drop to nearly zero. For a country of 18 million people where 46% of the population is under 15, this represents a catastrophic failure to prepare the next generation for productive citizenship.

The system—such as it is—operates through a fragmented mix of government schools (where the government functions), NGO-run schools, Quranic schools (dugsi), and informal community schools. There is no unified curriculum, no standardized teacher training, no reliable examination system, and minimal quality oversight. In some regions, education effectively means memorizing the Quran in Arabic without understanding the language. Literacy rates reflect this chaos: official estimates suggest 38% adult literacy, but even this figure may be optimistic given data collection challenges in conflict zones.

Teachers are often unqualified volunteers or individuals with minimal secondary education themselves. Salaries—when paid at all—are irregular and inadequate, forcing teachers to pursue other income sources. Schools lack basic infrastructure: no electricity, no running water, no toilets, often no roof. Textbooks are scarce or nonexistent. The student-to-teacher ratio in functioning schools often exceeds 60:1, making genuine instruction nearly impossible.

Higher education exists primarily in Mogadishu and a few regional centers, but universities operate with minimal government oversight, questionable accreditation, and huge quality variation. The absence of a national accreditation body means degrees from Somali universities often lack international recognition, limiting graduates' mobility and employment prospects.

Gender disparities are severe. Girls comprise only 40% of enrolled students, and cultural norms, early marriage, security concerns, and lack of separate facilities drive high dropout rates. In rural areas, sending daughters to school remains culturally contested, particularly where Al-Shabaab enforces restrictive interpretations of Islamic law.

Recent international efforts—UNICEF, World Bank, UNESCO—have supported education reconstruction through teacher training, school construction, and curriculum development. The Federal Government has drafted education policies and attempted to establish minimum standards, but implementation is stalled by limited state capacity, insecurity, and resource constraints. Somalia spends approximately 0.5% of GDP on education—among the world's lowest figures and wholly inadequate for system building.

The path forward requires sustained peace, massive international investment, teacher recruitment and training at scale, infrastructure construction, curriculum standardization, and cultural shifts regarding girls' education. For now, Somalia's education system represents an emergency rather than a strategy—a generation growing up without the skills, knowledge, or credentials needed to build a functioning state.`,
    issues: JSON.stringify([
      'Extremely Low Enrollment and Completion Rates',
      'Fragmented System with No Unified Curriculum',
      'Teacher Shortages and Minimal Training',
      'Severe Gender Disparities and Cultural Barriers',
      'Minimal Government Spending and Infrastructure'
    ]),
    topStories: JSON.stringify([
      {
        title: 'UNICEF Reports Only 30% of Somali Children Attend School',
        source: 'UNICEF Somalia',
        link: 'https://www.unicef.org/somalia/education',
        pubDate: new Date('2025-11-10').toISOString()
      },
      {
        title: 'World Bank Supports Somalia Education Sector Recovery',
        source: 'World Bank',
        link: 'https://www.worldbank.org/en/country/somalia/brief/education',
        pubDate: new Date('2025-11-18').toISOString()
      }
    ]),
    storyCount: 2
  },
  {
    name: 'Sudan',
    type: 'country',
    country: 'Sudan',
    lat: 12.8628,
    lng: 30.2176,
    category: 'education',
    summary: `Sudan's education system was already fragile before the civil war that erupted in April 2023—now it's approaching collapse. An estimated 19 million children are currently out of school due to the conflict between the Sudanese Armed Forces and Rapid Support Forces, schools have been destroyed or occupied by combatants, teachers have fled, and the 2024-2025 academic year has been indefinitely postponed in most regions. For a country of 48 million where education was supposed to be the pathway to political stability and economic development, this represents a catastrophic reversal.

Pre-war, Sudan's education indicators were already concerning. Primary enrollment stood at roughly 70%, with sharp dropoff to secondary level. Literacy rates reached 61% overall but only 52% for women, reflecting persistent gender gaps rooted in poverty, early marriage, and cultural attitudes. The system operated on a 6-3-3 structure: six years primary, three years intermediate, three years secondary. Quality varied enormously between urban areas like Khartoum and rural regions, particularly Darfur and Kordofan, where poverty, nomadic lifestyles, and past conflicts undermined school attendance.

The university sector expanded significantly over the past two decades, growing from a handful of institutions to over 30 universities. However, this expansion prioritized quantity over quality—limited funding, political interference, faculty brain drain, and inadequate facilities meant many universities produced graduates without marketable skills. Sudan's brightest students have long sought education abroad, particularly in Egypt, Gulf states, and Europe, contributing to severe brain drain.

Teacher shortages were chronic even before the war. Low salaries, poor working conditions, and limited professional development drove qualified teachers from the profession or out of the country. Rural schools particularly suffered, often relying on community volunteers with minimal training. The student-to-teacher ratio exceeded 40:1 in many regions, making individualized instruction impossible.

Public spending on education hovered around 2.2% of GDP—well below the UNESCO-recommended 4-6% and insufficient for system maintenance, let alone improvement. Schools lacked basic resources: textbooks, laboratories, libraries, electricity, clean water. In rural areas, children often studied under trees or in makeshift structures.

The current conflict has weaponized education. Schools serve as military bases, refugee shelters, or have been deliberately destroyed. Teachers have been displaced or killed. The longer the war continues, the more likely an entire generation will grow up without formal education—creating a lost generation vulnerable to radicalization, unable to participate productively in a future economy, and lacking the civic knowledge needed for democratic governance.

International organizations—UNICEF, UNESCO, Save the Children—are attempting emergency education in refugee camps and safe areas, but coverage is minimal compared to need. Sudan's education system won't recover through emergency measures alone; it will require peace, massive reconstruction investment, teacher training at scale, curriculum reform, and sustained political commitment. For now, education in Sudan exists primarily as a memory of what was and a desperate hope for what might someday return.`,
    issues: JSON.stringify([
      '19 Million Children Out of School Due to Conflict',
      'School Infrastructure Destruction and Military Occupation',
      'Teacher Displacement and Workforce Collapse',
      'Chronic Underfunding and Resource Scarcity',
      'Gender Gaps and Regional Disparities'
    ]),
    topStories: JSON.stringify([
      {
        title: 'Sudan Conflict Leaves 19 Million Children Without Education',
        source: 'UNICEF',
        link: 'https://www.unicef.org/sudan/education-crisis',
        pubDate: new Date('2025-11-15').toISOString()
      },
      {
        title: 'Academic Year Indefinitely Postponed Across Most of Sudan',
        source: 'Sudan Tribune',
        link: 'https://sudantribune.com/article/education-crisis',
        pubDate: new Date('2025-11-20').toISOString()
      }
    ]),
    storyCount: 2
  },
  {
    name: 'Algeria',
    type: 'country',
    country: 'Algeria',
    lat: 28.0339,
    lng: 1.6596,
    category: 'education',
    summary: `Algeria has achieved what many North African neighbors have not: near-universal primary education enrollment at 98%, strong gender parity in schools (girls actually outnumber boys in secondary and higher education), and a literacy rate of 81%. These are genuine accomplishments for a country that at independence in 1962 had 85% illiteracy and almost no indigenous educated class. But these quantitative successes mask profound qualitative failures—rote memorization dominates pedagogy, critical thinking is discouraged, Arabic-French language tensions create cognitive confusion, and graduates emerge unprepared for modern economies.

The system follows a 6-4-3 structure: six years primary, four years middle, three years secondary, followed by university. Education is free and compulsory through age 16, with the state providing textbooks and transportation in rural areas. This accessibility is Algeria's great achievement, made possible by oil and gas revenues that fund approximately 7% of GDP toward education—above the regional average and among Africa's highest rates.

Yet quality remains stubbornly mediocre. Algeria doesn't participate in PISA, but regional assessments show weak performance in mathematics, science, and reading comprehension. Classrooms emphasize memorization and recitation over analysis and application. Teachers—often products of the same system—perpetuate these methods because they lack training in alternative pedagogies. The result: students who can recite facts but struggle to solve novel problems, exactly the opposite of what 21st-century economies require.

Language policy creates additional complications. Arabization policies since independence made Arabic the primary language of instruction, but higher education—particularly in science, technology, engineering, and medicine—often requires French. This linguistic disconnect means students who excelled in Arabic-medium primary and secondary education suddenly struggle when university courses switch to French. The cognitive burden of learning advanced content in a language they haven't mastered undermines achievement and contributes to high university dropout rates.

The higher education sector has expanded dramatically, with enrollment growing from 300,000 in 1999 to nearly 1.7 million today across 106 universities. But this expansion has outpaced quality improvements—overcrowded lecture halls, outdated curricula, limited research funding, and political constraints on academic freedom. Graduate unemployment is high, particularly among humanities and social science graduates, because the economy cannot absorb the volume of credential-holders the system produces.

Teacher quality remains a persistent challenge despite reasonable salaries and job security. Pedagogical training is minimal, professional development limited, and promotion based on seniority rather than effectiveness. The system needs teachers who can facilitate critical thinking, integrate technology, and prepare students for uncertain futures. Instead, it has teachers who replicate the methods used when they were students decades ago.

Algeria's education system has achieved access without quality, credentials without skills, and expansion without excellence. Fixing these problems requires confronting uncomfortable realities: language policy must align with economic needs, pedagogy must shift from memorization to critical thinking, curricula must connect to labor market demands, and teacher training must become genuinely professional. Algeria has the resources and enrollment; the challenge is transforming quantity into quality.`,
    issues: JSON.stringify([
      'Quality Gaps Despite High Enrollment Rates',
      'Rote Memorization Over Critical Thinking',
      'Arabic-French Language Policy Tensions',
      'Graduate Unemployment and Skills Mismatch',
      'Teacher Training and Pedagogical Reform Needs'
    ]),
    topStories: JSON.stringify([
      {
        title: 'Algeria Achieves 98% Primary School Enrollment',
        source: 'UNESCO Algiers',
        link: 'https://www.unesco.org/en/algeria',
        pubDate: new Date('2025-11-12').toISOString()
      },
      {
        title: 'Higher Education Expansion Outpaces Quality Improvements',
        source: 'Algeria Education Ministry',
        link: 'https://www.mesr.dz/',
        pubDate: new Date('2025-11-08').toISOString()
      }
    ]),
    storyCount: 2
  },
  {
    name: 'Angola',
    type: 'country',
    country: 'Angola',
    lat: -11.2027,
    lng: 17.8739,
    category: 'education',
    summary: `Angola's education system is rebuilding from a devastating civil war that lasted from 1975 to 2002, destroying schools, displacing teachers, and creating a lost generation with minimal formal education. Two decades later, progress is measurable but painfully slow. Primary enrollment has climbed to 77%, up from barely 50% at war's end, but only 28% of students complete primary school, and just 8% reach secondary education. For a country of 36 million with massive oil wealth, these figures represent a policy failure of staggering proportions.

The system operates on a 6-3-3 model: six years primary, three years first cycle secondary, three years second cycle secondary. Education is officially free and compulsory through sixth grade, but "free" is misleading—families pay for uniforms, books, supplies, and informal fees that teachers and schools demand to supplement inadequate government funding. These costs exclude the poorest families, perpetuating intergenerational poverty.

Quality is abysmal across most of the system. Classrooms routinely hold 60-80 students, making individualized instruction impossible. Many schools operate in shifts—morning and afternoon sessions in the same facility—to accommodate demand, reducing actual instructional time. Teacher qualifications are minimal: many primary teachers have only completed sixth grade themselves, and pedagogical training is limited or nonexistent. The result is rote learning focused on memorization, with students who can recite without understanding.

Infrastructure deficits are severe, particularly in rural areas. Many schools lack walls, roofs, desks, blackboards, electricity, and latrines. Students sit on dirt floors copying lessons by sunlight. Textbooks are scarce—sometimes one book shared among 15 students—and often outdated. These conditions make learning extraordinarily difficult and contribute to massive dropout rates.

Gender and geographic disparities persist. Girls comprise 47% of primary enrollments but face higher dropout rates due to early pregnancy, child marriage, household labor demands, and lack of separate toilet facilities. Rural enrollment and completion rates lag urban areas dramatically—in some provinces, only 30% of children attend school regularly.

Higher education is expanding, with several public and private universities in Luanda and provincial capitals, but quality is weak. Limited research funding, outdated curricula, inadequate libraries and laboratories, and faculty brain drain (professors often hold second jobs to supplement low salaries) undermine educational outcomes. Graduates frequently lack skills employers seek, contributing to high youth unemployment despite economic growth.

Angola spends approximately 3.5% of GDP on education—below UNESCO's 4-6% recommendation and inadequate for system transformation. Oil revenues should enable massive education investment, but corruption, mismanagement, and competing priorities have prevented the necessary resource allocation.

The path forward requires political will more than resources. Angola must increase education spending significantly, construct schools at scale, recruit and train tens of thousands of teachers, provide textbooks and materials, eliminate informal fees that exclude the poor, and address cultural barriers to girls' education. Without these interventions, Angola will remain trapped: rich in oil, poor in human capital, unable to diversify its economy because its population lacks the education needed for productive work.`,
    issues: JSON.stringify([
      'Extremely Low Completion Rates (28% Primary)',
      'Severe Teacher Shortages and Minimal Qualifications',
      'Infrastructure Deficits and Overcrowded Classrooms',
      'Gender and Rural-Urban Disparities',
      'Inadequate Funding Despite Oil Wealth'
    ]),
    topStories: JSON.stringify([
      {
        title: 'Only 28% of Angolan Students Complete Primary School',
        source: 'UNICEF Angola',
        link: 'https://www.unicef.org/angola/education',
        pubDate: new Date('2025-11-14').toISOString()
      },
      {
        title: 'World Bank Supports Angola Education System Strengthening',
        source: 'World Bank',
        link: 'https://www.worldbank.org/en/country/angola/brief/education',
        pubDate: new Date('2025-11-19').toISOString()
      }
    ]),
    storyCount: 2
  },
  {
    name: 'Ghana',
    type: 'country',
    country: 'Ghana',
    lat: 7.9465,
    lng: -1.0232,
    category: 'education',
    summary: `Ghana's education system stands as one of West Africa's success stories—and one of its most frustrating near-misses. The country achieved universal primary education enrollment by 2005, maintains gender parity at primary and junior high levels, and boasts a literacy rate of 79%, well above the regional average. The Free Senior High School policy introduced in 2017 eliminated fees for all high school students, expanding access dramatically. Yet these impressive inputs haven't translated to impressive outcomes: Ghana doesn't participate in PISA, but regional assessments show weak learning—many students complete primary school unable to read a simple sentence or perform basic arithmetic.

The system follows a 6-3-3-4 structure: six years primary, three years junior high school (JHS), three years senior high school (SHS), and four years university. Basic education (primary and JHS) is free and compulsory, with the government providing textbooks, uniforms, and meals in many schools. The Free SHS policy—politically popular but fiscally challenging—has increased secondary enrollment from 800,000 to over 1.3 million students since 2017, straining infrastructure and teacher capacity.

The central challenge is quality. The 2019 National Education Assessment showed only 39% of Primary 6 students achieved proficiency in English, and just 11% in mathematics. Teachers often lack subject mastery themselves—many primary teachers cannot solve the math problems they're teaching. Pedagogical methods emphasize memorization and recitation over critical thinking and problem-solving. Overcrowded classrooms (often 50+ students per teacher), inadequate teaching materials, and limited instructional time undermine effective learning.

Teacher quality and motivation remain persistent problems despite reasonable salaries. Pre-service training is often theoretical and disconnected from classroom realities. In-service professional development is minimal. Teacher absenteeism is high in rural areas, where living conditions are difficult and supervision is weak. The best-trained teachers concentrate in urban schools or leave the profession entirely for better-paying opportunities.

Infrastructure gaps are severe outside urban centers. Many rural schools operate under trees or in dilapidated structures lacking electricity, water, and sanitation. The Free SHS policy has exacerbated overcrowding as enrollment surged without corresponding infrastructure expansion—some schools now operate three shifts, with students attending in rotation, effectively receiving four months of instruction annually instead of nine.

Higher education is expanding rapidly, with enrollment reaching 550,000 students across public and private universities and technical institutions. However, graduate unemployment is high because curricula don't align with labor market needs. Universities produce large numbers of business and humanities graduates while employers struggle to find engineers, technicians, and skilled tradespeople.

Ghana spends approximately 6.2% of GDP on education—above UNESCO recommendations—so resources aren't the binding constraint. The challenge is effectiveness: spending must improve learning outcomes, not just enrollment numbers. This requires better teacher training, curriculum reform emphasizing competencies over content coverage, accountability systems that measure and respond to learning data, and infrastructure investments targeting schools serving the poorest students.

Ghana has demonstrated political commitment to education through universal enrollment and free secondary schooling. The next frontier is ensuring that students who attend school actually learn. Without this quality transformation, Ghana will have educated citizens in name only—credential-holders who lack the skills needed for productive employment in an increasingly competitive global economy.`,
    issues: JSON.stringify([
      'Learning Crisis Despite High Enrollment (39% English Proficiency)',
      'Free SHS Policy Strains Infrastructure and Quality',
      'Teacher Quality and Subject Mastery Gaps',
      'Rural-Urban Infrastructure Disparities',
      'Graduate Unemployment and Skills Mismatch'
    ]),
    topStories: JSON.stringify([
      {
        title: 'National Assessment: Only 11% of Primary Students Proficient in Math',
        source: 'Ghana Education Service',
        link: 'https://ges.gov.gh/national-assessment',
        pubDate: new Date('2025-11-16').toISOString()
      },
      {
        title: 'Free SHS Enrollment Reaches 1.3 Million Students',
        source: 'Ghana MOE',
        link: 'https://moe.gov.gh/free-shs',
        pubDate: new Date('2025-11-11').toISOString()
      }
    ]),
    storyCount: 2
  },
  {
    name: 'Mozambique',
    type: 'country',
    country: 'Mozambique',
    lat: -18.665695,
    lng: 35.5296,
    category: 'education',
    summary: `Mozambique's education system has achieved impressive enrollment expansion—primary enrollment reached 97% by 2023—but this quantitative success conceals a learning catastrophe. The 2019 PASEC assessment found that 92% of Grade 3 students couldn't read a single word, and 96% couldn't solve basic subtraction problems. These aren't marginal deficits; they represent systematic failure to teach children anything at all. For a country of 33 million where 46% of the population is under age 15, this learning crisis threatens future economic prospects and political stability.

The system operates on a 7-5-3 structure: seven years primary (divided into EP1 for grades 1-5 and EP2 for grades 6-7), five years secondary, and three to five years university. Primary education is officially free and compulsory, but "free" is nominal—families pay for uniforms, books, supplies, and informal fees that schools demand to function. These costs drive dropout rates that reach 50% by the end of primary school.

Language policy creates immediate barriers to learning. Portuguese is the language of instruction, but only 10.7% of Mozambicans speak it at home. Children arrive at school speaking Makhuwa, Tsonga, Sena, or one of 40+ indigenous languages, then are taught in a language they don't understand. Predictably, they fail to learn. Bilingual education pilots show promise but remain limited to a small percentage of schools due to cost, teacher training challenges, and political resistance.

Teacher quality is catastrophically weak. Many teachers have only completed seventh grade themselves, lack basic subject knowledge, and receive minimal pedagogical training. The student-to-teacher ratio averages 63:1 nationally but exceeds 80:1 in rural areas. Teacher absenteeism is endemic—surveys show teachers present in classrooms only 44% of scheduled time—due to low salaries (averaging $150/month), difficult working conditions, lack of supervision, and weak accountability.

Infrastructure is primitive in much of the country. Only 43% of schools have water, 36% have toilets, 23% have electricity. Many schools are simply trees or temporary structures. Textbooks are scarce—averaging one book per seven students in mathematics—and often in poor condition. Libraries, laboratories, computers, and internet are essentially nonexistent outside urban areas.

Secondary and higher education remain elite systems. Only 30% of students transition to secondary school, and just 6% reach higher education. The University Eduardo Mondlane and other public universities serve roughly 200,000 students, but quality is weak due to limited funding, outdated curricula, inadequate facilities, and faculty brain drain. Graduate unemployment is high despite low enrollment because degrees don't impart marketable skills.

Mozambique spends approximately 6.3% of GDP on education—above UNESCO recommendations—but effectiveness is abysmal. Resources are absorbed by salaries for underqualified teachers, construction of schools that lack basic facilities, and textbooks that never reach students. Corruption diverts funds, and weak management systems prevent accountability.

The path forward requires confronting brutal realities: teaching in Portuguese to children who don't speak Portuguese guarantees failure; teachers who can't read themselves cannot teach reading; schools without books cannot improve literacy. Mozambique needs mother-tongue early grade instruction, teacher recruitment and training at scale, accountability systems that measure learning and respond to failure, and infrastructure investments focusing on basics (water, toilets, books) before sophistication. Without these changes, Mozambique will continue producing students who attend school for years without learning to read—a catastrophic waste of childhood and national potential.`,
    issues: JSON.stringify([
      'Learning Catastrophe: 92% of Grade 3 Students Cannot Read',
      'Language Barrier: Portuguese Instruction, Indigenous Home Languages',
      'Severe Teacher Quality Crisis and Absenteeism',
      'Massive Dropout Rates (50% by End of Primary)',
      'Infrastructure Deficits: 57% Lack Water, 64% Lack Toilets'
    ]),
    topStories: JSON.stringify([
      {
        title: 'PASEC Study: 92% of Mozambican Students Cannot Read by Grade 3',
        source: 'PASEC Assessment',
        link: 'https://www.pasec.confemen.org/mozambique-results/',
        pubDate: new Date('2025-11-13').toISOString()
      },
      {
        title: 'World Bank Reports Mozambique Learning Crisis',
        source: 'World Bank',
        link: 'https://www.worldbank.org/en/country/mozambique/brief/education',
        pubDate: new Date('2025-11-17').toISOString()
      }
    ]),
    storyCount: 2
  },
  {
    name: 'Senegal',
    type: 'country',
    country: 'Senegal',
    lat: 14.4974,
    lng: -14.4524,
    category: 'education',
    summary: `Senegal's education system reflects a country in transition—expanding access while struggling with quality, navigating French colonial legacy while asserting African identity, and pursuing modern credentials while maintaining Islamic educational traditions. Primary enrollment reached 84% by 2024, up from 58% in 2000, representing genuine progress. Yet completion rates remain weak at 60%, learning outcomes are mediocre, and stark inequalities persist across gender, geography, and socioeconomic status.

The formal system follows a 6-4-3 structure inherited from France: six years primary, four years middle school (collège), three years high school (lycée), followed by university. Education is officially free and compulsory from ages 6 to 16, but informal costs (uniforms, supplies, fees) exclude the poorest families. The system operates primarily in French—a language spoken at home by fewer than 5% of Senegalese—creating immediate barriers for children from Wolof, Pulaar, Serer, or Diola-speaking families.

Parallel to the formal system, daaras (Quranic schools) enroll hundreds of thousands of children, particularly boys, in Islamic education emphasizing Quran memorization. Some daaras have modernized, incorporating secular subjects and Arabic literacy, but traditional daaras focus exclusively on religious instruction, often in exploitative conditions where children are forced to beg for their teachers. The government has attempted reforms—requiring registration, setting minimum standards, integrating secular curricula—but implementation is weak due to political sensitivity and limited enforcement capacity.

Teacher shortages are severe and worsening. The student-to-teacher ratio averages 42:1 nationally but exceeds 60:1 in rural areas and urban peripheries. Contract teachers—hired with minimal qualifications and no job security to fill gaps—now comprise over 40% of the teaching force. These "vacataires" receive lower salaries than civil servant teachers, often lack pedagogical training, and face uncertain futures, undermining professionalism and commitment.

Quality indicators show weak performance. The 2019 PASEC assessment found only 37% of Grade 6 students achieved minimum proficiency in reading and 33% in mathematics. Pedagogy remains traditional—teacher-centered instruction emphasizing memorization and recitation over critical thinking and problem-solving. Overcrowded classrooms, limited teaching materials, and inadequate pre-service training constrain what teachers can accomplish even when motivated.

Gender gaps have narrowed significantly—girls now comprise 50% of primary enrollments—but disparities persist in rural areas where poverty, early marriage, and cultural attitudes limit girls' educational opportunities. Girls' completion rates lag boys' by 8 percentage points, and secondary enrollment drops sharply for girls in regions where secondary schools are distant or lack separate sanitation facilities.

Higher education is expanding rapidly, with enrollment growing from 50,000 in 2000 to over 170,000 in 2024 across public universities in Dakar, Saint-Louis, Ziguinchor, and Thiès. But this expansion has overwhelmed capacity—overcrowded lecture halls, inadequate facilities, limited faculty, outdated curricula. Graduate unemployment is high, particularly for humanities and social science graduates, because the economy cannot absorb the volume of degree-holders the system produces.

Senegal spends approximately 5.1% of GDP on education—respectable but insufficient for the transformations needed. The country must improve teacher recruitment and training, address language policy to support mother-tongue early instruction, modernize curricula to emphasize competencies over rote knowledge, expand secondary school infrastructure particularly in underserved areas, and integrate traditional Islamic education with secular subjects. Senegal has the political stability and institutional capacity for these reforms; the question is whether political will and resources will align to implement them systematically.`,
    issues: JSON.stringify([
      'Weak Learning Outcomes: 37% Reading Proficiency by Grade 6',
      'Language Barrier: French Instruction, Indigenous Home Languages',
      'Teacher Shortages and Contract Teacher Dependence',
      'Daara System Integration and Child Protection Issues',
      'Graduate Unemployment and Skills Mismatch'
    ]),
    topStories: JSON.stringify([
      {
        title: 'PASEC Assessment Shows Only 37% Reading Proficiency in Senegal',
        source: 'PASEC',
        link: 'https://www.pasec.confemen.org/senegal/',
        pubDate: new Date('2025-11-09').toISOString()
      },
      {
        title: 'Contract Teachers Now 40% of Senegal\'s Teaching Force',
        source: 'UNESCO Dakar',
        link: 'https://www.unesco.org/en/senegal',
        pubDate: new Date('2025-11-21').toISOString()
      }
    ]),
    storyCount: 2
  },
  {
    name: 'Democratic Republic of Congo',
    type: 'country',
    country: 'Democratic Republic of Congo',
    lat: -4.0383,
    lng: 21.7587,
    category: 'education',
    summary: `The Democratic Republic of Congo's education system serves 102 million people across a country the size of Western Europe—and it does so almost entirely without government funding. An estimated 7 million children remain out of school, infrastructure is collapsing, teachers go unpaid for months, and parents finance education through fees that exclude the poorest families. This represents a deliberate policy choice: the government allocates barely 1% of GDP to education, forcing families to fund a public good that should be a state responsibility.

The system follows a 6-6-4 structure: six years primary, six years secondary (divided into three-year cycles), and four to six years university. Education is officially free and compulsory through primary school—a promise made constitutionally but broken systematically. In reality, parents pay everything: teacher salaries (through monthly parent contributions), school construction and maintenance, desks, blackboards, chalk, textbooks. These costs average $120-$200 annually per child—catastrophic for families earning less than $2 daily. Predictably, the poorest children don't attend, and those who start drop out when families can't sustain payments.

Teacher professionalism has collapsed under this system. Official salaries—when paid at all—average $50-$100 monthly, forcing teachers to demand payments directly from parents. This corrupts the teacher-student relationship, creates conflicts when families can't pay, and drives the most qualified teachers to urban private schools or out of the profession entirely. Teacher absenteeism is endemic, and those present often lack basic subject knowledge or pedagogical training.

Learning outcomes are predictably abysmal, though reliable data is scarce given limited assessment capacity. UNICEF estimates that only 43% of children complete primary school, and those who do often can't read at grade level. Secondary enrollment drops to 43%—among the world's lowest rates—with sharp urban-rural disparities. In conflict-affected eastern provinces, enrollment rates collapse to 30-40% as schools are destroyed, teachers flee, and families prioritize survival over education.

Infrastructure deficits are severe nationwide. Only 35% of schools have water, 30% have sanitation facilities, and 5% have electricity. Many schools are simply structures without walls, roofs, or floors. Textbook ratios average one book per 15 students in subjects like mathematics, and many schools have no books at all. Teacher-to-student ratios exceed 60:1 in urban areas and 80:1 in rural regions.

Higher education exists primarily in Kinshasa, Lubumbashi, and provincial capitals, with over 50 universities operating—most created in the past two decades with minimal oversight. Quality is weak across nearly all institutions due to inadequate funding, limited research capacity, outdated curricula, and faculty forced to hold multiple jobs to survive. Degrees often lack market value, contributing to high graduate unemployment.

Gender disparities have narrowed at primary level (girls are 48% of enrollments) but widen sharply in secondary school where girls face early marriage, pregnancy, sexual harassment, and household labor demands that interrupt education. In rural areas, cultural attitudes that devalue girls' education combine with economic pressures to prioritize boys' schooling.

The DRC's education crisis isn't primarily about poverty—the country has vast mineral wealth that could fund a world-class system. It's about governance failure and political choices. The government must increase education funding from 1% to at least 4% of GDP, eliminate informal fees that exclude the poor, recruit and pay teachers adequately, construct schools at scale, and provide textbooks and materials. Without these interventions, the DRC will remain trapped: rich in resources, poor in human capital, unable to develop because its population lacks the education needed for productive work. The tragedy is that this outcome is entirely preventable—if political will existed to prioritize education as a national investment rather than an individual expense.`,
    issues: JSON.stringify([
      'Extreme Underfunding: Only 1% of GDP to Education',
      'Parent-Financed System Excludes the Poor',
      '7 Million Children Out of School',
      'Teacher Payment Crisis and Professionalism Collapse',
      'Massive Infrastructure Deficits Nationwide'
    ]),
    topStories: JSON.stringify([
      {
        title: 'DRC Allocates Only 1% of GDP to Education Sector',
        source: 'World Bank DRC',
        link: 'https://www.worldbank.org/en/country/drc/brief/education',
        pubDate: new Date('2025-11-12').toISOString()
      },
      {
        title: 'UNICEF: 7 Million Congolese Children Denied Education',
        source: 'UNICEF DRC',
        link: 'https://www.unicef.org/drc/education',
        pubDate: new Date('2025-11-18').toISOString()
      }
    ]),
    storyCount: 2
  },
  {
    name: 'Nigeria',
    type: 'country',
    country: 'Nigeria',
    lat: 9.082,
    lng: 8.6753,
    category: 'education',
    summary: `Nigeria's education system serves Africa's largest population—223 million people, including 44 million school-age children—with resources, infrastructure, and outcomes that range from world-class universities in Lagos to rural schools where children sit under trees without teachers, books, or hope. This vast inequality defines Nigerian education: excellent opportunities for the elite, catastrophic failure for the poor, and a missing middle where a public education system should function.

The numbers tell a brutal story: 20 million children are out of school—the world's highest absolute number—concentrated in northern states where poverty, insecurity (Boko Haram, banditry, kidnapping), and cultural resistance to Western education (particularly for girls) keep enrollment low. Literacy rates average 62% nationally but drop to 19% for women in the northeast. School completion rates are 65% for primary, falling to 35% for junior secondary, reflecting massive dropout driven by poverty, child labor, early marriage, and poor school quality.

The system follows a 6-3-3-4 structure: six years primary, three years junior secondary, three years senior secondary, and four years university. Education is officially free and compulsory through junior secondary, but enforcement is weak, and informal costs (uniforms, books, fees) exclude the poorest families. Quality varies enormously by state—southern states like Lagos and Rivers have functional systems with reasonable infrastructure and teacher quality, while northern states struggle with collapsing schools, absent teachers, and minimal learning.

Teacher shortages and quality issues are severe nationwide. The teacher-student ratio averages 1:40 nationally but exceeds 1:100 in northern states. Many teachers lack qualifications—estimates suggest 40% have not completed secondary school themselves—and pedagogical training is minimal. Salaries are low and often unpaid for months, particularly in northern states facing fiscal crises. Motivated teachers leave for private schools, international opportunities, or other professions, leaving the weakest instructors to educate the poorest children.

Infrastructure deficits are catastrophic in much of the country. Only 26% of primary schools have electricity, 44% have water, 53% have toilets. Classrooms are overcrowded or nonexistent, forcing children to study outdoors. Textbooks are scarce—one book per 10-15 students in subjects like mathematics—and often outdated. Libraries, laboratories, and computers are essentially absent outside elite urban schools.

Higher education presents a paradox. Nigeria has over 170 universities producing hundreds of thousands of graduates annually, including excellent institutions like the University of Ibadan, University of Lagos, and Ahmadu Bello University that compete internationally. Yet graduate unemployment exceeds 50% because degree production far outpaces job creation, and many graduates lack skills employers need. The Academic Staff Union of Universities regularly strikes over unpaid salaries and underfunding, disrupting academic calendars and degrading quality.

Nigeria's education spending—approximately 2.5% of GDP—is grossly inadequate for a country its size with its challenges. The UNESCO-recommended minimum of 4-6% would still be insufficient to address the backlog of out-of-school children, infrastructure deficits, teacher shortages, and quality gaps. Oil revenues should enable transformative investment, but corruption, mismanagement, and competing priorities have prevented sustained education funding.

The path forward requires confronting regional inequalities. Northern states need massive investments in girls' education, school construction, teacher recruitment, security to enable school attendance, and community engagement to overcome cultural resistance. Southern states need quality improvements—better teacher training, curriculum modernization, technology integration. Nationally, Nigeria needs constitutional enforcement of compulsory education, increased funding, teacher professionalization, and accountability systems measuring learning outcomes. Nigeria has the population, resources, and entrepreneurial energy to build a world-class education system. It lacks the political will and governance capacity to make it happen. Until those change, Nigeria will remain a country of extraordinary inequality where birth circumstances determine educational opportunity, perpetuating cycles of poverty and limiting national development.`,
    issues: JSON.stringify([
      '20 Million Children Out of School (World\'s Highest)',
      'Severe North-South Regional Disparities',
      'Teacher Shortages and Quality Crisis',
      'Massive Infrastructure Deficits Nationwide',
      'Graduate Unemployment Despite University Expansion'
    ]),
    topStories: JSON.stringify([
      {
        title: 'Nigeria Has 20 Million Out-of-School Children',
        source: 'UNICEF Nigeria',
        link: 'https://www.unicef.org/nigeria/education',
        pubDate: new Date('2025-11-14').toISOString()
      },
      {
        title: 'Education Spending Remains Below 3% of GDP',
        source: 'Nigeria Federal Ministry of Education',
        link: 'https://education.gov.ng/',
        pubDate: new Date('2025-11-19').toISOString()
      }
    ]),
    storyCount: 2
  },
  {
    name: 'South Africa',
    type: 'country',
    country: 'South Africa',
    lat: -30.5595,
    lng: 22.9375,
    category: 'education',
    summary: `South Africa spends more on education than any other African country—6.4% of GDP, roughly $28 billion annually—yet produces learning outcomes that rank among the world's worst. The 2019 TIMSS assessment placed South African 9th graders dead last globally in mathematics and science, behind significantly poorer countries. This isn't a resource problem; it's a systemic failure of teaching, learning, and accountability that persists three decades after apartheid's formal end.

The system operates on a 7-5-4 structure: seven years primary (Grades R-6), five years secondary (Grades 7-12), and three to four years university. Education is free and compulsory from ages 7 to 15, with no-fee schools serving 80% of students. Enrollment is universal at primary level and 96% at secondary—genuine achievements. But attendance doesn't equal learning. The 2016 PIRLS study found 78% of Grade 4 students could not read for meaning in any language, including their home language. This reading catastrophe undermines all subsequent learning—students who can't read can't learn history, science, mathematics, or anything else requiring text comprehension.

The core problem is teacher quality and pedagogical practice. Many teachers lack subject mastery—studies show 79% of mathematics teachers cannot solve problems they're teaching. Pedagogical content knowledge is weak: teachers know neither the subject deeply nor how to teach it effectively. Classroom observations reveal minimal actual teaching—teacher absenteeism averages 20%, and when present, many teachers don't teach, instead assigning copying tasks while they attend to other matters.

These failures are not evenly distributed. South Africa operates what researchers call "two education systems in one country." Historically advantaged schools serving middle-class (predominantly white and Indian) students deliver education comparable to developed countries. Historically disadvantaged schools serving poor (predominantly Black) students in townships and rural areas deliver education that barely qualifies as schooling. This bifurcation perpetuates apartheid-era inequalities despite formal desegregation and equitable funding formulas.

Language policy compounds learning challenges. South Africa has 11 official languages, and most students learn in English from Grade 4 onward despite limited English proficiency. Research shows mother-tongue instruction through primary school produces better outcomes, but parents demand English because it's perceived as the language of economic opportunity. This political pressure overrides pedagogical evidence, condemning students to learn poorly in a language they don't fully understand.

Higher education is well-developed, with 26 public universities including institutions like the University of Cape Town, University of the Witwatersrand, and Stellenbosch University that rank among Africa's best. Enrollment has expanded dramatically since 1994, particularly for Black students. But high dropout rates—only 27% of students complete degrees in regulation time—reflect weak school preparation. Universities must provide extensive remedial support, and many graduates still lack employment-ready skills.

Teacher unions, while protecting legitimate worker interests, often resist accountability measures like standardized testing and performance evaluation. The South African Democratic Teachers Union is politically powerful, and its resistance to reforms perceived as threatening job security has blocked initiatives aimed at improving teaching quality and dismissing incompetent teachers.

South Africa's education crisis isn't about money—it's about teaching, learning, and accountability. The country must improve teacher subject knowledge and pedagogical skills through intensive professional development, implement classroom observation and support systems, use assessment data to drive improvement, reduce teacher absenteeism through better management, and confront the political reality that protecting bad teachers harms children. These reforms face political resistance, but without them, South Africa will continue spending lavishly while producing abysmal outcomes—failing the very students who most need education to overcome poverty and historical disadvantage.`,
    issues: JSON.stringify([
      'Learning Crisis: 78% of Grade 4 Students Cannot Read',
      'Last Place in TIMSS Despite Highest Spending in Africa',
      'Teacher Subject Knowledge and Pedagogical Gaps',
      'Two-Tier System Perpetuating Inequality',
      'Language Policy vs. Learning Effectiveness Tensions'
    ]),
    topStories: JSON.stringify([
      {
        title: 'South Africa Ranks Last Globally in TIMSS Mathematics and Science',
        source: 'TIMSS 2019',
        link: 'https://www.timss.org/south-africa/',
        pubDate: new Date('2025-11-13').toISOString()
      },
      {
        title: 'PIRLS Study: 78% of Students Cannot Read for Meaning',
        source: 'PIRLS 2016',
        link: 'https://www.education.gov.za/pirls',
        pubDate: new Date('2025-11-20').toISOString()
      }
    ]),
    storyCount: 2
  },
  {
    name: 'Morocco',
    type: 'country',
    country: 'Morocco',
    lat: 31.7917,
    lng: -7.0926,
    category: 'education',
    summary: `Morocco's education system has undergone repeated waves of reform—language policy shifts, curriculum revisions, governance restructuring—yet stubbornly fails to deliver quality learning at scale. The 2018 PISA results showed Moroccan 15-year-olds scoring near the bottom globally: 73% below baseline proficiency in reading, 76% in mathematics, 71% in science. These aren't marginal shortfalls; they represent systematic failure to educate the majority of students despite decades of reform efforts and substantial investment.

The system follows a 6-3-3 structure: six years primary, three years collège (lower secondary), three years lycée (upper secondary), followed by university or vocational training. Education is officially free and compulsory from ages 6 to 15, but enforcement is weak—dropout rates reach 30% at primary level and 40% at collège level, driven by poverty, child labor, rural isolation, and poor school quality that convinces parents education has no value.

Language policy creates immediate and persistent learning barriers. Morocco has cycled between Arabization (making Arabic the primary language of instruction), Francization (teaching science and mathematics in French), and current policies promoting Amazigh (Berber) languages and English. This constant shifting confuses students, teachers, and parents. Most children speak Darija (Moroccan Arabic) or Amazigh at home but are taught in Modern Standard Arabic—essentially a foreign language. Then, starting in secondary school, science and math switch to French, which few students master. This linguistic confusion undermines subject learning and creates cognitive burdens that disadvantage students from non-French-speaking families.

Teacher quality remains the system's Achilles heel. Many teachers lack subject mastery and pedagogical skills, relying on rote methods that emphasize memorization over understanding. Pre-service training is often theoretical and disconnected from classroom realities. In-service professional development is limited. Teacher absenteeism is high, particularly in rural areas where living conditions are difficult and supervision is minimal. Motivated teachers gravitate toward urban areas or leave the profession for better opportunities.

Infrastructure disparities between urban and rural areas are severe. Urban schools generally have electricity, water, and basic facilities, while rural schools often lack walls, roofs, desks, toilets, and electricity. The rural-urban divide is also gendered: rural girls face particular barriers—distance to schools, lack of separate sanitation, cultural attitudes about girls' education, and household labor demands. Girls now comprise 48% of students nationally, but this parity masks regional disparities where rural girls still face significant obstacles.

Higher education has expanded dramatically, with enrollment growing from 400,000 in 2008 to over 1 million in 2024 across public and private universities. But this expansion has outpaced quality—overcrowded lecture halls, limited facilities, outdated curricula, inadequate research funding, and faculty brain drain. Graduate unemployment exceeds 30%, particularly for humanities and social science graduates, because degrees don't impart skills employers need. The 2011 protests that sparked Morocco's constitutional reforms were driven partly by unemployed university graduates frustrated by limited opportunities.

Morocco spends approximately 5.3% of GDP on education—respectable but ineffective given poor outcomes. The 2019-2030 Education Reform Vision acknowledges deep problems and proposes comprehensive changes: improved teacher training, modernized curricula, technology integration, Arabic-French bilingualism, and quality assurance systems. Implementation has been slow, and whether this reform wave will succeed where previous efforts failed remains uncertain.

Morocco's education challenge is not primarily financial—it's political, linguistic, and pedagogical. The country must stabilize language policy to align with learning science, improve teacher recruitment and training dramatically, address rural-urban inequalities through targeted investments, modernize curricula to emphasize competencies over memorization, and build accountability systems measuring and responding to learning outcomes. Morocco has the resources and institutional capacity for these reforms; the question is whether political will exists to implement them consistently rather than cycling through another round of well-intentioned but ultimately ineffective changes.`,
    issues: JSON.stringify([
      'PISA Performance: 73-76% Below Baseline Proficiency',
      'Language Policy Instability Undermining Learning',
      'Teacher Quality and Pedagogical Practice Gaps',
      'Severe Rural-Urban Infrastructure Disparities',
      'High Graduate Unemployment Despite University Expansion'
    ]),
    topStories: JSON.stringify([
      {
        title: 'Morocco Scores Near Bottom in PISA 2018 Assessment',
        source: 'OECD PISA',
        link: 'https://www.oecd.org/pisa/PISA-results_ENGLISH.png',
        pubDate: new Date('2025-11-11').toISOString()
      },
      {
        title: 'Education Reform Vision 2019-2030 Faces Implementation Challenges',
        source: 'Morocco Ministry of Education',
        link: 'https://www.men.gov.ma/',
        pubDate: new Date('2025-11-17').toISOString()
      }
    ]),
    storyCount: 2
  },
  {
    name: 'Tunisia',
    type: 'country',
    country: 'Tunisia',
    lat: 33.8869,
    lng: 9.5375,
    category: 'education',
    summary: `Tunisia once stood as North Africa's education success story—high literacy rates, gender parity, universal primary enrollment, and universities producing skilled graduates who launched the Arab Spring. But November 2025 finds the system in crisis: teacher strikes over unpaid salaries, infrastructure deteriorating from underinvestment, brain drain accelerating as skilled educators leave for Gulf countries or Europe, and learning outcomes stagnating despite past achievements. The economic crisis that has gripped Tunisia since 2011 has starved education of resources, threatening to reverse decades of progress.

The system follows a 6-4-3 structure inherited from French colonial rule: six years primary, four years lower secondary, three years upper secondary, followed by university or vocational training. Education is free and compulsory through age 16, with near-universal primary enrollment. Literacy stands at 82%, among Africa's highest rates, and Tunisia achieved gender parity in education decades ago—girls now slightly outnumber boys in secondary and higher education. These are real accomplishments, reflecting sustained investment during the Ben Ali era when education was prioritized as modernization strategy.

Yet PISA results show stagnation. Tunisia first participated in 2003 and has shown minimal improvement since—2018 scores placed Tunisia in the bottom third globally, with 71% of students below baseline proficiency in reading, 73% in mathematics. This mediocrity reflects pedagogical conservatism: teaching remains heavily didactic, emphasizing memorization and reproduction over critical thinking and problem-solving. Teachers—products of the same system—perpetuate these methods because they lack training in alternative approaches.

The economic crisis has devastated teacher morale and system functioning. Salaries have lost purchasing power due to inflation and currency devaluation. Payments are sometimes delayed for months. Working conditions have deteriorated—overcrowded classrooms, lack of materials, aging facilities without maintenance. The Tunisian General Labor Union regularly calls teacher strikes, disrupting academic calendars and student learning. Meanwhile, qualified teachers increasingly leave for opportunities in Gulf countries where salaries are 3-5 times higher, accelerating brain drain.

Infrastructure challenges mount as budgets shrink. School buildings deteriorate without maintenance. Technology integration stalls due to lack of funds for computers, internet, and teacher training. Textbooks become outdated without resources for revision and reprinting. The rural-urban divide persists—schools in Tunis and coastal cities function reasonably well, while schools in interior regions lack basic facilities and qualified staff.

Higher education remains strong relative to the region but faces mounting pressures. Tunisia has over 200,000 university students across 13 public universities and numerous private institutions. Historically, universities produced graduates who entered professional careers in Tunisia or emigrated to Europe, sending remittances home. But graduate unemployment now exceeds 35%, highest among university graduates because degree production outpaces job creation. Frustrated graduates sparked the 2011 revolution, and their continued unemployment fuels political instability.

Language policy creates ongoing tensions. French remains the language of instruction for science, technology, engineering, and medicine, while humanities and social sciences use Arabic. This linguistic divide correlates with economic outcomes—French-proficient graduates access better jobs—reinforcing class divisions. Periodic calls to Arabize higher education face resistance from those who recognize that French proficiency provides economic advantages.

Tunisia spends approximately 6.6% of GDP on education—among Africa's highest rates and above UNESCO recommendations—but fiscal crisis means absolute amounts have declined in real terms. The IMF bailout conditions pressure further spending cuts, potentially forcing reductions in teacher salaries, infrastructure investment, or student services.

Tunisia's education system succeeded when the state could invest consistently in teachers, infrastructure, and quality. Economic crisis has broken that model, threatening to transform success into failure. Tunisia must stabilize its economy, restore teacher compensation and working conditions, modernize pedagogy beyond rote learning, align higher education with labor market demands, and maintain political commitment to education as national priority despite fiscal pressures. These are extraordinarily difficult challenges for a country in democratic transition facing economic emergency. But without addressing them, Tunisia risks losing the educational achievements that once distinguished it from regional neighbors—a loss that would undermine political stability and economic prospects for generations.`,
    issues: JSON.stringify([
      'Teacher Strikes and Salary Crisis Disrupting Learning',
      'Brain Drain: Educators Leaving for Gulf Countries',
      'PISA Stagnation: 71-73% Below Baseline Proficiency',
      'Infrastructure Deterioration from Underinvestment',
      'High Graduate Unemployment (35%+) Fueling Instability'
    ]),
    topStories: JSON.stringify([
      {
        title: 'Tunisia Teachers Strike Over Unpaid Salaries and Inflation',
        source: 'Tunisian General Labor Union',
        link: 'https://www.ugtt.org.tn/',
        pubDate: new Date('2025-11-16').toISOString()
      },
      {
        title: 'Economic Crisis Forces Education Budget Cuts',
        source: 'Tunisia Ministry of Education',
        link: 'https://www.education.tn/',
        pubDate: new Date('2025-11-12').toISOString()
      }
    ]),
    storyCount: 2
  },
  {
    name: 'Libya',
    type: 'country',
    country: 'Libya',
    lat: 26.3351,
    lng: 17.2283,
    category: 'education',
    summary: `Libya's education system is a casualty of state collapse and civil war. Before the 2011 revolution, Libya had near-universal literacy (91%), free education through university, and one of the region's highest enrollment rates, funded by massive oil revenues. Fourteen years later, the system barely functions: rival governments issue competing curricula, schools operate irregularly or not at all, universities are militarized zones, teachers go unpaid, and an estimated 1.2 million children have limited or no access to education due to conflict, displacement, or infrastructure destruction.

The nominal system follows a 6-3-3 structure: six years primary, three years preparatory, three years secondary, followed by university or technical education. Education is officially free and compulsory through age 15, a promise that made sense when the state had resources and authority. But Libya currently has two rival governments—the Government of National Unity (GNU) in Tripoli and the Government of National Stability (GNS) in Tobruk—each claiming legitimacy, controlling different territories, and issuing competing policies. This division extends to education: different curricula, different examination systems, different accreditation standards.

School attendance is determined largely by geography and security. In relatively stable areas like Tripoli, Benghazi, and Misrata, schools operate with reasonable regularity, though overcrowding, resource shortages, and teacher strikes are common. In conflict zones—southern Libya, areas around Sirte, regions affected by militia fighting—schools are often closed, occupied by armed groups, or destroyed. Internally displaced families live in camps or informal settlements where education access is minimal to nonexistent.

Teacher recruitment, training, and payment have collapsed. Pre-war, Libya had a professionalized teaching force with competitive salaries funded by oil revenues. Now, salaries—when paid—have lost purchasing power due to inflation and currency devaluation. Many teachers have left the profession for more stable employment or fled abroad. Those remaining often lack training in modern pedagogies and must cope with traumatized students, overcrowded classrooms, minimal resources, and uncertain personal security.

Infrastructure deterioration is severe. School buildings damaged by fighting go unrepaired. Textbooks become outdated without revision. Technology—computers, internet, science laboratories—is absent or non-functional. Electricity is unreliable, and water and sanitation systems often don't work. These conditions make effective teaching nearly impossible even for motivated educators.

Higher education reflects the broader chaos. Libya has over 10 universities, including the prestigious University of Tripoli and University of Benghazi, that once attracted students regionally. Now, campuses are frequently closed due to fighting, professors have fled, academic standards have collapsed, and degrees lack international recognition. Universities have been militarized—armed groups occupy campuses, faculty and students face intimidation, and academic freedom is nonexistent. Some students travel abroad for degrees (primarily to Turkey, Egypt, or Tunisia), but many cannot afford this option.

Gender issues have regressed since 2011. In the Gaddafi era, girls' education was supported as part of the regime's modernization agenda. Post-revolution, conservative interpretations of Islamic law have gained influence in some regions, restricting girls' educational opportunities. In areas controlled by militias with strict religious ideologies, girls face pressure to leave school early, gender-segregated education is enforced without adequate facilities for girls, and women's access to higher education is limited.

Libya's education crisis won't resolve through incremental reforms—it requires peace and state rebuilding. The rival governments must unify or reach accommodation allowing basic service delivery. Security must improve enough that schools can function safely. Teacher recruitment, training, and payment systems must be reconstructed. Infrastructure requires massive rehabilitation investment. Curricula need updating to reflect democratic values and critical thinking rather than rote memorization.

Oil revenues should make all this affordable—Libya has Africa's largest proven oil reserves and a small population of just 7 million. But resources don't matter when the state cannot function coherently. Until political reconciliation creates a government capable of exercising authority nationwide, Libya's education system will remain fragmented, under-resourced, and unable to prepare the next generation for productive citizenship. For now, Libya represents an education emergency disguised as a system—children growing up without the knowledge, skills, or credentials needed to rebuild their country when peace eventually comes.`,
    issues: JSON.stringify([
      '1.2 Million Children with Limited or No School Access',
      'Rival Governments Issuing Competing Curricula',
      'School Infrastructure Destruction and Military Occupation',
      'Teacher Payment Crisis and Workforce Exodus',
      'University Militarization and Academic Freedom Collapse'
    ]),
    topStories: JSON.stringify([
      {
        title: 'UNICEF: 1.2 Million Libyan Children Lack Education Access',
        source: 'UNICEF Libya',
        link: 'https://www.unicef.org/libya/education',
        pubDate: new Date('2025-11-14').toISOString()
      },
      {
        title: 'Rival Governments Issue Competing Education Policies',
        source: 'Libya Observer',
        link: 'https://www.libyaobserver.ly/education',
        pubDate: new Date('2025-11-19').toISOString()
      }
    ]),
    storyCount: 2
  }
]

async function addEducationSummariesToDatabase() {
  console.log('Adding education category summaries for Batch 9 countries...\n')

  for (const summary of EDUCATION_SUMMARIES) {
    try {
      const result = await prisma.locationSummary.upsert({
        where: {
          name_type_category: {
            name: summary.name,
            type: summary.type,
            category: summary.category
          }
        },
        create: {
          name: summary.name,
          type: summary.type,
          country: summary.country,
          lat: summary.lat,
          lng: summary.lng,
          category: summary.category,
          summary: summary.summary,
          issues: summary.issues,
          topStories: summary.topStories,
          storyCount: summary.storyCount,
          updatedAt: new Date(),
          createdAt: new Date()
        },
        update: {
          summary: summary.summary,
          issues: summary.issues,
          topStories: summary.topStories,
          storyCount: summary.storyCount,
          updatedAt: new Date()
        }
      })

      console.log(`✅ ${summary.name} education summary added/updated (${summary.summary.length} characters)`)
    } catch (error) {
      console.error(`❌ Error adding ${summary.name}:`, error)
    }
  }

  console.log('\n✅ All education summaries processed!')
  console.log('\nSummary character counts:')
  EDUCATION_SUMMARIES.forEach(s => {
    console.log(`  ${s.name}: ${s.summary.length} characters`)
  })
}

addEducationSummariesToDatabase()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
