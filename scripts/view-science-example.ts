import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const summary = await prisma.locationSummary.findFirst({
    where: {
      category: 'science'
    }
  });

  if (summary) {
    console.log('=== EXAMPLE SCIENCE SUMMARY ===\n');
    console.log(`Country: ${summary.name}`);
    console.log(`\nSummary:\n${summary.summary}`);
    console.log(`\nIssues: ${summary.issues}`);
    console.log(`\nCoordinates: ${summary.lat}, ${summary.lng}`);
  }
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
