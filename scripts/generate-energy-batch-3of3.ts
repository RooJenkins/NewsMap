import Anthropic from '@anthropic-ai/sdk';
import { PrismaClient } from '@prisma/client';

const anthropic = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });
const prisma = new PrismaClient();

// Countries 88-130 (Lesotho through Qatar) - 41 countries
const ENERGY_BATCH_3 = [
  { name: 'Lesotho', lat: -29.6100, lng: 28.2336 },
  { name: 'Liberia', lat: 6.4281, lng: -9.4295 },
  { name: 'Libya', lat: 26.3351, lng: 17.2283 },
  { name: 'Lithuania', lat: 55.1694, lng: 23.8813 },
  { name: 'Luxembourg', lat: 49.8153, lng: 6.1296 },
  { name: 'Madagascar', lat: -18.7669, lng: 46.8691 },
  { name: 'Malawi', lat: -13.2543, lng: 34.3015 },
  { name: 'Malaysia', lat: 4.2105, lng: 101.9758 },
  { name: 'Mali', lat: 17.5707, lng: -3.9962 },
  { name: 'Mauritania', lat: 21.0079, lng: -10.9408 },
  { name: 'Mexico', lat: 23.6345, lng: -102.5528 },
  { name: 'Moldova', lat: 47.4116, lng: 28.3699 },
  { name: 'Mongolia', lat: 46.8625, lng: 103.8467 },
  { name: 'Montenegro', lat: 42.7087, lng: 19.3744 },
  { name: 'Morocco', lat: 31.7917, lng: -7.0926 },
  { name: 'Mozambique', lat: -18.6657, lng: 35.5296 },
  { name: 'Myanmar', lat: 21.9162, lng: 95.9560 },
  { name: 'Namibia', lat: -22.9576, lng: 18.4904 },
  { name: 'Nepal', lat: 28.3949, lng: 84.1240 },
  { name: 'Netherlands', lat: 52.1326, lng: 5.2913 },
  { name: 'New Caledonia', lat: -20.9043, lng: 165.6180 },
  { name: 'New Zealand', lat: -40.9006, lng: 174.8860 },
  { name: 'Nicaragua', lat: 12.8654, lng: -85.2072 },
  { name: 'Niger', lat: 17.6078, lng: 8.0817 },
  { name: 'Nigeria', lat: 9.0820, lng: 8.6753 },
  { name: 'North Korea', lat: 40.3399, lng: 127.5101 },
  { name: 'North Macedonia', lat: 41.6086, lng: 21.7453 },
  { name: 'Northern Cyprus', lat: 35.1856, lng: 33.3823 },
  { name: 'Norway', lat: 60.4720, lng: 8.4689 },
  { name: 'Oman', lat: 21.4735, lng: 55.9754 },
  { name: 'Pakistan', lat: 30.3753, lng: 69.3451 },
  { name: 'Palestine', lat: 31.9522, lng: 35.2332 },
  { name: 'Panama', lat: 8.5380, lng: -80.7821 },
  { name: 'Papua New Guinea', lat: -6.3150, lng: 143.9555 },
  { name: 'Paraguay', lat: -23.4425, lng: -58.4438 },
  { name: 'Peru', lat: -9.1900, lng: -75.0152 },
  { name: 'Philippines', lat: 12.8797, lng: 121.7740 },
  { name: 'Poland', lat: 51.9194, lng: 19.1451 },
  { name: 'Portugal', lat: 39.3999, lng: -8.2245 },
  { name: 'Puerto Rico', lat: 18.2208, lng: -66.5901 },
  { name: 'Qatar', lat: 25.3548, lng: 51.1839 }
];

const STYLE_GUIDE = `
Write in the style of Daniel Yergin (energy historian and analyst):
- Strategic, big-picture analysis of energy systems
- Historical context and future trajectory
- Geopolitical and economic implications
- Balance between fossil fuels and renewables transition
- Data-driven but accessible
- Length: 2,500-3,500 characters

Cover these key areas:
- Energy mix: Breakdown of energy sources (fossil fuels, nuclear, renewables)
- Major energy resources: Oil, gas, coal reserves, renewable potential
- Energy independence/dependence: Import/export dynamics, strategic vulnerabilities
- Power grid infrastructure: Electricity generation, transmission, reliability
- Energy prices: Consumer and industrial energy costs, subsidies, market dynamics
- Future energy strategy: Government plans, investment trends, transition policies
- Climate implications: Emissions, targets, renewable energy commitments
`;

async function generateEnergySummary(countryName: string): Promise<string> {
  console.log(`\nGenerating Energy summary for ${countryName}...`);

  const prompt = `You are an energy analyst writing in the style of Daniel Yergin. Write a comprehensive Energy summary for ${countryName}.

${STYLE_GUIDE}

Write a detailed, strategic analysis of ${countryName}'s energy landscape as of November 2025. Be specific about energy mix, resources, infrastructure, and future trajectory. Maintain Yergin's analytical perspective.

Target length: 2,500-3,500 characters. Return ONLY the markdown summary text, no preamble.`;

  const message = await anthropic.messages.create({
    model: 'claude-sonnet-4-20250514',
    max_tokens: 2000,
    messages: [{
      role: 'user',
      content: prompt
    }]
  });

  const summary = (message.content[0] as { type: 'text'; text: string }).text;
  console.log(`Generated ${summary.length} characters for ${countryName}`);
  return summary;
}

async function saveSummary(country: { name: string; lat: number; lng: number }, summary: string) {
  await prisma.locationSummary.upsert({
    where: {
      name_type_category: {
        name: country.name,
        type: 'country',
        category: 'energy'
      }
    },
    update: {
      summary,
      lat: country.lat,
      lng: country.lng,
      updatedAt: new Date(),
      storyCount: 0
    },
    create: {
      name: country.name,
      type: 'country',
      country: country.name,
      lat: country.lat,
      lng: country.lng,
      category: 'energy',
      summary,
      issues: '[]',
      topStories: '[]',
      storyCount: 0
    }
  });
  console.log(`✓ Saved ${country.name} to database`);
}

async function generateAll() {
  console.log(`Starting generation of Energy Batch 3/3 (${ENERGY_BATCH_3.length} countries)...\n`);

  for (let i = 0; i < ENERGY_BATCH_3.length; i++) {
    const country = ENERGY_BATCH_3[i];
    console.log(`\n[${i + 1}/${ENERGY_BATCH_3.length}] Processing ${country.name}...`);

    try {
      const summary = await generateEnergySummary(country.name);
      await saveSummary(country, summary);

      // Rate limiting - wait 1 second between requests
      if (i < ENERGY_BATCH_3.length - 1) {
        await new Promise(resolve => setTimeout(resolve, 1000));
      }
    } catch (error) {
      console.error(`Error processing ${country.name}:`, error);
      // Continue with next country
    }
  }

  console.log(`\n✓ Completed Energy Batch 3/3 (${ENERGY_BATCH_3.length} countries)!`);
  await prisma.$disconnect();
}

generateAll();
