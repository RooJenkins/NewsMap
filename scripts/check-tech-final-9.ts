import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function checkTech() {
  const techEntries = await prisma.locationSummary.findMany({
    where: {
      category: 'technology',
      type: 'country'
    },
    select: { name: true }
  });

  console.log('Total technology entries:', techEntries.length);

  const finalNine = ['United Arab Emirates', 'United Kingdom', 'United States', 'Uruguay', 'Uzbekistan', 'Venezuela', 'Vietnam', 'Yemen', 'Zimbabwe'];

  console.log('\nFinal 9 countries check:');
  for (const country of finalNine) {
    const exists = techEntries.some(e => e.name === country);
    console.log(country + ':', exists ? 'EXISTS' : 'MISSING');
  }

  await prisma.$disconnect();
}

checkTech();
