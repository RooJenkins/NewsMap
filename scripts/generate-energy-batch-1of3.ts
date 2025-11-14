import Anthropic from '@anthropic-ai/sdk';
import { PrismaClient } from '@prisma/client';

const anthropic = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });
const prisma = new PrismaClient();

// Countries 4-45 (Angola through Equatorial Guinea) - 42 countries
const ENERGY_BATCH_1 = [
  { name: 'Angola', lat: -11.2027, lng: 17.8739 },
  { name: 'Argentina', lat: -38.4161, lng: -63.6167 },
  { name: 'Armenia', lat: 40.0691, lng: 45.0382 },
  { name: 'Australia', lat: -25.2744, lng: 133.7751 },
  { name: 'Austria', lat: 47.5162, lng: 14.5501 },
  { name: 'Azerbaijan', lat: 40.1431, lng: 47.5769 },
  { name: 'Bangladesh', lat: 23.6850, lng: 90.3563 },
  { name: 'Belarus', lat: 53.7098, lng: 27.9534 },
  { name: 'Belgium', lat: 50.5039, lng: 4.4699 },
  { name: 'Belize', lat: 17.1899, lng: -88.4976 },
  { name: 'Benin', lat: 9.3077, lng: 2.3158 },
  { name: 'Bhutan', lat: 27.5142, lng: 90.4336 },
  { name: 'Bolivia', lat: -16.2902, lng: -63.5887 },
  { name: 'Bosnia and Herzegovina', lat: 43.9159, lng: 17.6791 },
  { name: 'Botswana', lat: -22.3285, lng: 24.6849 },
  { name: 'Brazil', lat: -14.2350, lng: -51.9253 },
  { name: 'Brunei', lat: 4.5353, lng: 114.7277 },
  { name: 'Bulgaria', lat: 42.7339, lng: 25.4858 },
  { name: 'Burkina Faso', lat: 12.2383, lng: -1.5616 },
  { name: 'Burundi', lat: -3.3731, lng: 29.9189 },
  { name: 'Cambodia', lat: 12.5657, lng: 104.9910 },
  { name: 'Cameroon', lat: 7.3697, lng: 12.3547 },
  { name: 'Canada', lat: 56.1304, lng: -106.3468 },
  { name: 'Central African Republic', lat: 6.6111, lng: 20.9394 },
  { name: 'Chad', lat: 15.4542, lng: 18.7322 },
  { name: 'Chile', lat: -35.6751, lng: -71.5430 },
  { name: 'China', lat: 35.8617, lng: 104.1954 },
  { name: 'Colombia', lat: 4.5709, lng: -74.2973 },
  { name: 'Costa Rica', lat: 9.7489, lng: -83.7534 },
  { name: 'Croatia', lat: 45.1, lng: 15.2 },
  { name: 'Cuba', lat: 21.5218, lng: -77.7812 },
  { name: 'Cyprus', lat: 35.1264, lng: 33.4299 },
  { name: 'Czechia', lat: 49.8175, lng: 15.4730 },
  { name: 'Democratic Republic of the Congo', lat: -4.0383, lng: 21.7587 },
  { name: 'Denmark', lat: 56.2639, lng: 9.5018 },
  { name: 'Djibouti', lat: 11.8251, lng: 42.5903 },
  { name: 'Dominican Republic', lat: 18.7357, lng: -70.1627 },
  { name: 'East Timor', lat: -8.8742, lng: 125.7275 },
  { name: 'Ecuador', lat: -1.8312, lng: -78.1834 },
  { name: 'Egypt', lat: 26.8206, lng: 30.8025 },
  { name: 'El Salvador', lat: 13.7942, lng: -88.8965 },
  { name: 'Equatorial Guinea', lat: 1.6508, lng: 10.2679 }
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
  console.log(`Starting generation of Energy Batch 1/3 (${ENERGY_BATCH_1.length} countries)...\n`);

  for (let i = 0; i < ENERGY_BATCH_1.length; i++) {
    const country = ENERGY_BATCH_1[i];
    console.log(`\n[${i + 1}/${ENERGY_BATCH_1.length}] Processing ${country.name}...`);

    try {
      const summary = await generateEnergySummary(country.name);
      await saveSummary(country, summary);

      // Rate limiting - wait 1 second between requests
      if (i < ENERGY_BATCH_1.length - 1) {
        await new Promise(resolve => setTimeout(resolve, 1000));
      }
    } catch (error) {
      console.error(`Error processing ${country.name}:`, error);
      // Continue with next country
    }
  }

  console.log(`\n✓ Completed Energy Batch 1/3 (${ENERGY_BATCH_1.length} countries)!`);
  await prisma.$disconnect();
}

generateAll();
