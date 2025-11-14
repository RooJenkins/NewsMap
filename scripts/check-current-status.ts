import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function checkStatus() {
  const crime = await prisma.locationSummary.findMany({
    where: { category: 'crime', type: 'country' },
    select: { name: true },
    orderBy: { name: 'asc' }
  });

  const energy = await prisma.locationSummary.findMany({
    where: { category: 'energy', type: 'country' },
    select: { name: true },
    orderBy: { name: 'asc' }
  });

  console.log('CRIME COMPLETED (' + crime.length + '):');
  console.log(crime.map(c => c.name).join(', '));
  console.log('\n\nENERGY COMPLETED (' + energy.length + '):');
  console.log(energy.map(c => c.name).join(', '));

  await prisma.$disconnect();
}

checkStatus();
