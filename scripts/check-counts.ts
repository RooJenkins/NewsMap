import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const crime = await prisma.locationSummary.count({ where: { category: 'crime' } });
  const energy = await prisma.locationSummary.count({ where: { category: 'energy' } });

  console.log('Current counts:');
  console.log('Crime writeups:', crime);
  console.log('Energy writeups:', energy);
  console.log('\nRemaining:');
  console.log('Crime remaining:', 128 - crime);
  console.log('Energy remaining:', 128 - energy);
  console.log('Total remaining:', (128 - crime) + (128 - energy));
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
