import { PrismaClient } from '@prisma/client'
import { ALL_COUNTRIES } from './generation-helpers'
import * as fs from 'fs'

const prisma = new PrismaClient()

async function saveClimateWriteup(countryName: string, summary: string) {
  // Find country data
  const country = ALL_COUNTRIES.find(c => c.name === countryName)

  if (!country) {
    throw new Error(`Country not found: ${countryName}`)
  }

  // Extract issues from summary
  const issueMatches = summary.match(/## The Big Issue \d+: (.+)/g) || []
  const issues = issueMatches.map(match => match.replace(/## The Big Issue \d+: /, '').trim())

  // Save to database
  await prisma.locationSummary.upsert({
    where: {
      name_type_category: {
        name: country.name,
        type: 'country',
        category: 'climate'
      }
    },
    create: {
      name: country.name,
      type: 'country',
      country: country.name,
      lat: country.lat,
      lng: country.lng,
      category: 'climate',
      summary,
      issues: JSON.stringify(issues),
      topStories: JSON.stringify([]),
      storyCount: 0,
      updatedAt: new Date()
    },
    update: {
      summary,
      issues: JSON.stringify(issues),
      updatedAt: new Date()
    }
  })

  console.log(`✅ Saved climate writeup for ${country.name}`)
  console.log(`   Length: ${summary.length} chars`)
  console.log(`   Issues: ${issues.length}`)
}

// Main function - reads from stdin or file
async function main() {
  const args = process.argv.slice(2)

  if (args.length < 2) {
    console.error('Usage: tsx save-climate-writeup.ts <country-name> <file-or-stdin>')
    console.error('Example: tsx save-climate-writeup.ts Argentina argentina.txt')
    console.error('Or: echo "summary" | tsx save-climate-writeup.ts Argentina -')
    process.exit(1)
  }

  const countryName = args[0]
  const input = args[1]

  let summary: string

  if (input === '-') {
    // Read from stdin
    summary = fs.readFileSync(0, 'utf-8')
  } else {
    // Read from file
    summary = fs.readFileSync(input, 'utf-8')
  }

  await saveClimateWriteup(countryName, summary.trim())

  // Show progress
  const total = await prisma.locationSummary.count({
    where: {
      type: 'country',
      category: 'climate'
    }
  })

  console.log()
  console.log(`📊 Progress: ${total}/${ALL_COUNTRIES.length} (${Math.round(total/ALL_COUNTRIES.length*100)}%)`)
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
