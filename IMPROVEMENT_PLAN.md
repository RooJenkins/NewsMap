# NewsMap Database Coverage Improvement Plan

**Created:** November 14, 2025
**Current Coverage:** 53.56% (1,430 / 2,670 possible writeups)
**Goal:** 100% coverage across all 178 countries × 15 categories

---

## 📊 Current State Analysis

### Coverage Statistics
- **Total Countries:** 178
- **Total Categories:** 15
- **Total Writeups:** 1,430
- **Coverage:** 53.56%
- **Countries with Complete Coverage:** 0

### Critical Gaps (Phase 1 Priority)
Four categories severely underdeveloped (~99% missing):

| Category | Current | Needed | % Coverage |
|----------|---------|--------|------------|
| **CLIMATE** | 2/178 | 176 | 1.1% |
| **ECONOMY** | 2/178 | 176 | 1.1% |
| **POLITICS** | 2/178 | 176 | 1.1% |
| **TECHNOLOGY** | 2/178 | 176 | 1.1% |

**Impact:** These 4 categories represent **704 missing writeups** (52% of total gap)

### Well-Covered Categories
These have 72-83% coverage:
- ALL (148/178) - 83%
- INFRASTRUCTURE (148/178) - 83%
- SCIENCE (140/178) - 79%
- CRIME, EDUCATION, ENERGY, FOOD, HEALTHCARE, TRAVEL (128/178) - 72%

### Moderately Covered
- LIFESTYLE (114/178) - 64%
- ENTERTAINMENT (104/178) - 58%

---

## 🎯 Strategic Approach

### Why This Matters
1. **High Impact:** 4 critical categories = 52% of total gap
2. **Efficient:** Single script template works for all 4 categories
3. **Fast Execution:** ~3-4 minutes per category batch (176 countries × 1 second)
4. **Cost Effective:** Bulk generation is cheaper than incremental

### Session-Based Execution Plan
Breaking work into Claude sessions to avoid timeouts and manage complexity.

---

## 📋 PHASE 1: Critical Category Generation (Sessions 1-6)

**Goal:** Complete CLIMATE, ECONOMY, POLITICS, TECHNOLOGY for 176 countries

### Session 1: Infrastructure Setup (THIS SESSION)
**Duration:** 30-45 minutes
**Cost Estimate:** $5-8

**Tasks:**
1. ✅ Create comprehensive improvement plan (this document)
2. Create utility scripts:
   - `scripts/analyze-coverage.ts` - Full coverage matrix analysis
   - `scripts/generate-priority-report.ts` - Prioritized action plan
   - `scripts/get-all-countries.ts` - Extract country list from database
3. Run coverage analysis to baseline current state
4. Create country lists for batch processing

**Deliverables:**
- [ ] IMPROVEMENT_PLAN.md (this file)
- [ ] scripts/analyze-coverage.ts
- [ ] scripts/generate-priority-report.ts
- [ ] scripts/get-all-countries.ts
- [ ] data/country-list.json (178 countries with coordinates)
- [ ] BASELINE_COVERAGE_REPORT.md

---

### Session 2: CLIMATE Category (176 countries)
**Duration:** 20-30 minutes
**Cost Estimate:** $15-25 (176 API calls)

**Tasks:**
1. Create `scripts/batch-generate-climate.ts`
2. Generate climate writeups for all 176 countries (excluding China, USA)
3. Verify all writeups saved correctly
4. Generate progress report

**Technical Details:**
```typescript
// Template structure
- Batch size: 176 countries
- Category: "climate"
- Rate limit: 1 second between calls
- Estimated time: 3 minutes (176 seconds)
- Error handling: Retry failed calls up to 3 times
```

**Deliverables:**
- [ ] scripts/batch-generate-climate.ts
- [ ] 176 new CLIMATE writeups in database
- [ ] CLIMATE_GENERATION_REPORT.md

---

### Session 3: ECONOMY Category (176 countries)
**Duration:** 20-30 minutes
**Cost Estimate:** $15-25 (176 API calls)

**Tasks:**
1. Create `scripts/batch-generate-economy.ts`
2. Generate economy writeups for all 176 countries
3. Verify all writeups saved correctly
4. Generate progress report

**Deliverables:**
- [ ] scripts/batch-generate-economy.ts
- [ ] 176 new ECONOMY writeups in database
- [ ] ECONOMY_GENERATION_REPORT.md

---

### Session 4: POLITICS Category (176 countries)
**Duration:** 20-30 minutes
**Cost Estimate:** $15-25 (176 API calls)

**Tasks:**
1. Create `scripts/batch-generate-politics.ts`
2. Generate politics writeups for all 176 countries
3. Verify all writeups saved correctly
4. Generate progress report

**Deliverables:**
- [ ] scripts/batch-generate-politics.ts
- [ ] 176 new POLITICS writeups in database
- [ ] POLITICS_GENERATION_REPORT.md

---

### Session 5: TECHNOLOGY Category (176 countries)
**Duration:** 20-30 minutes
**Cost Estimate:** $15-25 (176 API calls)

**Tasks:**
1. Create `scripts/batch-generate-technology.ts`
2. Generate technology writeups for all 176 countries
3. Verify all writeups saved correctly
4. Generate progress report

**Deliverables:**
- [ ] scripts/batch-generate-technology.ts
- [ ] 176 new TECHNOLOGY writeups in database
- [ ] TECHNOLOGY_GENERATION_REPORT.md

---

### Session 6: Phase 1 Verification & Analysis
**Duration:** 15-20 minutes
**Cost Estimate:** $3-5

**Tasks:**
1. Run comprehensive coverage analysis
2. Verify all 704 new writeups (4 categories × 176 countries)
3. Identify any failed generations
4. Retry any failures
5. Generate Phase 1 completion report
6. Calculate new coverage percentage

**Expected Outcome:**
- Coverage increase: 53.56% → **80.00%** (+26.44%)
- New writeups: 1,430 → 2,134 (+704)

**Deliverables:**
- [ ] PHASE_1_COMPLETION_REPORT.md
- [ ] Updated coverage statistics
- [ ] List of any failures requiring manual review

---

## 📋 PHASE 2: Complete Well-Started Categories (Sessions 7-10)

**Goal:** Finish categories with 70%+ coverage

### Session 7: SCIENCE Completion (38 countries)
**Duration:** 15-20 minutes
**Cost Estimate:** $8-12

Complete SCIENCE for remaining 38 countries (currently 140/178)

---

### Session 8: ALL & INFRASTRUCTURE (30 countries each)
**Duration:** 20-25 minutes
**Cost Estimate:** $12-18

Complete ALL and INFRASTRUCTURE categories (currently 148/178 each)

---

### Session 9: Core Services Bundle (50 countries)
**Duration:** 20-25 minutes
**Cost Estimate:** $12-18

Complete CRIME, EDUCATION, ENERGY, FOOD, HEALTHCARE, TRAVEL for the 50 most important missing countries

---

### Session 10: Phase 2 Verification
**Duration:** 15-20 minutes
**Cost Estimate:** $3-5

Verify Phase 2 completion and generate updated coverage report

**Expected Outcome:**
- Coverage increase: 80.00% → **92.00%** (+12%)
- New writeups: 2,134 → 2,456 (+322)

---

## 📋 PHASE 3: Fill Remaining Gaps (Sessions 11-14)

**Goal:** Complete all remaining categories to 100%

### Session 11: LIFESTYLE Completion (64 countries)
**Duration:** 20-25 minutes
**Cost Estimate:** $15-20

Complete LIFESTYLE category (currently 114/178)

---

### Session 12: ENTERTAINMENT Completion (74 countries)
**Duration:** 25-30 minutes
**Cost Estimate:** $18-25

Complete ENTERTAINMENT category (currently 104/178)

---

### Session 13: Final Gap Fill
**Duration:** 20-30 minutes
**Cost Estimate:** $15-25

Generate any remaining missing writeups identified in verification

---

### Session 14: Final Verification & Celebration 🎉
**Duration:** 20-25 minutes
**Cost Estimate:** $5-8

**Tasks:**
1. Run final comprehensive coverage analysis
2. Verify 100% completion (2,670 writeups)
3. Generate quality spot-checks on random samples
4. Create final completion report
5. Document lessons learned
6. Update README with new statistics

**Expected Outcome:**
- Coverage: **100%** (2,670 writeups)
- All 178 countries × 15 categories complete

---

## 💰 Total Cost & Time Estimates

### Summary
| Phase | Sessions | Duration | API Calls | Cost Estimate |
|-------|----------|----------|-----------|---------------|
| Phase 1 | 6 | 2-3 hours | 704 | $50-85 |
| Phase 2 | 4 | 1-2 hours | 322 | $35-53 |
| Phase 3 | 4 | 1.5-2 hours | 214 | $48-78 |
| **TOTAL** | **14** | **4.5-7 hours** | **1,240** | **$133-216** |

### Per-Session Breakdown
- Average duration: 20-30 minutes
- Average cost: $10-15 per session
- Total sessions: 14
- Can be completed over 2-3 weeks (1-2 sessions per day)

### Cost Optimization Notes
- Using Claude Sonnet 4 (latest model)
- Batch processing reduces overhead
- 1-second delays prevent rate limit charges
- All work done in-session (no API credits needed)

---

## 🛠️ Technical Implementation Details

### Generation Script Template

```typescript
// Universal pattern for batch generation
import Anthropic from '@anthropic-ai/sdk'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
})

const COUNTRIES = [/* 176 countries with lat/lng */]
const CATEGORY = 'climate' // or 'economy', 'politics', 'technology'

async function generateCategorySummary(country) {
  // 1. Fetch relevant stories from database
  // 2. Build AI prompt with category-specific voice
  // 3. Call Anthropic API
  // 4. Parse response (summary, issues, topStories)
  // 5. Upsert to database
  // 6. Wait 1 second (rate limiting)
}

async function main() {
  let successCount = 0
  let failureCount = 0
  const failures = []

  for (const country of COUNTRIES) {
    try {
      await generateCategorySummary(country)
      successCount++
      console.log(`✅ ${successCount}/${COUNTRIES.length}`)
    } catch (error) {
      failureCount++
      failures.push({ country, error })
      console.error(`❌ Failed: ${country.name}`)
    }

    // Rate limiting
    await new Promise(resolve => setTimeout(resolve, 1000))
  }

  console.log(`\n✅ Complete: ${successCount} success, ${failureCount} failures`)
  if (failures.length > 0) {
    console.log('\n❌ Failures:', failures)
  }
}
```

### Category-Specific Prompts

#### CLIMATE
```
Voice: Climate scientist / environmental journalist
Tone: Urgent but factual, solutions-oriented
Focus: Climate risks, emissions, adaptation, renewable energy, extreme weather
Length: 2,500-3,500 characters
```

#### ECONOMY
```
Voice: Financial Times / The Economist style
Tone: Analytical, data-driven, global context
Focus: GDP, trade, industries, fiscal policy, business environment, economic outlook
Length: 2,500-3,500 characters
```

#### POLITICS
```
Voice: Political analyst / foreign correspondent
Tone: Balanced, informed, historical context
Focus: Government structure, leadership, parties, recent elections, political stability
Length: 2,500-3,500 characters
```

#### TECHNOLOGY
```
Voice: Tech industry analyst (Ben Thompson / Stratechery style)
Tone: Forward-looking, practical, innovation-focused
Focus: Tech sector, startups, digital infrastructure, AI/tech adoption, innovation hubs
Length: 2,500-3,500 characters
```

### Error Handling Strategy

```typescript
// Retry logic for failed generations
async function generateWithRetry(country, maxRetries = 3) {
  for (let i = 0; i < maxRetries; i++) {
    try {
      return await generateCategorySummary(country)
    } catch (error) {
      if (i === maxRetries - 1) throw error
      console.log(`⚠️  Retry ${i + 1}/${maxRetries} for ${country.name}`)
      await new Promise(resolve => setTimeout(resolve, 2000))
    }
  }
}
```

### Progress Tracking

```typescript
// Save progress after each batch of 25 countries
interface Progress {
  category: string
  completed: number
  total: number
  failures: string[]
  lastUpdated: string
}

// Write to data/progress-{category}.json
```

---

## 📈 Success Metrics

### Coverage Targets
- [ ] Phase 1: 80% coverage (2,134 writeups)
- [ ] Phase 2: 92% coverage (2,456 writeups)
- [ ] Phase 3: 100% coverage (2,670 writeups)

### Quality Metrics
- [ ] All writeups 2,000-3,500 characters
- [ ] All writeups follow category style guides
- [ ] All writeups include 3-5 issues
- [ ] All writeups include 5-7 top stories
- [ ] No duplicate writeups
- [ ] No empty/failed generations

### Technical Metrics
- [ ] API success rate > 99%
- [ ] Average generation time < 2 seconds
- [ ] Database integrity maintained
- [ ] No rate limit violations

---

## 🚀 Getting Started - Session 1 Tasks

When you're ready to begin, we'll start with Session 1:

1. **Create utility scripts** (analyze-coverage.ts, generate-priority-report.ts)
2. **Run baseline analysis** to confirm current state
3. **Extract country list** from database
4. **Test single generation** to verify API connectivity
5. **Create Session 2 batch script** for CLIMATE category

---

## 📝 Notes & Considerations

### Why Not Generate All at Once?
- **Session timeouts:** 1,240 API calls would take 20+ minutes
- **Error recovery:** Easier to retry small batches
- **Progress tracking:** Clear checkpoints and milestones
- **Cost management:** Spread costs across multiple sessions
- **Quality control:** Verify each batch before proceeding

### Why This Order?
1. **Phase 1 (Critical categories):** Highest impact, easiest to verify
2. **Phase 2 (Nearly complete):** Quick wins, momentum building
3. **Phase 3 (Final gaps):** Long tail, lower priority categories

### Alternative Approaches Considered
❌ **Single mega-session:** Too risky, no checkpoints
❌ **Manual generation:** Too slow, inconsistent quality
❌ **Parallel execution:** Would violate rate limits
✅ **Phased batch approach:** Optimal balance of speed, safety, cost

---

## 🎯 Next Steps

**Ready to start?** Let me know and I'll begin Session 1:
1. Create the utility scripts
2. Run baseline coverage analysis
3. Set up country lists
4. Prepare for Phase 1 execution

**Questions?** I can explain:
- Any specific session in detail
- Technical implementation
- Cost breakdown
- Timeline adjustments
- Quality assurance approach

**Prefer different approach?** I can adjust:
- Session boundaries
- Category priorities
- Batch sizes
- Timeline pacing

---

**Let's get your NewsMap to 100% coverage!** 🗺️✨
