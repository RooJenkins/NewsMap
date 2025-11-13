import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const nicaragua = await prisma.locationSummary.findUnique({
    where: {
      name_type_category: {
        name: 'Nicaragua',
        type: 'country',
        category: 'all'
      }
    }
  });

  if (nicaragua) {
    console.log('✓ Nicaragua summary found in database');
    console.log('Name:', nicaragua.name);
    console.log('Type:', nicaragua.type);
    console.log('Summary length:', nicaragua.summary.length, 'characters');
    console.log('Issues:', JSON.parse(nicaragua.issues).length);
    console.log('Top stories:', JSON.parse(nicaragua.topStories).length);
    console.log('Coordinates:', nicaragua.lat, ',', nicaragua.lng);
  } else {
    console.log('✗ Nicaragua summary not found');
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
