import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Check existing infrastructure summaries
  const infrastructureSummaries = await prisma.locationSummary.findMany({
    where: { category: 'infrastructure' },
    take: 2
  });

  console.log('Existing infrastructure summaries:');
  console.log(JSON.stringify(infrastructureSummaries, null, 2));

  // Get location IDs for target countries
  const countries = [
    'Afghanistan', 'Albania', 'Algeria', 'Angola', 'Argentina', 'Armenia',
    'Australia', 'Austria', 'Azerbaijan', 'Bahamas', 'Bahrain', 'Bangladesh',
    'Barbados', 'Belarus', 'Belgium', 'Belize', 'Benin', 'Bhutan', 'Bolivia',
    'Bosnia and Herzegovina', 'Botswana', 'Brunei', 'Bulgaria', 'Burkina Faso', 'Cambodia'
  ];

  console.log('\n\nChecking which countries need infrastructure summaries:');
  for (const country of countries) {
    const existing = await prisma.locationSummary.findFirst({
      where: {
        name: country,
        type: 'country',
        category: 'infrastructure'
      }
    });
    console.log(`${country}: ${existing ? 'EXISTS' : 'NEEDS SUMMARY'}`);
  }
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
