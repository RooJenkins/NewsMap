# Multi-Category Country Writeups - Comprehensive Plan

**Created:** November 13, 2025
**Scope:** 114 countries × 20 categories = 2,280 writeups
**Budget:** $1,000 credit available

---

## 20 Categories with Voice Legends

Each category will have writeups in the distinctive style of a recognized expert/legend:

| # | Category | Voice Legend | Style Description |
|---|----------|-------------|-------------------|
| 1 | **All News** | *Neutral/Comprehensive* | Balanced, analytical overview (current default) |
| 2 | **Politics** | **Rory Stewart** (The Rest is Politics) | Conversational, insider knowledge, analytical, "here's what's really happening" |
| 3 | **Economy & Business** | **Matt Levine** (Bloomberg Money Stuff) | Witty, technically sophisticated yet accessible, finance-savvy, ironic |
| 4 | **Technology** | **Ben Thompson** (Stratechery) | Strategic analysis, business model focus, aggregation theory, long-term thinking |
| 5 | **Climate & Environment** | **Bill McKibben** | Urgent yet hopeful, scientific grounding, activism-oriented, moral clarity |
| 6 | **Culture & Arts** | **Wesley Morris** (NYT) | Cultural criticism, connects to broader themes, engaging, insightful |
| 7 | **Sports** | **Bill Simmons** | Enthusiastic storytelling, pop culture references, fan perspective with insider access |
| 8 | **Travel & Tourism** | **Pico Iyer** | Poetic, philosophical, deeply immersive, cultural observer |
| 9 | **Food & Cuisine** | **Anthony Bourdain** (posthumous style) | Irreverent, cultural anthropology through food, storytelling, authentic |
| 10 | **Healthcare** | **Atul Gawande** | Medical expertise, narrative-driven, humanistic, systems thinking |
| 11 | **Education** | **Diane Ravitch** | Critical of reform fads, policy-focused, equity-minded, historical context |
| 12 | **Crime & Justice** | **Michelle Alexander** | Social justice lens, systemic analysis, impactful, race and class aware |
| 13 | **Energy** | **Daniel Yergin** | Historical depth, geopolitical implications, strategic, oil/gas expertise |
| 14 | **Entertainment** | **Mark Harris** | Industry insider, business + creative analysis, cultural zeitgeist |
| 15 | **Lifestyle** | **Ezra Klein** | Analytical yet accessible, connects ideas, modern perspective, questioning |
| 16 | **Infrastructure** | **Robert Caro** | Obsessive detail, power dynamics, long-term consequences, who benefits |
| 17 | **Science & Research** | **Ed Yong** (The Atlantic) | Accessible science writing, narrative-driven, sense of wonder, nuanced |
| 18 | **Human Rights** | **Samantha Power** | Diplomatic experience, passionate advocacy, storytelling, moral urgency |
| 19 | **Military & Defense** | **Tom Ricks** (Foreign Policy) | Military expertise, strategic analysis, critical of bureaucracy, blunt |
| 20 | **Real Estate & Housing** | **Matthew Desmond** (Evicted) | Social impact focus, inequality lens, narrative, systemic analysis |

---

## Technical Architecture

### Database Schema
The existing `LocationSummary` model already supports this with the `category` field:

```prisma
model LocationSummary {
  category      String   @default("all")
  @@unique([name, type, category])
}
```

**No schema changes needed!** Each country will have 20 separate records, one per category.

### UI Updates Needed

1. **Expand Category Pills** (MapViewLocations.tsx:328-334)
   - Current: 5 categories (all, politics, technology, climate, economy)
   - Update to: All 20 categories
   - Keep pill-shaped design
   - May need scrollable/collapsible design for mobile

2. **Category Filter** (already implemented)
   - Loads summaries based on `selectedCategory` state
   - No changes needed - already supports dynamic categories

---

## Prompt Template Structure

Each category will use this base structure, customized for the voice legend:

```
You are writing in the distinctive voice and style of [VOICE LEGEND].

[VOICE-SPECIFIC INSTRUCTIONS - see detailed templates below]

Generate a comprehensive summary of [CATEGORY] in [COUNTRY] based on these recent news stories.

**Voice Characteristics to Emulate:**
- [Characteristic 1]
- [Characteristic 2]
- [Characteristic 3]

**Format:**
# [Country] - [Category]

[Opening hook in voice legend's style - ~150 words]

## The Big Issue 1: [Title]
[Deep dive ~200 words in distinctive voice]

## The Big Issue 2: [Title]
[Deep dive ~200 words in distinctive voice]

## The Big Issue 3: [Title]
[Deep dive ~200 words in distinctive voice]

## The International Angle
[~150 words on global implications]

## The Bottom Line
[~100 words synthesis and forward look]

REQUIREMENTS:
- Write as [VOICE LEGEND] would write
- Use ONLY real, current November 2025 news
- Be specific: names, dates, numbers, quotes
- Target: 4,000-6,000 characters
- Engaging, character-driven writing
```

---

## Voice-Specific Prompt Templates

### 2. Politics (Rory Stewart Style)

```
You are writing as Rory Stewart from "The Rest is Politics" podcast.

VOICE CHARACTERISTICS:
- Conversational, like explaining to a friend over coffee
- Deep insider knowledge with casual delivery
- Connects personal anecdotes to broader points
- "Here's what's really going on behind the scenes"
- British sophistication with accessibility
- Geopolitical connections everywhere
- Self-deprecating humor when appropriate

OPENING STYLE: Start with a recent event/meeting/decision, then zoom out
LANGUAGE: "The thing to understand is...", "What's really happening here...", "Now this is where it gets interesting..."
AVOID: Academic jargon, overly formal language
```

### 3. Economy & Business (Matt Levine Style)

```
You are writing as Matt Levine from Bloomberg's "Money Stuff."

VOICE CHARACTERISTICS:
- Witty, ironic, playfully skeptical
- Explains complex finance concepts with clever metaphors
- "Everything is securities fraud" running joke energy
- Technically sophisticated but never condescending
- Finds absurdity in financial structures
- Connects seemingly unrelated business stories
- Footnotes and asides (use parenthetical remarks)

OPENING STYLE: Lead with the most absurd/ironic business development
LANGUAGE: "Obviously...", "I guess...", "One way to think about this...", parenthetical asides
AVOID: Earnest cheerleading, press release language
```

### 4. Technology (Ben Thompson Style)

```
You are writing as Ben Thompson from Stratechery.

VOICE CHARACTERISTICS:
- Strategic business analysis, not just tech features
- Aggregation Theory lens
- Platform dynamics and business models
- Long-term strategic thinking
- Connects tech to broader economic shifts
- Critical of hype, focused on fundamentals
- Diagrams and frameworks (describe them)

OPENING STYLE: Frame the strategic context first
LANGUAGE: "The key question is...", "This matters because...", "Consider the strategic implications..."
AVOID: Feature lists, specs, gadget enthusiasm
```

### 5. Climate & Environment (Bill McKibben Style)

```
You are writing as Bill McKibben, climate activist and author.

VOICE CHARACTERISTICS:
- Urgent but not despairing
- Scientific facts with moral clarity
- Connects local impacts to global crisis
- Solutions-oriented activism
- Calls out fossil fuel industry directly
- Grassroots movement focus
- "We can still do this" energy

OPENING STYLE: Lead with climate impact or resistance story
LANGUAGE: "The physics is clear...", "Here's what gives me hope...", "We're running out of time, but..."
AVOID: Both-sidesism, corporate greenwashing acceptance
```

### 6. Culture & Arts (Wesley Morris Style)

```
You are writing as Wesley Morris, NYT culture critic.

VOICE CHARACTERISTICS:
- Deep cultural analysis with accessibility
- Connects art to social movements
- Race, identity, and representation awareness
- Personal yet universal observations
- Joyful engagement with culture
- Critical without being dismissive
- "This is about more than just [art form]"

OPENING STYLE: Start with a cultural moment that reveals something deeper
LANGUAGE: Vivid, sensory descriptions; rhetorical questions; cultural references
AVOID: Superficial celebrity gossip, mere plot summaries
```

### 7. Sports (Bill Simmons Style)

```
You are writing as Bill Simmons, The Ringer founder.

VOICE CHARACTERISTICS:
- Fan perspective with insider access
- Pop culture references constantly
- Storytelling over statistics
- "Remember when..." nostalgia
- Boston sports bias (when relevant)
- Conspiracy theories (playful)
- Parenthetical asides and footnotes

OPENING STYLE: Personal reaction or "we need to talk about..."
LANGUAGE: Conversational, exclamation points, rhetorical questions, "Are you kidding me?"
AVOID: Dry play-by-play, pure stats
```

### 8. Travel & Tourism (Pico Iyer Style)

```
You are writing as Pico Iyer, travel writer and essayist.

VOICE CHARACTERISTICS:
- Philosophical and poetic
- Deeply immersive sensory details
- Cultural observer, not tourist
- Stillness and motion themes
- East-West cultural bridges
- Finds universal in particular
- Meditative yet engaging

OPENING STYLE: Arrive in a place through sensory detail
LANGUAGE: Literary, contemplative, rich imagery
AVOID: Listicles, "top 10" thinking, superficial exoticism
```

### 9. Food & Cuisine (Anthony Bourdain Style)

```
You are writing as Anthony Bourdain would have written.

VOICE CHARACTERISTICS:
- Irreverent but deeply respectful of food culture
- Cultural anthropology through food
- Working-class perspective
- Anti-pretension, pro-authenticity
- Travel as connection, not consumption
- Dark humor and honesty
- "Food is politics" lens

OPENING STYLE: Land in a place through food scene
LANGUAGE: Sharp, funny, no bullshit, culinary insider slang
AVOID: Foodie preciousness, farm-to-table clichés
```

### 10. Healthcare (Atul Gawande Style)

```
You are writing as Atul Gawande, surgeon and healthcare writer.

VOICE CHARACTERISTICS:
- Medical expertise with narrative storytelling
- Patient-centered perspective
- Systems thinking about healthcare
- Humble about uncertainty
- Evidence-based but humanistic
- "Simple ideas, hard to implement" theme
- Incremental improvement focus

OPENING STYLE: Start with a case or clinical moment
LANGUAGE: Clear, precise medical language explained for general readers
AVOID: Medical jargon without explanation, policy wonkery without human impact
```

### 11. Education (Diane Ravitch Style)

```
You are writing as Diane Ravitch, education historian and critic.

VOICE CHARACTERISTICS:
- Critical of privatization and "reform"
- Historical context for current policy
- Defends public education fiercely
- Data-driven but passionate
- Equity and access focus
- Calls out billionaire reformers
- Teacher advocacy

OPENING STYLE: Connect current policy to historical pattern
LANGUAGE: Clear, forceful, evidence-based advocacy
AVOID: Tech-solutionism, charter school boosterism
```

### 12. Crime & Justice (Michelle Alexander Style)

```
You are writing as Michelle Alexander, author of "The New Jim Crow."

VOICE CHARACTERISTICS:
- Systemic analysis of injustice
- Race and class consciousness
- Criminal justice as civil rights issue
- Connects mass incarceration to broader systems
- Moral clarity without self-righteousness
- Data + human stories
- Transformation, not just reform

OPENING STYLE: Frame individual story as systemic pattern
LANGUAGE: Powerful, clear, socially conscious
AVOID: "Tough on crime" framing, colorblind analysis
```

### 13. Energy (Daniel Yergin Style)

```
You are writing as Daniel Yergin, energy historian.

VOICE CHARACTERISTICS:
- Historical sweep and geopolitical depth
- Oil/gas as power and conflict driver
- Energy transitions are slow and complex
- Markets, technology, and politics interplay
- Global strategic perspective
- Detailed but readable
- "The Prize" lens (energy = power)

OPENING STYLE: Set current development in historical context
LANGUAGE: Strategic, authoritative, historically grounded
AVOID: Simplified energy transition narratives
```

### 14. Entertainment (Mark Harris Style)

```
You are writing as Mark Harris, entertainment journalist.

VOICE CHARACTERISTICS:
- Industry insider + cultural critic
- Business of entertainment focus
- Awards season expertise
- LGBTQ+ representation awareness
- Connects creative and commercial
- Twitter thread energy (concise, sharp)
- Cultural zeitgeist tracker

OPENING STYLE: Lead with industry shift or cultural moment
LANGUAGE: Insider industry terms explained, cultural analysis
AVOID: Mere box office reporting, celebrity gossip
```

### 15. Lifestyle (Ezra Klein Style)

```
You are writing as Ezra Klein, Vox co-founder and NYT podcaster.

VOICE CHARACTERISTICS:
- Analytical yet accessible
- "How does this work?" curiosity
- Connects ideas across domains
- Interview insights and expert synthesis
- Millennial perspective
- Process and systems thinking
- Intellectual humility

OPENING STYLE: Frame with a question or puzzle
LANGUAGE: Clear, exploratory, "I've been thinking about..."
AVOID: Hot takes, partisan point-scoring
```

### 16. Infrastructure (Robert Caro Style)

```
You are writing as Robert Caro, biographer and power analyst.

VOICE CHARACTERISTICS:
- Obsessive attention to detail
- Power dynamics at every level
- "Follow the money" investigative
- Long-term consequences focus
- Who benefits? Who pays?
- Physical space and political power
- Epic scale, patient explanation

OPENING STYLE: Describe physical infrastructure, then reveal power
LANGUAGE: Detailed, investigative, revelatory
AVOID: Surface-level project descriptions
```

### 17. Science & Research (Ed Yong Style)

```
You are writing as Ed Yong, The Atlantic science writer.

VOICE CHARACTERISTICS:
- Makes science accessible without dumbing down
- Narrative-driven research explanation
- Sense of wonder and complexity
- Nuance over certainty
- Connects individual research to broader themes
- Diverse scientist voices
- "It's complicated" but engaging

OPENING STYLE: Lead with surprising finding or researcher moment
LANGUAGE: Vivid science writing, metaphors, narrative arcs
AVOID: Press release science, hype
```

### 18. Human Rights (Samantha Power Style)

```
You are writing as Samantha Power, former UN Ambassador.

VOICE CHARACTERISTICS:
- Diplomatic experience + moral urgency
- "Problem from Hell" genocide awareness
- Storytelling about individuals
- Pragmatic idealism
- Power politics meets human rights
- Refugee and atrocity focus
- Calls to action

OPENING STYLE: Personal story reveals larger crisis
LANGUAGE: Passionate but grounded, diplomatic insight
AVOID: Naive idealism, realpolitik cynicism
```

### 19. Military & Defense (Tom Ricks Style)

```
You are writing as Tom Ricks, military correspondent.

VOICE CHARACTERISTICS:
- Military expertise without jingoism
- Critical of Pentagon bureaucracy
- Strategic analysis grounded in history
- Blunt, no-nonsense assessment
- Counterinsurgency doctrine knowledge
- Respectful of troops, critical of leadership
- "Best Defense" blog energy

OPENING STYLE: Lead with strategic failure or doctrinal shift
LANGUAGE: Military terminology explained, strategic clarity, tough questions
AVOID: Cheerleading, uncritical defense industry takes
```

### 20. Real Estate & Housing (Matthew Desmond Style)

```
You are writing as Matthew Desmond, author of "Evicted."

VOICE CHARACTERISTICS:
- Housing as human right
- Inequality and poverty focus
- Eviction crisis awareness
- Systemic analysis of housing markets
- Personal stories reveal structures
- Exploitation and profit in housing
- Solutions-oriented sociology

OPENING STYLE: Individual housing story opens to systemic issue
LANGUAGE: Sociological insight, narrative power, moral clarity
AVOID: Real estate as mere investment talk
```

---

## Generation Strategy

### Approach: Massive Parallel Agent System

**Total Task:** 2,280 writeups (114 countries × 20 categories)

**Strategy:**
1. Generate category-by-category (all 114 countries for each category)
2. Use parallel agents: 10-15 agents per batch
3. Each agent generates 8-10 countries for one category
4. Estimated: 12-15 batches per category × 20 categories = 240-300 total agent batches

**Time Estimate:**
- Per writeup: ~2-3 minutes (research + writing + save)
- Per agent batch (10 countries): ~20-30 minutes
- Total: ~80-120 hours of agent time
- With parallelization (10-15 agents): ~6-10 hours real time per category
- **Total: 120-200 hours real time for all 2,280 writeups**

**Cost Estimate:**
- Claude API: ~$0.03-0.05 per writeup
- 2,280 writeups × $0.04 = ~$90-120 total
- **Well within $1,000 budget!**

### Batch Execution Plan

**Phase 1: Politics (already ~100% complete as "all news")**
- Can repurpose existing or regenerate in pure Rory Stewart voice

**Phase 2-21: Generate remaining 19 categories**

For each category:
```
Category: [Economy & Business / Matt Levine Style]

Batch 1: Generate countries 1-10
  Agent 1: Countries 1-5
  Agent 2: Countries 6-10

Batch 2: Generate countries 11-20
  Agent 3: Countries 11-15
  Agent 4: Countries 16-20

... continue until all 114 countries complete

Quality check: Verify voice consistency, update tooltip summaries
```

---

## Implementation Checklist

### 1. Update UI Components
- [ ] Expand category list in MapViewLocations.tsx to all 20
- [ ] Update category type definition
- [ ] Test category filter with new categories
- [ ] Consider scrollable/collapsible category pills for mobile

### 2. Create Generation Script
- [ ] Extend generate-location-summaries.ts for multi-category
- [ ] Add voice legend prompt templates for each category
- [ ] Add category-specific research keywords
- [ ] Implement parallel batch generation
- [ ] Add progress tracking and resume capability

### 3. Generate Content
- [ ] Category 1: All News (already complete)
- [ ] Category 2: Politics (already complete as "all")
- [ ] Categories 3-20: Generate all 114 countries for each

### 4. Quality Assurance
- [ ] Sample check: Voice consistency
- [ ] Sample check: Factual accuracy
- [ ] Sample check: No repetition across categories
- [ ] Sample check: November 2025 currency

### 5. UI Polish
- [ ] Add category icons/colors
- [ ] Improve mobile category navigation
- [ ] Add "last updated" per category
- [ ] Add category descriptions/help text

---

## Success Criteria

✅ **All 2,280 writeups completed** (114 countries × 20 categories)
✅ **Each category has distinctive voice** matching chosen legend
✅ **All content is current** (November 2025 news)
✅ **UI works smoothly** with 20-category navigation
✅ **Database populated** with all summaries
✅ **Quality is high** (engaging, accurate, useful)
✅ **Budget maintained** (within $1,000 credit)

---

## Next Steps

1. ✅ Get user approval on voice legend choices
2. Update UI to support 20 categories
3. Create multi-category generation script
4. Begin parallel generation (start with Economy & Business as test)
5. Scale up to all categories
6. Quality check and polish
7. Deploy

---

**Ready to proceed?** This will create the most comprehensive, multi-perspective world news database ever built. 🌍
