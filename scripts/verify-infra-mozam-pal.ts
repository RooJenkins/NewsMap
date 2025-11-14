import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const countries = [
    "Mozambique", "Myanmar", "Namibia", "Nepal", "Netherlands", "New Zealand",
    "Nicaragua", "Niger", "Nigeria", "North Korea", "Norway", "Oman",
    "Pakistan", "Palestine"
  ];

  console.log('=== Verification of Infrastructure Summaries ===\n');

  for (const countryName of countries) {
    const summary = await prisma.locationSummary.findFirst({
      where: {
        name: countryName,
        type: 'country',
        category: 'infrastructure'
      }
    });

    if (summary) {
      const issues = JSON.parse(summary.issues);
      console.log(`✓ ${countryName}:`);
      console.log(`  - Summary: ${summary.summary.length} characters`);
      console.log(`  - Issues: ${issues.length}`);
      console.log(`  - Sample: ${summary.summary.substring(0, 100)}...`);
      console.log();
    } else {
      console.log(`✗ ${countryName}: NOT FOUND\n`);
    }
  }

  const total = await prisma.locationSummary.count({
    where: {
      category: 'infrastructure',
      name: { in: countries }
    }
  });

  console.log(`\n=== Total: ${total}/14 countries completed ===`);
}

main()
  .finally(() => prisma.$disconnect());
