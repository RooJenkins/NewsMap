import Database from 'better-sqlite3';

try {
  const db = new Database('/tmp/climate-commit.db', { readonly: true });

  const categories = db.prepare(`
    SELECT category, COUNT(*) as count
    FROM LocationSummary
    GROUP BY category
    ORDER BY category
  `).all();

  console.log('\n=== Database from Climate Commit (ec59982) ===');
  console.log('This commit says: "Generated climate writeups for all 128 countries"');
  console.log('Modified: prisma/dev.db\n');
  console.log('Categories:');

  categories.forEach((row: any) => {
    const status = row.count === 128 ? '✅' : row.count >= 100 ? '⚠️' : '❌';
    console.log(`  ${status} ${row.category}: ${row.count}`);
  });

  const total = db.prepare('SELECT COUNT(*) as count FROM LocationSummary').get() as any;
  console.log(`\nTotal: ${total.count} entries`);

  // Check if climate exists
  const climate = db.prepare('SELECT COUNT(*) as count FROM LocationSummary WHERE category = ?').get('climate') as any;
  console.log(`\n🔍 Climate category: ${climate.count} entries`);

  db.close();
} catch (error: any) {
  console.error('Error:', error.message);
}
