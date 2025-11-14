# Science & Research Summaries Generation - Status Report

## Summary

Created script to generate SCIENCE & RESEARCH category summaries for countries 46-60 (Fiji through Hungary), but execution requires Anthropic API key configuration.

## Script Created

**File:** `/home/user/NewsMap/scripts/generate-science-summaries-46-60.ts`

**Features:**
- Voice: Ed Yong / Carl Zimmer style (engaging science journalism)
- Length: 2,500-3,500 characters
- Model: claude-sonnet-4-20250514
- Category: 'science'
- Rate limit: 1 second between API calls

**Focus Areas:**
- Major research institutions and their specializations
- R&D spending as % of GDP
- Key research areas and breakthroughs
- Nobel prizes and scientific achievements
- STEM education and talent pipeline
- Science policy and government priorities
- Brain drain vs. brain gain
- Emerging research areas

## Current Database Status

### Countries 46-60:
| Country | Stories Available | Current Summaries |
|---------|------------------|-------------------|
| Fiji | 0 | all |
| Finland | 0 | all |
| France | **47** | all |
| Georgia | 0 | all |
| Germany | **16** | all |
| Ghana | 0 | all |
| Greece | 0 | all |
| Guatemala | 0 | all |
| Guyana | 0 | all |
| Haiti | 0 | all |
| Honduras | 0 | all |
| Hungary | 0 | all |

### Summary Statistics:
- **Total countries:** 12
- **Countries with stories:** 2 (France, Germany)
- **Countries without stories:** 10
- **Expected science summaries to generate:** 2

## Script Execution Attempt

**Result:** Failed - Authentication Error

**Error Details:**
```
AuthenticationError: 401 {"type":"error","error":{"type":"authentication_error","message":"invalid x-api-key"}}
```

**Root Cause:**
The `.env` file contains a placeholder API key: `ANTHROPIC_API_KEY="your-api-key-here"`

## Required Action

To generate the science summaries, you need to:

### 1. Set Your Anthropic API Key

Update the `.env` file with your actual Anthropic API key:

```bash
# Edit .env file
nano /home/user/NewsMap/.env

# Replace this line:
ANTHROPIC_API_KEY="your-api-key-here"

# With your actual key:
ANTHROPIC_API_KEY="sk-ant-..."
```

### 2. Run the Script

```bash
cd /home/user/NewsMap
npx tsx scripts/generate-science-summaries-46-60.ts
```

### 3. Expected Results

Based on available stories:
- ✅ **France:** Will generate science summary (47 stories available)
- ✅ **Germany:** Will generate science summary (16 stories available)
- ⏭️ **Other 10 countries:** Will be skipped (no stories in database)

## Alternative: Manual Summary Creation

If you don't have an Anthropic API key, you could:
1. Use the existing general summaries as a base
2. Manually research each country's scientific landscape
3. Create summaries focusing on the specified criteria

## Database Schema Reference

The script will save summaries to the `LocationSummary` table with:
```typescript
{
  name: string          // Country name
  type: 'country'
  category: 'science'
  lat: number          // Latitude
  lng: number          // Longitude
  summary: string      // 2,500-3,500 character summary
  issues: JSON         // Array of 3-5 key issues
  topStories: JSON     // Array of 5-7 top stories
  storyCount: number   // Number of stories referenced
}
```

## Next Steps

1. **Immediate:** Set valid Anthropic API key in `.env` file
2. **Run:** Execute the generation script
3. **Verify:** Use `npx tsx scripts/check-science-summaries.ts` to confirm results
4. **Note:** Only France and Germany will generate summaries due to limited story data

## Files Created

- `/home/user/NewsMap/scripts/generate-science-summaries-46-60.ts` - Main generation script
- `/home/user/NewsMap/scripts/check-science-summaries.ts` - Status checking script
- `/home/user/NewsMap/SCIENCE_SUMMARIES_STATUS.md` - This status report
