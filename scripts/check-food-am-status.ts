import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  // Get all countries A-M
  const countries = await prisma.locationSummary.findMany({
    where: {
      type: 'country',
      name: {
        gte: 'A',
        lt: 'N'
      }
    },
    select: { name: true, country: true, lat: true, lng: true },
    distinct: ['name'],
    orderBy: { name: 'asc' }
  });

  console.log('=== COUNTRIES A-M ===');
  console.log('Total:', countries.length);
  countries.forEach(c => console.log(c.name));

  // Check existing food writeups
  const existing = await prisma.locationSummary.findMany({
    where: {
      type: 'country',
      category: 'food',
      name: {
        gte: 'A',
        lt: 'N'
      }
    },
    orderBy: { name: 'asc' }
  });

  console.log('\n=== EXISTING FOOD WRITEUPS A-M ===');
  console.log('Count:', existing.length);
  existing.forEach(w => console.log(w.name));

  // Find missing countries
  const existingNames = new Set(existing.map(e => e.name));
  const missing = countries.filter(c => !existingNames.has(c.name));

  console.log('\n=== MISSING FOOD WRITEUPS A-M ===');
  console.log('Count:', missing.length);
  missing.forEach(c => console.log(c.name));

  await prisma.$disconnect();
}

main();
