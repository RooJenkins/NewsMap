import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const countries = [
    'Afghanistan', 'Albania', 'Algeria', 'Angola', 'Argentina', 'Armenia',
    'Australia', 'Austria', 'Azerbaijan', 'Bahamas', 'Bahrain', 'Bangladesh',
    'Barbados', 'Belarus', 'Belgium', 'Belize', 'Benin', 'Bhutan', 'Bolivia',
    'Bosnia and Herzegovina', 'Botswana', 'Brunei', 'Bulgaria', 'Burkina Faso', 'Cambodia'
  ];

  console.log('Verifying infrastructure summaries in database...\n');
  console.log('='.repeat(80));

  for (const country of countries) {
    const summary = await prisma.locationSummary.findFirst({
      where: {
        name: country,
        type: 'country',
        category: 'infrastructure'
      }
    });

    if (summary) {
      const issues = JSON.parse(summary.issues);
      console.log(`✓ ${country.padEnd(25)} | ${summary.summary.length} chars | ${issues.length} issues`);
    } else {
      console.log(`✗ ${country.padEnd(25)} | MISSING`);
    }
  }

  console.log('='.repeat(80));

  // Show a sample summary
  const sample = await prisma.locationSummary.findFirst({
    where: {
      name: 'Australia',
      type: 'country',
      category: 'infrastructure'
    }
  });

  if (sample) {
    console.log('\nSample Summary (Australia):');
    console.log('='.repeat(80));
    console.log(sample.summary.substring(0, 500) + '...');
    console.log('\nIssues:');
    const issues = JSON.parse(sample.issues);
    issues.forEach((issue: string, i: number) => {
      console.log(`  ${i + 1}. ${issue}`);
    });
  }
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
