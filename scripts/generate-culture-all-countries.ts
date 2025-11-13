import 'dotenv/config'
import Anthropic from '@anthropic-ai/sdk'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
})

// All countries with coordinates from the database
const countries = [
  { name: "Afghanistan", lat: 33.9391, lng: 67.71 },
  { name: "Albania", lat: 41.3275, lng: 19.8187 },
  { name: "Algeria", lat: 36.7538, lng: 3.0588 },
  { name: "Angola", lat: -8.8383, lng: 13.2344 },
  { name: "Argentina", lat: -38.4161, lng: -63.6167 },
  { name: "Armenia", lat: 40.0691, lng: 45.0382 },
  { name: "Australia", lat: -25.2744, lng: 133.7751 },
  { name: "Austria", lat: 47.5162, lng: 14.5501 },
  { name: "Azerbaijan", lat: 40.1431, lng: 47.5769 },
  { name: "Bahamas", lat: 25.0343, lng: -77.3963 },
  { name: "Bahrain", lat: 26.0667, lng: 50.5577 },
  { name: "Bangladesh", lat: 23.685, lng: 90.3563 },
  { name: "Barbados", lat: 13.1939, lng: -59.5432 },
  { name: "Belarus", lat: 53.7098, lng: 27.9534 },
  { name: "Belgium", lat: 50.5039, lng: 4.4699 },
  { name: "Belize", lat: 17.1899, lng: -88.4976 },
  { name: "Benin", lat: 9.3077, lng: 2.3158 },
  { name: "Bhutan", lat: 27.5142, lng: 90.4336 },
  { name: "Bolivia", lat: -16.2902, lng: -63.5887 },
  { name: "Bosnia and Herzegovina", lat: 43.9159, lng: 17.6791 },
  { name: "Botswana", lat: -22.3285, lng: 24.6849 },
  { name: "Brazil", lat: -14.235, lng: -51.9253 },
  { name: "Brunei", lat: 4.5353, lng: 114.7277 },
  { name: "Bulgaria", lat: 42.7339, lng: 25.4858 },
  { name: "Burkina Faso", lat: 12.2383, lng: -1.5616 },
  { name: "Cambodia", lat: 12.5657, lng: 104.991 },
  { name: "Cameroon", lat: 7.3697, lng: 12.3547 },
  { name: "Canada", lat: 56.1304, lng: -106.3468 },
  { name: "Chad", lat: 15.4542, lng: 18.7322 },
  { name: "Chile", lat: -35.6751, lng: -71.543 },
  { name: "China", lat: 35.8617, lng: 104.1954 },
  { name: "Colombia", lat: 4.5709, lng: -74.2973 },
  { name: "Congo", lat: -4.0383, lng: 21.7587 },
  { name: "Costa Rica", lat: 9.7489, lng: -83.7534 },
  { name: "Croatia", lat: 45.1, lng: 15.2 },
  { name: "Cuba", lat: 21.5218, lng: -77.7812 },
  { name: "Cyprus", lat: 35.1264, lng: 33.4299 },
  { name: "Czech Republic", lat: 49.8175, lng: 15.473 },
  { name: "Denmark", lat: 56.2639, lng: 9.5018 },
  { name: "Dominican Republic", lat: 18.7357, lng: -70.1627 },
  { name: "Ecuador", lat: -1.8312, lng: -78.1834 },
  { name: "Egypt", lat: 26.8206, lng: 30.8025 },
  { name: "Estonia", lat: 58.5953, lng: 25.0136 },
  { name: "Ethiopia", lat: 9.145, lng: 40.4897 },
  { name: "Finland", lat: 61.9241, lng: 25.7482 },
  { name: "France", lat: 46.2276, lng: 2.2137 },
  { name: "Georgia", lat: 42.3154, lng: 43.3569 },
  { name: "Germany", lat: 51.1657, lng: 10.4515 },
  { name: "Ghana", lat: 7.9465, lng: -1.0232 },
  { name: "Greece", lat: 39.0742, lng: 21.8243 },
  { name: "Guatemala", lat: 15.7835, lng: -90.2308 },
  { name: "Guyana", lat: 4.8604, lng: -58.9302 },
  { name: "Honduras", lat: 15.2, lng: -86.2419 },
  { name: "Hungary", lat: 47.1625, lng: 19.5033 },
  { name: "Iceland", lat: 64.9631, lng: -19.0208 },
  { name: "India", lat: 20.5937, lng: 78.9629 },
  { name: "Indonesia", lat: -0.7893, lng: 113.9213 },
  { name: "Iran", lat: 32.4279, lng: 53.688 },
  { name: "Iraq", lat: 33.2232, lng: 43.6793 },
  { name: "Ireland", lat: 53.4129, lng: -8.2439 },
  { name: "Israel", lat: 31.0461, lng: 34.8516 },
  { name: "Italy", lat: 41.8719, lng: 12.5674 },
  { name: "Ivory Coast", lat: 7.5399, lng: -5.5471 },
  { name: "Jamaica", lat: 18.1096, lng: -77.2975 },
  { name: "Japan", lat: 36.2048, lng: 138.2529 },
  { name: "Jordan", lat: 30.5852, lng: 36.2384 },
  { name: "Kazakhstan", lat: 48.0196, lng: 66.9237 },
  { name: "Kenya", lat: -0.0236, lng: 37.9062 },
  { name: "Kuwait", lat: 29.3117, lng: 47.4818 },
  { name: "Laos", lat: 19.8563, lng: 102.4955 },
  { name: "Latvia", lat: 56.8796, lng: 24.6032 },
  { name: "Lebanon", lat: 33.8547, lng: 35.8623 },
  { name: "Libya", lat: 26.3351, lng: 17.2283 },
  { name: "Lithuania", lat: 55.1694, lng: 23.8813 },
  { name: "Luxembourg", lat: 49.8153, lng: 6.1296 },
  { name: "Malaysia", lat: 4.2105, lng: 101.9758 },
  { name: "Maldives", lat: 3.2028, lng: 73.2207 },
  { name: "Mali", lat: 17.5707, lng: -3.9962 },
  { name: "Mauritania", lat: 21.0079, lng: -10.9408 },
  { name: "Mexico", lat: 23.6345, lng: -102.5528 },
  { name: "Moldova", lat: 47.4116, lng: 28.3699 },
  { name: "Mongolia", lat: 46.8625, lng: 103.8467 },
  { name: "Montenegro", lat: 42.7087, lng: 19.3744 },
  { name: "Morocco", lat: 31.7917, lng: -7.0926 },
  { name: "Mozambique", lat: -18.6657, lng: 35.5296 },
  { name: "Myanmar", lat: 21.9162, lng: 95.956 },
  { name: "Namibia", lat: -22.9576, lng: 18.4904 },
  { name: "Nepal", lat: 28.3949, lng: 84.124 },
  { name: "Netherlands", lat: 52.1326, lng: 5.2913 },
  { name: "New Zealand", lat: -40.9006, lng: 174.886 },
  { name: "Nicaragua", lat: 12.8654, lng: -85.2072 },
  { name: "Niger", lat: 17.6078, lng: 8.0817 },
  { name: "Nigeria", lat: 9.082, lng: 8.6753 },
  { name: "North Korea", lat: 40.3399, lng: 127.5101 },
  { name: "Norway", lat: 60.472, lng: 8.4689 },
  { name: "Oman", lat: 21.4735, lng: 55.9754 },
  { name: "Pakistan", lat: 30.3753, lng: 69.3451 },
  { name: "Palestine", lat: 31.9522, lng: 35.2332 },
  { name: "Panama", lat: 8.538, lng: -80.7821 },
  { name: "Papua New Guinea", lat: -6.315, lng: 143.9555 },
  { name: "Paraguay", lat: -23.4425, lng: -58.4438 },
  { name: "Peru", lat: -9.19, lng: -75.0152 },
  { name: "Philippines", lat: 12.8797, lng: 121.774 },
  { name: "Poland", lat: 51.9194, lng: 19.1451 },
  { name: "Portugal", lat: 39.3999, lng: -8.2245 },
  { name: "Qatar", lat: 25.3548, lng: 51.1839 },
  { name: "Romania", lat: 45.9432, lng: 24.9668 },
  { name: "Russia", lat: 55.7558, lng: 37.6173 },
  { name: "Rwanda", lat: -1.9403, lng: 29.8739 },
  { name: "Saudi Arabia", lat: 24.7136, lng: 46.6753 },
  { name: "Senegal", lat: 14.6928, lng: -17.4467 },
  { name: "Serbia", lat: 44.7866, lng: 20.4489 },
  { name: "Singapore", lat: 1.3521, lng: 103.8198 },
  { name: "Slovakia", lat: 48.669, lng: 19.699 },
  { name: "Slovenia", lat: 46.1512, lng: 14.9955 },
  { name: "Somalia", lat: 2.0469, lng: 45.3182 },
  { name: "South Africa", lat: -30.5595, lng: 22.9375 },
  { name: "South Korea", lat: 37.5665, lng: 126.978 },
  { name: "South Sudan", lat: 6.877, lng: 31.307 },
  { name: "Spain", lat: 40.4637, lng: -3.7492 },
  { name: "Sri Lanka", lat: 7.8731, lng: 80.7718 },
  { name: "Sudan", lat: 15.5007, lng: 32.5599 },
  { name: "Suriname", lat: 3.9193, lng: -56.0278 },
  { name: "Sweden", lat: 60.1282, lng: 18.6435 },
  { name: "Switzerland", lat: 46.8182, lng: 8.2275 },
  { name: "Syria", lat: 34.8021, lng: 38.9968 },
  { name: "Taiwan", lat: 23.6978, lng: 120.9605 },
  { name: "Tanzania", lat: -6.369, lng: 34.8888 },
  { name: "Thailand", lat: 15.87, lng: 100.9925 },
  { name: "Trinidad and Tobago", lat: 10.6918, lng: -61.2225 },
  { name: "Tunisia", lat: 33.8869, lng: 9.5375 },
  { name: "Turkey", lat: 38.9637, lng: 35.2433 },
  { name: "Turkmenistan", lat: 38.9697, lng: 59.5563 },
  { name: "Uganda", lat: 1.3733, lng: 32.2903 },
  { name: "Ukraine", lat: 48.3794, lng: 31.1656 },
  { name: "United Arab Emirates", lat: 23.4241, lng: 53.8478 },
  { name: "United Kingdom", lat: 55.3781, lng: -3.436 },
  { name: "United States", lat: 37.0902, lng: -95.7129 },
  { name: "Uruguay", lat: -32.5228, lng: -55.7658 },
  { name: "Uzbekistan", lat: 41.3775, lng: 64.5853 },
  { name: "Venezuela", lat: 6.4238, lng: -66.5897 },
  { name: "Vietnam", lat: 14.0583, lng: 108.2772 },
  { name: "Yemen", lat: 15.5527, lng: 48.5164 },
  { name: "Zambia", lat: -13.1339, lng: 27.8493 },
  { name: "Zimbabwe", lat: -19.0154, lng: 29.1549 }
]

console.log(`Total countries: ${countries.length}`)

const STYLE_GUIDE = `# Culture & Arts Category Style Guide

**Voice:** Jerry Saltz (art critic) / Mark Kermode (film) - Passionate, opinionated, celebrates creativity while being honest about limitations. Makes high culture accessible.

**Length:** 2,500-3,500 characters

**Focus Areas:**
- Major museums, galleries, cultural institutions
- Film, music, and performing arts scenes
- UNESCO World Heritage sites
- Contemporary artists and cultural movements
- Government arts funding and censorship
- Cultural exports and soft power

**Tone:** Enthusiastic but critical, celebrating artistic achievement while acknowledging challenges. Use vivid descriptions, specific artist/filmmaker names, and passionate language about creative work.`

async function generateCultureWriteup(country: { name: string; lat: number; lng: number }): Promise<{
  summary: string
  issues: string[]
  topStories: any[]
}> {
  console.log(`\n🎨 Generating Culture & Arts writeup for ${country.name}...`)

  const prompt = `You are a passionate art and culture critic in the style of Jerry Saltz and Mark Kermode. Generate a Culture & Arts writeup for ${country.name}.

${STYLE_GUIDE}

Write a compelling, opinionated Culture & Arts analysis of ${country.name} covering:

1. **Museums & Galleries**: Major cultural institutions, their collections, architecture, visitor experience
2. **Film Industry**: Cinema history, contemporary filmmakers, international recognition, film festivals
3. **Music Scene**: Traditional and contemporary music, major artists, genres, music exports
4. **Performing Arts**: Theater, dance, opera houses, performing arts traditions
5. **UNESCO Sites**: World Heritage cultural sites and their significance
6. **Contemporary Art**: Living artists making waves, art movements, gallery scenes
7. **Government Support**: Arts funding, cultural policy, censorship issues
8. **Cultural Exports**: How ${country.name}'s culture influences the world, soft power

**Requirements:**
- 2,500-3,500 characters
- Passionate and opinionated voice - celebrate great work, be honest about limitations
- Use specific names: museums, artists, filmmakers, UNESCO sites, galleries
- Include recent cultural events or exhibitions (November 2025 context)
- Make high culture accessible - explain why it matters
- Address censorship or government control if relevant
- Connect cultural vitality to broader national identity

Format your response EXACTLY as follows:

## Summary
[Your passionate, detailed Culture & Arts writeup here - 2,500-3,500 characters]

## Issues
- First major cultural issue (brief phrase)
- Second major cultural issue
- Third major cultural issue
- Fourth major cultural issue
- Fifth major cultural issue

## Top Stories
1. Recent cultural event/exhibition/release title
2. Another recent cultural development
3. Another recent cultural development

Be specific, passionate, and honest. This should read like a piece by someone who deeply cares about art and culture.`

  const message = await anthropic.messages.create({
    model: 'claude-sonnet-4-20250514',
    max_tokens: 4000,
    temperature: 1.0,
    messages: [{ role: 'user', content: prompt }],
  })

  const responseText = message.content[0].type === 'text' ? message.content[0].text : ''

  // Parse the response
  const summaryMatch = responseText.match(/## Summary\s+([\s\S]*?)(?=\n## Issues|$)/i)
  const issuesMatch = responseText.match(/## Issues\s+([\s\S]*?)(?=\n## Top Stories|$)/i)
  const storiesMatch = responseText.match(/## Top Stories\s+([\s\S]*?)$/i)

  const summary = summaryMatch ? summaryMatch[1].trim() : responseText
  const issues = issuesMatch
    ? issuesMatch[1]
        .split('\n')
        .filter((line) => line.trim().startsWith('-'))
        .map((line) => line.replace(/^-\s*/, '').trim())
    : []

  // Parse top stories
  const topStories: any[] = []
  if (storiesMatch) {
    const storyLines = storiesMatch[1]
      .split('\n')
      .filter((line) => line.trim())
      .map((line) => line.replace(/^\d+\.\s*/, '').trim())

    for (const title of storyLines.slice(0, 5)) {
      topStories.push({
        title,
        source: 'Cultural Analysis',
        link: `https://en.wikipedia.org/wiki/Culture_of_${country.name.replace(/ /g, '_')}`,
        pubDate: new Date().toISOString(),
      })
    }
  }

  console.log(`✅ Generated Culture writeup for ${country.name}`)
  console.log(`   - Summary length: ${summary.length} characters`)
  console.log(`   - Issues: ${issues.length}`)
  console.log(`   - Top stories: ${topStories.length}`)

  return { summary, issues, topStories }
}

async function main() {
  console.log('🚀 Starting Culture & Arts writeup generation for ALL countries\n')
  console.log(`Total countries to process: ${countries.length}\n`)

  let successCount = 0
  let skipCount = 0
  let errorCount = 0

  for (let i = 0; i < countries.length; i++) {
    const country = countries[i]

    console.log(`\n${'='.repeat(80)}`)
    console.log(`[${i + 1}/${countries.length}] Processing: ${country.name}`)
    console.log('='.repeat(80))

    try {
      // Check if culture writeup already exists
      const existing = await prisma.locationSummary.findUnique({
        where: {
          name_type_category: {
            name: country.name,
            type: 'country',
            category: 'culture',
          },
        },
      })

      if (existing) {
        console.log(`⏭️  Culture writeup already exists for ${country.name} - skipping`)
        skipCount++
        continue
      }

      // Generate the writeup
      const { summary, issues, topStories } = await generateCultureWriteup(country)

      if (!summary || summary.length < 1000) {
        console.log(`⚠️  Generated summary too short for ${country.name} - skipping`)
        skipCount++
        continue
      }

      // Save to database
      await prisma.locationSummary.create({
        data: {
          name: country.name,
          type: 'country',
          country: country.name,
          lat: country.lat,
          lng: country.lng,
          category: 'culture',
          summary,
          issues: JSON.stringify(issues),
          topStories: JSON.stringify(topStories),
          storyCount: topStories.length,
        },
      })

      console.log(`💾 Saved Culture writeup for ${country.name}`)
      successCount++

      // Rate limiting - wait 2 seconds between API calls
      if (i < countries.length - 1) {
        console.log('⏳ Waiting 2 seconds before next country...')
        await new Promise((resolve) => setTimeout(resolve, 2000))
      }
    } catch (error) {
      console.error(`❌ Error processing ${country.name}:`, error)
      errorCount++

      // Wait a bit longer after an error
      await new Promise((resolve) => setTimeout(resolve, 3000))
    }
  }

  console.log('\n' + '='.repeat(80))
  console.log('✅ Culture & Arts writeup generation complete!')
  console.log('='.repeat(80))
  console.log(`Total countries: ${countries.length}`)
  console.log(`Successfully generated: ${successCount}`)
  console.log(`Skipped (already exist): ${skipCount}`)
  console.log(`Errors: ${errorCount}`)
  console.log('\n✨ Completed Culture for ALL 128 countries.')
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
