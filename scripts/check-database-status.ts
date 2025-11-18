import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function checkDatabase() {
  try {
    // Get all categories and their counts
    const categoryCounts = await prisma.locationSummary.groupBy({
      by: ['category'],
      _count: {
        category: true
      },
      orderBy: {
        category: 'asc'
      }
    });

    console.log('\n=== DATABASE STATUS ===\n');
    console.log('Categories and counts:');
    categoryCounts.forEach(({ category, _count }) => {
      console.log(`  ${category}: ${_count.category} entries`);
    });

    // Total count
    const total = await prisma.locationSummary.count();
    console.log(`\nTotal entries: ${total}`);

    // Get unique countries
    const allEntries = await prisma.locationSummary.findMany({
      select: { name: true, category: true, id: true }
    });
    const uniqueCountries = new Set(allEntries.map(e => e.name));
    console.log(`\nUnique countries: ${uniqueCountries.size}`);

    // Check for any duplicate entries (same country + category)
    const duplicateCheck = new Map<string, number>();
    allEntries.forEach(entry => {
      const key = `${entry.name}-${entry.category}`;
      duplicateCheck.set(key, (duplicateCheck.get(key) || 0) + 1);
    });

    const duplicates = Array.from(duplicateCheck.entries()).filter(([_, count]) => count > 1);
    if (duplicates.length > 0) {
      console.log(`\n⚠️  Found ${duplicates.length} duplicate location-category combinations:`);
      duplicates.slice(0, 10).forEach(([key, count]) => {
        console.log(`  ${key}: ${count} entries`);
      });
      if (duplicates.length > 10) {
        console.log(`  ... and ${duplicates.length - 10} more`);
      }
    } else {
      console.log('\n✅ No duplicate location-category combinations found');
    }

  } catch (error) {
    console.error('Error checking database:', error);
  } finally {
    await prisma.$disconnect();
  }
}

checkDatabase();
