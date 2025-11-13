import { PrismaClient } from '@prisma/client';
import * as fs from 'fs';
const prisma = new PrismaClient();

async function checkMasterList() {
  // Read master list
  const masterList = fs.readFileSync('scripts/ALL_COUNTRIES.txt', 'utf-8')
    .split('\n')
    .map(line => line.trim())
    .filter(line => line.length > 0);

  console.log('Master list countries:', masterList.length);

  // Get all technology entries
  const techEntries = await prisma.locationSummary.findMany({
    where: {
      category: 'technology',
      type: 'country'
    },
    select: { name: true }
  });

  const techCountryNames = techEntries.map(e => e.name);
  console.log('Technology entries:', techCountryNames.length);

  // Find missing
  const missing = masterList.filter(name => !techCountryNames.includes(name));

  console.log('\nMissing technology entries from master list:');
  if (missing.length === 0) {
    console.log('  ✓ ALL 126 COUNTRIES HAVE TECHNOLOGY ENTRIES!');
  } else {
    console.log('  Missing count:', missing.length);
    missing.forEach(country => console.log('    -', country));
  }

  // Check the final 9
  const finalNine = masterList.slice(-9);
  console.log('\nFinal 9 countries from master list:');
  finalNine.forEach((country, i) => {
    const exists = techCountryNames.includes(country);
    console.log(`  ${i + 1}. ${country}: ${exists ? '✓' : 'MISSING'}`);
  });

  await prisma.$disconnect();
}

checkMasterList();
