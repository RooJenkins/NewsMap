import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const countries = [
  {
    name: 'Finland',
    lat: 61.9241,
    lng: 25.7482,
    summary: `Finland's education system has become the world's most studied—and most misunderstood. Yes, Finnish fifteen-year-olds consistently rank near the top on PISA assessments. Yes, teachers need master's degrees and enjoy autonomy that would make American educators weep with envy. Yes, there's no standardized testing before age sixteen, minimal homework, and frequent breaks. But if you think you can transplant these practices to your country and get Finnish results, you've missed the point entirely.

Finland's success emerges from a comprehensive social contract, not pedagogical tricks. Teachers are respected professionals precisely because entry is highly selective—only one in ten applicants gains admission to teacher education programs. They're trusted to design curriculum and assess students because they've earned that trust through rigorous preparation. The system can afford flexibility because inequality is low; when most children arrive at school well-fed, housed, and healthy, you don't need constant testing to identify which ones are falling through cracks.

The structure is deceptively simple. Nine years of comprehensive school, undivided by tracking, followed by either academic upper secondary or vocational pathways—and crucially, both are respected. Finnish vocational education isn't a dumping ground; it's a legitimate choice leading to skilled careers. Universities are tuition-free and selective. The University of Helsinki ranks among Europe's best research institutions, punching above its weight for a country of 5.5 million.

But Finland's miracle is fading, and Finns know it. PISA scores have declined since the 2006 peak. Teacher shortages are emerging as salaries, while decent, haven't kept pace with private sector opportunities for talented graduates. Education spending as a percentage of GDP has slipped. Screen time, social media, and smartphone addiction affect Finnish children just as they do kids everywhere, with evidence suggesting concentration and reading comprehension are suffering.

Most troublingly, inequality is creeping in. The gap between highest and lowest performers is widening. Immigrant students, primarily from Somalia, Iraq, and Afghanistan, score significantly below native Finns, revealing that the famously equitable system struggles when confronting diversity it wasn't designed for. Some schools in Helsinki now face challenges that look less like the Finnish ideal and more like problems familiar anywhere: concentrated disadvantage, language barriers, resource strain.

The Finnish education conversation today isn't about exporting a model—it's about whether Finland can adapt its system to twenty-first century realities without losing what made it work. That's a more interesting question than the one usually asked.`,
    issues: ['Declining PISA scores since 2006 peak', 'Emerging teacher shortages and recruitment challenges', 'Growing achievement gap and inequality', 'Immigrant student integration and performance gaps', 'Screen time and digital distraction impacts']
  },
  {
    name: 'Denmark',
    lat: 56.2639,
    lng: 9.5018,
    summary: `Denmark invests more in education than nearly anyone—7.1 percent of GDP, among the world's highest—yet Danish students perform merely average on international assessments. If you believe educational spending automatically produces excellence, Denmark is the uncomfortable counterexample. The money is real, the commitment genuine, but something isn't translating to PISA glory. Understanding why tells us more about education than any league table.

Danish schooling reflects broader cultural values: egalitarianism, informality, and "hygge"—that untranslatable coziness that extends even to classrooms. The folkeskole provides free comprehensive education from age six to sixteen, with minimal tracking and strong emphasis on collaboration over competition. Upper secondary splits between academic gymnasium (about 60 percent) and vocational programs, with apprenticeship tradition remaining strong—Denmark never made the mistake of treating vocational education as second-class.

Teachers need bachelor's degrees (transitioning to master's requirement) and undergo practical training, but Danish teaching doesn't carry the prestige it holds in Finland or Singapore. Salaries are reasonable, autonomy exists, but recruitment challenges persist, particularly in math and science. The profession attracts caring people committed to child development; whether it attracts enough of the most academically talented is debatable.

Universities are free for EU citizens, funded through high taxation. The University of Copenhagen and Technical University of Denmark rank respectably globally, conducting strong research especially in life sciences, sustainability, and engineering. Denmark produces educated citizens, but brain drain is real—many talented Danes pursue postgraduate education and careers abroad, attracted by higher salaries and research budgets elsewhere.

The PISA puzzle haunts Danish educators. Reading, math, and science scores hover around OECD average despite massive investment. Various explanations circulate: too much emphasis on well-being over achievement, insufficient rigor, grade inflation making it hard to identify struggling students, or simply that Denmark optimizes for outcomes PISA doesn't measure—creativity, collaboration, life satisfaction. There's probably truth in all of these.

Recent reforms have attempted to raise standards: more mandatory hours, earlier foreign language instruction, strengthened core subjects. Whether these moves compromise what's valuable about Danish education—the emphasis on child agency, democratic participation, and learning as something broader than test preparation—remains contested. The question Denmark faces is whether to chase PISA rankings or stay true to a different educational vision. That's not a question with an obvious answer.`,
    issues: ['High spending but average PISA performance puzzle', 'Teacher recruitment challenges in STEM fields', 'Brain drain of top talent abroad', 'Tension between well-being focus and achievement', 'Grade inflation and assessment rigor concerns']
  },
  {
    name: 'Ireland',
    lat: 53.4129,
    lng: -8.2439,
    summary: `Ireland's education system produces the European Union's highest-performing readers, according to PISA 2022, yet one in six students leaves school without basic literacy skills. This contradiction captures Irish education perfectly: excellent at the top, worrying gaps at the bottom, and an ongoing struggle to reconcile tradition with transformation.

The structure combines British inheritance with Catholic influence and recent modernization. Primary school lasts eight years (ages 4-12), followed by secondary with a Junior Cycle and Senior Cycle culminating in the Leaving Certificate—the high-stakes exam determining university access. This exam dominates Irish secondary education, for better and worse. It provides clear standards and meritocratic selection; it also drives teaching to the test, creates immense student stress, and arguably narrows what gets valued.

Ireland's teaching force is well-educated—nearly all hold university degrees—but the profession faces challenges. Primary teachers in Ireland are among the highest-paid in Europe relative to GDP per capita, yet recruitment issues persist, particularly in disadvantaged areas and for subjects like Irish language, math, and science. The requirement that most primary teachers in Catholic schools hold a Catholic qualification (dating to denominational control of most schools) has faced increasing criticism as society secularizes.

Universities punch above Ireland's weight. Trinity College Dublin, University College Dublin, and others rank well globally. The sector has expanded dramatically—over 60 percent of young Irish people now pursue tertiary education, among Europe's highest rates. But this expansion occurred without proportional funding increases, leading to overcrowded lectures, deteriorating facilities, and academics increasingly focused on securing research grants rather than teaching.

The inequality picture is complex. Ireland's PISA equity metrics are mediocre; socioeconomic background predicts achievement more than it should. The DEIS program (Delivering Equality of Opportunity in Schools) targets disadvantage through additional resources to schools serving poor communities, but impact has been uneven. Traveller children, students with special needs, and those in certain urban disadvantaged areas still experience dramatically inferior outcomes.

Irish-language education presents its own questions. All students must study Irish through secondary school, yet fluency rates remain low—it's the rare case of compulsory language instruction largely failing its stated goal. Gaelscoileanna (Irish-medium schools) are growing, often attracting middle-class families seeking something different, but whether this represents cultural revival or educational consumerism is debated.

Ireland's education challenge is to extend excellence more broadly while questioning whether Leaving Certificate exams should continue dominating everything else.`,
    issues: ['One in six students leave without basic literacy despite high overall PISA scores', 'Leaving Certificate exam dominance and student stress', 'University funding crisis and overcrowding', 'Socioeconomic achievement gaps and inequality', 'Irish language compulsory education with limited fluency results']
  },
  {
    name: 'Hungary',
    lat: 47.1625,
    lng: 19.5033,
    summary: `Hungary's education system is becoming a laboratory for how politics can reshape schooling—not through incremental reform but through deliberate reconstruction. Since 2010, the Orbán government has centralized control, rewritten curricula to emphasize national identity and Christian values, restricted university autonomy, and effectively pushed Central European University out of the country. Whether this represents restoration of traditional values or authoritarian overreach depends on who you ask, but the transformation is undeniable.

The structure remains recognizable: eight years primary, four years secondary (academic gimnázium or vocational), followed by universities and colleges. But content and governance have shifted dramatically. The National Core Curriculum now emphasizes Hungarian history, literature, and culture more explicitly. Religious education options have expanded. Textbooks are state-approved and often written by government-aligned publishers. Teachers work under a centralized employment system that reduced autonomy and union power.

Hungarian students' performance on international assessments has declined over the past decade, particularly in reading and science. PISA 2022 showed Hungary falling further behind, with scores now below OECD average. Math performance holds up better, reflecting Hungary's historical strength in mathematics education—the country that produced Erdős, von Neumann, and the Martians has kept that tradition partially alive.

But the most damning statistic is inequality. Hungary shows the largest gap in Europe between high and low socioeconomic status students. Put bluntly, if you're born to educated, middle-class parents in Budapest, Hungarian schools work fine. If you're Roma, rural, or poor, the system largely fails you. The Roma student achievement gap is a chasm; segregation, both formal and de facto, remains widespread despite being technically illegal.

University education faces particular tension. The government has redirected funding toward vocational training and away from social sciences and humanities. Several universities have been reorganized under foundation control with government-aligned boards. Academic freedom concerns have prompted international criticism. Many talented Hungarian students pursue degrees abroad and don't return—brain drain that Hungary, with a shrinking population, can ill afford.

Teacher shortages have become critical. Salaries remain low relative to other professions requiring similar education—a Hungarian teacher earns about 70 percent of the average college graduate wage. Thousands of teaching positions go unfilled, particularly in math, science, and languages. The profession struggles to attract young talent when private sector opportunities pay significantly more.

The question for Hungary is whether its education system can produce the skilled, flexible thinkers needed for twenty-first century economy while prioritizing ideological conformity. History suggests that's difficult.`,
    issues: ['PISA scores declining, now below OECD average', 'Largest socioeconomic achievement gap in Europe', 'Severe Roma student segregation and underperformance', 'Critical teacher shortages and low relative salaries', 'Academic freedom restrictions and university political control']
  },
  {
    name: 'Czech Republic',
    lat: 49.8175,
    lng: 15.4730,
    summary: `The Czech Republic's education system produces excellent results for children whose parents have university degrees and disappointing ones for everyone else. If you want a single statistic capturing Czech education, that's it. PISA data shows socioeconomic status predicting achievement more strongly in the Czech Republic than almost anywhere in Europe—a pattern that should embarrass a country priding itself on meritocracy.

The system's structure reflects its Austro-Hungarian and Communist inheritances. Primary school runs from age six to fifteen, with the crucial decision point at age ten or eleven: stay in primary school, or test into gymnázium (academic track) or specialized schools. This early tracking, earlier than most European countries, essentially determines life trajectories. The gymnázium-bound generally proceed to university; the remainder toward vocational tracks or less selective secondary schools.

Early selection advantages children whose families understand the system, can afford tutoring, and prioritize academic achievement—disproportionately the already-privileged. It's particularly brutal for Roma children, who are massively overrepresented in "practical schools" (for students with mild disabilities) and underrepresented in gymnázia. Despite reforms and EU pressure, Roma segregation in Czech education remains entrenched.

When it works, Czech education works well. Gymnázium students perform at high levels, particularly in math and science—the country maintains Central European mathematical strength. Universities like Charles University and Czech Technical University in Prague rank respectably. The Czech Republic produces engineers, scientists, and skilled workers for its manufacturing-based economy.

But teacher quality concerns are growing. The profession attracts fewer top students than in past generations. Salaries have improved recently—teachers now earn around the OECD average relative to GDP per capita—but shortages persist, especially in Prague and other cities where cost of living has risen faster than teacher pay. Veteran teachers retiring are replaced by less experienced colleagues, if positions fill at all.

Vocational education remains stronger than in many Western countries, with continued apprenticeship culture connecting schools to industries. This should be a strength, but it's compromised by the early tracking that sorts children before they can make informed choices about their futures.

The Czech debate centers on whether to delay tracking, as most evidence suggests this would improve equity without harming top performers. Resistance comes from gymnázium parents who fear that making the system fairer means making it worse for their children—the eternal zero-sum fallacy of education politics. The evidence from countries that delayed tracking suggests otherwise, but changing a system requires believing change is possible.`,
    issues: ['Extreme socioeconomic achievement gap, worst in Europe', 'Early tracking at age 10-11 entrenching inequality', 'Severe Roma student segregation in "practical schools"', 'Teacher quality and recruitment concerns', 'Resistance to delaying selection despite equity evidence']
  },
  {
    name: 'Bulgaria',
    lat: 42.7339,
    lng: 25.4858,
    summary: `Bulgaria's education system faces a crisis so fundamental it questions whether the system can survive in its current form: there aren't enough students. Bulgaria's population has declined from 9 million in 1989 to under 6.5 million today, with birth rates plummeting and emigration draining young families. Rural schools close for lack of children. Universities admit nearly everyone who applies because they need the tuition revenue. This demographic collapse shapes everything.

In what remains, structure follows familiar European patterns: primary through grade 7, secondary from grades 8-12, with options for academic or vocational tracks. The introduction of external matriculation exams after grade 7 and at graduation attempted to standardize assessment, reduce corruption, and ensure quality. These exams partly succeeded—grade-buying became harder—but also increased pressure and teaching-to-test.

Bulgarian students' international assessment performance has deteriorated. PISA 2022 showed Bulgaria among the EU's lowest performers in reading, math, and science. Nearly half of fifteen-year-olds lack basic literacy skills—they can decode words but struggle with comprehension, inference, or critical analysis. This is catastrophic for individual life chances and national economic prospects.

The Roma education gap compounds the crisis. Approximately 10 percent of Bulgaria's population is Roma, but they represent far higher percentages of students without basic skills, school dropouts, and children in segregated "Roma schools" that provide inferior education. Integration efforts have had limited success; discrimination, poverty, and mutual distrust perpetuate separation.

Teacher shortages have become acute. Salaries are low—among the lowest in the EU relative to average national wages. The profession can't compete with private sector opportunities or emigration. Young graduates who become teachers often leave within a few years, either for better-paying jobs in Bulgaria or to teach (or do anything else) in Western Europe. Those who remain are often older, approaching retirement, or unable to leave.

University quality varies enormously. Sofia University and a few others maintain research capacity and reasonable standards. But the proliferation of private universities and the desperation of public ones to fill seats has compromised quality. Degrees are devalued when universities can't fail students they need for revenue. Brain drain continues—talented Bulgarians pursue graduate education abroad and frequently don't return.

Bulgaria's education future depends on whether the country can reverse population decline and create economic opportunities that keep young people home. Without students and without teachers, reforms are academic—in the worst sense of that word.`,
    issues: ['Catastrophic population decline and school closures', 'Nearly half of students lack basic literacy skills', 'Severe Roma segregation and achievement gaps', 'Acute teacher shortages and low salaries', 'University quality compromised by desperation for enrollment']
  },
  {
    name: 'Croatia',
    lat: 45.1,
    lng: 15.2,
    summary: `Croatia's education system is competent, reasonably well-structured, and slowly being drained of its young people and teachers. The country faces the challenge common across the Balkans and Eastern Europe: how do you maintain quality education when your most talented citizens emigrate, birth rates collapse, and economic opportunities remain limited? There's no obvious answer, and Croatia hasn't found one yet.

The system follows Central European traditions. Eight years of primary school, four years of secondary (either gymnázium for university-bound students or vocational schools), then universities and polytechnics. The State Matura, introduced in 2010, provides standardized university entrance exams in Croatian, mathematics, and foreign language, with additional subject tests depending on intended field of study. This brought needed transparency and reduced corruption in university admissions.

Croatian students perform around OECD average on PISA, which sounds fine until you realize the OECD average has been declining. Math and science scores are mediocre; reading is slightly better. More concerning than the average is the spread—high variation between best and worst performers, and strong correlation between socioeconomic background and achievement. The children of educated parents in Zagreb do well; rural children in Slavonia struggle.

Teacher quality concerns are growing. Croatia nominally requires master's degrees for secondary teachers, but enforcement is inconsistent. Salaries are mediocre—above some Balkan neighbors, below Western European levels—and can't compete with opportunities elsewhere. Since Croatia joined the EU in 2013 and especially after joining Schengen and adopting the Euro in 2023, mobility has increased. Croatian teachers can now easily work in Austria, Germany, or Slovenia for higher pay. Many do.

University education faces similar pressures. The University of Zagreb, Split, and Rijeka conduct respectable research in some fields, but funding is tight and facilities often outdated. Croatian universities can't compete with Western institutions for talent—neither students nor faculty. The brightest Croatian students increasingly pursue undergraduate degrees abroad, and few return. Faculty members who can secure positions elsewhere often take them.

Curriculum reform efforts have attempted to modernize, reduce rote learning, and emphasize critical thinking. Whether these reforms penetrate actual classroom practice is questionable. Croatia inherited a tradition of formal, teacher-centered instruction, and changing pedagogical culture is slow work everywhere.

The fundamental question Croatia faces is whether it can create an economy and society that makes talented young people want to stay. Education depends on students and teachers. When both groups are leaving, improving pedagogy and curriculum matters less than you'd think.`,
    issues: ['Emigration of teachers and students to Western Europe', 'Mediocre PISA scores with high variation', 'Strong socioeconomic achievement correlation', 'Teacher salaries uncompetitive with EU opportunities', 'Brain drain of university talent and students']
  },
  {
    name: 'Estonia',
    lat: 58.5953,
    lng: 25.0136,
    summary: `Estonia is what happens when a small country decides education is an economic development strategy. With just 1.3 million people and a history of occupation—German, Swedish, Russian, Soviet—Estonians concluded their survival requires being smarter, more skilled, and more digitally capable than larger neighbors. The education system became the vehicle for that ambition, and the results are remarkable.

Estonian fifteen-year-olds rank first in Europe on PISA assessments, outperforming wealthier, larger countries. They excel in reading, math, and science, with particular strength in digital literacy—unsurprising for a country that made internet access a legal right and teaches coding from first grade. The "e-Estonia" digital infrastructure extends to education: digital textbooks, online gradebooks, automated administrative systems. This isn't technology for technology's sake; it's efficiency and transparency in a country that can't afford waste.

The structure is straightforward: nine years of basic school, three years of upper secondary (academic or vocational), then universities and vocational colleges. But structure matters less than culture. Estonian teachers need master's degrees, undergo competitive selection, and maintain professional autonomy. Teacher salaries were raised significantly in the past decade to near-average EU levels—a real sacrifice for a country with limited resources but a recognition that teaching quality determines everything else.

Curriculum emphasizes problem-solving over memorization, though Estonian students still work hard—PISA success isn't magic. There's homework, there are expectations, and students are held accountable. But the system also builds in flexibility, supports struggling students early, and doesn't track children into separate paths until upper secondary. The result is high average performance and low variance—Estonia succeeds with most students, not just the elite.

Challenges exist. The Russian-speaking minority (about 25 percent of the population) presents integration questions. Russian-medium schools exist, but students perform below Estonian-medium school averages, partly due to language barriers affecting assessment, partly due to social separation. How to integrate this population while respecting minority rights remains contested, especially given geopolitical tensions with Russia.

Teacher shortages are emerging despite salary increases. Estonia's population is aging and shrinking. Young Estonians have EU mobility and can pursue careers anywhere. Maintaining teaching quality when the talent pool is limited requires continuing to make the profession attractive—not just financially but in autonomy, respect, and working conditions.

Estonia's education success story demonstrates that small countries with limited resources can achieve excellence through strategic focus, investment in teachers, and systemic coherence. Whether they can sustain it amid demographic decline is the next chapter.`,
    issues: ['Emerging teacher shortages despite salary improvements', 'Russian-minority student integration and performance gaps', 'Population decline and shrinking student numbers', 'Sustainability of high performance with limited resources', 'Maintaining teacher quality amid EU mobility options']
  },
  {
    name: 'Norway',
    lat: 60.4720,
    lng: 8.4689,
    summary: `Norway spends more per student than almost any country on Earth—nearly $15,000 annually in primary and secondary education—yet Norwegian students perform decidedly average on international assessments. If you believe money automatically buys educational excellence, Norway is the case study that should haunt you. The money is real, the commitment genuine, but something isn't working, and Norwegians are increasingly asking why.

The system is comprehensive and egalitarian. Ten years of compulsory primary and lower secondary, followed by three years of upper secondary (either studieforberedende for university preparation or yrkesfag for vocational training). No tracking before age sixteen, minimal homework in early grades, emphasis on outdoor education and well-being. Private schools are rare—under 3 percent enrollment—because public schools are well-funded and good quality is widely distributed.

Teacher education requires master's degrees, professional autonomy is high, and salaries are generous relative to cost of living. Yet Norway faces teacher shortages, particularly in math, science, and northern regions. The profession doesn't attract the most academically talented Norwegians; oil industry, finance, and tech pay far more. This matters when international evidence consistently shows teacher quality as the dominant in-school factor affecting student achievement.

PISA performance has been declining. Norwegian fifteen-year-olds score around OECD average in reading and science, below average in math. The math weakness particularly worries policymakers in a country dependent on petroleum engineering, technology, and advanced industries. Various explanations circulate: too much emphasis on student well-being over achievement, grade inflation, insufficient rigor, pedagogical fashions prioritizing group work over direct instruction. The 2020 curriculum reform attempted to address some concerns by strengthening basic skills and in-depth learning, but changing classroom practice is slower than changing documents.

Universities are free for all, including international students—a policy reflecting both egalitarian values and the reality that Norway needs to attract talent from abroad given its small population (5.5 million). The University of Oslo and others rank respectably, with particular strength in fields like energy, climate science, and marine biology. But brain drain is real; many talented Norwegians pursue postgraduate education abroad and don't return.

The socioeconomic achievement gap in Norway is relatively small compared to many countries, which is success of a sort—the system is equitable even if it's not excellent. But immigrant students, particularly from Somalia, Iraq, and Afghanistan, score significantly below native Norwegians, revealing that the famously inclusive system struggles when confronting diversity.

Norway's challenge is whether it can maintain egalitarian values while raising academic expectations and rigor. The international evidence suggests these aren't contradictory—Estonia, Poland, and others achieve both—but Norway hasn't cracked the code yet.`,
    issues: ['Extremely high spending but average PISA performance', 'Declining math achievement particularly concerning', 'Teacher recruitment struggles despite good salaries', 'Immigrant student achievement gaps', 'Tension between well-being emphasis and academic rigor']
  },
  {
    name: 'Sweden',
    lat: 60.1282,
    lng: 18.6435,
    summary: `Sweden's PISA scores have fallen faster and further than nearly any developed country—a decline so dramatic that "What happened to Swedish education?" became an international research question. Between 2000 and 2012, Swedish students' math performance dropped more than any OECD country except Finland (which fell from a higher starting point). The scores have since stabilized but remain well below the 2000 level. Understanding this collapse reveals how quickly education systems can deteriorate when multiple factors align badly.

Sweden made several consequential decisions in the 1990s and 2000s. The country decentralized control to municipalities, introduced school choice with voucher funding, and allowed private friskolor (independent schools) to operate for profit while receiving public funding. The theory was that competition and choice would drive improvement. The reality was more complex: popular schools became overcrowded, weak schools couldn't attract students and closed, segregation increased as families with social capital navigated choice effectively while others didn't, and some for-profit chains prioritized cost control over quality.

Simultaneously, teacher status and quality declined. Sweden abolished teacher certification requirements in 2000—anyone with a university degree could teach. The predictable result was that teaching attracted fewer top students, professional standards weakened, and classroom management problems increased. The certification requirement was restored in 2011, but damage was done. Teacher salaries, while decent, aren't competitive with other professions requiring similar education, and shortages persist.

Immigration added complexity. Sweden accepted more refugees per capita than nearly any European country, including many from Syria, Afghanistan, Somalia, and Iraq. These students often arrived with interrupted schooling, trauma, and no Swedish language. The education system wasn't prepared for integration at this scale. Achievement gaps between immigrant and native students are substantial, and segregation—both residential and educational—has increased.

The recent stabilization of PISA scores offers cautious hope. Reforms have strengthened curriculum, restored teacher certification, introduced national tests earlier, and provided more support for struggling students. But Swedish schools still face challenges: teacher shortages (particularly in math and science), growing inequality, and persistent immigrant integration difficulties.

Universities remain strong—Karolinska Institute, Uppsala, Lund—particularly in medicine, engineering, and life sciences. Higher education is free for EU citizens, and Sweden attracts international students and researchers. But the pipeline from secondary school is troubled when PISA scores show nearly one in five Swedish fifteen-year-olds lack basic reading skills.

Sweden's education story is a warning: systems can decline quickly when market mechanisms are poorly designed, teacher quality is neglected, and demographic changes aren't anticipated. Recovery is possible but slow.`,
    issues: ['Dramatic PISA score decline, now stabilized but below 2000 levels', 'School choice and privatization increasing segregation', 'Teacher shortages and quality concerns', 'Large immigrant student achievement gaps', 'One in five students lack basic reading literacy']
  },
  {
    name: 'Portugal',
    lat: 39.3999,
    lng: -8.2245,
    summary: `Portugal's education transformation over the past two decades is among Europe's most impressive—and most overlooked. In 2000, Portugal had some of Europe's worst education outcomes: low literacy, high dropout rates, minimal tertiary attainment. By 2018, Portuguese fifteen-year-olds were reading at levels comparable to students in the United States, Germany, and France—countries far wealthier with longer traditions of mass education. Something worked, and it's worth understanding what.

The transformation began with recognizing how far behind Portugal had fallen. Under Salazar's dictatorship (1932-1974), education was deliberately limited—an educated population asks inconvenient questions. Democracy brought expansion, but quality lagged. The crucial changes came in the 2000s: extending compulsory education to age eighteen, investing in teacher training, introducing external assessments, and implementing targeted support programs for struggling students and disadvantaged schools.

The TEIP program (Territory for Priority Educational Intervention) directed additional resources and autonomy to schools in poor areas, allowing them to develop customized approaches while being held accountable for results. This wasn't just throwing money at problems—it was strategic investment with clear goals and monitoring. Dropout rates fell from over 40 percent to around 10 percent. University enrollment increased dramatically.

But Portugal's success story has plateaued, and recent PISA results show slight declines. The country still faces significant challenges. Grade repetition rates are among Europe's highest—about 25 percent of students repeat at least one year by age fifteen. This is expensive, demoralizing, and evidence suggests ineffective for improving learning. Teacher shortages have become acute, particularly in math, science, and certain regions. Aging teaching force, modest salaries, and bureaucratic frustrations make recruitment difficult.

Socioeconomic inequality in outcomes remains substantial. Students from disadvantaged backgrounds, particularly in rural interior regions and certain Lisbon suburbs, score far below their privileged peers. The education system has lifted overall performance but hasn't conquered the reproduction of advantage—a challenge Portugal shares with nearly everyone.

Universities have expanded and improved. The University of Lisbon, Porto, and Coimbra (founded 1290, among Europe's oldest) produce respectable research, particularly in marine sciences, renewable energy, and health. But funding is tight, brain drain continues, and academic salaries can't compete internationally. Many talented Portuguese students pursue graduate education abroad; many don't return.

Portugal demonstrates that countries can improve education outcomes dramatically with sustained effort, strategic investment, and political will. It also demonstrates that improvement isn't automatic or permanent—systems can stall or regress if complacency sets in or resources are withdrawn.`,
    issues: ['PISA score plateau and recent slight declines', 'Extremely high grade repetition rates (25%)', 'Acute teacher shortages in STEM and rural areas', 'Persistent socioeconomic achievement gaps', 'University brain drain and funding constraints']
  },
  {
    name: 'Netherlands',
    lat: 52.1326,
    lng: 5.2913,
    summary: `The Netherlands operates one of Europe's most stratified education systems, tracking children into separate secondary school types as early as age twelve based on elementary school teacher recommendations and a single standardized test. Students are channeled into VMBO (vocational), HAVO (general secondary), or VWO (pre-university), with limited mobility between tracks. The system produces excellent results for those on the VWO track and increasingly disappointing ones for everyone else. Whether this is acceptable is the central question in Dutch education debates.

Dutch students traditionally performed well on international assessments, but recent PISA results show declines. Math scores dropped particularly sharply, prompting national soul-searching about curriculum, teaching methods, and digital distraction. Reading performance remains above OECD average but has also slipped. The variation between schools has increased, with top schools pulling further ahead while weak schools struggle—a pattern suggesting the system is becoming less equitable.

Teacher shortages have reached crisis levels. An estimated 10,000 teaching positions go unfilled, forcing schools to enlarge classes, cancel subjects, or use unqualified personnel. The profession can't compete with other careers requiring similar education—teacher salaries are modest, workload has increased due to bureaucracy and student behavior challenges, and social status has declined. Young people increasingly view teaching as martyrdom rather than a respectable profession, which is fatal for recruitment.

The early tracking system faces growing criticism. Research consistently shows early selection advantages children from educated families who understand the system and disadvantages late bloomers and those from less privileged backgrounds. Teacher recommendations, while generally well-intentioned, are influenced by implicit biases. The Cito test (the standardized exam) is high-stakes for twelve-year-olds, creating stress and sometimes distorting elementary education as schools teach to the test.

Universities are reasonably priced (€2,314 annually for EU citizens in 2024) and high quality. Dutch research universities rank well internationally, particularly Delft for engineering, Amsterdam and Utrecht for research breadth, and Wageningen for agricultural sciences. The system has expanded significantly—now over 50 percent of young Dutch people pursue higher education—but this expansion has strained capacity and arguably diluted quality.

Integration of immigrant students, particularly from Morocco, Turkey, and more recently Syria and Eritrea, presents ongoing challenges. Achievement gaps persist, with students from non-Western immigrant backgrounds scoring substantially below native Dutch students. Whether this reflects school failure, social disadvantage, or both is debated, but the gap is real and concerning.

The Netherlands must decide whether early tracking's efficiency benefits outweigh its equity costs, and whether the country can make teaching attractive enough to fill classrooms. These aren't just technical questions—they're about what kind of society the Netherlands wants to be.`,
    issues: ['Severe teacher shortages (10,000+ positions unfilled)', 'Early tracking at age 12 creating inequality concerns', 'Declining PISA scores, especially in mathematics', 'Large immigrant student achievement gaps', 'Growing between-school variation and segregation']
  },
  {
    name: 'Romania',
    lat: 45.9432,
    lng: 24.9668,
    summary: `Romania's education system faces a crisis of legitimacy. Corruption scandals involving purchased degrees, forged dissertations, and plagiarism have exposed rot at the system's core, while international assessments show Romanian students among Europe's poorest performers. When the education minister resigns over plagiarism allegations—as happened in 2012—and multiple rectors are investigated for degree fraud, trust collapses. Without trust, education can't function.

The structural problems run deep. Romanian students rank near the bottom of European Union countries on PISA assessments in reading, math, and science. More alarmingly, functional illiteracy is widespread—over 40 percent of fifteen-year-olds can't understand and use written information effectively. This isn't just an education failure; it's an economic catastrophe for a country trying to develop beyond low-wage manufacturing.

The system follows a familiar European structure: primary grades 1-4, gymnasium 5-8, then lyceum (either theoretical/academic or vocational/technical). But structure means little when implementation is broken. Rural schools lack basic facilities—some still use outhouses. Teacher salaries are low, driving talented people away from the profession. The most capable teachers emigrate to Western Europe, where their qualifications are recognized and pay is triple or more what Romania offers.

Higher education faces particular credibility problems. The plagiarism scandals weren't isolated incidents; they revealed systemic tolerance of academic fraud at the highest levels. When prominent politicians and university leaders obtain degrees without doing the work, everyone notices. This corrupts the entire enterprise—why should students take education seriously when elites don't?

Romania's Roma population (variously estimated at 3-10 percent, depending on methodology) faces severe educational exclusion. Many Roma children don't complete primary school. Those who do often attend segregated schools providing inferior education. Integration efforts have had limited success, hampered by discrimination, poverty, and mutual distrust between Roma and majority communities.

The brain drain compounds everything. Romania loses approximately 10,000 university graduates annually to emigration, disproportionately the most talented. They pursue careers in Western Europe, North America, or anywhere offering better opportunities than Romania provides. This is rational individual choice and national catastrophe—how can a country develop when its most educated citizens leave?

Recent governments have attempted reforms: curriculum updates, teacher salary increases, anti-corruption measures. Progress is slow when the problems are fundamental. Romania's education system won't improve until corruption is actually punished, rural schools receive real resources, teachers are paid professionally, and talented people believe staying in Romania offers a viable future. None of these are purely educational questions—they're about governance, economy, and society. But without solving them, Romanian education will remain in crisis.`,
    issues: ['Over 40% functional illiteracy among fifteen-year-olds', 'Systemic academic corruption and plagiarism scandals', 'Massive brain drain of educated graduates', 'Severe Roma educational exclusion and segregation', 'Rural school infrastructure deficits and teacher emigration']
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
  console.log('\n✅ ALL 13 EDUCATION SUMMARIES SAVED!');
})();
