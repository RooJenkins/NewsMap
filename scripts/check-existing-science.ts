import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Check existing science summaries
  const scienceSummaries = await prisma.locationSummary.findMany({
    where: {
      category: 'science'
    },
    take: 2
  });

  console.log('Existing science summaries:\n');
  scienceSummaries.forEach(summary => {
    console.log(`Country: ${summary.name}`);
    console.log(`Type: ${summary.type}`);
    console.log(`Category: ${summary.category}`);
    console.log(`Summary length: ${summary.summary.length} chars`);
    console.log(`Issues: ${summary.issues.substring(0, 200)}...`);
    console.log('---\n');
  });
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
