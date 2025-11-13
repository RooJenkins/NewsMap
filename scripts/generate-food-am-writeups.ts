import { PrismaClient } from '@prisma/client';
import Anthropic from '@anthropic-ai/sdk';

const prisma = new PrismaClient();
const anthropic = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

const MISSING_COUNTRIES = [
  'Armenia', 'Azerbaijan', 'Bahamas', 'Barbados', 'Belize', 'Benin', 'Bhutan',
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

async function generateFoodWriteup(countryName: string): Promise<{
  summary: string;
  issues: string[];
  topStories: any[];
}> {
  console.log(`\n🍽️  Generating Food & Cuisine write-up for ${countryName}...`);

  const prompt = `You are a food writer in the style of Samin Nosrat (Salt, Fat, Acid, Heat) and David Chang - sensory, specific, and enthusiastically celebrating food culture.

Write a comprehensive FOOD & CUISINE write-up for **${countryName}** that captures the country's culinary landscape.

**REQUIREMENTS:**
- Length: 2,000-3,000 characters
- Voice: Sensory, enthusiastic, specific - make readers TASTE the food through your words
- Focus Areas:
  * National dishes and regional specialties (be specific - name dishes, describe flavors)
  * Street food culture and markets (vivid descriptions, what it's like to be there)
  * High-end dining scene (Michelin stars, notable restaurants and chefs)
  * Agricultural products and major food exports
  * Culinary traditions and techniques (how food is prepared, cultural significance)
  * Modern innovations and fusion trends
  * Food safety, availability, and dining culture

**STYLE GUIDELINES:**
- Use vivid sensory language - describe tastes, textures, aromas, colors
- Be specific with dish names, ingredients, cooking techniques
- Include real restaurant names, chef names, market names where relevant
- Explain WHY the food matters - cultural significance, history, ritual
- Balance traditional and contemporary dining scenes
- Use enthusiastic but informed tone - like explaining to a curious friend
- Include current details (2024-2025) - recent Michelin awards, new food trends, emerging chefs

**STRUCTURE:**
1. Opening hook - lead with the most compelling food story/dish/scene
2. National cuisine overview - signature dishes and what makes them special
3. Street food and everyday eating culture
4. Fine dining and culinary innovation
5. Agricultural context - what grows here, what's exported
6. Future trends and what to watch

Make it vivid, make it specific, make readers hungry.

Return a JSON object with:
{
  "summary": "your 2000-3000 character write-up here",
  "issues": ["issue1", "issue2", "issue3", "issue4", "issue5"],
  "topStories": []
}

The "issues" should be 5 key culinary topics/themes (e.g., "Michelin Star Boom", "Street Food Revival", "Wine Export Growth", "Farm-to-Table Movement", "Regional Cuisine Diversity").`;

  const response = await anthropic.messages.create({
    model: 'claude-sonnet-4-5-20250929',
    max_tokens: 4000,
    temperature: 1,
    messages: [{
      role: 'user',
      content: prompt
    }]
  });

  const content = response.content[0];
  if (content.type !== 'text') {
    throw new Error('Unexpected response type');
  }

  // Extract JSON from response
  const jsonMatch = content.text.match(/\{[\s\S]*\}/);
  if (!jsonMatch) {
    throw new Error('No JSON found in response');
  }

  const result = JSON.parse(jsonMatch[0]);

  console.log(`✅ Generated ${result.summary.length} characters`);
  console.log(`   Issues: ${result.issues.join(', ')}`);

  return result;
}

async function insertFoodWriteup(countryName: string, data: any) {
  // Get country location data
  const countryData = await prisma.locationSummary.findFirst({
    where: {
      type: 'country',
      name: countryName
    },
    select: { country: true, lat: true, lng: true }
  });

  if (!countryData) {
    throw new Error(`Country ${countryName} not found in database`);
  }

  await prisma.locationSummary.create({
    data: {
      name: countryName,
      type: 'country',
      country: countryData.country,
      lat: countryData.lat,
      lng: countryData.lng,
      category: 'food',
      summary: data.summary,
      issues: JSON.stringify(data.issues),
      topStories: JSON.stringify(data.topStories),
      storyCount: 0
    }
  });

  console.log(`✅ Inserted food writeup for ${countryName}`);
}

async function main() {
  console.log('=== GENERATING FOOD & CUISINE WRITEUPS FOR COUNTRIES A-M ===');
  console.log(`Total countries to process: ${MISSING_COUNTRIES.length}`);

  let successCount = 0;
  let errorCount = 0;

  for (const country of MISSING_COUNTRIES) {
    try {
      const writeup = await generateFoodWriteup(country);
      await insertFoodWriteup(country, writeup);
      successCount++;

      // Small delay to avoid rate limits
      await new Promise(resolve => setTimeout(resolve, 1000));
    } catch (error) {
      console.error(`❌ Error processing ${country}:`, error);
      errorCount++;
    }
  }

  console.log('\n=== COMPLETION REPORT ===');
  console.log(`✅ Successfully generated: ${successCount}`);
  console.log(`❌ Errors: ${errorCount}`);
  console.log(`\nFOOD A-M COMPLETE: ${successCount} countries`);

  await prisma.$disconnect();
}

main();
