import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const summary = `Central Asia's first private museum of modern and contemporary art opens in Almaty summer 2025, and this is genuinely significant—not just another vanity project. Chapman Taylor designed a 9,400 sq m building housing 700+ artworks by Kazakh and Central Asian artists, opening with Almagul Menlibayeva's first full retrospective spanning her work from the 1980s to now. Meanwhile, the Tselinny Center of Contemporary Culture launches in September in a repurposed Soviet cinema redesigned by Asif Khan. The Abylkhan Kasteyev Museum of Arts just opened a permanent contemporary art hall—previously that space only did temporary shows, so this institutional shift matters. Kazakhstan's Venice Biennale debut in 2024 with "Jerūiyq (promised land): a Look Beyond the Horizon" and the Guimet National Museum of Asian Arts in Paris showing Kazakh work signals the country's not waiting for permission to join the global conversation. It's building the infrastructure and taking the international stage simultaneously.

The film industry's having an explosive year—90 films released in 2024, a 1.5x increase from 2023, with box office revenue surging 30% to 22 billion tenge ($43.7 million). Here's the wild part: 70% of the top 20 highest-grossing films were domestic productions, and six films each grossed over $2 million. That's not just cultural pride; that's a functioning commercial film industry. "Soldier of Love," a musical featuring A-Studio pop band songs, and "Shulama" (a film about Kazakh rap) show how music and film are cross-pollinating. OYU Fest—born from the OYU Live YouTube series showcasing Kazakh artists—has grown since 2022 into a major contemporary music festival. QARA Studios (founded 2017) produces films, music videos, and commercials, creating this ecosystem where talent can actually build careers. The Eurasian Film Market runs September 29-October 1, 2025 in Almaty, while the Almaty Indie Film Festival (September 17-21) includes music video categories, and they're reviving the legendary Shaken's Stars Film Festival. That's not one-off events—that's festival infrastructure.

With six UNESCO World Heritage Sites and 14 Intangible Cultural Heritage listings, Kazakhstan's preservation game is strong. The Mausoleum of Khoja Ahmed Yasawi (inscribed 2003) was the country's first, followed by Tanbaly's petroglyphs (2004) and the Silk Roads corridor (2014). The natural sites—Saryarka steppe, Western Tien-Shan, and the Cold Winter Deserts of Turan (2023)—showcase ecological diversity alongside cultural history. The Intangible Heritage list includes kui performance, Kazakh kuresi wrestling, assyk atu game, betashar wedding ritual, and orteke puppet dance. Prime Minister Olzhas Bektenov's pushing to transform these sites into tourism hubs with cultural events and educational programming—treating UNESCO status as economic opportunity, not just prestige.

The energy in Kazakhstan's cultural sector right now comes from this refusal to wait for Western validation. They're opening museums, producing films that actually make money domestically, inscribing heritage sites, and launching festivals without asking if New York or London cares. The British Council's Creative Collaborations grants and British architects designing major venues show international partnerships are happening, but on Kazakhstan's terms. The government's actually funding this stuff—state support for nearly 30 films in 2024, museum construction, festival infrastructure. That's cultural policy with teeth. The challenge is sustaining this momentum beyond the current investment cycle and ensuring contemporary artists get the same institutional support as heritage preservation. But when domestic films dominate your box office and you're opening Central Asia's first private contemporary art museum, you're not just talking about potential—you're delivering results. Kazakhstan's betting that building world-class cultural infrastructure will make them a Central Asian hub, and based on 2024-2025's trajectory, it's working.`;

  await prisma.locationSummary.create({
    data: {
      id: 'KZ-culture',
      name: 'Kazakhstan',
      type: 'country',
      country: 'KZ',
      category: 'culture',
      lat: 51.1694,
      lng: 71.4491,
      summary: summary,
      issues: JSON.stringify([
        "Central Asia's first private contemporary art museum opening summer 2025",
        "Domestic films capturing 70% of top 20 box office with $43.7M revenue",
        "Venice Biennale debut and international museum exhibitions in 2024",
        "Six UNESCO sites with government push to develop tourism infrastructure"
      ]),
      topStories: '[]',
      storyCount: 0
    }
  });

  console.log('✓ Kazakhstan culture summary inserted');
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
