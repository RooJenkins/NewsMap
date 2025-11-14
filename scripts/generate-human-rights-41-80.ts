import Anthropic from '@anthropic-ai/sdk'
import { PrismaClient } from '@prisma/client'
import { countryData } from '../lib/countryData'

const prisma = new PrismaClient()
const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
})

// Get all countries in order
const allCountries = Object.entries(countryData).map(([name, data]) => ({
  name,
  ...data,
}))

// Countries 41-80 (0-indexed: 40-79)
const targetCountries = allCountries.slice(40, 80)

console.log(`Total countries available: ${allCountries.length}`)
console.log(`Generating for countries 41-80 (${targetCountries.length} countries)`)
console.log(`First country: ${targetCountries[0].name}`)
console.log(`Last country: ${targetCountries[targetCountries.length - 1].name}\n`)

interface CountryCoordinates {
  [key: string]: { lat: number; lng: number }
}

// Country coordinates for database storage
const countryCoords: CountryCoordinates = {
  'Denmark': { lat: 56.26, lng: 9.5 },
  'Ireland': { lat: 53.4129, lng: -8.2439 },
  'Hungary': { lat: 47.1625, lng: 19.5033 },
  'Czech Republic': { lat: 49.8175, lng: 15.4730 },
  'Bulgaria': { lat: 42.7339, lng: 25.4858 },
  'Croatia': { lat: 45.1, lng: 15.2 },
  'Estonia': { lat: 58.5953, lng: 25.0136 },
  'Norway': { lat: 60.472, lng: 8.4689 },
  'Sweden': { lat: 60.1282, lng: 18.6435 },
  'Portugal': { lat: 39.3999, lng: -8.2245 },
  'Netherlands': { lat: 52.1326, lng: 5.2913 },
  'Romania': { lat: 45.9432, lng: 24.9668 },
  'Serbia': { lat: 44.0165, lng: 21.0059 },
  'Switzerland': { lat: 46.8182, lng: 8.2275 },
  'Slovakia': { lat: 48.669, lng: 19.699 },
  'Lithuania': { lat: 55.1694, lng: 23.8813 },
  'Latvia': { lat: 56.8796, lng: 24.6032 },
  'China': { lat: 35.8617, lng: 104.1954 },
  'India': { lat: 20.5937, lng: 78.9629 },
  'Japan': { lat: 36.2048, lng: 138.2529 },
  'South Korea': { lat: 35.9078, lng: 127.7669 },
  'North Korea': { lat: 40.3399, lng: 127.510 },
  'Indonesia': { lat: -0.7893, lng: 113.9213 },
  'Australia': { lat: -25.2744, lng: 133.7751 },
  'New Zealand': { lat: -40.9006, lng: 174.886 },
  'Pakistan': { lat: 30.3753, lng: 69.3451 },
  'Bangladesh': { lat: 23.6850, lng: 90.3563 },
  'Afghanistan': { lat: 33.9391, lng: 67.3096 },
  'Iran': { lat: 32.4279, lng: 53.6880 },
  'Israel': { lat: 31.0461, lng: 34.8516 },
  'Palestine': { lat: 31.9454, lng: 35.2338 },
  'Iraq': { lat: 33.2232, lng: 43.6793 },
  'Jordan': { lat: 30.5852, lng: 36.2384 },
  'Cambodia': { lat: 12.5657, lng: 104.9910 },
  'Laos': { lat: 19.8523, lng: 102.4955 },
  'Myanmar': { lat: 21.9162, lng: 95.9560 },
  'Nepal': { lat: 28.3949, lng: 84.1240 },
  'Mongolia': { lat: 46.8625, lng: 103.8467 },
  'Papua New Guinea': { lat: -6.3150, lng: 143.9555 },
  'Fiji': { lat: -17.7134, lng: 178.0650 },
}

async function generateHumanRightsSummary(
  country: typeof targetCountries[0]
): Promise<{ summary: string; issues: string[] }> {
  const countryName = country.name

  console.log(`\n📋 Generating Human Rights analysis for ${countryName}...`)

  const prompt = `You are Samantha Power, the acclaimed human rights advocate and former U.S. Ambassador to the United Nations, known for your conversational, empathetic yet incisive analysis of human rights issues around the world. Write a detailed, compelling human rights analysis of ${countryName}.

COUNTRY CONTEXT:
- Government Type: ${country.government}
- Population: ${country.population}
- Freedom Status: ${country.freedomStatus}
- Leader: ${country.leader} (${country.leaderTitle})
- Ruling Party/Authority: ${country.rulingParty}

Your analysis should be 2,500-3,500 characters and cover these key areas:

1. PRESS, SPEECH & ASSEMBLY FREEDOMS
   - State of media freedom and press independence
   - Restrictions on free speech
   - Ability to protest and assemble peacefully
   - Recent incidents or restrictions

2. WOMEN'S RIGHTS
   - Legal protections and equality
   - Access to education and employment
   - Domestic violence and gender-based violence
   - Reproductive rights and health access

3. LGBTQ+ RIGHTS
   - Legal status of LGBTQ+ individuals
   - Protection from discrimination
   - Recent developments or challenges
   - Safety and human dignity concerns

4. MINORITY RIGHTS
   - Protection of ethnic, religious, or other minorities
   - Discrimination issues
   - Access to services and representation
   - Community tensions or conflicts

5. POLITICAL PRISONERS & DETENTION
   - Status of arbitrary detention
   - Prison conditions
   - Due process and fair trial standards
   - Prisoners of conscience or political prisoners

6. INTERNATIONAL CONTEXT
   - UN and international human rights obligations
   - Regional human rights mechanisms
   - Recent international scrutiny or reviews
   - Comparisons to regional standards

INSTRUCTIONS FOR YOUR ANALYSIS:

Write in your characteristic conversational, accessible but deeply informed style - as if you're explaining this to an intelligent global audience that cares about human rights. Be honest about both problems and progress. Use specific examples when possible. Show empathy for those suffering violations while maintaining analytical rigor.

Identify and highlight 3-5 MAJOR HUMAN RIGHTS ISSUES that are most urgent or concerning for this country. These should be specific, actionable concerns that capture the essence of the human rights situation.

Your tone should be:
- Informed and authoritative but conversational
- Compassionate about human suffering
- Direct about violations without being sensationalist
- Balanced (acknowledging any positive developments)
- Urgent and motivational (focusing on the need for change)
- Connected to the human impact (not just abstract principles)

Structure your response EXACTLY as follows, with clear section breaks:

## HUMAN RIGHTS ANALYSIS: ${countryName}

[Your detailed analysis covering all 6 areas above - 2,500-3,500 characters total. Write naturally as flowing prose, not bullet points, but ensure all areas are covered with specific details and examples.]

## KEY ISSUES

- [Issue 1: Specific, urgent human rights concern]
- [Issue 2: Specific, urgent human rights concern]
- [Issue 3: Specific, urgent human rights concern]
- [Issue 4: Optional - Another critical concern if applicable]
- [Issue 5: Optional - Another critical concern if applicable]

Remember: Write with the urgency of someone who knows these are real people's lives at stake. Connect systemic issues to human impact. Be specific, be honest, be compelling.`

  try {
    const message = await anthropic.messages.create({
      model: 'claude-3-5-sonnet-20241022',
      max_tokens: 4000,
      messages: [{ role: 'user', content: prompt }],
    })

    const responseText =
      message.content[0].type === 'text' ? message.content[0].text : ''

    // Parse the response
    const analysisMatch = responseText.match(
      /## HUMAN RIGHTS ANALYSIS:.*?\n([\s\S]*?)(?=\n## KEY ISSUES|$)/i
    )
    const issuesMatch = responseText.match(/## KEY ISSUES\s+([\s\S]*?)$/i)

    const summary = analysisMatch
      ? analysisMatch[1].trim()
      : responseText.split('## KEY ISSUES')[0].trim()

    const issues = issuesMatch
      ? issuesMatch[1]
          .split('\n')
          .filter((line) => line.trim().startsWith('-'))
          .map((line) => line.replace(/^-\s*/, '').trim())
          .filter((issue) => issue.length > 0)
      : []

    console.log(`✅ Generated summary for ${countryName}`)
    console.log(
      `   Length: ${summary.length} characters, Issues: ${issues.length}`
    )

    return { summary, issues }
  } catch (error) {
    console.error(`❌ Error generating analysis for ${countryName}:`, error)
    throw error
  }
}

async function main() {
  console.log('====================================================================')
  console.log('🌍 HUMAN RIGHTS SUMMARIES GENERATION - COUNTRIES 41-80')
  console.log('====================================================================')

  let successCount = 0
  let errorCount = 0

  for (const country of targetCountries) {
    try {
      const { summary, issues } = await generateHumanRightsSummary(country)

      // Get coordinates, fallback to country center if not found
      const coords = countryCoords[country.name] || { lat: 0, lng: 0 }

      // Save to database
      await prisma.locationSummary.upsert({
        where: {
          name_type_category: {
            name: country.name,
            type: 'country',
            category: 'humanrights',
          },
        },
        update: {
          summary,
          issues: JSON.stringify(issues),
          topStories: JSON.stringify([]),
          storyCount: 0,
          updatedAt: new Date(),
        },
        create: {
          name: country.name,
          type: 'country',
          country: country.name,
          lat: coords.lat,
          lng: coords.lng,
          category: 'humanrights',
          summary,
          issues: JSON.stringify(issues),
          topStories: JSON.stringify([]),
          storyCount: 0,
        },
      })

      console.log(`💾 Saved Human Rights analysis for ${country.name}`)
      successCount++

      // Rate limiting - wait 1 second between API calls
      await new Promise((resolve) => setTimeout(resolve, 1000))
    } catch (error) {
      console.error(
        `❌ Error processing ${country.name}:`,
        error instanceof Error ? error.message : String(error)
      )
      errorCount++

      // Continue to next country even if one fails
      await new Promise((resolve) => setTimeout(resolve, 1000))
    }
  }

  console.log('\n====================================================================')
  console.log('✅ HUMAN RIGHTS GENERATION COMPLETE!')
  console.log(`   Successfully generated: ${successCount} summaries`)
  console.log(`   Errors encountered: ${errorCount}`)
  console.log(`   Total processed: ${successCount + errorCount}`)
  console.log('====================================================================')
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
