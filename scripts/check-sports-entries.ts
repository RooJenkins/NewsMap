import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function checkSports() {
  const sports = await prisma.locationSummary.findMany({
    where: { category: 'sports' },
    select: { name: true }
  });

  console.log(`Total sports entries: ${sports.length}`);
  if (sports.length > 0) {
    console.log('Countries with sports writeups:');
    sports.forEach(s => console.log(`  - ${s.name}`));
  }
}

checkSports()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
