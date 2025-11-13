import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

const countries = [
  {
    name: 'Ecuador',
    lat: -1.8312,
    lng: -78.1834,
    summary: `Ecuador's scientific landscape mirrors its geography--rich in biodiversity and potential, but fragmented and challenging. The country invests approximately 0.4% of GDP in R&D, well below Latin American leaders but showing slow improvement. Ecuador's greatest scientific asset is also its most fragile: it contains portions of the Amazon rainforest, the high Andes, coastal ecosystems, and the Galapagos Islands--extraordinary living laboratories that attracted Charles Darwin and continue to draw researchers worldwide.

The National Polytechnic School in Quito and the University of Guayaquil lead domestic research, focusing on biodiversity, volcanology, seismic science, and agricultural innovation. The Galapagos Science Center, operated jointly with University of North Carolina, represents Ecuador's highest-profile research facility, studying evolution, conservation, and marine ecology. Ecuadorian scientists have documented new species, monitored volcanic activity (crucial for public safety in this seismically active country), and researched sustainable agriculture for small farmers. Yet most cutting-edge research on Ecuador's ecosystems is still conducted by foreign scientists.

Political instability and economic volatility undermine scientific development. Research funding fluctuates with commodity prices (oil, bananas, shrimp) and political priorities. The brief Rafael Correa presidency (2007-2017) saw ambitious investments in higher education and science, including scholarships for Ecuadorians to earn PhDs abroad with the expectation they would return--but many did not, and subsequent governments have scaled back these programs.`,
    issues: ['Low and volatile R&D funding at 0.4% GDP', 'Brain drain with PhD recipients often not returning after foreign training', 'Political instability disrupting long-term research planning', 'Research on Ecuador ecosystems dominated by foreign scientists', 'Small scientific community operating in relative isolation']
  },
  {
    name: 'Egypt',
    lat: 26.8206,
    lng: 30.8025,
    summary: `Egypt's scientific story is one of unrealized potential. This nation of over 100 million boasts ancient scholarly traditions--the Library of Alexandria was antiquity's great knowledge center--and modern Egypt has the Arab world's largest scientific community. Yet chronic underinvestment, political instability, and brain drain prevent Egypt from translating population and heritage into scientific leadership.

Egypt invests approximately 0.7% of GDP in R&D, low by international standards but the highest absolute spending in Africa after South Africa. Cairo University, Ain Shams University, and Alexandria University produce tens of thousands of graduates annually. Egyptian researchers work in fields from Egyptology (naturally) to renewable energy, from Nile River ecology to vaccine development. The government operates research institutes for agriculture, petroleum, nuclear energy, and more. During COVID-19, Egypt developed testing capacity and conducted clinical trials, demonstrating latent scientific capability.

Yet the system is deeply dysfunctional. Research institutes are bureaucratic and politicized, dominated by aging scientists who control resources and resist change. Salaries for researchers are low--many moonlight as private consultants or taxi drivers to survive. Equipment is often decades old, international journals are unaffordable, and publishing in high-impact journals is rare. Academic positions are awarded through patronage as much as merit. The Sisi government's authoritarian turn since 2013 has further restricted academic freedom and international collaboration.`,
    issues: ['Low R&D investment at 0.7% GDP despite large population', 'Severe and accelerating brain drain to Gulf, Europe, North America', 'Authoritarian governance restricting academic freedom', 'Dysfunctional bureaucratic research institutions', 'STEM education emphasizes rote memorization over critical thinking']
  },
  {
    name: 'El Salvador',
    lat: 13.7942,
    lng: -88.8965,
    summary: `El Salvador's scientific capacity is vestigial, the victim of civil war, poverty, and political instability. This small Central American nation of 6.5 million invests well under 0.1% of GDP in research and development--effectively nothing. There is no scientific tradition to speak of, no major research universities, no meaningful R&D infrastructure. The handful of Salvadoran scientists work in isolation or abroad, and the concept of a domestic research career is nearly nonexistent.

The University of El Salvador (UES), the country's largest and oldest, focuses almost entirely on teaching with minimal research capacity. What little research occurs involves agricultural science (coffee, sugarcane diseases), public health (dengue, Zika surveillance), and environmental studies (deforestation, water quality). These efforts are tiny, underfunded, and often dependent on international NGOs or foreign universities. Salvadoran researchers studying their own country's ecology or public health are vastly outnumbered by visiting scientists from the US or Europe.

The brain drain is absolute. Any Salvadoran with scientific ambitions who can possibly leave does so--to the United States primarily, but also to Costa Rica, Panama, or Mexico. The country's violent gang problem, poverty, and lack of opportunities mean even discussing scientific careers seems absurd when basic security and livelihoods are uncertain. The STEM education system is catastrophically weak outside a handful of private schools serving the elite.`,
    issues: ['Essentially zero R&D investment well below 0.1% GDP', 'Complete brain drain with no viable scientific careers domestically', 'Minimal research infrastructure or universities', 'STEM education catastrophically weak outside elite private schools', 'Political priorities focused on security not science or education']
  },
  {
    name: 'Estonia',
    lat: 58.5953,
    lng: 25.0136,
    summary: `Estonia's scientific transformation is perhaps Europe's most remarkable post-Soviet success story. This tiny Baltic nation of 1.3 million invests approximately 1.6% of GDP in R&D--above the EU new member average--and has built a modern, digitally-native research ecosystem from the ruins of Soviet institutions. Estonia's digital society, cyber defense expertise, and e-governance innovations make it a living laboratory for studying technology's societal impact.

The University of Tartu, founded in 1632, has evolved into a respectable research university, particularly strong in computer science, genetics, and environmental science. Tallinn University of Technology specializes in engineering and ICT. Estonian researchers contribute to European research networks, often punching above their weight in digital technologies, cyber security, and health informatics. The country leverages its unique digital infrastructure--e-residency, digital identity, paperless government--as both research subject and research tool.

Yet Estonia's scientific capacity faces structural limits. The tiny population means the absolute number of researchers is small, limiting critical mass in most fields. Brain drain is persistent--talented Estonian scientists are recruited to Finland, Germany, the UK, Silicon Valley. Salaries remain below Western European levels, though higher than other Baltic states. Estonia has successfully retained some talent by offering quality of life, modern infrastructure, and access to EU research funding, but competing with larger, richer countries remains difficult.`,
    issues: ['Tiny population limiting critical mass of researchers', 'Persistent brain drain to larger richer European countries', 'R&D investment at 1.6% GDP needs increase to compete', 'Academic salaries lower than Western Europe', 'Need for continued specialization in niches where scale does not matter']
  },
  {
    name: 'Ethiopia',
    lat: 9.145,
    lng: 40.4897,
    summary: `Ethiopia's scientific emergence from extreme poverty is fragile but real. Africa's second-most populous nation has invested in higher education and research with newfound ambition, though starting from a catastrophically low base. R&D spending remains below 0.3% of GDP, but the trajectory has been upward. Ethiopia has built new universities at a breakneck pace--from a handful in the 1990s to over forty today--and sent thousands of students abroad for graduate training with the expectation they will return and build research capacity.

Addis Ababa University, established in 1950, anchors Ethiopian science, conducting research in agriculture, public health, and Ethiopian biodiversity. The country's scientific priorities are dictated by development needs: improving subsistence agriculture, combating malaria and other diseases, managing water resources in a drought-prone region. Ethiopian researchers study indigenous crops like teff and enset, livestock diseases, and climate adaptation strategies. The Ethiopian Public Health Institute played crucial roles in responding to Ebola threats and COVID-19.

Yet Ethiopia's scientific development is imperiled by political instability. The Tigray War (2020-2022) devastated education and research in the north, destroyed university campuses, and killed or displaced researchers. Ethnic tensions, authoritarian governance, and periodic internet shutdowns undermine academic freedom and international collaboration. Brain drain is severe: Ethiopian doctors and scientists trained at public expense flee to Kenya, South Africa, the Gulf, or the West, seeking better pay and stability.`,
    issues: ['Very low R&D investment below 0.3% GDP', 'Political instability and Tigray War devastating research capacity', 'Severe brain drain to Kenya, Gulf states, Western countries', 'Rapid university expansion but uneven quality', 'Infrastructure deficits with obsolete equipment and unreliable power']
  },
  {
    name: 'Burundi',
    lat: -3.3731,
    lng: 29.9189,
    summary: `Burundi's scientific infrastructure is virtually nonexistent, a casualty of decades of ethnic violence, extreme poverty, and political instability. One of the world's poorest nations, Burundi invests effectively nothing in research and development--R&D spending is unmeasurable, likely far below 0.1% of GDP. The country has no functioning research institutions, no scientific tradition, and no pathway for aspiring scientists beyond fleeing abroad.

The University of Burundi in Bujumbura is the country's only major university, but it focuses almost entirely on basic teaching with essentially no research capacity. Laboratories are nonexistent or nonfunctional, libraries hold outdated materials, and faculty go unpaid for months during political crises. What little scientific activity occurs relates to agriculture (subsistence farming techniques, crop diseases) and public health (malaria, malnutrition studies), conducted almost exclusively by international NGOs and foreign researchers rather than Burundian scientists.

Brain drain is total and inevitable. Any Burundian with scientific talent or ambition leaves at the first opportunity--typically to Rwanda, Uganda, Kenya, or if fortunate, to Europe or North America. The country simply cannot support scientific careers: salaries are nonexistent or derisory, equipment is absent, and political instability makes long-term research impossible. The STEM education system is catastrophically underfunded, with schools lacking textbooks, qualified teachers, laboratories, and often even basic infrastructure.`,
    issues: ['Effectively zero R&D investment with no measurable spending', 'Complete absence of functional research institutions', 'Total brain drain with no domestic scientific careers possible', 'STEM education system catastrophically underfunded', 'Political instability and poverty preventing any scientific development']
  }
]

async function main() {
  console.log(`Adding final ${countries.length} countries...\n`)
  for (const country of countries) {
    console.log(`Processing ${country.name} (${country.summary.length} chars)...`)
    await prisma.locationSummary.upsert({
      where: { name_type_category: { name: country.name, type: 'country', category: 'science' } },
      update: { summary: country.summary, issues: JSON.stringify(country.issues), updatedAt: new Date() },
      create: { ...country, type: 'country', country: country.name, category: 'science', issues: JSON.stringify(country.issues), topStories: '[]', storyCount: 0 }
    })
    console.log(`✅ ${country.name} saved\n`)
  }
  console.log('All science summaries added successfully!')
}

main().catch(console.error).finally(() => prisma.$disconnect())
