# Real Estate & Housing Summaries Generation (Countries 41-80)

## Overview

A comprehensive script has been created to generate detailed Real Estate & Housing market analyses for countries 41-80 from the countryData list. The script generates 2,000-3,000 character analyses for each country with a YIMBY (Yes In My Back Yard) perspective, conversational tone similar to Matt Yglesias, and saves them to the database.

## Countries Covered (41-80)

### Europe (Countries 41-57):
1. **41. Denmark** - High-income Nordic housing market
2. **42. Ireland** - Tech boom and housing crisis context
3. **43. Hungary** - Central European development
4. **44. Czech Republic** - Post-communist market evolution
5. **45. Bulgaria** - Low-cost Eastern European market
6. **46. Croatia** - Mediterranean European market
7. **47. Estonia** - Digital-first Baltic nation
8. **48. Norway** - Oil-wealthy Nordic housing
9. **49. Sweden** - Progressive Nordic policies
10. **50. Portugal** - Southern European development
11. **51. Netherlands** - Bicycle-friendly dense housing
12. **52. Romania** - Rapid development market
13. **53. Serbia** - Balkans regional dynamics
14. **54. Switzerland** - Ultra-premium housing market
15. **55. Slovakia** - Central European transition
16. **56. Lithuania** - Baltic EU member
17. **57. Latvia** - Baltic market dynamics

### Asia-Pacific (Countries 58-80):
18. **58. China** - Massive urban development and ghost cities
19. **59. India** - Rapid urbanization and affordability challenges
20. **60. Japan** - Demographic decline and urban density
21. **61. South Korea** - High-density development
22. **62. North Korea** - Isolated market
23. **63. Indonesia** - Rapid development with inequality
24. **64. Australia** - Suburban sprawl and affordability crisis
25. **65. New Zealand** - Pacific island housing challenges
26. **66. Pakistan** - Emerging market pressures
27. **67. Bangladesh** - Dense urban centers
28. **68. Afghanistan** - Post-conflict reconstruction
29. **69. Iran** - Sanctions-affected market
30. **70. Israel** - Middle East density and conflict
31. **71. Palestine** - Occupied territories market
32. **72. Iraq** - Post-conflict rebuilding
33. **73. Jordan** - Regional refugee impacts
34. **74. Cambodia** - Southeast Asian development
35. **75. Laos** - Low-development market
36. **76. Myanmar** - Coup and market disruption
37. **77. Nepal** - Mountainous terrain challenges
38. **78. Mongolia** - Sparse development patterns
39. **79. Papua New Guinea** - Resource-driven development
40. **80. Fiji** - Pacific island tourism economy

## Analysis Components

Each Real Estate & Housing summary covers:

### 1. **Housing Affordability & Prices**
- Current housing price levels
- Price-to-income ratios
- Trends in residential property values
- Regional price variations
- Affordability trajectory

### 2. **Homeownership vs Rental Markets**
- Homeownership rates vs rental proportions
- Cultural attitudes toward owning vs renting
- Rental market conditions and regulations
- Accessibility of homeownership
- Rental affordability

### 3. **Construction Activity**
- Building permit trends
- New housing starts
- Development pipeline analysis
- Housing supply growth relative to population
- Construction pace and investment levels

### 4. **Zoning & Regulation**
- Land use regulations
- Zoning law frameworks
- Development restrictions
- Supply-side impacts
- Urban sprawl patterns

### 5. **Density vs Sprawl**
- Urban density patterns
- Suburban expansion trends
- Public transit infrastructure
- Sprawl vs densification trajectory
- Implications for sustainability and affordability

### 6. **Real Estate Investment**
- Foreign investment levels
- Institutional investment trends
- Speculation issues
- Asset vs shelter dynamics
- Investment incentives

### 7. **Homelessness & Housing Security**
- Homelessness rates
- Housing insecurity levels
- Policy responses
- Vulnerable population impacts
- Solutions being tested

## Voice & Style

The analyses are written with a **YIMBY (Yes In My Back Yard)** perspective:
- Conversational, accessible tone similar to Matt Yglesias
- Evidence-based and fact-focused
- Emphasizes housing supply as critical issue
- Understanding that restrictive zoning causes real problems
- Support for development and housing abundance
- Focus on actionable insights about housing markets

## Script Details

**File Location:** `/home/user/NewsMap/scripts/generate-realestate-41-80.ts`

### Key Features:
- Uses Claude Sonnet 4.5 for analysis generation
- Rate limiting: 1.5 second delays between API calls
- Database integration via Prisma ORM
- SQLite storage in `/home/user/NewsMap/prisma/dev.db`
- Error handling and reporting
- Progress tracking with emoji indicators
- UPSERT operations to update existing summaries

### Database Schema
Stores summaries in the `LocationSummary` table:
- **name**: Country name
- **type**: "country"
- **category**: "realestate"
- **summary**: Full 2000-3000 character analysis
- **issues**: JSON array of 3-5 major issues
- **topStories**: JSON array with analysis metadata
- **storyCount**: 1 (single generated analysis per country)

## How to Run

### Prerequisites
1. Ensure you have an Anthropic API key
2. Node.js and npm/yarn installed
3. Dependencies installed: `npm install`
4. Database initialized: `npx prisma migrate deploy`

### Setup
Add your API key to `.env` file:
```
DATABASE_URL="file:./prisma/dev.db"
ANTHROPIC_API_KEY=sk-ant-your-actual-key-here
```

Or set as environment variable:
```bash
export ANTHROPIC_API_KEY=sk-ant-your-actual-key-here
```

### Execution
```bash
# Using npm script (once added to package.json):
npm run generate-realestate-41-80

# Or directly with tsx:
npx tsx scripts/generate-realestate-41-80.ts
```

### Expected Output
```
🚀 Starting Real Estate & Housing summary generation for countries 41-80

Countries: Denmark, Ireland, Hungary, ...

🏠 Generating Real Estate summary for Denmark...
✅ Generated Real Estate summary for Denmark (2847 chars, 5 issues)
💾 Saved Real Estate summary for Denmark

🏠 Generating Real Estate summary for Ireland...
✅ Generated Real Estate summary for Ireland (2953 chars, 4 issues)
💾 Saved Real Estate summary for Ireland

...

================================================================================
✅ Real Estate & Housing summary generation complete!
Success: 40 | Failed: 0 | Skipped: 0
Generated summaries for 40 countries (41-80)
```

## Estimated Runtime

- **Total API calls**: 40 (one per country)
- **Rate limiting**: 1.5 seconds between calls
- **Average API latency**: 3-5 seconds per request
- **Estimated total time**: 5-10 minutes

## Output Examples

### Sample Summary for Denmark
*Generated analysis would cover:*
- Nordic housing affordability paradox despite high GDP/capita
- Strong homeownership culture with mortgage accessibility
- Restrictive zoning in Copenhagen creating density benefits
- Construction activity relative to population stability
- Foreign investment trends and speculation concerns
- Homeless population relatively low but policy focused
- YIMBY-aligned observations about Copenhagen's density successes

### Sample Issues for Denmark
- Limited housing supply in Copenhagen despite demand
- High property prices relative to regional standards
- Restrictive zoning limiting suburban development
- Rental market regulation affecting supply
- Foreign investment driving speculation

## Querying the Database

Once generated, query the summaries:

```sql
-- Get all real estate summaries
SELECT * FROM LocationSummary WHERE category = 'realestate';

-- Get specific country
SELECT summary, issues FROM LocationSummary
WHERE name = 'Denmark' AND category = 'realestate';

-- Get all issues for a country
SELECT name, issues FROM LocationSummary
WHERE category = 'realestate' AND name IN (
  'Denmark', 'Ireland', 'Hungary', 'Czech Republic'
);
```

## Integration with Web App

The summaries integrate with the NewsMap application:
- Display in country-specific real estate pages
- Filter by category in summary views
- Include in geospatial analysis
- Export for reports and analysis

## Customization Options

To modify the script:

1. **Change country range**: Edit line 15
   ```typescript
   const countryList = Object.keys(countryData).slice(40, 80)
   ```

2. **Adjust character range**: Edit line 38 in prompt
   ```typescript
   Your analysis should be 2,000-3,000 characters
   ```

3. **Modify analysis topics**: Edit lines 40-52 to add/remove topics

4. **Change AI model**: Edit line 71
   ```typescript
   model: 'claude-sonnet-4-20250514',
   ```

5. **Adjust rate limiting**: Edit line 179
   ```typescript
   await new Promise((resolve) => setTimeout(resolve, 1500))
   ```

## Troubleshooting

### API Key Not Found
- Ensure `.env` file has `ANTHROPIC_API_KEY=sk-ant-...`
- Check file is in root directory: `/home/user/NewsMap/.env`
- Verify no typos in variable name

### Database Connection Error
- Ensure `DATABASE_URL` is set in `.env`
- Check Prisma migrations: `npx prisma migrate status`
- Verify database file exists: `/home/user/NewsMap/prisma/dev.db`

### Rate Limiting / Timeout
- Increase `max_tokens`: 3500 may need to be higher
- Reduce rate limiting to run faster (caution: may hit API limits)
- Check API usage at console.anthropic.com

### Memory Issues
- Script processes one country at a time
- If running multiple instances, space them out
- Monitor with `ps aux | grep generate-realestate`

## Advanced Features

### Batch Processing
To generate other countries or categories, create similar scripts:
```bash
# Example structure for other ranges
scripts/generate-realestate-1-40.ts
scripts/generate-realestate-81-120.ts
scripts/generate-realestate-121-148.ts
```

### Parallel Execution
Can run multiple instances with rate limiting:
```bash
# Run in separate terminals
npx tsx scripts/generate-realestate-1-40.ts &
npx tsx scripts/generate-realestate-41-80.ts &
npx tsx scripts/generate-realestate-81-120.ts &
```

### Database Backup
Before running:
```bash
cp prisma/dev.db prisma/dev.db.backup
```

## Success Criteria

The script successfully:
- Generates analyses for all 40 countries in range
- Creates 2000-3000 character summaries
- Extracts 3-5 major issues per country
- Saves to database with proper schema
- Maintains YIMBY voice and tone throughout
- Completes within reasonable timeframe
- Provides clear progress reporting

## Additional Resources

- Anthropic API Docs: https://docs.anthropic.com
- Prisma Docs: https://www.prisma.io/docs
- YIMBY Movement: https://www.strongtowns.org
- Matt Yglesias Housing Coverage: https://www.slowboring.com
- Real Estate Data: World Bank, IMF country profiles

---

**Created:** November 14, 2025
**Script Version:** 1.0
**Countries:** 40 (41-80 from countryData)
**Status:** Ready for execution with API key
