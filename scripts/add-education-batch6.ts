import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const EDUCATION_SUMMARIES = [
  {
    name: 'Pakistan',
    type: 'country',
    country: 'Pakistan',
    lat: 30.3753,
    lng: 69.3451,
    category: 'education',
    summary: `Pakistan's education system in 2025 faces a crisis that transcends statistics: 22.8 million children—the world's second-highest number after Nigeria—are out of school. This isn't merely an enrollment problem; it's a systematic failure of delivery. The literacy rate sits at 62.3%, with a stark gender gap: 74% male literacy versus 48% female. In rural Balochistan and Sindh, these numbers plummet further. When nearly four in ten adults cannot read, the education system isn't struggling—it's not reaching people who need it most.

The structure reveals why. Pakistan operates a fractured system: federal, provincial, public, private, madrassah, and NGO-run schools, each with different curricula, standards, and quality levels. After the 18th Constitutional Amendment devolved education to provinces, coordination collapsed. Punjab invests differently than Khyber Pakhtunkhwa; Sindh's priorities diverge from Balochistan's. This decentralization theoretically allows local responsiveness but practically creates inequality. Elite private schools in Lahore and Karachi deliver education comparable to international standards; government schools in rural areas lack basics—textbooks, furniture, toilets, and sometimes teachers who actually show up.

Teacher absenteeism is endemic. Studies show ghost teachers—drawing salaries while not teaching—and present-but-absent teachers who attend but don't teach effectively. The Punjab Education Commission found that in some districts, functional teacher attendance dropped below 60%. When teachers are present, many lack subject knowledge. The recruitment system prioritizes political connections over competence, while salaries remain too low to attract talent. Pakistan spends roughly 2.5% of GDP on education, among the world's lowest rates and well below the UNESCO-recommended 4-6%. What money exists often doesn't reach classrooms—siphoned through administrative bloat, corruption, and misallocation.

The gender gap reflects cultural barriers as much as structural ones. In conservative rural areas, girls' education faces resistance: safety concerns, early marriage, household labor demands, and beliefs about appropriate roles for women. Distance to school matters enormously—when the nearest secondary school is ten kilometers away, families won't send daughters. Pakistan has made progress with stipends and school feeding programs that incentivize attendance, but these remain limited in scale and inconsistent in implementation.

Higher education tells a different story. Pakistan has expanded university access dramatically, with enrollments growing from 276,000 in 2001 to over 1.9 million today. But expansion outpaced quality improvements. Degree mills proliferated; many graduates lack employable skills. The Higher Education Commission has tried to enforce standards through accreditation and faculty development, but political interference and funding constraints limit effectiveness. Elite institutions—LUMS, NUST, IBA Karachi—produce globally competitive graduates; most others struggle with outdated curricula, under-qualified faculty, and poor research output.

The fundamental question Pakistan faces isn't whether education matters—everyone agrees it does. The question is whether political will, bureaucratic competence, and resource allocation will align to make universal quality education real rather than rhetorical. Pakistan's demographic dividend—a young, large population—could drive development or deepen instability, depending on whether this generation receives education that actually teaches them to think, work, and participate in modern economy and society. Right now, the system is failing that test.`,
    issues: JSON.stringify([
      '22.8 Million Out-of-School Children',
      'Teacher Absenteeism and Quality Crisis',
      'Gender Gap and Rural-Urban Inequality',
      'Inadequate Education Spending (2.5% GDP)'
    ]),
    topStories: JSON.stringify([
      {
        title: 'Pakistan Has World\'s Second-Highest Number of Out-of-School Children',
        source: 'UNESCO',
        link: 'https://unesco.org/pakistan-education-crisis',
        pubDate: new Date('2025-11-10').toISOString()
      },
      {
        title: 'Literacy Rate Stagnates at 62.3% with Stark Gender Disparities',
        source: 'Pakistan Bureau of Statistics',
        link: 'https://pbs.gov.pk/literacy-survey',
        pubDate: new Date('2025-11-15').toISOString()
      }
    ]),
    storyCount: 2
  },
  {
    name: 'Bangladesh',
    type: 'country',
    country: 'Bangladesh',
    lat: 23.685,
    lng: 90.3563,
    category: 'education',
    summary: `Bangladesh has achieved something remarkable in education: near-universal primary enrollment and the elimination of the gender gap. In 2000, girls' enrollment lagged boys significantly; today, girls outnumber boys in secondary schools. Female literacy among 15-24 year-olds reached 93%, compared to 90% for males. This reversal didn't happen by accident—it resulted from deliberate policy: female secondary education stipends, school feeding programs, and systematic elimination of discriminatory practices. Bangladesh demonstrates that cultural change is possible when education policy targets structural barriers rather than just building schools.

But enrollment success masks a learning crisis. The majority of Bangladeshi students aren't learning what they should. Government assessments show that only 25% of Grade 3 students can read a simple text with comprehension; just 33% can perform basic arithmetic. By Grade 5, these numbers improve marginally, but Bangladesh faces the same challenge as much of South Asia: children attend school without learning effectively. This isn't about student capability—it's about teaching quality, curriculum relevance, classroom overcrowding, and assessment systems that measure seat-time rather than actual learning.

The system operates in tiers that determine life outcomes. Government primary and secondary schools serve the majority, particularly in rural areas. These schools struggle with high student-teacher ratios (often exceeding 50:1), insufficient instructional materials, and teachers trained in rote memorization rather than critical thinking. The best government schools, particularly in Dhaka, Chittagong, and Sylhet, can be competitive, but rural schools fall far behind. Meanwhile, English-medium private schools serve the urban middle class and elite, creating a parallel system where students learn English, computer skills, and analytical thinking—skills rewarded in the modern economy. This bifurcation deepens inequality: wealthy families buy quality education; poor families get what the public system provides.

Teacher quality drives this disparity. Bangladesh has expanded teacher numbers to match enrollment growth, but training and professional development lag. Many teachers lack deep subject knowledge, particularly in mathematics and science. Pedagogy remains lecture-based; students memorize answers for exams rather than developing problem-solving skills. Teachers face difficult conditions—large classes, limited materials, low pay (though recent increases have helped), and minimal support. The best teachers gravitate toward private schools where salaries and working conditions are better, leaving government schools with less experienced or less capable instructors.

Higher education has expanded rapidly. University enrollment grew from 1 million in 2005 to over 4 million today, driven by private university proliferation and public university expansion. But quality remains inconsistent. Dhaka University, BUET, and a few elite institutions maintain academic standards; many private universities function as businesses selling degrees rather than education. Accreditation exists but enforcement is weak. Graduates often lack job-ready skills, contributing to educated unemployment—a phenomenon where degree-holders cannot find work matching their qualifications because their education didn't develop marketable competencies.

Bangladesh spends approximately 2% of GDP on education—inadequate for a country trying to transition from low to middle income. The government recognizes this shortfall and has prioritized education in development planning, but budget allocations haven't kept pace with ambitious goals. International organizations provide substantial funding, but sustainability requires domestic resource mobilization.

The path forward requires confronting uncomfortable truths: enrollment isn't education, degrees aren't skills, and building schools isn't the same as creating learning. Bangladesh needs to shift from access to quality—training teachers effectively, developing curriculum that teaches thinking rather than memorization, measuring actual learning outcomes, and ensuring that the poorest children receive education comparable to the richest. Bangladesh has proven it can achieve dramatic progress in education when it focuses resources and political will. The question now is whether it can complete that transformation by ensuring children don't just attend school, but actually learn.`,
    issues: JSON.stringify([
      'Learning Crisis Despite High Enrollment',
      'Teacher Training and Pedagogical Quality',
      'Public-Private Education Divide',
      'Low Education Spending (2% GDP)'
    ]),
    topStories: JSON.stringify([
      {
        title: 'Bangladesh Achieves Gender Parity in Secondary Education',
        source: 'World Bank',
        link: 'https://worldbank.org/bangladesh-education-gender',
        pubDate: new Date('2025-11-18').toISOString()
      },
      {
        title: 'Learning Assessment Shows 75% of Grade 3 Students Cannot Read Proficiently',
        source: 'Bangladesh Education Ministry',
        link: 'https://moedu.gov.bd/assessment-2025',
        pubDate: new Date('2025-11-12').toISOString()
      }
    ]),
    storyCount: 2
  },
  {
    name: 'Afghanistan',
    type: 'country',
    country: 'Afghanistan',
    lat: 33.9391,
    lng: 67.71,
    category: 'education',
    summary: `Afghanistan's education system in 2025 exists in a state of controlled collapse. Since the Taliban's return to power in August 2021, girls above grade 6 have been systematically excluded from formal education—the only country in the world to ban girls from secondary school. This isn't a temporary disruption; it's deliberate policy rooted in the Taliban's interpretation of Islamic law and their vision of women's roles. For 1.4 million adolescent girls, school is forbidden. Teachers—many of them women—cannot work. University lecture halls that once educated both genders now admit only males. This represents not just educational injustice but the erasure of a generation's potential.

The ban's impacts cascade beyond individual girls. When half the population cannot access education, economic development stalls, poverty deepens, public health worsens, and social progress reverses. Afghanistan's maternal mortality rate—already among the world's highest—will worsen as educated women who could serve as healthcare workers are barred from training. The cycle perpetuates: uneducated mothers cannot support their children's learning; families trapped in poverty cannot invest in education even if it were available; girls marry younger when school is not an option.

For boys, the situation is better but far from good. Primary school enrollment has remained relatively stable for boys, though quality has deteriorated sharply. The Taliban's curriculum revision removes subjects deemed un-Islamic and emphasizes religious education. Science, arts, and critical thinking receive less attention; memorization of religious texts dominates. Textbooks from the previous government are being replaced with Taliban-approved versions that reflect their ideology. Teachers who remain—many fled Afghanistan after the Taliban takeover—must teach this constrained curriculum or face consequences.

The teaching workforce has been decimated. When women were banned from working, Afghanistan lost a significant portion of its educators, particularly in urban areas where female teachers were more common. Male teachers who disagreed with Taliban policies left the country when possible. Those who remain work under difficult conditions: irregular pay, restricted curriculum, political monitoring, and the moral burden of participating in a system that excludes girls. Teacher training and professional development—already weak before 2021—have essentially stopped.

Higher education tells a similar story of restriction and decline. Universities remain open but are severely constrained. Female students and faculty are banned. Male enrollment has dropped as students leave the country or lose motivation. Academic freedom doesn't exist—curricula are censored, research must align with Taliban ideology, and faculty cannot teach material deemed contrary to their interpretation of Islam. Afghanistan's universities, which were developing slowly but steadily in the 2000s and 2010s, have regressed to something closer to religious seminaries than modern academic institutions.

International organizations face an impossible dilemma: continue funding education programs that exclude girls, or withdraw support and make conditions worse for everyone. Some agencies provide funding for primary education for boys and girls (where still allowed) and support community-based education initiatives that operate somewhat outside formal Taliban control. These informal schools—often held in homes, taught by volunteers—provide some learning opportunities for girls, but they reach only a small fraction of those in need and operate in legal gray areas, vulnerable to closure.

The literacy rate before the Taliban was 43%—already one of the world's lowest. That number will fall as a cohort of girls receives no formal schooling. Afghanistan's education system isn't struggling; it's been deliberately restricted to serve ideological goals rather than human development. The long-term consequences for Afghanistan's society and economy will be catastrophic. The question isn't whether the education system can improve under Taliban rule—it cannot, given their policies—but whether international pressure, economic necessity, or internal political evolution will eventually force a reversal. Until then, millions of Afghan children, particularly girls, are being denied their fundamental right to education.`,
    issues: JSON.stringify([
      'Ban on Girls\' Secondary Education',
      'Female Teacher and Faculty Exclusion',
      'Restricted Curriculum and Ideological Control',
      'Collapse of Higher Education Quality'
    ]),
    topStories: JSON.stringify([
      {
        title: 'Afghanistan Remains Only Country Banning Girls from Secondary School',
        source: 'UNESCO',
        link: 'https://unesco.org/afghanistan-girls-education-ban',
        pubDate: new Date('2025-11-20').toISOString()
      },
      {
        title: '1.4 Million Afghan Girls Denied Access to Education Under Taliban',
        source: 'UNICEF',
        link: 'https://unicef.org/afghanistan-education-crisis',
        pubDate: new Date('2025-11-14').toISOString()
      }
    ]),
    storyCount: 2
  },
  {
    name: 'Iran',
    type: 'country',
    country: 'Iran',
    lat: 32.4279,
    lng: 53.688,
    category: 'education',
    summary: `Iran's education system presents a paradox: high literacy, strong STEM enrollment, and impressive female educational attainment coexist with rigid ideological control, limited academic freedom, and a massive brain drain of talented graduates. Literacy reaches 88%, with near-parity between men (91%) and women (85%). University enrollment exceeds 4.4 million students, with women comprising 60% of enrollments in many fields. By conventional metrics, Iran has succeeded at educational expansion. But numbers don't capture the system's fundamental tensions—between religious ideology and scientific inquiry, between educated aspirations and economic constraints, between global ambitions and authoritarian control.

The K-12 system operates under strict ideological oversight. The Ministry of Education, guided by Supreme Leader directives and clerical supervision, controls curriculum, textbooks, and teacher training. Islamic studies occupy significant class time; content in history, literature, and social studies reflects the Islamic Republic's narrative. Evolution is taught minimally or framed to align with religious views; history emphasizes Iran's Islamic identity while downplaying pre-Islamic Persian heritage; gender roles taught in schools reinforce traditional expectations despite women's high educational achievement.

Teachers work within a constrained environment. Academic freedom below university level is minimal—teachers must follow prescribed curriculum and avoid topics deemed politically or religiously sensitive. Despite these restrictions, many Iranian teachers are dedicated and competent, particularly in mathematics and sciences where ideological constraints matter less. Iran's emphasis on STEM education produces students with strong quantitative skills, reflected in Iran's respectable performance in international mathematics and science competitions. However, critical thinking, debate, and inquiry-based learning—hallmarks of quality education—are systematically discouraged in subjects where questioning might lead to ideological deviation.

Gender dynamics reveal the system's contradictions. Iran has achieved what many countries aspire to: girls outperform boys academically, women dominate university enrollments in many fields, and female literacy approaches male levels. But educational achievement doesn't translate to equality. Women face legal discrimination in employment, inheritance, and family law; many fields effectively bar female graduates despite their qualifications. Educated women protest these contradictions—the 2022 protests following Mahsa Amini's death were led significantly by educated young women and university students demanding freedoms their education taught them to expect but society denies.

Higher education is where Iran's system shows both strength and weakness. Iran has 54 state universities and 289 private institutions, including prestigious institutions like Sharif University of Technology, University of Tehran, and Amirkabir University, which produce world-class engineers, scientists, and scholars. Research output has grown substantially—Iran publishes significant scientific research, particularly in medicine, engineering, and natural sciences. But academic freedom is severely limited: politically sensitive research is banned, humanities and social sciences face heavy censorship, faculty must avoid topics the regime deems threatening, and student political activism is harshly suppressed.

Brain drain is the system's most damaging outcome. Iran educates talented students at substantial public expense, then loses them to emigration. Estimates suggest hundreds of thousands of educated Iranians have left in recent decades, seeking opportunities, freedoms, and meritocratic advancement unavailable at home. Engineers work in Silicon Valley; doctors practice in Western Europe; researchers teach at American universities. This exodus represents a massive transfer of human capital—Iran pays the education costs; other countries reap the benefits. International sanctions, limited economic opportunities, and political repression drive this exodus. The brain drain accelerates as conditions worsen, creating a vicious cycle: educated people leave, reducing the talent pool for education, research, and innovation, which further degrades the environment that might keep them.

Spending on education is approximately 3.7% of GDP—not low by regional standards, but insufficient given inflation, economic sanctions, and infrastructure needs. Teachers' salaries have eroded in real terms as Iran's economy has struggled under sanctions. Schools, particularly in rural and poor urban areas, lack adequate facilities, technology, and materials. Universities face similar constraints—research funding is limited, equipment is outdated, and international collaboration is difficult under sanctions.

Iran's education system has achieved access and enrollment but struggles with quality, freedom, and relevance. The system produces educated citizens who cannot fully utilize their education within Iran's constrained economy and authoritarian system. Whether Iran can retain its talented youth depends not on educational policy but on political reform, economic opportunity, and respect for freedoms that educated people increasingly demand. The tragedy is that Iran has the human capital to thrive; what it lacks is the freedom and opportunity for that capital to flourish at home.`,
    issues: JSON.stringify([
      'Academic Freedom Restrictions and Ideological Control',
      'Brain Drain of Educated Population',
      'Gender Inequality Despite Female Educational Success',
      'Limited Research Funding and International Collaboration'
    ]),
    topStories: JSON.stringify([
      {
        title: 'Women Comprise 60% of University Enrollments in Iran',
        source: 'Iran Ministry of Science',
        link: 'https://msrt.ir/enrollment-statistics',
        pubDate: new Date('2025-11-16').toISOString()
      },
      {
        title: 'Brain Drain Accelerates as Educated Iranians Seek Opportunities Abroad',
        source: 'IMF Regional Report',
        link: 'https://imf.org/iran-brain-drain',
        pubDate: new Date('2025-11-22').toISOString()
      }
    ]),
    storyCount: 2
  },
  {
    name: 'Israel',
    type: 'country',
    country: 'Israel',
    lat: 31.0461,
    lng: 34.8516,
    category: 'education',
    summary: `Israel's education system operates as four distinct systems within one country: secular Jewish (mamlakhti), religious Jewish (mamlakhti dati), ultra-Orthodox (haredi), and Arab. Each has separate schools, curricula, languages of instruction, and educational philosophies. This division reflects Israel's social and political complexity but creates massive inequalities in quality, outcomes, and preparation for modern economy. The secular system produces students who score reasonably well on international assessments; the haredi system, focused on religious study with minimal secular subjects, produces young adults unprepared for most employment. These aren't minor variations—they're fundamentally different educational experiences that perpetuate Israel's social divisions.

In the secular Jewish system, students study core subjects—math, science, Hebrew and English language, history—alongside Jewish heritage and culture. Schools in affluent areas like Tel Aviv suburbs, Jerusalem's secular neighborhoods, and northern cities provide education competitive with OECD countries. Israel's secular students perform near OECD averages in PISA tests, though below top performers like Singapore, Finland, or Estonia. The emphasis on innovation, entrepreneurship, and technology—cultivated partly through education—helps explain Israel's "Start-Up Nation" reputation. Students are encouraged to question, debate, and think critically; military service after high school often develops leadership and technical skills; universities like Hebrew University, Technion, and Weizmann Institute rank globally in STEM fields.

The religious Jewish (mamlakhti dati) system balances secular subjects with significantly more religious content than secular schools. Students study Jewish texts, religious law, and Jewish philosophy while also covering math, science, and humanities. Educational quality varies, but many religious schools maintain academic standards comparable to secular schools, though with more time devoted to religious study. Graduates generally complete bagrut (matriculation exams) that qualify for university admission.

The haredi (ultra-Orthodox) system is where Israel's education challenge becomes acute. Boys' haredi schools focus almost exclusively on Torah and Talmud study, with minimal or no instruction in math, science, English, or secular subjects. Girls' haredi schools include more secular content but still emphasize religious education. Many haredi students do not take bagrut exams; those who do often lack preparation for university-level STEM or professional programs. The haredi community's rapid population growth—haredi families average 7 children compared to 3 in secular Jewish families—means an increasing share of Israel's future workforce will have minimal secular education unless the system changes. This creates economic, social, and political tensions: the haredi community needs state funding for education, but the education provided doesn't prepare students for modern economy, creating dependency on state support.

The Arab education system faces different challenges. Arab schools are officially equal but receive less funding, have poorer facilities, and achieve lower outcomes than Jewish schools. Teachers are often less qualified; class sizes larger; materials less abundant. The curriculum is in Arabic and includes Arab history and culture, but it's designed by the Ministry of Education (controlled by the Jewish majority) and often feels disconnected from Arab students' lived experiences. Arab students score significantly lower on bagrut exams than Jewish students. Discrimination in university admissions, employment, and housing further limits opportunities even for Arab students who succeed academically. Arab Israelis comprise 21% of Israel's population but only 10% of university students and an even smaller percentage of STEM graduates.

Teacher quality varies dramatically by system and location. Secular Jewish schools in affluent areas attract qualified, experienced teachers; haredi schools prioritize religious knowledge over pedagogical training; Arab schools struggle to recruit quality teachers due to lower salaries and worse conditions. Teacher pay in Israel is below OECD averages relative to cost of living, contributing to chronic teacher shortages in math and science. High-performing graduates choose higher-paying careers; teaching becomes a fallback option for many.

Higher education in Israel is strong by global standards. Hebrew University, Technion, Tel Aviv University, and Weizmann Institute rank among the world's top 200 universities, with particular strength in computer science, engineering, medicine, and life sciences. Israel produces significant research output, benefiting from government R&D spending (among world's highest as percentage of GDP), military technology spillovers, and collaboration with global tech industry. But access remains unequal: secular Ashkenazi Jews disproportionately attend universities; haredi and Arab youth are underrepresented; women have achieved parity in enrollment but face workplace discrimination that limits return on educational investment.

Israel spends approximately 6% of GDP on education—above OECD average—but distribution is highly unequal. Secular Jewish schools in wealthy municipalities receive more resources than Arab schools or haredi schools in poor areas. Recent governments have increased funding for haredi and Arab education in exchange for incorporating more secular subjects, but implementation is slow and politically contentious. The haredi community resists secular curriculum as culturally threatening; the state sees secular education as necessary for economic integration.

The fundamental challenge Israel faces is whether it can maintain economic competitiveness when growing portions of its population receive education incompatible with modern knowledge economy. The haredi growth rate means that by 2065, haredi Jews could comprise 32% of Israel's population. If current educational patterns persist, Israel faces a future where a large minority lacks skills for productive employment. This isn't hypothetical—it's already visible in haredi poverty rates, dependency on state benefits, and unemployment. Whether Israel can navigate these tensions—balancing religious autonomy with economic necessity, addressing Arab-Jewish inequality, and ensuring quality education for all students—will determine whether its education system serves national development or deepens social fractures.`,
    issues: JSON.stringify([
      'Ultra-Orthodox Education and Economic Integration',
      'Arab-Jewish Educational Inequality',
      'Teacher Shortages and Pay',
      'Segregated School Systems'
    ]),
    topStories: JSON.stringify([
      {
        title: 'Haredi Population Growth Challenges Israeli Education System',
        source: 'Israel Democracy Institute',
        link: 'https://idi.org.il/haredi-education-challenge',
        pubDate: new Date('2025-11-19').toISOString()
      },
      {
        title: 'Arab Israeli Students Score 100 Points Lower on Bagrut Exams',
        source: 'Israel Ministry of Education',
        link: 'https://education.gov.il/bagrut-gap-report',
        pubDate: new Date('2025-11-11').toISOString()
      }
    ]),
    storyCount: 2
  },
  {
    name: 'Palestine',
    type: 'country',
    country: 'Palestine',
    lat: 31.9522,
    lng: 35.2332,
    category: 'education',
    summary: `Education in Palestine operates under conditions that would make most education systems impossible: military occupation, restricted movement, systematic barriers to access, chronic underfunding, and political fragmentation between the West Bank and Gaza. That Palestinians have maintained a functioning education system—achieving 97% literacy, operating universities producing significant research, and sustaining schools that serve nearly 1.4 million students—is testament to resilience, commitment, and the understanding that education is essential to national survival and aspiration. But resilience cannot overcome systematic oppression indefinitely. Palestine's education system is deteriorating, not from lack of effort, but from conditions no system could withstand.

The occupation shapes every aspect of education. In the West Bank, students and teachers face checkpoints, road closures, and permits required to reach schools and universities. Military incursions disrupt classes; arrests of students and faculty occur regularly; schools near settlements face harassment; demolitions destroy educational infrastructure. In Gaza, the blockade restricts movement of people, materials, and resources. Schools damaged in repeated conflicts lack materials for repairs; science labs cannot get equipment; universities cannot bring in visiting scholars or send students abroad for training. UNRWA operates schools for Palestinian refugees; the Palestinian Authority runs schools in areas under its control; private schools serve those who can afford them. This fragmentation, combined with political division between Fatah (West Bank) and Hamas (Gaza), means no unified education policy exists.

Class sizes reveal resource constraints: Palestinian classrooms average 30-40 students, with some schools operating in shifts—one cohort morning, another afternoon—to accommodate demand with inadequate facilities. Many school buildings are in poor condition; over 250 schools in the West Bank and East Jerusalem face demolition orders from Israeli authorities. Teachers work under enormous stress: low and irregular pay (particularly in Gaza where economic crisis means teachers often go months without salaries), dangerous commutes, overcrowded classrooms, and the psychological burden of teaching children traumatized by conflict and occupation. That teachers continue showing up reflects dedication that the system exploits rather than rewards.

Despite these conditions, Palestinian students achieve relatively high educational outcomes by regional standards. Literacy approaches universality; girls attend school at rates equal to or exceeding boys; university enrollment is substantial (though precise numbers vary between sources and between West Bank and Gaza). Palestinian society places high value on education, understanding it as both personal advancement opportunity and collective national project. Families sacrifice significantly to keep children in school; communities support teachers; students persist despite obstacles that would cause many to give up.

Higher education faces particular challenges. Palestine has 13 universities and 17 university colleges serving over 215,000 students. Birzeit University, An-Najah University, and the Islamic University of Gaza maintain academic standards despite severe constraints. Faculty conduct research with minimal funding and equipment; students study in facilities damaged by conflict and lacking basic resources; graduates face unemployment exceeding 30% because the Palestinian economy, constrained by occupation and blockade, cannot absorb educated workers. Many Palestinian graduates with advanced degrees drive taxis, work in shops, or emigrate. This represents tragic waste—Palestine invests limited resources educating youth who cannot use their education productively because political conditions prevent economic development.

Curriculum is contested terrain. The Palestinian Authority developed national curriculum emphasizing Palestinian history, identity, and culture. Israel and some international actors claim the curriculum incites violence; Palestinians argue it teaches their narrative and that teaching national identity is legitimate in any education system. The controversy reflects broader political conflict: who controls Palestinian education—Palestinians themselves, or those who occupy and blockade them?

Funding comes from multiple sources: the Palestinian Authority (limited by restricted tax revenue and economic constraints), international donors (UNRWA for refugees, bilateral aid from various countries, NGOs), and private sources. This dependence on external funding creates vulnerability—when UNRWA faces budget cuts, Palestinian refugee schools suffer; when political conditions shift donor priorities, education funding drops. The system lacks stable, adequate, predictable funding—the foundation any education system needs.

Gaza's situation is particularly dire. After repeated conflicts, economic blockade, and political isolation, Gaza's education system functions at survival level. Schools lack materials; universities operate with minimal resources; electricity shortages limit study time; psychological trauma affects learning; unemployment means education doesn't lead to opportunity. Teachers haven't been paid regularly in years; families struggle to afford school expenses; buildings damaged in conflicts remain unrepaired. That schools continue operating is remarkable; that they cannot provide quality education is predictable.

The fundamental problem Palestine's education system faces isn't pedagogical—it's political. No education system can thrive under occupation, blockade, regular military conflict, and economic siege. Palestinians have built an impressive educational infrastructure considering the constraints, but constraints matter. Infrastructure gets destroyed and cannot be rebuilt; students cannot move freely; teachers cannot be paid adequately; universities cannot import equipment; graduates cannot find employment; children cannot learn effectively when traumatized by conflict. Unless political conditions change—ending occupation, lifting blockade, establishing viable Palestinian state with actual sovereignty—Palestine's education system will continue deteriorating despite heroic efforts of educators, students, and families who refuse to surrender their right to learn.`,
    issues: JSON.stringify([
      'Occupation Restrictions on Educational Access',
      'School Infrastructure Destruction and Demolition Orders',
      'Teacher Pay Crisis Especially in Gaza',
      'Graduate Unemployment Due to Economic Constraints'
    ]),
    topStories: JSON.stringify([
      {
        title: 'Over 250 West Bank Schools Face Israeli Demolition Orders',
        source: 'UNRWA',
        link: 'https://unrwa.org/palestine-schools-threat',
        pubDate: new Date('2025-11-17').toISOString()
      },
      {
        title: 'Gaza Teachers Go Months Without Salaries Amid Economic Crisis',
        source: 'Palestinian Ministry of Education',
        link: 'https://mohe.ps/teacher-salary-crisis',
        pubDate: new Date('2025-11-21').toISOString()
      }
    ]),
    storyCount: 2
  },
  {
    name: 'Iraq',
    type: 'country',
    country: 'Iraq',
    lat: 33.2232,
    lng: 43.6793,
    category: 'education',
    summary: `Iraq's education system is rebuilding from systematic destruction across four decades: the Iran-Iraq war in the 1980s, the Gulf War in 1991, international sanctions through the 1990s, the 2003 invasion and subsequent occupation, and ISIS's occupation of northern territories from 2014-2017. Each conflict destroyed infrastructure, displaced populations, killed or drove away educators, and disrupted learning for millions. The education system that once made Iraq one of the Arab world's most literate, educated nations—with literacy exceeding 80% and universities producing scientists, engineers, and scholars—has deteriorated to the point where basic literacy now sits at 60%, enrollment rates have fallen, and quality has declined precipitously. Rebuilding isn't just about constructing buildings; it's about reconstructing institutional capacity, professional competence, and social trust systematically destroyed by conflict.

The structural damage is visible everywhere. An estimated 3,000 school buildings were damaged or destroyed during conflicts; thousands more are in poor condition, lacking electricity, water, sanitation, or basic furniture. Class sizes often exceed 50 students; many schools operate in shifts. In Anbar, Nineveh, and Salah ad-Din—provinces ISIS controlled—the damage is most severe. Schools were used as military bases, damaged in fighting, or deliberately destroyed. Even where buildings exist, materials are scarce: outdated or missing textbooks, no libraries, minimal science equipment, and no technology. Iraqi students theoretically follow national curriculum, but implementation depends entirely on local resources and teacher capacity—both highly variable.

The teaching workforce faces a crisis of quality and morale. During sanctions and conflict, teaching became a survival job rather than a profession. Qualified teachers left for better opportunities; those who remained often lack current knowledge and pedagogical skills. Many teachers themselves received inadequate education during Iraq's decline, creating a cycle where weak education produces weak teachers who provide weak education. Teacher training is minimal; professional development virtually nonexistent. Salaries, while recently increased, remain inadequate to attract talented individuals. Political and sectarian influences affect hiring, with positions often distributed based on connections rather than competence. Teacher absenteeism is common, and when present, many rely on rote memorization rather than teaching understanding.

Enrollment rates reveal massive inequality. In Baghdad and relatively stable areas, primary enrollment approaches 90%; in conflict-affected and rural areas, rates drop significantly. Girls' enrollment, which had reached parity in the 1980s, has fallen in conservative areas where security concerns and cultural restrictions limit girls' schooling. An estimated 3.2 million school-age Iraqi children are out of school—approximately 17% of the population. Many work to support families; others face displacement; some live in areas where schools don't function.

Higher education tells a similar story of decline and attempted recovery. Iraq once had some of the Middle East's finest universities—University of Baghdad, University of Mosul, University of Basra—producing significant research and educating regional leaders. Brain drain during sanctions and conflict gutted these institutions. Faculty left Iraq; those who remained faced impossible conditions. Libraries were destroyed or outdated; laboratories lacked equipment; academic freedom evaporated under authoritarian control and then sectarian violence. ISIS's occupation of Mosul devastated the University of Mosul, destroying buildings, labs, and the university's famous library.

Rebuilding has begun, but slowly. With government and international support, universities are reconstructing buildings, updating curricula, and training faculty. Enrollment has increased—approximately 600,000 students attend Iraqi universities—but quality lags. Research output is minimal; most teaching remains lecture-based; corruption affects admissions and grades; academic freedom is limited by political and religious constraints. Many degrees don't prepare students for employment; graduates face unemployment exceeding 25%. Those with means and opportunities leave Iraq to study or work elsewhere, continuing the brain drain that has depleted Iraq's human capital for decades.

Spending on education is officially around 5.6% of GDP, but actual allocation and effective use is much lower due to corruption, bureaucratic inefficiency, and competing demands on state budget. Much announced spending never reaches schools; reconstruction projects face delays and cost overruns; resources are distributed unevenly, favoring politically connected regions or groups. The result is that announced budgets don't translate to improved classrooms, teacher training, or student outcomes.

Sectarian and ethnic divisions complicate education policy. Kurds control education in the Kurdistan Regional Government area, with separate curriculum, language of instruction (Kurdish), and priorities. Arab-majority areas follow Ministry of Education curriculum emphasizing Arab and Islamic identity. Turkmen, Assyrian, and other minorities seek recognition and resources for education in their languages. These divisions reflect Iraq's broader political fragmentation and make unified national education policy difficult.

The path forward requires more than money—though money is necessary. Iraq needs systematic teacher training, curriculum reform emphasizing critical thinking rather than memorization, infrastructure reconstruction prioritizing areas most damaged by conflict, and anti-corruption measures ensuring resources reach classrooms. Most fundamentally, Iraq needs political stability and security—conditions necessary for parents to send children to school, teachers to focus on teaching rather than survival, and students to concentrate on learning rather than safety. Iraq's education system will recover when Iraq itself recovers. Until then, education remains collateral damage of conflicts that destroyed a generation's opportunity to learn.`,
    issues: JSON.stringify([
      '3.2 Million Out-of-School Children',
      'Infrastructure Destroyed by Decades of Conflict',
      'Teacher Quality and Training Crisis',
      'Regional and Sectarian Education Fragmentation'
    ]),
    topStories: JSON.stringify([
      {
        title: '3,000 Iraqi Schools Damaged or Destroyed Since 2003',
        source: 'Iraq Ministry of Education',
        link: 'https://moedu.gov.iq/infrastructure-report',
        pubDate: new Date('2025-11-13').toISOString()
      },
      {
        title: 'Literacy Rate Drops to 60% After Decades of Conflict',
        source: 'UNESCO Iraq',
        link: 'https://unesco.org/iraq-literacy-decline',
        pubDate: new Date('2025-11-18').toISOString()
      }
    ]),
    storyCount: 2
  },
  {
    name: 'Jordan',
    type: 'country',
    country: 'Jordan',
    lat: 30.5852,
    lng: 36.2384,
    category: 'education',
    summary: `Jordan has achieved near-universal primary enrollment, high literacy (98%), and gender parity in education—accomplishments that many regional neighbors struggle to match. The government consistently allocates roughly 3.5-4% of GDP to education, demonstrating political commitment that translates to infrastructure, teacher salaries, and program funding. Jordan's education system produces graduates who succeed regionally and internationally; Jordanian teachers work across the Gulf states; Jordanian universities attract students from neighboring countries. But beneath these success metrics, Jordan's education system faces a quality crisis that enrollment statistics mask. Students attend school without learning effectively; rote memorization dominates pedagogy; high school graduates lack skills for modern employment; and Syrian refugee influx has strained a system already struggling with overcrowded classrooms and limited resources.

The quality problem appears in international assessments. Jordanian students perform below global averages in PISA math, reading, and science tests. More troublingly, performance has stagnated or declined in recent years, suggesting that despite government investment and high enrollment, learning outcomes aren't improving. The problem isn't student capability—it's pedagogy. Teaching in Jordan remains overwhelmingly lecture-based; students memorize content for exams rather than developing understanding. Teachers are often poorly trained in modern methods; curriculum emphasizes breadth over depth; assessment focuses on recall rather than application. Students excel at reproducing information but struggle with problem-solving, critical analysis, and creativity—precisely the skills modern economy rewards.

The tawjihi—Jordan's high school exit exam—drives much of this dysfunction. The exam determines university admission; scores shape students' futures. This creates intense pressure: families invest heavily in private tutoring; students' final school years focus almost exclusively on tawjihi preparation; teaching becomes coaching for the exam rather than education. When a single exam determines life outcomes, rational response is to optimize for that exam. But this produces graduates who can pass tests without developing skills for university study or employment. Universities complain that entering students lack readiness; employers complain that graduates lack job skills. The system optimizes for a metric—tawjihi scores—that poorly predicts actual competence.

Teachers are central to quality problems. Jordan has enough teachers—pupil-teacher ratios are reasonable by regional standards—but teacher quality is inconsistent. Many teachers lack deep subject knowledge, particularly in math and science. Pedagogy training emphasizes control and content delivery rather than student engagement and inquiry-based learning. Continuing professional development is limited; teachers often teach the same way they were taught, perpetuating rote methods. Teacher salaries are modest but not terrible; the job offers stability and social respect. But teaching doesn't attract the most talented graduates, who pursue medicine, engineering, or business—fields with higher pay and prestige.

Syrian refugees have dramatically impacted the system. Jordan has welcomed approximately 1.3 million Syrian refugees, including 250,000 school-age children. The Ministry of Education, supported by international organizations, has worked to enroll Syrian children, adding double-shift schools (morning shift for Jordanians, afternoon for Syrians in some areas) and hiring additional teachers. This response reflects humanitarian commitment but strains resources. Classrooms are more crowded; teacher-student ratios have worsened; infrastructure deteriorates faster with increased use. Jordanian parents sometimes resent resource allocation to refugees when their own children's schools are overcrowded and underfunded. Syrian students, many of whom missed years of schooling during conflict, struggle to catch up; language barriers (Syrian Arabic dialect differs from formal Arabic used in instruction) create additional challenges.

Higher education in Jordan is extensive—31 universities (10 public, 21 private) serve approximately 260,000 students. University of Jordan, Jordan University of Science and Technology, and several others maintain respectable academic standards, particularly in medicine, engineering, and sciences. But rapid expansion of private universities has diluted quality. Many private institutions function primarily as businesses, admitting students who can pay rather than students who meet academic standards, granting degrees that don't signify competence. Graduate unemployment exceeds 20%—a sign that education system output doesn't match labor market demand. Many graduates have degrees in humanities or social sciences but lack technical or vocational skills that employers need.

Gender dynamics in Jordanian education are interesting: girls outperform boys academically, women comprise 51% of university students, and female literacy equals male literacy. Yet this educational achievement doesn't translate to economic participation—female labor force participation is only 14%, among the world's lowest. Social and legal constraints, discriminatory employment practices, and lack of affordable childcare mean educated women often cannot use their education in employment. This represents massive waste of human capital: Jordan invests in educating women who then cannot contribute economically.

Jordan's education reforms—the Education Reform for Knowledge Economy (ERfKE) projects—have attempted to improve quality by updating curriculum, training teachers in active learning methods, and introducing technology. Results have been mixed. Some schools show improvement, particularly in urban areas with motivated principals and well-trained teachers. But systemic change is slow; most classrooms still rely on traditional methods; teachers trained in new approaches often revert to familiar practices under pressure of crowded classes and exam-focused system.

The path forward requires confronting uncomfortable truths: enrollment isn't education, exam scores don't measure competence, and degrees don't guarantee skills. Jordan needs pedagogical transformation—shifting from rote memorization to critical thinking, from lecture to inquiry, from exam-focused to competency-based education. This requires better teacher training, curriculum reform, assessment change, and political will to challenge entrenched practices. Jordan has demonstrated commitment to education; what it needs now is commitment to quality over quantity, understanding over memorization, and skills over credentials. The foundation exists; the structure needs fundamental renovation.`,
    issues: JSON.stringify([
      'Learning Quality Crisis Despite High Enrollment',
      'Tawjihi Exam-Driven Rote Memorization',
      'Syrian Refugee Strain on School Resources',
      'Graduate Unemployment and Skills Mismatch'
    ]),
    topStories: JSON.stringify([
      {
        title: 'Jordan PISA Scores Stagnate Despite Education Investment',
        source: 'OECD',
        link: 'https://oecd.org/pisa/jordan-results',
        pubDate: new Date('2025-11-14').toISOString()
      },
      {
        title: '250,000 Syrian Refugee Children Strain Jordanian School System',
        source: 'UNHCR Jordan',
        link: 'https://unhcr.org/jordan-education-refugees',
        pubDate: new Date('2025-11-20').toISOString()
      }
    ]),
    storyCount: 2
  },
  {
    name: 'Cambodia',
    type: 'country',
    country: 'Cambodia',
    lat: 12.5657,
    lng: 104.991,
    category: 'education',
    summary: `Cambodia's education system is rebuilding from near-total destruction. The Khmer Rouge regime (1975-1979) systematically murdered educated people—teachers, doctors, engineers, anyone who wore glasses or spoke foreign languages—in a genocidal campaign against intellectuality. When the regime fell, Cambodia had virtually no educated professionals left, no functioning schools, minimal literacy, and a traumatized population. Four decades later, Cambodia has reconstructed basic education infrastructure: primary enrollment reaches 97%, literacy has risen to 81%, and secondary enrollment is expanding. But quantity doesn't mean quality. Cambodia's education system produces students who attend school without learning effectively, teaches through rote memorization rather than understanding, and prepares graduates inadequately for modern employment. The system's fundamental weakness isn't resources—though resources are limited—but pedagogy, accountability, and entrenched practices that persist because challenging them is politically difficult.

The primary system operates with near-universal enrollment, but learning outcomes are alarmingly poor. Regional and international assessments show that many Cambodian students complete primary school without basic literacy and numeracy skills. Grade 3 students often cannot read a simple paragraph; Grade 6 students struggle with basic arithmetic. This isn't a minor gap—it's fundamental failure of the system's core purpose. Children sit in classrooms, but effective instruction doesn't occur. Why? Teacher quality is the primary factor: many teachers themselves lack strong foundational knowledge, particularly in math. Pedagogy training emphasizes control and rote drilling rather than teaching for understanding. Class sizes are large; resources scarce; and teachers often hold second jobs to supplement low government salaries, reducing energy for teaching.

Unofficial fees create access barriers despite nominally free public education. Schools charge for textbooks, uniforms, supplementary classes, and various services—expenses that poor families struggle to afford. These fees are technically illegal but widely practiced because schools lack adequate government funding and teachers supplement inadequate salaries through charging for extra lessons. Students whose families cannot pay face implicit or explicit exclusion. This system perpetuates inequality: wealthy urban students access quality education; poor rural students receive minimal instruction even when enrolled.

Secondary enrollment has expanded—now reaching approximately 50%—but quality deteriorates at higher levels. Lower secondary schools (Grades 7-9) are more common; upper secondary schools (Grades 10-12) are concentrated in towns and cities, requiring rural students to relocate or commute long distances if they want to continue. Many drop out instead, particularly girls facing family pressure to marry or work. For students who persist, instruction remains overwhelmingly lecture-based and focused on exam preparation. The national exam system determines advancement; teachers teach to the test; students memorize without understanding. Cambodia's education system produces graduates who can recite information but struggle with problem-solving, critical thinking, or application—precisely what employers need.

Teacher absenteeism and low morale plague the system. Official salaries for teachers are inadequate—roughly $150-250 monthly, barely sufficient for basic living expenses. Teachers supplement income through private tutoring, operating small businesses, or farming. This means teachers are often tired, distracted, or absent. A culture of low expectations pervades: teachers don't expect much from students; students don't expect much from teachers; parents accept poor quality as normal. Breaking this cycle requires simultaneously raising teacher pay, improving training, enforcing accountability, and changing cultural expectations—a complex, expensive, politically difficult reform package that successive governments have announced but not effectively implemented.

Higher education expanded rapidly, with universities growing from a handful in the 1990s to over 100 today. But growth outpaced quality control. Many universities are businesses selling degrees rather than institutions providing education. Academic standards are low; faculty qualifications minimal; research output negligible. The best institutions—Royal University of Phnom Penh, Institute of Technology of Cambodia—maintain reasonable standards, but even these struggle with limited resources, outdated equipment, and faculty brain drain to better-paying opportunities. Most graduates lack job-ready skills; unemployment and underemployment of university graduates are rising, suggesting oversupply of credentials combined with undersupply of actual competence.

Spending on education is approximately 2.2% of GDP—low by any standard and insufficient for a country trying to build a modern education system from scratch. The government faces competing demands: infrastructure, healthcare, military, debt service. Education receives consistent but inadequate allocation. International donors provide significant support—funding construction, training programs, scholarships—but donor funding is unpredictable and creates dependency. Cambodia needs sustainable domestic funding for education, which requires either economic growth increasing tax revenue or political decisions to prioritize education over competing demands.

Corruption corrodes the system at every level. Positions are bought and sold; grades can be purchased; exam cheating is common; school construction involves kickbacks that reduce quality. Students and families understand that connections and money matter as much as merit. This undermines motivation: why study hard when success depends on connections? Why teach well when advancement depends on political patronage? Corruption isn't an education problem—it's a governance problem affecting education. But until addressed, corruption will prevent education reform from succeeding even if other pieces fall into place.

Cambodia's education system reflects Cambodia's broader development challenges: rapid growth from a very low base, progress in basic indicators, persistent quality problems, corruption undermining institutions, and inequality between urban elites and rural poor. Education has improved markedly since the Khmer Rouge era—almost any comparison flatters current system. But Cambodia's competition isn't its past; it's regional neighbors like Vietnam and Thailand, whose education systems produce graduates far better prepared for modern economy. Cambodia risks falling further behind unless it addresses quality, not just enrollment; teaching, not just building schools; and learning outcomes, not just exam scores. The foundation exists; what's needed now is the political will and institutional capacity to build a system that actually educates.`,
    issues: JSON.stringify([
      'Learning Crisis Despite High Enrollment',
      'Teacher Low Pay and Dual Employment',
      'Corruption in Education System',
      'Poor Quality Control in Higher Education'
    ]),
    topStories: JSON.stringify([
      {
        title: 'Cambodia Primary Students Struggle with Basic Literacy Despite 97% Enrollment',
        source: 'World Bank Education Report',
        link: 'https://worldbank.org/cambodia-education-assessment',
        pubDate: new Date('2025-11-16').toISOString()
      },
      {
        title: 'Teacher Salaries Average $150-250 Monthly, Forcing Dual Employment',
        source: 'Cambodia Ministry of Education',
        link: 'https://moeys.gov.kh/teacher-salary-report',
        pubDate: new Date('2025-11-12').toISOString()
      }
    ]),
    storyCount: 2
  },
  {
    name: 'Laos',
    type: 'country',
    country: 'Laos',
    lat: 19.8563,
    lng: 102.4955,
    category: 'education',
    summary: `Laos has made genuine progress in education over two decades: primary enrollment reached 98%, literacy rose from 73% in 2005 to 85% today, and gender parity in primary and lower secondary education has been achieved. These accomplishments matter—they represent thousands of schools built, teachers trained, and children enrolled who previously had no access. But enrollment statistics conceal what happens inside classrooms. Lao students attend school without learning effectively; teacher quality is poor; resources are scarce; language barriers prevent ethnic minority children from understanding instruction; and rural-urban inequality is stark. Laos faces the same challenge as much of Southeast Asia: having achieved access, the system now must deliver quality. This transition proves far more difficult than building schools.

The language of instruction creates a foundational barrier. Lao is the official language, but approximately one-third of Laos's population belongs to ethnic minority groups speaking languages other than Lao at home. When children enter school speaking Hmong, Khmu, or one of dozens of other minority languages, but instruction occurs in Lao, learning is nearly impossible. Students spend early years struggling to understand the language before they can learn content. Textbooks are in Lao; teachers speak Lao; exams are in Lao. For ethnic Lao children from towns and cities, this presents no problem. For ethnic minority children from remote villages, it creates insurmountable disadvantage. Drop-out rates among ethnic minorities far exceed those of ethnic Lao, reflecting not lack of capability or motivation but a system that doesn't accommodate linguistic diversity.

Teacher quality is the system's most serious weakness. Many teachers, particularly in rural areas, have minimal education themselves—often completing only lower secondary school before becoming teachers. Subject knowledge is weak; pedagogical training is minimal or nonexistent. Teachers rely on rote memorization because that's how they were taught and they lack skills for alternative approaches. In remote areas, teacher recruitment is difficult: salaries are low (approximately $100-150 monthly in rural areas), living conditions harsh, professional isolation total. The most capable teachers seek positions in Vientiane or provincial capitals; rural schools get whoever accepts the posting. High teacher absenteeism reflects low morale, inadequate pay, and limited accountability. When teachers are present, large class sizes (often 30-40 students) and multigrade classrooms (one teacher teaching multiple grade levels simultaneously) make effective instruction nearly impossible even for capable, motivated teachers.

The curriculum is centralized, standardized, and disconnected from many students' lives. Content emphasizes political ideology—Laos is a one-party state governed by the Lao People's Revolutionary Party—and rote learning of facts. Critical thinking, creativity, and inquiry-based learning are not emphasized. Science education is particularly weak: limited equipment, outdated textbooks, and teachers who often lack science knowledge themselves. Students memorize science facts without understanding scientific method or developing analytical skills. This produces graduates unprepared for technical employment or advanced study.

Secondary enrollment drops sharply compared to primary—only about 50% of children continue to lower secondary (Grades 6-9), and fewer than 30% reach upper secondary (Grades 10-12). Geographic access explains part of this decline: lower secondary schools are less common than primary schools; upper secondary schools are concentrated in larger towns. Students from remote villages would need to board away from home to continue—expensive and culturally difficult. But quality and relevance also matter: when education is poor quality and doesn't lead to opportunities, families rationally decide that children's labor is more valuable than continued schooling. Boys work in farming or migration to Thailand; girls face pressure to marry or help with household labor.

Higher education is limited. Laos has one National University and several smaller technical and teacher training colleges. Total enrollment is approximately 80,000 students—a tiny fraction of the population. Quality is poor: faculty lack advanced degrees and research experience; libraries are minimal; laboratories outdated; international collaboration limited. Most instruction is lecture-based; assessment is memorization; research output is negligible. Graduates often lack job-ready skills, contributing to educated unemployment. Those with means and capability study abroad—primarily in Vietnam, Thailand, or China—creating brain drain as many don't return.

Spending on education is officially 2.8% of GDP but actual effective spending is lower due to corruption, inefficiency, and implementation gaps. Budgets announced in Vientiane often don't reach remote schools; construction projects face cost overruns and quality problems; resources are diverted. Laos receives substantial international donor funding for education—World Bank, Asian Development Bank, bilateral aid—but dependency on external funding creates sustainability questions and allows government to underinvest domestically.

Rural-urban inequality is extreme. Vientiane has schools with trained teachers, adequate facilities, and resources; remote mountain villages have one-room schools with minimally educated teachers, no materials, and children who speak languages the teacher barely understands. This isn't minor variation—it's fundamentally different educational experiences that perpetuate inequality. Urban elites attend good schools, learn English, continue to university, and access government and business opportunities. Rural poor receive minimal education, drop out early, work in subsistence agriculture or low-wage labor, and remain trapped in poverty. Education, rather than providing mobility, reinforces existing class and ethnic hierarchies.

Laos needs systematic reform: bilingual education for ethnic minorities, massive teacher training and recruitment efforts, curriculum reform emphasizing understanding over memorization, expanded secondary infrastructure in rural areas, quality control in higher education, and increased domestic funding. Most fundamentally, Laos needs political will to prioritize education not just rhetorically but through sustained resource allocation and reform implementation. The Lao People's Revolutionary Party controls all aspects of governance; if education reform were genuinely prioritized, it could be implemented. That reform remains incomplete after decades suggests education is not actually a priority—or that implementation capacity is so weak that even committed reforms fail. Either way, Lao students pay the price: attending schools that don't effectively educate them, dropping out when education doesn't deliver opportunity, and remaining trapped in poverty that education should help them escape.`,
    issues: JSON.stringify([
      'Language Barriers for Ethnic Minority Students',
      'Severe Teacher Quality and Training Gaps',
      'High Secondary Drop-out Rates',
      'Extreme Rural-Urban Education Inequality'
    ]),
    topStories: JSON.stringify([
      {
        title: 'One-Third of Lao Students Face Language Barriers in Education',
        source: 'UNESCO Laos',
        link: 'https://unesco.org/laos-language-education',
        pubDate: new Date('2025-11-15').toISOString()
      },
      {
        title: 'Only 30% of Lao Students Reach Upper Secondary School',
        source: 'Laos Ministry of Education',
        link: 'https://moes.gov.la/enrollment-statistics',
        pubDate: new Date('2025-11-19').toISOString()
      }
    ]),
    storyCount: 2
  },
  {
    name: 'Myanmar',
    type: 'country',
    country: 'Myanmar',
    lat: 21.9162,
    lng: 95.956,
    category: 'education',
    summary: `Myanmar's education system is collapsing under military rule. Since the February 2021 coup, over 7,000 schools have closed, more than 100,000 teachers have joined the Civil Disobedience Movement refusing to work under junta control, students boycott classes in protest, universities are shuttered or heavily restricted, and the military has arrested educators and students while conducting raids on schools. This isn't deterioration—it's systematic destruction of education driven by a military regime that views educated citizens as threats and education as something to control rather than cultivate. The junta has tried to restart schooling under military curricula, but parents refuse to send children, teachers refuse to teach under military supervision, and students refuse to legitimize the coup by attending. Meanwhile, ethnic armed organizations in border areas operate alternative schools; exile communities run online education; and civil society attempts to provide learning opportunities outside military control. What emerges from this wreckage—if democracy is eventually restored—will depend on whether the current generation of children receives any education at all.

Before the coup, Myanmar's education system had serious problems: outdated curriculum, teacher-centered rote instruction, inadequate funding, and inequality between urban and ethnic minority areas. But schools functioned; universities operated; students learned at least basic literacy and numeracy; and slow progress was occurring—curriculum reform, teacher training, infrastructure improvement. The National League for Democracy government (2016-2021) had prioritized education, increasing spending and implementing reforms. The coup destroyed this progress. Teachers who joined the Civil Disobedience Movement face arrest; schools that remain closed lack teachers; students who protest face violence; universities that reopen enforce military-approved curriculum and exclude students who participated in protests. Many families have fled conflict areas, creating internal displacement that makes school attendance impossible. In ethnic minority regions facing active conflict—Chin State, Karen State, Kachin State, Shan State—schools are caught in violence, used as military bases, or destroyed.

The junta's curriculum revision emphasizes obedience, nationalism, and military glorification while removing content deemed politically sensitive. History is rewritten to portray the military favorably; civics education emphasizes duty to state rather than citizen rights; critical thinking is actively discouraged. This isn't education—it's indoctrination. Parents understand this, which is why many refuse to send children to military-controlled schools even when they reopen. The dilemma is agonizing: let children miss education, or send them to schools that indoctrinate them with military propaganda? Many families choose the former, accepting educational loss to maintain children's moral and political consciousness.

Alternative education has emerged in resistance-controlled areas and online. Ethnic armed organizations like the Karen National Union have operated schools in their territories for decades; these have expanded to accommodate students fleeing military-controlled areas. Civil society organizations offer online classes, using messaging apps and video platforms to reach students. The National Unity Government—the civilian government in exile—has established an alternative education system attempting to provide curriculum and credentials outside military control. These alternatives are admirable but insufficient: they reach only a fraction of students, lack resources and coordination, and cannot replace a functioning national education system.

Higher education has been particularly targeted. Universities in Myanmar have historically been sites of political activism; the military views educated youth as threats. After the coup, universities were closed; when some reopened, the military imposed restrictive curricula, surveillance of students and faculty, and exclusion of those who participated in protests. Many students boycott; faculty who opposed the coup fled or were arrested; academic freedom doesn't exist. Myanmar's universities, already weak by regional standards, have been reduced to shells. Students who can afford it study abroad; most cannot and face the prospect of years without higher education. This represents catastrophic loss of human capital—a generation whose education is interrupted or terminated, whose potential is wasted, whose skills Myanmar will desperately need if democracy is restored.

Ethnic minority education has always been contentious in Myanmar. The military-dominated state has emphasized Burman ethnicity and Buddhist religion; ethnic minorities—Karen, Kachin, Chin, Shan, and others—have sought education in their own languages and reflecting their cultures. Before the coup, some progress had occurred in allowing mother-tongue education. The coup reversed this: military curriculum is in Burmese, emphasizes Burman-Buddhist identity, and marginalizes minorities. In ethnic armed organization-controlled areas, education continues in local languages, but these areas face military offensives, displacement, and resource constraints that make consistent education difficult.

The long-term damage is incalculable. Children who should be in school are at home, working, or fighting. Teachers are hiding, imprisoned, or have changed professions. University students have lost years of education; many will never return. Infrastructure is damaged or repurposed; materials are outdated or destroyed; institutions are hollowed out. When—if—democracy is restored, Myanmar will face the enormous task of rebuilding an education system from ruins: retraining teachers, reconstructing curriculum, rebuilding trust, reintegrating displaced students, and addressing years of lost learning. Other countries have faced similar challenges—Iraq after Saddam, Afghanistan after the Taliban's first rule, Cambodia after the Khmer Rouge—and the recovery process takes decades.

Myanmar's education system is a casualty of military rule, just as Myanmar's democracy, economy, and civil society are casualties. The military views education instrumentally—as a tool for indoctrination and control. They don't understand, or don't care, that education is foundational to development, that educated populations drive prosperity, that destroying education destroys the country's future. Or perhaps they do understand and don't care because their goal isn't national development but regime preservation, and they've calculated that an educated population threatens their control. Either way, Myanmar's children pay the price: missing school, losing learning, sacrificing their futures to a military regime that fears educated citizens more than it values national progress. The tragedy is that Myanmar's education system was slowly improving; the coup didn't just halt progress—it reversed it, potentially by decades.`,
    issues: JSON.stringify([
      '7,000 Schools Closed Since 2021 Coup',
      'Over 100,000 Teachers in Civil Disobedience Movement',
      'University Closures and Student Boycotts',
      'Military Indoctrination Curriculum'
    ]),
    topStories: JSON.stringify([
      {
        title: 'Over 7,000 Myanmar Schools Closed Since Military Coup',
        source: 'UNICEF Myanmar',
        link: 'https://unicef.org/myanmar-education-crisis',
        pubDate: new Date('2025-11-17').toISOString()
      },
      {
        title: '100,000 Teachers Join Civil Disobedience Movement Refusing Military Rule',
        source: 'Save the Children Myanmar',
        link: 'https://savethechildren.org/myanmar-teachers-strike',
        pubDate: new Date('2025-11-13').toISOString()
      }
    ]),
    storyCount: 2
  },
  {
    name: 'Nepal',
    type: 'country',
    country: 'Nepal',
    lat: 28.3949,
    lng: 84.124,
    category: 'education',
    summary: `Nepal's education system has achieved impressive expansion: primary enrollment reaches 97%, literacy has risen to 68% (from below 50% in 2000), and gender gaps have narrowed significantly. These gains reflect political commitment following democracy's restoration and civil war's end in 2006, increased education spending, and societal recognition of education's value. But expansion has outpaced quality improvement. Nepal has built schools and enrolled students without ensuring they learn effectively. The result is visible in assessment data: many Nepali students complete primary school lacking basic literacy and numeracy. Quality problems persist across the system—from poor teacher training to inadequate infrastructure, from outdated curriculum to limited resources—creating a situation where access exists but educational outcomes remain poor.

The structure operates across steep geographic divides. Nepal's mountains, hills, and Terai (plains) create different educational realities. Kathmandu Valley and major towns have schools with trained teachers, adequate buildings, and learning materials. Remote mountain communities often have one-room schools with minimally trained teachers, lacking electricity, textbooks, and sometimes basic furniture. Students in remote areas face long, dangerous commutes—walking hours over mountain paths—particularly at secondary level when schools are fewer and farther. Seasonal migration affects enrollment: families move for work, taking children out of school; boys migrate to India or Gulf states for employment; girls face early marriage pressure. These disruptions mean that enrollment statistics overstate actual attendance and learning continuity.

Teacher quality is the system's central weakness. Many teachers, particularly in rural areas, lack adequate education themselves—some have completed only Grade 10 before becoming teachers. Subject knowledge is weak; pedagogical training minimal. Teachers rely on lecture and rote memorization because they lack skills for inquiry-based, student-centered methods. The teacher recruitment system has been politicized: positions are distributed based on party loyalty rather than merit; ghost teachers draw salaries without teaching; accountability is weak. Teacher absenteeism is common, reflecting low morale, inadequate supervision, and a culture where absence is tolerated. Salaries have improved recently but remain inadequate to attract the most capable individuals, particularly in remote areas where hardship allowances don't compensate for difficult conditions and isolation.

Private schools have expanded rapidly, creating a two-tier system. Urban middle-class families increasingly choose private English-medium schools over government schools, believing—often correctly—that quality is higher. Private schools hire better teachers (paying higher salaries), maintain discipline, use English instruction (valued for future opportunities), and achieve better exam results. This bifurcation has perverse effects: as middle-class families exit government schools, political pressure for improvement decreases; government schools increasingly serve only the poor; inequality deepens. Nepal is creating an education system where money determines quality, and quality determines outcomes—the opposite of education as equalizer.

The School Sector Development Program (SSDP), Nepal's comprehensive education reform, aims to improve quality through teacher training, curriculum reform, infrastructure development, and equitable financing. Implementation has been mixed. Some improvements are visible: more schools have been constructed, teacher training has expanded, scholarship programs for disadvantaged students have increased. But systemic change is slow: most classrooms still rely on rote methods; assessments still emphasize memorization; teacher accountability remains weak; corruption diverts resources. Reform documents are ambitious; implementation is incomplete.

Secondary education faces particular challenges. While primary enrollment is near-universal, secondary enrollment drops to about 75% for lower secondary and 50% for upper secondary. Access is one reason—secondary schools are fewer and farther, requiring students to commute or board. But quality and relevance matter too: when secondary education is poor quality and doesn't lead to opportunities, families rationally prioritize children's labor over continued schooling. Boys migrate for work; girls marry or help with household labor. The opportunity cost of secondary education—foregone earnings or labor—exceeds its perceived benefits for many families.

Higher education has expanded dramatically: university enrollment grew from roughly 100,000 in 2000 to over 500,000 today, driven by public university expansion and private college proliferation. But quality is deeply inconsistent. Tribhuvan University—Nepal's largest and oldest—struggles with overcrowding, outdated curriculum, limited research capacity, and politically influenced administration. Many private colleges are businesses selling degrees with minimal academic standards. Graduates often lack job-ready skills, contributing to educated unemployment. Many Nepali students study abroad if they can afford it—India, Australia, the United States—with uncertain return rates as graduates often seek employment abroad rather than returning to limited opportunities in Nepal.

Spending on education is approximately 5% of GDP—respectable by regional standards—but effective use is undermined by corruption, bureaucratic inefficiency, and poor planning. Resources announced in Kathmandu often don't reach remote schools; construction projects face delays and quality issues; textbook distribution is unreliable. Donors provide substantial funding, but the system's absorption capacity is limited: money exists, but implementation capacity—competent management, honest administration, effective oversight—is insufficient to use it effectively.

Caste and ethnic inequality persist. Dalits (low-caste groups) and Janajatis (indigenous ethnic groups) face discrimination that affects educational access and outcomes. Schools in Dalit communities receive fewer resources; Dalit children face discrimination from teachers and classmates; dropout rates are higher. Indigenous groups seek education in mother tongues, but the system primarily operates in Nepali, creating language barriers similar to those in Laos and Cambodia. Girls from disadvantaged communities face compounded barriers: gender, caste, poverty, and geography interact to produce extremely limited educational opportunities.

Nepal's education system reflects broader development challenges: rapid progress from very low baseline, significant remaining gaps, urban-rural inequality, corruption undermining institutions, and political instability affecting policy continuity. Education has improved markedly—any comparison to conditions 25 years ago flatters the current system. But Nepal's comparison isn't its past; it's regional neighbors and its own aspirations for middle-income status. Nepal needs to shift from access to quality, from building schools to ensuring learning, from enrolling students to graduating them with actual skills. This requires confronting teacher quality honestly, addressing corruption systematically, reducing private-public inequality, and ensuring resources reach remote communities. Nepal has demonstrated it can expand access; whether it can deliver quality remains uncertain.`,
    issues: JSON.stringify([
      'Severe Teacher Training and Quality Gaps',
      'Geographic Access Barriers in Mountain Regions',
      'Growing Private-Public Education Divide',
      'Learning Crisis Despite High Enrollment'
    ]),
    topStories: JSON.stringify([
      {
        title: 'Nepal Literacy Rises to 68% But Learning Outcomes Lag',
        source: 'Nepal Ministry of Education',
        link: 'https://moe.gov.np/literacy-report',
        pubDate: new Date('2025-11-16').toISOString()
      },
      {
        title: 'Secondary Enrollment Drops to 50% for Upper Grades',
        source: 'World Bank Nepal',
        link: 'https://worldbank.org/nepal-secondary-education',
        pubDate: new Date('2025-11-12').toISOString()
      }
    ]),
    storyCount: 2
  },
  {
    name: 'Mongolia',
    type: 'country',
    country: 'Mongolia',
    lat: 46.8625,
    lng: 103.8467,
    category: 'education',
    summary: `Mongolia has achieved near-universal literacy (98%), high primary enrollment, and gender parity in education—accomplishments that many developing countries aspire to match. These outcomes reflect the Soviet legacy: Mongolia was a Soviet satellite from the 1920s to 1990, and the Soviet system, whatever its political flaws, took education seriously. Universal schooling was established, teacher training was systematic, and literacy campaigns were effective. Post-1990 democratic transition created challenges—economic crisis, system disruption, emigration—but Mongolia maintained commitment to education even through difficult years. Today, Mongolia's education system functions: children attend school, teachers are trained, facilities exist. But the system faces 21st-century challenges that Soviet-era structures don't address: teaching critical thinking rather than rote memorization, developing skills for knowledge economy, addressing rural-urban inequality, and ensuring that high enrollment translates to genuine learning outcomes.

The structure reflects Mongolia's unique geography: approximately half the population lives in Ulaanbaatar, with the remainder scattered across vast countryside where nomadic pastoralism remains common. Ulaanbaatar has schools comparable to middle-income countries: adequate buildings, trained teachers, learning materials, technology. But serving dispersed rural and nomadic populations creates challenges. Mongolia operates dormitory schools where rural children board during the school year—a practical solution to distance, but one that separates young children from families and creates oversight challenges. Some remote areas have small schools with limited resources and less-qualified teachers. Nomadic families' seasonal migration complicates consistent attendance. These geographic challenges aren't unique to Mongolia, but Mongolia's population density—the world's lowest—makes them particularly acute.

Teaching quality has declined from Soviet standards. During Soviet era, teachers received rigorous training, decent salaries, and social prestige. Post-1990 economic crisis meant teacher salaries fell in real terms; capable individuals chose other professions; teacher training quality deteriorated; social status declined. Recent improvements—salary increases, better training programs—have helped, but Mongolia still struggles to attract the most talented individuals to teaching. Pedagogy remains largely traditional: lecture-based, focused on memorization, teacher-centered. The curriculum has been updated to remove Soviet ideology and emphasize Mongolian history and culture, but pedagogical methods haven't evolved substantially. Students excel at reproducing information but struggle with problem-solving, creativity, and critical analysis—precisely the skills modern economy rewards.

PISA results, which Mongolia first participated in during 2018, show performance below OECD averages in math, science, and reading. This isn't catastrophic—many countries perform similarly—but it contradicts the narrative of Mongolian education excellence. High enrollment and literacy don't automatically translate to strong learning outcomes. The PISA results have prompted soul-searching: why don't Mongolian students perform better given near-universal access and high literacy? The answer points to pedagogy, curriculum relevance, teacher quality, and assessment methods that measure memorization rather than understanding.

Higher education expanded rapidly post-1990: Mongolia now has over 90 universities and colleges (up from a handful in 1990), serving approximately 150,000 students. But rapid expansion diluted quality. Many institutions are small, under-resourced, and lack qualified faculty. Academic standards vary widely; research output is limited; many degrees don't prepare students for employment. The best institutions—National University of Mongolia, Mongolian University of Science and Technology—maintain reasonable standards, but many others function primarily as credentialing mills. Graduate unemployment and underemployment are rising—signs that education system output doesn't match labor market needs. Mongolia's economy, heavily dependent on mining, doesn't generate enough skilled jobs to absorb university graduates, many of whom have degrees in humanities or social sciences with limited practical application.

Rural-urban inequality is stark and worsening. Ulaanbaatar attracts resources, talent, and opportunities; countryside loses population through rural-to-urban migration. This brain drain concentrates educated populations in the capital, leaving rural areas with aging populations and limited human capital. Children from rural areas who succeed in school often leave for Ulaanbaatar and don't return, depleting rural communities of educated leadership. This pattern is common globally but particularly pronounced in Mongolia where Ulaanbaatar dominates the national economy and nearly half the population lives there.

Language is less contentious than in many countries—Mongolian is spoken throughout the country (though with dialectal variation), and ethnic minorities are small percentage of population. But foreign language instruction, particularly English, is weak. English is taught but often by teachers who themselves don't speak English fluently; instruction emphasizes grammar and vocabulary memorization rather than communicative competence. This limits Mongolian students' access to global opportunities, international education, and information available primarily in English.

Spending on education is approximately 4.6% of GDP—respectable by regional standards—but economic fluctuations affect allocation. Mongolia's economy is heavily dependent on mineral exports (particularly copper and coal), making revenues volatile. When commodity prices fall, education budgets are squeezed; when they rise, spending increases. This creates instability: reforms announced during boom times are cut during downturns; teacher salaries rise then stagnate; infrastructure projects start then halt. Stable, predictable funding is necessary for education system improvement; Mongolia's commodity-dependent economy makes this difficult.

The digital divide reflects broader inequality. Urban students, particularly in Ulaanbaatar, have access to computers, internet, and technology; rural students often lack electricity, let alone internet connectivity. COVID-19 exposed this divide harshly: when schools closed, urban students transitioned to online learning; rural students simply lost months of education. Technology could help address Mongolia's geographic challenges—distance learning for remote areas, virtual professional development for rural teachers, online resources for small schools. But without infrastructure, this potential remains unrealized.

Mongolia's education system is a paradox: strong on traditional metrics (enrollment, literacy, years of schooling) but weaker on outcomes (actual learning, skills development, job preparation). The Soviet legacy provided a solid foundation, but that foundation needs renovation for 21st-century needs. Mongolia needs pedagogical reform to emphasize critical thinking and problem-solving, higher education quality control to ensure degrees signify competence, teacher training to attract and develop better educators, and rural investment to reduce urban-rural inequality. Mongolia has the literacy, enrollment, and institutional foundation to build an excellent education system. Whether political will, economic resources, and implementation capacity align to make that happen will determine whether Mongolia's educated population drives development or emigrates to countries that better utilize their skills.`,
    issues: JSON.stringify([
      'PISA Results Below OECD Averages',
      'Teaching Quality and Pedagogy Outdated',
      'Rural-Urban Education Inequality',
      'Graduate Unemployment and Skills Mismatch'
    ]),
    topStories: JSON.stringify([
      {
        title: 'Mongolia PISA Results Show Learning Gaps Despite High Literacy',
        source: 'OECD',
        link: 'https://oecd.org/pisa/mongolia-results',
        pubDate: new Date('2025-11-14').toISOString()
      },
      {
        title: 'Rural Brain Drain Concentrates Educated Population in Ulaanbaatar',
        source: 'Mongolia Ministry of Education',
        link: 'https://mecs.gov.mn/rural-urban-report',
        pubDate: new Date('2025-11-20').toISOString()
      }
    ]),
    storyCount: 2
  }
]

async function addEducationSummariesToDatabase() {
  console.log('Adding education category summaries for Batch 6 countries...\n')

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
