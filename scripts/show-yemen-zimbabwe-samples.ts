import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function showSamples() {
  const countries = ['Yemen', 'Zimbabwe'];

  for (const country of countries) {
    const entry = await prisma.locationSummary.findFirst({
      where: {
        name: country,
        category: 'technology',
        type: 'country'
      }
    });

    if (entry) {
      console.log('\n════════════════════════════════════════════════════════════════════');
      console.log(`${country.toUpperCase()} - TECHNOLOGY`);
      console.log('════════════════════════════════════════════════════════════════════');
      console.log(`Characters: ${entry.summary.length}`);
      console.log(`Coordinates: ${entry.lat}, ${entry.lng}\n`);
      console.log(entry.summary);
      console.log('\n');
    }
  }

  await prisma.$disconnect();
}

showSamples();
