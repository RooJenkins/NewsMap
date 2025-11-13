import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const countries = [
  {
    name: 'Colombia',
    lat: 4.5709,
    lng: -74.2973,
    summary: `Colombia's scientific landscape is undergoing a quiet transformation, even as political instability and limited funding create persistent headwinds. The country invests just 0.3% of GDP in research and development--far below Latin American peers like Brazil (1.2%) and Chile (0.4%). Yet within these constraints, Colombian researchers have carved out niches of excellence, particularly in biodiversity research, tropical medicine, and agricultural science.

The University of the Andes and the National University of Colombia anchor the research ecosystem, producing most of the country's scientific output. Colombian scientists study the megadiverse ecosystems of the Amazon, the Choco rainforest, and the Andean paramos--critical both for conservation and for discovering new compounds with pharmaceutical potential. The country's bitter experience with dengue, Zika, and other tropical diseases has fueled strong public health research capacity, with institutions like the National Institute of Health conducting surveillance and vaccine development.

But Colombia's scientific community operates on a shoestring. Researchers cobble together international grants, battle bureaucratic obstacles to import equipment, and watch talented graduates leave for opportunities abroad. The brain drain is severe: Colombia trains excellent scientists, particularly in medicine and engineering, only to lose many to universities and companies in the US, Europe, and increasingly Mexico and Chile. Political instability, fluctuating government priorities, and the recent COVID-19 economic shock have repeatedly derailed efforts to expand research funding.

Recent governments have recognized science as essential for economic development beyond resource extraction. Colombia has modest but growing biotech and pharmaceutical sectors, and Medellin has positioned itself as a regional tech hub. Yet STEM education remains uneven--elite universities produce world-class graduates, but the broader education system struggles with quality and access.`,
    issues: ['Severe underfunding at 0.3% GDP for R&D', 'Persistent brain drain losing trained scientists abroad', 'Research infrastructure deficits and equipment import challenges', 'Political instability disrupting long-term scientific planning', 'Uneven STEM education quality between elite and public institutions']
  },
  {
    name: 'Croatia',
    lat: 45.1,
    lng: 15.2,
    summary: `Croatia's scientific story is one of resilience amid constraint. This small Balkan nation of just under four million people invests approximately 1.0% of GDP in research and development--respectable by Eastern European standards but well below the EU average of 2.1%. The legacy of Yugoslavia's once-robust scientific institutions lingers in pockets of excellence, but chronic underinvestment, brain drain, and bureaucratic inertia hamper progress.

The University of Zagreb, founded in 1669, remains the anchor of Croatian science, alongside the Rudjer Boskovic Institute, which conducts research in physics, chemistry, and marine science. Croatian researchers have made notable contributions to fields like mathematics, marine biology studying the Adriatic ecosystem, and medical research. The country produced one Nobel laureate: Vladimir Prelog won the 1975 Chemistry Prize, though he did his prize-winning work in Switzerland--a pattern that persists today.

Brain drain is Croatia's scientific curse. The best graduates leave for Germany, Austria, the UK, or North America, lured by better funding, modern facilities, and higher salaries. EU accession in 2013 accelerated this exodus by removing barriers to movement. Croatian universities struggle to compete: academic salaries are low, research grants are scarce and bureaucratically burdensome to obtain, and equipment is often outdated. The few who return from abroad face frustration with rigid hierarchies and slow institutional reform.

Yet Croatia has assets. EU membership provides access to Horizon Europe research funding, and the country has niche strengths in tourism-related environmental science, sustainable agriculture, and digital technologies. The STEM education system is solid if unspectacular, producing graduates with strong fundamentals.`,
    issues: ['Severe brain drain to Western Europe and North America', 'R&D investment at 1.0% GDP below EU average', 'Aging research infrastructure and equipment deficits', 'Bureaucratic obstacles to research funding and administration', 'Academic salary and career prospects uncompetitive with Western Europe']
  }
]

async function main() {
  console.log('Adding science summaries for Colombia and Croatia...\n')
  
  for (const country of countries) {
    const { name, lat, lng, summary, issues } = country
    
    console.log(`Processing ${name}...`)
    console.log(`  Summary: ${summary.length} characters`)
    console.log(`  Issues: ${issues.length}`)
    
    await prisma.locationSummary.upsert({
      where: {
        name_type_category: {
          name,
          type: 'country',
          category: 'science'
        }
      },
      update: {
        summary,
        issues: JSON.stringify(issues),
        topStories: JSON.stringify([]),
        storyCount: 0,
        updatedAt: new Date()
      },
      create: {
        name,
        type: 'country',
        country: name,
        lat,
        lng,
        category: 'science',
        summary,
        issues: JSON.stringify(issues),
        topStories: JSON.stringify([]),
        storyCount: 0
      }
    })
    
    console.log(`✅ Saved ${name}\n`)
  }
  
  console.log('Done!')
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
