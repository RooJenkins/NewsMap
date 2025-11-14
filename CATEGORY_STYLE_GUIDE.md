# Category Write-Ups Style Guide

## Overview

This guide covers how to write comprehensive category summaries for all countries. Each category has a unique voice, length, and focus. These summaries complement the political summaries already in the database.

---

## CATEGORY 1: CULTURE & ARTS

**Voice:** Jerry Saltz / Mark Kermode
**Tone:** Passionate, opinionated, insightful, accessible
**Length:** 2,500-3,500 characters
**Database category:** `culture`

### What to Cover

- **Visual Arts:** Major museums, galleries, contemporary art scene, art movements, notable artists
- **Film:** Cinema industry, film festivals, notable directors, recent productions, censorship
- **Music:** Traditional and contemporary music, genres, major artists, music festivals
- **Performing Arts:** Theater, dance, opera, ballet companies
- **UNESCO Sites:** World Heritage sites, cultural landmarks
- **Funding & Infrastructure:** Arts funding, cultural institutions, government support
- **Censorship & Freedom:** Artistic freedom, controversies, cultural policies
- **Cultural Movements:** Current trends, debates, cultural renaissance or decline

### Writing Style

**Opening (1 paragraph, ~300 chars):**
- Hook with most exciting/controversial cultural development
- Set the scene with vivid, sensory details
- Make it feel like insider cultural criticism

**Example:**
> "Walk into any gallery in Seoul right now and you'll feel the tension—K-art is having its moment, and nobody's quite sure what to do with it. Between the NFT bros trying to monetize everything and the old guard clutching their Joseon scrolls, Korean contemporary art is in the middle of an identity crisis that's absolutely electric to watch."

**Body Sections (3-4 major topics, ~500 chars each):**
- Deep dives into specific cultural scenes
- Name specific artists, works, institutions, events
- Include recent developments (exhibitions, awards, controversies)
- Personal, opinionated takes (but informed)
- Connect local scene to global context

**Structure per topic:**
- What's happening (specific examples, names, dates)
- Why it matters (cultural significance, innovation, tradition)
- The controversy or tension (what's at stake)
- International connections (diaspora artists, global influence)

**Closing (1 paragraph, ~250 chars):**
- Synthesize the cultural moment
- Forward-looking angle
- Leave reader wanting to experience it

### Key Principles

- **Be specific:** Name artists, museums, films, albums, festivals
- **Be opinionated:** This isn't Wikipedia—have a point of view
- **Be accessible:** Explain context without being condescending
- **Be current:** Focus on what's happening NOW (2024-2025)
- **Be global:** Connect local culture to international scene
- **Be honest:** Acknowledge censorship, funding crises, controversies

### Avoid

- Dry encyclopedia entries
- Tourist brochure language
- Just listing UNESCO sites
- Ignoring contemporary scene
- Avoiding difficult topics (censorship, appropriation, etc.)

---

## CATEGORY 2: SPORTS

**Voice:** Bill Simmons / Gary Neville
**Tone:** Energetic, analytical, insider knowledge, slightly irreverent
**Length:** 2,000-3,000 characters
**Database category:** `sports`

### What to Cover

- **Popular Sports:** What the country actually cares about (not just soccer)
- **Leagues & Competitions:** Domestic leagues, structure, attendance, TV deals
- **National Teams:** Recent performance, qualifying campaigns, major tournaments
- **Infrastructure:** Stadiums, training facilities, sports investment
- **Stars & Icons:** Current athletes making waves, legends, rising talents
- **Olympic History:** Summer/Winter Games performance, medal counts, host bids
- **World Cup:** Qualification, performance, memorable moments, future prospects
- **Governance:** Sports federations, corruption, reforms, controversies
- **Investment & Economics:** Ownership models, sports betting, broadcast rights
- **Emerging Sports:** Growing sports, youth development, new trends

### Writing Style

**Opening (1 paragraph, ~250 chars):**
- Lead with most dramatic recent result or controversy
- Set up the narrative arc
- Make it feel like sports talk radio (smart version)

**Example:**
> "Let's talk about what just happened in Nigerian football, because it's absolutely bonkers. The Super Eagles missed ANOTHER World Cup, the NFF is in complete meltdown, and somehow—somehow—the Nigerian Premier League is having its best season in a decade. How does that even work?"

**Body Sections (3-4 topics, ~400 chars each):**
- Major sports stories and analysis
- Recent results, upcoming fixtures, league standings
- Star performances and emerging talents
- Infrastructure and investment updates
- Governance issues and controversies

**Structure per topic:**
- What happened (scores, results, specific games/events)
- Why it matters (implications, stakes, history)
- Tactical/strategic analysis (not too deep, but insightful)
- What's next (upcoming matches, tournaments, transfers)

**Closing (1 paragraph, ~200 chars):**
- Bottom line on the country's sports scene
- Predictions or watch-outs
- Punchy conclusion

### Key Principles

- **Be specific:** Scores, dates, player names, transfer fees, attendance figures
- **Be analytical:** Not just reporting—explain WHY things happened
- **Be honest:** Call out poor performance, corruption, mismanagement
- **Be current:** Recent results, current form, latest news (2024-2025)
- **Be inclusive:** Don't ignore women's sports, Paralympic sports, emerging sports
- **Be contextual:** Explain leagues and competitions for international audience

### Avoid

- Generic statements ("football is popular here")
- Ignoring poor performance or controversies
- Only covering one sport if multiple are important
- Being too technical (explain tactical concepts simply)
- Forgetting non-Olympic sports that matter locally

---

## Technical Requirements

### Database Structure

Each summary is saved to the `LocationSummary` model with these fields:

```typescript
{
  id: string (auto-generated)
  name: string // Country name
  type: 'country'
  country: string // Country code
  lat: number
  lng: number
  category: 'culture' | 'sports' // IMPORTANT: Set this correctly
  summary: string // Full markdown summary (2,000-3,500 chars)
  issues: string // JSON array of major topics
  topStories: string // JSON array (can be empty "[]")
  updatedAt: DateTime
  createdAt: DateTime
  storyCount: 0
}
```

### Example Issues Array

**Culture:**
```json
[
  "Contemporary art boom in major cities",
  "Film industry revival despite censorship",
  "UNESCO site preservation challenges",
  "Emerging music scene gaining global recognition"
]
```

**Sports:**
```json
[
  "National team World Cup qualification campaign",
  "Domestic league corruption scandal",
  "Olympic medal surge in athletics",
  "New stadium construction boom"
]
```

---

## Research Process

### For Culture & Arts

1. **Search perplexity:**
   - "[Country] contemporary art scene 2024 2025"
   - "[Country] film industry recent 2024"
   - "[Country] music festivals 2024 2025"
   - "[Country] UNESCO heritage sites"
   - "[Country] arts funding censorship"

2. **Look for:**
   - Major exhibitions, festivals, premieres
   - Award-winning artists, films, albums
   - Cultural policy changes
   - Censorship or freedom issues
   - International collaborations
   - Museums opening/closing
   - Arts funding changes

### For Sports

1. **Search perplexity:**
   - "[Country] national team 2024 2025 results"
   - "[Country] domestic league 2024 2025 season"
   - "[Country] Olympics 2024 Paris medals"
   - "[Country] World Cup qualifying 2026"
   - "[Country] sports stars athletes 2024"

2. **Look for:**
   - Recent match results and standings
   - Qualification status for major tournaments
   - Star players and their current form
   - Transfer news and league updates
   - Governance issues and scandals
   - Infrastructure investments
   - Olympic and World Cup performance

---

## Quality Standards

### Minimum Requirements

- **Length:** Culture (2,500-3,500 chars), Sports (2,000-3,000 chars)
- **Specificity:** At least 5 proper nouns (names, places, events)
- **Currency:** Focus on 2024-2025 developments
- **Structure:** Clear sections with distinct topics
- **Voice:** Matches specified voice/tone
- **Accuracy:** Real events, real people, real dates

### Excellence Indicators

- Surprising insights or connections
- Controversial but informed takes
- International context and comparisons
- Forward-looking analysis
- Vivid, engaging prose
- Balance of information and opinion
- Acknowledges complexity and nuance

---

## Examples

### Culture Example (Shortened)

**Argentina:**
> Buenos Aires never stopped being one of the great cultural capitals, but 2024-25 has been particularly wild. The Malba just opened a massive retrospective of Adriana Lestido's photography that's drawing international attention, while Teatro Colón is doing sold-out runs of a radical new tango-opera hybrid that has the purists absolutely losing their minds. Meanwhile, Argentine cinema is in a weird spot—you've got directors like Lucrecia Martel still commanding respect at Cannes, but domestic funding has cratered under Milei...

### Sports Example (Shortened)

**Nigeria:**
> Let's talk about Nigerian football, because it's simultaneously thriving and falling apart. The Super Eagles crashed out of World Cup qualifying—again—and the Nigeria Football Federation is in complete chaos. But here's the twist: the Nigerian Premier League is having its best season in years. Enyimba and Rangers are actually competitive in CAF competitions, attendance is up, and broadcast deals are finally bringing in real money...

---

## Final Checklist

Before submitting each summary:

- [ ] Correct category set ('culture' or 'sports')
- [ ] Character count within range
- [ ] At least 3-4 major topics covered
- [ ] Specific names, dates, events included
- [ ] Voice matches specified style
- [ ] Issues array populated (3-5 items)
- [ ] Saved to database successfully
- [ ] No generic Wikipedia-style writing
- [ ] Current developments (2024-2025) featured
- [ ] Engaging opening and closing paragraphs
