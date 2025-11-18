import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Get all categories with counts
  const allSummaries = await prisma.locationSummary.findMany({
    where: { type: 'country' },
    select: { category: true, name: true }
  });

  // Group by category
  const categoryMap = new Map<string, string[]>();
  allSummaries.forEach(s => {
    if (!categoryMap.has(s.category)) {
      categoryMap.set(s.category, []);
    }
    categoryMap.get(s.category)!.push(s.name);
  });

  console.log('Categories and country counts:\n');
  Array.from(categoryMap.entries())
    .sort((a, b) => a[0].localeCompare(b[0]))
    .forEach(([category, countries]) => {
      console.log(`${category}: ${countries.length} countries`);
    });

  // Check for SCIENCE specifically
  const scienceCount = await prisma.locationSummary.count({
    where: { category: 'science', type: 'country' }
  });

  console.log(`\n\nSCIENCE category: ${scienceCount} countries`);

  if (scienceCount > 0) {
    const scienceCountries = await prisma.locationSummary.findMany({
      where: { category: 'science', type: 'country' },
      select: { name: true },
      orderBy: { name: 'asc' }
    });
    console.log('\nCountries with SCIENCE summaries:');
    scienceCountries.forEach((c, i) => console.log(`${i + 1}. ${c.name}`));
  }

  // Total countries in system
  const totalCountries = await prisma.locationSummary.count({
    where: { type: 'country' }
  });
  console.log(`\n\nTotal country records: ${totalCountries}`);
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
