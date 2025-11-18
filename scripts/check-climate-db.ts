import Database from 'better-sqlite3';

try {
  const db = new Database('/tmp/climate-branch.db', { readonly: true });

  const categories = db.prepare(`
    SELECT category, COUNT(*) as count
    FROM LocationSummary
    GROUP BY category
    ORDER BY category
  `).all();

  console.log('\n=== Climate Branch Database ===');
  console.log('Categories:');
  categories.forEach((row: any) => {
    const status = row.count === 128 ? '✅' : row.count >= 100 ? '⚠️' : '❌';
    console.log(`  ${status} ${row.category}: ${row.count}`);
  });

  const total = db.prepare('SELECT COUNT(*) as count FROM LocationSummary').get() as any;
  console.log(`\nTotal: ${total.count} entries`);

  db.close();
} catch (error: any) {
  console.error('Error:', error.message);
}
