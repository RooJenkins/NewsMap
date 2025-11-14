import Anthropic from '@anthropic-ai/sdk';
import { PrismaClient } from '@prisma/client';

const anthropic = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });
const prisma = new PrismaClient();

const CRIME_COUNTRIES = [
  { name: 'Burkina Faso', lat: 12.2383, lng: -1.5616 },
  { name: 'Burundi', lat: -3.3731, lng: 29.9189 },
  { name: 'Cambodia', lat: 12.5657, lng: 104.9910 },
  { name: 'Lithuania', lat: 55.1694, lng: 23.8813 },
  { name: 'Luxembourg', lat: 49.8153, lng: 6.1296 },
  { name: 'Madagascar', lat: -18.7669, lng: 46.8691 },
  { name: 'Malawi', lat: -13.2543, lng: 34.3015 },
  { name: 'Malaysia', lat: 4.2105, lng: 101.9758 },
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
Write in the style of Preet Bharara (former US Attorney) and Jeffrey Toobin (legal analyst):
- Sharp, authoritative analysis of legal and criminal justice systems
- Focus on institutional strengths and weaknesses
- Balance between crime data and justice system functioning
- Professional prosecutorial perspective
- Evidence-based, avoid sensationalism
- Length: 2,500-3,500 characters

Cover these key areas:
- Crime rates and trends: Overall crime statistics, violent vs property crime, trends over time
- Justice system structure: Court system, judiciary independence, legal framework
- Police forces: Law enforcement capacity, training, corruption levels, reform efforts
- Prisons and incarceration: Prison system, incarceration rates, conditions, reform
- Major cases: High-profile criminal cases, corruption trials, ongoing investigations
- Rule of law: Legal protections, due process, judicial independence
- Organized crime: Drug trafficking, gangs, transnational crime networks
`;

async function generateCrimeSummary(countryName: string): Promise<string> {
  console.log(`\nGenerating Crime summary for ${countryName}...`);

  const prompt = `You are a legal analyst writing in the style of Preet Bharara and Jeffrey Toobin. Write a comprehensive Crime & Justice summary for ${countryName}.

${STYLE_GUIDE}

Write a detailed, authoritative analysis of ${countryName}'s crime and justice landscape as of November 2025. Be specific, cite actual developments, and maintain a prosecutorial analytical tone.

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
        category: 'crime'
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
      category: 'crime',
      summary,
      issues: '[]',
      topStories: '[]',
      storyCount: 0
    }
  });
  console.log(`✓ Saved ${country.name} to database`);
}

async function generateAll() {
  console.log(`Starting generation of ${CRIME_COUNTRIES.length} Crime summaries...\n`);

  for (let i = 0; i < CRIME_COUNTRIES.length; i++) {
    const country = CRIME_COUNTRIES[i];
    console.log(`\n[${i + 1}/${CRIME_COUNTRIES.length}] Processing ${country.name}...`);

    try {
      const summary = await generateCrimeSummary(country.name);
      await saveSummary(country, summary);

      // Rate limiting - wait 1 second between requests
      if (i < CRIME_COUNTRIES.length - 1) {
        await new Promise(resolve => setTimeout(resolve, 1000));
      }
    } catch (error) {
      console.error(`Error processing ${country.name}:`, error);
      // Continue with next country
    }
  }

  console.log(`\n✓ Completed all ${CRIME_COUNTRIES.length} Crime summaries!`);
  await prisma.$disconnect();
}

generateAll();
