import { PrismaClient } from '@prisma/client';

async function checkDatabase(dbPath: string) {
  const prisma = new PrismaClient({
    datasources: {
      db: {
        url: `file:${dbPath}`
      }
    }
  });

  try {
    console.log(`\n=== ${dbPath} ===`);

    const categories = await prisma.locationSummary.groupBy({
      by: ['category'],
      _count: { category: true },
      orderBy: { category: 'asc' }
    });

    console.log('Categories:');
    categories.forEach(({ category, _count }) => {
      console.log(`  ${category}: ${_count.category} entries`);
    });

    const total = await prisma.locationSummary.count();
    console.log(`Total: ${total} entries`);

  } catch (error: any) {
    console.error(`Error with ${dbPath}:`, error.message);
  } finally {
    await prisma.$disconnect();
  }
}

async function main() {
  await checkDatabase('./prisma/dev.db');
  await checkDatabase('./prisma/prisma/dev.db');
}

main();
