import Database from 'better-sqlite3';

// Check all the databases we've found
const databases = [
  { name: 'Current Main DB', path: './prisma/dev.db' },
  { name: 'Nested DB', path: './prisma/prisma/dev.db' },
  { name: 'Politics Complete (a641655)', path: '/tmp/politics-complete.db' },
];

console.log('=== COMPREHENSIVE DATABASE AUDIT ===\n');

for (const { name, path } of databases) {
  try {
    const db = new Database(path, { readonly: true });

    const categories = db.prepare(`
      SELECT category, COUNT(*) as count
      FROM LocationSummary
      GROUP BY category
      ORDER BY category
    `).all();

    const total = db.prepare('SELECT COUNT(*) as count FROM LocationSummary').get() as any;

    console.log(`\n📊 ${name}`);
    console.log(`   Path: ${path}`);
    console.log(`   Total: ${total.count} entries`);
    console.log('   Categories:');

    categories.forEach((row: any) => {
      const status = row.count === 128 ? '✅' : row.count >= 100 ? '⚠️' : '❌';
      console.log(`     ${status} ${row.category}: ${row.count}`);
    });

    db.close();
  } catch (error: any) {
    console.log(`\n❌ ${name}`);
    console.log(`   Error: ${error.message}`);
  }
}

// Now check what the frontend actually requires
console.log('\n\n=== FRONTEND REQUIREMENTS ===\n');
const required = [
  'all', 'politics', 'economy', 'technology', 'climate',
  'culture', 'sports', 'infrastructure', 'science',
  'education', 'healthcare', 'military', 'crime', 'energy'
];

console.log('Required 14 categories (from MapViewLocations.tsx):');
required.forEach((cat, i) => {
  console.log(`  ${i + 1}. ${cat}`);
});
