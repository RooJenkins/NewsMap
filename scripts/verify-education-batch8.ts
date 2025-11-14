import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const countries = [
  'Sri Lanka', 'Yemen', 'Saudi Arabia', 'United Arab Emirates', 'Lebanon',
  'Syria', 'Solomon Islands', 'Vanuatu', 'Samoa', 'Tonga',
  'Egypt', 'Ethiopia', 'Kenya'
];

(async () => {
  console.log('Verifying EDUCATION summaries for Batch 8:\n');

  for (const name of countries) {
    const summary = await prisma.locationSummary.findUnique({
      where: { name_type_category: { name, type: 'country', category: 'education' } }
    });

    if (summary) {
      console.log(`✅ ${name}: ${summary.summary.length} chars`);
    } else {
      console.log(`❌ ${name}: NOT FOUND`);
    }
  }

  await prisma.$disconnect();
})();
