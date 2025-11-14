import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('🔍 Verifying all category summaries...\n')

  // Count by category
  const healthcareCount = await prisma.locationSummary.count({
    where: { category: 'healthcare' }
  })

  const educationCount = await prisma.locationSummary.count({
    where: { category: 'education' }
  })

  const allCount = await prisma.locationSummary.count({
    where: { category: 'all' }
  })

  console.log('📊 Summary Counts by Category:')
  console.log(`   Healthcare: ${healthcareCount}`)
  console.log(`   Education: ${educationCount}`)
  console.log(`   All (general): ${allCount}`)
  console.log(`   Total: ${healthcareCount + educationCount + allCount}\n`)

  // Get all healthcare summaries
  const healthcareSummaries = await prisma.locationSummary.findMany({
    where: { category: 'healthcare' },
    orderBy: { name: 'asc' },
    select: { name: true, category: true }
  })

  console.log('🏥 Healthcare Summaries:')
  healthcareSummaries.forEach((s, i) => {
    console.log(`   ${i + 1}. ${s.name}`)
  })

  // Get all education summaries
  const educationSummaries = await prisma.locationSummary.findMany({
    where: { category: 'education' },
    orderBy: { name: 'asc' },
    select: { name: true, category: true }
  })

  console.log('\n🎓 Education Summaries:')
  educationSummaries.forEach((s, i) => {
    console.log(`   ${i + 1}. ${s.name}`)
  })

  // Check for missing countries
  const allCountries = [
    "United States", "Canada", "Mexico", "Brazil", "Argentina", "Chile", "Colombia", "Peru", "Venezuela", "Ecuador",
    "Bolivia", "Paraguay", "Uruguay", "Cuba", "Haiti", "Dominican Republic", "Guatemala", "Honduras", "El Salvador", "Nicaragua",
    "Costa Rica", "Panama", "Jamaica", "Trinidad and Tobago", "Guyana", "Suriname", "Belize",
    "United Kingdom", "France", "Germany", "Italy", "Spain", "Poland", "Ukraine", "Russia", "Turkey", "Greece", "Belgium", "Austria", "Finland",
    "Denmark", "Ireland", "Hungary", "Czech Republic", "Bulgaria", "Croatia", "Estonia", "Norway", "Sweden", "Portugal",
    "Netherlands", "Romania", "Serbia", "Switzerland", "Slovakia", "Lithuania", "Latvia",
    "China", "India", "Japan", "South Korea", "North Korea", "Indonesia", "Australia", "New Zealand", "Pakistan", "Bangladesh",
    "Afghanistan", "Iran", "Israel", "Palestine", "Iraq", "Jordan", "Cambodia", "Laos", "Myanmar", "Nepal",
    "Mongolia", "Papua New Guinea", "Fiji", "Bahrain", "Kuwait", "Oman", "Qatar", "Kazakhstan", "Thailand", "Vietnam",
    "Philippines", "Malaysia", "Singapore", "Taiwan", "Sri Lanka", "Yemen", "Saudi Arabia", "UAE", "Lebanon", "Syria",
    "Solomon Islands", "Vanuatu", "Samoa", "Tonga",
    "Egypt", "Ethiopia", "Kenya", "Somalia", "Sudan", "Algeria", "Angola", "Ghana", "Mozambique", "Senegal",
    "Democratic Republic of Congo", "Nigeria", "South Africa", "Morocco", "Tunisia", "Libya", "Tanzania", "Uganda", "Zimbabwe", "Cameroon",
    "Zambia", "Mali", "Niger", "Chad", "Burkina Faso", "Rwanda", "Botswana"
  ]

  console.log('\n🔍 Missing Countries Analysis:\n')

  const healthcareNames = new Set(healthcareSummaries.map(s => s.name))
  const educationNames = new Set(educationSummaries.map(s => s.name))

  const missingHealthcare = allCountries.filter(c => !healthcareNames.has(c))
  const missingEducation = allCountries.filter(c => !educationNames.has(c))

  if (missingHealthcare.length > 0) {
    console.log(`❌ Missing Healthcare (${missingHealthcare.length}):`)
    missingHealthcare.forEach(c => console.log(`   - ${c}`))
  } else {
    console.log('✅ All 128 countries have healthcare summaries!')
  }

  console.log()

  if (missingEducation.length > 0) {
    console.log(`❌ Missing Education (${missingEducation.length}):`)
    missingEducation.forEach(c => console.log(`   - ${c}`))
  } else {
    console.log('✅ All 128 countries have education summaries!')
  }

  console.log('\n✨ Verification Complete!\n')
  console.log('📈 Final Totals:')
  console.log(`   Healthcare: ${healthcareCount}/128 (${Math.round(healthcareCount/128*100)}%)`)
  console.log(`   Education: ${educationCount}/128 (${Math.round(educationCount/128*100)}%)`)
  console.log(`   Total category summaries: ${healthcareCount + educationCount}/256\n`)
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
