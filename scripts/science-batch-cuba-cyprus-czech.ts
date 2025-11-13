import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

const countries = [
  {
    name: 'Cuba',
    lat: 21.5218,
    lng: -77.7812,
    summary: `Cuba's scientific achievements are improbable, even miraculous. Under a US embargo for over six decades and hobbled by economic crisis, this island nation developed one of the developing world's most sophisticated biotechnology sectors. The story begins with Fidel Castro's obsession with science as a path to national sovereignty and economic development. In the 1980s, Cuba invested heavily in molecular biology and vaccine research, building a network of institutes that would produce original treatments for cancer, meningitis, and hepatitis.

The crown jewel is the Center for Genetic Engineering and Biotechnology in Havana, which developed innovative therapies including CIMAvax for lung cancer and Heberprot-P for diabetic foot ulcers. These are not cutting-edge by global standards, but they represent genuine innovation emerging from resource scarcity. Cuba's biotech sector employs over 20,000 scientists and technicians, exports vaccines and pharmaceuticals to the developing world, and has become a rare source of hard currency. During COVID-19, Cuba developed its own vaccines (Abdala and Soberana) rather than waiting for imports--a feat achieved by few countries.

Yet Cuban science operates within severe constraints. R&D spending is difficult to calculate but estimated at around 0.4% of GDP. Researchers work with outdated equipment, endure electricity blackouts, and earn salaries of perhaps $50 per month in official terms. The US embargo restricts access to scientific equipment, journals, and international collaboration. Brain drain is relentless: Cuban doctors and scientists flee to Chile, Spain, the US--anywhere offering better pay and working conditions. The STEM education system is Cuba's hidden strength.`,
    issues: ['US embargo restricting access to equipment and collaboration', 'Economic crisis and low R&D funding around 0.4% GDP', 'Severe brain drain of doctors and scientists', 'Aging infrastructure and equipment obsolescence', 'Political restrictions on academic freedom and internet access']
  },
  {
    name: 'Cyprus',
    lat: 35.1264,
    lng: 33.4299,
    summary: `Cyprus occupies a peculiar position in the global scientific landscape--geographically at the crossroads of Europe, Asia, and Africa, but scientifically a modest player punching slightly above its weight. This island nation of 1.2 million invests roughly 0.7% of GDP in research and development, below the EU average but growing. EU membership since 2004 has accelerated scientific integration, providing access to European research networks and funding.

The University of Cyprus, established only in 1989, has rapidly developed into a respectable research institution, particularly in oceanography, solar energy, and archaeology. The Cyprus Institute, launched in 2005 with international backing, focuses on computational science, energy, and cultural heritage preservation. Cyprus benefits from its role as a regional hub--its universities attract students from Greece, the Middle East, and beyond, and international research collaborations leverage the island's unique position and climate for projects in renewable energy and climate science.

Yet Cyprus faces structural challenges. The economy is heavily service-oriented, dominated by tourism, shipping, and financial services, with minimal manufacturing or high-tech sectors. This limits demand for R&D and creates brain drain: talented Cypriot scientists typically pursue careers in the UK, Germany, or the United States rather than returning home. The 2013 financial crisis severely impacted research funding, and recovery has been gradual. The island's division since 1974 creates inefficiencies--Turkish Cyprus has separate, less developed institutions with minimal collaboration across the Green Line.`,
    issues: ['Low R&D investment at 0.7% GDP despite EU membership', 'Brain drain with scientists pursuing careers abroad', 'Limited high-tech industry creating weak demand for research', 'Island division impeding collaboration and resource pooling', 'Small scale limiting critical mass in most research fields']
  },
  {
    name: 'Czech Republic',
    lat: 49.8175,
    lng: 15.473,
    summary: `The Czech Republic inherits a proud scientific tradition from its Austro-Hungarian and Czechoslovak past. This is the land that gave the world genetic pioneer Gregor Mendel, chemist Jaroslav Heyrovsky (1959 Nobel Prize in Chemistry), and immunologist Peter Medawar (1960 Nobel in Physiology). Yet the Czech scientific community today navigates the complex legacy of communist-era research structures and the challenges of post-1989 market transition.

The country invests approximately 2.0% of GDP in R&D--significantly higher than most Central European peers and approaching the EU average of 2.1%. The Czech Academy of Sciences operates dozens of research institutes covering fields from molecular biology to astrophysics, while Charles University in Prague (founded 1348) and Masaryk University in Brno anchor academic research. Czech scientists maintain strength in traditional areas like materials science, chemistry, and physics, and increasingly in computer science and engineering.

But Czech science faces a crisis of renewal. The research community skews old--many senior scientists trained in the Soviet era, and institutional cultures resist reform. Salaries for researchers remain low compared to Western Europe, fueling brain drain. Talented Czech scientists often pursue PhDs and careers in Germany, the UK, or the US, with limited incentive to return. EU membership provides access to Horizon Europe funding, but bureaucratic obstacles and limited English proficiency among older researchers hinder full participation.`,
    issues: ['Aging research community and slow institutional reform', 'Brain drain to Western Europe and North America', 'Academic salaries uncompetitive with Western Europe', 'Bureaucratic obstacles to EU research funding access', 'English proficiency gap among older generation limiting collaboration']
  }
]

async function main() {
  for (const country of countries) {
    console.log(`Adding ${country.name} (${country.summary.length} chars)...`)
    await prisma.locationSummary.upsert({
      where: { name_type_category: { name: country.name, type: 'country', category: 'science' } },
      update: { summary: country.summary, issues: JSON.stringify(country.issues), updatedAt: new Date() },
      create: { ...country, type: 'country', country: country.name, category: 'science', issues: JSON.stringify(country.issues), topStories: '[]', storyCount: 0 }
    })
    console.log(`✅ ${country.name} saved`)
  }
}

main().catch(console.error).finally(() => prisma.$disconnect())
