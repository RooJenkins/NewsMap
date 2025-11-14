import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const countries = [
    { code: 'IT', name: 'Italy' },
    { code: 'CI', name: 'Ivory Coast' },
    { code: 'JM', name: 'Jamaica' },
    { code: 'JP', name: 'Japan' },
    { code: 'JO', name: 'Jordan' },
    { code: 'KZ', name: 'Kazakhstan' },
    { code: 'KE', name: 'Kenya' },
    { code: 'KW', name: 'Kuwait' },
    { code: 'KG', name: 'Kyrgyzstan' },
    { code: 'LA', name: 'Laos' },
    { code: 'LV', name: 'Latvia' },
    { code: 'LB', name: 'Lebanon' },
    { code: 'LY', name: 'Libya' }
  ];

  console.log('\n=== Verifying Culture Summaries ===\n');

  let allFound = true;
  const results = [];

  for (const country of countries) {
    const summary = await prisma.locationSummary.findUnique({
      where: {
        id: `${country.code}-culture`
      }
    });

    if (summary) {
      results.push({
        country: country.name,
        code: country.code,
        found: true,
        charCount: summary.summary.length,
        category: summary.category
      });
      console.log(`✓ ${country.name} (${country.code}): ${summary.summary.length} characters`);
    } else {
      results.push({
        country: country.name,
        code: country.code,
        found: false
      });
      console.log(`✗ ${country.name} (${country.code}): NOT FOUND`);
      allFound = false;
    }
  }

  console.log('\n=== Summary ===\n');
  console.log(`Total countries checked: ${countries.length}`);
  console.log(`Found: ${results.filter(r => r.found).length}`);
  console.log(`Missing: ${results.filter(r => !r.found).length}`);

  if (allFound) {
    console.log('\n✓ All 13 culture summaries successfully saved to database!');

    console.log('\n=== Character Counts ===\n');
    results.forEach(r => {
      if (r.found && r.charCount) {
        const status = r.charCount >= 2500 && r.charCount <= 3500 ? '✓' : '⚠';
        console.log(`${status} ${r.country}: ${r.charCount} chars`);
      }
    });
  } else {
    console.log('\n⚠ Some summaries are missing. Please check the output above.');
    process.exit(1);
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
