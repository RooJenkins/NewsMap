# Category-Specific Summary Style Guide

This guide defines the voice, structure, and requirements for category-specific country summaries.

## General Requirements

- **Length**: 2,000-3,500 characters (varies by category)
- **Tone**: Professional, analytical, evidence-based (or engaging for travel/food)
- **Structure**: Clear sections with specific focus areas
- **Citations**: Reference actual news stories and dates when possible
- **Audience**: Business, investment, policy professionals, journalists, travelers

---

## TRAVEL & TOURISM

### Voice & Style
- **Persona**: Anthony Bourdain meets Rick Steves - adventurous yet practical, culturally curious with street-level insights
- **Tone**: Engaging, authentic, with personality but still informative
- **Length**: 2,500-3,500 characters

### Required Content
1. **Must-See Destinations**: Major tourist draws and UNESCO sites
2. **Hidden Gems**: Off-the-beaten-path locations locals love
3. **Infrastructure**: Transportation, accommodation quality, accessibility
4. **Safety & Security**: Current safety situation for travelers
5. **Visa Requirements**: Entry requirements and difficulty level
6. **Best Times to Visit**: Seasonal considerations, weather, peak/off-peak
7. **Tourist Numbers**: Annual visitor statistics and trends

### Writing Guidelines
- Open with an evocative scene or distinctive travel hook
- Balance practical logistics with cultural immersion
- Include specific examples and vivid details
- Mention both budget and luxury options
- Address common traveler concerns honestly
- End with a compelling reason to visit (or honest assessment)

### Examples of Good Opening Lines
- "Landing in [Country] feels like stepping into a living contradiction..."
- "Most travelers miss [Country]'s real magic by sticking to the guidebook circuit..."
- "There's a reason [Country] has become the fastest-growing destination in [region]..."

### Database Field
- **category**: `'travel'`

---

## FOOD & CUISINE

### Voice & Style
- **Persona**: Samin Nosrat meets David Chang - celebrating culture through food, technical but accessible
- **Tone**: Passionate, reverent to tradition, curious about innovation
- **Length**: 2,000-3,000 characters

### Required Content
1. **National Dishes**: Iconic foods that define the cuisine
2. **Regional Specialties**: Geographic variations and local favorites
3. **Street Food Culture**: Markets, stalls, food traditions
4. **High-End Dining**: Michelin stars, fine dining scene, celebrity chefs
5. **Key Ingredients**: Agricultural products, spices, unique items
6. **Food Traditions**: Meal customs, hospitality, food rituals
7. **Agricultural Context**: What they grow, produce, export

### Writing Guidelines
- Lead with the most distinctive or surprising culinary element
- Explain the "why" behind dishes (history, climate, culture)
- Balance street-level and high-end perspectives
- Mention specific dishes by local names
- Include sensory details (flavors, textures, aromas)
- Connect food to broader culture and identity
- Address how cuisine is evolving or being preserved

### Examples of Good Opening Lines
- "[Country]'s cuisine is a masterclass in [technique/philosophy]..."
- "To understand [Country], start with [dish] - it tells you everything..."
- "While the world knows [Country] for [famous dish], locals will point you to..."

### Database Field
- **category**: `'food'`

---

## CRIME & JUSTICE

### Voice & Style
Write in the style of **Preet Bharara** (former US Attorney) and **Jeffrey Toobin** (legal analyst):
- Sharp, authoritative analysis of legal and criminal justice systems
- Focus on institutional strengths and weaknesses
- Balance between crime data and justice system functioning
- Professional prosecutorial perspective
- Evidence-based, avoid sensationalism

### Content Focus
Cover these key areas:
- **Crime rates and trends**: Overall crime statistics, violent vs property crime, trends over time
- **Justice system structure**: Court system, judiciary independence, legal framework
- **Police forces**: Law enforcement capacity, training, corruption levels, reform efforts
- **Prisons and incarceration**: Prison system, incarceration rates, conditions, reform
- **Major cases**: High-profile criminal cases, corruption trials, ongoing investigations
- **Rule of law**: Legal protections, due process, judicial independence
- **Organized crime**: Drug trafficking, gangs, transnational crime networks

### Structure
```
# [Country Name]: Crime & Justice

[Opening paragraph: 1-2 sentences on overall crime/justice landscape]

## Crime Landscape
- Current crime rates and notable trends
- Types of crime prevalent in the country
- Geographic hotspots or patterns
- Recent major incidents or cases

## Justice System
- Structure and capacity of courts and legal system
- Judicial independence and integrity
- Prosecution and defense capabilities
- Notable legal reforms or challenges

## Law Enforcement
- Police force structure and capacity
- Corruption levels and reform efforts
- Relationship with communities
- Training and professionalization

## Corrections & Incarceration
- Prison system and conditions
- Incarceration rates and trends
- Rehabilitation vs punishment approach
- Major issues (overcrowding, violence, etc.)

## Key Cases & Investigations
- High-profile criminal cases
- Corruption trials
- Ongoing major investigations

## Summary
[Final paragraph synthesizing the state of crime and justice]
```

### Database Field
- **category**: `'crime'`

---

## ENERGY

### Voice & Style
Write in the style of **Daniel Yergin** (energy historian and analyst):
- Strategic, big-picture analysis of energy systems
- Historical context and future trajectory
- Geopolitical and economic implications
- Balance between fossil fuels and renewables transition
- Data-driven but accessible

### Content Focus
Cover these key areas:
- **Energy mix**: Breakdown of energy sources (fossil fuels, nuclear, renewables)
- **Major energy resources**: Oil, gas, coal reserves, renewable potential
- **Energy independence/dependence**: Import/export dynamics, strategic vulnerabilities
- **Power grid infrastructure**: Electricity generation, transmission, reliability
- **Energy prices**: Consumer and industrial energy costs, subsidies, market dynamics
- **Future energy strategy**: Government plans, investment trends, transition policies
- **Climate implications**: Emissions, targets, renewable energy commitments

### Structure
```
# [Country Name]: Energy

[Opening paragraph: 1-2 sentences on overall energy situation and strategic position]

## Energy Mix
- Current breakdown of energy sources
- Fossil fuels (oil, gas, coal) vs renewables vs nuclear
- Recent shifts in energy composition
- Comparison to regional or global averages

## Energy Resources & Production
- Domestic energy resources (proven reserves, production capacity)
- Key energy infrastructure (refineries, power plants, pipelines)
- Energy production trends
- Export/import dynamics

## Energy Independence & Security
- Self-sufficiency vs import dependence
- Major energy trade partners
- Strategic vulnerabilities
- Energy security initiatives

## Power Grid & Infrastructure
- Electricity generation capacity and reliability
- Grid modernization efforts
- Access to electricity (rural vs urban)
- Infrastructure challenges

## Energy Prices & Economics
- Consumer energy prices (electricity, fuel)
- Industrial energy costs
- Subsidies and market interventions
- Impact on economy and competitiveness

## Future Energy Strategy
- Government energy plans and targets
- Renewable energy investments and projects
- Climate commitments and emissions targets
- Energy transition policies and timeline

## Summary
[Final paragraph synthesizing the energy landscape and trajectory]
```

### Database Field
- **category**: `'energy'`

---

## General Writing Best Practices

1. **Be Specific**: Use numbers, dates, names of officials, specific laws or cases
2. **Cite Sources**: Reference news stories when making claims
3. **Avoid Speculation**: Stick to what's happening and logical implications
4. **Balance**: Present both challenges and successes
5. **Context**: Explain why developments matter for the country's trajectory
6. **Actionable**: Provide insights useful for decision-makers
7. **Current**: Focus on November 2025 and recent developments

## Cultural Sensitivity (for all categories)

- Respect local perspectives and traditions
- Acknowledge complexities and controversies honestly
- Avoid perpetuating stereotypes
- Use proper transliterations and local terminology

---

## Database Integration

Each summary is stored with:
```typescript
{
  name: string,           // "Japan", "Brazil", etc.
  type: 'country',
  country: string,        // Same as name for countries
  lat: number,
  lng: number,
  category: string,       // 'travel', 'food', 'crime', 'energy', etc.
  summary: string,        // Full markdown text (2,000-3,500 chars)
  issues: string,         // JSON array of major issues (empty for travel/food)
  topStories: string,     // JSON array of news stories (empty for travel/food)
  storyCount: number,
  updatedAt: DateTime
}
```

---

## Quality Control

Before saving each summary, verify:
- ✅ Length is between 2,000-3,500 characters (category-specific)
- ✅ All main sections are covered
- ✅ Voice matches the specified expert/persona
- ✅ Specific examples and data points included
- ✅ Appropriate tone maintained (analytical or engaging as per category)
- ✅ Category field correctly set
