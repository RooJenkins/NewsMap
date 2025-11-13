# Anthropic API Setup Instructions

## Issue
The script requires a valid Anthropic API key, but the `.env` file currently has a placeholder value.

## Solution

### Option 1: Add Your API Key (Recommended)

1. Get an Anthropic API key from: https://console.anthropic.com/
2. Edit the `.env` file and replace the placeholder:
   ```
   ANTHROPIC_API_KEY="your-actual-api-key-here"
   ```

### Option 2: Use Environment Variable
Set the API key in your terminal session:
```bash
export ANTHROPIC_API_KEY="your-actual-api-key-here"
npx tsx scripts/generate-science-summaries.ts
```

## Running the Script

Once you've added your API key, run:
```bash
npx tsx scripts/generate-science-summaries.ts
```

## Expected Results
- The script will generate SCIENCE & RESEARCH summaries for 15 countries (Afghanistan through Belgium)
- Each summary will be 2,500-3,500 characters in Ed Yong/Carl Zimmer style
- Summaries will be saved to the LocationSummary table with category='science'
- Rate limiting: 1 second between API calls
- Total runtime: ~20-30 seconds

## Alternative: Using Claude Code Session
If you have access to this Claude Code session, I (Claude) can generate the summaries directly
within this conversation and save them to the database without needing an external API key.
Just ask me to "generate the science summaries directly."
