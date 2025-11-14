import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const countries = [
    'Senegal', 'Serbia', 'Singapore', 'Slovakia', 'Slovenia', 'Somalia',
    'South Africa', 'South Korea', 'South Sudan', 'Spain', 'Sri Lanka',
    'Sudan', 'Suriname', 'Sweden', 'Switzerland', 'Syria'
  ];

  console.log('Checking countries...\n');

  for (const country of countries) {
    const location = await prisma.location.findFirst({
      where: { name: country }
    });

    if (location) {
      console.log(`${country}: ID=${location.id}, Lat=${location.lat}, Lng=${location.lng}`);

      // Check if science summary exists
      const existing = await prisma.locationSummary.findFirst({
        where: {
          name: country,
          type: 'country',
          category: 'science'
        }
      });

      if (existing) {
        console.log(`  ⚠️  Science summary already exists`);
      }
    } else {
      console.log(`${country}: NOT FOUND`);
    }
  }
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
