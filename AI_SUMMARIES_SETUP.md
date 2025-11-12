# 🤖 AI Summaries Setup

## Current Status
✅ All features working EXCEPT AI summaries (need API key)

## To Generate Real AI Summaries:

### Step 1: Get Your Anthropic API Key
1. Go to https://console.anthropic.com/
2. Sign up or log in
3. Navigate to API Keys section
4. Create a new API key
5. Copy the key (starts with `sk-ant-api03-...`)

### Step 2: Add API Key to Environment
Open `/Users/roo/NewsMap/.env` and replace the placeholder:

```bash
ANTHROPIC_API_KEY=sk-ant-api03-YOUR-ACTUAL-KEY-HERE
```

### Step 3: Generate AI Summaries
Run this command (takes ~21 minutes for all 1,262 stories):

```bash
npm run generate-summaries
```

This will:
- Generate real AI summaries using Claude
- Save them to the database
- Rate limit at 1 request/second

### Step 4: Restart Dev Server
```bash
# The dev server should auto-reload, but if not:
npm run dev -- -p 3001
```

---

## ✅ Already Fixed:
- ✅ Zoom-based story loading (more stories as you zoom in)
- ✅ Right-hand sidebar for story details
- ✅ Hover to expand pills and see full headlines
- ✅ Zoom-adaptive spacing (stays close together at all zoom levels)
- ✅ Source quality filtering (major outlets at world view, local at city zoom)

## 📊 Current Database:
- **1,262 stories** total
- **83 major outlets** (NYT, BBC, CNN, Bloomberg, etc.)
- **886 medium outlets** (national/regional news)
- **293 local outlets**

Stories without AI summaries show a clear warning message.
