import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const summary = `Lao Art Week is quietly becoming one of Southeast Asia's most important contemporary art events—376,000 visitors attended the 2024 edition (October 12-27) themed "RISE – Growth and Transformation," featuring 187 artists across painting, sculpture, photography, digital art, textile design, graffiti, art toys, literature, and performance. The 2025 edition (October 10-19) under the theme "Motion" brought 100+ Lao artists to 12 venues across Vientiane, and the event officially registered as the Lao Art Week Association in 2025, signaling institutional permanence. The XYZ Art and Culture Center, co-founded in 2022 as an independent, artist-led space, organizes Lao Art Week and provides year-round programming. Elevations Laos—funded by the Spellbrook Foundation—runs mentorship programs with Year 4 students, culminating in field trips to Chiang Mai (October 2022, October 2024), creating the regional exchange networks that isolated artists desperately need. For a country with minimal contemporary art infrastructure a decade ago, this is remarkable growth. Young Lao artists are sharing stories about life and dreams to audiences who actually show up—376,000 people don't attend an art festival unless the work resonates culturally and the programming connects.

The film scene is scrappier and more fragile. The Luang Prabang Film Festival (rebranded Blue Chair Film Festival) ran December 5-9, 2024, screening local films in one of the country's biggest cinematic events. The Language Project's youth filmmaking training—six weeks of workshops resulting in two short films showing "Laos Through Their Own Eyes"—got EXO Foundation support for summer 2025. But here's the brutal reality: The Language Project's YouTube channel was hacked in 2024, losing 11 million views, 32,000 subscribers, and all their student educational and fictional films. They're starting from zero. That's the kind of catastrophic setback that kills cultural projects in countries without robust institutional support. Cinema infrastructure concentrates in Vientiane (Major Platinum Cineplex at ITECC Mall, Cityplex Major Cinema), leaving the rest of the country underserved. Lao New Wave Cinema Productions and filmmakers like Anysay Keola keep pushing for "Laollywood," but without systematic funding, distribution infrastructure, or protection from disasters like channel hacks, momentum's hard to sustain.

Four UNESCO World Heritage Sites tell Laos's story: Luang Prabang (1995), Vat Phou (2001), Plain of Jars (2019), and Hin Nam No National Park (2025, natural site). Luang Prabang's daily alms-giving ceremony at 6am—where locals sit with food awaiting hundreds of Buddhist monks—isn't a tourist performance; it's living religious practice that's shaped the city for centuries. The Boun Wat Phou festival annually gathers pilgrims and tourists for traditional ceremonies and cultural exhibitions at the temple complex. UNESCO's Intangible Cultural Heritage list includes traditional Khaen music (inscribed 2017)—the Khaen being fundamental to Lao musical identity—and Naga pattern weaving (2023). These aren't preserved artifacts; they're practices connecting contemporary Lao life to pre-colonial traditions, surviving French colonialism and American bombing campaigns that made Laos the most heavily bombed country per capita in history.

The challenge for Laos's cultural sector is building resilience against the kind of disaster that wiped out The Language Project's YouTube archive. Lao Art Week's official association status helps, but 187 artists sharing 376,000 visitors means maybe 2,000 people per artist—incredible for exposure, brutal for sales without a functioning art market. The film scene needs production funding, distribution infrastructure, and digital backup systems before another hack destroys years of work. The UNESCO sites require preservation funding as tourist infrastructure expands. What's impressive is that despite minimal resources, artists and organizers keep building—XYZ Art and Culture Center, Elevations Laos, Lao Art Week, Blue Chair Film Festival. These aren't government initiatives; they're artist-led projects sustained by international foundation support and sheer determination. Laos's cultural production happens in the gaps between official policy, which makes it vulnerable but also remarkably creative. The question is whether the government will recognize this energy and fund it properly before it burns out or gets hacked into oblivion.`;

  await prisma.locationSummary.create({
    data: {
      id: 'LA-culture',
      name: 'Laos',
      type: 'country',
      country: 'LA',
      category: 'culture',
      lat: 17.9757,
      lng: 102.6331,
      summary: summary,
      issues: JSON.stringify([
        "Lao Art Week drawing 376,000 visitors with 187 artists across contemporary media",
        "Film scene devastated by YouTube hack losing 11M views and entire student archive",
        "Four UNESCO sites including 2025's Hin Nam No National Park preserving heritage",
        "Artist-led institutions building infrastructure without systematic government support"
      ]),
      topStories: '[]',
      storyCount: 0
    }
  });

  console.log('✓ Laos culture summary inserted');
  console.log(`Character count: ${summary.length}`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
