import 'dotenv/config'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const NZ_COUNTRIES = [
  'Nepal', 'Netherlands', 'New Zealand', 'Nicaragua', 'Nigeria', 'North Korea', 'Norway', 'Oman',
  'Pakistan', 'Palestine', 'Panama', 'Papua New Guinea', 'Paraguay', 'Peru', 'Philippines',
  'Poland', 'Portugal', 'Qatar', 'Romania', 'Russia', 'Rwanda', 'Saudi Arabia', 'Senegal',
  'Serbia', 'Singapore', 'Slovakia', 'Slovenia', 'Somalia', 'South Africa', 'South Korea',
  'Spain', 'Sri Lanka', 'Sudan', 'Sweden', 'Switzerland', 'Syria', 'Taiwan', 'Tanzania',
  'Thailand', 'Tunisia', 'Turkey', 'Uganda', 'Ukraine', 'United Arab Emirates',
  'United Kingdom', 'United States', 'Uruguay', 'Uzbekistan', 'Venezuela', 'Vietnam',
  'Yemen', 'Zimbabwe'
]

async function checkStatus() {
  console.log('Checking TRAVEL entries for N-Z countries...\n')

  const existing = await prisma.locationSummary.findMany({
    where: {
      category: 'travel',
      name: { in: NZ_COUNTRIES }
    },
    select: { name: true }
  })

  const existingNames = existing.map(e => e.name)
  const missing = NZ_COUNTRIES.filter(c => !existingNames.includes(c))

  console.log(`Total N-Z countries: ${NZ_COUNTRIES.length}`)
  console.log(`Existing travel entries: ${existing.length}`)
  console.log(`Missing: ${missing.length}\n`)

  if (existing.length > 0) {
    console.log('✓ Existing:', existingNames.join(', '))
  }

  if (missing.length > 0) {
    console.log('\n✗ Missing:', missing.join(', '))
  }

  await prisma.$disconnect()
}

checkStatus()
