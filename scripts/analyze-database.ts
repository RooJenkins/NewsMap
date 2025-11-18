import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function analyzeDatabase() {
  try {
    console.log('\n=== DATABASE ANALYSIS ===\n');

    // Get all categories
    const categories = await prisma.locationSummary.groupBy({
      by: ['category'],
      _count: { category: true },
      orderBy: { category: 'asc' }
    });

    console.log('Categories:');
    categories.forEach(({ category, _count }) => {
      console.log(`  ${category}: ${_count.category} entries`);
    });

    // For each category, check which countries are present
    for (const { category } of categories) {
      const entries = await prisma.locationSummary.findMany({
        where: { category },
        select: { name: true },
        orderBy: { name: 'asc' }
      });

      console.log(`\n${category.toUpperCase()} category has ${entries.length} countries`);

      // Show first and last few countries
      if (entries.length > 10) {
        console.log(`  First 5: ${entries.slice(0, 5).map(e => e.name).join(', ')}`);
        console.log(`  Last 5: ${entries.slice(-5).map(e => e.name).join(', ')}`);
      }
    }

    // Check which countries appear in ALL categories
    const allEntries = await prisma.locationSummary.findMany({
      select: { name: true, category: true }
    });

    const countryCategories = new Map<string, Set<string>>();
    allEntries.forEach(({ name, category }) => {
      if (!countryCategories.has(name)) {
        countryCategories.set(name, new Set());
      }
      countryCategories.get(name)!.add(category);
    });

    const totalCategories = categories.length;
    const completeCountries = Array.from(countryCategories.entries())
      .filter(([_, cats]) => cats.size === totalCategories);
    const incompleteCountries = Array.from(countryCategories.entries())
      .filter(([_, cats]) => cats.size < totalCategories);

    console.log(`\n=== COUNTRY COVERAGE ===`);
    console.log(`Countries with ALL ${totalCategories} categories: ${completeCountries.length}`);
    console.log(`Countries with incomplete categories: ${incompleteCountries.length}`);

    if (incompleteCountries.length > 0) {
      console.log('\nIncomplete countries:');
      incompleteCountries.slice(0, 20).forEach(([name, cats]) => {
        const missing = categories
          .map(c => c.category)
          .filter(c => !cats.has(c));
        console.log(`  ${name}: has ${cats.size}/${totalCategories} (missing: ${missing.join(', ')})`);
      });
      if (incompleteCountries.length > 20) {
        console.log(`  ... and ${incompleteCountries.length - 20} more`);
      }
    }

    // Check for countries that might be listed in all countries JSON
    const allCountries = await import('../ALL_COUNTRIES_128.json');
    const dbCountryNames = new Set(Array.from(countryCategories.keys()));

    console.log(`\n=== JSON VS DATABASE ===`);
    console.log(`Countries in ALL_COUNTRIES_128.json: ${allCountries.default.length}`);
    console.log(`Countries in database: ${dbCountryNames.size}`);

    const missingFromDb = allCountries.default.filter((c: any) => !dbCountryNames.has(c.country));
    if (missingFromDb.length > 0) {
      console.log(`\nCountries in JSON but NOT in database: ${missingFromDb.length}`);
      console.log(missingFromDb.slice(0, 10).map((c: any) => c.country).join(', '));
      if (missingFromDb.length > 10) {
        console.log(`  ... and ${missingFromDb.length - 10} more`);
      }
    }

  } catch (error) {
    console.error('Error:', error);
  } finally {
    await prisma.$disconnect();
  }
}

analyzeDatabase();
