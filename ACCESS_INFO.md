# 🌍 NewsMap Demo - Access Information

## ✅ Server Running

The Next.js development server is now running and accessible from your network.

### Network Details
- **Server IP:** 21.0.0.134
- **Port:** 3000
- **Status:** ✅ Ready

### How to Access

**If you're on the same network:**
```
http://21.0.0.134:3000/world-news
```

**For Claude Code Web:**
Port 3000 should be automatically forwarded. Look for the "Ports" section in your Claude Code interface or check the terminal output for a forwarded URL.

### Main Routes

1. **World News Map** (main demo):
   ```
   /world-news
   ```

2. **Global News Feed**:
   ```
   /global-news
   ```

3. **Home Page**:
   ```
   /
   ```

## 🎯 What to Try

1. Visit `/world-news` to see the interactive map
2. Look for the category pill buttons at the top
3. **Green/White buttons** = Working categories (11 available)
4. **Red buttons** = Incomplete categories (3 in progress)
5. Click any country to see AI-generated summaries
6. Switch between categories to see different data

## 📊 Available Categories (Click These!)

✅ All News, Politics, Climate, Culture, Sports, Infrastructure, Science, Education, Healthcare, Crime, Energy

🔴 Coming Soon: Economy, Tech, Military

## 🔧 Troubleshooting

If you can't access the URL:
1. Check if port 3000 is forwarded in your Claude Code session
2. Look for the "Ports" panel/tab
3. The port should show as "3000" with a forwarded URL
4. Click on that forwarded URL to open the app

## 💡 Note

The server is running in development mode with hot-reload enabled. Any code changes will automatically refresh the page.

**Server Output:**
```
▲ Next.js 14.2.33
- Local:        http://localhost:3000
- Network:      http://0.0.0.0:3000

✓ Ready
```

Enjoy exploring your NewsMap! 🗺️
