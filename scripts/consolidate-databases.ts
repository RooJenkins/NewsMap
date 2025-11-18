import Database from 'better-sqlite3';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

/**
 * Database Consolidation Strategy:
 *
 * Source 1: Current prisma/dev.db (640 entries)
 *   - all: 128 ✅ BEST
 *   - culture: 128 ✅ BEST
 *   - entertainment: 128 ✅ BEST
 *   - science: 128 ✅ BEST
 *   - sports: 128 ✅ BEST
 *
 * Source 2: Commit 5efba11 database (1430 entries)
 *   - crime: 128 ✅ NEEDED
 *   - education: 128 ✅ NEEDED
 *   - energy: 128 ✅ NEEDED
 *   - healthcare: 128 ✅ NEEDED
 *   - infrastructure: 148 ✅ NEEDED (will trim to 128)
 *   - food: 128 (bonus)
 *   - travel: 128 (bonus)
 *   - lifestyle: 114 (bonus)
 *
 * Still Missing (need to generate):
 *   - politics: 2 entries in old DB → need 128
 *   - economy: 2 entries in old DB → need 128
 *   - technology: 2 entries in old DB → need 128
 *   - climate: 2 entries in old DB → need 128
 *   - military: 16 entries in old DB → need 128
 */

async function consolidate() {
  console.log('Starting database consolidation...\n');

  // Backup current database first
  console.log('✅ Creating backup at ./prisma/dev.db.backup');
  require('child_process').execSync('cp ./prisma/dev.db ./prisma/dev.db.backup');

  // Load the comprehensive database from commit 5efba11
  const oldDb = new Database('/tmp/crime-energy.db', { readonly: true });

  console.log('\nPhase 1: Analyzing current database...');
  const currentCategories = await prisma.locationSummary.groupBy({
    by: ['category'],
    _count: { category: true }
  });
  currentCategories.forEach(({ category, _count }) => {
    console.log(`  Current: ${category} = ${_count.category} entries`);
  });

  console.log('\nPhase 2: Extracting needed categories from old database...');
  const categoriesToImport = ['crime', 'education', 'energy', 'healthcare', 'infrastructure'];

  let totalImported = 0;
  for (const category of categoriesToImport) {
    const entries = oldDb.prepare(`
      SELECT * FROM LocationSummary
      WHERE category = ?
      ORDER BY name
    `).all(category);

    console.log(`\n  Processing ${category}: found ${entries.length} entries`);

    // If infrastructure or science, limit to 128
    let entriesToImport = entries;
    if (entries.length > 128) {
      console.log(`    → Limiting to first 128 entries`);
      entriesToImport = entries.slice(0, 128);
    }

    // Import each entry
    let imported = 0;
    for (const entry: any of entriesToImport) {
      try {
        // Check if entry already exists
        const existing = await prisma.locationSummary.findUnique({
          where: {
            name_type_category: {
              name: entry.name,
              type: entry.type,
              category: entry.category
            }
          }
        });

        if (!existing) {
          await prisma.locationSummary.create({
            data: {
              name: entry.name,
              type: entry.type,
              country: entry.country,
              lat: entry.lat,
              lng: entry.lng,
              category: entry.category,
              summary: entry.summary,
              issues: entry.issues,
              topStories: entry.topStories,
              storyCount: entry.storyCount || 0,
              createdAt: new Date(entry.createdAt),
              updatedAt: new Date(entry.updatedAt)
            }
          });
          imported++;
        }
      } catch (error: any) {
        console.error(`    ⚠️  Error importing ${entry.name}: ${error.message}`);
      }
    }

    console.log(`    ✅ Imported ${imported} new entries`);
    totalImported += imported;
  }

  oldDb.close();

  console.log(`\n✅ Phase 2 Complete: Imported ${totalImported} entries`);

  console.log('\nPhase 3: Final database status...');
  const finalCategories = await prisma.locationSummary.groupBy({
    by: ['category'],
    _count: { category: true },
    orderBy: { category: 'asc' }
  });

  console.log('\nFinal categories:');
  finalCategories.forEach(({ category, _count }) => {
    console.log(`  ${category}: ${_count.category} entries`);
  });

  const total = await prisma.locationSummary.count();
  console.log(`\nTotal entries: ${total}`);

  // List missing categories
  const requiredCategories = [
    'all', 'politics', 'economy', 'technology', 'climate',
    'culture', 'sports', 'infrastructure', 'science',
    'education', 'healthcare', 'military', 'crime', 'energy'
  ];

  const existingCategories = new Set(finalCategories.map(c => c.category));
  const missing = requiredCategories.filter(c => !existingCategories.has(c));

  if (missing.length > 0) {
    console.log(`\n⚠️  Missing categories (need to generate):`);
    missing.forEach(cat => console.log(`  - ${cat}`));
  } else {
    console.log(`\n✅ All required categories present!`);
  }

  await prisma.$disconnect();
  console.log('\n✅ Consolidation complete!');
}

consolidate().catch(console.error);
