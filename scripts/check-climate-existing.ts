import { PrismaClient } from '@prisma/client';
import { ALL_COUNTRIES } from './generation-helpers';

const prisma = new PrismaClient();

async function checkExisting() {
  const existing = await prisma.locationSummary.findMany({
    where: { type: 'country', category: 'climate' },
    select: { name: true }
  });

  console.log('Already done:', existing.map(e => e.name).sort().join(', '));
  console.log('\nCount:', existing.length, '/', ALL_COUNTRIES.length);

  const existingSet = new Set(existing.map(e => e.name));
  const remaining = ALL_COUNTRIES.filter(c => !existingSet.has(c.name));

  console.log('\nRemaining:', remaining.length);
  console.log('Countries:', remaining.map(c => c.name).join(', '));

  await prisma.$disconnect();
}

checkExisting();
