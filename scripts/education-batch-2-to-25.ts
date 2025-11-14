import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const COUNTRIES_5_TO_25 = [
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
  "Chile": {
    summary: `# Chile - Education

Chile's education system is the cautionary tale of what happens when you let the Chicago Boys loose on public schools. Since Pinochet's dictatorship imposed a voucher system in 1980—one of the most radical privatization experiments in global history—Chile has struggled with profound educational inequality, student debt, and the commodification of learning. The massive student protests of 2011 and 2019 demanded a reckoning with this legacy, and while Gabriel Boric's government has promised reforms, vested interests are fighting back hard.

In November 2025, the battle continues. The government's proposal for a new public education framework—eliminating for-profit schools, reducing tuition at public universities, and increasing teacher salaries—faces fierce opposition from the private education lobby, conservative legislators, and international financial institutions. The outcome will determine whether Chile can reverse 40 years of market fundamentalism in education or whether neoliberalism's grip will tighten further.

## The Big Issue 1: The Voucher System's Toxic Legacy

Chile's voucher system, imposed under dictatorship, allows families to use public funds to attend private schools—including for-profit institutions. Proponents claimed competition would raise quality for all. Instead, it created one of the most segregated, unequal education systems in the OECD. Wealthy families use vouchers plus substantial additional fees to access elite private schools. Poor families attend chronically underfunded public schools or low-cost private voucher schools that skim off public funds while providing substandard education.

The data is damning. Chile's education Gini coefficient—a measure of inequality in learning outcomes—is among the highest in the world. Students from the wealthiest 20% of families score, on average, 120 points higher on standardized tests than students from the poorest 20%, equivalent to three years of learning. Private schools cream off high-performing, well-behaved students, leaving public schools to serve the most vulnerable with fewer resources.

For-profit schools, legal in Chile, extract revenue that could go to teachers and classrooms. Many are owned by real estate investment trusts that lease buildings to themselves at inflated prices, funneling public education funds into private profits. This isn't education—it's extraction. The Boric government has proposed banning for-profit schools and tightening regulations on private institutions, but the education lobby is mobilizing against the reforms, framing them as attacks on "parental choice."

## The Big Issue 2: The Student Debt Crisis and Higher Education Access

Chile's higher education system was also privatized under Pinochet. Public universities, once tuition-free, now charge fees that can exceed $5,000 per year—astronomical in a country where median annual income is $12,000. Private universities proliferated, many of questionable quality, and student debt soared. By 2020, Chilean students owed over $7 billion in education loans, with default rates exceeding 40%.

The 2011 student movement, led by figures like Camila Vallejo and Giorgio Jackson, demanded free, quality public higher education. Their protests mobilized hundreds of thousands and fundamentally shifted Chilean politics. Subsequent governments implemented partial reforms—means-tested free tuition for low-income students, stricter accreditation for private universities. But the fundamental structure remained: higher education as a commodity, not a right.

Boric's government has expanded free tuition to cover 60% of students and proposed converting student loans into grants for the poorest borrowers. But conservative opposition and fiscal pressures threaten these initiatives. In November 2025, student organizations are planning a new wave of protests, demanding full free tuition and debt forgiveness. They understand what technocrats don't: education debt is a form of social control that discourages risk-taking, activism, and careers in public service. It's designed to create compliant workers, not engaged citizens.

## The Big Issue 3: Teacher Precarity and the Devaluation of the Profession

Chilean teachers are among the lowest-paid in the OECD relative to other professions. Many work on short-term contracts without job security or benefits. The teaching workforce is aging, and enrollment in teacher training programs has plummeted—down 40% since 2015. Schools in low-income areas face chronic shortages, with classes of 40+ students taught by undertrained instructors.

The government's New Teacher Career Framework, implemented in 2016, promised salary increases and professional development. But implementation has been slow and underfunded. Teachers in rural areas report earning less than $800 per month, while those in private schools in wealthy Santiago neighborhoods earn three times as much. This isn't a teacher quality problem—it's a systemic inequality problem.

In October 2025, the Teachers' Union (Colegio de Profesores) went on strike demanding a 20% salary increase, smaller class sizes, and an end to precarious contracts. The government offered 8%, conditional on student test scores—a merit pay scheme that teachers rightly rejected. Countries that improve education outcomes don't do it by scapegoating teachers or tying pay to test scores. They do it by investing in the profession: competitive salaries, strong preparation, manageable workloads, and professional autonomy.

## The International Angle

Chile's experience with education privatization has been studied—and unfortunately, replicated—around the world. The World Bank and other international institutions held up Chile as a model, encouraging voucher systems from Sweden to Colombia. The results have been consistently disappointing: widening inequality, increased segregation, and no overall improvement in outcomes.

Yet Chile also offers a model of resistance. The student movements of 2011 and 2019 inspired protests across Latin America—in Colombia, Brazil, and Argentina—demanding free, quality public education. Young people understand that education privatization isn't about efficiency or choice. It's about transferring public wealth to private hands and reproducing class hierarchies.

International observers are watching whether Boric's government can succeed in reversing privatization. If Chile—the birthplace of neoliberal education reform—can rebuild a strong public system, it will provide hope and a roadmap for other countries. If it fails, the message will be clear: once you privatize education, it's nearly impossible to reclaim it.

## The Bottom Line

Chile stands at a crossroads. It can continue down the path of privatization, vouchers, and for-profit education—a path that has produced inequality, student debt, and the devaluation of teaching. Or it can build on the momentum of student movements and progressive government to reconstruct a public education system that serves all children, not just the wealthy.

The evidence is overwhelming: market-based education reforms don't work. They segregate students, drain public resources, and undermine democratic values. What works is investment in public schools, well-paid teachers, equitable funding, and free or low-cost higher education. Chile knows this—its students have been demanding it for over a decade. Now the government needs to deliver, and the rest of society needs to support the fight. The future of Chilean democracy depends on it.`,
    issues: [
      "The Voucher System's Toxic Legacy",
      "The Student Debt Crisis and Higher Education Access",
      "Teacher Precarity and the Devaluation of the Profession"
    ]
  },

  "United States": {
    summary: `# United States - Education

Let me be blunt: American public education is under the most sustained, well-funded attack in its history. In November 2025, the assault is coming from multiple directions—voucher schemes draining billions from public schools, book bans proliferating across conservative states, chronic underfunding in poor districts, and a teacher shortage crisis fueled by low pay and political harassment. This isn't an accident. It's a deliberate strategy to destroy public education and replace it with a privatized, segregated system that serves the wealthy while abandoning everyone else.

The data tells the story. Since 2020, 34 states have passed or expanded voucher programs, redirecting over $4 billion annually from public schools to private institutions—many of them religious schools that can discriminate in admissions and employment. Teacher vacancies have reached record highs, with over 300,000 positions unfilled nationwide. And standardized test scores, which reformers obsess over, have declined—not because public schools are failing, but because they're being systematically defunded and undermined.

## The Big Issue 1: The Voucher Scam and the Privatization Agenda

Vouchers are sold as "school choice" that empowers poor families. The reality is very different. In states like Arizona, Florida, and Wisconsin, vouchers overwhelmingly benefit middle- and upper-income families who were already sending their children to private schools. Arizona's universal voucher program, expanded in 2023, now costs the state over $700 million annually—money that previously funded public schools. Over 75% of voucher recipients never attended public schools, meaning the program is simply a subsidy for the wealthy.

Private schools receiving vouchers aren't required to accept all students. They can reject children with disabilities, English learners, or students with behavioral challenges—precisely the kids who most need support. What remains in the public system is a higher concentration of vulnerable students with fewer resources. This is educational apartheid, not school choice.

The agenda here is clear. Billionaire-funded organizations like the American Federation for Children, led by Betsy DeVos, have spent decades pushing vouchers as a way to "starve the beast" of public education. Their goal isn't improving outcomes—it's dismantling a public good and replacing it with a market. Public schools are where democracy is practiced, where children from different backgrounds learn together, where we build a common civic culture. Privatization destroys all of that.

## The Big Issue 2: The Book Ban Epidemic and the War on Teachers

Over 10,000 book challenges were filed in U.S. schools during the 2024-2025 school year—a 300% increase from 2020. The targets are overwhelmingly books by or about LGBTQ+ individuals and people of color. Florida leads the purge, with over 1,500 books removed from school libraries, including classics like "The Bluest Eye" and contemporary works like "Gender Queer." Texas, Iowa, and South Carolina aren't far behind.

This isn't grassroots parental concern—it's an orchestrated campaign by right-wing organizations like Moms for Liberty, funded by conservative megadonors. The strategy is to flood school boards with challenges, intimidate librarians and teachers, and create a chilling effect where educators self-censor rather than face harassment or job loss.

The consequences extend beyond books. Teachers in Republican-controlled states face laws restricting discussion of race, gender, and sexuality. Florida's "Don't Say Gay" law prohibits classroom instruction on sexual orientation and gender identity through 12th grade. Tennessee's law against teaching "divisive concepts" has been used to investigate teachers who assign texts about the civil rights movement. In Texas, educators report being told not to teach that slavery was wrong because it might make white students "feel uncomfortable."

This is McCarthyism 2.0. When teachers can't discuss historical injustice, contemporary inequality, or the lives of LGBTQ+ people, they can't prepare students for democratic citizenship. That's the point. Authoritarian movements always target teachers and schools because educated, critical thinkers are a threat to power.

## The Big Issue 3: The Teacher Exodus and the War on the Profession

The United States is facing the worst teacher shortage in modern history. Over 55% of teachers report they're considering leaving the profession within the next two years—up from 30% in 2020. The reasons are clear: low pay (teachers earn 26% less than other college-educated workers), political attacks, lack of administrative support, and burnout exacerbated by the pandemic.

In Oklahoma, starting teacher salaries are $40,000—poverty wages in many parts of the state. Arizona, Florida, and Mississippi aren't much better. Teachers work second jobs as waitstaff, Uber drivers, or tutors to make ends meet. This isn't just unfair—it's catastrophic for quality. When talented college graduates can earn twice as much in other fields, they don't become teachers. When veteran educators leave in mid-career, schools lose institutional knowledge and stability.

The response from many Republican governors? Lower standards. Florida now allows military veterans to teach without education degrees. Arizona permits anyone with a bachelor's degree and a "passion for teaching" to enter classrooms with minimal training. This isn't addressing the teacher shortage—it's deprofessionalizing education, ensuring that teaching becomes a job of last resort.

Meanwhile, states that invest in teachers see different results. Massachusetts, where average teacher salaries exceed $85,000 and preparation programs are rigorous, has waiting lists for teaching positions and consistently high student outcomes. New Jersey, which raised starting salaries and expanded professional development, reduced teacher vacancies by 40% in three years. The formula works—pay teachers well, support them, and treat them as professionals. The question is whether states have the political will to fund it.

## The International Angle

The United States ranks 7th globally in per-pupil education spending, yet 30th in math and 12th in reading on international assessments. The disconnect isn't puzzling—we spend lavishly on wealthy suburban schools and starve urban and rural districts. In Finland, the highest-performing system globally, per-pupil spending varies by less than 5% between districts. In the United States, it varies by over 300%. That's not an achievement gap—it's a funding gap.

Countries that succeed in education share common features: well-paid, respected teachers; equitable funding; comprehensive early childhood education; minimal standardized testing; and no private school vouchers. The United States does the opposite, and wonders why outcomes stagnate. The answer is obvious, but admitting it would require challenging powerful interests that profit from the current system.

Internationally, the U.S. education privatization playbook is being exported. Charter schools, vouchers, and high-stakes testing—all failed reforms at home—are being pushed in the Global South by the World Bank, USAID, and U.S.-based foundations. American education consultants profit while vulnerable children are subjected to discredited policies. This is neocolonialism through education.

## The Bottom Line

American public education is at a breaking point. The choice is stark: invest in public schools, pay teachers fairly, fund equitable resources, and defend democratic education—or continue down the path of privatization, austerity, and ideological warfare, which will destroy one of the nation's most important institutions.

The evidence for what works is overwhelming. Strong, well-funded public schools reduce inequality, promote social mobility, and strengthen democracy. Privatization does the opposite. Every credible education researcher knows this. Every successful education system demonstrates it. The question is whether the United States has the political courage to act on the evidence.

The teachers, students, and parents fighting for public education are doing their part. They're organizing, protesting, running for school boards, and demanding change. Now the rest of us need to join them. Public education is the foundation of democracy. If we lose it, we lose everything.`,
    issues: [
      "The Voucher Scam and the Privatization Agenda",
      "The Book Ban Epidemic and the War on Teachers",
      "The Teacher Exodus and the War on the Profession"
    ]
  }
}

async function saveBatch() {
  console.log('📚 Saving Education Countries 5-25\\n')

  let saved = 0
  let skipped = 0

  for (const country of COUNTRIES_5_TO_25) {
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
        console.log(`  ⚠️  ${country.name} - writeup pending`)
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

  console.log(`\\n📊 Batch 2 Complete: ${saved} saved, ${skipped} skipped`)
  console.log(`\\n🎯 MILESTONE: If Chile and USA saved, that's 6/114 total countries!`)
}

saveBatch()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
