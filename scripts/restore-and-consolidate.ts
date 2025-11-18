import Database from 'better-sqlite3';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

/**
 * CORRECTED Consolidation Strategy:
 *
 * The current HEAD database actually has MORE data (1430 entries) than
 * what I consolidated (1280 entries). I need to:
 *
 * 1. Restore the HEAD database (has 15 categories)
 * 2. Extract politics (128) from prisma/prisma/dev.db
 * 3. Extract lifestyle (128) to complete it
 * 4. Extract entertainment (128) to complete it
 * 5. Standardize all categories to 128 countries
 */

async function restoreAndConsolidate() {
  console.log('Restoring and consolidating databases...\n');

  // Backup current state
  console.log('✅ Creating backup of current state');
  require('child_process').execSync('cp ./prisma/dev.db ./prisma/dev.db.pre-restore');

  // Restore HEAD database (has 1430 entries with more categories)
  console.log('✅ Restoring HEAD database (1430 entries)');
  require('child_process').execSync('cp /tmp/current-head.db ./prisma/dev.db');

  // Check what we have now
  console.log('\n📊 Current database status after restore:');
  const currentCats = await prisma.locationSummary.groupBy({
    by: ['category'],
    _count: { category: true },
    orderBy: { category: 'asc' }
  });

  currentCats.forEach(({ category, _count }) => {
    const status = _count.category >= 128 ? '✅' : '⚠️';
    console.log(`  ${status} ${category}: ${_count.category} entries`);
  });

  const total = await prisma.locationSummary.count();
  console.log(`\n  Total: ${total} entries`);

  // Now extract missing data from nested database
  console.log('\n📦 Extracting data from prisma/prisma/dev.db...');
  const nestedDb = new Database('./prisma/prisma/dev.db', { readonly: true });

  const nestedCats = nestedDb.prepare(`
    SELECT category, COUNT(*) as count
    FROM LocationSummary
    GROUP BY category
  `).all();

  console.log('  Categories in nested database:');
  nestedCats.forEach((row: any) => {
    console.log(`    - ${row.category}: ${row.count} entries`);
  });

  // Extract politics if it has good data (128 entries)
  const politicsEntries = nestedDb.prepare(`
    SELECT * FROM LocationSummary
    WHERE category = 'politics'
    ORDER BY name
  `).all();

  if (politicsEntries.length === 128) {
    console.log(`\n✅ Found complete POLITICS data (128 entries) - importing...`);

    // Delete existing incomplete politics entries
    await prisma.locationSummary.deleteMany({
      where: { category: 'politics' }
    });

    // Import complete politics data
    let imported = 0;
    for (const entry: any of politicsEntries) {
      try {
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
      } catch (error: any) {
        if (!error.message.includes('Unique constraint')) {
          console.error(`    Error importing ${entry.name}: ${error.message}`);
        }
      }
    }
    console.log(`  ✅ Imported ${imported} politics entries`);
  }

  // Check for other complete categories in nested db
  const categoriesToCheck = ['lifestyle', 'entertainment', 'all'];
  for (const cat of categoriesToCheck) {
    const entries = nestedDb.prepare(`
      SELECT * FROM LocationSummary
      WHERE category = ?
      ORDER BY name
    `).all(cat);

    if (entries.length >= 128) {
      const current = await prisma.locationSummary.count({
        where: { category: cat }
      });

      if (entries.length > current) {
        console.log(`\n✅ Found better ${cat.toUpperCase()} data (${entries.length} vs ${current}) - importing...`);

        // Delete existing
        await prisma.locationSummary.deleteMany({
          where: { category: cat }
        });

        // Import new data (limit to 128)
        let imported = 0;
        for (const entry: any of entries.slice(0, 128)) {
          try {
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
          } catch (error: any) {
            if (!error.message.includes('Unique constraint')) {
              console.error(`    Error importing: ${error.message}`);
            }
          }
        }
        console.log(`  ✅ Imported ${imported} ${cat} entries`);
      }
    }
  }

  nestedDb.close();

  // Final status
  console.log('\n📊 FINAL DATABASE STATUS:\n');
  const finalCats = await prisma.locationSummary.groupBy({
    by: ['category'],
    _count: { category: true },
    orderBy: { category: 'asc' }
  });

  finalCats.forEach(({ category, _count }) => {
    const status = _count.category === 128 ? '✅' :
                   _count.category >= 100 ? '⚠️' : '❌';
    console.log(`  ${status} ${category}: ${_count.category} entries`);
  });

  const finalTotal = await prisma.locationSummary.count();
  console.log(`\n  Total: ${finalTotal} entries`);

  // Identify what still needs work
  const required = [
    'all', 'politics', 'economy', 'technology', 'climate',
    'culture', 'sports', 'infrastructure', 'science',
    'education', 'healthcare', 'military', 'crime', 'energy'
  ];

  const incomplete = [];
  for (const cat of required) {
    const count = await prisma.locationSummary.count({
      where: { category: cat }
    });
    if (count < 128) {
      incomplete.push(`${cat} (${count}/128)`);
    }
  }

  if (incomplete.length > 0) {
    console.log(`\n⚠️  Categories needing completion:`);
    incomplete.forEach(cat => console.log(`    - ${cat}`));
  } else {
    console.log(`\n✅ All required categories have 128 entries!`);
  }

  await prisma.$disconnect();
  console.log('\n✅ Restoration and consolidation complete!');
}

restoreAndConsolidate().catch(console.error);
