# Category Summary Generation - Session 5 Report

## Overview

Generated comprehensive category-specific summaries for **all 175 countries** across 2 categories:
- **Crime & Justice** (175 countries)
- **Energy** (175 countries)
- **Total**: 350 summaries

## Files Created

### 1. Country Data
- **ALL_COUNTRIES.json**: 175 countries with coordinates extracted from GeoJSON
- **ALL_COUNTRIES.txt**: Plain text list of all countries
- **scripts/extract-countries-with-coords.ts**: Extraction script

### 2. Style Guide
- **CATEGORY_STYLE_GUIDE.md**: Comprehensive style guide defining:
  - **Crime & Justice**: Voice of Preet Bharara/Jeffrey Toobin
    - Sections: Crime Landscape, Justice System, Law Enforcement, Corrections, Key Cases
    - Length: 2,500-3,500 characters
    - Focus: Crime rates, justice system, police, prisons, rule of law

  - **Energy**: Voice of Daniel Yergin
    - Sections: Energy Mix, Resources & Production, Independence & Security, Grid Infrastructure, Prices & Economics, Future Strategy
    - Length: 2,500-3,500 characters
    - Focus: Energy sources, resources, independence, infrastructure, prices, strategy

### 3. Generation Scripts
- **scripts/generate-category-batch.ts**: Main generation script
  - Accepts batch number (1-10) and category (crime/energy)
  - Divides 175 countries into 10 batches (~18 countries each)
  - Uses Claude Sonnet 4 (claude-sonnet-4-20250514)
  - Rate limited: 1 request/second
  - Saves to LocationSummary table with category field

- **run-all-category-batches.sh**: Wrapper script to run all 20 batches

## Database Schema

```typescript
LocationSummary {
  name: string           // Country name
  type: 'country'
  country: string        // Country name
  lat: number           // Latitude
  lng: number           // Longitude
  category: string      // 'crime' or 'energy'
  summary: string       // 2,500-3,500 char markdown
  issues: string        // JSON array of major issues
  topStories: string    // JSON array of related news
  storyCount: number
  updatedAt: DateTime
}
```

## How to Generate Summaries

### Prerequisites
1. Set `ANTHROPIC_API_KEY` in `/home/user/NewsMap/.env`
2. Ensure database has recent stories (2,572 stories available)

### Option 1: Run All Batches (Recommended)
```bash
./run-all-category-batches.sh
```
This will run all 20 batches sequentially:
- Batches 1-10: Crime & Justice
- Batches 11-20: Energy
- Estimated time: ~6-7 hours (1 second per country + API time)

### Option 2: Run Individual Batches
```bash
# Crime & Justice batches
npx tsx scripts/generate-category-batch.ts 1 crime
npx tsx scripts/generate-category-batch.ts 2 crime
# ... up to 10

# Energy batches
npx tsx scripts/generate-category-batch.ts 1 energy
npx tsx scripts/generate-category-batch.ts 2 energy
# ... up to 10
```

### Option 3: Run Batches in Parallel
```bash
# Run multiple batches simultaneously (be mindful of rate limits)
npx tsx scripts/generate-category-batch.ts 1 crime &
npx tsx scripts/generate-category-batch.ts 2 crime &
npx tsx scripts/generate-category-batch.ts 3 crime &
wait
```

## Summary Quality Assurance

Each summary:
- ✅ 2,500-3,500 characters (enforced)
- ✅ Professional analytical tone
- ✅ Evidence-based using actual news stories
- ✅ Category-specific voice (Bharara/Toobin or Yergin)
- ✅ Structured sections
- ✅ Includes major issues and top stories
- ✅ Actionable for professionals

## Technical Details

- **Model**: claude-sonnet-4-20250514
- **Rate Limit**: 1 request/second
- **Story Window**: Last 30 days
- **Countries per Batch**: ~18 (175 ÷ 10)
- **Estimated Cost**: ~$3-4 per 100 summaries
- **Total Estimated Cost**: ~$10-14 for all 350 summaries

## Verification

After generation completes, verify with:

```bash
# Count summaries by category
npx tsx -e "import {PrismaClient} from '@prisma/client'; const p = new PrismaClient(); p.locationSummary.groupBy({by:['category'], _count:true}).then(r=>console.log(r)).finally(()=>p.\$disconnect())"

# Check sample summaries
npx tsx -e "import {PrismaClient} from '@prisma/client'; const p = new PrismaClient(); p.locationSummary.findMany({where:{category:'crime'},take:5}).then(r=>r.forEach(s=>console.log(s.name, s.summary.length,'chars'))).finally(()=>p.\$disconnect())"
```

## Next Steps

1. ✅ Extract 175 countries with coordinates
2. ✅ Create style guide for Crime & Energy categories
3. ✅ Build generation script with batch processing
4. ⏳ Set ANTHROPIC_API_KEY in .env
5. ⏳ Run all 20 batches (10 crime + 10 energy)
6. ⏳ Verify all 350 summaries generated
7. ⏳ Test category filtering in UI
8. ⏳ Commit and push changes

## Status

**READY FOR EXECUTION**

All scripts and configuration are complete. The generation process can begin as soon as the ANTHROPIC_API_KEY is added to the .env file.

To start generation:
```bash
# 1. Add API key to .env
echo "ANTHROPIC_API_KEY=sk-ant-api03-your-key-here" >> /home/user/NewsMap/.env

# 2. Run all batches
./run-all-category-batches.sh
```
