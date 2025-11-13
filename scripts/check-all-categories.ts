import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function checkCategories() {
  const all = await prisma.locationSummary.findMany({
    select: { category: true, type: true, name: true }
  });

  const categories = new Set(all.map(e => e.category));
  const types = new Set(all.map(e => e.type));

  console.log('Categories:', Array.from(categories).sort());
  console.log('Types:', Array.from(types));
  console.log('Total entries:', all.length);

  // Count by category
  console.log('\nCounts by category:');
  for (const cat of Array.from(categories).sort()) {
    const count = all.filter(e => e.category === cat).length;
    console.log(`  ${cat}: ${count}`);
  }

  // Get all unique country names
  const countryNames = new Set(all.map(e => e.name));
  console.log('\nUnique country names:', countryNames.size);

  await prisma.$disconnect();
}

checkCategories();
