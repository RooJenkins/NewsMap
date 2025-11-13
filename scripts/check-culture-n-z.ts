import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  // Get all distinct countries
  const allCountries = await prisma.locationSummary.findMany({
    where: { type: 'country' },
    distinct: ['name'],
    orderBy: { name: 'asc' },
    select: { name: true }
  });

  const nToZ = allCountries.filter(c => c.name >= 'Nepal');
  console.log('All Countries N-Z:');
  nToZ.forEach(c => console.log(c.name));
  console.log(`\nTotal: ${nToZ.length} countries`);

  // Check existing culture writeups
  const existingCulture = await prisma.locationSummary.findMany({
    where: {
      type: 'country',
      category: 'culture'
    },
    orderBy: { name: 'asc' },
    select: { name: true }
  });

  const existingNtoZ = existingCulture.filter(e => e.name >= 'Nepal');
  console.log('\n\nExisting Culture writeups N-Z:');
  existingNtoZ.forEach(e => console.log(e.name));
  console.log(`\nTotal existing: ${existingNtoZ.length}`);

  // Find missing
  const existingNames = new Set(existingNtoZ.map(e => e.name));
  const missing = nToZ.filter(c => !existingNames.has(c.name));
  console.log('\n\nMissing Culture writeups N-Z:');
  missing.forEach(c => console.log(c.name));
  console.log(`\nTotal missing: ${missing.length}`);
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
