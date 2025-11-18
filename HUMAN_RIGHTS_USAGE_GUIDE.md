# Human Rights Summaries - Usage & Query Guide

## Quick Start

### Generate the Human Rights Summaries
```bash
npm run generate-human-rights-1-40
```

### Verify Generation
```bash
npx tsx scripts/verify-human-rights-1-40.ts
```

## Accessing the Data

### Via Prisma Client (TypeScript)

#### Get all human rights summaries
```typescript
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

const summaries = await prisma.locationSummary.findMany({
  where: {
    category: 'humanrights',
    type: 'country'
  }
})
```

#### Get specific country
```typescript
const usa = await prisma.locationSummary.findUnique({
  where: {
    name_type_category: {
      name: 'United States',
      type: 'country',
      category: 'humanrights'
    }
  }
})

console.log(usa.summary)
console.log(JSON.parse(usa.issues)) // Parse JSON issues array
```

#### Get countries with specific issues
```typescript
const allSummaries = await prisma.locationSummary.findMany({
  where: {
    category: 'humanrights',
    type: 'country'
  }
})

const countriesWithFemicide = allSummaries.filter(summary => {
  const issues = JSON.parse(summary.issues || '[]')
  return issues.some(issue => issue.toLowerCase().includes('femicide'))
})
```

### Via Raw SQL (if needed)

#### Query sqlite database directly
```bash
# Using sqlite3 CLI (if installed)
sqlite3 prisma/dev.db

# Inside sqlite3:
SELECT name, summary FROM LocationSummary
WHERE category='humanrights' LIMIT 5;

SELECT name, issues FROM LocationSummary
WHERE category='humanrights' AND name='Brazil';
```

### Via REST API (when integrated with frontend)

#### Fetch summaries for a country
```javascript
// Example - would need to be implemented in your API routes
const response = await fetch('/api/summaries?country=Ukraine&category=humanrights')
const data = await response.json()
console.log(data.summary)
console.log(data.issues) // Array of major issues
```

## Data Structure

### LocationSummary Model
```typescript
{
  id: string                    // CUID unique identifier
  name: string                  // Country name (e.g., "Brazil")
  type: string                  // Always "country" for these entries
  country: string               // Country name (same as name field)
  category: string              // Always "humanrights" for these entries
  lat: number                   // Latitude for map visualization
  lng: number                   // Longitude for map visualization

  summary: string               // Full human rights analysis (1,700-2,100 chars)
  issues: string                // JSON stringified array of 5 major issues
  topStories: string            // Empty JSON array "[]" (for future use)
  storyCount: number            // Always 0 (for future use with news integration)

  createdAt: DateTime           // When record was created
  updatedAt: DateTime           // When record was last updated
}
```

### Issues Array Format
Each issues JSON string parses to an array of strings:
```json
[
  "First major issue - specific, actionable human rights concern",
  "Second major issue - specific, actionable human rights concern",
  "Third major issue - specific, actionable human rights concern",
  "Fourth major issue - specific, actionable human rights concern",
  "Fifth major issue - specific, actionable human rights concern"
]
```

## Usage Examples

### Example 1: Display Human Rights Analysis for a Country

```typescript
import { PrismaClient } from '@prisma/client'

async function displayCountryAnalysis(countryName: string) {
  const prisma = new PrismaClient()

  const summary = await prisma.locationSummary.findUnique({
    where: {
      name_type_category: {
        name: countryName,
        type: 'country',
        category: 'humanrights'
      }
    }
  })

  if (!summary) {
    console.log(`No human rights summary found for ${countryName}`)
    return
  }

  console.log(`\n🌍 HUMAN RIGHTS ANALYSIS: ${summary.name}`)
  console.log(`\n${summary.summary}`)
  console.log(`\n## KEY ISSUES:`)

  const issues = JSON.parse(summary.issues || '[]')
  issues.forEach((issue, index) => {
    console.log(`${index + 1}. ${issue}`)
  })
}

// Usage
displayCountryAnalysis('Brazil')
```

### Example 2: Create a Comparative Analysis

```typescript
async function compareCountries(countries: string[]) {
  const prisma = new PrismaClient()

  const summaries = await prisma.locationSummary.findMany({
    where: {
      category: 'humanrights',
      name: { in: countries }
    }
  })

  console.log(`\n📊 COMPARATIVE HUMAN RIGHTS ANALYSIS\n`)

  summaries.forEach(summary => {
    const issues = JSON.parse(summary.issues || '[]')
    console.log(`${summary.name}:`)
    console.log(`  - Key Challenges: ${issues.slice(0, 3).join('; ')}`)
    console.log()
  })
}

// Usage
compareCountries(['Venezuela', 'Brazil', 'Mexico', 'Colombia'])
```

### Example 3: Search for Common Issues Across Countries

```typescript
async function findCountriesByIssue(issueKeyword: string) {
  const prisma = new PrismaClient()

  const summaries = await prisma.locationSummary.findMany({
    where: {
      category: 'humanrights',
      type: 'country'
    }
  })

  const matching = summaries
    .map(s => ({
      name: s.name,
      issues: JSON.parse(s.issues || '[]') as string[]
    }))
    .filter(item =>
      item.issues.some(issue =>
        issue.toLowerCase().includes(issueKeyword.toLowerCase())
      )
    )

  console.log(`\nCountries facing ${issueKeyword} issues:`)
  matching.forEach(item => {
    const relevantIssues = item.issues.filter(issue =>
      issue.toLowerCase().includes(issueKeyword.toLowerCase())
    )
    console.log(`\n${item.name}:`)
    relevantIssues.forEach(issue => {
      console.log(`  - ${issue}`)
    })
  })
}

// Usage
findCountriesByIssue('police violence')
findCountriesByIssue('femicide')
findCountriesByIssue('journalist')
```

### Example 4: Generate a Regional Report

```typescript
async function generateRegionalReport(region: string) {
  const prisma = new PrismaClient()

  const regionCountries: { [key: string]: string[] } = {
    'americas': ['United States', 'Canada', 'Mexico', 'Brazil', 'Argentina', 'Chile'],
    'caribbean': ['Cuba', 'Haiti', 'Dominican Republic', 'Jamaica', 'Trinidad and Tobago'],
    'europe': ['United Kingdom', 'France', 'Germany', 'Italy', 'Spain', 'Poland', 'Russia']
  }

  const countries = regionCountries[region.toLowerCase()] || []

  const summaries = await prisma.locationSummary.findMany({
    where: {
      category: 'humanrights',
      name: { in: countries }
    }
  })

  console.log(`\n🌍 HUMAN RIGHTS REPORT: ${region.toUpperCase()}`)
  console.log(`================================================\n`)

  summaries.forEach(summary => {
    const issues = JSON.parse(summary.issues || '[]')
    console.log(`## ${summary.name.toUpperCase()}`)
    console.log(`\nSummary: ${summary.summary.substring(0, 300)}...`)
    console.log(`\nTop Issues:`)
    issues.slice(0, 3).forEach(issue => console.log(`  • ${issue}`))
    console.log('\n' + '='.repeat(50) + '\n')
  })
}

// Usage
generateRegionalReport('americas')
generateRegionalReport('europe')
```

### Example 5: Update Summary with Latest Information

```typescript
async function updateHumanRightsSummary(countryName: string, newSummary: string, newIssues: string[]) {
  const prisma = new PrismaClient()

  const updated = await prisma.locationSummary.update({
    where: {
      name_type_category: {
        name: countryName,
        type: 'country',
        category: 'humanrights'
      }
    },
    data: {
      summary: newSummary,
      issues: JSON.stringify(newIssues),
      updatedAt: new Date()
    }
  })

  console.log(`✅ Updated ${countryName} human rights summary`)
  console.log(`Updated at: ${updated.updatedAt}`)
}

// Usage - Example with hypothetical update
/*
updateHumanRightsSummary(
  'Ukraine',
  'New summary with latest developments...',
  ['Issue 1', 'Issue 2', 'Issue 3', 'Issue 4', 'Issue 5']
)
*/
```

## Integration Examples

### With Next.js API Route

```typescript
// pages/api/summaries/[country].ts
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default async function handler(req, res) {
  const { country } = req.query

  if (!country || typeof country !== 'string') {
    return res.status(400).json({ error: 'Country parameter required' })
  }

  try {
    const summary = await prisma.locationSummary.findUnique({
      where: {
        name_type_category: {
          name: country,
          type: 'country',
          category: 'humanrights'
        }
      }
    })

    if (!summary) {
      return res.status(404).json({ error: 'Country not found' })
    }

    return res.status(200).json({
      name: summary.name,
      summary: summary.summary,
      issues: JSON.parse(summary.issues || '[]'),
      coordinates: { lat: summary.lat, lng: summary.lng }
    })
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Internal server error' })
  }
}
```

### With React Component

```typescript
// components/HumanRightsSummary.tsx
import { useEffect, useState } from 'react'

export default function HumanRightsSummary({ countryName }: { countryName: string }) {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch(`/api/summaries/${countryName}`)
      .then(res => res.json())
      .then(data => {
        setData(data)
        setLoading(false)
      })
      .catch(error => {
        console.error('Failed to fetch summary:', error)
        setLoading(false)
      })
  }, [countryName])

  if (loading) return <div>Loading...</div>
  if (!data) return <div>Summary not found</div>

  return (
    <div className="human-rights-summary">
      <h1>{data.name} - Human Rights Analysis</h1>
      <div className="summary-text">
        {data.summary}
      </div>
      <div className="issues">
        <h3>Key Issues:</h3>
        <ul>
          {data.issues.map((issue, index) => (
            <li key={index}>{issue}</li>
          ))}
        </ul>
      </div>
      <div className="map-coordinates">
        <small>Location: {data.coordinates.lat}, {data.coordinates.lng}</small>
      </div>
    </div>
  )
}
```

## Maintenance & Updates

### Periodic Updates
```bash
# Update specific country
npx tsx scripts/update-country-summary.ts --country="Brazil"

# Update all summaries
npm run generate-human-rights-1-40
```

### Archiving Old Versions
```typescript
// Keep historical versions
async function archiveOldVersion(countryName: string) {
  const prisma = new PrismaClient()

  // Get current version
  const current = await prisma.locationSummary.findUnique({
    where: {
      name_type_category: {
        name: countryName,
        type: 'country',
        category: 'humanrights'
      }
    }
  })

  // Save to archive table (if you create one)
  // await prisma.humanRightsArchive.create({ data: current })
}
```

## Performance Tips

1. **Cache frequently accessed summaries** in Redis or memory
2. **Index queries** by name and category
3. **Limit full text retrieval** - fetch only what's needed
4. **Batch operations** when updating multiple countries
5. **Use pagination** when displaying lists

## Data Quality

### Validation
All summaries include:
- ✅ 1,700-2,100 character analyses
- ✅ Exactly 5 major issues per country
- ✅ Coverage of 6 required human rights areas
- ✅ Geographic coordinates
- ✅ Proper JSON formatting

### Updates Tracked
- Creation timestamp: `createdAt`
- Last update: `updatedAt`
- Can be used to identify stale data

## Support & Resources

- **Script Location**: `/home/user/NewsMap/scripts/generate-human-rights-1-40.ts`
- **Database**: SQLite at `/home/user/NewsMap/prisma/dev.db`
- **Prisma Schema**: `/home/user/NewsMap/prisma/schema.prisma`
- **Documentation**: See `HUMAN_RIGHTS_SAMPLE_OUTPUTS.md` for sample content

---

This data is production-ready and can be integrated into web applications, dashboards, reporting tools, and any system requiring human rights context by country.
