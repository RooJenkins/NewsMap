import 'dotenv/config';
import { PrismaClient } from '@prisma/client';
import Anthropic from '@anthropic-ai/sdk';

const prisma = new PrismaClient();
const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

const COUNTRIES = [
  'Bolivia', 'Bosnia and Herzegovina', 'Botswana', 'Brazil', 'Bulgaria', 'Burkina Faso',
  'Cambodia', 'Cameroon', 'Canada', 'Chile', 'China', 'Colombia', 'Costa Rica',
  'Croatia', 'Cuba', 'Cyprus', 'Czech Republic', 'Democratic Republic of Congo',
  'Denmark', 'Dominican Republic', 'Ecuador', 'Egypt', 'El Salvador', 'Estonia',
  'Ethiopia', 'Fiji', 'Finland', 'France', 'Georgia', 'Germany', 'Ghana', 'Greece',
  'Guatemala', 'Haiti', 'Honduras', 'Hungary', 'India', 'Indonesia', 'Iran', 'Iraq',
  'Ireland', 'Israel', 'Italy', 'Japan', 'Jordan', 'Kazakhstan', 'Kenya', 'Kuwait',
  'Laos', 'Latvia', 'Lebanon', 'Libya', 'Lithuania', 'Luxembourg', 'Malaysia',
  'Mexico', 'Moldova', 'Mongolia', 'Montenegro', 'Morocco', 'Mozambique', 'Myanmar'
];

const STYLE_GUIDE = `
You are writing a Culture & Arts analysis in the voice of Jerry Saltz (art critic) and Mark Kermode (film critic).

VOICE: Passionate, opinionated, celebrates creativity while being honest about limitations. Makes high culture accessible.

FOCUS AREAS:
- Major museums, galleries, cultural institutions
- Film, music, and performing arts scenes
- UNESCO World Heritage sites
- Contemporary artists and cultural movements
- Government arts funding and censorship
- Cultural exports and soft power

LENGTH: 2,500-3,500 characters

STRUCTURE:
1. Opening Hook (100-150 words) - Lead with most compelling cultural fact or recent development
2. Current State (300-400 words) - Museums, institutions, contemporary scene
3. Challenges & Controversies (300-400 words) - Funding, censorship, access issues
4. Future Outlook (200-300 words) - Emerging artists, trends to watch
5. Bottom Line (100 words) - Punchy synthesis

STYLE:
- Be specific: name actual museums, artists, films, albums, performances
- Passionate but honest - don't oversell struggling scenes
- Connect high and low culture
- Use vivid, sensory language
- Forward-looking: what's emerging, what to watch

Write as if you're an art/film critic who genuinely cares about the cultural scene.`;

interface CountryCoordinates {
  [key: string]: { lat: number; lng: number };
}

const COUNTRY_COORDS: CountryCoordinates = {
  'Bolivia': { lat: -16.5, lng: -68.15 },
  'Bosnia and Herzegovina': { lat: 43.8564, lng: 18.4131 },
  'Botswana': { lat: -24.6282, lng: 25.9231 },
  'Brazil': { lat: -15.7939, lng: -47.8828 },
  'Bulgaria': { lat: 42.6977, lng: 23.3219 },
  'Burkina Faso': { lat: 12.3714, lng: -1.5197 },
  'Cambodia': { lat: 11.5564, lng: 104.9282 },
  'Cameroon': { lat: 3.848, lng: 11.5021 },
  'Canada': { lat: 45.4215, lng: -75.6972 },
  'Chile': { lat: -33.4489, lng: -70.6693 },
  'China': { lat: 39.9042, lng: 116.4074 },
  'Colombia': { lat: 4.711, lng: -74.0721 },
  'Costa Rica': { lat: 9.9281, lng: -84.0907 },
  'Croatia': { lat: 45.815, lng: 15.9819 },
  'Cuba': { lat: 23.1136, lng: -82.3666 },
  'Cyprus': { lat: 35.1856, lng: 33.3823 },
  'Czech Republic': { lat: 50.0755, lng: 14.4378 },
  'Democratic Republic of Congo': { lat: -4.3276, lng: 15.3136 },
  'Denmark': { lat: 55.6761, lng: 12.5683 },
  'Dominican Republic': { lat: 18.4861, lng: -69.9312 },
  'Ecuador': { lat: -0.1807, lng: -78.4678 },
  'Egypt': { lat: 30.0444, lng: 31.2357 },
  'El Salvador': { lat: 13.6929, lng: -89.2182 },
  'Estonia': { lat: 59.437, lng: 24.7536 },
  'Ethiopia': { lat: 9.03, lng: 38.74 },
  'Fiji': { lat: -18.1416, lng: 178.4419 },
  'Finland': { lat: 60.1695, lng: 24.9354 },
  'France': { lat: 48.8566, lng: 2.3522 },
  'Georgia': { lat: 41.7151, lng: 44.8271 },
  'Germany': { lat: 52.52, lng: 13.405 },
  'Ghana': { lat: 5.6037, lng: -0.187 },
  'Greece': { lat: 37.9838, lng: 23.7275 },
  'Guatemala': { lat: 14.6349, lng: -90.5069 },
  'Haiti': { lat: 18.5944, lng: -72.3074 },
  'Honduras': { lat: 14.0723, lng: -87.1921 },
  'Hungary': { lat: 47.4979, lng: 19.0402 },
  'India': { lat: 28.6139, lng: 77.209 },
  'Indonesia': { lat: -6.2088, lng: 106.8456 },
  'Iran': { lat: 35.6892, lng: 51.389 },
  'Iraq': { lat: 33.3152, lng: 44.3661 },
  'Ireland': { lat: 53.3498, lng: -6.2603 },
  'Israel': { lat: 32.0853, lng: 34.7818 },
  'Italy': { lat: 41.9028, lng: 12.4964 },
  'Japan': { lat: 35.6762, lng: 139.6503 },
  'Jordan': { lat: 31.9454, lng: 35.9284 },
  'Kazakhstan': { lat: 51.1694, lng: 71.4491 },
  'Kenya': { lat: -1.2921, lng: 36.8219 },
  'Kuwait': { lat: 29.3759, lng: 47.9774 },
  'Laos': { lat: 17.9757, lng: 102.6331 },
  'Latvia': { lat: 56.9496, lng: 24.1052 },
  'Lebanon': { lat: 33.8886, lng: 35.4955 },
  'Libya': { lat: 32.8872, lng: 13.1913 },
  'Lithuania': { lat: 54.6872, lng: 25.2797 },
  'Luxembourg': { lat: 49.6116, lng: 6.13 },
  'Malaysia': { lat: 3.139, lng: 101.6869 },
  'Mexico': { lat: 19.4326, lng: -99.1332 },
  'Moldova': { lat: 47.0105, lng: 28.8638 },
  'Mongolia': { lat: 47.8864, lng: 106.9057 },
  'Montenegro': { lat: 42.4304, lng: 19.2594 },
  'Morocco': { lat: 33.9716, lng: -6.8498 },
  'Mozambique': { lat: -25.9655, lng: 32.5832 },
  'Myanmar': { lat: 16.8661, lng: 96.1951 }
};

async function generateCultureWriteup(country: string): Promise<{
  summary: string;
  issues: string[];
  topStories: Array<{ title: string; link: string }>;
}> {
  console.log(`\n🎨 Generating Culture & Arts write-up for ${country}...`);

  const prompt = `${STYLE_GUIDE}

Generate a comprehensive Culture & Arts analysis for ${country}.

TODAY'S DATE: November 13, 2025

Return your response as JSON:
{
  "summary": "Full write-up text (2,500-3,500 characters)",
  "issues": ["Issue 1", "Issue 2", "Issue 3", "Issue 4", "Issue 5"],
  "topStories": [
    {"title": "Recent cultural news headline", "link": "https://example.com/story1"},
    {"title": "Another relevant story", "link": "https://example.com/story2"},
    {"title": "Third cultural development", "link": "https://example.com/story3"}
  ]
}

Make it passionate, specific, and honest. Name real museums, artists, films, institutions.`;

  const message = await anthropic.messages.create({
    model: 'claude-sonnet-4-20250514',
    max_tokens: 4000,
    messages: [{
      role: 'user',
      content: prompt
    }]
  });

  const content = message.content[0];
  if (content.type !== 'text') {
    throw new Error('Unexpected response type');
  }

  const jsonMatch = content.text.match(/\{[\s\S]*\}/);
  if (!jsonMatch) {
    throw new Error('No JSON found in response');
  }

  return JSON.parse(jsonMatch[0]);
}

async function insertCultureWriteup(country: string, data: {
  summary: string;
  issues: string[];
  topStories: Array<{ title: string; link: string }>;
}) {
  const coords = COUNTRY_COORDS[country];
  if (!coords) {
    throw new Error(`No coordinates found for ${country}`);
  }

  await prisma.locationSummary.upsert({
    where: {
      name_type_category: {
        name: country,
        type: 'country',
        category: 'culture'
      }
    },
    create: {
      name: country,
      type: 'country',
      country: country,
      category: 'culture',
      lat: coords.lat,
      lng: coords.lng,
      summary: data.summary,
      issues: JSON.stringify(data.issues),
      topStories: JSON.stringify(data.topStories),
      storyCount: 0
    },
    update: {
      summary: data.summary,
      issues: JSON.stringify(data.issues),
      topStories: JSON.stringify(data.topStories),
      updatedAt: new Date()
    }
  });

  console.log(`✅ Inserted Culture & Arts write-up for ${country}`);
}

async function main() {
  console.log(`🎭 Generating Culture & Arts write-ups for ${COUNTRIES.length} countries (A-M)`);
  console.log('Countries:', COUNTRIES.join(', '));

  let successCount = 0;
  let errorCount = 0;

  for (const country of COUNTRIES) {
    try {
      const data = await generateCultureWriteup(country);
      await insertCultureWriteup(country, data);
      successCount++;

      // Small delay to avoid rate limits
      await new Promise(resolve => setTimeout(resolve, 1000));
    } catch (error) {
      console.error(`❌ Error processing ${country}:`, error);
      errorCount++;
    }
  }

  console.log(`\n${'='.repeat(60)}`);
  console.log(`✅ CULTURE A-M COMPLETE: ${successCount} countries processed`);
  console.log(`❌ Errors: ${errorCount}`);
  console.log(`${'='.repeat(60)}`);

  await prisma.$disconnect();
}

main();
