import Database from 'better-sqlite3';

try {
  const db = new Database('/tmp/military-humanrights.db', { readonly: true });

  const categories = db.prepare(`
    SELECT category, COUNT(*) as count
    FROM LocationSummary
    GROUP BY category
    ORDER BY category
  `).all();

  console.log('\n=== Database from commit 6c0be8a (Military + Human Rights + Real Estate) ===');
  console.log('Categories:');
  categories.forEach((row: any) => {
    console.log(`  ${row.category}: ${row.count} entries`);
  });

  const total = db.prepare('SELECT COUNT(*) as count FROM LocationSummary').get() as any;
  console.log(`Total: ${total.count} entries\n`);

  db.close();
} catch (error: any) {
  console.error('Error:', error.message);
}
