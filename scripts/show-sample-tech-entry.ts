import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function showSample() {
  const entry = await prisma.locationSummary.findFirst({
    where: {
      name: 'United States',
      category: 'technology',
      type: 'country'
    }
  });

  if (entry) {
    console.log('════════════════════════════════════════════════════════════════════');
    console.log('SAMPLE: United States - TECHNOLOGY');
    console.log('════════════════════════════════════════════════════════════════════');
    console.log(`Characters: ${entry.summary.length}`);
    console.log(`Coordinates: ${entry.lat}, ${entry.lng}`);
    console.log(`Created: ${entry.createdAt}\n`);
    console.log('FULL WRITE-UP:');
    console.log('─'.repeat(72));
    console.log(entry.summary);
    console.log('─'.repeat(72));
  }

  await prisma.$disconnect();
}

showSample();
