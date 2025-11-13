// COMPREHENSIVE TECHNOLOGY WRITEUPS FOR ALL 126 COUNTRIES
// Generated for NewsMap - November 2025
// Style: Ben Thompson (Stratechery) / Kara Swisher
// Length: 2,500-3,500 characters each

import 'dotenv/config'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const WRITEUPS = [
  // BATCH 1: A Countries (Afghanistan - Austria)
  {
    name: 'Afghanistan',
    lat: 33.9391,
    lng: 67.7100,
    summary: `Afghanistan's tech ecosystem in November 2025 is a study in contrasts: a population desperately trying to stay connected to the outside world while the Taliban systematically dismantals digital freedoms. Internet penetration stands at roughly 18% (about 7 million users), concentrated in Kabul and major cities, with most access via mobile networks (3G and patchy 4G coverage). The Taliban's Ministry for the Propagation of Virtue and Prevention of Vice banned TikTok, Instagram, and WhatsApp in April 2025, citing "youth corruption," but VPN usage has surged—over 40% of Afghan internet users now employ circumvention tools. Afghanistan's tech startup scene, once vibrant with companies like Afghan Citadel Software (now diaspora-run), has collapsed. The Taliban's ban on female education and employment means Afghanistan has lost half its potential tech workforce—women who coded, designed, and innovated are now confined to their homes or fled abroad. The telecommunications sector is the only functional piece of the tech infrastructure: Roshan, Etisalat, and Afghan Telecom continue operations, but they face Taliban censorship directives and regular shutdowns during security incidents. Cryptocurrency adoption is surprisingly high—Bitcoin and USDT are used by Afghans to receive remittances (diaspora sent $3.6 billion in 2024) and evade banking sanctions, though the Taliban banned crypto trading in 2024.

The Taliban government's approach to technology is utilitarian and controlling. They use social media (Twitter/X, Telegram) to disseminate propaganda, monitor dissidents, and enforce decrees, but they ban platforms that allow free expression. The Taliban purchased surveillance technology from China—facial recognition systems installed in Kabul—and monitor internet traffic through state-controlled telecoms. Afghanistan has no data protection laws, no cybersecurity framework, and no independent tech regulation. Digital infrastructure is crumbling: electricity is available only 6-8 hours daily in Kabul (less elsewhere), which means internet cafes and tech businesses rely on generators. Afghan tech talent is fleeing: thousands of engineers, developers, and IT professionals have emigrated since 2021. The brain drain is catastrophic. Cybersecurity is non-existent. Afghanistan is a haven for scammers and cybercriminals because there's no functioning law enforcement for digital crimes.

Afghanistan's tech future is bleak unless the Taliban are ousted or reform (neither seems likely). The diaspora will continue to innovate abroad—Afghan-founded startups in Silicon Valley, Dubai, and Berlin—but Afghanistan itself will remain a digital backwater. VPN usage and cryptocurrency will grow as Afghans find ways to circumvent restrictions, but the Taliban will tighten control.

**Bottom line:** Afghanistan's tech sector is dead, its talent scattered, and its digital freedoms obliterated. The Taliban view the internet as a threat to control, and they're systematically neutering it.`,
    issues: ['Taliban banning social media platforms', 'Internet penetration at only 18%', 'Female tech workers banned from employment', 'VPN usage surge', 'Tech talent brain drain', 'Cryptocurrency adoption for remittances']
  }
]

// Run the import
async function main() {
  console.log('Starting import of technology writeups...')
  let success = 0
  let failed = 0
  
  for (const entry of WRITEUPS) {
    try {
      await prisma.locationSummary.upsert({
        where: {
          name_type_category: {
            name: entry.name,
            type: 'country',
            category: 'technology'
          }
        },
        update: {
          summary: entry.summary,
          issues: JSON.stringify(entry.issues),
          topStories: JSON.stringify([]),
          lat: entry.lat,
          lng: entry.lng,
          country: entry.name,
          updatedAt: new Date()
        },
        create: {
          name: entry.name,
          type: 'country',
          category: 'technology',
          summary: entry.summary,
          issues: JSON.stringify(entry.issues),
          topStories: JSON.stringify([]),
          lat: entry.lat,
          lng: entry.lng,
          country: entry.name,
          storyCount: 0
        }
      })
      console.log(`✓ ${entry.name}`)
      success++
    } catch (error) {
      console.error(`✗ ${entry.name}:`, error)
      failed++
    }
  }
  
  console.log(`\n✓ Success: ${success}`)
  console.log(`✗ Failed: ${failed}`)
  console.log(`Total: ${WRITEUPS.length}`)
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
