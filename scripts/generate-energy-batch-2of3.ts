import Anthropic from '@anthropic-ai/sdk';
import { PrismaClient } from '@prisma/client';

const anthropic = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });
const prisma = new PrismaClient();

// Countries 46-87 (Eritrea through Lebanon) - 42 countries
const ENERGY_BATCH_2 = [
  { name: 'Eritrea', lat: 15.1794, lng: 39.7823 },
  { name: 'Estonia', lat: 58.5953, lng: 25.0136 },
  { name: 'Ethiopia', lat: 9.1450, lng: 40.4897 },
  { name: 'Falkland Islands', lat: -51.7963, lng: -59.5236 },
  { name: 'Fiji', lat: -17.7134, lng: 178.0650 },
  { name: 'Finland', lat: 61.9241, lng: 25.7482 },
  { name: 'France', lat: 46.2276, lng: 2.2137 },
  { name: 'French Southern and Antarctic Lands', lat: -49.2804, lng: 69.3486 },
  { name: 'Gabon', lat: -0.8037, lng: 11.6094 },
  { name: 'Gambia', lat: 13.4432, lng: -15.3101 },
  { name: 'Georgia', lat: 42.3154, lng: 43.3569 },
  { name: 'Germany', lat: 51.1657, lng: 10.4515 },
  { name: 'Ghana', lat: 7.9465, lng: -1.0232 },
  { name: 'Greece', lat: 39.0742, lng: 21.8243 },
  { name: 'Greenland', lat: 71.7069, lng: -42.6043 },
  { name: 'Guatemala', lat: 15.7835, lng: -90.2308 },
  { name: 'Guinea', lat: 9.9456, lng: -9.6966 },
  { name: 'Guinea-Bissau', lat: 11.8037, lng: -15.1804 },
  { name: 'Guyana', lat: 4.8604, lng: -58.9302 },
  { name: 'Haiti', lat: 18.9712, lng: -72.2852 },
  { name: 'Honduras', lat: 15.2000, lng: -86.2419 },
  { name: 'Hungary', lat: 47.1625, lng: 19.5033 },
  { name: 'Iceland', lat: 64.9631, lng: -19.0208 },
  { name: 'India', lat: 20.5937, lng: 78.9629 },
  { name: 'Indonesia', lat: -0.7893, lng: 113.9213 },
  { name: 'Iran', lat: 32.4279, lng: 53.6880 },
  { name: 'Iraq', lat: 33.2232, lng: 43.6793 },
  { name: 'Ireland', lat: 53.4129, lng: -8.2439 },
  { name: 'Israel', lat: 31.0461, lng: 34.8516 },
  { name: 'Italy', lat: 41.8719, lng: 12.5674 },
  { name: 'Ivory Coast', lat: 7.5400, lng: -5.5471 },
  { name: 'Jamaica', lat: 18.1096, lng: -77.2975 },
  { name: 'Japan', lat: 36.2048, lng: 138.2529 },
  { name: 'Jordan', lat: 30.5852, lng: 36.2384 },
  { name: 'Kazakhstan', lat: 48.0196, lng: 66.9237 },
  { name: 'Kenya', lat: -0.0236, lng: 37.9062 },
  { name: 'Kosovo', lat: 42.6026, lng: 20.9030 },
  { name: 'Kuwait', lat: 29.3117, lng: 47.4818 },
  { name: 'Kyrgyzstan', lat: 41.2044, lng: 74.7661 },
  { name: 'Laos', lat: 19.8563, lng: 102.4955 },
  { name: 'Latvia', lat: 56.8796, lng: 24.6032 },
  { name: 'Lebanon', lat: 33.8547, lng: 35.8623 }
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
  console.log(`Starting generation of Energy Batch 2/3 (${ENERGY_BATCH_2.length} countries)...\n`);

  for (let i = 0; i < ENERGY_BATCH_2.length; i++) {
    const country = ENERGY_BATCH_2[i];
    console.log(`\n[${i + 1}/${ENERGY_BATCH_2.length}] Processing ${country.name}...`);

    try {
      const summary = await generateEnergySummary(country.name);
      await saveSummary(country, summary);

      // Rate limiting - wait 1 second between requests
      if (i < ENERGY_BATCH_2.length - 1) {
        await new Promise(resolve => setTimeout(resolve, 1000));
      }
    } catch (error) {
      console.error(`Error processing ${country.name}:`, error);
      // Continue with next country
    }
  }

  console.log(`\n✓ Completed Energy Batch 2/3 (${ENERGY_BATCH_2.length} countries)!`);
  await prisma.$disconnect();
}

generateAll();
