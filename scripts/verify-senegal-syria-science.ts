import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function verify() {
  const countries = [
    'Senegal', 'Serbia', 'Singapore', 'Slovakia', 'Slovenia', 'Somalia',
    'South Africa', 'South Korea', 'South Sudan', 'Spain', 'Sri Lanka',
    'Sudan', 'Suriname', 'Sweden', 'Switzerland', 'Syria'
  ];

  console.log('Verifying Science & Research summaries...\n');

  for (const country of countries) {
    const summary = await prisma.locationSummary.findFirst({
      where: {
        name: country,
        type: 'country',
        category: 'science'
      }
    });

    if (summary) {
      const issues = JSON.parse(summary.issues);
      console.log(`✅ ${country}:`);
      console.log(`   Length: ${summary.summary.length} chars`);
      console.log(`   Issues: ${issues.length} items`);
      console.log(`   First issue: ${issues[0]?.substring(0, 80)}...`);
    } else {
      console.log(`❌ ${country}: NOT FOUND`);
    }
  }

  // Show one complete example
  console.log('\n=== SAMPLE SUMMARY (Singapore) ===\n');
  const sample = await prisma.locationSummary.findFirst({
    where: {
      name: 'Singapore',
      type: 'country',
      category: 'science'
    }
  });

  if (sample) {
    console.log(sample.summary);
    console.log('\nIssues:');
    const issues = JSON.parse(sample.issues);
    issues.forEach((issue: string, i: number) => {
      console.log(`${i + 1}. ${issue}`);
    });
  }
}

verify()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
