import { Topic } from '@/types'

// Real news topics from November 2025 news cycle
export const realNewsTopics: Topic[] = [
  // POLITICS & GOVERNMENT (Main Category)
  { id: 'politics-main', name: 'Politics & Government', category: 'Main' },

  // U.S. Politics
  {
    id: 'govt-shutdown',
    name: 'Gov Shutdown (Day 41)',
    category: 'Politics',
    isSubTopic: true,
    parentId: 'politics-main',
    location: { city: 'Washington', country: 'United States', lat: 38.9072, lng: -77.0369 }
  },
  {
    id: 'trump-pardons',
    name: 'Trump Pardons 77 Allies',
    category: 'Politics',
    isSubTopic: true,
    parentId: 'politics-main',
    location: { city: 'Washington', country: 'United States', lat: 38.9072, lng: -77.0369 }
  },
  {
    id: 'nyc-mayor-race',
    name: 'NYC Mayor Race',
    category: 'Politics',
    isSubTopic: true,
    parentId: 'politics-main',
    location: { city: 'New York City', country: 'United States', lat: 40.7128, lng: -74.0060 }
  },
  { id: 'va-nj-governors', name: 'VA/NJ Gov Elections', category: 'Politics', isSubTopic: true, parentId: 'politics-main' },
  { id: '50yr-mortgage', name: '50-Year Mortgage Plan', category: 'Politics', isSubTopic: true, parentId: 'politics-main' },
  { id: 'giuliani-pardon', name: 'Giuliani Pardon', category: 'Politics', isSubTopic: true, parentId: 'politics-main' },
  { id: 'meadows-pardon', name: 'Meadows Pardon', category: 'Politics', isSubTopic: true, parentId: 'politics-main' },
  { id: 'senate-deal', name: 'Senate Shutdown Deal', category: 'Politics', isSubTopic: true, parentId: 'politics-main' },
  { id: 'trump-syria', name: 'Trump-Syria Meeting', category: 'Politics', isSubTopic: true, parentId: 'politics-main' },
  { id: 'dem-election-wins', name: 'Democrat Election Wins', category: 'Politics', isSubTopic: true, parentId: 'politics-main' },

  // International Politics
  {
    id: 'japan-female-pm',
    name: 'Japan First Female PM',
    category: 'Politics',
    isSubTopic: true,
    parentId: 'politics-main',
    location: { city: 'Tokyo', country: 'Japan', lat: 35.6762, lng: 139.6503 }
  },
  { id: 'macron-crisis', name: 'Macron Political Crisis', category: 'Politics', isSubTopic: true, parentId: 'politics-main' },
  { id: 'tanzania-protests', name: 'Tanzania Election Protests', category: 'Politics', isSubTopic: true, parentId: 'politics-main' },

  // INTERNATIONAL CONFLICTS (Main Category)
  { id: 'conflicts-main', name: 'Wars & Conflicts', category: 'Main' },

  {
    id: 'ukraine-war',
    name: 'Ukraine War',
    category: 'Conflicts',
    isSubTopic: true,
    parentId: 'conflicts-main',
    location: { city: 'Kyiv', country: 'Ukraine', lat: 50.4501, lng: 30.5234 }
  },
  {
    id: 'russian-strikes',
    name: 'Russian Strikes Synelnykove',
    category: 'Conflicts',
    isSubTopic: true,
    parentId: 'conflicts-main',
    location: { city: 'Synelnykove', country: 'Ukraine', lat: 48.3197, lng: 35.5219 }
  },
  {
    id: 'israel-hamas',
    name: 'Israel-Hamas War',
    category: 'Conflicts',
    isSubTopic: true,
    parentId: 'conflicts-main',
    location: { city: 'Jerusalem', country: 'Israel', lat: 31.7683, lng: 35.2137 }
  },
  {
    id: 'hostage-return',
    name: 'Itay Chen Hostage Return',
    category: 'Conflicts',
    isSubTopic: true,
    parentId: 'conflicts-main',
    location: { city: 'Gaza City', country: 'Gaza', lat: 31.5, lng: 34.4667 }
  },
  {
    id: 'sudan-conflict',
    name: 'Sudan Civil War',
    category: 'Conflicts',
    isSubTopic: true,
    parentId: 'conflicts-main',
    location: { city: 'Khartoum', country: 'Sudan', lat: 15.5007, lng: 32.5599 }
  },
  {
    id: 'el-fasher',
    name: 'RSF Captures El Fasher',
    category: 'Conflicts',
    isSubTopic: true,
    parentId: 'conflicts-main',
    location: { city: 'El Fasher', country: 'Sudan', lat: 13.6300, lng: 25.3500 }
  },
  {
    id: 'sudan-ceasefire',
    name: 'Sudan Ceasefire Talks',
    category: 'Conflicts',
    isSubTopic: true,
    parentId: 'conflicts-main',
    location: { city: 'Khartoum', country: 'Sudan', lat: 15.5007, lng: 32.5599 }
  },
  {
    id: 'russia-nato',
    name: 'Russia NATO Violations',
    category: 'Conflicts',
    isSubTopic: true,
    parentId: 'conflicts-main',
    location: { city: 'Moscow', country: 'Russia', lat: 55.7558, lng: 37.6173 }
  },
  {
    id: 'russia-cyberattacks',
    name: 'Russian Cyberattacks',
    category: 'Conflicts',
    isSubTopic: true,
    parentId: 'conflicts-main',
    location: { city: 'Moscow', country: 'Russia', lat: 55.7558, lng: 37.6173 }
  },
  {
    id: 'china-military',
    name: 'China Fujian Carrier',
    category: 'Conflicts',
    isSubTopic: true,
    parentId: 'conflicts-main',
    location: { city: 'Beijing', country: 'China', lat: 39.9042, lng: 116.4074 }
  },

  // ECONOMY & MARKETS (Main Category)
  { id: 'economy-main', name: 'Economy & Markets', category: 'Main' },

  {
    id: 'us-china-trade',
    name: 'US-China Trade Deal',
    category: 'Economy',
    isSubTopic: true,
    parentId: 'economy-main',
    location: { city: 'Washington', country: 'United States', lat: 38.9072, lng: -77.0369 }
  },
  {
    id: 'china-rare-earth',
    name: 'China Rare Earth Exports',
    category: 'Economy',
    isSubTopic: true,
    parentId: 'economy-main',
    location: { city: 'Beijing', country: 'China', lat: 39.9042, lng: 116.4074 }
  },
  {
    id: 'nasdaq-rally',
    name: 'Nasdaq Rally',
    category: 'Economy',
    isSubTopic: true,
    parentId: 'economy-main',
    location: { city: 'New York City', country: 'United States', lat: 40.7128, lng: -74.0060 }
  },
  { id: 'amazon-gains', name: 'Amazon Stock Gains', category: 'Economy', isSubTopic: true, parentId: 'economy-main' },
  { id: 'nvidia-gains', name: 'Nvidia Stock Gains', category: 'Economy', isSubTopic: true, parentId: 'economy-main' },
  { id: 'gold-prices', name: 'Gold at $3,988', category: 'Economy', isSubTopic: true, parentId: 'economy-main' },
  { id: 'india-hire-act', name: 'India IT HIRE Act', category: 'Economy', isSubTopic: true, parentId: 'economy-main' },
  { id: 'wendys-closures', name: "Wendy's Closures", category: 'Economy', isSubTopic: true, parentId: 'economy-main' },
  { id: 'buffett-donation', name: 'Buffett $2.7M Donation', category: 'Economy', isSubTopic: true, parentId: 'economy-main' },
  { id: 'ups-fedex', name: 'UPS/FedEx MD-11 Grounded', category: 'Economy', isSubTopic: true, parentId: 'economy-main' },
  { id: 'shipping-crisis', name: 'Shipping Package Crisis', category: 'Economy', isSubTopic: true, parentId: 'economy-main' },
  { id: 'housing-market', name: 'Housing Market Trends', category: 'Economy', isSubTopic: true, parentId: 'economy-main' },

  // NATURAL DISASTERS (Main Category)
  { id: 'disasters-main', name: 'Natural Disasters', category: 'Main' },

  {
    id: 'typhoon-kalmaegi',
    name: 'Typhoon Kalmaegi',
    category: 'Disasters',
    isSubTopic: true,
    parentId: 'disasters-main',
    location: { city: 'Manila', country: 'Philippines', lat: 14.5995, lng: 120.9842 }
  },
  {
    id: 'philippines-floods',
    name: 'Philippines 142 Deaths',
    category: 'Disasters',
    isSubTopic: true,
    parentId: 'disasters-main',
    location: { city: 'Manila', country: 'Philippines', lat: 14.5995, lng: 120.9842 }
  },
  {
    id: 'typhoon-fung',
    name: 'Typhoon Fung-wong',
    category: 'Disasters',
    isSubTopic: true,
    parentId: 'disasters-main',
    location: { country: 'Philippines', lat: 14.5995, lng: 120.9842 }
  },
  {
    id: 'vietnam-typhoon',
    name: 'Vietnam Landfall',
    category: 'Disasters',
    isSubTopic: true,
    parentId: 'disasters-main',
    location: { city: 'Hanoi', country: 'Vietnam', lat: 21.0285, lng: 105.8542 }
  },
  {
    id: 'hurricane-melissa',
    name: 'Hurricane Melissa Haiti',
    category: 'Disasters',
    isSubTopic: true,
    parentId: 'disasters-main',
    location: { city: 'Port-au-Prince', country: 'Haiti', lat: 18.5944, lng: -72.3074 }
  },
  {
    id: 'haiti-deaths',
    name: 'Haiti 43 Deaths',
    category: 'Disasters',
    isSubTopic: true,
    parentId: 'disasters-main',
    location: { city: 'Port-au-Prince', country: 'Haiti', lat: 18.5944, lng: -72.3074 }
  },
  { id: 'climate-warnings', name: 'UNEP 2.5°C Warning', category: 'Disasters', isSubTopic: true, parentId: 'disasters-main' },
  { id: 'asia-floods', name: 'Asian Flooding Crisis', category: 'Disasters', isSubTopic: true, parentId: 'disasters-main' },

  // CRIME & TERRORISM (Main Category)
  { id: 'crime-main', name: 'Crime & Terrorism', category: 'Main' },

  {
    id: 'delhi-explosion',
    name: 'New Delhi Car Bombing',
    category: 'Crime',
    isSubTopic: true,
    parentId: 'crime-main',
    location: { city: 'New Delhi', country: 'India', lat: 28.6139, lng: 77.2090 }
  },
  {
    id: 'red-fort-attack',
    name: 'Red Fort Attack (8 Dead)',
    category: 'Crime',
    isSubTopic: true,
    parentId: 'crime-main',
    location: { city: 'New Delhi', country: 'India', lat: 28.6562, lng: 77.2410 }
  },
  { id: 'mlb-bribery', name: 'MLB Pitchers Bribery', category: 'Crime', isSubTopic: true, parentId: 'crime-main' },
  { id: 'betting-scandal', name: 'Sports Betting Scandal', category: 'Crime', isSubTopic: true, parentId: 'crime-main' },

  // TECHNOLOGY & AI (Main Category)
  { id: 'tech-main', name: 'Technology & AI', category: 'Main' },

  { id: 'ai-advances', name: 'AI Advancements', category: 'Technology', isSubTopic: true, parentId: 'tech-main' },
  { id: 'ai-ethics', name: 'AI Ethics Debates', category: 'Technology', isSubTopic: true, parentId: 'tech-main' },
  { id: 'ai-workplace', name: 'AI Workplace Impact', category: 'Technology', isSubTopic: true, parentId: 'tech-main' },
  { id: 'cybersecurity', name: 'Cybersecurity Threats', category: 'Technology', isSubTopic: true, parentId: 'tech-main' },
  { id: 'cyberattacks', name: 'Sophisticated Cyberattacks', category: 'Technology', isSubTopic: true, parentId: 'tech-main' },
  { id: 'semiconductor-ban', name: 'Semiconductor Export Ban', category: 'Technology', isSubTopic: true, parentId: 'tech-main' },
  { id: 'gallium-exports', name: 'Gallium/Germanium Exports', category: 'Technology', isSubTopic: true, parentId: 'tech-main' },

  // SPORTS (Main Category)
  { id: 'sports-main', name: 'Sports', category: 'Main' },

  { id: 'ovechkin-900', name: 'Ovechkin 900th Goal', category: 'Sports', isSubTopic: true, parentId: 'sports-main' },
  { id: 'nhl-milestone', name: 'NHL Historic Milestone', category: 'Sports', isSubTopic: true, parentId: 'sports-main' },
  { id: 'rybakina-wta', name: 'Rybakina WTA Finals', category: 'Sports', isSubTopic: true, parentId: 'sports-main' },
  { id: 'tennis-prize', name: '$5.2M Prize Record', category: 'Sports', isSubTopic: true, parentId: 'sports-main' },
  { id: 'mlb-scandal', name: 'MLB Betting Scandal', category: 'Sports', isSubTopic: true, parentId: 'sports-main' },

  // MEDIA (Main Category)
  { id: 'media-main', name: 'Media & Press', category: 'Main' },

  { id: 'bbc-resignation', name: 'BBC Chief Resigns', category: 'Media', isSubTopic: true, parentId: 'media-main' },
  { id: 'trump-speech-edit', name: 'Trump Speech Editing', category: 'Media', isSubTopic: true, parentId: 'media-main' },
  { id: 'press-freedom', name: 'Press Freedom Concerns', category: 'Media', isSubTopic: true, parentId: 'media-main' },

  // CLIMATE & ENVIRONMENT (Main Category)
  { id: 'climate-main', name: 'Climate Crisis', category: 'Main' },

  { id: 'climate-failure', name: 'Climate Policy Rollback', category: 'Climate', isSubTopic: true, parentId: 'climate-main' },
  { id: 'trump-climate', name: 'Trump Climate Rollback', category: 'Climate', isSubTopic: true, parentId: 'climate-main' },
  { id: 'unep-warnings', name: 'UNEP 2.5°C Warnings', category: 'Climate', isSubTopic: true, parentId: 'climate-main' },
  { id: 'climate-disasters', name: 'Climate-Linked Disasters', category: 'Climate', isSubTopic: true, parentId: 'climate-main' },
]
