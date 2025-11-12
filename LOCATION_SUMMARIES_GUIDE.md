# 🌍 Location-Based Summaries - Implementation Guide

## Overview

The NewsMap has been redesigned from individual story pins to a **location-centric model** where users can:
1. **Hover over countries/cities** to see brief info
2. **Click to expand** a detailed AI-generated summary
3. **See 10 top news stories** with links from that location

This provides much better context and understanding of "what's happening around the world."

---

## ✅ What's Been Implemented

### 1. New Database Schema
Added `LocationSummary` model to store AI-generated summaries:

```prisma
model LocationSummary {
  id            String   @id
  name          String   // "Tokyo", "Japan", "United States"
  type          String   // "country" or "city"
  country       String
  lat           Float
  lng           Float

  summary       String   // Full AI-generated markdown summary
  issues        String   // JSON array of major issues
  topStories    String   // JSON array of top 10 news with links

  updatedAt     DateTime
  storyCount    Int      // How many stories were analyzed
}
```

**✅ Database migrated successfully!**

### 2. AI Summary Generation Script
Created `/scripts/generate-location-summaries.ts` that:

**Analyzes these locations:**
- **20 major countries**: US, China, Russia, Japan, UK, France, Germany, India, Brazil, Ukraine, Israel, Iran, etc.
- **20 major cities**: Tokyo, New York, London, Paris, Beijing, Moscow, Mumbai, Los Angeles, Sydney, Seoul, etc.

**How it works:**
1. Finds all stories mentioning each location (last 7 days)
2. Filters for relevance using keyword matching
3. Sends top 15 stories to Claude API
4. Generates structured summary following this format:

```markdown
# Tokyo

[Opening context paragraph]

## Major Issues

### 1. Escalating regional security & diplomatic risk
**What's happening:**
- Bullet points with current events
- Specific examples with details

**Why it matters:**
- Strategic significance
- Stakeholder impacts

**Prospects:**
- Short-term trajectory
- Medium-term scenarios
- Risks and opportunities

### 2. [Second Major Issue]
[Same format]

### 3. [Third Major Issue]
[Same format]

## Summary
[Final synthesis paragraph with key themes and watch-words]
```

**Features:**
- Professional, analytical tone
- Evidence-based (cites actual news stories)
- Action-oriented (for business/investment/policy professionals)
- Consistent format across all locations
- Includes top 10 news links

**Rate limiting:** 1 request/second to respect API limits

---

## 🚀 How to Generate Summaries

### Step 1: Add Your Anthropic API Key
1. Go to https://console.anthropic.com/
2. Sign in and get your API key
3. Open `/Users/roo/NewsMap/.env`
4. Complete the line:
   ```
   ANTHROPIC_API_KEY=sk-ant-api03-YOUR-FULL-KEY-HERE
   ```

### Step 2: Run the Generator
```bash
npm run generate-location-summaries
```

This will:
- Process ~40 locations (20 countries + 20 cities)
- Generate AI summaries for each (takes ~40-45 minutes)
- Store them in the database
- Show progress and final statistics

**Expected output:**
```
🌍 Generating location summaries...
📊 Found 3758 recent stories

📍 Processing: United States (country)
  ✓ Found 245 relevant stories
  🤖 Generating AI summary...
  ✅ Summary generated and saved!

📍 Processing: China (country)
  ✓ Found 187 relevant stories
  🤖 Generating AI summary...
  ✅ Summary generated and saved!

...

✅ Complete!
   Generated: 38 summaries
   Skipped: 2 locations (insufficient stories)

📊 Location Summary Database:
   country: 20
   city: 18
```

---

## 📊 Summary Quality

Each summary includes:

**1. Major Issues (3-4 per location)**
- What's happening (current events)
- Why it matters (significance)
- Prospects (trajectory, risks, opportunities)

**2. Evidence-Based Analysis**
- Uses actual news stories
- Cites sources and dates
- Avoids speculation

**3. Professional Tone**
- Written for business/investment/policy professionals
- Actionable insights
- Strategic context

**4. Top 10 News Stories**
- Most important recent stories
- Links to original sources
- Sorted by importance and recency

---

## 🗺️ Next Steps: Map Integration

### What Needs to Be Done

1. **Create API Endpoint**
   - `/api/locations/summaries` - Returns all location summaries
   - `/api/locations/:name` - Returns specific location details

2. **Update Map View**
   - Remove individual story pins
   - Add country/city markers
   - Implement hover tooltip (brief info)
   - Implement click handler → expand full summary panel

3. **Create Summary Panel Component**
   - Right-side panel (like current ExpandedPill but wider)
   - Render markdown summary
   - Show major issues in accordion/collapsible format
   - Display top 10 news stories with links
   - "Last updated" timestamp

4. **Visual Design**
   - Country polygons vs city markers
   - Color coding by region or activity level
   - Smooth animations for expand/collapse
   - Professional, clean typography for summaries

---

## 💡 User Experience Flow

### World View (Zoom 2-3)
```
User sees: 20 country markers/regions
Hover: Brief tooltip "United States - 245 stories analyzed"
Click: Right panel expands with full US summary
```

### Continental View (Zoom 4-7)
```
User sees: Countries + major cities appearing
Hover: "Tokyo - 38 stories, 4 major issues"
Click: Detailed Tokyo summary with issues and top 10 stories
```

### City View (Zoom 8+)
```
User sees: All major cities in region
Hover: Quick preview
Click: Full city summary
```

---

## 🔄 Updating Summaries

Summaries should be refreshed periodically (daily or weekly):

```bash
# Fetch fresh news
npm run fetch-google-news

# Regenerate summaries
npm run generate-location-summaries
```

**Cron job suggestion:**
```cron
# Every day at 6 AM UTC
0 6 * * * cd /path/to/NewsMap && npm run fetch-google-news && npm run generate-location-summaries
```

---

## 📈 Benefits of This Approach

### vs Individual Story Pins:

| Feature | Story Pins | Location Summaries |
|---------|------------|-------------------|
| **Geolocation accuracy** | ❌ Often wrong (NYT → NYC) | ✅ Always correct (country/city) |
| **Context** | ❌ Individual stories, no big picture | ✅ Comprehensive analysis |
| **Overlap** | ❌ Visual clutter, pills overlap | ✅ Clean, one per location |
| **Understanding** | ❌ User must piece together info | ✅ AI synthesizes key themes |
| **Links** | ✅ One link per story | ✅ Top 10 links per location |
| **Maintenance** | ❌ Constant re-geocoding | ✅ Locations are fixed |
| **Professional use** | ❌ Good for news browsing | ✅ Excellent for research/analysis |

---

## 🎯 Success Metrics

After implementation, track:
- Click-through rate on country/city markers
- Average time spent reading summaries
- "Top stories" link click rate
- User feedback on summary quality

---

## 📝 Technical Notes

### Database Size
- Each summary: ~3-5 KB (text)
- 40 locations × 5 KB = ~200 KB total
- Negligible storage impact

### API Costs
- ~40 locations × 1 API call = 40 calls
- ~2000 tokens per call = 80K tokens total
- Cost: ~$0.24 per full refresh (Claude Sonnet)
- Daily refresh: ~$7/month

### Performance
- Summaries are pre-generated (not real-time)
- API response: <50ms
- Map loading: Same as before
- Summary panel: Instant (already loaded)

---

## 🚀 Current Status

✅ **Database schema created**
✅ **Migration complete**
✅ **AI generation script ready**
✅ **40 locations configured**
✅ **Summary format designed**

⏳ **Pending:**
- Add Anthropic API key
- Run initial generation
- Create API endpoints
- Update map UI
- Create summary panel component
- Test and deploy

---

## 💬 Example Summary Preview

Once generated, clicking "Tokyo" will show:

```
# Tokyo

Tokyo is navigating a complex intersection of geopolitics, climate
risk, governance flux, and economic adjustment in late 2025.

## Major Issues

### 1. Escalating regional security & diplomatic risk
**What's happening:**
- Government signals reluctance to reaffirm "three non-nuclear
  principles" (Reuters, Nov 10)
- Relations with Beijing deteriorated after PM's Taiwan remarks;
  Chinese state media responded vitriolically (Reuters, Nov 9)
- Russia imposed entry bans on 30 Japanese nationals in
  retaliation for Ukraine sanctions (Reuters, Nov 8)

**Why it matters:**
- Tokyo's Indo-Pacific position increasingly exposed
- Historical pacifist commitments being questioned
- Trade and tourism flows affected by regional tensions

**Prospects:**
- Greater defense spending likely
- Closer US/Japan alliance integration
- Risk of multifront diplomatic pressure from China + Russia
...

## Latest Tokyo News
1. [Japan PM wavers on nuclear arms...] - Reuters, Nov 10
2. ['Crossed the line': Chinese state media...] - Reuters, Nov 9
...

Last updated: 2 hours ago
```

---

This approach transforms NewsMap from a "news pin board" into a true **"what's happening around the world"** intelligence platform.
