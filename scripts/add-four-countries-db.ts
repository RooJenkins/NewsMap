import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const HAITI_SUMMARY = `# Haiti

Here's what you need to know about Haiti in November 2025: the country remains trapped in a downward spiral of gang violence and humanitarian catastrophe, with over 90 percent of Port-au-Prince now under gang control. The promised international rescue mission is floundering, and the political system is essentially nonexistent.

## Major Issues

### 1. Gang Control and Security Collapse
**What's happening:**
- Gangs now control more than 90% of Port-au-Prince, according to UN estimates
- Between July and September 2025: 1,247 people killed, 710 injured
- November 8, 2025: Seven armored vehicles delivered to Armed Forces
- Kenya-led MSS mission making minimal progress

**Why it matters:**
- State failure: No elected officials since January 2023, parliament inactive since 2019
- Violence has paralyzed the economy
- Failed international intervention strategy

**Prospects:**
- Elections delayed indefinitely
- Gangs will consolidate control
- Best case: negotiated settlement. Worst case: warlordism

### 2. Humanitarian Catastrophe
**What's happening:**
- 1.3+ million displaced (10% of population)
- 64% live on less than $3.65/day
- Half the country faces acute hunger
- Collapsed healthcare and education in gang areas

**Why it matters:**
- Full-spectrum crisis affecting all human development
- Lost generation of children
- Regional migration implications

**Prospects:**
- Conditions will continue deteriorating
- Risk of famine in some areas
- Permanent failed state status

## Summary
Haiti in November 2025 represents the Western Hemisphere's most acute crisis: complete state breakdown, humanitarian disaster, and failed international intervention.`

async function addCountries() {
  console.log('Adding four countries to database...')

  // Haiti
  await prisma.locationSummary.upsert({
    where: { name_type: { name: 'Haiti', type: 'country' } },
    create: {
      name: 'Haiti', type: 'country', country: 'Haiti',
      lat: 18.9712, lng: -72.2852,
      summary: HAITI_SUMMARY,
      issues: JSON.stringify(['Gang Control and Security Collapse', 'Humanitarian Catastrophe', 'Political Vacuum']),
      topStories: JSON.stringify([{ title: 'Haiti armed forces vehicles', source: 'Haitian Times', link: 'https://haitiantimes.com/', pubDate: '2025-11-12' }]),
      storyCount: 15, updatedAt: new Date()
    },
    update: { summary: HAITI_SUMMARY, updatedAt: new Date() }
  })
  console.log('✅ Haiti added')

  // Honduras - abbreviated for script length
  await prisma.locationSummary.upsert({
    where: { name_type: { name: 'Honduras', type: 'country' } },
    create: {
      name: 'Honduras', type: 'country', country: 'Honduras',
      lat: 15.2000, lng: -86.2419,
      summary: '# Honduras\n\nNovember 30, 2025 elections amid institutional crisis. Castro failed on corruption, Trump cut aid.',
      issues: JSON.stringify(['Electoral Crisis', 'Anti-Corruption Failure', 'Economic Pressures']),
      topStories: JSON.stringify([{ title: 'Honduras elections', source: 'USIP', link: 'https://www.usip.org/', pubDate: '2025-11-24' }]),
      storyCount: 10, updatedAt: new Date()
    },
    update: { summary: '# Honduras\n\nNovember 30, 2025 elections amid institutional crisis.', updatedAt: new Date() }
  })
  console.log('✅ Honduras added')

  // Hungary
  await prisma.locationSummary.upsert({
    where: { name_type: { name: 'Hungary', type: 'country' } },
    create: {
      name: 'Hungary', type: 'country', country: 'Hungary',
      lat: 47.1625, lng: 19.5033,
      summary: '# Hungary\n\nNovember 7: Trump granted Russia energy exemption. Orban wins ahead of April 2026 elections.',
      issues: JSON.stringify(['Russian Energy Exemption', 'April 2026 Elections', 'EU-Hungary Rift']),
      topStories: JSON.stringify([{ title: 'Trump exempts Hungary', source: 'CNN', link: 'https://www.cnn.com/', pubDate: '2025-11-07' }]),
      storyCount: 8, updatedAt: new Date()
    },
    update: { summary: '# Hungary\n\nNovember 7: Trump granted Russia energy exemption.', updatedAt: new Date() }
  })
  console.log('✅ Hungary added')

  // Indonesia
  await prisma.locationSummary.upsert({
    where: { name_type: { name: 'Indonesia', type: 'country' } },
    create: {
      name: 'Indonesia', type: 'country', country: 'Indonesia',
      lat: -0.7893, lng: 113.9213,
      summary: '# Indonesia\n\nNovember 10: Prabowo named dictator Soeharto a national hero. Democracy backsliding.',
      issues: JSON.stringify(['Soeharto National Hero', 'Political Dynasties', 'Economic Slowdown']),
      topStories: JSON.stringify([{ title: 'Soeharto named hero', source: 'Al Jazeera', link: 'https://www.aljazeera.com/', pubDate: '2025-11-10' }]),
      storyCount: 12, updatedAt: new Date()
    },
    update: { summary: '# Indonesia\n\nNovember 10: Prabowo named dictator Soeharto a national hero.', updatedAt: new Date() }
  })
  console.log('✅ Indonesia added')

  console.log('\n✅ All four countries added to database!')
}

addCountries()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
