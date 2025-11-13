import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function findMissing() {
  const all = await prisma.locationSummary.findMany({
    where: { type: 'country' },
    select: { name: true, category: true }
  });

  // Get unique country names
  const allCountryNames = Array.from(new Set(all.map(e => e.name))).sort();

  // Get countries with technology entries
  const techCountries = all
    .filter(e => e.category === 'technology')
    .map(e => e.name);

  console.log('Total unique countries:', allCountryNames.length);
  console.log('Countries with technology entries:', techCountries.length);

  const missing = allCountryNames.filter(name => !techCountries.includes(name));

  console.log('\nMissing technology entries (' + missing.length + ' countries):');
  missing.forEach(country => console.log('  -', country));

  await prisma.$disconnect();
}

findMissing();
