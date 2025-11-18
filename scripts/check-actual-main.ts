import Database from 'better-sqlite3';

try {
  const db = new Database('/tmp/actual-main-head.db', { readonly: true });

  const categories = db.prepare(`
    SELECT category, COUNT(*) as count
    FROM LocationSummary
    GROUP BY category
    ORDER BY category
  `).all();

  console.log('\n=== Actual Main HEAD Database (commit 9d31531) ===');
  console.log('Categories:');
  categories.forEach((row: any) => {
    console.log(`  ${row.category}: ${row.count} entries`);
  });

  const total = db.prepare('SELECT COUNT(*) as count FROM LocationSummary').get() as any;
  console.log(`\nTotal: ${total.count} entries`);

  db.close();
} catch (error: any) {
  console.error('Error:', error.message);
}
