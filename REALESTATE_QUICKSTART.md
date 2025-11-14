# Real Estate & Housing Summaries - Quick Start Guide

## What Was Generated

A complete script system to generate detailed Real Estate & Housing market analyses for countries 41-80 (Denmark through Fiji) from your NewsMap database.

## Files Created

### 1. **Main Script**
- **File**: `/home/user/NewsMap/scripts/generate-realestate-41-80.ts`
- **Purpose**: Generates analyses and saves to database
- **Status**: Ready to run (needs API key)

### 2. **Documentation**
- **REALESTATE_GENERATION_GUIDE.md** - Comprehensive guide with all details
- **REALESTATE_SAMPLE_OUTPUTS.md** - Sample analyses showing expected quality
- **REALESTATE_QUICKSTART.md** - This file

### 3. **Helper Script**
- **scripts/verify-countries-41-80.ts** - Lists the 40 countries that will be analyzed

## Quick Run Instructions

### 1. Set Up API Key
Add to `.env` file in project root:
```
ANTHROPIC_API_KEY=sk-ant-your-key-here
```

### 2. Run the Script
```bash
# Option 1: Using npm script (easiest)
npm run generate-realestate-41-80

# Option 2: Direct tsx
npx tsx scripts/generate-realestate-41-80.ts
```

### 3. Wait for Completion
- Processes 40 countries sequentially
- ~5-10 minutes total runtime
- Outputs progress for each country
- Saves directly to database

## Expected Output

```
🚀 Starting Real Estate & Housing summary generation for countries 41-80

Countries: Denmark, Ireland, Hungary, Czech Republic, ...

🏠 Generating Real Estate summary for Denmark...
✅ Generated Real Estate summary for Denmark (2847 chars, 5 issues)
💾 Saved Real Estate summary for Denmark

[continues for each country...]

================================================================================
✅ Real Estate & Housing summary generation complete!
Success: 40 | Failed: 0 | Skipped: 0
Generated summaries for 40 countries (41-80)
```

## Countries Included

**Europe (17 countries):**
Denmark, Ireland, Hungary, Czech Republic, Bulgaria, Croatia, Estonia, Norway, Sweden, Portugal, Netherlands, Romania, Serbia, Switzerland, Slovakia, Lithuania, Latvia

**Asia-Pacific (23 countries):**
China, India, Japan, South Korea, North Korea, Indonesia, Australia, New Zealand, Pakistan, Bangladesh, Afghanistan, Iran, Israel, Palestine, Iraq, Jordan, Cambodia, Laos, Myanmar, Nepal, Mongolia, Papua New Guinea, Fiji

## What Gets Generated

For each country, you get:

### Summary (2,000-3,000 characters)
Comprehensive analysis covering:
- Housing affordability & prices
- Homeownership vs rental markets
- Construction activity & supply
- Zoning & regulatory environment
- Urban density vs sprawl patterns
- Real estate investment dynamics
- Homelessness & housing security

### Issues (3-5 per country)
Major housing challenges specific to each nation

### Tone & Style
- YIMBY (Yes In My Back Yard) perspective
- Conversational, like Matt Yglesias
- Evidence-based and policy-focused
- Supply-side economics emphasis
- Accessible to educated general audience

## Database Details

**Stored in**: `locationSummary` table
**Category**: `realestate`
**Type**: `country`

### Query Example
```sql
-- Get all real estate analyses
SELECT name, summary FROM LocationSummary
WHERE category = 'realestate'
ORDER BY name;

-- Get specific country
SELECT summary, issues FROM LocationSummary
WHERE name = 'Denmark' AND category = 'realestate';
```

## Troubleshooting

### API Key Error
```
❌ Error: ANTHROPIC_API_KEY environment variable is not set
```
**Fix**: Add `ANTHROPIC_API_KEY=sk-ant-...` to `.env` file

### Database Error
```
❌ Error: Client not connected
```
**Fix**: Ensure database exists: `npx prisma db push`

### Timeout/Rate Limit
**Fix**: Script has 1.5s delays between requests; if still timing out, check API usage at console.anthropic.com

## Next Steps

1. **Run the script** with your API key
2. **Verify data** in database using queries
3. **Display in app** by adding real estate category to UI
4. **Create similar scripts** for other countries (1-40, 81-120, etc.)

## File Locations

```
/home/user/NewsMap/
├── scripts/
│   ├── generate-realestate-41-80.ts      ← Main script
│   └── verify-countries-41-80.ts         ← Helper script
├── lib/
│   └── countryData.ts                    ← Country data source
├── prisma/
│   ├── schema.prisma                     ← Database schema
│   └── dev.db                            ← SQLite database
├── REALESTATE_GENERATION_GUIDE.md        ← Full documentation
├── REALESTATE_SAMPLE_OUTPUTS.md          ← Sample analyses
├── REALESTATE_QUICKSTART.md              ← This file
└── package.json                          ← npm scripts
```

## Key Facts

- **Countries**: 40 (indices 41-80)
- **Per-country output**: 2,000-3,000 characters + 3-5 issues
- **API calls**: 40 total (one per country)
- **Rate limiting**: 1.5 seconds between calls
- **Estimated time**: 5-10 minutes
- **Model**: Claude Sonnet 4.5
- **Database**: SQLite via Prisma ORM
- **Output format**: JSON stored in database

## Success Criteria

The script successfully:
- ✅ Generates all 40 summaries
- ✅ Each 2000-3000 characters
- ✅ Extracts 3-5 issues per country
- ✅ Stores in database with category='realestate'
- ✅ Maintains YIMBY voice throughout
- ✅ Completes in reasonable time
- ✅ Provides clear progress reporting

## After Running

### View Results
```bash
# Count summaries created
sqlite3 prisma/dev.db "SELECT COUNT(*) FROM LocationSummary WHERE category='realestate';"

# List country names
sqlite3 prisma/dev.db "SELECT name FROM LocationSummary WHERE category='realestate' ORDER BY name;"
```

### Integrate with App
The summaries are ready to display in:
- Country detail pages
- Category filter views
- Real estate topic sections
- Export/report generation

### Create Additional Scripts
For other country ranges:
```bash
# Example: Create scripts for remaining countries
scripts/generate-realestate-1-40.ts
scripts/generate-realestate-81-120.ts
scripts/generate-realestate-121-148.ts
```

## Important Notes

1. **API Costs**: Each summary costs ~$0.05-0.10 in API calls (40 total = ~$2-4)
2. **Database**: Ensures no duplicates using upsert (updates if country exists)
3. **Rate Limiting**: Built-in delays prevent API overload
4. **Error Handling**: Continues on error, reports failures at end
5. **Progress**: Real-time feedback with emoji indicators

## Support

For detailed information, see:
- **REALESTATE_GENERATION_GUIDE.md** - Full technical documentation
- **REALESTATE_SAMPLE_OUTPUTS.md** - Examples of generated content
- **scripts/generate-realestate-41-80.ts** - Annotated source code

---

**Status**: Ready to run
**Last Updated**: November 14, 2025
**Script Version**: 1.0
**Ready for Production**: Yes (with API key)
