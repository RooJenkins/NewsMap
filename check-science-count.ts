import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function checkScience() {
  const total = await prisma.locationSummary.count({
    where: { category: 'science', type: 'country' }
  });

  const countries = await prisma.locationSummary.findMany({
    where: { category: 'science', type: 'country' },
    select: { name: true },
    orderBy: { name: 'asc' }
  });

  console.log(`Total SCIENCE summaries: ${total}`);
  console.log('\nCountries with SCIENCE summaries:');
  countries.forEach((c, i) => console.log(`${i + 1}. ${c.name}`));

  await prisma.$disconnect();
}

checkScience();
