import Database from 'better-sqlite3';

try {
  const db = new Database('/tmp/latest-main.db', { readonly: true });

  const categories = db.prepare(`
    SELECT category, COUNT(*) as count
    FROM LocationSummary
    GROUP BY category
    ORDER BY category
  `).all();

  console.log('\n=== LATEST origin/main Database (18c4b3b) ===');
  console.log('Includes PRs #18 (infrastructure) and #21 (climate)');
  console.log('\nCategories:');

  let complete = 0;
  let partial = 0;
  let missing = 0;

  categories.forEach((row: any) => {
    const status = row.count === 128 ? '✅' :
                   row.count >= 100 ? '⚠️' : '❌';
    console.log(`  ${status} ${row.category}: ${row.count}`);

    if (row.count === 128) complete++;
    else if (row.count >= 100) partial++;
    else missing++;
  });

  const total = db.prepare('SELECT COUNT(*) as count FROM LocationSummary').get() as any;
  console.log(`\n📊 Total: ${total.count} entries`);
  console.log(`   Complete (128): ${complete} categories`);
  console.log(`   Partial (100-127): ${partial} categories`);
  console.log(`   Incomplete (<100): ${missing} categories`);

  db.close();
} catch (error: any) {
  console.error('Error:', error.message);
}
