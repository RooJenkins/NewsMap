import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

const countries = [
  {
    name: 'Democratic Republic of Congo',
    lat: -4.0383,
    lng: 21.7587,
    summary: `The Democratic Republic of Congo's scientific capacity is a casualty of decades of conflict, kleptocracy, and state failure. Here lies one of the world's most biodiverse countries--rainforests harbor undiscovered species, mineral wealth includes rare earths essential for modern technology, and tropical diseases endemic to Central Africa demand research. Yet DRC invests essentially nothing in science. R&D spending is below 0.1% of GDP, most research institutions are defunct, and the country's few remaining scientists work in isolation with almost no resources.

The University of Kinshasa and the University of Lubumbashi were once respectable institutions during the early post-independence years. Today they are shadows--professors go unpaid for months, laboratories lack basic equipment, libraries hold no recent journals. Congolese scientists studying their own country's biodiversity must collaborate with (and are often overshadowed by) foreign researchers from Europe and North America. The Institut National de Recherche Biomedicale conducts crucial work on Ebola, mpox, and other diseases, but operates largely through international donor funding, not domestic support.

The human cost is immeasurable. Bright students who might become scientists instead flee abroad if they can, or abandon science for more immediately remunerative paths. The DRC has effectively exported its scientific potential--Congolese doctors, engineers, and researchers work in Belgium, France, Canada, South Africa, contributing to those countries' research while DRC's own capacity atrophies.`,
    issues: ['Near-zero R&D investment well below 0.1% GDP', 'Collapsed research institutions and infrastructure', 'Complete brain drain with scientists leaving or abandoning field', 'STEM education system catastrophically underfunded', 'Research on DRC conducted by foreigners not domestic scientists']
  },
  {
    name: 'Denmark',
    lat: 56.2639,
    lng: 9.5018,
    summary: `Denmark punches far above its weight in global science. This nation of under six million invests approximately 3.0% of GDP in research and development--among the world's highest rates. The returns are impressive: Danish researchers contribute disproportionately to fields like renewable energy, quantum computing, diabetes research, and particle physics. The country has produced thirteen Nobel Prize winners, most recently Morten Meldal in Chemistry (2022) for click chemistry.

The University of Copenhagen, the Technical University of Denmark (DTU), and Aarhus University form the backbone of Danish research, combining strong fundamental science with applied innovation. Denmark's pharmaceutical sector, led by Novo Nordisk's groundbreaking work on diabetes and obesity treatments, demonstrates successful translation of research into economic value. Danish physicists contributed to CERN's Large Hadron Collider, Danish climate scientists study ice core data from Greenland revealing millennia of climate history, and Danish engineers pioneer wind energy technology--Vestas and Orsted exemplify how research drives industrial leadership.

Denmark's scientific success stems from sustained public investment, strong university-industry collaboration, and cultural values emphasizing education and innovation. The STEM education system is world-class, balancing rigor with creativity, and Danish universities attract international talent. Government science policy is stable across political cycles, providing predictable funding and strategic priorities.`,
    issues: ['Small population limiting absolute scale of research enterprise', 'Competition from larger countries for top scientific talent', 'Sustaining 3% GDP R&D investment amid aging population', 'Immigration policy debates potentially impacting researcher recruitment', 'Dependence on international collaboration requiring continued openness']
  },
  {
    name: 'Dominican Republic',
    lat: 18.7357,
    lng: -70.1627,
    summary: `The Dominican Republic's scientific ambitions are nascent and fragile. This Caribbean nation of eleven million invests roughly 0.1% of GDP in research and development--among the world's lowest rates. Universities focus primarily on teaching, research infrastructure is minimal, and the concept of a scientific career barely exists outside medicine. Yet within these severe constraints, pockets of research emerge, particularly in tropical medicine, agriculture, and Caribbean ecology.

The Autonomous University of Santo Domingo (UASD), founded in 1538, is the Western Hemisphere's oldest university, but its research capacity is modest. The Institute of Tropical Medicine and the National Botanical Garden conduct studies relevant to Dominican challenges--dengue, Zika, sugarcane diseases, coral reef degradation. These efforts operate on shoestring budgets, often relying on international partnerships with US or European institutions. Dominican researchers studying their own country's biodiversity and public health are vastly outnumbered by visiting foreign scientists.

Brain drain is overwhelming. The Dominican Republic trains doctors, engineers, and scientists primarily for export--to the United States, Puerto Rico, Spain. Those who remain often abandon research for clinical practice (medicine) or private sector jobs (engineering) that offer sustainable livelihoods. Salaries for the handful of full-time researchers are low, equipment is outdated or absent, and grant funding is virtually nonexistent.`,
    issues: ['Near-zero R&D investment at 0.1% of GDP', 'Brain drain with scientists leaving for US, Puerto Rico, Europe', 'Minimal research infrastructure and funding', 'STEM education emphasizes rote learning over inquiry', 'Government viewing science as luxury not development priority']
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
