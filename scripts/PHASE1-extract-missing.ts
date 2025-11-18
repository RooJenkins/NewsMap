import Database from 'better-sqlite3';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient({
  datasources: {
    db: {
      url: 'file:./prisma/dev.db'
    }
  }
});

async function extractMissingCategories() {
  console.log('=== EXTRACTING CULTURE, SPORTS, AND POLITICS ===\n');

  let totalImported = 0;

  // Source 1: Nested DB (has culture and sports)
  console.log('📦 Opening nested database...');
  const nestedDb = new Database('./prisma/prisma/dev.db', { readonly: true });

  // Extract CULTURE
  console.log('\n1️⃣ CULTURE Category:');
  const cultureEntries = nestedDb.prepare(`
    SELECT * FROM LocationSummary
    WHERE category = 'culture'
    ORDER BY name
  `).all();
  console.log(`   Found ${cultureEntries.length} entries in nested DB`);

  let imported = 0;
  for (const entry: any of cultureEntries) {
    try {
      await prisma.$executeRaw`
        INSERT INTO LocationSummary (id, name, type, country, lat, lng, category, summary, issues, topStories, storyCount, createdAt, updatedAt)
        VALUES (${entry.id}, ${entry.name}, ${entry.type}, ${entry.country}, ${entry.lat}, ${entry.lng}, 'culture', ${entry.summary}, ${entry.issues}, ${entry.topStories}, ${entry.storyCount || 0}, ${new Date(entry.createdAt).toISOString()}, ${new Date(entry.updatedAt).toISOString()})
      `;
      imported++;
    } catch (error: any) {
      if (!error.message.includes('UNIQUE constraint')) {
        console.error(`   ⚠️  ${entry.name}: ${error.message.substring(0, 50)}`);
      }
    }
  }
  console.log(`   ✅ Imported ${imported} culture entries`);
  totalImported += imported;

  // Extract SPORTS (try both "sports" and "sport")
  console.log('\n2️⃣ SPORTS Category:');
  let sportsEntries = nestedDb.prepare(`
    SELECT * FROM LocationSummary
    WHERE category = 'sports'
    ORDER BY name
  `).all();

  if (sportsEntries.length === 0) {
    sportsEntries = nestedDb.prepare(`
      SELECT * FROM LocationSummary
      WHERE category = 'sport'
      ORDER BY name
    `).all();
  }
  console.log(`   Found ${sportsEntries.length} entries in nested DB`);

  imported = 0;
  for (const entry: any of sportsEntries) {
    try {
      await prisma.$executeRaw`
        INSERT INTO LocationSummary (id, name, type, country, lat, lng, category, summary, issues, topStories, storyCount, createdAt, updatedAt)
        VALUES (${entry.id}, ${entry.name}, ${entry.type}, ${entry.country}, ${entry.lat}, ${entry.lng}, 'sports', ${entry.summary}, ${entry.issues}, ${entry.topStories}, ${entry.storyCount || 0}, ${new Date(entry.createdAt).toISOString()}, ${new Date(entry.updatedAt).toISOString()})
      `;
      imported++;
    } catch (error: any) {
      if (!error.message.includes('UNIQUE constraint')) {
        console.error(`   ⚠️  ${entry.name}: ${error.message.substring(0, 50)}`);
      }
    }
  }
  console.log(`   ✅ Imported ${imported} sports entries`);
  totalImported += imported;

  nestedDb.close();

  // Source 2: Politics complete DB
  console.log('\n3️⃣ POLITICS Category:');
  console.log('   Opening politics database...');
  const politicsDb = new Database('/tmp/politics-complete.db', { readonly: true });

  const politicsEntries = politicsDb.prepare(`
    SELECT * FROM LocationSummary
    WHERE category = 'politics'
    ORDER BY name
  `).all();
  console.log(`   Found ${politicsEntries.length} entries in politics DB`);

  // First, delete the 2 test politics entries
  const deleted = await prisma.locationSummary.deleteMany({
    where: { category: 'politics' }
  });
  console.log(`   🗑️  Deleted ${deleted.count} test entries`);

  imported = 0;
  for (const entry: any of politicsEntries) {
    try {
      await prisma.$executeRaw`
        INSERT INTO LocationSummary (id, name, type, country, lat, lng, category, summary, issues, topStories, storyCount, createdAt, updatedAt)
        VALUES (${entry.id}, ${entry.name}, ${entry.type}, ${entry.country}, ${entry.lat}, ${entry.lng}, 'politics', ${entry.summary}, ${entry.issues}, ${entry.topStories}, ${entry.storyCount || 0}, ${new Date(entry.createdAt).toISOString()}, ${new Date(entry.updatedAt).toISOString()})
      `;
      imported++;
    } catch (error: any) {
      if (!error.message.includes('UNIQUE constraint')) {
        console.error(`   ⚠️  ${entry.name}: ${error.message.substring(0, 50)}`);
      }
    }
  }
  console.log(`   ✅ Imported ${imported} politics entries`);
  totalImported += imported;

  politicsDb.close();

  // Final status
  console.log('\n' + '='.repeat(60));
  console.log('📊 EXTRACTION RESULTS:');
  console.log('='.repeat(60));
  console.log(`\n✅ Total imported: ${totalImported} entries\n`);

  const categories = await prisma.locationSummary.groupBy({
    by: ['category'],
    _count: { category: true },
    orderBy: { category: 'asc' }
  });

  console.log('All categories:');
  categories.forEach(({ category, _count }) => {
    const status = _count.category === 128 ? '✅' :
                   _count.category >= 100 ? '⚠️' : '❌';
    console.log(`  ${status} ${category}: ${_count.category}`);
  });

  const total = await prisma.locationSummary.count();
  console.log(`\n📈 Grand Total: ${total} entries`);

  // Check which of the 14 required categories we now have
  const required = ['all', 'politics', 'economy', 'technology', 'climate',
                   'culture', 'sports', 'infrastructure', 'science',
                   'education', 'healthcare', 'military', 'crime', 'energy'];

  console.log('\n🎯 Required Categories Status:');
  let complete = 0;
  for (const cat of required) {
    const count = await prisma.locationSummary.count({ where: { category: cat } });
    const status = count >= 128 ? '✅' : count >= 100 ? '⚠️' : count > 0 ? '🔶' : '❌';
    console.log(`  ${status} ${cat}: ${count}`);
    if (count >= 100) complete++;
  }

  console.log(`\n✨ Progress: ${complete}/14 required categories have 100+ entries`);

  await prisma.$disconnect();
  console.log('\n✅ Phase 1 extraction complete!\n');
}

extractMissingCategories().catch((error) => {
  console.error('Error:', error);
  process.exit(1);
});
