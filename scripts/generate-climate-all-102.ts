import Anthropic from '@anthropic-ai/sdk';
import { PrismaClient } from '@prisma/client';
import { ALL_COUNTRIES, saveCountrySummary } from './generation-helpers';

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

const prisma = new PrismaClient();

// Bill McKibben voice characteristics for climate writeups
const CLIMATE_VOICE = {
  legend: 'Bill McKibben',
  characteristics: [
    'Urgent but hopeful - "We\'re running out of time, but here\'s what gives me hope"',
    'Scientific facts delivered with moral clarity',
    'Connects local climate impacts to the global crisis',
    'Solutions-oriented activism - always shows what people are doing',
    'Calls out fossil fuel industry directly by name',
    'Personal, passionate, but grounded in data',
    'Celebrates climate victories while maintaining urgency'
  ],
  opening: 'Lead with a striking climate impact, extreme weather event, or grassroots resistance story',
  language: '"The physics is clear...", "Here\'s what gives me hope...", "We\'re running out of time, but...", "The fossil fuel industry..."',
  avoid: 'Both-sidesism, corporate greenwashing acceptance, false balance, despair without hope'
};

function generatePrompt(country: string): string {
  return `You are writing in the distinctive voice and style of ${CLIMATE_VOICE.legend}, the legendary climate activist and author.

**Voice Characteristics:**
${CLIMATE_VOICE.characteristics.map(c => `- ${c}`).join('\n')}

**Opening Style:** ${CLIMATE_VOICE.opening}

**Language Patterns:** ${CLIMATE_VOICE.language}

**Avoid:** ${CLIMATE_VOICE.avoid}

---

Generate a comprehensive summary of **Climate & Environment** in **${country}** based on November 2025 news and recent developments.

Use your knowledge to find real, current events related to:
- Climate change impacts (extreme weather, droughts, floods, heat waves)
- Renewable energy transitions and fossil fuel resistance
- Deforestation, biodiversity loss, conservation efforts
- Climate policy, international commitments, activism
- Environmental justice issues
- Green technology and innovation

**Format:**

# ${country} - Climate & Environment

[Opening hook in ${CLIMATE_VOICE.legend}'s distinctive style - ~150 words. Start with a striking climate story or stat.]

## The Big Issue 1: [Title]
[Deep dive ~200 words in ${CLIMATE_VOICE.legend}'s voice. Be specific with names, dates, numbers.]

## The Big Issue 2: [Title]
[Deep dive ~200 words in ${CLIMATE_VOICE.legend}'s voice. Show solutions and resistance.]

## The Big Issue 3: [Title]
[Deep dive ~200 words in ${CLIMATE_VOICE.legend}'s voice. Connect to global patterns.]

## The International Angle
[~150 words on global implications, COP negotiations, cross-border impacts in ${CLIMATE_VOICE.legend}'s style]

## The Bottom Line
[~100 words synthesis. Urgent but hopeful. What's at stake and what gives you hope. In ${CLIMATE_VOICE.legend}'s voice.]

**CRITICAL REQUIREMENTS:**
- Write EXACTLY as ${CLIMATE_VOICE.legend} would write
- Use ONLY real, current November 2025 news and events
- Be specific: names, dates, numbers, quotes
- Target: 4,000-6,000 characters
- Call out fossil fuel companies and interests by name
- Show grassroots climate action and solutions
- Connect local impacts to global crisis
- Urgent tone but always include hope and action
- Stay true to McKibben's voice throughout

Generate the summary now:`;
}

function extractIssues(content: string): string[] {
  const issues: string[] = [];
  const lines = content.split('\n');

  for (const line of lines) {
    if (line.match(/^##\s+The Big Issue \d+:/)) {
      const issue = line.replace(/^##\s+The Big Issue \d+:\s+/, '').trim();
      if (issue) issues.push(issue);
    }
  }

  return issues.length > 0 ? issues : ['Climate impacts', 'Energy transition', 'Environmental policy'];
}

async function generateClimateWriteup(country: typeof ALL_COUNTRIES[0], index: number, total: number): Promise<boolean> {
  try {
    console.log(`\n[${index}/${total}] Generating ${country.name}...`);

    const prompt = generatePrompt(country.name);

    const message = await anthropic.messages.create({
      model: 'claude-sonnet-4-5-20250929',
      max_tokens: 4000,
      messages: [{
        role: 'user',
        content: prompt
      }]
    });

    const content = message.content[0].type === 'text' ? message.content[0].text : '';

    if (!content || content.length < 1000) {
      console.log(`❌ ${country.name} - Content too short or empty`);
      return false;
    }

    const issues = extractIssues(content);
    await saveCountrySummary(country, 'climate', content, issues);

    console.log(`✅ ${country.name} - ${content.length} chars, ${issues.length} issues`);
    return true;
  } catch (error) {
    console.error(`❌ ${country.name} - Error:`, error);
    return false;
  }
}

async function generateAllClimate() {
  console.log('🌍 CLIMATE & ENVIRONMENT - BILL McKIBBEN VOICE');
  console.log('='.repeat(80));

  // Get existing writeups
  const existing = await prisma.locationSummary.findMany({
    where: { type: 'country', category: 'climate' },
    select: { name: true }
  });

  const existingSet = new Set(existing.map(e => e.name));
  const remaining = ALL_COUNTRIES.filter(c => !existingSet.has(c.name));

  console.log(`\n📊 Status: ${existing.length} done, ${remaining.length} remaining`);
  console.log(`\n🎯 Generating ${remaining.length} climate writeups...`);
  console.log('📢 Will report progress every 25 countries\n');

  let successCount = 0;
  let failCount = 0;

  for (let i = 0; i < remaining.length; i++) {
    const country = remaining[i];
    const success = await generateClimateWriteup(country, i + 1, remaining.length);

    if (success) {
      successCount++;
    } else {
      failCount++;
    }

    // Report progress every 25 countries
    if ((i + 1) % 25 === 0 || i === remaining.length - 1) {
      console.log('\n' + '='.repeat(80));
      console.log(`📊 PROGRESS REPORT - ${i + 1}/${remaining.length} countries processed`);
      console.log(`✅ Successful: ${successCount}`);
      console.log(`❌ Failed: ${failCount}`);
      console.log(`📈 Success rate: ${((successCount / (i + 1)) * 100).toFixed(1)}%`);
      console.log(`🌍 Total climate writeups: ${existing.length + successCount}/114`);
      console.log('='.repeat(80) + '\n');
    }

    // Small delay to avoid rate limits
    if (i < remaining.length - 1) {
      await new Promise(resolve => setTimeout(resolve, 1000));
    }
  }

  console.log('\n' + '='.repeat(80));
  console.log('🎉 GENERATION COMPLETE!');
  console.log('='.repeat(80));
  console.log(`✅ Successfully generated: ${successCount}/${remaining.length}`);
  console.log(`❌ Failed: ${failCount}/${remaining.length}`);
  console.log(`🌍 Total climate writeups in database: ${existing.length + successCount}/114`);
  console.log('='.repeat(80));
}

generateAllClimate()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
