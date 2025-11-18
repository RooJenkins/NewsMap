import Database from 'better-sqlite3';

const dbs = [
  { name: 'Current (Our extractions)', path: './prisma/dev.db' },
  { name: 'Latest Main (Their merges)', path: '/tmp/newest-main.db' }
];

for (const { name, path } of dbs) {
  try {
    const db = new Database(path, { readonly: true });

    const categories = db.prepare(`
      SELECT category, COUNT(*) as count
      FROM LocationSummary
      GROUP BY category
      ORDER BY category
    `).all();

    const total = db.prepare('SELECT COUNT(*) as count FROM LocationSummary').get() as any;

    console.log(`\n=== ${name} ===`);
    console.log(`Total: ${total.count} entries\n`);

    categories.forEach((row: any) => {
      const status = row.count >= 128 ? '✅' : row.count >= 100 ? '⚠️' : row.count >= 30 ? '🔶' : '❌';
      console.log(`  ${status} ${row.category}: ${row.count}`);
    });

    db.close();
  } catch (error: any) {
    console.error(`❌ ${name}: ${error.message}`);
  }
}
