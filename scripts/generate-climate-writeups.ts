import { PrismaClient } from '@prisma/client'
import { ALL_COUNTRIES } from './generation-helpers'

const prisma = new PrismaClient()

// Bill McKibben voice characteristics for climate writeups
const CLIMATE_VOICE = {
  legend: 'Bill McKibben',
  characteristics: [
    'Urgent but not despairing',
    'Scientific facts with moral clarity',
    'Connects local impacts to global crisis',
    'Solutions-oriented activism',
    'Calls out fossil fuel industry directly',
    '"We\'re running out of time, but here\'s hope" energy'
  ],
  opening: 'Lead with climate impact or resistance story',
  language: '"The physics is clear...", "Here\'s what gives me hope...", "We\'re running out of time, but..."',
  avoid: 'Both-sidesism, corporate greenwashing acceptance'
}

// Generate climate writeup prompt for a country
function generatePrompt(country: string): string {
  return `You are writing in the distinctive voice and style of ${CLIMATE_VOICE.legend}.

**Voice Characteristics:**
${CLIMATE_VOICE.characteristics.map(c => `- ${c}`).join('\n')}

**Opening Style:** ${CLIMATE_VOICE.opening}

**Language Patterns:** ${CLIMATE_VOICE.language}

**Avoid:** ${CLIMATE_VOICE.avoid}

---

Generate a comprehensive summary of **Climate & Environment** in **${country}** based on the latest November 2025 news.

Use your knowledge to find real, current events related to climate and environment in ${country}.

**Format:**

# ${country} - Climate & Environment

[Opening hook in ${CLIMATE_VOICE.legend}'s distinctive style - ~150 words]

## The Big Issue 1: [Title]
[Deep dive ~200 words in ${CLIMATE_VOICE.legend}'s voice]

## The Big Issue 2: [Title]
[Deep dive ~200 words in ${CLIMATE_VOICE.legend}'s voice]

## The Big Issue 3: [Title]
[Deep dive ~200 words in ${CLIMATE_VOICE.legend}'s voice]

## The International Angle
[~150 words on global implications in ${CLIMATE_VOICE.legend}'s style]

## The Bottom Line
[~100 words synthesis and forward look in ${CLIMATE_VOICE.legend}'s voice]

**CRITICAL REQUIREMENTS:**
- Write EXACTLY as ${CLIMATE_VOICE.legend} would write
- Use ONLY real, current November 2025 news and events
- Be specific: names, dates, numbers, quotes
- Target: 4,000-6,000 characters
- Make it engaging and character-driven
- Stay true to the voice throughout
- Focus on climate crisis, renewable energy, extreme weather, fossil fuel resistance
- Connect local climate impacts to global patterns

Generate the summary now:`
}

// Main function - displays prompts for manual generation
async function generateClimateWriteups() {
  console.log('🌍 Climate & Environment Writeup Generation Plan')
  console.log(`📝 Voice: ${CLIMATE_VOICE.legend}`)
  console.log(`📍 Countries: ${ALL_COUNTRIES.length}`)
  console.log()
  console.log('=' .repeat(80))
  console.log()

  // Check existing writeups
  const existing = await prisma.locationSummary.findMany({
    where: {
      type: 'country',
      category: 'climate'
    }
  })

  const existingSet = new Set(existing.map(e => e.name))
  const remaining = ALL_COUNTRIES.filter(c => !existingSet.has(c.name))

  console.log(`✅ Already complete: ${existing.length}/${ALL_COUNTRIES.length}`)
  console.log(`⏳ Remaining: ${remaining.length}`)
  console.log()

  if (remaining.length === 0) {
    console.log('🎉 All climate writeups are already generated!')
    return
  }

  console.log('📋 Countries needing climate writeups:')
  console.log()

  // Group by region
  const americas = remaining.filter(c => c.lat > -60 && c.lng < -30)
  const europe = remaining.filter(c => c.lat > 35 && c.lng > -15 && c.lng < 60)
  const asia = remaining.filter(c => c.lat > 0 && c.lng > 60)
  const africa = remaining.filter(c => c.lat < 35 && c.lng > -20 && c.lng < 55)
  const oceania = remaining.filter(c => !americas.includes(c) && !europe.includes(c) && !asia.includes(c) && !africa.includes(c))

  if (americas.length > 0) {
    console.log(`🌎 Americas (${americas.length}):`)
    americas.forEach(c => console.log(`   - ${c.name}`))
    console.log()
  }

  if (europe.length > 0) {
    console.log(`🌍 Europe (${europe.length}):`)
    europe.forEach(c => console.log(`   - ${c.name}`))
    console.log()
  }

  if (asia.length > 0) {
    console.log(`🌏 Asia (${asia.length}):`)
    asia.forEach(c => console.log(`   - ${c.name}`))
    console.log()
  }

  if (africa.length > 0) {
    console.log(`🌍 Africa (${africa.length}):`)
    africa.forEach(c => console.log(`   - ${c.name}`))
    console.log()
  }

  if (oceania.length > 0) {
    console.log(`🌊 Oceania (${oceania.length}):`)
    oceania.forEach(c => console.log(`   - ${c.name}`))
    console.log()
  }

  console.log('=' .repeat(80))
  console.log()
  console.log('📝 GENERATION PROMPTS:')
  console.log()
  console.log('I will now generate writeups for each country.')
  console.log('Progress will be reported every 20 countries.')
  console.log()

  // Output first country prompt as example
  if (remaining.length > 0) {
    console.log('Example prompt for', remaining[0].name + ':')
    console.log()
    console.log(generatePrompt(remaining[0].name))
  }
}

generateClimateWriteups()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
