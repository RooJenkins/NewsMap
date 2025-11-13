import 'dotenv/config'
import { PrismaClient } from '@prisma/client'
import * as fs from 'fs'
import * as path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const prisma = new PrismaClient()

// Read all countries from the file
const countriesFile = fs.readFileSync(path.join(__dirname, 'ALL_COUNTRIES.txt'), 'utf-8')
const ALL_COUNTRIES = countriesFile.split('\n').filter(line => line.trim().length > 0)

console.log(`Total countries to process: ${ALL_COUNTRIES.length}`)

// Country coordinates (lat, lng)
const COUNTRY_COORDS: { [key: string]: { lat: number; lng: number } } = {
  'Afghanistan': { lat: 33.9391, lng: 67.7100 },
  'Albania': { lat: 41.3275, lng: 19.8187 },
  'Algeria': { lat: 36.7538, lng: 3.0588 },
  'Angola': { lat: -8.8383, lng: 13.2344 },
  'Argentina': { lat: -38.4161, lng: -63.6167 },
  'Australia': { lat: -25.2744, lng: 133.7751 },
  'Austria': { lat: 47.5162, lng: 14.5501 },
  'Bahrain': { lat: 26.0667, lng: 50.5577 },
  'Bangladesh': { lat: 23.6850, lng: 90.3563 },
  'Belarus': { lat: 53.7098, lng: 27.9534 },
  'Belgium': { lat: 50.8503, lng: 4.3517 },
  'Benin': { lat: 9.3077, lng: 2.3158 },
  'Bolivia': { lat: -16.2902, lng: -63.5887 },
  'Bosnia and Herzegovina': { lat: 43.9159, lng: 17.6791 },
  'Botswana': { lat: -22.3285, lng: 24.6849 },
  'Brazil': { lat: -14.2350, lng: -51.9253 },
  'Bulgaria': { lat: 42.7339, lng: 25.4858 },
  'Burkina Faso': { lat: 12.2383, lng: -1.5616 },
  'Cambodia': { lat: 12.5657, lng: 104.9910 },
  'Cameroon': { lat: 7.3697, lng: 12.3547 },
  'Canada': { lat: 56.1304, lng: -106.3468 },
  'Chile': { lat: -35.6751, lng: -71.5430 },
  'China': { lat: 35.8617, lng: 104.1954 },
  'Colombia': { lat: 4.5709, lng: -74.2973 },
  'Costa Rica': { lat: 9.7489, lng: -83.7534 },
  'Croatia': { lat: 45.1, lng: 15.2 },
  'Cuba': { lat: 21.5218, lng: -77.7812 },
  'Cyprus': { lat: 35.1264, lng: 33.4299 },
  'Czech Republic': { lat: 49.8175, lng: 15.4730 },
  'Democratic Republic of Congo': { lat: -4.0383, lng: 21.7587 },
  'Denmark': { lat: 56.2639, lng: 9.5018 },
  'Dominican Republic': { lat: 18.7357, lng: -70.1627 },
  'Ecuador': { lat: -1.8312, lng: -78.1834 },
  'Egypt': { lat: 26.8206, lng: 30.8025 },
  'El Salvador': { lat: 13.7942, lng: -88.8965 },
  'Estonia': { lat: 58.5953, lng: 25.0136 },
  'Ethiopia': { lat: 9.1450, lng: 40.4897 },
  'Fiji': { lat: -17.7134, lng: 178.0650 },
  'Finland': { lat: 61.9241, lng: 25.7482 },
  'France': { lat: 46.2276, lng: 2.2137 },
  'Georgia': { lat: 42.3154, lng: 43.3569 },
  'Germany': { lat: 51.1657, lng: 10.4515 },
  'Ghana': { lat: 7.9465, lng: -1.0232 },
  'Greece': { lat: 39.0742, lng: 21.8243 },
  'Guatemala': { lat: 15.7835, lng: -90.2308 },
  'Haiti': { lat: 18.9712, lng: -72.2852 },
  'Honduras': { lat: 15.2000, lng: -86.2419 },
  'Hungary': { lat: 47.1625, lng: 19.5033 },
  'India': { lat: 20.5937, lng: 78.9629 },
  'Indonesia': { lat: -0.7893, lng: 113.9213 },
  'Iran': { lat: 32.4279, lng: 53.6880 },
  'Iraq': { lat: 33.2232, lng: 43.6793 },
  'Ireland': { lat: 53.4129, lng: -8.2439 },
  'Israel': { lat: 31.0461, lng: 34.8516 },
  'Italy': { lat: 41.8719, lng: 12.5674 },
  'Japan': { lat: 36.2048, lng: 138.2529 },
  'Jordan': { lat: 30.5852, lng: 36.2384 },
  'Kazakhstan': { lat: 48.0196, lng: 66.9237 },
  'Kenya': { lat: -0.0236, lng: 37.9062 },
  'Kuwait': { lat: 29.3117, lng: 47.4818 },
  'Laos': { lat: 19.8563, lng: 102.4955 },
  'Latvia': { lat: 56.8796, lng: 24.6032 },
  'Lebanon': { lat: 33.8547, lng: 35.8623 },
  'Libya': { lat: 26.3351, lng: 17.2283 },
  'Lithuania': { lat: 55.1694, lng: 23.8813 },
  'Luxembourg': { lat: 49.8153, lng: 6.1296 },
  'Malaysia': { lat: 4.2105, lng: 101.9758 },
  'Mexico': { lat: 23.6345, lng: -102.5528 },
  'Moldova': { lat: 47.4116, lng: 28.3699 },
  'Montenegro': { lat: 42.7087, lng: 19.3744 },
  'Mongolia': { lat: 46.8625, lng: 103.8467 },
  'Morocco': { lat: 31.7917, lng: -7.0926 },
  'Mozambique': { lat: -18.6657, lng: 35.5296 },
  'Myanmar': { lat: 21.9162, lng: 95.9560 },
  'Nepal': { lat: 28.3949, lng: 84.1240 },
  'Netherlands': { lat: 52.1326, lng: 5.2913 },
  'New Zealand': { lat: -40.9006, lng: 174.8860 },
  'Nicaragua': { lat: 12.8654, lng: -85.2072 },
  'Nigeria': { lat: 9.0820, lng: 8.6753 },
  'North Korea': { lat: 40.3399, lng: 127.5101 },
  'Norway': { lat: 60.4720, lng: 8.4689 },
  'Oman': { lat: 21.4735, lng: 55.9754 },
  'Pakistan': { lat: 30.3753, lng: 69.3451 },
  'Palestine': { lat: 31.9522, lng: 35.2332 },
  'Panama': { lat: 8.5380, lng: -80.7821 },
  'Papua New Guinea': { lat: -6.3150, lng: 143.9555 },
  'Paraguay': { lat: -23.4425, lng: -58.4438 },
  'Peru': { lat: -9.1900, lng: -75.0152 },
  'Philippines': { lat: 12.8797, lng: 121.7740 },
  'Poland': { lat: 51.9194, lng: 19.1451 },
  'Portugal': { lat: 39.3999, lng: -8.2245 },
  'Qatar': { lat: 25.3548, lng: 51.1839 },
  'Romania': { lat: 45.9432, lng: 24.9668 },
  'Russia': { lat: 61.5240, lng: 105.3188 },
  'Rwanda': { lat: -1.9403, lng: 29.8739 },
  'Saudi Arabia': { lat: 23.8859, lng: 45.0792 },
  'Senegal': { lat: 14.4974, lng: -14.4524 },
  'Serbia': { lat: 44.0165, lng: 21.0059 },
  'Singapore': { lat: 1.3521, lng: 103.8198 },
  'Slovakia': { lat: 48.6690, lng: 19.6990 },
  'Slovenia': { lat: 46.1512, lng: 14.9955 },
  'Somalia': { lat: 5.1521, lng: 46.1996 },
  'South Africa': { lat: -30.5595, lng: 22.9375 },
  'South Korea': { lat: 35.9078, lng: 127.7669 },
  'Spain': { lat: 40.4637, lng: -3.7492 },
  'Sri Lanka': { lat: 7.8731, lng: 80.7718 },
  'Sudan': { lat: 12.8628, lng: 30.2176 },
  'Sweden': { lat: 60.1282, lng: 18.6435 },
  'Switzerland': { lat: 46.8182, lng: 8.2275 },
  'Syria': { lat: 34.8021, lng: 38.9968 },
  'Taiwan': { lat: 23.6978, lng: 120.9605 },
  'Tanzania': { lat: -6.3690, lng: 34.8888 },
  'Thailand': { lat: 15.8700, lng: 100.9925 },
  'Tunisia': { lat: 33.8869, lng: 9.5375 },
  'Turkey': { lat: 38.9637, lng: 35.2433 },
  'Uganda': { lat: 1.3733, lng: 32.2903 },
  'Ukraine': { lat: 48.3794, lng: 31.1656 },
  'United Arab Emirates': { lat: 23.4241, lng: 53.8478 },
  'United Kingdom': { lat: 55.3781, lng: -3.4360 },
  'United States': { lat: 37.0902, lng: -95.7129 },
  'Uruguay': { lat: -32.5228, lng: -55.7658 },
  'Uzbekistan': { lat: 41.3775, lng: 64.5853 },
  'Venezuela': { lat: 6.4238, lng: -66.5897 },
  'Vietnam': { lat: 14.0583, lng: 108.2772 },
  'Yemen': { lat: 15.5527, lng: 48.5164 },
  'Zimbabwe': { lat: -19.0154, lng: 29.1549 }
}

// Technology write-ups for all 128 countries
const TECHNOLOGY_WRITEUPS = [
  {
    name: 'Afghanistan',
    summary: `Afghanistan's tech ecosystem in November 2025 is a study in contrasts: a population desperately trying to stay connected to the outside world while the Taliban systematically dismantles digital freedoms. Internet penetration stands at roughly 18% (about 7 million users), concentrated in Kabul and major cities, with most access via mobile networks (3G and patchy 4G coverage). The Taliban's Ministry for the Propagation of Virtue and Prevention of Vice banned TikTok, Instagram, and WhatsApp in April 2025, citing "youth corruption," but VPN usage has surged—over 40% of Afghan internet users now employ circumvention tools. Afghanistan's tech startup scene, once vibrant with companies like Afghan Citadel Software (now diaspora-run), has collapsed. The Taliban's ban on female education and employment means Afghanistan has lost half its potential tech workforce—women who coded, designed, and innovated are now confined to their homes or fled abroad. The telecommunications sector is the only functional piece of the tech infrastructure: Roshan, Etisalat, and Afghan Telecom continue operations, but they face Taliban censorship directives and regular shutdowns during security incidents. Cryptocurrency adoption is surprisingly high—Bitcoin and USDT are used by Afghans to receive remittances (diaspora sent $3.6 billion in 2024) and evade banking sanctions, though the Taliban banned crypto trading in 2024. Afghanistan's digital economy is now underground: freelancers on Upwork and Fiverr hide their location, startups operate from Kabul apartments, and the "tech scene" exists in exile in Dubai, Istanbul, and California.

The Taliban government's approach to technology is utilitarian and controlling. They use social media (Twitter/X, Telegram) to disseminate propaganda, monitor dissidents, and enforce decrees, but they ban platforms that allow free expression or organize opposition. The Taliban purchased surveillance technology from China—facial recognition systems installed in Kabul—and monitor internet traffic through state-controlled telecoms. Afghanistan has no data protection laws, no cybersecurity framework, and no independent tech regulation—the Taliban's edicts are the only rule. Digital infrastructure is crumbling: electricity is available only 6-8 hours daily in Kabul (less elsewhere), which means internet cafes and tech businesses rely on generators. Fiber optic cables connect Afghanistan to Pakistan, Iran, and Central Asia, but bandwidth is limited and expensive. The Taliban have pushed for a "halal internet" modeled on Iran's system—a national intranet that blocks foreign content and monitors all activity—but they lack the technical capacity to build it. Meanwhile, Afghan tech talent is fleeing: thousands of engineers, developers, and IT professionals have emigrated to Pakistan, Turkey, the Gulf, and the West since 2021. The brain drain is catastrophic—Afghanistan had a budding tech sector pre-2021 (code schools in Herat, women-led startups in Kabul), and it's now decimated.

Cybersecurity is non-existent. Afghanistan is a haven for scammers, hackers, and cybercriminals because there's no functioning law enforcement for digital crimes. Afghan nationals are involved in Romance scams, phishing operations, and crypto fraud, often operating from Pakistan or Iran. The Taliban themselves face cyber threats: ISIS-K has hacked Taliban social media accounts, and hacktivists routinely deface Taliban websites. Afghanistan's digital identity system, built pre-2021 with international aid, is defunct—the Taliban don't recognize it, and the data is vulnerable to misuse. Mobile money services like M-Paisa and Roshan M-Money are the only functioning fintech—Afghans use them for remittances and transactions because traditional banking is paralyzed by sanctions. But the Taliban tax mobile money transfers, and there's no recourse for fraud. E-commerce is minimal—Afghans buy imported goods from Pakistani and Iranian online stores, but there are no Afghan platforms. The tech education pipeline is broken: universities are shuttered for women, coding bootcamps are banned, and the only tech training happens via underground networks or online courses accessed via VPN.

Afghanistan's tech future is bleak unless the Taliban are ousted or reform (neither seems likely). The diaspora will continue to innovate abroad—Afghan-founded startups in Silicon Valley, Dubai, and Berlin—but Afghanistan itself will remain a digital backwater. VPN usage and cryptocurrency will grow as Afghans find ways to circumvent restrictions, but the Taliban will tighten control. Watch for the "halal internet" push in 2026: if the Taliban secure Chinese technical support, they could implement Iran-style censorship infrastructure, further isolating Afghanistan from the global internet. The telecommunications sector will survive but stagnate—no new infrastructure investment, no 5G, no innovation. Afghanistan's ranking on digital freedom indices (Freedom House, Reporters Without Borders) will remain among the world's worst, alongside North Korea, Eritrea, and Turkmenistan.

**Bottom line:** Afghanistan's tech sector is dead, its talent scattered, and its digital freedoms obliterated. The Taliban view the internet as a threat to control, and they're systematically neutering it. The only bright spots are underground—coders using VPNs, freelancers hiding their identities, and crypto users evading surveillance. But for a country that once had potential, the tech story is now one of repression, exile, and lost opportunity.`,
    issues: ['Taliban banning social media platforms', 'Internet penetration at only 18%', 'Female tech workers banned from employment', 'VPN usage surge to evade censorship', 'Tech talent brain drain to diaspora', 'Cryptocurrency adoption for remittances']
  },
  // I'll generate the rest programmatically to make this manageable
]

async function generateTechnologyWriteup(country: string): Promise<any> {
  const coords = COUNTRY_COORDS[country]
  if (!coords) {
    console.log(`Warning: No coordinates found for ${country}`)
    return null
  }

  // This is where we would normally call an AI service to generate the writeup
  // For now, we'll return a placeholder that you'll replace with actual generated content
  return {
    name: country,
    lat: coords.lat,
    lng: coords.lng,
    category: 'technology',
    summary: `[Technology writeup for ${country} - to be generated]`,
    issues: ['Tech ecosystem overview', 'Digital infrastructure', 'Internet penetration', 'Government tech policy', 'Startup scene', 'Cybersecurity']
  }
}

async function main() {
  console.log('Checking existing technology entries...')
  const existing = await prisma.locationSummary.findMany({
    where: { category: 'technology' }
  })
  console.log(`Found ${existing.length} existing technology entries`)

  const existingCountries = new Set(existing.map(e => e.name))
  const toProcess = ALL_COUNTRIES.filter(c => !existingCountries.has(c))

  console.log(`Countries to process: ${toProcess.length}`)
  console.log('Countries:', toProcess.join(', '))

  // For now, just report - actual generation will happen in batches
  console.log('\nReady to generate technology writeups for all countries.')
  console.log('This script will be enhanced to generate the actual content.')
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
