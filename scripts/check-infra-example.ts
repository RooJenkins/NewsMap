import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const sample = await prisma.locationSummary.findFirst({
    where: { category: 'infrastructure' }
  });

  if (sample) {
    console.log('Summary length:', sample.summary.length);
    console.log('Issues:', sample.issues);
    console.log('\nSample summary (first 800 chars):');
    console.log(sample.summary.substring(0, 800));
  } else {
    console.log('No infrastructure summaries found');
  }
}

main()
  .finally(() => prisma.$disconnect());
