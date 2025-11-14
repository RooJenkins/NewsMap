# NewsMap Improvement - Parallel Session Prompts

This document contains ready-to-use prompts for each session. Copy and paste into new Claude Code sessions to work in parallel.

**Important:** Work on branch `claude/initial-setup-019K8JbGjeSt5CkyAbU6HPqr` for all sessions.

---

## 📋 Parallelization Groups

### Group 1: Setup (Sequential - Must Complete First)
- **Session 1** - Infrastructure Setup

### Group 2: Critical Categories (Fully Parallel - Can Run Simultaneously)
- **Session 2** - CLIMATE Generation
- **Session 3** - ECONOMY Generation
- **Session 4** - POLITICS Generation
- **Session 5** - TECHNOLOGY Generation

### Group 3: Verification (Sequential - After Group 2)
- **Session 6** - Phase 1 Verification

### Group 4: Complete Categories (Fully Parallel - Can Run Simultaneously)
- **Session 7** - SCIENCE Completion
- **Session 8** - ALL & INFRASTRUCTURE
- **Session 9** - Core Services Bundle

### Group 5: Verification (Sequential - After Group 4)
- **Session 10** - Phase 2 Verification

### Group 6: Final Categories (Fully Parallel - Can Run Simultaneously)
- **Session 11** - LIFESTYLE Completion
- **Session 12** - ENTERTAINMENT Completion
- **Session 13** - Final Gap Fill

### Group 7: Final Verification (Sequential - After Group 6)
- **Session 14** - Final Verification & Celebration

---

## 🚀 SESSION 1: Infrastructure Setup
**Duration:** 30-45 minutes | **Cost:** $5-8
**Prerequisites:** None
**Branch:** `claude/initial-setup-019K8JbGjeSt5CkyAbU6HPqr`

### Prompt for Session 1:
```
I'm working on the NewsMap project to improve database coverage from 53% to 100%. This is Session 1 of a 14-session improvement plan.

Please work on branch: claude/initial-setup-019K8JbGjeSt5CkyAbU6HPqr

TASK: Create infrastructure for batch writeup generation

1. Create scripts/analyze-coverage.ts
   - Query database to count writeups per country per category
   - Generate matrix showing coverage (178 countries × 15 categories)
   - Output statistics: total coverage %, categories with worst coverage
   - Save detailed report to BASELINE_COVERAGE_REPORT.md

2. Create scripts/generate-priority-report.ts
   - Analyze which countries need most attention
   - Identify categories with <10% coverage
   - Generate prioritized list for batch generation
   - Output actionable recommendations

3. Create scripts/get-all-countries.ts
   - Extract unique list of all countries from LocationSummary table
   - Include: name, lat, lng, current category count
   - Save to data/country-list.json (create data/ directory if needed)

4. Run baseline analysis
   - Execute analyze-coverage.ts
   - Verify current coverage is ~53% (1,430 writeups)
   - Confirm 4 critical categories (CLIMATE, ECONOMY, POLITICS, TECHNOLOGY) have <2% coverage

5. Test single generation
   - Use existing scripts/generate-category-summaries.ts as template
   - Verify Anthropic API connectivity
   - Test one CLIMATE writeup for a small country (e.g., Malta)

When complete:
- Commit all new files to git
- Push to branch claude/initial-setup-019K8JbGjeSt5CkyAbU6HPqr
- Generate summary showing we're ready for Phase 1 (Sessions 2-5)

Reference: See IMPROVEMENT_PLAN.md for full context
```

---

## 🌍 SESSION 2: CLIMATE Category Generation
**Duration:** 20-30 minutes | **Cost:** $15-25
**Prerequisites:** Session 1 completed
**Branch:** `claude/initial-setup-019K8JbGjeSt5CkyAbU6HPqr`
**Parallelizable:** Yes (with Sessions 3, 4, 5)

### Prompt for Session 2:
```
I'm working on the NewsMap project to improve database coverage. This is Session 2 of 14 - generating CLIMATE writeups for all countries.

Please work on branch: claude/initial-setup-019K8JbGjeSt5CkyAbU6HPqr

CONTEXT:
- Goal: Generate CLIMATE category writeups for ~176 countries (excluding China, USA which already exist)
- Current coverage: Only 2/178 countries have CLIMATE writeups
- This will add 176 new writeups to the database

TASK: Create and execute batch CLIMATE generation script

1. Create scripts/batch-generate-climate.ts based on scripts/generate-category-summaries.ts template

2. Configuration:
   - Category: "climate"
   - Voice: Climate scientist / environmental journalist (urgent but factual, solutions-oriented)
   - Length: 2,500-3,500 characters
   - Focus areas: Climate risks, emissions, adaptation strategies, renewable energy, extreme weather, climate policy

3. Prompt template for AI:
   "You are a climate scientist and environmental journalist. Analyze news stories about [COUNTRY] and create a comprehensive climate summary.

   Focus on:
   - Climate risks and vulnerabilities (sea level rise, drought, extreme weather)
   - Current emissions and climate impact
   - Renewable energy adoption and targets
   - Climate adaptation strategies
   - Recent climate events and trends
   - Government climate policy and commitments

   Tone: Urgent but factual, solutions-oriented, data-driven
   Length: 2,500-3,500 characters"

4. Country list: Load all countries from database WHERE NOT EXISTS climate writeup
   - Exclude: China, United States (already have CLIMATE writeups)
   - Include: lat, lng for each country

5. Implementation:
   - Loop through all countries
   - For each: fetch stories, generate summary, save to database
   - Rate limiting: 1 second delay between API calls
   - Error handling: Log failures, continue with next country
   - Progress tracking: Log "X/176 complete" after each country

6. Verification:
   - Count successful generations
   - List any failures
   - Verify all writeups are 2,000-3,500 characters
   - Spot-check 3 random writeups for quality

7. Generate report: CLIMATE_GENERATION_REPORT.md
   - Total generated: X/176
   - Success rate: X%
   - Failures (if any): [list]
   - Sample writeup excerpts (3 countries)
   - Time taken
   - Cost estimate

When complete:
- Commit scripts/batch-generate-climate.ts and report
- Push to branch
- Summary: "✅ Generated 176 CLIMATE writeups"

Reference: IMPROVEMENT_PLAN.md and scripts/generate-category-summaries.ts
```

---

## 💰 SESSION 3: ECONOMY Category Generation
**Duration:** 20-30 minutes | **Cost:** $15-25
**Prerequisites:** Session 1 completed
**Branch:** `claude/initial-setup-019K8JbGjeSt5CkyAbU6HPqr`
**Parallelizable:** Yes (with Sessions 2, 4, 5)

### Prompt for Session 3:
```
I'm working on the NewsMap project to improve database coverage. This is Session 3 of 14 - generating ECONOMY writeups for all countries.

Please work on branch: claude/initial-setup-019K8JbGjeSt5CkyAbU6HPqr

CONTEXT:
- Goal: Generate ECONOMY category writeups for ~176 countries (excluding China, USA which already exist)
- Current coverage: Only 2/178 countries have ECONOMY writeups
- This will add 176 new writeups to the database

TASK: Create and execute batch ECONOMY generation script

1. Create scripts/batch-generate-economy.ts based on scripts/generate-category-summaries.ts template

2. Configuration:
   - Category: "economy"
   - Voice: Financial Times / The Economist style (analytical, data-driven, global context)
   - Length: 2,500-3,500 characters
   - Focus areas: GDP, trade, industries, fiscal policy, business environment, economic outlook

3. Prompt template for AI:
   "You are an economic analyst writing for The Financial Times. Analyze news stories about [COUNTRY]'s economy and create a comprehensive economic summary.

   Focus on:
   - GDP growth and economic performance
   - Key industries and exports
   - Trade relationships and balance
   - Fiscal policy and government finances
   - Business environment and investment climate
   - Economic challenges and opportunities
   - Inflation, employment, and monetary policy
   - Future economic outlook

   Tone: Analytical, data-driven, balanced, global context
   Length: 2,500-3,500 characters"

4. Country list: Load all countries from database WHERE NOT EXISTS economy writeup
   - Exclude: China, United States (already have ECONOMY writeups)
   - Include: lat, lng for each country

5. Implementation:
   - Loop through all countries
   - For each: fetch stories, generate summary, save to database
   - Rate limiting: 1 second delay between API calls
   - Error handling: Log failures, continue with next country
   - Progress tracking: Log "X/176 complete" after each country

6. Verification:
   - Count successful generations
   - List any failures
   - Verify all writeups are 2,000-3,500 characters
   - Spot-check 3 random writeups for quality

7. Generate report: ECONOMY_GENERATION_REPORT.md
   - Total generated: X/176
   - Success rate: X%
   - Failures (if any): [list]
   - Sample writeup excerpts (3 countries)
   - Time taken
   - Cost estimate

When complete:
- Commit scripts/batch-generate-economy.ts and report
- Push to branch
- Summary: "✅ Generated 176 ECONOMY writeups"

Reference: IMPROVEMENT_PLAN.md and scripts/generate-category-summaries.ts
```

---

## 🏛️ SESSION 4: POLITICS Category Generation
**Duration:** 20-30 minutes | **Cost:** $15-25
**Prerequisites:** Session 1 completed
**Branch:** `claude/initial-setup-019K8JbGjeSt5CkyAbU6HPqr`
**Parallelizable:** Yes (with Sessions 2, 3, 5)

### Prompt for Session 4:
```
I'm working on the NewsMap project to improve database coverage. This is Session 4 of 14 - generating POLITICS writeups for all countries.

Please work on branch: claude/initial-setup-019K8JbGjeSt5CkyAbU6HPqr

CONTEXT:
- Goal: Generate POLITICS category writeups for ~176 countries (excluding China, USA which already exist)
- Current coverage: Only 2/178 countries have POLITICS writeups
- This will add 176 new writeups to the database

TASK: Create and execute batch POLITICS generation script

1. Create scripts/batch-generate-politics.ts based on scripts/generate-category-summaries.ts template

2. Configuration:
   - Category: "politics"
   - Voice: Political analyst / foreign correspondent (balanced, informed, historical context)
   - Length: 2,500-3,500 characters
   - Focus areas: Government structure, leadership, parties, elections, political stability, governance

3. Prompt template for AI:
   "You are a political analyst and foreign correspondent. Analyze news stories about [COUNTRY]'s political landscape and create a comprehensive political summary.

   Focus on:
   - Government structure and system (democracy, autocracy, etc.)
   - Current leadership and key political figures
   - Political parties and power dynamics
   - Recent elections or political transitions
   - Political stability and governance challenges
   - Key policy debates and reforms
   - Civil society and opposition movements
   - International relations and diplomatic stance

   Tone: Balanced, informed, analytical with historical context
   Length: 2,500-3,500 characters"

4. Country list: Load all countries from database WHERE NOT EXISTS politics writeup
   - Exclude: China, United States (already have POLITICS writeups)
   - Include: lat, lng for each country

5. Implementation:
   - Loop through all countries
   - For each: fetch stories, generate summary, save to database
   - Rate limiting: 1 second delay between API calls
   - Error handling: Log failures, continue with next country
   - Progress tracking: Log "X/176 complete" after each country

6. Verification:
   - Count successful generations
   - List any failures
   - Verify all writeups are 2,000-3,500 characters
   - Spot-check 3 random writeups for quality

7. Generate report: POLITICS_GENERATION_REPORT.md
   - Total generated: X/176
   - Success rate: X%
   - Failures (if any): [list]
   - Sample writeup excerpts (3 countries)
   - Time taken
   - Cost estimate

When complete:
- Commit scripts/batch-generate-politics.ts and report
- Push to branch
- Summary: "✅ Generated 176 POLITICS writeups"

Reference: IMPROVEMENT_PLAN.md and scripts/generate-category-summaries.ts
```

---

## 💻 SESSION 5: TECHNOLOGY Category Generation
**Duration:** 20-30 minutes | **Cost:** $15-25
**Prerequisites:** Session 1 completed
**Branch:** `claude/initial-setup-019K8JbGjeSt5CkyAbU6HPqr`
**Parallelizable:** Yes (with Sessions 2, 3, 4)

### Prompt for Session 5:
```
I'm working on the NewsMap project to improve database coverage. This is Session 5 of 14 - generating TECHNOLOGY writeups for all countries.

Please work on branch: claude/initial-setup-019K8JbGjeSt5CkyAbU6HPqr

CONTEXT:
- Goal: Generate TECHNOLOGY category writeups for ~176 countries (excluding China, USA which already exist)
- Current coverage: Only 2/178 countries have TECHNOLOGY writeups
- This will add 176 new writeups to the database

TASK: Create and execute batch TECHNOLOGY generation script

1. Create scripts/batch-generate-technology.ts based on scripts/generate-category-summaries.ts template

2. Configuration:
   - Category: "technology"
   - Voice: Tech industry analyst (Ben Thompson / Stratechery style - forward-looking, practical, innovation-focused)
   - Length: 2,500-3,500 characters
   - Focus areas: Tech sector, startups, digital infrastructure, AI/tech adoption, innovation hubs

3. Prompt template for AI:
   "You are a technology industry analyst writing in the style of Ben Thompson (Stratechery). Analyze news stories about [COUNTRY]'s technology sector and create a comprehensive tech summary.

   Focus on:
   - Tech industry overview and major players
   - Startup ecosystem and venture capital
   - Digital infrastructure (internet, mobile, broadband)
   - AI and emerging technology adoption
   - Innovation hubs and tech talent
   - Government tech policy and regulation
   - Cybersecurity and data privacy
   - Tech education and R&D investment

   Tone: Forward-looking, practical, innovation-focused, strategic analysis
   Length: 2,500-3,500 characters"

4. Country list: Load all countries from database WHERE NOT EXISTS technology writeup
   - Exclude: China, United States (already have TECHNOLOGY writeups)
   - Include: lat, lng for each country

5. Implementation:
   - Loop through all countries
   - For each: fetch stories, generate summary, save to database
   - Rate limiting: 1 second delay between API calls
   - Error handling: Log failures, continue with next country
   - Progress tracking: Log "X/176 complete" after each country

6. Verification:
   - Count successful generations
   - List any failures
   - Verify all writeups are 2,000-3,500 characters
   - Spot-check 3 random writeups for quality

7. Generate report: TECHNOLOGY_GENERATION_REPORT.md
   - Total generated: X/176
   - Success rate: X%
   - Failures (if any): [list]
   - Sample writeup excerpts (3 countries)
   - Time taken
   - Cost estimate

When complete:
- Commit scripts/batch-generate-technology.ts and report
- Push to branch
- Summary: "✅ Generated 176 TECHNOLOGY writeups"

Reference: IMPROVEMENT_PLAN.md and scripts/generate-category-summaries.ts
```

---

## ✅ SESSION 6: Phase 1 Verification
**Duration:** 15-20 minutes | **Cost:** $3-5
**Prerequisites:** Sessions 2, 3, 4, 5 ALL completed
**Branch:** `claude/initial-setup-019K8JbGjeSt5CkyAbU6HPqr`
**Parallelizable:** No (must run after Group 2)

### Prompt for Session 6:
```
I'm working on the NewsMap project to improve database coverage. This is Session 6 of 14 - Phase 1 Verification.

Please work on branch: claude/initial-setup-019K8JbGjeSt5CkyAbU6HPqr

CONTEXT:
- Sessions 2-5 have completed, generating CLIMATE, ECONOMY, POLITICS, TECHNOLOGY writeups
- Expected: 704 new writeups (176 countries × 4 categories)
- This session verifies all generations succeeded and calculates new coverage

TASK: Verify Phase 1 completion and analyze results

1. Run comprehensive coverage analysis
   - Execute scripts/analyze-coverage.ts (created in Session 1)
   - Verify CLIMATE, ECONOMY, POLITICS, TECHNOLOGY categories now have ~178/178 coverage
   - Calculate new overall coverage percentage (expected: ~80%)

2. Verify individual category completion
   - CLIMATE: Should be 178/178 (or close)
   - ECONOMY: Should be 178/178 (or close)
   - POLITICS: Should be 178/178 (or close)
   - TECHNOLOGY: Should be 178/178 (or close)

3. Identify any failures
   - Check for countries missing any of the 4 categories
   - Review generation reports from Sessions 2-5
   - Create list of any failed generations that need retry

4. Quality spot-checks
   - Randomly select 5 countries
   - For each, read all 4 category writeups (CLIMATE, ECONOMY, POLITICS, TECHNOLOGY)
   - Verify: Length 2,000-3,500 chars, has issues, has top stories, appropriate tone
   - Note any quality issues

5. Retry any failures (if needed)
   - If any generations failed in Sessions 2-5, retry them now
   - Use exponential backoff for retries
   - Document retry results

6. Generate Phase 1 completion report: PHASE_1_COMPLETION_REPORT.md
   - Coverage before Phase 1: ~53% (1,430 writeups)
   - Coverage after Phase 1: X% (X writeups)
   - New writeups generated: X
   - Success rate: X%
   - Categories completed: CLIMATE, ECONOMY, POLITICS, TECHNOLOGY
   - Countries with failures (if any): [list]
   - Quality assessment summary
   - Next steps: Phase 2 preview

When complete:
- Commit PHASE_1_COMPLETION_REPORT.md
- Push to branch
- Summary: "✅ Phase 1 Complete: 53% → X% coverage (+704 writeups)"

Reference: IMPROVEMENT_PLAN.md
```

---

## 🔬 SESSION 7: SCIENCE Completion
**Duration:** 15-20 minutes | **Cost:** $8-12
**Prerequisites:** Session 6 completed
**Branch:** `claude/initial-setup-019K8JbGjeSt5CkyAbU6HPqr`
**Parallelizable:** Yes (with Sessions 8, 9)

### Prompt for Session 7:
```
I'm working on the NewsMap project to improve database coverage. This is Session 7 of 14 - completing SCIENCE category.

Please work on branch: claude/initial-setup-019K8JbGjeSt5CkyAbU6HPqr

CONTEXT:
- SCIENCE category currently has 140/178 countries (79% coverage)
- Need to generate SCIENCE writeups for remaining ~38 countries
- Voice: Ed Yong / Carl Zimmer style (science journalism)

TASK: Complete SCIENCE category for all countries

1. Identify missing countries
   - Query database for countries WITHOUT science writeup
   - Should find ~38 countries
   - Load their coordinates

2. Create scripts/complete-science.ts

3. Configuration:
   - Category: "science"
   - Voice: Ed Yong / Carl Zimmer (accessible science journalism, wonder + rigor)
   - Length: 2,500-3,500 characters
   - Focus: Research institutions, scientific achievements, R&D investment, key researchers, recent discoveries

4. Prompt template:
   "You are a science journalist writing in the style of Ed Yong or Carl Zimmer. Analyze news about [COUNTRY]'s scientific landscape.

   Focus on:
   - Major research institutions and universities
   - Recent scientific breakthroughs and discoveries
   - R&D investment and government support
   - Key researchers and Nobel laureates
   - Scientific collaboration and international partnerships
   - Emerging areas of research excellence
   - Science education and STEM initiatives

   Tone: Accessible science journalism, balance wonder with rigor
   Length: 2,500-3,500 characters"

5. Generate for all missing countries
   - Rate limiting: 1 second between calls
   - Track progress
   - Handle errors gracefully

6. Verification
   - Verify SCIENCE category now 178/178 (100%)
   - Spot-check 2 writeups for quality

7. Generate report: SCIENCE_COMPLETION_REPORT.md

When complete:
- Commit script and report
- Push to branch
- Summary: "✅ SCIENCE category: 140 → 178 countries (100%)"

Reference: CATEGORY_STYLE_GUIDE.md for SCIENCE voice
```

---

## 🏗️ SESSION 8: ALL & INFRASTRUCTURE Completion
**Duration:** 20-25 minutes | **Cost:** $12-18
**Prerequisites:** Session 6 completed
**Branch:** `claude/initial-setup-019K8JbGjeSt5CkyAbU6HPqr`
**Parallelizable:** Yes (with Sessions 7, 9)

### Prompt for Session 8:
```
I'm working on the NewsMap project to improve database coverage. This is Session 8 of 14 - completing ALL and INFRASTRUCTURE categories.

Please work on branch: claude/initial-setup-019K8JbGjeSt5CkyAbU6HPqr

CONTEXT:
- ALL category: 148/178 countries (need 30 more)
- INFRASTRUCTURE category: 148/178 countries (need 30 more)
- These are general overview categories

TASK: Complete ALL and INFRASTRUCTURE categories

1. Identify missing countries for each category
   - Query database for countries WITHOUT "all" writeup (~30 countries)
   - Query database for countries WITHOUT "infrastructure" writeup (~30 countries)
   - May have significant overlap

2. Create scripts/complete-all-infrastructure.ts

3. ALL Category Configuration:
   - Category: "all"
   - Voice: General news analyst, balanced overview
   - Length: 2,500-3,500 characters
   - Focus: Overall country situation across all sectors

4. INFRASTRUCTURE Category Configuration:
   - Category: "infrastructure"
   - Voice: Infrastructure expert / development economist
   - Length: 2,500-3,500 characters
   - Focus: Transportation, utilities, digital infrastructure, development projects

5. Generate for both categories
   - For each missing country, generate BOTH all and infrastructure writeups
   - Rate limiting: 1 second between calls
   - Total calls: ~60 (30 countries × 2 categories)

6. Verification
   - Verify ALL: 148 → 178 (100%)
   - Verify INFRASTRUCTURE: 148 → 178 (100%)

7. Generate report: ALL_INFRASTRUCTURE_COMPLETION_REPORT.md

When complete:
- Commit and push
- Summary: "✅ ALL & INFRASTRUCTURE: Both now at 178/178 (100%)"

Reference: IMPROVEMENT_PLAN.md
```

---

## 🏥 SESSION 9: Core Services Bundle Completion
**Duration:** 20-25 minutes | **Cost:** $12-18
**Prerequisites:** Session 6 completed
**Branch:** `claude/initial-setup-019K8JbGjeSt5CkyAbU6HPqr`
**Parallelizable:** Yes (with Sessions 7, 8)

### Prompt for Session 9:
```
I'm working on the NewsMap project to improve database coverage. This is Session 9 of 14 - completing core service categories.

Please work on branch: claude/initial-setup-019K8JbGjeSt5CkyAbU6HPqr

CONTEXT:
- Six categories at 128/178 (72% coverage): CRIME, EDUCATION, ENERGY, FOOD, HEALTHCARE, TRAVEL
- Need to prioritize most important 50 missing countries across these categories
- Total generation: ~300 writeups (50 countries × 6 categories)

TASK: Complete core services for priority countries

1. Identify priority countries
   - Find countries missing the most of these 6 categories
   - Prioritize by: population, economic importance, tourist destinations
   - Select top 50 countries for completion

2. Create scripts/complete-core-services.ts

3. Generate for 6 categories per country:
   - CRIME (Preet Bharara style, justice system focus)
   - EDUCATION (Education specialist, system analysis)
   - ENERGY (Daniel Yergin style, energy strategy)
   - FOOD (Samin Nosrat style, cuisine culture)
   - HEALTHCARE (Medical expert, health system)
   - TRAVEL (Bourdain meets Rick Steves, practical + cultural)

4. Implementation
   - For each of 50 countries, generate 6 writeups
   - Rate limiting: 1 second between calls
   - Total time: ~5 minutes (300 seconds)
   - Progress tracking: "X/300 complete"

5. Verification
   - Count writeups generated per category
   - Verify at least 50 new writeups in each category
   - Spot-check quality across categories

6. Generate report: CORE_SERVICES_COMPLETION_REPORT.md
   - List all 50 countries completed
   - Progress per category
   - Quality samples

When complete:
- Commit and push
- Summary: "✅ Core services: +300 writeups across 6 categories for 50 priority countries"

Reference: CATEGORY_STYLE_GUIDE.md for voice guidelines
```

---

## ✅ SESSION 10: Phase 2 Verification
**Duration:** 15-20 minutes | **Cost:** $3-5
**Prerequisites:** Sessions 7, 8, 9 ALL completed
**Branch:** `claude/initial-setup-019K8JbGjeSt5CkyAbU6HPqr`
**Parallelizable:** No (must run after Group 4)

### Prompt for Session 10:
```
I'm working on the NewsMap project to improve database coverage. This is Session 10 of 14 - Phase 2 Verification.

Please work on branch: claude/initial-setup-019K8JbGjeSt5CkyAbU6HPqr

CONTEXT:
- Sessions 7-9 completed SCIENCE, ALL, INFRASTRUCTURE, and core services
- Expected: ~422 new writeups
- This session verifies completion and calculates updated coverage

TASK: Verify Phase 2 completion

1. Run comprehensive coverage analysis
   - Execute scripts/analyze-coverage.ts
   - Verify category completion:
     * SCIENCE: 178/178 (100%)
     * ALL: 178/178 (100%)
     * INFRASTRUCTURE: 178/178 (100%)
     * CRIME, EDUCATION, ENERGY, FOOD, HEALTHCARE, TRAVEL: Improved significantly

2. Calculate new coverage
   - Total writeups after Phase 2
   - Overall coverage percentage (expected: ~90-92%)
   - Progress since Phase 1 (~80%)

3. Identify remaining gaps
   - Which categories still need work?
   - Which countries have lowest coverage?
   - How many writeups until 100%?

4. Quality spot-checks
   - Random sample 5 countries
   - Check SCIENCE, INFRASTRUCTURE, and one core service writeup
   - Verify quality standards met

5. Generate Phase 2 completion report: PHASE_2_COMPLETION_REPORT.md
   - Coverage before Phase 2: ~80%
   - Coverage after Phase 2: X%
   - New writeups: X
   - Categories at 100%: [list]
   - Remaining gaps: X writeups
   - Phase 3 preview: LIFESTYLE, ENTERTAINMENT, final gaps

When complete:
- Commit and push
- Summary: "✅ Phase 2 Complete: 80% → X% coverage"

Reference: IMPROVEMENT_PLAN.md
```

---

## 🎨 SESSION 11: LIFESTYLE Completion
**Duration:** 20-25 minutes | **Cost:** $15-20
**Prerequisites:** Session 10 completed
**Branch:** `claude/initial-setup-019K8JbGjeSt5CkyAbU6HPqr`
**Parallelizable:** Yes (with Sessions 12, 13)

### Prompt for Session 11:
```
I'm working on the NewsMap project to improve database coverage. This is Session 11 of 14 - completing LIFESTYLE category.

Please work on branch: claude/initial-setup-019K8JbGjeSt5CkyAbU6HPqr

CONTEXT:
- LIFESTYLE category: 114/178 countries (64% coverage)
- Need to generate ~64 LIFESTYLE writeups
- This category covers daily life, culture, social trends

TASK: Complete LIFESTYLE category for all countries

1. Identify missing countries
   - Query database for countries WITHOUT lifestyle writeup
   - Should find ~64 countries

2. Create scripts/complete-lifestyle.ts

3. Configuration:
   - Category: "lifestyle"
   - Voice: Lifestyle journalist / cultural observer
   - Length: 2,500-3,500 characters
   - Focus: Daily life, social trends, work-life balance, urban/rural lifestyles, quality of life

4. Prompt template:
   "You are a lifestyle journalist and cultural observer. Analyze news about daily life and social trends in [COUNTRY].

   Focus on:
   - Daily life and routines
   - Work-life balance and working culture
   - Social trends and generational shifts
   - Urban vs rural lifestyles
   - Quality of life indicators
   - Social media and digital life
   - Fashion, design, and aesthetics
   - Leisure activities and entertainment

   Tone: Engaging, observant, balanced
   Length: 2,500-3,500 characters"

5. Generate for all 64 countries
   - Rate limiting: 1 second between calls
   - Progress tracking
   - Error handling

6. Verification
   - Verify LIFESTYLE: 114 → 178 (100%)
   - Spot-check 3 writeups

7. Generate report: LIFESTYLE_COMPLETION_REPORT.md

When complete:
- Commit and push
- Summary: "✅ LIFESTYLE category: 114 → 178 countries (100%)"

Reference: IMPROVEMENT_PLAN.md
```

---

## 🎬 SESSION 12: ENTERTAINMENT Completion
**Duration:** 25-30 minutes | **Cost:** $18-25
**Prerequisites:** Session 10 completed
**Branch:** `claude/initial-setup-019K8JbGjeSt5CkyAbU6HPqr`
**Parallelizable:** Yes (with Sessions 11, 13)

### Prompt for Session 12:
```
I'm working on the NewsMap project to improve database coverage. This is Session 12 of 14 - completing ENTERTAINMENT category.

Please work on branch: claude/initial-setup-019K8JbGjeSt5CkyAbU6HPqr

CONTEXT:
- ENTERTAINMENT category: 104/178 countries (58% coverage)
- Need to generate ~74 ENTERTAINMENT writeups
- This category covers film, TV, music, celebrities, pop culture

TASK: Complete ENTERTAINMENT category for all countries

1. Identify missing countries
   - Query database for countries WITHOUT entertainment writeup
   - Should find ~74 countries

2. Create scripts/complete-entertainment.ts

3. Configuration:
   - Category: "entertainment"
   - Voice: Entertainment journalist / pop culture critic
   - Length: 2,000-3,000 characters
   - Focus: Film, TV, music, celebrities, streaming, entertainment industry

4. Prompt template:
   "You are an entertainment journalist and pop culture critic. Analyze entertainment news from [COUNTRY].

   Focus on:
   - Film and television industry
   - Music scene (traditional and contemporary)
   - Streaming and digital entertainment
   - Celebrities and public figures
   - Awards and recognition
   - Entertainment business and box office
   - International co-productions and exports
   - Pop culture trends and phenomena

   Tone: Engaging, informed, celebratory yet critical
   Length: 2,000-3,000 characters"

5. Generate for all 74 countries
   - Rate limiting: 1 second between calls
   - Progress tracking
   - Error handling

6. Verification
   - Verify ENTERTAINMENT: 104 → 178 (100%)
   - Spot-check 3 writeups

7. Generate report: ENTERTAINMENT_COMPLETION_REPORT.md

When complete:
- Commit and push
- Summary: "✅ ENTERTAINMENT category: 104 → 178 countries (100%)"

Reference: IMPROVEMENT_PLAN.md
```

---

## 🔧 SESSION 13: Final Gap Fill
**Duration:** 20-30 minutes | **Cost:** $15-25
**Prerequisites:** Session 10 completed
**Branch:** `claude/initial-setup-019K8JbGjeSt5CkyAbU6HPqr`
**Parallelizable:** Yes (with Sessions 11, 12)

### Prompt for Session 13:
```
I'm working on the NewsMap project to improve database coverage. This is Session 13 of 14 - filling final gaps.

Please work on branch: claude/initial-setup-019K8JbGjeSt5CkyAbU6HPqr

CONTEXT:
- After Sessions 11-12, we should be very close to 100%
- This session handles any remaining gaps identified
- May include retries from earlier sessions or edge cases

TASK: Identify and fill all remaining gaps

1. Run comprehensive coverage analysis
   - Execute scripts/analyze-coverage.ts
   - Identify any country-category combinations still missing
   - Create priority list of remaining gaps

2. Categorize remaining gaps
   - Missing due to failed generations (retry needed)
   - Missing due to edge cases (new generation needed)
   - Organize by category for efficient batch processing

3. Create scripts/fill-remaining-gaps.ts
   - Dynamic script that handles any category
   - Reads gap list and generates accordingly
   - Smart retry logic for previously failed attempts

4. Generate all remaining writeups
   - Process by category for efficiency
   - Rate limiting: 1 second between calls
   - Extra error handling for edge cases
   - Manual review of problematic countries if needed

5. Verification after each batch
   - Check coverage percentage after each category batch
   - Verify writeups meet quality standards
   - List any truly problematic cases

6. Generate report: FINAL_GAP_FILL_REPORT.md
   - Gaps identified: X writeups
   - Gaps filled: X writeups
   - Remaining issues (if any): [list]
   - Coverage before: X%
   - Coverage after: X%

When complete:
- Commit and push
- Summary: "✅ Final gaps filled: X additional writeups, coverage now at X%"

Reference: IMPROVEMENT_PLAN.md
```

---

## 🎉 SESSION 14: Final Verification & Celebration
**Duration:** 20-25 minutes | **Cost:** $5-8
**Prerequisites:** Sessions 11, 12, 13 ALL completed
**Branch:** `claude/initial-setup-019K8JbGjeSt5CkyAbU6HPqr`
**Parallelizable:** No (must run after Group 6)

### Prompt for Session 14:
```
I'm working on the NewsMap project to improve database coverage. This is Session 14 of 14 - FINAL VERIFICATION & CELEBRATION! 🎉

Please work on branch: claude/initial-setup-019K8JbGjeSt5CkyAbU6HPqr

CONTEXT:
- All previous sessions completed
- Goal: Verify 100% coverage (2,670 writeups = 178 countries × 15 categories)
- This is the final quality check and celebration!

TASK: Final verification and completion

1. Run comprehensive final analysis
   - Execute scripts/analyze-coverage.ts
   - Verify 100% coverage (2,670 writeups)
   - Generate coverage matrix showing all 178 countries × 15 categories

2. Verify all categories at 100%
   - ALL: 178/178 ✓
   - CLIMATE: 178/178 ✓
   - CRIME: 178/178 ✓
   - ECONOMY: 178/178 ✓
   - EDUCATION: 178/178 ✓
   - ENERGY: 178/178 ✓
   - ENTERTAINMENT: 178/178 ✓
   - FOOD: 178/178 ✓
   - HEALTHCARE: 178/178 ✓
   - INFRASTRUCTURE: 178/178 ✓
   - LIFESTYLE: 178/178 ✓
   - POLITICS: 178/178 ✓
   - SCIENCE: 178/178 ✓
   - TECHNOLOGY: 178/178 ✓
   - TRAVEL: 178/178 ✓

3. Quality spot-checks (10 random countries)
   - Randomly select 10 countries
   - For each, verify all 15 categories exist
   - Spot-check quality: length, issues, stories, appropriate voice
   - Generate quality assessment

4. Statistical summary
   - Total writeups: 2,670
   - Coverage: 100%
   - Total characters written: ~X million
   - Improvement: 53.56% → 100% (+46.44%)
   - New writeups: 1,240
   - Sessions: 14
   - Total cost: ~$XXX
   - Total time: ~X hours

5. Generate FINAL_COMPLETION_REPORT.md
   - Journey: From 53% to 100%
   - Phase breakdowns and milestones
   - Final statistics and metrics
   - Quality assessment summary
   - Top 10 most interesting writeups discovered
   - Lessons learned
   - Recommendations for maintenance

6. Update project documentation
   - Update README.md with new statistics
   - Note 100% coverage achievement
   - Document maintenance recommendations

7. Celebrate! 🎉
   - Generate ascii art celebration
   - Create achievement summary
   - Suggest next steps for the project

When complete:
- Commit all reports and documentation
- Push to branch
- Create pull request with celebration message
- Summary: "🎉 100% COVERAGE ACHIEVED! 2,670 writeups across 178 countries × 15 categories!"

Reference: IMPROVEMENT_PLAN.md
```

---

## 📊 Quick Reference: Parallelization Strategy

### Optimal Execution Timeline

**Week 1:**
- **Day 1:** Session 1 (setup)
- **Day 2:** Sessions 2, 3, 4, 5 in parallel (4 simultaneous sessions)
- **Day 3:** Session 6 (verification)

**Week 2:**
- **Day 4:** Sessions 7, 8, 9 in parallel (3 simultaneous sessions)
- **Day 5:** Session 10 (verification)

**Week 3:**
- **Day 6:** Sessions 11, 12, 13 in parallel (3 simultaneous sessions)
- **Day 7:** Session 14 (final verification & celebration)

**Total Time:** 7 days with parallel execution vs. 14 days sequential

---

## 💡 Tips for Parallel Execution

1. **Copy full prompt** into each new Claude Code session
2. **Wait for Session 1** to complete before starting Group 2
3. **Monitor git branch** - all sessions push to same branch
4. **Resolve conflicts** if multiple sessions modify same files
5. **Check completion** before moving to next group
6. **Budget tracking** - each session logs estimated cost

---

## ⚠️ Important Notes

- All sessions use branch: `claude/initial-setup-019K8JbGjeSt5CkyAbU6HPqr`
- Rate limiting (1 sec/call) is critical - don't remove it
- If API fails, implement exponential backoff retry
- Commit and push after each session completes
- Generate reports for tracking progress

---

Ready to start? Begin with Session 1 prompt above! 🚀
