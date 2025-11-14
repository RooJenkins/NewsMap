import 'dotenv/config'
import Anthropic from '@anthropic-ai/sdk'
import { PrismaClient } from '@prisma/client'
import { readFileSync } from 'fs'
import { dirname, resolve } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))

// Ensure API key is loaded
if (!process.env.ANTHROPIC_API_KEY) {
  console.error('❌ ANTHROPIC_API_KEY not found in environment')
  process.exit(1)
}

const prisma = new PrismaClient()
const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
})

// All 143 countries with essential stats
const countries = [
  // Americas (27)
  { name: 'United States', lat: 37.0902, lng: -95.7129, population: '339M', gdpPerCapita: '$81K', capital: 'Washington D.C.' },
  { name: 'Canada', lat: 56.1304, lng: -106.3468, population: '40M', gdpPerCapita: '$52K', capital: 'Ottawa' },
  { name: 'Mexico', lat: 23.6345, lng: -102.5528, population: '129M', gdpPerCapita: '$14K', capital: 'Mexico City' },
  { name: 'Brazil', lat: -14.235, lng: -51.9253, population: '216M', gdpPerCapita: '$9.7K', capital: 'Brasilia' },
  { name: 'Argentina', lat: -38.4161, lng: -63.6167, population: '46M', gdpPerCapita: '$13.7K', capital: 'Buenos Aires' },
  { name: 'Chile', lat: -35.6751, lng: -71.543, population: '19M', gdpPerCapita: '$18.1K', capital: 'Santiago' },
  { name: 'Colombia', lat: 4.5709, lng: -74.2973, population: '52M', gdpPerCapita: '$7K', capital: 'Bogota' },
  { name: 'Peru', lat: -9.19, lng: -75.0152, population: '34M', gdpPerCapita: '$7.9K', capital: 'Lima' },
  { name: 'Venezuela', lat: 6.4238, lng: -66.5897, population: '28M', gdpPerCapita: '$9.6K', capital: 'Caracas' },
  { name: 'Ecuador', lat: -1.8312, lng: -78.1834, population: '18M', gdpPerCapita: '$6.6K', capital: 'Quito' },
  { name: 'Bolivia', lat: -16.2902, lng: -63.5887, population: '12M', gdpPerCapita: '$3.9K', capital: 'La Paz' },
  { name: 'Paraguay', lat: -23.4425, lng: -58.4438, population: '7M', gdpPerCapita: '$6.3K', capital: 'Asuncion' },
  { name: 'Uruguay', lat: -32.5228, lng: -55.7658, population: '3.4M', gdpPerCapita: '$22.7K', capital: 'Montevideo' },
  { name: 'Cuba', lat: 21.5218, lng: -77.7812, population: '11M', gdpPerCapita: '$9.7K', capital: 'Havana' },
  { name: 'Haiti', lat: 18.9712, lng: -72.2852, population: '11.7M', gdpPerCapita: '$1.8K', capital: 'Port-au-Prince' },
  { name: 'Dominican Republic', lat: 18.7357, lng: -70.1627, population: '11M', gdpPerCapita: '$10.3K', capital: 'Santo Domingo' },
  { name: 'Guatemala', lat: 15.7835, lng: -90.2308, population: '18M', gdpPerCapita: '$5.7K', capital: 'Guatemala City' },
  { name: 'Honduras', lat: 15.2, lng: -86.2419, population: '10M', gdpPerCapita: '$3.2K', capital: 'Tegucigalpa' },
  { name: 'El Salvador', lat: 13.7942, lng: -88.8965, population: '6.3M', gdpPerCapita: '$5.9K', capital: 'San Salvador' },
  { name: 'Nicaragua', lat: 12.8654, lng: -85.2072, population: '7M', gdpPerCapita: '$2.6K', capital: 'Managua' },
  { name: 'Costa Rica', lat: 9.7489, lng: -83.7534, population: '5.2M', gdpPerCapita: '$17.3K', capital: 'San Jose' },
  { name: 'Panama', lat: 8.538, lng: -80.7821, population: '4.4M', gdpPerCapita: '$18.9K', capital: 'Panama City' },
  { name: 'Jamaica', lat: 18.1096, lng: -77.2975, population: '2.8M', gdpPerCapita: '$6.4K', capital: 'Kingston' },
  { name: 'Trinidad and Tobago', lat: 10.691, lng: -61.2225, population: '1.5M', gdpPerCapita: '$19.3K', capital: 'Port of Spain' },
  { name: 'Guyana', lat: 4.8604, lng: -58.9302, population: '810K', gdpPerCapita: '$19.8K', capital: 'Georgetown' },
  { name: 'Suriname', lat: 3.9193, lng: -56.0278, population: '620K', gdpPerCapita: '$6.9K', capital: 'Paramaribo' },
  { name: 'Belize', lat: 17.1899, lng: -88.7979, population: '410K', gdpPerCapita: '$8.5K', capital: 'Belmopan' },

  // Europe (30)
  { name: 'United Kingdom', lat: 55.3781, lng: -3.436, population: '68M', gdpPerCapita: '$48.5K', capital: 'London' },
  { name: 'France', lat: 46.2276, lng: 2.2137, population: '68M', gdpPerCapita: '$44.1K', capital: 'Paris' },
  { name: 'Germany', lat: 51.1657, lng: 10.4515, population: '84M', gdpPerCapita: '$52.4K', capital: 'Berlin' },
  { name: 'Italy', lat: 41.8719, lng: 12.5674, population: '59M', gdpPerCapita: '$37.3K', capital: 'Rome' },
  { name: 'Spain', lat: 40.4637, lng: -3.7492, population: '48M', gdpPerCapita: '$33.3K', capital: 'Madrid' },
  { name: 'Poland', lat: 51.9194, lng: 19.1451, population: '38M', gdpPerCapita: '$22.2K', capital: 'Warsaw' },
  { name: 'Ukraine', lat: 48.3794, lng: 31.1656, population: '38M', gdpPerCapita: '$4.9K', capital: 'Kyiv' },
  { name: 'Russia', lat: 61.524, lng: 105.3188, population: '144M', gdpPerCapita: '$15.3K', capital: 'Moscow' },
  { name: 'Turkey', lat: 38.9637, lng: 35.2433, population: '86M', gdpPerCapita: '$12.8K', capital: 'Ankara' },
  { name: 'Greece', lat: 39.0742, lng: 21.8243, population: '10M', gdpPerCapita: '$23.9K', capital: 'Athens' },
  { name: 'Belgium', lat: 50.5039, lng: 4.4699, population: '11.7M', gdpPerCapita: '$54K', capital: 'Brussels' },
  { name: 'Austria', lat: 47.5162, lng: 14.5501, population: '9.1M', gdpPerCapita: '$56.6K', capital: 'Vienna' },
  { name: 'Finland', lat: 61.9241, lng: 25.7482, population: '5.6M', gdpPerCapita: '$53.6K', capital: 'Helsinki' },
  { name: 'Denmark', lat: 56.26, lng: 9.5018, population: '5.9M', gdpPerCapita: '$68.8K', capital: 'Copenhagen' },
  { name: 'Ireland', lat: 53.4129, lng: -8.2439, population: '5.2M', gdpPerCapita: '$104.8K', capital: 'Dublin' },
  { name: 'Hungary', lat: 47.1625, lng: 19.5033, population: '9.6M', gdpPerCapita: '$22.1K', capital: 'Budapest' },
  { name: 'Czech Republic', lat: 49.8175, lng: 15.473, population: '10.5M', gdpPerCapita: '$31.5K', capital: 'Prague' },
  { name: 'Bulgaria', lat: 42.7339, lng: 25.4858, population: '6.4M', gdpPerCapita: '$15.6K', capital: 'Sofia' },
  { name: 'Croatia', lat: 45.1, lng: 15.2, population: '3.9M', gdpPerCapita: '$21K', capital: 'Zagreb' },
  { name: 'Estonia', lat: 58.5953, lng: 25.0136, population: '1.4M', gdpPerCapita: '$30.7K', capital: 'Tallinn' },
  { name: 'Norway', lat: 60.472, lng: 8.4689, population: '5.5M', gdpPerCapita: '$105.5K', capital: 'Oslo' },
  { name: 'Sweden', lat: 60.1282, lng: 18.6435, population: '10.5M', gdpPerCapita: '$59.3K', capital: 'Stockholm' },
  { name: 'Portugal', lat: 39.3999, lng: -8.2245, population: '10.3M', gdpPerCapita: '$27.9K', capital: 'Lisbon' },
  { name: 'Netherlands', lat: 52.1326, lng: 5.2913, population: '17.8M', gdpPerCapita: '$61.8K', capital: 'Amsterdam' },
  { name: 'Romania', lat: 45.9432, lng: 24.9668, population: '19M', gdpPerCapita: '$18.5K', capital: 'Bucharest' },
  { name: 'Serbia', lat: 44.0165, lng: 21.0059, population: '6.7M', gdpPerCapita: '$11.6K', capital: 'Belgrade' },
  { name: 'Switzerland', lat: 46.8182, lng: 8.2275, population: '8.8M', gdpPerCapita: '$102.8K', capital: 'Bern' },
  { name: 'Slovakia', lat: 48.669, lng: 19.699, population: '5.4M', gdpPerCapita: '$24.4K', capital: 'Bratislava' },
  { name: 'Lithuania', lat: 55.1694, lng: 23.8813, population: '2.8M', gdpPerCapita: '$27.9K', capital: 'Vilnius' },
  { name: 'Latvia', lat: 56.8796, lng: 24.6032, population: '1.9M', gdpPerCapita: '$24.7K', capital: 'Riga' },

  // Asia-Pacific (43)
  { name: 'China', lat: 35.8617, lng: 104.1954, population: '1.4B', gdpPerCapita: '$13.9K', capital: 'Beijing' },
  { name: 'India', lat: 20.5937, lng: 78.9629, population: '1.4B', gdpPerCapita: '$2.8K', capital: 'New Delhi' },
  { name: 'Japan', lat: 36.2048, lng: 138.2529, population: '123M', gdpPerCapita: '$33.3K', capital: 'Tokyo' },
  { name: 'South Korea', lat: 35.9078, lng: 127.7669, population: '52M', gdpPerCapita: '$32.7K', capital: 'Seoul' },
  { name: 'North Korea', lat: 40.3399, lng: 127.5101, population: '26M', gdpPerCapita: '$1.5K', capital: 'Pyongyang' },
  { name: 'Indonesia', lat: -0.7893, lng: 113.9213, population: '277M', gdpPerCapita: '$5.1K', capital: 'Jakarta' },
  { name: 'Australia', lat: -25.2744, lng: 133.7751, population: '26M', gdpPerCapita: '$65.4K', capital: 'Canberra' },
  { name: 'New Zealand', lat: -40.9006, lng: 174.886, population: '5.2M', gdpPerCapita: '$48.7K', capital: 'Wellington' },
  { name: 'Pakistan', lat: 30.3753, lng: 69.3451, population: '240M', gdpPerCapita: '$1.6K', capital: 'Islamabad' },
  { name: 'Bangladesh', lat: 23.685, lng: 90.3563, population: '173M', gdpPerCapita: '$2.7K', capital: 'Dhaka' },
  { name: 'Afghanistan', lat: 33.9391, lng: 67.3099, population: '42M', gdpPerCapita: '$357', capital: 'Kabul' },
  { name: 'Iran', lat: 32.4279, lng: 53.688, population: '89M', gdpPerCapita: '$4.6K', capital: 'Tehran' },
  { name: 'Israel', lat: 31.0461, lng: 34.8516, population: '9.7M', gdpPerCapita: '$54.1K', capital: 'Jerusalem' },
  { name: 'Palestine', lat: 31.9454, lng: 35.2338, population: '5.4M', gdpPerCapita: '$3.5K', capital: 'Ramallah' },
  { name: 'Iraq', lat: 33.2232, lng: 43.6793, population: '45M', gdpPerCapita: '$5.9K', capital: 'Baghdad' },
  { name: 'Jordan', lat: 30.5852, lng: 36.2384, population: '11M', gdpPerCapita: '$4.7K', capital: 'Amman' },
  { name: 'Cambodia', lat: 12.5657, lng: 104.991, population: '17M', gdpPerCapita: '$1.9K', capital: 'Phnom Penh' },
  { name: 'Laos', lat: 19.8523, lng: 102.4955, population: '7.6M', gdpPerCapita: '$2K', capital: 'Vientiane' },
  { name: 'Myanmar', lat: 21.9162, lng: 95.956, population: '55M', gdpPerCapita: '$1.2K', capital: 'Naypyidaw' },
  { name: 'Nepal', lat: 28.3949, lng: 84.124, population: '30M', gdpPerCapita: '$1.4K', capital: 'Kathmandu' },
  { name: 'Mongolia', lat: 46.8625, lng: 103.8467, population: '3.4M', gdpPerCapita: '$5.9K', capital: 'Ulaanbaatar' },
  { name: 'Papua New Guinea', lat: -6.315, lng: 143.9555, population: '10M', gdpPerCapita: '$3.2K', capital: 'Port Moresby' },
  { name: 'Fiji', lat: -17.7134, lng: 178.065, population: '930K', gdpPerCapita: '$5.9K', capital: 'Suva' },
  { name: 'Bahrain', lat: 26.0667, lng: 50.5577, population: '1.5M', gdpPerCapita: '$30K', capital: 'Manama' },
  { name: 'Kuwait', lat: 29.3117, lng: 47.4818, population: '4.3M', gdpPerCapita: '$42.8K', capital: 'Kuwait City' },
  { name: 'Oman', lat: 21.4735, lng: 55.9754, population: '4.6M', gdpPerCapita: '$25K', capital: 'Muscat' },
  { name: 'Qatar', lat: 25.3548, lng: 51.1839, population: '2.7M', gdpPerCapita: '$87.8K', capital: 'Doha' },
  { name: 'Kazakhstan', lat: 48.0196, lng: 66.9237, population: '20M', gdpPerCapita: '$13.1K', capital: 'Astana' },
  { name: 'Thailand', lat: 15.87, lng: 100.9925, population: '71M', gdpPerCapita: '$7.2K', capital: 'Bangkok' },
  { name: 'Vietnam', lat: 14.0583, lng: 108.2772, population: '98M', gdpPerCapita: '$4.6K', capital: 'Hanoi' },
  { name: 'Philippines', lat: 12.8797, lng: 121.774, population: '117M', gdpPerCapita: '$3.8K', capital: 'Manila' },
  { name: 'Malaysia', lat: 4.2105, lng: 101.6964, population: '34M', gdpPerCapita: '$12K', capital: 'Kuala Lumpur' },
  { name: 'Singapore', lat: 1.3521, lng: 103.8198, population: '6M', gdpPerCapita: '$85.8K', capital: 'Singapore' },
  { name: 'Taiwan', lat: 23.6978, lng: 120.9605, population: '23.6M', gdpPerCapita: '$33.5K', capital: 'Taipei' },
  { name: 'Sri Lanka', lat: 7.8731, lng: 80.7718, population: '22M', gdpPerCapita: '$3.4K', capital: 'Colombo' },
  { name: 'Yemen', lat: 15.5527, lng: 48.5164, population: '34M', gdpPerCapita: '$618', capital: 'Sanaa' },
  { name: 'Saudi Arabia', lat: 23.8859, lng: 45.0792, population: '36M', gdpPerCapita: '$30.6K', capital: 'Riyadh' },
  { name: 'UAE', lat: 23.4241, lng: 53.8478, population: '10M', gdpPerCapita: '$50.8K', capital: 'Abu Dhabi' },
  { name: 'Lebanon', lat: 33.8547, lng: 35.8623, population: '5.5M', gdpPerCapita: '$3.3K', capital: 'Beirut' },
  { name: 'Syria', lat: 34.8021, lng: 38.9968, population: '23M', gdpPerCapita: '$391', capital: 'Damascus' },
  { name: 'Solomon Islands', lat: -9.6412, lng: 160.1562, population: '720K', gdpPerCapita: '$2.4K', capital: 'Honiara' },
  { name: 'Vanuatu', lat: -15.3767, lng: 166.9592, population: '330K', gdpPerCapita: '$3K', capital: 'Port Vila' },
  { name: 'Samoa', lat: -13.759, lng: -172.1046, population: '220K', gdpPerCapita: '$4.1K', capital: 'Apia' },
  { name: 'Tonga', lat: -21.1789, lng: -175.1982, population: '107K', gdpPerCapita: '$4.8K', capital: 'Nuku\'alofa' },

  // Africa (43)
  { name: 'Egypt', lat: 26.8206, lng: 30.8025, population: '112M', gdpPerCapita: '$4.2K', capital: 'Cairo' },
  { name: 'Ethiopia', lat: 9.145, lng: 40.4897, population: '126M', gdpPerCapita: '$1.2K', capital: 'Addis Ababa' },
  { name: 'Kenya', lat: -0.0236, lng: 37.9062, population: '56M', gdpPerCapita: '$2.1K', capital: 'Nairobi' },
  { name: 'Somalia', lat: 5.1521, lng: 46.1996, population: '18M', gdpPerCapita: '$667', capital: 'Mogadishu' },
  { name: 'Sudan', lat: 12.8628, lng: 30.2176, population: '48M', gdpPerCapita: '$1.1K', capital: 'Khartoum' },
  { name: 'Algeria', lat: 28.0339, lng: 1.6596, population: '45M', gdpPerCapita: '$5.3K', capital: 'Algiers' },
  { name: 'Angola', lat: -11.2027, lng: 17.8739, population: '36M', gdpPerCapita: '$3K', capital: 'Luanda' },
  { name: 'Ghana', lat: 7.3697, lng: -5.3677, population: '34M', gdpPerCapita: '$2.4K', capital: 'Accra' },
  { name: 'Mozambique', lat: -18.6657, lng: 35.5296, population: '33M', gdpPerCapita: '$636', capital: 'Maputo' },
  { name: 'Senegal', lat: 14.4974, lng: -14.4524, population: '18M', gdpPerCapita: '$1.7K', capital: 'Dakar' },
  { name: 'Democratic Republic of Congo', lat: -4.0383, lng: 21.7587, population: '102M', gdpPerCapita: '$667', capital: 'Kinshasa' },
  { name: 'Nigeria', lat: 9.082, lng: 8.6753, population: '223M', gdpPerCapita: '$2.1K', capital: 'Abuja' },
  { name: 'South Africa', lat: -30.5595, lng: 22.9375, population: '60M', gdpPerCapita: '$6.3K', capital: 'Pretoria' },
  { name: 'Morocco', lat: 31.7917, lng: -7.0926, population: '37M', gdpPerCapita: '$3.8K', capital: 'Rabat' },
  { name: 'Tunisia', lat: 33.8869, lng: 9.5375, population: '12M', gdpPerCapita: '$4.2K', capital: 'Tunis' },
  { name: 'Libya', lat: 26.3351, lng: 17.2283, population: '7M', gdpPerCapita: '$6.4K', capital: 'Tripoli' },
  { name: 'Tanzania', lat: -6.369, lng: 34.8888, population: '67M', gdpPerCapita: '$1.2K', capital: 'Dodoma' },
  { name: 'Uganda', lat: 1.3733, lng: 32.2903, population: '48M', gdpPerCapita: '$1K', capital: 'Kampala' },
  { name: 'Zimbabwe', lat: -19.0154, lng: 29.1549, population: '16M', gdpPerCapita: '$2.2K', capital: 'Harare' },
  { name: 'Cameroon', lat: 3.848, lng: 11.5021, population: '28M', gdpPerCapita: '$1.7K', capital: 'Yaoundé' },
  { name: 'Zambia', lat: -13.1339, lng: 27.8493, population: '20M', gdpPerCapita: '$1.5K', capital: 'Lusaka' },
  { name: 'Mali', lat: 17.5707, lng: -3.9962, population: '23M', gdpPerCapita: '$870', capital: 'Bamako' },
  { name: 'Niger', lat: 17.6078, lng: 8.6753, population: '27M', gdpPerCapita: '$593', capital: 'Niamey' },
  { name: 'Chad', lat: 15.4542, lng: 18.7322, population: '18M', gdpPerCapita: '$667', capital: 'N\'Djamena' },
  { name: 'Burkina Faso', lat: 12.2383, lng: -1.5616, population: '23M', gdpPerCapita: '$826', capital: 'Ouagadougou' },
  { name: 'Rwanda', lat: -1.9536, lng: 29.8739, population: '14M', gdpPerCapita: '$1K', capital: 'Kigali' },
  { name: 'Botswana', lat: -22.3285, lng: 24.6849, population: '2.6M', gdpPerCapita: '$7.7K', capital: 'Gaborone' },
  { name: 'Namibia', lat: -22.9375, lng: 18.6531, population: '2.6M', gdpPerCapita: '$5K', capital: 'Windhoek' },
  { name: 'Madagascar', lat: -18.7669, lng: 46.8691, population: '30M', gdpPerCapita: '$533', capital: 'Antananarivo' },
  { name: 'Malawi', lat: -13.2543, lng: 34.3015, population: '20M', gdpPerCapita: '$700', capital: 'Lilongwe' },
  { name: 'South Sudan', lat: 6.877, lng: 31.307, population: '11M', gdpPerCapita: '$327', capital: 'Juba' },
  { name: 'Eritrea', lat: 15.1794, lng: 39.7823, population: '3.7M', gdpPerCapita: '$568', capital: 'Asmara' },
  { name: 'Djibouti', lat: 11.8254, lng: 42.5905, population: '1.1M', gdpPerCapita: '$3.6K', capital: 'Djibouti City' },
  { name: 'Sierra Leone', lat: 8.4606, lng: -11.7799, population: '8.6M', gdpPerCapita: '$488', capital: 'Freetown' },
  { name: 'Liberia', lat: 6.4281, lng: -9.4295, population: '5.3M', gdpPerCapita: '$811', capital: 'Monrovia' },
  { name: 'Guinea', lat: 9.9456, lng: -9.6966, population: '14M', gdpPerCapita: '$1.5K', capital: 'Conakry' },
  { name: 'Ivory Coast', lat: 7.54, lng: -5.5471, population: '28M', gdpPerCapita: '$3.1K', capital: 'Yamoussoukro' },
  { name: 'Togo', lat: 6.1256, lng: 1.2324, population: '9M', gdpPerCapita: '$1K', capital: 'Lomé' },
  { name: 'Benin', lat: 9.3077, lng: 2.3158, population: '13M', gdpPerCapita: '$1.5K', capital: 'Porto-Novo' },
  { name: 'Gambia', lat: 13.4549, lng: -15.579, population: '2.7M', gdpPerCapita: '$889', capital: 'Banjul' },
  { name: 'Mauritania', lat: 21.0079, lng: -10.9408, population: '4.9M', gdpPerCapita: '$2.2K', capital: 'Nouakchott' },
  { name: 'Congo-Brazzaville', lat: -4.0383, lng: 21.7587, population: '6M', gdpPerCapita: '$2.3K', capital: 'Brazzaville' },
]

async function generateRealEstateSummary(countryName, countryInfo) {
  const prompt = `You are writing as a housing policy expert in the style of Matt Yglesias - YIMBY advocate, housing economist, deeply informed about housing markets and policy. You're analyzing the real estate and housing situation in ${countryName}.

COUNTRY CONTEXT:
- Population: ${countryInfo.population}
- GDP per capita: ${countryInfo.gdpPerCapita}
- Capital: ${countryInfo.capital}

Write a comprehensive real estate & housing analysis (2,000-3,000 characters) that covers:

1. HOUSING AFFORDABILITY & PRICES: Current state of housing costs relative to incomes, price trends, affordability crisis or stability
2. HOMEOWNERSHIP VS RENTAL: Ownership rates, rental market dynamics, which is more common and why
3. CONSTRUCTION ACTIVITY: New housing supply, building boom or shortage, development constraints
4. ZONING & REGULATION: How land use regulations affect housing supply, NIMBYism vs YIMBYism, regulatory barriers
5. DENSITY VS SPRAWL: Urban development patterns, apartment vs single-family housing, transit-oriented development
6. REAL ESTATE INVESTMENT: Role of investors in housing market, speculation, foreign investment
7. HOMELESSNESS: Scale of the issue, causes, policy responses

VOICE REQUIREMENTS:
- Write conversationally, like "The Rest is Politics" podcast - informed but accessible
- Connect housing policy to real human impact - who can afford to live where, how this shapes cities
- Be analytical about what drives housing costs and what policies actually work
- Use the YIMBY perspective: more housing supply generally helps affordability
- Acknowledge trade-offs and political economy challenges
- Show why this matters: housing costs shape everything from family formation to economic mobility
- Length: 2,000-3,000 characters (not words - characters)

After the summary, list 3-5 major housing issues as brief phrases.

Format your response EXACTLY as follows:

## Summary
[Your 2,000-3,000 character housing analysis here]

## Issues
- Issue 1
- Issue 2
- Issue 3
- Issue 4
- Issue 5`

  try {
    const message = await anthropic.messages.create({
      model: 'claude-haiku-4-5-20251001',
      max_tokens: 3000,
      messages: [{ role: 'user', content: prompt }],
    })

    const responseText = message.content[0].type === 'text' ? message.content[0].text : ''

    // Parse the response
    const summaryMatch = responseText.match(/## Summary\s+([\s\S]*?)(?=\n## Issues|$)/i)
    const issuesMatch = responseText.match(/## Issues\s+([\s\S]*?)$/i)

    const summary = summaryMatch ? summaryMatch[1].trim() : responseText
    const issues = issuesMatch
      ? issuesMatch[1]
          .split('\n')
          .filter((line) => line.trim().startsWith('-'))
          .map((line) => line.replace(/^-\s*/, '').trim())
      : []

    return { summary, issues, error: null }
  } catch (error) {
    return { summary: '', issues: [], error: error instanceof Error ? error.message : String(error) }
  }
}

async function main() {
  console.log('🚀 Starting real estate & housing summary generation for ALL 143 countries\n')
  console.log(`Processing ${countries.length} countries...\n`)

  let successCount = 0
  let errorCount = 0
  const startTime = Date.now()

  for (let i = 0; i < countries.length; i++) {
    const country = countries[i]
    const progress = `[${i + 1}/${countries.length}]`

    console.log(`${progress} Processing: ${country.name}`)

    try {
      const { summary, issues, error } = await generateRealEstateSummary(country.name, country)

      // Skip if no data found
      if (error || !summary) {
        console.log(`   ⏭️  Skipped - ${error || 'no data available'}`)
        errorCount++
        continue
      }

      // Save to database
      await prisma.locationSummary.upsert({
        where: {
          name_type_category: {
            name: country.name,
            type: 'country',
            category: 'realestate',
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
          lat: country.lat,
          lng: country.lng,
          category: 'realestate',
          summary,
          issues: JSON.stringify(issues),
          topStories: JSON.stringify([]),
          storyCount: 0,
        },
      })

      console.log(`   ✅ Saved (${summary.length} chars, ${issues.length} issues)`)
      successCount++

      // Rate limiting - wait 1 second between API calls
      if (i < countries.length - 1) {
        await new Promise((resolve) => setTimeout(resolve, 1500))
      }
    } catch (error) {
      console.error(`   ❌ Error: ${error instanceof Error ? error.message : String(error)}`)
      errorCount++
      // Still rate limit on errors
      await new Promise((resolve) => setTimeout(resolve, 1000))
    }
  }

  const endTime = Date.now()
  const duration = ((endTime - startTime) / 1000 / 60).toFixed(2)

  console.log('\n' + '='.repeat(80))
  console.log('✅ GENERATION COMPLETE!')
  console.log('='.repeat(80))
  console.log(`✅ Successfully processed: ${successCount} countries`)
  console.log(`❌ Errors: ${errorCount} countries`)
  console.log(`📊 Total: ${countries.length} countries`)
  console.log(`⏱️  Duration: ${duration} minutes`)
  console.log('='.repeat(80))
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
