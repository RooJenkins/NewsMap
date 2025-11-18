import Database from 'better-sqlite3';
import * as fs from 'fs';

const db = new Database('./prisma/dev.db');

const jsonFiles = [
  './economy-batch-01.json',
  './economy-batch-02.json',
  './economy-batch-03.json',
  './economy-batch-04-large.json'
];

console.log('=== IMPORTING ECONOMY DATA FROM JSON FILES ===\n');

let totalImported = 0;

const insertStmt = db.prepare(`
  INSERT OR REPLACE INTO LocationSummary
  (id, name, type, country, lat, lng, category, summary, issues, topStories, storyCount, createdAt, updatedAt)
  VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
`);

for (const file of jsonFiles) {
  if (!fs.existsSync(file)) {
    console.log(`⚠️  ${file} not found, skipping...`);
    continue;
  }

  console.log(`📦 Processing ${file}...`);
  const data = JSON.parse(fs.readFileSync(file, 'utf-8'));

  if (!Array.isArray(data)) {
    console.log(`   ⚠️  Not an array, skipping...`);
    continue;
  }

  let imported = 0;
  for (const entry of data) {
    try {
      const result = insertStmt.run(
        entry.id || `economy-${entry.name}`,
        entry.name,
        entry.type || 'country',
        entry.country || entry.name,
        entry.lat || 0,
        entry.lng || 0,
        'economy',
        entry.summary || entry.writeup,
        JSON.stringify(entry.issues || []),
        JSON.stringify(entry.topStories || []),
        entry.storyCount || 0,
        entry.createdAt || new Date().toISOString(),
        entry.updatedAt || new Date().toISOString()
      );
      if (result.changes > 0) imported++;
    } catch (error: any) {
      console.error(`   ⚠️  ${entry.name}: ${error.message}`);
    }
  }

  console.log(`   ✅ Imported ${imported} entries from ${file}`);
  totalImported += imported;
}

console.log(`\n✅ Total economy entries imported: ${totalImported}`);

// Check final status
const economyCount = db.prepare('SELECT COUNT(*) as count FROM LocationSummary WHERE category = ?').get('economy') as any;
console.log(`📊 Economy category now has: ${economyCount.count} entries\n`);

db.close();
