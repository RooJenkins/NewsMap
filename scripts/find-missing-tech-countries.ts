import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function findMissing() {
  // Get all countries from 'all' category
  const allCountries = await prisma.locationSummary.findMany({
    where: {
      category: 'all',
      type: 'country'
    },
    select: { name: true }
  });

  // Get all countries from 'technology' category
  const techCountries = await prisma.locationSummary.findMany({
    where: {
      category: 'technology',
      type: 'country'
    },
    select: { name: true }
  });

  const allCountryNames = allCountries.map(c => c.name).sort();
  const techCountryNames = techCountries.map(c => c.name);

  console.log('Total countries in "all" category:', allCountryNames.length);
  console.log('Total countries in "technology" category:', techCountryNames.length);

  const missing = allCountryNames.filter(name => !techCountryNames.includes(name));

  console.log('\nMissing technology entries for:');
  missing.forEach(country => console.log('  -', country));

  await prisma.$disconnect();
}

findMissing();
