import { PrismaClient } from '@prisma/client';
import * as fs from 'fs';

const prisma = new PrismaClient();

async function findMissing() {
  // Read all countries
  const allCountriesText = fs.readFileSync('/home/user/NewsMap/scripts/ALL_COUNTRIES.txt', 'utf-8');
  const allCountries = allCountriesText
    .split('\n')
    .map(line => line.replace(/^\s*\d+→/, '').trim())
    .filter(c => c.length > 0);

  console.log(`Total countries in list: ${allCountries.length}`);

  // Get completed
  const crimeCompleted = await prisma.locationSummary.findMany({
    where: { category: 'crime', type: 'country' },
    select: { name: true }
  });

  const energyCompleted = await prisma.locationSummary.findMany({
    where: { category: 'energy', type: 'country' },
    select: { name: true }
  });

  const crimeSet = new Set(crimeCompleted.map(c => c.name));
  const energySet = new Set(energyCompleted.map(c => c.name));

  const crimeMissing = allCountries.filter(c => !crimeSet.has(c));
  const energyMissing = allCountries.filter(c => !energySet.has(c));

  console.log(`\nCRIME: ${crimeCompleted.length} complete, ${crimeMissing.length} missing`);
  console.log('Missing Crime countries:');
  crimeMissing.forEach((c, i) => console.log(`  ${i+1}. ${c}`));

  console.log(`\n\nENERGY: ${energyCompleted.length} complete, ${energyMissing.length} missing`);
  console.log('Missing Energy countries (first 10):');
  energyMissing.slice(0, 10).forEach((c, i) => console.log(`  ${i+1}. ${c}`));
  console.log(`  ... and ${energyMissing.length - 10} more`);

  await prisma.$disconnect();
}

findMissing();
