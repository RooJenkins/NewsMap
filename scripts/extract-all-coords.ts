// Script to extract all country coordinates from travel batch scripts
import { execSync } from 'child_process';
import fs from 'fs';

const batchFiles = [
  'generate-travel-batch-1.ts',
  'generate-travel-batch-2.ts',
  'generate-travel-batch-3.ts',
  'generate-travel-batch-4.ts',
  'generate-travel-batch-5.ts',
  'generate-travel-batch-6.ts',
  'generate-travel-batch-7.ts',
  'generate-travel-batch-8.ts',
  'generate-travel-batch-9.ts',
  'generate-travel-batch-10.ts',
];

const countries: { name: string; lat: number; lng: number }[] = [];

for (const file of batchFiles) {
  const filePath = `/home/user/NewsMap/scripts/${file}`;
  if (fs.existsSync(filePath)) {
    const content = fs.readFileSync(filePath, 'utf-8');

    // Extract all countries with their coordinates
    const regex = /{\s*name:\s*'([^']+)',\s*lat:\s*([-\d.]+),\s*lng:\s*([-\d.]+),/gs;
    let match;

    while ((match = regex.exec(content)) !== null) {
      countries.push({
        name: match[1],
        lat: parseFloat(match[2]),
        lng: parseFloat(match[3])
      });
    }
  }
}

console.log(`Extracted ${countries.length} countries with coordinates`);
console.log(JSON.stringify(countries, null, 2));
