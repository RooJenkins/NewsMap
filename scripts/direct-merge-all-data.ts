/**
 * Direct SQLite merge - bypassing Prisma completely
 * This will merge all data from main DB + nested DB + politics DB
 */

import Database from 'better-sqlite3';

async function directMerge() {
  console.log('=== DIRECT DATABASE MERGE (SQLite only) ===\n');

  // Open main database for writing
  const mainDb = new Database('./prisma/dev.db');

  console.log('📊 Current main database:');
  const currentTotal = mainDb.prepare('SELECT COUNT(*) as count FROM LocationSummary').get() as any;
  console.log(`   Total entries: ${currentTotal.count}`);

  const currentCats = mainDb.prepare(`
    SELECT category, COUNT(*) as count
    FROM LocationSummary
    GROUP BY category
    ORDER BY category
  `).all();
  currentCats.forEach((row: any) => {
    console.log(`   ${row.category}: ${row.count}`);
  });

  // Open source databases
  console.log('\n📦 Opening source databases...');
  const nestedDb = new Database('./prisma/prisma/dev.db', { readonly: true });
  const politicsDb = new Database('/tmp/politics-complete.db', { readonly: true });

  let totalInserted = 0;

  // Merge culture from nested DB
  console.log('\n1️⃣ Merging CULTURE...');
  const cultureEntries = nestedDb.prepare(`
    SELECT * FROM LocationSummary WHERE category = 'culture'
  `).all();
  console.log(`   Found ${cultureEntries.length} culture entries`);

  let inserted = 0;
  const insertStmt = mainDb.prepare(`
    INSERT OR IGNORE INTO LocationSummary
    (id, name, type, country, lat, lng, category, summary, issues, topStories, storyCount, createdAt, updatedAt)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `);

  for (const entry of cultureEntries) {
    const result = insertStmt.run(
      entry.id, entry.name, entry.type, entry.country,
      entry.lat, entry.lng, entry.category, entry.summary,
      entry.issues, entry.topStories, entry.storyCount || 0,
      entry.createdAt, entry.updatedAt
    );
    if (result.changes > 0) inserted++;
  }
  console.log(`   ✅ Inserted ${inserted} new entries`);
  totalInserted += inserted;

  // Merge sports from nested DB
  console.log('\n2️⃣ Merging SPORTS...');
  let sportsEntries = nestedDb.prepare(`
    SELECT * FROM LocationSummary WHERE category = 'sports'
  `).all();

  if (sportsEntries.length === 0) {
    sportsEntries = nestedDb.prepare(`
      SELECT * FROM LocationSummary WHERE category = 'sport'
    `).all();
  }
  console.log(`   Found ${sportsEntries.length} sports entries`);

  inserted = 0;
  for (const entry of sportsEntries) {
    const result = insertStmt.run(
      entry.id, entry.name, entry.type, entry.country,
      entry.lat, entry.lng, 'sports',  // Always use 'sports'
      entry.summary, entry.issues, entry.topStories,
      entry.storyCount || 0, entry.createdAt, entry.updatedAt
    );
    if (result.changes > 0) inserted++;
  }
  console.log(`   ✅ Inserted ${inserted} new entries`);
  totalInserted += inserted;

  // Merge politics from politics DB
  console.log('\n3️⃣ Merging POLITICS...');
  const politicsEntries = politicsDb.prepare(`
    SELECT * FROM LocationSummary WHERE category = 'politics'
  `).all();
  console.log(`   Found ${politicsEntries.length} politics entries`);

  // First delete test politics entries
  const deleteResult = mainDb.prepare(`
    DELETE FROM LocationSummary WHERE category = 'politics' AND storyCount = 0
  `).run();
  console.log(`   🗑️  Deleted ${deleteResult.changes} test entries`);

  inserted = 0;
  for (const entry of politicsEntries) {
    const result = insertStmt.run(
      entry.id, entry.name, entry.type, entry.country,
      entry.lat, entry.lng, entry.category, entry.summary,
      entry.issues, entry.topStories, entry.storyCount || 0,
      entry.createdAt, entry.updatedAt
    );
    if (result.changes > 0) inserted++;
  }
  console.log(`   ✅ Inserted ${inserted} new entries`);
  totalInserted += inserted;

  nestedDb.close();
  politicsDb.close();

  // Final count
  console.log('\n' + '='.repeat(70));
  console.log('📊 FINAL DATABASE STATUS:');
  console.log('='.repeat(70));

  const finalTotal = mainDb.prepare('SELECT COUNT(*) as count FROM LocationSummary').get() as any;
  console.log(`\n📈 Total entries: ${finalTotal.count} (was ${currentTotal.count}, added ${totalInserted})\n`);

  const finalCats = mainDb.prepare(`
    SELECT category, COUNT(*) as count
    FROM LocationSummary
    GROUP BY category
    ORDER BY category
  `).all();

  console.log('All categories:');
  finalCats.forEach((row: any) => {
    const status = row.count >= 128 ? '✅' : row.count >= 100 ? '⚠️' : '❌';
    console.log(`  ${status} ${row.category}: ${row.count}`);
  });

  mainDb.close();

  console.log('\n✅ Direct merge complete!\n');
}

directMerge().catch((error) => {
  console.error('❌ Error:', error);
  process.exit(1);
});
