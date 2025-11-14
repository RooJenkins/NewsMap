import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function listCompleted() {
  const crime = await prisma.locationSummary.findMany({
    where: { category: 'crime' },
    select: { name: true },
    orderBy: { name: 'asc' }
  });

  const energy = await prisma.locationSummary.findMany({
    where: { category: 'energy' },
    select: { name: true },
    orderBy: { name: 'asc' }
  });

  console.log('Crime writeups completed:');
  crime.forEach((r, i) => console.log(`${i+1}. ${r.name}`));

  console.log('\nEnergy writeups completed:');
  energy.forEach((r, i) => console.log(`${i+1}. ${r.name}`));

  await prisma.$disconnect();
}

listCompleted();
