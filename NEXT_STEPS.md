# Next Steps for NewsMap Cleanup

## ✅ Completed
- Database analysis and consolidation
- 10/14 categories now complete (1,280 entries)
- Analysis scripts created
- Status reports generated
- Committed and pushed to `claude/review-and-cleanup-01ArfTw9rBzxF9arDHG2irnu`

## 🎯 Remaining Tasks

### Priority 1: Generate Missing Categories
**Time Estimate:** 2-3 hours
**Impact:** High - Gets application to 100% functionality

Generate writeups for 5 missing categories (640 total entries):
1. **politics** (128 countries) - Rest is Politics style
2. **economy** (128 countries) - Financial Times analysis style
3. **technology** (128 countries) - Tech journalism style
4. **climate** (128 countries) - Climate journalism style
5. **military** (128 countries) - Defense analysis style

**Why urgent:** Frontend expects all 14 categories. Currently 5 category buttons won't work.

### Priority 2: Repository Cleanup
**Time Estimate:** 30-45 minutes
**Impact:** Medium - Improves maintainability

Tasks:
1. Create `/docs` folder structure:
   - `/docs/reports/` - Move 76 .md report files here
   - `/docs/archive/` - Historical documentation

2. Clean up `/scripts` folder:
   - Create `/scripts/archive/` for one-off generation scripts
   - Keep only actively used scripts in `/scripts/`
   - Document what each script does

3. Remove duplicate/wrong database:
   - `prisma/prisma/dev.db` (2.3MB) - wrong path, should be removed
   - Add to .gitignore to prevent future issues

4. Clean up temporary files:
   - `prisma/dev.db.backup` - keep locally, don't commit

### Priority 3: Data Quality
**Time Estimate:** 45-60 minutes
**Impact:** Medium - Ensures data consistency

Tasks:
1. Investigate why 178 unique countries instead of 128
2. Standardize country names across all categories
3. Ensure all 14 categories use identical country list
4. Remove any test/incomplete entries

### Priority 4: Documentation
**Time Estimate:** 30 minutes
**Impact:** Low - But important for handoff

Tasks:
1. Update README.md with:
   - Current project status
   - How to add new categories
   - Database structure
   - Development workflow

2. Create ARCHITECTURE.md:
   - System overview
   - Data flow
   - Category generation process
   - Frontend integration

## 📝 Notes

### Database Path Issue
Recent sessions (PRs #15, #19, #20) mistakenly wrote to `prisma/prisma/dev.db` instead of `prisma/dev.db`. This has been corrected in the consolidation, but the duplicate file remains and should be removed in cleanup phase.

### File Uncommitted
- `prisma/prisma/dev.db` - Modified but not committed (wrong path, will be removed)
- `prisma/dev.db.backup` - Untracked backup (keep locally, don't commit)

## 🚀 Recommended Order

**Option A: Fast Track to Working App**
1. Generate missing categories (2-3 hrs) → Full functionality
2. Quick cleanup (30 min) → Clean repo
3. Commit & push → Done

**Option B: Clean First**
1. Repository cleanup (30 min) → Organized workspace
2. Generate missing categories (2-3 hrs) → Full functionality
3. Data quality pass (45 min) → Polished
4. Documentation (30 min) → Complete
5. Commit & push → Done

**My Recommendation:** Option A - Get the app fully working first, then clean up. Users care more about functionality than tidy folders.

## 📊 Current Status Summary

```
Database: 1,280 / 1,792 entries (71% complete)
Categories: 10 / 14 (71% complete)
Documentation: 76 files in wrong location
Scripts: ~200+ scripts, many redundant
Quality: Some inconsistency in country names
```

**Next Command:** Would you like me to start generating the missing categories, or do repository cleanup first?
