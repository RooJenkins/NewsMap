import { PrismaClient } from '@prisma/client'
import fs from 'fs'

const prisma = new PrismaClient()

// All 15 categories we're tracking
const ALL_CATEGORIES = [
  'all',
  'climate',
  'crime',
  'economy',
  'education',
  'energy',
  'entertainment',
  'food',
  'healthcare',
  'infrastructure',
  'lifestyle',
  'politics',
  'science',
  'technology',
  'travel',
]

async function analyzeCoverage() {
  console.log('📊 NEWSMAP DATABASE COVERAGE ANALYSIS\n')
  console.log('='.repeat(80))

  // Get all country writeups
  const allSummaries = await prisma.locationSummary.findMany({
    where: {
      type: 'country',
    },
    select: {
      name: true,
      category: true,
      updatedAt: true,
    },
  })

  // Get unique countries
  const uniqueCountries = new Set(allSummaries.map((s) => s.name))
  const totalCountries = uniqueCountries.size

  console.log(`\n📍 Total Countries: ${totalCountries}`)
  console.log(`📝 Total Writeups: ${allSummaries.length}`)
  console.log(`📋 Total Categories: ${ALL_CATEGORIES.length}`)
  console.log(
    `🎯 Maximum Possible Writeups: ${totalCountries} × ${ALL_CATEGORIES.length} = ${totalCountries * ALL_CATEGORIES.length}`
  )
  console.log(
    `📈 Current Coverage: ${((allSummaries.length / (totalCountries * ALL_CATEGORIES.length)) * 100).toFixed(2)}%`
  )

  // Analyze by category
  console.log('\n' + '='.repeat(80))
  console.log('📊 COVERAGE BY CATEGORY\n')

  const categoryStats: {
    [key: string]: {
      count: number
      percentage: number
      countries: string[]
    }
  } = {}

  for (const category of ALL_CATEGORIES) {
    const writeups = allSummaries.filter((s) => s.category === category)
    categoryStats[category] = {
      count: writeups.length,
      percentage: (writeups.length / totalCountries) * 100,
      countries: writeups.map((w) => w.name),
    }
  }

  // Sort categories by coverage
  const sortedCategories = ALL_CATEGORIES.sort(
    (a, b) => categoryStats[b].count - categoryStats[a].count
  )

  // Display with color coding
  for (const category of sortedCategories) {
    const stats = categoryStats[category]
    const bar = '█'.repeat(Math.floor(stats.percentage / 5))
    const emoji =
      stats.percentage >= 80
        ? '🟢'
        : stats.percentage >= 50
          ? '🟡'
          : stats.percentage >= 10
            ? '🟠'
            : '🔴'

    console.log(
      `${emoji} ${category.toUpperCase().padEnd(16)} ${stats.count.toString().padStart(3)}/${totalCountries} (${stats.percentage.toFixed(1).padStart(5)}%) ${bar}`
    )
  }

  // Critical gaps
  console.log('\n' + '='.repeat(80))
  console.log('🔴 CRITICAL GAPS (Categories < 10% coverage)\n')

  const criticalGaps = sortedCategories.filter(
    (cat) => categoryStats[cat].percentage < 10
  )

  if (criticalGaps.length > 0) {
    for (const category of criticalGaps) {
      const stats = categoryStats[category]
      const missing = totalCountries - stats.count
      console.log(
        `❌ ${category.toUpperCase()}: Only ${stats.count}/${totalCountries} countries (${stats.percentage.toFixed(1)}%)`
      )
      console.log(`   Missing: ${missing} writeups needed\n`)
    }
  } else {
    console.log('✅ No critical gaps! All categories above 10%\n')
  }

  // Countries with lowest coverage
  console.log('='.repeat(80))
  console.log('📍 COUNTRIES WITH LOWEST COVERAGE\n')

  const countryStats: { [key: string]: { count: number; categories: string[] } } =
    {}

  for (const country of Array.from(uniqueCountries)) {
    const writeups = allSummaries.filter((s) => s.name === country)
    countryStats[country] = {
      count: writeups.length,
      categories: writeups.map((w) => w.category),
    }
  }

  const sortedCountries = Array.from(uniqueCountries).sort(
    (a, b) => countryStats[a].count - countryStats[b].count
  )

  console.log('Bottom 20 countries by coverage:\n')
  sortedCountries.slice(0, 20).forEach((country, i) => {
    const stats = countryStats[country]
    const percentage = (stats.count / ALL_CATEGORIES.length) * 100
    console.log(
      `${(i + 1).toString().padStart(2)}. ${country.padEnd(30)} ${stats.count}/${ALL_CATEGORIES.length} (${percentage.toFixed(1)}%)`
    )
  })

  // Countries with complete coverage
  console.log('\n' + '='.repeat(80))
  console.log('✅ COUNTRIES WITH COMPLETE COVERAGE (15/15)\n')

  const completeCountries = sortedCountries.filter(
    (country) => countryStats[country].count === ALL_CATEGORIES.length
  )

  if (completeCountries.length > 0) {
    console.log(`🎉 ${completeCountries.length} countries have 100% coverage!\n`)
    completeCountries.slice(0, 10).forEach((country) => {
      console.log(`  ✓ ${country}`)
    })
    if (completeCountries.length > 10) {
      console.log(`  ... and ${completeCountries.length - 10} more`)
    }
  } else {
    console.log('⚠️  No countries have complete coverage yet.\n')
  }

  // Summary statistics
  console.log('\n' + '='.repeat(80))
  console.log('📈 SUMMARY STATISTICS\n')

  const totalPossible = totalCountries * ALL_CATEGORIES.length
  const totalWriteups = allSummaries.length
  const totalMissing = totalPossible - totalWriteups

  console.log(`Total Countries:              ${totalCountries}`)
  console.log(`Total Categories:             ${ALL_CATEGORIES.length}`)
  console.log(`Total Possible Writeups:      ${totalPossible}`)
  console.log(`Total Writeups Generated:     ${totalWriteups}`)
  console.log(`Total Missing Writeups:       ${totalMissing}`)
  console.log(
    `Overall Coverage:             ${((totalWriteups / totalPossible) * 100).toFixed(2)}%`
  )
  console.log(
    `Countries w/ Complete Coverage: ${completeCountries.length}/${totalCountries} (${((completeCountries.length / totalCountries) * 100).toFixed(1)}%)`
  )

  // Generate markdown report
  console.log('\n' + '='.repeat(80))
  console.log('💾 Generating report...\n')

  const report = `# NewsMap Database Coverage Analysis
**Generated:** ${new Date().toISOString()}

## Overall Statistics

- **Total Countries:** ${totalCountries}
- **Total Categories:** ${ALL_CATEGORIES.length}
- **Total Writeups:** ${totalWriteups}
- **Maximum Possible:** ${totalPossible} (${totalCountries} × ${ALL_CATEGORIES.length})
- **Coverage:** ${((totalWriteups / totalPossible) * 100).toFixed(2)}%
- **Missing Writeups:** ${totalMissing}
- **Countries with Complete Coverage:** ${completeCountries.length}/${totalCountries}

## Coverage by Category

| Category | Count | Percentage | Status |
|----------|-------|------------|--------|
${sortedCategories
  .map((cat) => {
    const stats = categoryStats[cat]
    const status =
      stats.percentage >= 80
        ? '🟢 Excellent'
        : stats.percentage >= 50
          ? '🟡 Good'
          : stats.percentage >= 10
            ? '🟠 Needs Work'
            : '🔴 Critical'
    return `| ${cat.toUpperCase()} | ${stats.count}/${totalCountries} | ${stats.percentage.toFixed(1)}% | ${status} |`
  })
  .join('\n')}

## Critical Gaps (< 10% coverage)

${
  criticalGaps.length > 0
    ? criticalGaps
        .map((cat) => {
          const stats = categoryStats[cat]
          const missing = totalCountries - stats.count
          return `### ${cat.toUpperCase()}\n- Current: ${stats.count}/${totalCountries} (${stats.percentage.toFixed(1)}%)\n- Missing: **${missing} writeups needed**\n`
        })
        .join('\n')
    : '✅ No critical gaps! All categories above 10% coverage.\n'
}

## Countries with Lowest Coverage (Bottom 20)

${sortedCountries
  .slice(0, 20)
  .map((country, i) => {
    const stats = countryStats[country]
    const percentage = (stats.count / ALL_CATEGORIES.length) * 100
    return `${i + 1}. **${country}** - ${stats.count}/${ALL_CATEGORIES.length} (${percentage.toFixed(1)}%)`
  })
  .join('\n')}

## Countries with Complete Coverage

${
  completeCountries.length > 0
    ? `✅ **${completeCountries.length} countries** have 100% coverage (15/15 categories)

${completeCountries.slice(0, 20).map((c) => `- ${c}`).join('\n')}
${completeCountries.length > 20 ? `\n... and ${completeCountries.length - 20} more` : ''}`
    : '⚠️ No countries have complete coverage yet.'
}

## Recommendations

${
  criticalGaps.length > 0
    ? `### Phase 1: Fill Critical Gaps

The following categories are severely underdeveloped and should be prioritized:

${criticalGaps
  .map((cat) => {
    const missing = totalCountries - categoryStats[cat].count
    return `- **${cat.toUpperCase()}**: Generate ${missing} writeups (~${Math.ceil(missing / 40)} sessions at 40 per session)`
  })
  .join('\n')}

**Impact:** Completing these ${criticalGaps.length} categories would add ${criticalGaps.reduce((sum, cat) => sum + (totalCountries - categoryStats[cat].count), 0)} writeups, increasing coverage to ~${(((totalWriteups + criticalGaps.reduce((sum, cat) => sum + (totalCountries - categoryStats[cat].count), 0)) / totalPossible) * 100).toFixed(1)}%`
    : '✅ All categories have reasonable coverage. Focus on completing partial categories to reach 100%.'
}

---

*Analysis complete. Run \`tsx scripts/analyze-coverage.ts\` to regenerate.*
`

  fs.writeFileSync('BASELINE_COVERAGE_REPORT.md', report)
  console.log('✅ Report saved to BASELINE_COVERAGE_REPORT.md')

  return {
    totalCountries,
    totalWriteups,
    totalPossible,
    coverage: (totalWriteups / totalPossible) * 100,
    categoryStats,
    criticalGaps,
  }
}

analyzeCoverage()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
