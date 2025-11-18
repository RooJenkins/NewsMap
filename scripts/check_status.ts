import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function checkStatus() {
  const counts = await prisma.locationSummary.groupBy({
    by: ['category'],
    _count: true,
  });

  console.log('Current counts by category:');
  counts.forEach(c => {
    console.log(`${c.category}: ${c._count}`);
  });

  // Get crime count
  const crimeCount = await prisma.locationSummary.count({
    where: { category: 'crime' }
  });

  const energyCount = await prisma.locationSummary.count({
    where: { category: 'energy' }
  });

  console.log(`\nDetailed counts:`);
  console.log(`Crime: ${crimeCount}/128`);
  console.log(`Energy: ${energyCount}/128`);

  await prisma.$disconnect();
}

checkStatus();
