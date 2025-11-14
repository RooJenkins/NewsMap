# In-Session Parallel Prompts - Claude Generates Directly!

**No API key needed!** Claude generates all writeups directly within each session.

All sessions work on branch: `claude/initial-setup-019K8JbGjeSt5CkyAbU6HPqr`

---

## 🚀 How This Works

Each session:
1. Claude reads the country list from `data/countries.json`
2. Claude generates writeup content directly (no API calls!)
3. Claude saves each writeup to the database using Prisma
4. Uses session credits (not API credits)

**All 10 sessions can run in parallel!**

---

## SESSION 2B: CLIMATE Generation (In-Session)

```
I'm generating CLIMATE writeups for the NewsMap database. All generation happens within this session (no API calls).

Branch: claude/initial-setup-019K8JbGjeSt5CkyAbU6HPqr

TASK: Generate CLIMATE writeups for all 128 countries

1. Read data/countries.json to get country list

2. For each country, I will generate a CLIMATE writeup with:
   - Voice: Climate scientist / environmental journalist
   - Tone: Urgent but factual, solutions-oriented
   - Length: 2,500-3,500 characters
   - Focus: Climate risks, emissions, renewable energy, adaptation, extreme weather, policy

3. Save each writeup to database:
   - Use Prisma to upsert to LocationSummary table
   - Set category = 'climate'
   - Include summary, issues (3-5), topStories (empty array for now)

4. Process in batches of 10 countries, showing progress

5. Generate completion report: CLIMATE_IN_SESSION_REPORT.md
   - Total generated
   - Sample writeups (3 countries)
   - Time taken

Template reference: data/category-prompts.json has the CLIMATE prompt details

Process all 128 countries. I (Claude) will generate all content directly in this session.

When complete: commit and push all changes.
```

---

## SESSION 3B: ECONOMY Generation (In-Session)

```
I'm generating ECONOMY writeups for the NewsMap database. All generation happens within this session (no API calls).

Branch: claude/initial-setup-019K8JbGjeSt5CkyAbU6HPqr

TASK: Generate ECONOMY writeups for all 128 countries

1. Read data/countries.json to get country list

2. For each country, I will generate an ECONOMY writeup with:
   - Voice: Financial Times / The Economist analyst
   - Tone: Analytical, data-driven, global context
   - Length: 2,500-3,500 characters
   - Focus: GDP, trade, industries, fiscal policy, business environment, outlook

3. Save each writeup to database:
   - Use Prisma to upsert to LocationSummary table
   - Set category = 'economy'
   - Include summary, issues (3-5), topStories (empty array)

4. Process in batches of 10 countries, showing progress

5. Generate completion report: ECONOMY_IN_SESSION_REPORT.md

Template reference: data/category-prompts.json

Process all 128 countries. I (Claude) will generate all content directly.

When complete: commit and push all changes.
```

---

## SESSION 4B: POLITICS Generation (In-Session)

```
I'm generating POLITICS writeups for the NewsMap database. All generation happens within this session (no API calls).

Branch: claude/initial-setup-019K8JbGjeSt5CkyAbU6HPqr

TASK: Generate POLITICS writeups for all 128 countries

1. Read data/countries.json to get country list

2. For each country, I will generate a POLITICS writeup with:
   - Voice: Political analyst / foreign correspondent
   - Tone: Balanced, informed, historical context
   - Length: 2,500-3,500 characters
   - Focus: Government structure, leadership, parties, elections, stability, governance

3. Save each writeup to database:
   - Use Prisma to upsert to LocationSummary table
   - Set category = 'politics'
   - Include summary, issues (3-5), topStories (empty array)

4. Process in batches of 10 countries, showing progress

5. Generate completion report: POLITICS_IN_SESSION_REPORT.md

Template reference: data/category-prompts.json

Process all 128 countries. I (Claude) will generate all content directly.

When complete: commit and push all changes.
```

---

## SESSION 5B: TECHNOLOGY Generation (In-Session)

```
I'm generating TECHNOLOGY writeups for the NewsMap database. All generation happens within this session (no API calls).

Branch: claude/initial-setup-019K8JbGjeSt5CkyAbU6HPqr

TASK: Generate TECHNOLOGY writeups for all 128 countries

1. Read data/countries.json to get country list

2. For each country, I will generate a TECHNOLOGY writeup with:
   - Voice: Ben Thompson / Stratechery style tech analyst
   - Tone: Forward-looking, strategic, innovation-focused
   - Length: 2,500-3,500 characters
   - Focus: Tech sector, startups, digital infrastructure, AI adoption, innovation hubs

3. Save each writeup to database:
   - Use Prisma to upsert to LocationSummary table
   - Set category = 'technology'
   - Include summary, issues (3-5), topStories (empty array)

4. Process in batches of 10 countries, showing progress

5. Generate completion report: TECHNOLOGY_IN_SESSION_REPORT.md

Template reference: data/category-prompts.json

Process all 128 countries. I (Claude) will generate all content directly.

When complete: commit and push all changes.
```

---

## SESSION 6B: SCIENCE Generation (In-Session)

```
I'm generating SCIENCE writeups for the NewsMap database. All generation happens within this session (no API calls).

Branch: claude/initial-setup-019K8JbGjeSt5CkyAbU6HPqr

TASK: Generate SCIENCE writeups for all 128 countries

1. Read data/countries.json to get country list

2. For each country, I will generate a SCIENCE writeup with:
   - Voice: Ed Yong / Carl Zimmer style science journalist
   - Tone: Accessible, balance wonder with rigor
   - Length: 2,500-3,500 characters
   - Focus: Research institutions, breakthroughs, R&D, researchers, collaboration

3. Save each writeup to database:
   - Use Prisma to upsert to LocationSummary table
   - Set category = 'science'
   - Include summary, issues (3-5), topStories (empty array)

4. Process in batches of 10 countries, showing progress

5. Generate completion report: SCIENCE_IN_SESSION_REPORT.md

Template reference: data/category-prompts.json

Process all 128 countries. I (Claude) will generate all content directly.

When complete: commit and push all changes.
```

---

## SESSION 7B: ALL Category Generation (In-Session)

```
I'm generating ALL (general overview) writeups for the NewsMap database. All generation happens within this session (no API calls).

Branch: claude/initial-setup-019K8JbGjeSt5CkyAbU6HPqr

TASK: Generate ALL category writeups for all 128 countries

1. Read data/countries.json to get country list

2. For each country, I will generate an ALL (general) writeup with:
   - Voice: General news analyst
   - Tone: Balanced, comprehensive overview
   - Length: 2,500-3,500 characters
   - Focus: Overall country situation across all sectors (political, economic, social)

3. Save each writeup to database:
   - Use Prisma to upsert to LocationSummary table
   - Set category = 'all'
   - Include summary, issues (3-5), topStories (empty array)

4. Process in batches of 10 countries, showing progress

5. Generate completion report: ALL_IN_SESSION_REPORT.md

Template reference: data/category-prompts.json

Process all 128 countries. I (Claude) will generate all content directly.

When complete: commit and push all changes.
```

---

## SESSION 8B: INFRASTRUCTURE Generation (In-Session)

```
I'm generating INFRASTRUCTURE writeups for the NewsMap database. All generation happens within this session (no API calls).

Branch: claude/initial-setup-019K8JbGjeSt5CkyAbU6HPqr

TASK: Generate INFRASTRUCTURE writeups for all 128 countries

1. Read data/countries.json to get country list

2. For each country, I will generate an INFRASTRUCTURE writeup with:
   - Voice: Infrastructure expert / development economist
   - Tone: Technical, development-focused, forward-looking
   - Length: 2,500-3,500 characters
   - Focus: Transportation, utilities, digital infrastructure, development projects

3. Save each writeup to database:
   - Use Prisma to upsert to LocationSummary table
   - Set category = 'infrastructure'
   - Include summary, issues (3-5), topStories (empty array)

4. Process in batches of 10 countries, showing progress

5. Generate completion report: INFRASTRUCTURE_IN_SESSION_REPORT.md

Template reference: data/category-prompts.json

Process all 128 countries. I (Claude) will generate all content directly.

When complete: commit and push all changes.
```

---

## SESSION 9B: LIFESTYLE Generation (In-Session)

```
I'm generating LIFESTYLE writeups for the NewsMap database. All generation happens within this session (no API calls).

Branch: claude/initial-setup-019K8JbGjeSt5CkyAbU6HPqr

TASK: Generate LIFESTYLE writeups for all 128 countries

1. Read data/countries.json to get country list

2. For each country, I will generate a LIFESTYLE writeup with:
   - Voice: Lifestyle journalist / cultural observer
   - Tone: Engaging, observant, balanced
   - Length: 2,500-3,500 characters
   - Focus: Daily life, work-life balance, social trends, quality of life

3. Save each writeup to database:
   - Use Prisma to upsert to LocationSummary table
   - Set category = 'lifestyle'
   - Include summary, issues (3-5), topStories (empty array)

4. Process in batches of 10 countries, showing progress

5. Generate completion report: LIFESTYLE_IN_SESSION_REPORT.md

Template reference: data/category-prompts.json

Process all 128 countries. I (Claude) will generate all content directly.

When complete: commit and push all changes.
```

---

## SESSION 10B: ENTERTAINMENT Generation (In-Session)

```
I'm generating ENTERTAINMENT writeups for the NewsMap database. All generation happens within this session (no API calls).

Branch: claude/initial-setup-019K8JbGjeSt5CkyAbU6HPqr

TASK: Generate ENTERTAINMENT writeups for all 128 countries

1. Read data/countries.json to get country list

2. For each country, I will generate an ENTERTAINMENT writeup with:
   - Voice: Entertainment journalist / pop culture critic
   - Tone: Engaging, informed, celebratory yet critical
   - Length: 2,000-3,000 characters
   - Focus: Film/TV, music, streaming, celebrities, pop culture

3. Save each writeup to database:
   - Use Prisma to upsert to LocationSummary table
   - Set category = 'entertainment'
   - Include summary, issues (3-5), topStories (empty array)

4. Process in batches of 10 countries, showing progress

5. Generate completion report: ENTERTAINMENT_IN_SESSION_REPORT.md

Template reference: data/category-prompts.json

Process all 128 countries. I (Claude) will generate all content directly.

When complete: commit and push all changes.
```

---

## SESSION 11B: Multi-Category Generation (In-Session)

```
I'm generating 6 categories (CRIME, EDUCATION, ENERGY, FOOD, HEALTHCARE, TRAVEL) for the NewsMap database. All generation happens within this session (no API calls).

Branch: claude/initial-setup-019K8JbGjeSt5CkyAbU6HPqr

TASK: Generate 6 categories × 128 countries = 768 writeups

1. Read data/countries.json to get country list

2. For each country, generate 6 writeups:

   **CRIME:**
   - Voice: Preet Bharara / Jeffrey Toobin
   - Length: 2,500-3,500 characters
   - Focus: Crime rates, justice system, law enforcement

   **EDUCATION:**
   - Voice: Education policy expert
   - Length: 2,500-3,500 characters
   - Focus: Education system, literacy, universities

   **ENERGY:**
   - Voice: Daniel Yergin style analyst
   - Length: 2,500-3,500 characters
   - Focus: Energy mix, resources, strategy

   **FOOD:**
   - Voice: Samin Nosrat / David Chang
   - Length: 2,000-3,000 characters
   - Focus: Cuisine, dishes, food culture

   **HEALTHCARE:**
   - Voice: Medical expert / health policy analyst
   - Length: 2,500-3,500 characters
   - Focus: Healthcare system, access, outcomes

   **TRAVEL:**
   - Voice: Bourdain meets Rick Steves
   - Length: 2,500-3,500 characters
   - Focus: Destinations, tourism, infrastructure

3. Save all writeups to database using Prisma

4. Process in batches of 5 countries (30 writeups per batch)

5. Generate completion report: MULTI_CATEGORY_IN_SESSION_REPORT.md

Template reference: data/category-prompts.json has all prompts

Process all 128 countries × 6 categories = 768 writeups. I (Claude) will generate all content directly.

When complete: commit and push all changes.
```

---

## FINAL VERIFICATION SESSION

```
I'm verifying 100% coverage completion for the NewsMap database.

Branch: claude/initial-setup-019K8JbGjeSt5CkyAbU6HPqr

TASK: Verify all 1,920 writeups have been generated (128 countries × 15 categories)

1. Run scripts/analyze-coverage.ts to get current coverage

2. Verify all 15 categories at 128/128:
   - ALL, CLIMATE, CRIME, CULTURE, ECONOMY, EDUCATION, ENERGY
   - ENTERTAINMENT, FOOD, HEALTHCARE, INFRASTRUCTURE, LIFESTYLE
   - POLITICS, SCIENCE, SPORTS, TECHNOLOGY, TRAVEL

3. Calculate final statistics:
   - Coverage before: 13.33% (256 writeups)
   - Coverage after: 100% (1,920 writeups)
   - Total generated: 1,664 writeups

4. Quality spot-check:
   - Random sample 10 countries
   - Verify all 15 categories exist for each
   - Check writeup quality (length, format, content)

5. Generate FINAL_100_PERCENT_REPORT.md:
   - Journey summary (13.33% → 100%)
   - Category breakdown
   - Quality assessment
   - Success metrics
   - Celebration! 🎉

6. Update README.md with new statistics

When complete: commit, push, and celebrate 100% coverage achievement!
```

---

## 📊 Execution Plan

### Step 1: Start 10 Parallel Sessions
Open 10 new Claude Code windows and copy one prompt into each (Sessions 2B-11B)

### Step 2: Let Them Run
Each session will:
- Generate all writeups directly (Claude creates content)
- Save to database via Prisma
- Take ~20-40 minutes depending on session
- Work independently in parallel

### Step 3: Final Verification
After all 10 complete, run the Final Verification session

---

## ⏱️ Time Estimates

**Single category (128 countries):** ~20-30 minutes
- Claude generates each writeup directly
- Saves to database in batches

**Multi-category (768 writeups):** ~60-90 minutes
- 6 categories per country takes longer

**Total time:** All run in parallel, so ~60-90 minutes wall clock time!

---

## 💰 Cost: Only Session Credits!

- ✅ No Anthropic API calls
- ✅ No API key needed
- ✅ Uses your Claude Code session credits
- ✅ Exactly what you wanted!

---

## 🎯 Ready to Start!

**Copy the prompts above (Sessions 2B-11B) into 10 new Claude Code sessions and start them all at once!**

No API key configuration needed - everything happens in-session! 🚀
