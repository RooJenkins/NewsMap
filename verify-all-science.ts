import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function verify() {
  const count = await prisma.locationSummary.count({
    where: { category: 'science', type: 'country' }
  });

  console.log(`\n🔍 Total SCIENCE summaries: ${count}/128`);

  const countries = await prisma.locationSummary.findMany({
    where: { category: 'science', type: 'country' },
    select: { name: true },
    orderBy: { name: 'asc' }
  });

  console.log(`\n📋 Countries saved:\n`);
  countries.forEach((c, i) => console.log(`${i + 1}. ${c.name}`));

  await prisma.$disconnect();
}

verify();
