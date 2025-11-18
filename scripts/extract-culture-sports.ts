import Database from 'better-sqlite3';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function extractCultureSports() {
  console.log('Extracting culture and sports from nested database...\n');

  const nestedDb = new Database('./prisma/prisma/dev.db', { readonly: true });

  // Extract culture
  const cultureEntries = nestedDb.prepare(`
    SELECT * FROM LocationSummary
    WHERE category = 'culture'
    ORDER BY name
  `).all();

  console.log(`Found ${cultureEntries.length} CULTURE entries`);

  let imported = 0;
  for (const entry: any of cultureEntries.slice(0, 128)) {
    try {
      await prisma.locationSummary.create({
        data: {
          name: entry.name,
          type: entry.type,
          country: entry.country,
          lat: entry.lat,
          lng: entry.lng,
          category: entry.category,
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
        console.error(`  Error importing ${entry.name}: ${error.message}`);
      }
    }
  }
  console.log(`✅ Imported ${imported} culture entries\n`);

  // Extract sports
  const sportsEntries = nestedDb.prepare(`
    SELECT * FROM LocationSummary
    WHERE category = 'sports'
    ORDER BY name
  `).all();

  console.log(`Found ${sportsEntries.length} SPORTS entries`);

  imported = 0;
  for (const entry: any of sportsEntries.slice(0, 128)) {
    try {
      await prisma.locationSummary.create({
        data: {
          name: entry.name,
          type: entry.type,
          country: entry.country,
          lat: entry.lat,
          lng: entry.lng,
          category: entry.category,
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
        console.error(`  Error importing ${entry.name}: ${error.message}`);
      }
    }
  }
  console.log(`✅ Imported ${imported} sports entries\n`);

  nestedDb.close();

  // Final count
  const total = await prisma.locationSummary.count();
  console.log(`\n📊 Total entries now: ${total}`);

  const categories = await prisma.locationSummary.groupBy({
    by: ['category'],
    _count: { category: true },
    orderBy: { category: 'asc' }
  });

  console.log('\nCategories:');
  categories.forEach(({ category, _count }) => {
    const status = _count.category === 128 ? '✅' :
                   _count.category >= 100 ? '⚠️' : '❌';
    console.log(`  ${status} ${category}: ${_count.category}`);
  });

  await prisma.$disconnect();
  console.log('\n✅ Extraction complete!');
}

extractCultureSports().catch(console.error);
