# NewsMap Cleanup Analysis

## Executive Summary

After analyzing the repository and database state, I've identified significant issues from multiple parallel development sessions that need to be resolved.

## Database State Issues

### Current Database (`prisma/dev.db` - 13MB)
**Categories present:**
- all: 128 countries
- culture: 128 countries
- entertainment: 128 countries
- science: 128 countries
- sports: 128 countries
- **Total: 640 entries**

### Historical Database (commit 751959d)
**Categories in that version:**
- all: 148 countries
- education: 128 countries
- healthcare: 128 countries
- climate: 2 countries
- economy: 2 countries
- politics: 2 countries
- technology: 2 countries
- **Total: 412 entries**

### Missing Database Path Issue
Recent PRs (#15, #19, #20) added data to `prisma/prisma/dev.db` instead of `prisma/dev.db`:
- PR #15: POLITICS writeups (128 countries) → went to wrong database
- PR #19: LIFESTYLE writeups (128 countries) → went to wrong database
- PR #20: ENTERTAINMENT writeups (128 countries) → partially in correct DB

## Frontend Requirements

The application expects these 14 categories (from `components/MapViewLocations.tsx:391-406`):

1. ✅ **all** - Present (128 countries)
2. ❌ **politics** - Missing (was added to wrong DB path)
3. ❌ **economy** - Missing (only 2 test entries in old DB)
4. ❌ **technology** - Missing (only 2 test entries in old DB)
5. ❌ **climate** - Missing (only 2 test entries in old DB)
6. ✅ **culture** - Present (128 countries)
7. ✅ **sports** - Present (128 countries)
8. ❌ **infrastructure** - Missing (PR in progress?)
9. ✅ **science** - Present (128 countries)
10. ❌ **education** - Missing (present in old DB, lost in merges)
11. ❌ **healthcare** - Missing (present in old DB, lost in merges)
12. ❌ **military** - Missing
13. ❌ **crime** - Missing (scripts exist in /scripts folder)
14. ❌ **energy** - Missing (scripts exist in /scripts folder)

## Additional Issues

### Repository Clutter
- **76 markdown files** in root directory (progress reports, completion reports, generation reports)
- Hundreds of scripts in `/scripts` folder, many duplicates or one-off generation scripts
- Multiple JSON data files scattered around

### Data Inconsistencies
- 170 unique country names in database but only 128 should be the target
- Different category sets have different country lists
- Name inconsistencies between categories

## Recommended Actions

### 1. Database Consolidation (HIGH PRIORITY)
- Extract all valid category data from all sources
- Identify the canonical 128-country list
- Rebuild database with all categories properly aligned
- Ensure consistent country naming across categories

### 2. Missing Categories (HIGH PRIORITY)
Need to generate or recover:
- politics (lost in wrong DB path)
- economy (need to generate)
- technology (need to generate)
- climate (need to generate)
- infrastructure (check existing PR/branch)
- education (recover from commit 751959d)
- healthcare (recover from commit 751959d)
- military (check if exists anywhere)
- crime (scripts exist, may need to run)
- energy (scripts exist, may need to run)

### 3. Repository Cleanup (MEDIUM PRIORITY)
- Create `/docs/reports/` folder and move all .md reports there
- Create `/docs/archive/` for historical documentation
- Clean up `/scripts` folder - archive one-off generation scripts
- Remove duplicate database file at `prisma/prisma/dev.db`

### 4. Data Quality (MEDIUM PRIORITY)
- Standardize to exactly 128 countries across all categories
- Fix country name inconsistencies
- Remove test/incomplete entries

## Next Steps

Would you like me to:
1. **Consolidate the database immediately** - merge all available category data
2. **Generate missing categories** - create writeups for the 8 missing categories
3. **Both** - fix database then generate missing categories
4. **Cleanup first** - organize files, then tackle database

Please advise on priority and I'll proceed accordingly.
