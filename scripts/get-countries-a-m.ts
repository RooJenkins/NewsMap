import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function getCountries() {
  const countries = await prisma.locationSummary.findMany({
    where: { type: 'country' },
    distinct: ['name'],
    orderBy: { name: 'asc' },
    select: { name: true }
  });

  // Filter A-M
  const filtered = countries.filter(c => c.name[0] >= 'A' && c.name[0] <= 'M');
  console.log(JSON.stringify(filtered.map(c => c.name), null, 2));
  console.log('\nTotal A-M countries:', filtered.length);

  await prisma.$disconnect();
}

getCountries();
