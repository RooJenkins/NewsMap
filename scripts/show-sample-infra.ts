import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const summary = await prisma.locationSummary.findFirst({
    where: {
      name: 'Nepal',
      category: 'infrastructure'
    }
  });

  if (summary) {
    console.log('=== SAMPLE: Nepal Infrastructure Summary ===\n');
    console.log(`Length: ${summary.summary.length} characters`);
    console.log(`\n${summary.summary}\n`);
    console.log('\n=== Key Infrastructure Issues ===');
    const issues = JSON.parse(summary.issues);
    issues.forEach((issue: string, index: number) => {
      console.log(`${index + 1}. ${issue}`);
    });
  }
}

main()
  .finally(() => prisma.$disconnect());
