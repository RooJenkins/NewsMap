import Database from 'better-sqlite3';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function extractAllMissing() {
  console.log('=== EXTRACTING MISSING CATEGORIES ===\n');

  // Source 1: Nested DB - has culture, sports (plural form)
  const nestedDb = new Database('./prisma/prisma/dev.db', { readonly: true });

  // Source 2: Politics complete DB - has culture, politics, sports
  const politicsDb = new Database('/tmp/politics-complete.db', { readonly: true });

  // Extract CULTURE from nested DB
  console.log('📦 Extracting CULTURE (128 entries)...');
  const cultureEntries = nestedDb.prepare(`
    SELECT * FROM LocationSummary
    WHERE category = 'culture'
    ORDER BY name
    LIMIT 128
  `).all();

  let imported = 0;
  for (const entry: any of cultureEntries) {
    try {
      await prisma.locationSummary.create({
        data: {
          name: entry.name,
          type: entry.type,
          country: entry.country,
          lat: entry.lat,
          lng: entry.lng,
          category: 'culture',
          summary: entry.summary,
          issues: entry.issues,
          topStories: entry.topStories,
          storyCount: entry.storyCount || 0,
          createdAt: new Date(entry.createdAt),
          updatedAt: new Date(entry.updatedAt)
        }
      });
      imported++;
    } catch (error: any) {
      if (!error.message.includes('Unique constraint')) {
        console.error(`  ⚠️  Error: ${entry.name}`);
      }
    }
  }
  console.log(`  ✅ Imported ${imported} culture entries\n`);

  // Extract SPORTS - try both "sports" and "sport" from nested DB
  console.log('📦 Extracting SPORTS (128 entries)...');
  let sportsEntries = nestedDb.prepare(`
    SELECT * FROM LocationSummary
    WHERE category = 'sports'
    ORDER BY name
    LIMIT 128
  `).all();

  if (sportsEntries.length === 0) {
    // Try 'sport' (singular)
    sportsEntries = nestedDb.prepare(`
      SELECT * FROM LocationSummary
      WHERE category = 'sport'
      ORDER BY name
      LIMIT 128
    `).all();
  }

  imported = 0;
  for (const entry: any of sportsEntries) {
    try {
      await prisma.locationSummary.create({
        data: {
          name: entry.name,
          type: entry.type,
          country: entry.country,
          lat: entry.lat,
          lng: entry.lng,
          category: 'sports',  // Always use 'sports' (plural)
          summary: entry.summary,
          issues: entry.issues,
          topStories: entry.topStories,
          storyCount: entry.storyCount || 0,
          createdAt: new Date(entry.createdAt),
          updatedAt: new Date(entry.updatedAt)
        }
      });
      imported++;
    } catch (error: any) {
      if (!error.message.includes('Unique constraint')) {
        console.error(`  ⚠️  Error: ${entry.name}`);
      }
    }
  }
  console.log(`  ✅ Imported ${imported} sports entries\n`);

  // Extract POLITICS from politics complete DB
  console.log('📦 Extracting POLITICS (128 entries)...');
  const politicsEntries = politicsDb.prepare(`
    SELECT * FROM LocationSummary
    WHERE category = 'politics'
    ORDER BY name
    LIMIT 128
  `).all();

  imported = 0;
  for (const entry: any of politicsEntries) {
    try {
      // Delete existing test politics entries first
      await prisma.locationSummary.deleteMany({
        where: {
          name: entry.name,
          category: 'politics'
        }
      });

      await prisma.locationSummary.create({
        data: {
          name: entry.name,
          type: entry.type,
          country: entry.country,
          lat: entry.lat,
          lng: entry.lng,
          category: 'politics',
          summary: entry.summary,
          issues: entry.issues,
          topStories: entry.topStories,
          storyCount: entry.storyCount || 0,
          createdAt: new Date(entry.createdAt),
          updatedAt: new Date(entry.updatedAt)
        }
      });
      imported++;
    } catch (error: any) {
      console.error(`  ⚠️  Error importing ${entry.name}: ${error.message}`);
    }
  }
  console.log(`  ✅ Imported ${imported} politics entries\n`);

  nestedDb.close();
  politicsDb.close();

  // Final status
  console.log('\n📊 UPDATED DATABASE STATUS:\n');
  const categories = await prisma.locationSummary.groupBy({
    by: ['category'],
    _count: { category: true },
    orderBy: { category: 'asc' }
  });

  categories.forEach(({ category, _count }) => {
    const status = _count.category === 128 ? '✅' :
                   _count.category >= 100 ? '⚠️' : '❌';
    console.log(`  ${status} ${category}: ${_count.category}`);
  });

  const total = await prisma.locationSummary.count();
  console.log(`\n  Total: ${total} entries`);

  await prisma.$disconnect();
  console.log('\n✅ Extraction complete!');
}

extractAllMissing().catch(console.error);
