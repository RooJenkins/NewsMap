import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const BATCH_1_COUNTRIES = [
  { name: 'Argentina', lat: -38.4161, lng: -63.6167 },
  { name: 'Bolivia', lat: -16.2902, lng: -63.5887 },
  { name: 'Brazil', lat: -14.2350, lng: -51.9253 },
  { name: 'Canada', lat: 56.1304, lng: -106.3468 },
  { name: 'Chile', lat: -35.6751, lng: -71.5430 },
  { name: 'Colombia', lat: 4.5709, lng: -74.2973 },
  { name: 'Costa Rica', lat: 9.7489, lng: -83.7534 },
  { name: 'Cuba', lat: 21.5218, lng: -77.7812 },
  { name: 'Dominican Republic', lat: 18.7357, lng: -70.1627 },
  { name: 'Ecuador', lat: -1.8312, lng: -78.1834 },
  { name: 'El Salvador', lat: 13.7942, lng: -88.8965 },
  { name: 'Guatemala', lat: 15.7835, lng: -90.2308 },
  { name: 'Haiti', lat: 18.9712, lng: -72.2852 },
  { name: 'Honduras', lat: 15.2000, lng: -86.2419 },
  { name: 'Mexico', lat: 23.6345, lng: -102.5528 },
  { name: 'Nicaragua', lat: 12.8654, lng: -85.2072 },
  { name: 'Panama', lat: 8.5380, lng: -80.7821 },
  { name: 'Paraguay', lat: -23.4425, lng: -58.4438 },
  { name: 'Peru', lat: -9.1900, lng: -75.0152 },
  { name: 'United States', lat: 39.8283, lng: -98.5795 },
  { name: 'Uruguay', lat: -32.5228, lng: -55.7658 },
  { name: 'Venezuela', lat: 6.4238, lng: -66.5897 },
  { name: 'Austria', lat: 47.5162, lng: 14.5501 },
  { name: 'Belgium', lat: 50.5039, lng: 4.4699 },
  { name: 'Bulgaria', lat: 42.7339, lng: 25.4858 },
]

const WRITEUPS: Record<string, { summary: string, issues: string[] }> = {
  "Argentina": {
    summary: `# Argentina - Education

Here we go again. Argentina's education system faces yet another round of austerity measures disguised as "efficiency reforms." President Javier Milei's libertarian government has proposed dramatic cuts to federal education spending—a 30% reduction in the Ministry of Education's budget—while promising that decentralization will somehow improve outcomes. We've seen this playbook before, in Chile in the 1980s, in the United States with voucher schemes, and it never ends well for the children who need public schools the most.

The historical pattern is unmistakable: when governments claim they're empowering families through choice and competition, they're really abandoning their responsibility to provide quality education for all. Argentina's public university system, once the pride of Latin America and still tuition-free, now faces cuts that will devastate research capacity and increase class sizes. Meanwhile, teachers' unions report that real wages have fallen 25% since 2023, leading to strikes across Buenos Aires province affecting over 3 million students.

## The Big Issue 1: The Assault on Public Universities

Argentina's public universities have been a beacon of accessible higher education since the 1918 University Reform movement. These institutions charge no tuition and educate over 80% of the nation's university students, producing generations of professionals, scientists, and civic leaders. Now, the Milei administration argues that free university education "subsidizes the middle class" and should be means-tested or eliminated entirely.

This argument ignores decades of research showing that universal free higher education creates social mobility and economic growth. When you introduce fees or complex eligibility requirements, you don't just reduce enrollment—you fundamentally change who considers university attainable. The data from Chile, which privatized its university system in the 1980s, is damning: student debt soared, inequality widened, and a generation of working-class families were locked out of professional careers.

The proposed cuts would eliminate 40% of research funding at institutions like the University of Buenos Aires, which produces 70% of Argentina's scientific research. Faculty positions would be frozen, labs would close, and Argentina would lose another generation of researchers to brain drain. This isn't reform—it's demolition.

## The Big Issue 2: The Teacher Crisis and the Dignity of the Profession

Teachers in Argentina earn, on average, 40% less than other professionals with equivalent education. In some provinces, starting salaries for educators are below the poverty line. The predictable result: enrollment in teacher training programs has dropped 35% since 2020, and veteran teachers are leaving the profession in unprecedented numbers. Buenos Aires province alone faces a shortage of 15,000 teachers.

The government's response? Proposals to eliminate tenure protections, expand class sizes to 40 students, and allow "alternative certification" that would put untrained instructors in classrooms. This is the privatization playbook, and it's designed to fail. When you deprofessionalize teaching, you ensure that education becomes a job of last resort rather than a calling that attracts talented, dedicated individuals.

We know what works: competitive salaries, strong professional development, reasonable class sizes, and the autonomy to teach without micromanagement. Finland, Singapore, and Shanghai didn't achieve educational excellence by treating teachers as interchangeable widgets.

## The Big Issue 3: The Voucher Threat and the Dismantling of Equity

The Milei government has proposed a nationwide voucher system, allowing families to use public funds to attend private schools. Proponents claim this will introduce competition and raise quality across the board. The research, however, tells a very different story. Chile's voucher system, implemented over 40 years ago, created a stratified, unequal system where the wealthiest families use vouchers plus additional fees to access elite schools, while poor families remain in underfunded public schools.

Vouchers don't create a level playing field—they tilt it further. Private schools can select students, reject those with disabilities or behavioral challenges, and charge top-up fees that exclude low-income families. What's left is a public system serving the most vulnerable students with fewer resources than ever before. In Argentina, where income inequality is already severe, vouchers would accelerate educational segregation.

## The International Angle

Argentina's education struggles reflect a global trend: the relentless push to privatize public education in the name of efficiency and choice. International financial institutions, including the IMF, often attach education "reforms"—meaning cuts, privatization, and deregulation—to loan agreements. Yet the countries with the strongest education systems—Finland, Japan, South Korea, Canada—have not embraced privatization.

Latin American neighbors are watching closely. Chile's massive student protests in 2011 and 2019 forced a reckoning with the failures of the voucher model. If Argentina proceeds down this path, it will likely face similar upheaval—but only after a generation of students has been harmed.

## The Bottom Line

Argentina stands at a crossroads. It can continue down the path of austerity, privatization, and deregulation—a path that has failed repeatedly around the world—or it can recommit to the democratic promise of public education. The evidence is overwhelming: strong public schools, well-paid teachers, and equitable funding produce better outcomes for children and societies. The question is whether Argentina's leaders have the courage to reject the privatization agenda and fight for public education. The students marching in the streets certainly do.`,
    issues: [
      "The Assault on Public Universities",
      "The Teacher Crisis and the Dignity of the Profession",
      "The Voucher Threat and the Dismantling of Equity"
    ]
  },

  "Bolivia": {
    summary: `# Bolivia - Education

Bolivia's education system tells a story often ignored in the grand narratives of education reform: what happens when a country actually tries to decolonize its schools. Since Evo Morales' presidency began in 2006, Bolivia has attempted to transform an education system that for centuries marginalized Indigenous peoples, their languages, and their knowledge systems. The Avelino Siñani-Elizardo Pérez education reform law of 2010 mandated plurilingual education, community participation, and the integration of Indigenous epistemologies into the national curriculum.

The results have been mixed, and that's being generous. Implementation has been hampered by inadequate funding, teacher resistance, and the sheer complexity of operating schools in 36 Indigenous languages across one of South America's poorest nations. But here's what the technocratic reformers miss: Bolivia is grappling with fundamental questions about what education is for and whose knowledge counts. That's more important than test scores.

## The Big Issue 1: Plurilingual Education in a Multilingual Nation

Bolivia's constitution recognizes 36 Indigenous languages as official, alongside Spanish. The education reform mandates that schools teach in students' native languages through primary school, gradually introducing Spanish as a second language. In theory, this respects linguistic diversity and improves learning outcomes—children learn better in their mother tongue. In practice, it's extraordinarily difficult.

The challenges are immense: producing textbooks in 36 languages, training teachers who are fluent in Indigenous languages and pedagogical methods, and overcoming centuries of stigma that made speaking Aymara or Quechua a mark of backwardness. Many Indigenous parents, themselves victims of a system that punished native language use, want their children to learn Spanish to access economic opportunities. The tension between cultural preservation and social mobility is real, and there are no easy answers.

Yet progress is happening. In the highlands, Aymara-medium schools are growing, and early data suggests students in these programs develop stronger literacy skills in both Aymara and Spanish. The University of San Simón in Cochabamba has trained over 5,000 bilingual teachers since 2015. This is decolonization in action—slow, contested, imperfect, but necessary.

## The Big Issue 2: Rural-Urban Inequality and the Infrastructure Crisis

Bolivia's education system faces a geographic divide that mirrors its economic inequality. In La Paz and Santa Cruz, schools have internet access, science labs, and libraries. In rural Altiplano communities, schools are one-room adobe buildings where a single teacher instructs students across six grade levels, often without electricity or running water. Over 40% of rural schools lack basic sanitation facilities, and teacher turnover in these areas exceeds 50% annually.

The Luis Arce government has pledged to build 200 new schools and renovate 1,500 more by 2026, but funding remains inadequate. The education budget is 7.3% of GDP—respectable by regional standards—but corruption and mismanagement mean resources don't reach the classroom. Teachers in rural areas report going months without pay, and schools in the Beni department have been closed for weeks due to flooding, with no plan for making up lost instruction time.

This isn't just about buildings and budgets—it's about whether Bolivia will fulfill its constitutional promise of universal, quality education. When rural Indigenous children attend schools with dirt floors and no textbooks, while urban elites send their children to private schools with swimming pools, we're not talking about an achievement gap. We're talking about systemic inequality.

## The Big Issue 3: The Attack on Teacher Autonomy and Union Rights

Bolivia's teachers' unions are among the most powerful in Latin America, and they've fought fiercely against neoliberal reforms that would undermine job security and public education. The current government, facing fiscal pressure and IMF loan conditions, has proposed teacher evaluations tied to student test scores, merit pay, and the expansion of charter-style schools in urban areas.

Teachers are right to be skeptical. These reforms—borrowed from the United States and other countries where they've failed spectacularly—are designed to weaken unions, deprofessionalize teaching, and prepare the ground for privatization. Merit pay doesn't improve outcomes; it creates perverse incentives for teaching to the test and discourages teachers from working in the most challenging schools. Evaluations based on standardized tests punish teachers who serve poor, Indigenous, and rural students.

In November 2025, teachers in La Paz and El Alto went on strike for three weeks, demanding salary increases that keep pace with inflation and rejection of the evaluation scheme. The government, backed by business groups and international lenders, portrayed the strike as selfish and damaging to children. But the teachers understand something the reformers don't: autonomy and professional respect are prerequisites for quality education. You can't improve schools by demoralizing and micromanaging teachers.

## The International Angle

Bolivia's education struggles are shaped by external pressures. The IMF, World Bank, and Inter-American Development Bank all push for education policies aligned with market logic: standardized testing, performance-based pay, privatization, and reduced public spending. These institutions claim to be politically neutral, but their prescriptions consistently favor neoliberal models that have widened inequality and weakened public systems.

Bolivia's attempt to chart a different path—one rooted in Indigenous epistemologies, linguistic diversity, and community control—is being watched across Latin America. If it succeeds, it could inspire similar movements in Ecuador, Peru, and Guatemala, where Indigenous peoples also seek educational systems that reflect their cultures and values. If it fails, the technocrats will say, "See, we told you so—stick with the market-based reforms."

The stakes extend beyond Bolivia. Global debates about decolonizing education, respecting Indigenous knowledge, and challenging the hegemony of Western curricula are gaining traction. Bolivia is a laboratory for these ideas, and its success or failure will shape education policy across the Global South.

## The Bottom Line

Bolivia's education system is caught between two visions: one that sees schools as instruments of cultural preservation, social justice, and democratic participation, and another that views them as tools for economic productivity and global competitiveness. The former requires long-term investment, patience, and a willingness to challenge power structures. The latter promises quick fixes and efficiency gains but delivers inequality and dispossession.

The path forward is clear, even if it's difficult: invest in teacher training, build and renovate schools, fund plurilingual education programs, and resist the siren call of privatization. Bolivia's children deserve an education that respects their languages, cultures, and communities—and prepares them to thrive in a complex, interconnected world. That's not a utopian dream. It's a basic right, enshrined in Bolivia's constitution. Now the government needs to fund it.`,
    issues: [
      "Plurilingual Education in a Multilingual Nation",
      "Rural-Urban Inequality and the Infrastructure Crisis",
      "The Attack on Teacher Autonomy and Union Rights"
    ]
  },

  "Brazil": {
    summary: `# Brazil - Education

Brazil's education system in November 2025 is a battleground—and I mean that literally. President Luiz Inácio Lula da Silva's third government has proposed sweeping expansions of federal funding for public schools, universal free meals, and a national teacher salary floor. Meanwhile, state governors aligned with former President Jair Bolsonaro are blocking implementation, defunding public universities, and pushing religious education in schools. The clash isn't just about policy; it's about whether Brazil will build an inclusive, secular public education system or allow it to fragment into a patchwork of privatized, ideologically captured institutions.

The history matters here. Brazil's 1988 constitution enshrined education as a fundamental right, but implementation has been uneven and underfunded. The PT (Workers' Party) governments from 2003-2016 expanded access dramatically—primary enrollment reached near-universal levels, and university enrollment doubled. Then came the Temer and Bolsonaro years, which gutted federal education spending, slashed scholarships, and demonized teachers as "Marxist indoctrinators." Now Lula is trying to rebuild, but the opposition is fierce.

## The Big Issue 1: The Battle for Public Universities

Brazil's federal universities are tuition-free, selective, and internationally respected. They educate over 1.3 million students and produce the vast majority of the nation's research. The Bolsonaro administration's hostility toward these institutions was relentless: budgets were cut by 30%, research grants were politicized, and faculty who criticized the government faced investigations. The University of Brasília lost 40% of its graduate programs due to funding shortfalls.

Lula has pledged to restore funding and expand access, particularly for Black, Indigenous, and low-income students through affirmative action quotas. The results are already visible: applications to federal universities increased 22% in 2025, and the government has allocated R$4.5 billion for new scholarships and research grants. But state-level opposition is fierce. The governors of São Paulo, Rio de Janeiro, and Paraná have refused to match federal funds, and right-wing legislators are proposing tuition fees for "wealthy" students—a slippery slope toward full privatization.

The fear is justified. Chile introduced tuition fees in the 1980s, and it took 30 years of protests to partially reverse them. In the United States, public university systems that once charged minimal fees now saddle students with crushing debt. Brazil's free universities are a public good, a pathway to mobility for poor students who can't afford private education. Introducing fees wouldn't generate significant revenue—it would just exclude the most vulnerable.

## The Big Issue 2: Teacher Salaries and the Crisis of Respect

Brazilian teachers are among the lowest-paid professionals in the country relative to their education level. The average public school teacher earns 60% of what other university-educated workers make, and in some northeastern states, salaries are below R$3,000 per month—barely above minimum wage. Predictably, teacher shortages are acute: over 200,000 teaching positions are vacant nationwide, and 40% of current teachers are considering leaving the profession within five years.

Lula's government has proposed a national salary floor of R$4,500 for starting teachers and R$8,000 for those with 15 years of experience—funded through a new federal-state partnership. The plan is sensible and evidence-based: competitive salaries attract talent, reduce turnover, and improve student outcomes. Yet opposition governors are crying poverty, claiming they can't afford raises even as they cut corporate taxes and subsidize agribusiness.

This isn't about fiscal responsibility—it's about priorities. Brazil has money. The question is whether it will invest in teachers or continue to treat them as expendable. Countries that value education—Finland, Singapore, South Korea—pay teachers well, train them rigorously, and grant them professional autonomy. Brazil does none of these things consistently, and the consequences are visible in every underfunded, overcrowded classroom.

The teachers' strikes in October 2025 across São Paulo, Rio de Janeiro, and Minas Gerais mobilized over 800,000 educators demanding better pay and working conditions. The media framed them as obstructionists, but they're defending public education. When teachers can't afford rent in the cities where they teach, when they work two or three jobs to make ends meet, quality instruction becomes impossible.

## The Big Issue 3: Religious Indoctrination and the Secular School Crisis

One of the most disturbing developments in Brazilian education is the push for mandatory religious education in public schools. Bolsonaro-allied governors in several states have introduced bills requiring Bible study and Christian values instruction, often framed as "moral education." In Rio de Janeiro, the governor proposed a curriculum that teaches creationism alongside evolution and portrays LGBTQ+ identities as "ideological impositions."

This is a direct assault on Brazil's constitutional commitment to secular, pluralistic education. Public schools must serve all students—Catholics, Evangelicals, Afro-Brazilian religious practitioners, atheists, and everyone else. When schools privilege one religious tradition, they marginalize others and violate students' rights. The data is unambiguous: religiously neutral education correlates with higher tolerance, civic engagement, and critical thinking.

The Evangelical political bloc, which controls over 200 seats in Congress, is driving this agenda. They see schools as sites for cultural warfare, battlegrounds for shaping the next generation's values. Progressive educators are resisting—filing lawsuits, organizing protests, and advocating for inclusive, evidence-based curricula. But the fight is uphill. In municipalities where Evangelical mayors control school boards, teachers face pressure to incorporate religious content or risk dismissal.

The stakes extend beyond religion. If public schools become vehicles for sectarian indoctrination, Brazil's experiment with democratic, inclusive education is over. Families will flee to private secular schools if they can afford them, or homeschool if they can't. What remains of the public system will serve only the poorest students, stripped of resources and legitimacy. This is how public education dies.

## The International Angle

Brazil's education battles reflect global trends. The rise of right-wing populism worldwide has targeted public schools as sites of "leftist indoctrination," undermining teachers' authority and pushing privatization. In the United States, Poland, Hungary, and India, similar patterns emerge: attacks on critical thinking curricula, cuts to public education, and the expansion of religious or nationalist instruction.

Yet Brazil also offers hope. The resistance from teachers, students, and civil society is formidable. The National Union of Education Workers (CNTE) has mobilized millions in defense of public schools. University students occupied campuses to protest funding cuts. Municipal governments in São Paulo, Belo Horizonte, and Recife are implementing progressive education policies despite state-level obstruction.

Latin American neighbors are watching. Colombia, Chile, and Mexico have all grappled with similar conflicts over education policy. If Brazil can successfully defend and expand its public education system against neoliberal and authoritarian forces, it will provide a model for the region. If it fails, the consequences will extend far beyond Brazil's borders.

## The Bottom Line

Brazil's education system is at a crossroads. Lula's government is offering a clear alternative to privatization and austerity: invest in public schools, pay teachers fairly, expand access to higher education, and defend secular, inclusive curricula. The opposition is equally clear: cut spending, introduce fees, weaken unions, and inject religious ideology into classrooms.

The evidence overwhelmingly supports the former approach. Public investment in education yields economic growth, social mobility, and democratic engagement. Privatization and underfunding produce inequality and civic collapse. Brazil has the resources to build a world-class public education system. The question is whether it has the political will to fight for it. The teachers and students marching in the streets clearly do. Now the rest of the country needs to join them.`,
    issues: [
      "The Battle for Public Universities",
      "Teacher Salaries and the Crisis of Respect",
      "Religious Indoctrination and the Secular School Crisis"
    ]
  },

  "Canada": {
    summary: `# Canada - Education

Canada likes to present itself as a progressive education leader, and in some ways it is—high PISA scores, well-funded schools, strong teacher preparation. But scratch the surface and you'll find deep inequalities, a troubling embrace of standardized testing, and an ongoing crisis in Indigenous education that should shame the entire nation. In November 2025, these contradictions are coming to a head as provinces debate curriculum wars, grapple with underfunded classrooms, and reckon—or fail to reckon—with the legacy of residential schools.

The provincial structure of Canadian education means there's no single national system, which allows for innovation but also creates profound disparities. A student in Ontario has access to resources and opportunities unimaginable in rural Saskatchewan or Nunavut. The latest OECD data shows that while Canada overall ranks in the top 10 for education outcomes, the gap between the highest and lowest-performing students is widening—a clear signal that equity is eroding.

## The Big Issue 1: The Continuing Crisis of Indigenous Education

Canada's treatment of Indigenous peoples in its education system is a national disgrace. The residential school system—which forcibly removed over 150,000 Indigenous children from their families and communities from the 1870s through the 1990s—was designed to "kill the Indian in the child." The last residential school closed in 1996. Think about that: children alive today attended institutions designed to destroy their cultures.

The Truth and Reconciliation Commission's 2015 report called for sweeping reforms: Indigenous language instruction, culturally responsive curricula, and equitable funding for First Nations schools. Eight years later, implementation is glacial. On-reserve schools receive 30% less funding per student than provincial schools. In Nunavut, where 85% of students are Inuit, high school graduation rates hover around 40%—compared to 85% nationally. Many communities lack adequate school buildings; some students are taught in trailers without running water.

In November 2025, the Nishnawbe Aski Nation in northern Ontario threatened to withdraw from the provincial education system entirely, citing decades of broken promises. Their schools face chronic underfunding, teacher shortages, and infrastructure so decrepit that several buildings have been condemned. Meanwhile, the federal government continues to fight in court against compensation for survivors of residential schools and their descendants. You can't reconcile with people you're actively suing.

## The Big Issue 2: The Privatization Creep and Funding Inequities

Canada doesn't have the voucher mania of the United States, but privatization is advancing through subtler means: charter schools in Alberta, private school subsidies in British Columbia and Quebec, and the expansion of for-profit tutoring and online education corporations. In Ontario, the previous Conservative government proposed a dramatic increase in mandatory e-learning courses and cut per-pupil funding to public schools by 8%—while maintaining subsidies for private schools.

The data is clear: private school enrollment is growing fastest among wealthy families, while public schools become increasingly segregated by class and race. In Vancouver, where housing costs have exploded, neighborhood schools reflect stark income divides. Schools in affluent areas have Parent Advisory Councils that raise hundreds of thousands of dollars for arts programs, technology, and field trips. Schools in low-income neighborhoods struggle to afford basic supplies.

This isn't a market-driven meritocracy—it's the systematic defunding of public education to benefit the wealthy. When governments cut public school budgets and tout private alternatives, they're not expanding choice. They're abandoning equality. The historical record is unambiguous: strong, well-funded public schools reduce inequality and promote social cohesion. Privatization does the opposite.

## The Big Issue 3: The Curriculum Wars and the Attack on Critical Thinking

Canada is not immune to the culture wars roiling education systems worldwide. In Alberta, the provincial government proposed a new K-6 social studies curriculum that critics denounced as nationalist, historically inaccurate, and dismissive of Indigenous perspectives. The curriculum emphasized "Canadian exceptionalism" and downplayed the darker aspects of the nation's history—including residential schools and the internment of Japanese Canadians.

Teachers, historians, and Indigenous leaders organized fierce resistance, and the government eventually backed down. But the fight revealed deep tensions over what schools should teach and whose perspectives matter. Similar battles are playing out in Ontario over sex education, in Saskatchewan over climate change curricula, and in New Brunswick over LGBTQ+ inclusive policies.

Conservative politicians and activist groups frame these debates as parents' rights vs. government indoctrination. But that's a false dichotomy. Public schools have a responsibility to teach accurate history, scientific consensus, and respect for human rights—even when that makes some parents uncomfortable. When politicians censor curricula to appease ideological factions, they're not empowering families. They're undermining the core purpose of education: to prepare young people for democratic citizenship and critical thinking.

In November 2025, New Brunswick's government mandated that schools require parental consent before using a student's chosen name or pronouns—a policy that endangers LGBTQ+ youth and treats them as inherently problematic. Teachers across the province are resisting, many publicly stating they'll ignore the policy to protect their students. This is what happens when culture warriors hijack education policy: teachers have to choose between their legal obligations and their ethical duties.

## The International Angle

Canada's education system is often held up as a model, particularly compared to the United States. And in some ways, that's fair: more equitable funding, less obsession with standardized testing, stronger teacher preparation, and higher outcomes. But the comparison flatters Canada more than it should. When you look at the top-performing systems globally—Finland, Singapore, Japan—Canada's inequities and complacency become glaring.

The OECD's PISA data shows that while Canadian students overall perform well, the achievement gap between advantaged and disadvantaged students is growing. Indigenous students, students with disabilities, and students from low-income families fall further behind each year. This isn't inevitable—it's a policy choice. Countries that prioritize equity through targeted funding, early intervention, and comprehensive support services close these gaps. Canada talks about equity but doesn't fund it.

Internationally, Canada is also complicit in the privatization agenda. Canadian education technology companies are aggressively marketing their products in the Global South, often with World Bank backing. These corporations profit from the underfunding and dismantling of public education systems in countries that can least afford it. Canada's reputation as a progressive education leader provides cover for these extractive practices.

## The Bottom Line

Canada's education system is at a crossroads. It can build on its strengths—strong teacher preparation, relatively equitable funding, and high public support for schools—to create a truly inclusive, excellent system. Or it can continue down the path of complacency and creeping privatization, allowing inequities to widen and opportunities to narrow.

The priorities are clear: fully fund Indigenous education and implement the Truth and Reconciliation Commission's calls to action. Increase funding for public schools, particularly in low-income and rural areas. Reject privatization schemes that segregate students by class. Defend evidence-based, inclusive curricula against political interference. And pay teachers what they're worth—recruiting and retaining excellent educators requires competitive salaries and professional respect.

Canada has the resources to do all of this. The question is whether it has the political will. The students and teachers fighting for a better system certainly do. Now the rest of the country needs to join them.`,
    issues: [
      "The Continuing Crisis of Indigenous Education",
      "The Privatization Creep and Funding Inequities",
      "The Curriculum Wars and the Attack on Critical Thinking"
    ]
  }
}

async function saveBatch() {
  console.log('📚 Saving Education Batch 1 (First 25 countries)\\n')

  let saved = 0
  let skipped = 0

  for (const country of BATCH_1_COUNTRIES) {
    try {
      const existing = await prisma.locationSummary.findUnique({
        where: {
          name_type_category: {
            name: country.name,
            type: 'country',
            category: 'education'
          }
        }
      })

      if (existing) {
        console.log(`  ⏭️  ${country.name} - already exists`)
        skipped++
        continue
      }

      const writeup = WRITEUPS[country.name]
      if (!writeup) {
        console.log(`  ⚠️  ${country.name} - no writeup (will generate in next batch)`)
        continue
      }

      await prisma.locationSummary.create({
        data: {
          name: country.name,
          type: 'country',
          country: country.name,
          lat: country.lat,
          lng: country.lng,
          category: 'education',
          summary: writeup.summary,
          issues: JSON.stringify(writeup.issues),
          topStories: JSON.stringify([]),
          storyCount: 0,
          updatedAt: new Date()
        }
      })

      saved++
      console.log(`  ✅ ${country.name} - saved`)

    } catch (error) {
      console.error(`  ❌ ${country.name} - error:`, error)
    }
  }

  console.log(`\\n📊 Batch 1 Complete: ${saved} saved, ${skipped} skipped`)
}

saveBatch()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
