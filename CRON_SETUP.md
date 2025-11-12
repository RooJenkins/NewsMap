# News Update Cron Job Setup

This document explains how to set up automatic news updates for the NewsMap application.

## Manual Update

To manually update the news database, run:

```bash
npm run fetch-news
```

This will:
- Fetch news from 45 major cities worldwide
- Fetch news from 8 categories (breaking, politics, tech, etc.)
- Store ~1,000+ unique stories in the database
- Calculate importance scores and identify breaking news
- Clean up stories older than 24 hours

## Automatic Updates via Cron

### Option 1: Using cron-job.org (Recommended for Vercel)

1. Deploy your app to Vercel
2. Go to https://cron-job.org
3. Create a free account
4. Add a new cron job:
   - **URL**: `https://your-app.vercel.app/api/cron/update-news`
   - **Method**: GET
   - **Schedule**: Every 4 hours (0 */4 * * *)
   - **Headers**: Add `Authorization: Bearer newsmap-cron-secret-2025`

### Option 2: Vercel Cron (If using Vercel Pro)

Add to `vercel.json`:

```json
{
  "crons": [
    {
      "path": "/api/cron/update-news",
      "schedule": "0 */4 * * *"
    }
  ]
}
```

Then add the CRON_SECRET to your Vercel environment variables.

### Option 3: Local Development with node-cron

Install node-cron:

```bash
npm install node-cron @types/node-cron
```

Create `lib/cron.ts`:

```typescript
import cron from 'node-cron'
import { exec } from 'child_process'

// Run every 4 hours
cron.schedule('0 */4 * * *', () => {
  console.log('🔄 Running scheduled news update...')
  exec('npm run fetch-news', (error, stdout, stderr) => {
    if (error) {
      console.error('Error:', error)
      return
    }
    console.log(stdout)
  })
})

console.log('✓ Cron job scheduler started')
```

Then import this in your `app/layout.tsx` or create a separate background process.

### Option 4: System Cron (Linux/Mac)

Add to your crontab:

```bash
crontab -e
```

Add this line (runs every 4 hours):

```bash
0 */4 * * * cd /path/to/NewsMap && npm run fetch-news >> /tmp/newsmap-cron.log 2>&1
```

## Testing the Cron Endpoint

Test manually with curl:

```bash
curl -X GET \
  -H "Authorization: Bearer newsmap-cron-secret-2025" \
  http://localhost:3001/api/cron/update-news
```

## Recommended Schedule

- **Every 4 hours**: Balanced between freshness and API rate limits
- **Every 2 hours**: For breaking news-focused apps (may hit rate limits)
- **Daily at midnight**: For low-traffic apps

## Monitoring

Check the logs to ensure updates are running:

```bash
# View tmux session logs (if running in tmux)
tmux capture-pane -t newsmap-dev-server -p

# Or check database stats
npx prisma studio
```

## Database Statistics

After each update, you'll see stats like:

```
📊 Database Stats:
   Total stories: 1308
   Breaking news: 41
```

This ensures the database is populated and ready for the globe view.
