import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function sampleEntries() {
  const finalNine = ['United Arab Emirates', 'United Kingdom', 'United States', 'Uruguay', 'Uzbekistan', 'Venezuela', 'Vietnam', 'Yemen', 'Zimbabwe'];

  for (const country of finalNine) {
    const entry = await prisma.locationSummary.findFirst({
      where: {
        name: country,
        category: 'technology',
        type: 'country'
      }
    });

    if (entry) {
      console.log(`\n${'='.repeat(80)}`);
      console.log(`${country} - TECHNOLOGY`);
      console.log(`${'='.repeat(80)}`);
      console.log(`Characters: ${entry.summary.length}`);
      console.log(`Lat/Lng: ${entry.lat}, ${entry.lng}`);
      console.log(`Created: ${entry.createdAt}`);
      console.log(`\nSummary preview (first 500 chars):`);
      console.log(entry.summary.substring(0, 500) + '...');
    } else {
      console.log(`\n${country}: NOT FOUND`);
    }
  }

  await prisma.$disconnect();
}

sampleEntries();
