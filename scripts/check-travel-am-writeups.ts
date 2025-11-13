import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function checkTravel() {
  const countriesAM = [
    'Afghanistan', 'Albania', 'Algeria', 'Angola', 'Argentina', 'Armenia',
    'Australia', 'Austria', 'Bahrain', 'Bangladesh', 'Belarus', 'Belgium',
    'Benin', 'Bolivia', 'Bosnia and Herzegovina', 'Botswana', 'Brazil',
    'Bulgaria', 'Burkina Faso', 'Cambodia', 'Cameroon', 'Canada', 'Chile',
    'China', 'Colombia', 'Costa Rica', 'Croatia', 'Cuba', 'Cyprus',
    'Czech Republic', 'Democratic Republic of Congo', 'Denmark',
    'Dominican Republic', 'Ecuador', 'Egypt', 'El Salvador', 'Estonia',
    'Ethiopia', 'Fiji', 'Finland', 'France', 'Georgia', 'Germany', 'Ghana',
    'Greece', 'Guatemala', 'Haiti', 'Honduras', 'Hungary', 'India',
    'Indonesia', 'Iran', 'Iraq', 'Ireland', 'Israel', 'Italy', 'Japan',
    'Jordan', 'Kazakhstan', 'Kenya', 'Kuwait', 'Laos', 'Latvia', 'Lebanon',
    'Libya', 'Lithuania', 'Luxembourg', 'Malaysia', 'Mexico', 'Moldova',
    'Montenegro', 'Mongolia', 'Morocco', 'Mozambique', 'Myanmar'
  ];

  console.log(`Total A-M countries: ${countriesAM.length}`);
  
  const existing = await prisma.locationSummary.findMany({
    where: {
      type: 'country',
      category: 'travel',
      name: { in: countriesAM }
    },
    select: { name: true },
    orderBy: { name: 'asc' }
  });
  
  console.log(`\nExisting travel writeups: ${existing.length}`);
  if (existing.length > 0) {
    existing.forEach(e => console.log(`  ✓ ${e.name}`));
  }
  
  const existingNames = existing.map(e => e.name);
  const missing = countriesAM.filter(c => !existingNames.includes(c));
  
  console.log(`\nMissing travel writeups: ${missing.length}`);
  if (missing.length > 0) {
    missing.forEach(m => console.log(`  ✗ ${m}`));
  }
  
  await prisma.$disconnect();
}

checkTravel().catch(console.error);
