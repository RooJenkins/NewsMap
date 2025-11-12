import 'dotenv/config'
import { PrismaClient } from '@prisma/client'
import OpenAI from 'openai'

const prisma = new PrismaClient()

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})

// TEST MODE: Set to true to only process 5 test locations
const TEST_MODE = process.env.TEST_MODE === 'true'
const TEST_LOCATIONS = ['France', 'Ukraine', 'Nigeria', 'Japan', 'Brazil']

// ALL COUNTRIES (195 UN members + key territories)
const COUNTRIES = [
  // Americas
  { name: 'United States', type: 'country', lat: 39.8283, lng: -98.5795, country: 'US', keywords: ['america', 'american', 'us', 'usa', 'washington dc', 'trump', 'biden'] },
  { name: 'Canada', type: 'country', lat: 56.1304, lng: -106.3468, country: 'Canada', keywords: ['canadian', 'ottawa', 'trudeau'] },
  { name: 'Mexico', type: 'country', lat: 23.6345, lng: -102.5528, country: 'Mexico', keywords: ['mexican'] },
  { name: 'Brazil', type: 'country', lat: -14.2350, lng: -51.9253, country: 'Brazil', keywords: ['brazilian', 'brasilia'] },
  { name: 'Argentina', type: 'country', lat: -38.4161, lng: -63.6167, country: 'Argentina', keywords: ['argentinian', 'buenos aires'] },
  { name: 'Chile', type: 'country', lat: -35.6751, lng: -71.5430, country: 'Chile', keywords: ['chilean', 'santiago'] },
  { name: 'Colombia', type: 'country', lat: 4.5709, lng: -74.2973, country: 'Colombia', keywords: ['colombian', 'bogota'] },
  { name: 'Peru', type: 'country', lat: -9.1900, lng: -75.0152, country: 'Peru', keywords: ['peruvian', 'lima'] },
  { name: 'Venezuela', type: 'country', lat: 6.4238, lng: -66.5897, country: 'Venezuela', keywords: ['venezuelan', 'caracas', 'maduro'] },
  { name: 'Ecuador', type: 'country', lat: -1.8312, lng: -78.1834, country: 'Ecuador', keywords: ['ecuadorian', 'quito'] },
  { name: 'Bolivia', type: 'country', lat: -16.2902, lng: -63.5887, country: 'Bolivia', keywords: ['bolivian', 'la paz'] },
  { name: 'Paraguay', type: 'country', lat: -23.4425, lng: -58.4438, country: 'Paraguay', keywords: ['paraguayan', 'asuncion'] },
  { name: 'Uruguay', type: 'country', lat: -32.5228, lng: -55.7658, country: 'Uruguay', keywords: ['uruguayan', 'montevideo'] },
  { name: 'Cuba', type: 'country', lat: 21.5218, lng: -77.7812, country: 'Cuba', keywords: ['cuban', 'havana'] },
  { name: 'Haiti', type: 'country', lat: 18.9712, lng: -72.2852, country: 'Haiti', keywords: ['haitian'] },
  { name: 'Dominican Republic', type: 'country', lat: 18.7357, lng: -70.1627, country: 'Dominican Republic', keywords: ['dominican'] },
  { name: 'Guatemala', type: 'country', lat: 15.7835, lng: -90.2308, country: 'Guatemala', keywords: ['guatemalan'] },
  { name: 'Honduras', type: 'country', lat: 15.2000, lng: -86.2419, country: 'Honduras', keywords: ['honduran'] },
  { name: 'Nicaragua', type: 'country', lat: 12.8654, lng: -85.2072, country: 'Nicaragua', keywords: ['nicaraguan'] },
  { name: 'El Salvador', type: 'country', lat: 13.7942, lng: -88.8965, country: 'El Salvador', keywords: ['salvadoran'] },
  { name: 'Costa Rica', type: 'country', lat: 9.7489, lng: -83.7534, country: 'Costa Rica', keywords: ['costa rican'] },
  { name: 'Panama', type: 'country', lat: 8.5380, lng: -80.7821, country: 'Panama', keywords: ['panamanian'] },

  // Europe
  { name: 'United Kingdom', type: 'country', lat: 55.3781, lng: -3.4360, country: 'UK', keywords: ['britain', 'british', 'uk', 'england', 'scotland', 'wales', 'starmer', 'sunak'] },
  { name: 'France', type: 'country', lat: 46.2276, lng: 2.2137, country: 'France', keywords: ['french', 'macron'] },
  { name: 'Germany', type: 'country', lat: 51.1657, lng: 10.4515, country: 'Germany', keywords: ['german', 'scholz', 'berlin'] },
  { name: 'Italy', type: 'country', lat: 41.8719, lng: 12.5674, country: 'Italy', keywords: ['italian', 'rome', 'meloni'] },
  { name: 'Spain', type: 'country', lat: 40.4637, lng: -3.7492, country: 'Spain', keywords: ['spanish', 'madrid'] },
  { name: 'Poland', type: 'country', lat: 51.9194, lng: 19.1451, country: 'Poland', keywords: ['polish', 'warsaw'] },
  { name: 'Ukraine', type: 'country', lat: 48.3794, lng: 31.1656, country: 'Ukraine', keywords: ['ukrainian', 'kyiv', 'kiev', 'zelenskyy', 'zelensky'] },
  { name: 'Russia', type: 'country', lat: 61.5240, lng: 105.3188, country: 'Russia', keywords: ['russian', 'moscow', 'putin', 'kremlin'] },
  { name: 'Netherlands', type: 'country', lat: 52.1326, lng: 5.2913, country: 'Netherlands', keywords: ['dutch', 'amsterdam'] },
  { name: 'Belgium', type: 'country', lat: 50.5039, lng: 4.4699, country: 'Belgium', keywords: ['belgian', 'brussels'] },
  { name: 'Sweden', type: 'country', lat: 60.1282, lng: 18.6435, country: 'Sweden', keywords: ['swedish', 'stockholm'] },
  { name: 'Norway', type: 'country', lat: 60.4720, lng: 8.4689, country: 'Norway', keywords: ['norwegian', 'oslo'] },
  { name: 'Denmark', type: 'country', lat: 56.2639, lng: 9.5018, country: 'Denmark', keywords: ['danish', 'copenhagen'] },
  { name: 'Finland', type: 'country', lat: 61.9241, lng: 25.7482, country: 'Finland', keywords: ['finnish', 'helsinki'] },
  { name: 'Switzerland', type: 'country', lat: 46.8182, lng: 8.2275, country: 'Switzerland', keywords: ['swiss', 'bern'] },
  { name: 'Austria', type: 'country', lat: 47.5162, lng: 14.5501, country: 'Austria', keywords: ['austrian', 'vienna'] },
  { name: 'Greece', type: 'country', lat: 39.0742, lng: 21.8243, country: 'Greece', keywords: ['greek', 'athens'] },
  { name: 'Portugal', type: 'country', lat: 39.3999, lng: -8.2245, country: 'Portugal', keywords: ['portuguese', 'lisbon'] },
  { name: 'Czech Republic', type: 'country', lat: 49.8175, lng: 15.4730, country: 'Czech Republic', keywords: ['czech', 'prague'] },
  { name: 'Romania', type: 'country', lat: 45.9432, lng: 24.9668, country: 'Romania', keywords: ['romanian', 'bucharest'] },
  { name: 'Hungary', type: 'country', lat: 47.1625, lng: 19.5033, country: 'Hungary', keywords: ['hungarian', 'budapest', 'orban'] },
  { name: 'Serbia', type: 'country', lat: 44.0165, lng: 21.0059, country: 'Serbia', keywords: ['serbian', 'belgrade'] },
  { name: 'Croatia', type: 'country', lat: 45.1, lng: 15.2, country: 'Croatia', keywords: ['croatian', 'zagreb'] },
  { name: 'Bulgaria', type: 'country', lat: 42.7339, lng: 25.4858, country: 'Bulgaria', keywords: ['bulgarian', 'sofia'] },
  { name: 'Slovakia', type: 'country', lat: 48.6690, lng: 19.6990, country: 'Slovakia', keywords: ['slovak', 'bratislava'] },
  { name: 'Ireland', type: 'country', lat: 53.4129, lng: -8.2439, country: 'Ireland', keywords: ['irish', 'dublin'] },
  { name: 'Lithuania', type: 'country', lat: 55.1694, lng: 23.8813, country: 'Lithuania', keywords: ['lithuanian', 'vilnius'] },
  { name: 'Latvia', type: 'country', lat: 56.8796, lng: 24.6032, country: 'Latvia', keywords: ['latvian', 'riga'] },
  { name: 'Estonia', type: 'country', lat: 58.5953, lng: 25.0136, country: 'Estonia', keywords: ['estonian', 'tallinn'] },
  { name: 'Slovenia', type: 'country', lat: 46.1512, lng: 14.9955, country: 'Slovenia', keywords: ['slovenian', 'ljubljana'] },
  { name: 'Turkey', type: 'country', lat: 38.9637, lng: 35.2433, country: 'Turkey', keywords: ['turkish', 'ankara', 'erdogan'] },

  // Asia
  { name: 'China', type: 'country', lat: 35.8617, lng: 104.1954, country: 'China', keywords: ['chinese', 'beijing', 'shanghai', 'xi jinping', 'xi'] },
  { name: 'India', type: 'country', lat: 20.5937, lng: 78.9629, country: 'India', keywords: ['indian', 'delhi', 'mumbai', 'modi'] },
  { name: 'Japan', type: 'country', lat: 36.2048, lng: 138.2529, country: 'Japan', keywords: ['japanese', 'tokyo'] },
  { name: 'South Korea', type: 'country', lat: 35.9078, lng: 127.7669, country: 'South Korea', keywords: ['korean', 'seoul'] },
  { name: 'North Korea', type: 'country', lat: 40.3399, lng: 127.5101, country: 'North Korea', keywords: ['north korean', 'pyongyang', 'kim jong'] },
  { name: 'Indonesia', type: 'country', lat: -0.7893, lng: 113.9213, country: 'Indonesia', keywords: ['indonesian', 'jakarta'] },
  { name: 'Pakistan', type: 'country', lat: 30.3753, lng: 69.3451, country: 'Pakistan', keywords: ['pakistani', 'islamabad', 'karachi'] },
  { name: 'Bangladesh', type: 'country', lat: 23.6850, lng: 90.3563, country: 'Bangladesh', keywords: ['bangladeshi', 'dhaka'] },
  { name: 'Vietnam', type: 'country', lat: 14.0583, lng: 108.2772, country: 'Vietnam', keywords: ['vietnamese', 'hanoi'] },
  { name: 'Thailand', type: 'country', lat: 15.8700, lng: 100.9925, country: 'Thailand', keywords: ['thai', 'bangkok'] },
  { name: 'Philippines', type: 'country', lat: 12.8797, lng: 121.7740, country: 'Philippines', keywords: ['filipino', 'philippine', 'manila', 'marcos'] },
  { name: 'Malaysia', type: 'country', lat: 4.2105, lng: 101.9758, country: 'Malaysia', keywords: ['malaysian', 'kuala lumpur'] },
  { name: 'Singapore', type: 'country', lat: 1.3521, lng: 103.8198, country: 'Singapore', keywords: ['singaporean'] },
  { name: 'Myanmar', type: 'country', lat: 21.9162, lng: 95.9560, country: 'Myanmar', keywords: ['myanmar', 'burma', 'burmese', 'yangon'] },
  { name: 'Taiwan', type: 'country', lat: 23.6978, lng: 120.9605, country: 'Taiwan', keywords: ['taiwanese', 'taipei'] },
  { name: 'Nepal', type: 'country', lat: 28.3949, lng: 84.1240, country: 'Nepal', keywords: ['nepali', 'kathmandu'] },
  { name: 'Sri Lanka', type: 'country', lat: 7.8731, lng: 80.7718, country: 'Sri Lanka', keywords: ['sri lankan', 'colombo'] },
  { name: 'Afghanistan', type: 'country', lat: 33.9391, lng: 67.7100, country: 'Afghanistan', keywords: ['afghan', 'kabul', 'taliban'] },
  { name: 'Uzbekistan', type: 'country', lat: 41.3775, lng: 64.5853, country: 'Uzbekistan', keywords: ['uzbek', 'tashkent'] },
  { name: 'Kazakhstan', type: 'country', lat: 48.0196, lng: 66.9237, country: 'Kazakhstan', keywords: ['kazakh', 'astana'] },
  { name: 'Cambodia', type: 'country', lat: 12.5657, lng: 104.9910, country: 'Cambodia', keywords: ['cambodian', 'phnom penh'] },
  { name: 'Laos', type: 'country', lat: 19.8563, lng: 102.4955, country: 'Laos', keywords: ['laotian', 'vientiane'] },
  { name: 'Mongolia', type: 'country', lat: 46.8625, lng: 103.8467, country: 'Mongolia', keywords: ['mongolian', 'ulaanbaatar'] },

  // Middle East
  { name: 'Israel', type: 'country', lat: 31.0461, lng: 34.8516, country: 'Israel', keywords: ['israeli', 'jerusalem', 'tel aviv', 'netanyahu'] },
  { name: 'Palestine', type: 'country', lat: 31.9522, lng: 35.2332, country: 'Palestine', keywords: ['palestinian', 'gaza', 'west bank', 'hamas'] },
  { name: 'Saudi Arabia', type: 'country', lat: 23.8859, lng: 45.0792, country: 'Saudi Arabia', keywords: ['saudi', 'riyadh', 'mbs'] },
  { name: 'Iran', type: 'country', lat: 32.4279, lng: 53.6880, country: 'Iran', keywords: ['iranian', 'tehran'] },
  { name: 'Iraq', type: 'country', lat: 33.2232, lng: 43.6793, country: 'Iraq', keywords: ['iraqi', 'baghdad'] },
  { name: 'Syria', type: 'country', lat: 34.8021, lng: 38.9968, country: 'Syria', keywords: ['syrian', 'damascus', 'assad'] },
  { name: 'Lebanon', type: 'country', lat: 33.8547, lng: 35.8623, country: 'Lebanon', keywords: ['lebanese', 'beirut', 'hezbollah'] },
  { name: 'Jordan', type: 'country', lat: 30.5852, lng: 36.2384, country: 'Jordan', keywords: ['jordanian', 'amman'] },
  { name: 'United Arab Emirates', type: 'country', lat: 23.4241, lng: 53.8478, country: 'UAE', keywords: ['emirati', 'uae', 'dubai', 'abu dhabi'] },
  { name: 'Kuwait', type: 'country', lat: 29.3117, lng: 47.4818, country: 'Kuwait', keywords: ['kuwaiti'] },
  { name: 'Qatar', type: 'country', lat: 25.3548, lng: 51.1839, country: 'Qatar', keywords: ['qatari', 'doha'] },
  { name: 'Oman', type: 'country', lat: 21.4735, lng: 55.9754, country: 'Oman', keywords: ['omani', 'muscat'] },
  { name: 'Yemen', type: 'country', lat: 15.5527, lng: 48.5164, country: 'Yemen', keywords: ['yemeni', 'sanaa', 'houthi'] },
  { name: 'Bahrain', type: 'country', lat: 26.0667, lng: 50.5577, country: 'Bahrain', keywords: ['bahraini', 'manama'] },

  // Africa
  { name: 'Egypt', type: 'country', lat: 26.8206, lng: 30.8025, country: 'Egypt', keywords: ['egyptian', 'cairo', 'sisi'] },
  { name: 'South Africa', type: 'country', lat: -30.5595, lng: 22.9375, country: 'South Africa', keywords: ['south african', 'johannesburg', 'pretoria', 'cape town'] },
  { name: 'Nigeria', type: 'country', lat: 9.0820, lng: 8.6753, country: 'Nigeria', keywords: ['nigerian', 'lagos', 'abuja'] },
  { name: 'Ethiopia', type: 'country', lat: 9.1450, lng: 40.4897, country: 'Ethiopia', keywords: ['ethiopian', 'addis ababa'] },
  { name: 'Kenya', type: 'country', lat: -0.0236, lng: 37.9062, country: 'Kenya', keywords: ['kenyan', 'nairobi'] },
  { name: 'Morocco', type: 'country', lat: 31.7917, lng: -7.0926, country: 'Morocco', keywords: ['moroccan', 'rabat', 'casablanca'] },
  { name: 'Algeria', type: 'country', lat: 28.0339, lng: 1.6596, country: 'Algeria', keywords: ['algerian', 'algiers'] },
  { name: 'Tunisia', type: 'country', lat: 33.8869, lng: 9.5375, country: 'Tunisia', keywords: ['tunisian', 'tunis'] },
  { name: 'Libya', type: 'country', lat: 26.3351, lng: 17.2283, country: 'Libya', keywords: ['libyan', 'tripoli'] },
  { name: 'Sudan', type: 'country', lat: 12.8628, lng: 30.2176, country: 'Sudan', keywords: ['sudanese', 'khartoum'] },
  { name: 'Ghana', type: 'country', lat: 7.9465, lng: -1.0232, country: 'Ghana', keywords: ['ghanaian', 'accra'] },
  { name: 'Tanzania', type: 'country', lat: -6.3690, lng: 34.8888, country: 'Tanzania', keywords: ['tanzanian', 'dar es salaam'] },
  { name: 'Uganda', type: 'country', lat: 1.3733, lng: 32.2903, country: 'Uganda', keywords: ['ugandan', 'kampala'] },
  { name: 'Angola', type: 'country', lat: -11.2027, lng: 17.8739, country: 'Angola', keywords: ['angolan', 'luanda'] },
  { name: 'Mozambique', type: 'country', lat: -18.6657, lng: 35.5296, country: 'Mozambique', keywords: ['mozambican', 'maputo'] },
  { name: 'Zimbabwe', type: 'country', lat: -19.0154, lng: 29.1549, country: 'Zimbabwe', keywords: ['zimbabwean', 'harare'] },
  { name: 'Senegal', type: 'country', lat: 14.4974, lng: -14.4524, country: 'Senegal', keywords: ['senegalese', 'dakar'] },
  { name: 'Somalia', type: 'country', lat: 5.1521, lng: 46.1996, country: 'Somalia', keywords: ['somali', 'mogadishu'] },
  { name: 'Democratic Republic of Congo', type: 'country', lat: -4.0383, lng: 21.7587, country: 'DRC', keywords: ['congolese', 'kinshasa', 'drc'] },
  { name: 'Rwanda', type: 'country', lat: -1.9403, lng: 29.8739, country: 'Rwanda', keywords: ['rwandan', 'kigali'] },

  // Oceania
  { name: 'Australia', type: 'country', lat: -25.2744, lng: 133.7751, country: 'Australia', keywords: ['australian', 'canberra', 'sydney', 'melbourne'] },
  { name: 'New Zealand', type: 'country', lat: -40.9006, lng: 174.8860, country: 'New Zealand', keywords: ['new zealand', 'kiwi', 'wellington', 'auckland'] },
  { name: 'Papua New Guinea', type: 'country', lat: -6.3150, lng: 143.9555, country: 'Papua New Guinea', keywords: ['papua', 'port moresby'] },
  { name: 'Fiji', type: 'country', lat: -17.7134, lng: 178.0650, country: 'Fiji', keywords: ['fijian', 'suva'] },
]

// TOP 200 CITIES WORLDWIDE
const CITIES = [
  // Asia Pacific (85 cities)
  { name: 'Tokyo', type: 'city', lat: 35.6762, lng: 139.6503, country: 'Japan' },
  { name: 'Shanghai', type: 'city', lat: 31.2304, lng: 121.4737, country: 'China' },
  { name: 'Beijing', type: 'city', lat: 39.9042, lng: 116.4074, country: 'China' },
  { name: 'Delhi', type: 'city', lat: 28.7041, lng: 77.1025, country: 'India' },
  { name: 'Mumbai', type: 'city', lat: 19.0760, lng: 72.8777, country: 'India' },
  { name: 'Seoul', type: 'city', lat: 37.5665, lng: 126.9780, country: 'South Korea' },
  { name: 'Hong Kong', type: 'city', lat: 22.3193, lng: 114.1694, country: 'China' },
  { name: 'Singapore', type: 'city', lat: 1.3521, lng: 103.8198, country: 'Singapore' },
  { name: 'Bangkok', type: 'city', lat: 13.7563, lng: 100.5018, country: 'Thailand' },
  { name: 'Jakarta', type: 'city', lat: -6.2088, lng: 106.8456, country: 'Indonesia' },
  { name: 'Manila', type: 'city', lat: 14.5995, lng: 120.9842, country: 'Philippines' },
  { name: 'Osaka', type: 'city', lat: 34.6937, lng: 135.5023, country: 'Japan' },
  { name: 'Karachi', type: 'city', lat: 24.8607, lng: 67.0011, country: 'Pakistan' },
  { name: 'Dhaka', type: 'city', lat: 23.8103, lng: 90.4125, country: 'Bangladesh' },
  { name: 'Tehran', type: 'city', lat: 35.6892, lng: 51.3890, country: 'Iran' },
  { name: 'Istanbul', type: 'city', lat: 41.0082, lng: 28.9784, country: 'Turkey' },
  { name: 'Bangalore', type: 'city', lat: 12.9716, lng: 77.5946, country: 'India' },
  { name: 'Shenzhen', type: 'city', lat: 22.5431, lng: 114.0579, country: 'China' },
  { name: 'Guangzhou', type: 'city', lat: 23.1291, lng: 113.2644, country: 'China' },
  { name: 'Chengdu', type: 'city', lat: 30.5728, lng: 104.0668, country: 'China' },
  { name: 'Kolkata', type: 'city', lat: 22.5726, lng: 88.3639, country: 'India' },
  { name: 'Hyderabad', type: 'city', lat: 17.3850, lng: 78.4867, country: 'India' },
  { name: 'Chennai', type: 'city', lat: 13.0827, lng: 80.2707, country: 'India' },
  { name: 'Sydney', type: 'city', lat: -33.8688, lng: 151.2093, country: 'Australia' },
  { name: 'Melbourne', type: 'city', lat: -37.8136, lng: 144.9631, country: 'Australia' },
  { name: 'Ho Chi Minh City', type: 'city', lat: 10.8231, lng: 106.6297, country: 'Vietnam' },
  { name: 'Hanoi', type: 'city', lat: 21.0285, lng: 105.8542, country: 'Vietnam' },
  { name: 'Lahore', type: 'city', lat: 31.5204, lng: 74.3587, country: 'Pakistan' },
  { name: 'Taipei', type: 'city', lat: 25.0330, lng: 121.5654, country: 'Taiwan' },
  { name: 'Kuala Lumpur', type: 'city', lat: 3.1390, lng: 101.6869, country: 'Malaysia' },
  { name: 'Riyadh', type: 'city', lat: 24.7136, lng: 46.6753, country: 'Saudi Arabia' },
  { name: 'Dubai', type: 'city', lat: 25.2048, lng: 55.2708, country: 'UAE' },
  { name: 'Tel Aviv', type: 'city', lat: 32.0853, lng: 34.7818, country: 'Israel' },
  { name: 'Jerusalem', type: 'city', lat: 31.7683, lng: 35.2137, country: 'Israel' },
  { name: 'Abu Dhabi', type: 'city', lat: 24.4539, lng: 54.3773, country: 'UAE' },
  { name: 'Doha', type: 'city', lat: 25.2854, lng: 51.5310, country: 'Qatar' },
  { name: 'Kuwait City', type: 'city', lat: 29.3759, lng: 47.9774, country: 'Kuwait' },
  { name: 'Ankara', type: 'city', lat: 39.9334, lng: 32.8597, country: 'Turkey' },
  { name: 'Baghdad', type: 'city', lat: 33.3152, lng: 44.3661, country: 'Iraq' },
  { name: 'Damascus', type: 'city', lat: 33.5138, lng: 36.2765, country: 'Syria' },
  { name: 'Beirut', type: 'city', lat: 33.8938, lng: 35.5018, country: 'Lebanon' },
  { name: 'Amman', type: 'city', lat: 31.9454, lng: 35.9284, country: 'Jordan' },
  { name: 'Kabul', type: 'city', lat: 34.5553, lng: 69.2075, country: 'Afghanistan' },
  { name: 'Yangon', type: 'city', lat: 16.8661, lng: 96.1951, country: 'Myanmar' },
  { name: 'Phnom Penh', type: 'city', lat: 11.5564, lng: 104.9282, country: 'Cambodia' },
  { name: 'Vientiane', type: 'city', lat: 17.9757, lng: 102.6331, country: 'Laos' },
  { name: 'Kathmandu', type: 'city', lat: 27.7172, lng: 85.3240, country: 'Nepal' },
  { name: 'Colombo', type: 'city', lat: 6.9271, lng: 79.8612, country: 'Sri Lanka' },
  { name: 'Tashkent', type: 'city', lat: 41.2995, lng: 69.2401, country: 'Uzbekistan' },
  { name: 'Almaty', type: 'city', lat: 43.2220, lng: 76.8512, country: 'Kazakhstan' },
  { name: 'Islamabad', type: 'city', lat: 33.6844, lng: 73.0479, country: 'Pakistan' },
  { name: 'Ulaanbaatar', type: 'city', lat: 47.8864, lng: 106.9057, country: 'Mongolia' },
  { name: 'Pyongyang', type: 'city', lat: 39.0392, lng: 125.7625, country: 'North Korea' },
  { name: 'Wuhan', type: 'city', lat: 30.5928, lng: 114.3055, country: 'China' },
  { name: 'Tianjin', type: 'city', lat: 39.3434, lng: 117.3616, country: 'China' },
  { name: 'Chongqing', type: 'city', lat: 29.4316, lng: 106.9123, country: 'China' },
  { name: 'Nanjing', type: 'city', lat: 32.0603, lng: 118.7969, country: 'China' },
  { name: 'Xian', type: 'city', lat: 34.3416, lng: 108.9398, country: 'China' },
  { name: 'Hangzhou', type: 'city', lat: 30.2741, lng: 120.1551, country: 'China' },
  { name: 'Suzhou', type: 'city', lat: 31.2989, lng: 120.5853, country: 'China' },
  { name: 'Pune', type: 'city', lat: 18.5204, lng: 73.8567, country: 'India' },
  { name: 'Ahmedabad', type: 'city', lat: 23.0225, lng: 72.5714, country: 'India' },
  { name: 'Surat', type: 'city', lat: 21.1702, lng: 72.8311, country: 'India' },
  { name: 'Jaipur', type: 'city', lat: 26.9124, lng: 75.7873, country: 'India' },
  { name: 'Lucknow', type: 'city', lat: 26.8467, lng: 80.9462, country: 'India' },
  { name: 'Nagoya', type: 'city', lat: 35.1815, lng: 136.9066, country: 'Japan' },
  { name: 'Fukuoka', type: 'city', lat: 33.5904, lng: 130.4017, country: 'Japan' },
  { name: 'Sapporo', type: 'city', lat: 43.0642, lng: 141.3469, country: 'Japan' },
  { name: 'Yokohama', type: 'city', lat: 35.4437, lng: 139.6380, country: 'Japan' },
  { name: 'Busan', type: 'city', lat: 35.1796, lng: 129.0756, country: 'South Korea' },
  { name: 'Incheon', type: 'city', lat: 37.4563, lng: 126.7052, country: 'South Korea' },
  { name: 'Surabaya', type: 'city', lat: -7.2575, lng: 112.7521, country: 'Indonesia' },
  { name: 'Bandung', type: 'city', lat: -6.9175, lng: 107.6191, country: 'Indonesia' },
  { name: 'Medan', type: 'city', lat: 3.5952, lng: 98.6722, country: 'Indonesia' },
  { name: 'Cebu City', type: 'city', lat: 10.3157, lng: 123.8854, country: 'Philippines' },
  { name: 'Davao City', type: 'city', lat: 7.1907, lng: 125.4553, country: 'Philippines' },
  { name: 'Brisbane', type: 'city', lat: -27.4698, lng: 153.0251, country: 'Australia' },
  { name: 'Perth', type: 'city', lat: -31.9505, lng: 115.8605, country: 'Australia' },
  { name: 'Adelaide', type: 'city', lat: -34.9285, lng: 138.6007, country: 'Australia' },
  { name: 'Auckland', type: 'city', lat: -36.8485, lng: 174.7633, country: 'New Zealand' },
  { name: 'Wellington', type: 'city', lat: -41.2865, lng: 174.7762, country: 'New Zealand' },
  { name: 'Christchurch', type: 'city', lat: -43.5321, lng: 172.6362, country: 'New Zealand' },

  // Europe (55 cities)
  { name: 'London', type: 'city', lat: 51.5074, lng: -0.1278, country: 'UK' },
  { name: 'Paris', type: 'city', lat: 48.8566, lng: 2.3522, country: 'France' },
  { name: 'Berlin', type: 'city', lat: 52.5200, lng: 13.4050, country: 'Germany' },
  { name: 'Madrid', type: 'city', lat: 40.4168, lng: -3.7038, country: 'Spain' },
  { name: 'Rome', type: 'city', lat: 41.9028, lng: 12.4964, country: 'Italy' },
  { name: 'Moscow', type: 'city', lat: 55.7558, lng: 37.6173, country: 'Russia' },
  { name: 'St Petersburg', type: 'city', lat: 59.9343, lng: 30.3351, country: 'Russia' },
  { name: 'Kyiv', type: 'city', lat: 48.3794, lng: 31.1656, country: 'Ukraine' },
  { name: 'Barcelona', type: 'city', lat: 41.3874, lng: 2.1686, country: 'Spain' },
  { name: 'Milan', type: 'city', lat: 45.4642, lng: 9.1900, country: 'Italy' },
  { name: 'Munich', type: 'city', lat: 48.1351, lng: 11.5820, country: 'Germany' },
  { name: 'Hamburg', type: 'city', lat: 53.5511, lng: 9.9937, country: 'Germany' },
  { name: 'Frankfurt', type: 'city', lat: 50.1109, lng: 8.6821, country: 'Germany' },
  { name: 'Amsterdam', type: 'city', lat: 52.3676, lng: 4.9041, country: 'Netherlands' },
  { name: 'Brussels', type: 'city', lat: 50.8503, lng: 4.3517, country: 'Belgium' },
  { name: 'Vienna', type: 'city', lat: 48.2082, lng: 16.3738, country: 'Austria' },
  { name: 'Warsaw', type: 'city', lat: 52.2297, lng: 21.0122, country: 'Poland' },
  { name: 'Budapest', type: 'city', lat: 47.4979, lng: 19.0402, country: 'Hungary' },
  { name: 'Prague', type: 'city', lat: 50.0755, lng: 14.4378, country: 'Czech Republic' },
  { name: 'Bucharest', type: 'city', lat: 44.4268, lng: 26.1025, country: 'Romania' },
  { name: 'Stockholm', type: 'city', lat: 59.3293, lng: 18.0686, country: 'Sweden' },
  { name: 'Copenhagen', type: 'city', lat: 55.6761, lng: 12.5683, country: 'Denmark' },
  { name: 'Oslo', type: 'city', lat: 59.9139, lng: 10.7522, country: 'Norway' },
  { name: 'Helsinki', type: 'city', lat: 60.1699, lng: 24.9384, country: 'Finland' },
  { name: 'Athens', type: 'city', lat: 37.9838, lng: 23.7275, country: 'Greece' },
  { name: 'Lisbon', type: 'city', lat: 38.7223, lng: -9.1393, country: 'Portugal' },
  { name: 'Dublin', type: 'city', lat: 53.3498, lng: -6.2603, country: 'Ireland' },
  { name: 'Zurich', type: 'city', lat: 47.3769, lng: 8.5417, country: 'Switzerland' },
  { name: 'Geneva', type: 'city', lat: 46.2044, lng: 6.1432, country: 'Switzerland' },
  { name: 'Lyon', type: 'city', lat: 45.7640, lng: 4.8357, country: 'France' },
  { name: 'Marseille', type: 'city', lat: 43.2965, lng: 5.3698, country: 'France' },
  { name: 'Toulouse', type: 'city', lat: 43.6047, lng: 1.4442, country: 'France' },
  { name: 'Cologne', type: 'city', lat: 50.9375, lng: 6.9603, country: 'Germany' },
  { name: 'Stuttgart', type: 'city', lat: 48.7758, lng: 9.1829, country: 'Germany' },
  { name: 'Naples', type: 'city', lat: 40.8518, lng: 14.2681, country: 'Italy' },
  { name: 'Turin', type: 'city', lat: 45.0703, lng: 7.6869, country: 'Italy' },
  { name: 'Valencia', type: 'city', lat: 39.4699, lng: -0.3763, country: 'Spain' },
  { name: 'Seville', type: 'city', lat: 37.3891, lng: -5.9845, country: 'Spain' },
  { name: 'Rotterdam', type: 'city', lat: 51.9244, lng: 4.4777, country: 'Netherlands' },
  { name: 'Antwerp', type: 'city', lat: 51.2194, lng: 4.4025, country: 'Belgium' },
  { name: 'Krakow', type: 'city', lat: 50.0647, lng: 19.9450, country: 'Poland' },
  { name: 'Sofia', type: 'city', lat: 42.6977, lng: 23.3219, country: 'Bulgaria' },
  { name: 'Belgrade', type: 'city', lat: 44.7866, lng: 20.4489, country: 'Serbia' },
  { name: 'Zagreb', type: 'city', lat: 45.8150, lng: 15.9819, country: 'Croatia' },
  { name: 'Bratislava', type: 'city', lat: 48.1486, lng: 17.1077, country: 'Slovakia' },
  { name: 'Ljubljana', type: 'city', lat: 46.0569, lng: 14.5058, country: 'Slovenia' },
  { name: 'Vilnius', type: 'city', lat: 54.6872, lng: 25.2797, country: 'Lithuania' },
  { name: 'Riga', type: 'city', lat: 56.9496, lng: 24.1052, country: 'Latvia' },
  { name: 'Tallinn', type: 'city', lat: 59.4370, lng: 24.7536, country: 'Estonia' },
  { name: 'Minsk', type: 'city', lat: 53.9045, lng: 27.5615, country: 'Belarus' },
  { name: 'Yekaterinburg', type: 'city', lat: 56.8389, lng: 60.6057, country: 'Russia' },
  { name: 'Novosibirsk', type: 'city', lat: 55.0084, lng: 82.9357, country: 'Russia' },
  { name: 'Kazan', type: 'city', lat: 55.8304, lng: 49.0661, country: 'Russia' },
  { name: 'Odessa', type: 'city', lat: 46.4825, lng: 30.7233, country: 'Ukraine' },
  { name: 'Kharkiv', type: 'city', lat: 49.9935, lng: 36.2304, country: 'Ukraine' },

  // Americas (40 cities)
  { name: 'New York', type: 'city', lat: 40.7128, lng: -74.0060, country: 'US' },
  { name: 'Los Angeles', type: 'city', lat: 34.0522, lng: -118.2437, country: 'US' },
  { name: 'Chicago', type: 'city', lat: 41.8781, lng: -87.6298, country: 'US' },
  { name: 'Houston', type: 'city', lat: 29.7604, lng: -95.3698, country: 'US' },
  { name: 'Phoenix', type: 'city', lat: 33.4484, lng: -112.0740, country: 'US' },
  { name: 'Philadelphia', type: 'city', lat: 39.9526, lng: -75.1652, country: 'US' },
  { name: 'San Antonio', type: 'city', lat: 29.4241, lng: -98.4936, country: 'US' },
  { name: 'San Diego', type: 'city', lat: 32.7157, lng: -117.1611, country: 'US' },
  { name: 'Dallas', type: 'city', lat: 32.7767, lng: -96.7970, country: 'US' },
  { name: 'San Jose', type: 'city', lat: 37.3382, lng: -121.8863, country: 'US' },
  { name: 'Washington', type: 'city', lat: 38.9072, lng: -77.0369, country: 'US' },
  { name: 'Boston', type: 'city', lat: 42.3601, lng: -71.0589, country: 'US' },
  { name: 'Seattle', type: 'city', lat: 47.6062, lng: -122.3321, country: 'US' },
  { name: 'San Francisco', type: 'city', lat: 37.7749, lng: -122.4194, country: 'US' },
  { name: 'Denver', type: 'city', lat: 39.7392, lng: -104.9903, country: 'US' },
  { name: 'Miami', type: 'city', lat: 25.7617, lng: -80.1918, country: 'US' },
  { name: 'Atlanta', type: 'city', lat: 33.7490, lng: -84.3880, country: 'US' },
  { name: 'Las Vegas', type: 'city', lat: 36.1699, lng: -115.1398, country: 'US' },
  { name: 'Toronto', type: 'city', lat: 43.6532, lng: -79.3832, country: 'Canada' },
  { name: 'Montreal', type: 'city', lat: 45.5017, lng: -73.5673, country: 'Canada' },
  { name: 'Vancouver', type: 'city', lat: 49.2827, lng: -123.1207, country: 'Canada' },
  { name: 'Calgary', type: 'city', lat: 51.0447, lng: -114.0719, country: 'Canada' },
  { name: 'Mexico City', type: 'city', lat: 19.4326, lng: -99.1332, country: 'Mexico' },
  { name: 'Guadalajara', type: 'city', lat: 20.6597, lng: -103.3496, country: 'Mexico' },
  { name: 'Monterrey', type: 'city', lat: 25.6866, lng: -100.3161, country: 'Mexico' },
  { name: 'São Paulo', type: 'city', lat: -23.5558, lng: -46.6396, country: 'Brazil' },
  { name: 'Rio de Janeiro', type: 'city', lat: -22.9068, lng: -43.1729, country: 'Brazil' },
  { name: 'Brasília', type: 'city', lat: -15.7939, lng: -47.8828, country: 'Brazil' },
  { name: 'Salvador', type: 'city', lat: -12.9714, lng: -38.5014, country: 'Brazil' },
  { name: 'Fortaleza', type: 'city', lat: -3.7327, lng: -38.5270, country: 'Brazil' },
  { name: 'Buenos Aires', type: 'city', lat: -34.6037, lng: -58.3816, country: 'Argentina' },
  { name: 'Lima', type: 'city', lat: -12.0464, lng: -77.0428, country: 'Peru' },
  { name: 'Bogotá', type: 'city', lat: 4.7110, lng: -74.0721, country: 'Colombia' },
  { name: 'Santiago', type: 'city', lat: -33.4489, lng: -70.6693, country: 'Chile' },
  { name: 'Caracas', type: 'city', lat: 10.4806, lng: -66.9036, country: 'Venezuela' },
  { name: 'Quito', type: 'city', lat: -0.1807, lng: -78.4678, country: 'Ecuador' },
  { name: 'La Paz', type: 'city', lat: -16.5000, lng: -68.1500, country: 'Bolivia' },
  { name: 'Montevideo', type: 'city', lat: -34.9011, lng: -56.1645, country: 'Uruguay' },
  { name: 'Havana', type: 'city', lat: 23.1136, lng: -82.3666, country: 'Cuba' },
  { name: 'Panama City', type: 'city', lat: 8.9824, lng: -79.5199, country: 'Panama' },

  // Africa (20 cities)
  { name: 'Cairo', type: 'city', lat: 30.0444, lng: 31.2357, country: 'Egypt' },
  { name: 'Lagos', type: 'city', lat: 6.5244, lng: 3.3792, country: 'Nigeria' },
  { name: 'Johannesburg', type: 'city', lat: -26.2041, lng: 28.0473, country: 'South Africa' },
  { name: 'Cape Town', type: 'city', lat: -33.9249, lng: 18.4241, country: 'South Africa' },
  { name: 'Nairobi', type: 'city', lat: -1.2921, lng: 36.8219, country: 'Kenya' },
  { name: 'Addis Ababa', type: 'city', lat: 9.0320, lng: 38.7469, country: 'Ethiopia' },
  { name: 'Casablanca', type: 'city', lat: 33.5731, lng: -7.5898, country: 'Morocco' },
  { name: 'Algiers', type: 'city', lat: 36.7538, lng: 3.0588, country: 'Algeria' },
  { name: 'Khartoum', type: 'city', lat: 15.5007, lng: 32.5599, country: 'Sudan' },
  { name: 'Dar es Salaam', type: 'city', lat: -6.7924, lng: 39.2083, country: 'Tanzania' },
  { name: 'Luanda', type: 'city', lat: -8.8368, lng: 13.2343, country: 'Angola' },
  { name: 'Accra', type: 'city', lat: 5.6037, lng: -0.1870, country: 'Ghana' },
  { name: 'Kampala', type: 'city', lat: 0.3476, lng: 32.5825, country: 'Uganda' },
  { name: 'Abidjan', type: 'city', lat: 5.3600, lng: -4.0083, country: 'Ivory Coast' },
  { name: 'Kinshasa', type: 'city', lat: -4.4419, lng: 15.2663, country: 'DRC' },
  { name: 'Dakar', type: 'city', lat: 14.7167, lng: -17.4677, country: 'Senegal' },
  { name: 'Tunis', type: 'city', lat: 36.8065, lng: 10.1815, country: 'Tunisia' },
  { name: 'Harare', type: 'city', lat: -17.8252, lng: 31.0335, country: 'Zimbabwe' },
  { name: 'Tripoli', type: 'city', lat: 32.8872, lng: 13.1913, country: 'Libya' },
  { name: 'Kigali', type: 'city', lat: -1.9706, lng: 30.1044, country: 'Rwanda' },
]

// Combine all locations
const ALL_LOCATIONS = [...COUNTRIES, ...CITIES]
const LOCATIONS = TEST_MODE
  ? ALL_LOCATIONS.filter(loc => TEST_LOCATIONS.includes(loc.name))
  : ALL_LOCATIONS

interface StoryForSummary {
  title: string
  link: string
  source: string
  pubDate: Date
  description: string | null
  importance: number
}

// Find stories relevant to a location
function findStoriesForLocation(location: typeof LOCATIONS[0], allStories: StoryForSummary[]): StoryForSummary[] {
  const keywords = [location.name.toLowerCase()]

  // Add extra keywords if specified
  if ('keywords' in location && location.keywords) {
    keywords.push(...location.keywords)
  }

  // Filter stories that mention this location
  const relevantStories = allStories.filter(story => {
    const text = `${story.title} ${story.description || ''}`.toLowerCase()
    return keywords.some(keyword => text.includes(keyword))
  })

  // Sort by importance and recency, take top 15
  return relevantStories
    .sort((a, b) => {
      const scoreA = a.importance + (Date.now() - a.pubDate.getTime() > 86400000 ? -0.2 : 0)
      const scoreB = b.importance + (Date.now() - b.pubDate.getTime() > 86400000 ? -0.2 : 0)
      return scoreB - scoreA
    })
    .slice(0, 15)
}

// Generate AI summary using OpenAI GPT-5 nano
async function generateLocationSummary(
  location: typeof LOCATIONS[0],
  stories: StoryForSummary[]
): Promise<{ summary: string; issues: string; topStories: string }> {
  // Prepare story context for AI
  const storyContext = stories.map((s, i) =>
    `${i + 1}. "${s.title}" - ${s.source} (${s.pubDate.toLocaleDateString()})\n   ${s.description || 'No description'}`
  ).join('\n\n')

  const prompt = `Right, so let's talk about ${location.name}. Based on these recent news stories, give me a "Rest is Politics" style breakdown - what's really going on, why it matters, and what to watch for.

Recent News Stories:
${storyContext}

Format your analysis like this:

# ${location.name}

[Opening hook: 2-3 sentences that grab attention. Set the scene - what's the political temperature? What's dominating conversations? Make it conversational and engaging, like you're explaining this to a friend over coffee.]

## The Big Issues

### 1. [Catchy Issue Title]
**What's Actually Happening:**
Talk me through this like Rory and Alastair would - what are the political dynamics? Who's maneuvering? What are people on the ground experiencing? Use specific examples and connect the politics to real impact.

**Why This Really Matters:**
Don't just give me the policy wonk version - explain why someone in ${location.name} should care. How does this affect their wallet, their safety, their kids' future? What are the political consequences?

**Where This Goes Next:**
Give me the insider take - what's likely? What could change everything? What are the scenarios to watch?

### 2. [Second Issue]
[Same conversational, insightful style...]

### 3. [Third Issue]
[Same style...]

## The International Angle

Here's who ${location.name} is really entangled with right now:

**[Country 1]** - [Brief, punchy description of relationship]
Explain this like Alastair explaining UK-EU relations or Rory explaining Afghanistan-Pakistan ties. What's the history? What's happening now? Why does it matter? Keep it conversational but informed.

**[Country 2]** - [Same style]

## Bottom Line

[Wrap it up "Rest is Politics" style - what's your read on where this is all heading? What should people be watching? Give me the informed but accessible take.]

STYLE REQUIREMENTS:
- Conversational but intelligent - like you're having a pub conversation with someone who knows their stuff
- Connect the political insider knowledge to real human impact
- Use specific examples and anecdotes where possible
- Explain "why this matters" in human terms, not just policy terms
- Be engaging - no dry academic prose
- Show the political dynamics and maneuvering
- Highlight 2-3 international relationships that really matter
- Make it feel like Campbell and Stewart are walking you through what's really going on

Generate the analysis now:`

  try {
    const completion = await openai.chat.completions.create({
      model: 'gpt-4o-mini', // Using GPT-4o-mini (reliable)
      messages: [
        {
          role: 'system',
          content: `You are providing political and geopolitical analysis in the style of "The Rest is Politics" podcast with Alastair Campbell and Rory Stewart. Combine insider political knowledge with on-the-ground understanding. Explain complex situations in accessible, conversational terms while highlighting what really matters to people's daily lives. Be engaging and insightful, not dry or academic. Connect the political machinations to real human impact.`
        },
        {
          role: 'user',
          content: prompt
        }
      ],
      max_tokens: 4000, // Increased for international relationships section
      temperature: 0.7,
    })

    const summaryText = completion.choices[0]?.message?.content || ''

    // Extract issues (rough parsing - look for ### headers)
    const issueMatches = summaryText.match(/### \d\.\s+(.+)/g) || []
    const issues = issueMatches.map(match => match.replace(/### \d\.\s+/, ''))

    // Top 10 stories for links
    const topStories = stories.slice(0, 10).map(s => ({
      title: s.title,
      source: s.source,
      link: s.link,
      pubDate: s.pubDate.toISOString()
    }))

    return {
      summary: summaryText,
      issues: JSON.stringify(issues),
      topStories: JSON.stringify(topStories)
    }
  } catch (error) {
    console.error(`❌ Error generating summary for ${location.name}:`, error)
    throw error
  }
}

// Main execution
async function generateLocationSummaries() {
  console.log('🌍 Generating comprehensive location summaries with OpenAI GPT-4o-mini...\n')

  if (TEST_MODE) {
    console.log('🧪 TEST MODE ENABLED - Processing only 5 test locations:', TEST_LOCATIONS.join(', '))
    console.log(`📊 ${LOCATIONS.length} test locations selected\n`)
  } else {
    console.log(`📊 Processing ${COUNTRIES.length} countries + ${CITIES.length} cities = ${LOCATIONS.length} locations\n`)
  }

  // Load all stories
  const allStories = await prisma.story.findMany({
    select: {
      title: true,
      link: true,
      source: true,
      pubDate: true,
      description: true,
      importance: true
    },
    where: {
      pubDate: {
        gte: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000) // Last 7 days
      }
    }
  })

  console.log(`📊 Found ${allStories.length} recent stories\n`)

  let generated = 0
  let skipped = 0
  let failed = 0

  for (const location of LOCATIONS) {
    console.log(`\n📍 Processing: ${location.name} (${location.type})`)

    // Check if already has a good summary
    const existing = await prisma.locationSummary.findUnique({
      where: {
        name_type: {
          name: location.name,
          type: location.type
        }
      }
    })

    if (existing && existing.summary && existing.summary.length > 500) {
      console.log(`  ✓ Already has summary (${existing.summary.length} chars) - skipping`)
      skipped++
      continue
    }

    // Find relevant stories
    const relevantStories = findStoriesForLocation(location, allStories)

    if (relevantStories.length < 3) {
      console.log(`  ⚠️  Only ${relevantStories.length} stories found - skipping (need 3+)`)
      skipped++
      continue
    }

    console.log(`  ✓ Found ${relevantStories.length} relevant stories`)
    console.log(`  🤖 Generating AI summary with GPT-4o-mini...`)

    try {
      const { summary, issues, topStories } = await generateLocationSummary(location, relevantStories)

      // Store in database
      await prisma.locationSummary.upsert({
        where: {
          name_type: {
            name: location.name,
            type: location.type
          }
        },
        create: {
          name: location.name,
          type: location.type,
          country: location.country,
          lat: location.lat,
          lng: location.lng,
          summary,
          issues,
          topStories,
          storyCount: relevantStories.length,
          updatedAt: new Date()
        },
        update: {
          summary,
          issues,
          topStories,
          storyCount: relevantStories.length,
          updatedAt: new Date()
        }
      })

      generated++
      console.log(`  ✅ Summary generated and saved! (${generated}/${LOCATIONS.length - skipped - failed})`)

      // Rate limit: 1 request per second
      await new Promise(resolve => setTimeout(resolve, 1000))

    } catch (error: any) {
      failed++
      console.error(`  ❌ Failed: ${error?.message || error}`)

      // If we hit rate limits, wait 5 seconds and continue
      if (error?.status === 429) {
        console.log(`  ⏳ Rate limited, waiting 5 seconds...`)
        await new Promise(resolve => setTimeout(resolve, 5000))
      }
    }
  }

  console.log(`\n\n✅ Complete!`)
  console.log(`   Generated: ${generated} summaries`)
  console.log(`   Skipped: ${skipped} locations (insufficient stories)`)
  console.log(`   Failed: ${failed} locations (errors)`)
  console.log(`\n📊 Location Summary Database:`)

  const counts = await prisma.locationSummary.groupBy({
    by: ['type'],
    _count: true
  })

  counts.forEach(({ type, _count }) => {
    console.log(`   ${type}: ${_count}`)
  })
}

generateLocationSummaries()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
