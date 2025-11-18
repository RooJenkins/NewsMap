# Global News Top 100 Feature

## Overview

The Global News Top 100 feature provides a curated daily briefing of the most important global stories, written in the distinctive styles of The Rest is Politics podcast hosts. This feature aims to give readers a comprehensive, contextualized understanding of world events beyond traditional news consumption.

## Features

### 1. **Top 100 Global Stories**
- Curated list of the most significant global news stories
- Ranked by importance and relevance
- Updates daily at 5:00 AM
- Stories from the past 7 days

### 2. **AI-Written Narratives**
Stories are written by AI in the distinctive styles of four Rest is Politics hosts:
- **Rory Stewart** - Thoughtful, diplomatic, draws on international development experience
- **Alastair Campbell** - Direct, strategic, focuses on political communications
- **Anthony Scaramucci** - Business-focused, candid, Wall Street perspective
- **Katty Kay** - Bridging UK/US perspectives, journalistic precision

### 3. **Interactive Map Integration**
- Split-screen view: Map on left, stories on right
- Click any story to:
  - Pan and zoom the map to the story's location
  - Expand the story to read full analysis
- Click map markers to:
  - Highlight corresponding story
  - Auto-scroll to story in the list

### 4. **Rich Story Content**
Each story includes:
- **Title** - Clear, concise headline
- **Narrative** (2-6 paragraphs) - In-depth analysis in host's voice
- **Global Significance** - Why this matters internationally
- **Affected Population** - Who this impacts and how
- **Category** - Politics, Conflict, Economy, Climate, Technology, etc.
- **Location** - Country, city (if applicable), coordinates
- **Sources** - Links to original reporting

### 5. **Category Filtering**
- Filter stories by category
- Dynamic category list based on available stories
- Shows story count per category

## Technical Implementation

### Database Schema

**GlobalNewsStory Model:**
```typescript
{
  id: string              // Unique identifier
  rank: number            // 1-100 ranking
  title: string           // Story headline
  narrative: string       // 2-6 paragraph analysis
  authorStyle: string     // Host who "wrote" this
  globalSignificance: string
  affectedPopulation: string
  category: string
  location: {
    lat: number
    lng: number
    city: string | null
    country: string
    region: string | null
  }
  sources: Array<{
    title: string
    url: string
    outlet: string
  }>
  publishDate: DateTime   // Batch publication date
  isActive: boolean       // Current vs archived
}
```

### API Endpoints

1. **GET `/api/global-news`**
   - Fetches top 100 active global news stories
   - 5-minute cache
   - Returns formatted stories with all metadata

2. **GET/POST `/api/global-news/generate`**
   - Generates new batch of global news stories
   - Requires authentication (`CRON_SECRET`)
   - Should be triggered daily at 5:00 AM
   - Process:
     1. Fetches top 100 most important stories from past 7 days
     2. Deactivates old stories
     3. For each story:
        - Randomly assigns a host style
        - Searches for current context using Tavily
        - Generates AI narrative using Anthropic Claude
        - Stores in database
   - Rate-limited: 2 seconds between AI requests

### Components

1. **GlobalNewsFeed.tsx**
   - Main container component
   - Manages state for stories, filtering, expansion
   - Handles map integration via Leaflet
   - Split-screen layout

2. **GlobalStoryCard.tsx**
   - Individual story display
   - Collapsible/expandable
   - Category badges with color coding
   - Source links

3. **hostPersonalities.ts**
   - Defines system prompts for each host
   - Helper functions for host selection
   - Captures distinctive voice characteristics

### Styling

- Uses FT (Financial Times) design system
- Custom category color coding:
  - Politics: Oxford blue
  - Conflict: Claret red
  - Economy: Teal
  - Climate: Green
  - Technology: Velvet purple
  - General: Slate gray

## Setup Instructions

### 1. Environment Variables

Add to `.env`:
```env
DATABASE_URL="file:./prisma/dev.db"
ANTHROPIC_API_KEY="your_anthropic_api_key"
TAVILY_API_KEY="your_tavily_api_key"  # Optional, for enhanced context
CRON_SECRET="your_secret_token"        # For authenticated cron jobs
```

### 2. Database Migration

```bash
npx prisma db push
```

This creates the `GlobalNewsStory` table.

### 3. Generate Initial Stories

```bash
curl -X POST http://localhost:3000/api/global-news/generate \
  -H "Authorization: Bearer your_secret_token"
```

Or set up a cron job:
```bash
# Run daily at 5:00 AM
0 5 * * * curl -X POST https://your-domain.com/api/global-news/generate \
  -H "Authorization: Bearer $CRON_SECRET"
```

### 4. Vercel Cron Jobs (Production)

Add to `vercel.json`:
```json
{
  "crons": [{
    "path": "/api/global-news/generate",
    "schedule": "0 5 * * *"
  }]
}
```

## Usage

### For Users

1. Navigate to **"Global News Top 100"** button on homepage
2. Browse stories in ranked order (1-100)
3. Use category filters to focus on specific topics
4. Click stories to:
   - Read full narrative and analysis
   - See exact location on map
   - Access original sources
5. Click map markers to find stories by location

### For Developers

**Fetching Stories:**
```typescript
const response = await fetch('/api/global-news')
const { stories, count, cached } = await response.json()
```

**Adding New Host Styles:**
1. Add to `HostStyle` type in `hostPersonalities.ts`
2. Add personality prompt to `HOST_PERSONALITIES`
3. Update `getHostDisplayName` function

**Customizing Story Generation:**
- Modify prompts in `hostPersonalities.ts`
- Adjust story count in generation endpoint (currently 100)
- Change update frequency in cron configuration

## Performance Considerations

- **API Caching**: 5-minute cache on GET requests
- **Rate Limiting**: 2-second delay between AI generations
- **Database Indexes**: On rank, publishDate, isActive, location
- **Dynamic Imports**: Leaflet loaded client-side only (no SSR)

## Future Enhancements

Potential additions:
- User preferences for preferred host styles
- Story bookmarking/saving
- Email digest subscriptions
- Historical archive browsing
- Advanced search and filtering
- Story recommendations based on reading history
- Social sharing features
- Mobile-optimized view

## Troubleshooting

**Stories not loading:**
- Check database connection (`DATABASE_URL`)
- Verify stories exist: `SELECT COUNT(*) FROM GlobalNewsStory WHERE isActive = true`
- Check API endpoint in browser: `/api/global-news`

**Generation failing:**
- Verify `ANTHROPIC_API_KEY` is valid
- Check API rate limits
- Review server logs for specific errors
- Ensure source stories exist in database

**Map not displaying:**
- Leaflet requires client-side rendering
- Check dynamic import configuration
- Verify coordinates are valid (lat/lng)

## Credits

- **Design System**: Financial Times visual language
- **AI Models**: Anthropic Claude 3.5 Sonnet/Haiku
- **Search**: Tavily AI (optional)
- **Maps**: Leaflet + OpenStreetMap
- **Inspiration**: The Rest is Politics podcast

---

**Last Updated**: November 2025
**Version**: 1.0.0
