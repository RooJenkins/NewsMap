# Simplified Parallel Prompts - Copy & Paste to Start Now!

## 🚀 How to Use

1. **First:** Run Session 1 in this session (or one new session) - WAIT for it to complete (~30 min)
2. **Then:** Open 10 new Claude Code sessions and copy one prompt into each
3. **Start all 10 at once!** They'll run in parallel (~20-30 minutes)
4. **Finally:** Run Final Verification after all complete

**Branch for ALL sessions:** `claude/initial-setup-019K8JbGjeSt5CkyAbU6HPqr`

---

## 📋 SESSION 1: Infrastructure (RUN THIS FIRST!)

**Copy this entire prompt into THIS session or a new one:**

```
I'm working on NewsMap database improvement. This is the infrastructure setup session.

Branch: claude/initial-setup-019K8JbGjeSt5CkyAbU6HPqr

TASKS:

1. Create scripts/get-all-countries.ts:
   - Query LocationSummary table for all unique countries
   - Get name, lat, lng for each
   - Save to data/countries.json (create data/ dir if needed)

2. Create scripts/analyze-coverage.ts:
   - Count writeups per category across all countries
   - Generate matrix: 178 countries × 15 categories
   - Calculate coverage percentage
   - Output to console and save BASELINE_COVERAGE_REPORT.md

3. Run the analysis:
   - Execute: tsx scripts/analyze-coverage.ts
   - Confirm ~53% coverage (1,430 writeups)
   - Confirm CLIMATE, ECONOMY, POLITICS, TECHNOLOGY have <2% coverage

4. Test API connectivity:
   - Check ANTHROPIC_API_KEY is set
   - Verify Prisma connection
   - Test one simple generation if possible

5. Create data/category-prompts.json with AI prompts for each category:
   - CLIMATE: "You are a climate scientist..."
   - ECONOMY: "You are an economic analyst for The Financial Times..."
   - POLITICS: "You are a political analyst..."
   - TECHNOLOGY: "You are a tech industry analyst..."
   - SCIENCE: "You are a science journalist like Ed Yong..."
   - LIFESTYLE: "You are a lifestyle journalist..."
   - ENTERTAINMENT: "You are an entertainment journalist..."
   (Include full prompt templates for all categories)

When complete:
- Commit all files
- Push to branch
- Report: "✅ Infrastructure ready for parallel generation"

Reference files: prisma/schema.prisma, scripts/generate-category-summaries.ts
```

---

## 🔥 PARALLEL SESSIONS (Run ALL 10 at once after Session 1)

### SESSION 2A: CLIMATE Generation

```
NewsMap improvement - CLIMATE category generation.
Branch: claude/initial-setup-019K8JbGjeSt5CkyAbU6HPqr

Generate CLIMATE writeups for ALL countries missing this category.

1. Query database: SELECT countries WHERE NOT EXISTS (category = 'climate')
2. Create scripts/batch-generate-climate.ts
3. For each country:
   - Fetch recent stories from Story table
   - AI prompt: "You are a climate scientist analyzing [COUNTRY]. Focus on: climate risks, emissions, renewable energy, extreme weather, adaptation strategies, climate policy. Tone: Urgent but factual. Length: 2,500-3,500 chars."
   - Parse response (summary, issues, topStories)
   - Upsert to LocationSummary table with category='climate'
   - Wait 1 second (rate limiting)
4. Generate ~176 writeups
5. Save report: CLIMATE_GENERATION_REPORT.md (count, success rate, samples)
6. Commit and push

Template: scripts/generate-category-summaries.ts
```

---

### SESSION 3A: ECONOMY Generation

```
NewsMap improvement - ECONOMY category generation.
Branch: claude/initial-setup-019K8JbGjeSt5CkyAbU6HPqr

Generate ECONOMY writeups for ALL countries missing this category.

1. Query database: SELECT countries WHERE NOT EXISTS (category = 'economy')
2. Create scripts/batch-generate-economy.ts
3. For each country:
   - Fetch recent stories
   - AI prompt: "You are an economic analyst for The Financial Times analyzing [COUNTRY]. Focus on: GDP, trade, industries, fiscal policy, business environment, economic outlook. Tone: Analytical, data-driven. Length: 2,500-3,500 chars."
   - Parse and save to database with category='economy'
   - Wait 1 second
4. Generate ~176 writeups
5. Save report: ECONOMY_GENERATION_REPORT.md
6. Commit and push

Template: scripts/generate-category-summaries.ts
```

---

### SESSION 4A: POLITICS Generation

```
NewsMap improvement - POLITICS category generation.
Branch: claude/initial-setup-019K8JbGjeSt5CkyAbU6HPqr

Generate POLITICS writeups for ALL countries missing this category.

1. Query database: SELECT countries WHERE NOT EXISTS (category = 'politics')
2. Create scripts/batch-generate-politics.ts
3. For each country:
   - Fetch recent stories
   - AI prompt: "You are a political analyst analyzing [COUNTRY]. Focus on: government structure, leadership, political parties, elections, stability, governance, international relations. Tone: Balanced, informed. Length: 2,500-3,500 chars."
   - Parse and save to database with category='politics'
   - Wait 1 second
4. Generate ~176 writeups
5. Save report: POLITICS_GENERATION_REPORT.md
6. Commit and push

Template: scripts/generate-category-summaries.ts
```

---

### SESSION 5A: TECHNOLOGY Generation

```
NewsMap improvement - TECHNOLOGY category generation.
Branch: claude/initial-setup-019K8JbGjeSt5CkyAbU6HPqr

Generate TECHNOLOGY writeups for ALL countries missing this category.

1. Query database: SELECT countries WHERE NOT EXISTS (category = 'technology')
2. Create scripts/batch-generate-technology.ts
3. For each country:
   - Fetch recent stories
   - AI prompt: "You are a tech industry analyst (Stratechery style) analyzing [COUNTRY]. Focus on: tech sector, startups, digital infrastructure, AI adoption, innovation hubs, tech policy. Tone: Forward-looking, strategic. Length: 2,500-3,500 chars."
   - Parse and save to database with category='technology'
   - Wait 1 second
4. Generate ~176 writeups
5. Save report: TECHNOLOGY_GENERATION_REPORT.md
6. Commit and push

Template: scripts/generate-category-summaries.ts
```

---

### SESSION 6A: SCIENCE Completion

```
NewsMap improvement - SCIENCE category completion.
Branch: claude/initial-setup-019K8JbGjeSt5CkyAbU6HPqr

Complete SCIENCE writeups (currently 140/178).

1. Query: SELECT countries WHERE NOT EXISTS (category = 'science')
2. Create scripts/complete-science.ts
3. For each country (~38):
   - Fetch stories
   - AI prompt: "You are a science journalist (Ed Yong style) analyzing [COUNTRY]. Focus on: research institutions, scientific breakthroughs, R&D investment, key researchers, collaboration. Tone: Accessible, wonder + rigor. Length: 2,500-3,500 chars."
   - Save with category='science'
   - Wait 1 second
4. Generate ~38 writeups
5. Report: SCIENCE_COMPLETION_REPORT.md
6. Commit and push

Template: scripts/generate-category-summaries.ts
```

---

### SESSION 7A: ALL Category Completion

```
NewsMap improvement - ALL category completion.
Branch: claude/initial-setup-019K8JbGjeSt5CkyAbU6HPqr

Complete ALL category (general overview) for missing countries.

1. Query: SELECT countries WHERE NOT EXISTS (category = 'all')
2. Create scripts/complete-all.ts
3. For each country (~30):
   - Fetch all recent stories (all categories)
   - AI prompt: "You are a news analyst providing a comprehensive overview of [COUNTRY]. Cover: political situation, economic trends, social issues, recent developments across all sectors. Tone: Balanced, comprehensive. Length: 2,500-3,500 chars."
   - Save with category='all'
   - Wait 1 second
4. Generate ~30 writeups
5. Report: ALL_COMPLETION_REPORT.md
6. Commit and push
```

---

### SESSION 8A: INFRASTRUCTURE Completion

```
NewsMap improvement - INFRASTRUCTURE category completion.
Branch: claude/initial-setup-019K8JbGjeSt5CkyAbU6HPqr

Complete INFRASTRUCTURE category for missing countries.

1. Query: SELECT countries WHERE NOT EXISTS (category = 'infrastructure')
2. Create scripts/complete-infrastructure.ts
3. For each country (~30):
   - Fetch stories
   - AI prompt: "You are an infrastructure expert analyzing [COUNTRY]. Focus on: transportation (roads, rail, airports), utilities (power, water), digital infrastructure, development projects, investment. Tone: Technical, development-focused. Length: 2,500-3,500 chars."
   - Save with category='infrastructure'
   - Wait 1 second
4. Generate ~30 writeups
5. Report: INFRASTRUCTURE_COMPLETION_REPORT.md
6. Commit and push
```

---

### SESSION 9A: LIFESTYLE Completion

```
NewsMap improvement - LIFESTYLE category completion.
Branch: claude/initial-setup-019K8JbGjeSt5CkyAbU6HPqr

Complete LIFESTYLE category (currently 114/178).

1. Query: SELECT countries WHERE NOT EXISTS (category = 'lifestyle')
2. Create scripts/complete-lifestyle.ts
3. For each country (~64):
   - Fetch stories
   - AI prompt: "You are a lifestyle journalist analyzing [COUNTRY]. Focus on: daily life, work-life balance, social trends, urban/rural lifestyles, quality of life, leisure activities. Tone: Engaging, observant. Length: 2,500-3,500 chars."
   - Save with category='lifestyle'
   - Wait 1 second
4. Generate ~64 writeups
5. Report: LIFESTYLE_COMPLETION_REPORT.md
6. Commit and push
```

---

### SESSION 10A: ENTERTAINMENT Completion

```
NewsMap improvement - ENTERTAINMENT category completion.
Branch: claude/initial-setup-019K8JbGjeSt5CkyAbU6HPqr

Complete ENTERTAINMENT category (currently 104/178).

1. Query: SELECT countries WHERE NOT EXISTS (category = 'entertainment')
2. Create scripts/complete-entertainment.ts
3. For each country (~74):
   - Fetch stories
   - AI prompt: "You are an entertainment journalist analyzing [COUNTRY]. Focus on: film/TV industry, music scene, streaming, celebrities, awards, pop culture trends. Tone: Engaging, informed. Length: 2,000-3,000 chars."
   - Save with category='entertainment'
   - Wait 1 second
4. Generate ~74 writeups
5. Report: ENTERTAINMENT_COMPLETION_REPORT.md
6. Commit and push
```

---

### SESSION 11A: Core Services Multi-Category

```
NewsMap improvement - CRIME, EDUCATION, ENERGY, FOOD, HEALTHCARE, TRAVEL completion.
Branch: claude/initial-setup-019K8JbGjeSt5CkyAbU6HPqr

Complete 6 core service categories for priority countries.

1. Find countries with most gaps in these 6 categories
2. Select top 50 priority countries
3. Create scripts/complete-core-services.ts
4. For each country, generate all 6 categories:
   - CRIME: Justice system, crime rates, law enforcement (2,500-3,500 chars)
   - EDUCATION: School system, universities, literacy (2,500-3,500 chars)
   - ENERGY: Energy mix, resources, strategy (2,500-3,500 chars)
   - FOOD: Cuisine, dishes, food culture (2,000-3,000 chars)
   - HEALTHCARE: Health system, access, outcomes (2,500-3,500 chars)
   - TRAVEL: Destinations, tourism, infrastructure (2,500-3,500 chars)
5. Generate ~300 total writeups (50 countries × 6 categories)
6. Report: CORE_SERVICES_COMPLETION_REPORT.md
7. Commit and push

See CATEGORY_STYLE_GUIDE.md for prompts and voices.
```

---

## ✅ FINAL VERIFICATION (Run AFTER all 10 parallel sessions complete)

```
NewsMap improvement - FINAL VERIFICATION & COMPLETION.
Branch: claude/initial-setup-019K8JbGjeSt5CkyAbU6HPqr

Verify 100% coverage achieved!

1. Run scripts/analyze-coverage.ts
2. Verify all 15 categories at or near 178/178:
   - ALL, CLIMATE, CRIME, ECONOMY, EDUCATION, ENERGY
   - ENTERTAINMENT, FOOD, HEALTHCARE, INFRASTRUCTURE
   - LIFESTYLE, POLITICS, SCIENCE, TECHNOLOGY, TRAVEL
3. Calculate total coverage (target: 100% = 2,670 writeups)
4. Identify any remaining gaps
5. For any gaps found:
   - Generate missing writeups now
   - Use appropriate category prompt
6. Quality spot-check 10 random countries:
   - Verify all 15 categories exist
   - Check length, format, quality
7. Generate FINAL_COMPLETION_REPORT.md:
   - Before: 53% (1,430 writeups)
   - After: X% (X writeups)
   - Total generated: X
   - Coverage by category (matrix)
   - Quality assessment
   - Success metrics
8. Update README.md with new statistics
9. Commit and push
10. Create summary: "🎉 100% COVERAGE ACHIEVED!"

Reference: IMPROVEMENT_PLAN.md
```

---

## 📊 Quick Reference

### Execution Order:
1. ✅ Run **Session 1** first (wait for completion)
2. ✅ Open 10 new sessions and paste **Sessions 2A-11A** (all at once)
3. ✅ Wait ~30 minutes for all to complete
4. ✅ Run **Final Verification**

### Expected Results:
- **Session 1:** Infrastructure ready
- **Sessions 2A-5A:** +704 writeups (4 critical categories)
- **Sessions 6A-11A:** +536 writeups (remaining categories)
- **Final:** 100% coverage verified (2,670 total)

### Time Estimate:
- Session 1: 30-45 minutes
- Parallel execution: 30-45 minutes (all 10 run simultaneously)
- Final verification: 15-20 minutes
- **Total: ~2 hours to 100% coverage!**

### Cost Estimate:
- Same as original: $133-216 total
- Just much faster!

---

## 🎯 Ready to Start?

**Copy Session 1 prompt above and start it now!**

Once Session 1 completes, come back here and copy the 10 parallel prompts (Sessions 2A-11A) into separate Claude Code windows.

🚀 Let's get to 100% coverage today!
