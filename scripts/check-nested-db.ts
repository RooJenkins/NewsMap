import Database from 'better-sqlite3';

try {
  const db = new Database('./prisma/prisma/dev.db', { readonly: true });

  // Check categories
  const categories = db.prepare(`
    SELECT category, COUNT(*) as count
    FROM LocationSummary
    GROUP BY category
    ORDER BY category
  `).all();

  console.log('\n=== prisma/prisma/dev.db ===');
  console.log('Categories:');
  categories.forEach((row: any) => {
    console.log(`  ${row.category}: ${row.count} entries`);
  });

  const total = db.prepare('SELECT COUNT(*) as count FROM LocationSummary').get() as any;
  console.log(`Total: ${total.count} entries`);

  db.close();
} catch (error: any) {
  console.error('Error:', error.message);

  // Try installing better-sqlite3 if not available
  if (error.message.includes('Cannot find module')) {
    console.log('\nInstalling better-sqlite3...');
    require('child_process').execSync('npm install better-sqlite3', { stdio: 'inherit' });
  }
}
