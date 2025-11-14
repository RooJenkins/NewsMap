import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const summary = `Art Week Tokyo just posted ridiculous numbers for November 2025—33% attendance growth from 2022 to 2023, another 15% in 2024, and VIP attendance surged 89% in 2024 alone. That's not normal art fair growth; that's a cultural shift. What makes AWT fascinating is its deliberate rejection of the traditional fair model in favor of what they're calling a "post-art fair" approach, uniting over 50 museums, galleries, and independent spaces across the city. It's positioning Japanese contemporary art within Asia's ecosystem in a way that doesn't bow to Hong Kong or Singapore, and the international art world is finally paying attention. Roppongi Crossing 2025 (December 3, 2025-March 29, 2026) at Mori Art Museum features 21 artists under the theme "What Passes Is Time. We Are Eternal"—the eighth iteration of this triennial snapshot of Japan's contemporary scene, and it's showing work that melts tradition with radical experimentation in ways only Japanese artists seem to manage.

Meanwhile, Japanese film and television went absolutely nuclear internationally in 2024. Yamazaki Takashi's "Godzilla Minus One" won Best Visual Effects at the Oscars, Miyazaki Hayao's "The Boy and the Heron" took Best Animated Feature, and "Shōgun" broke Emmy records with 18 awards plus Disney streaming's longest-ever viewing time. That's not a fluke year—it's 600+ films produced annually in an industry that's strategically opening through co-productions across Asia. And then there's the music industry launching MUSIC AWARDS JAPAN in May 2025 at Rohm Theatre Kyoto—a massive new awards show covering 60+ categories based on Billboard Japan data and industry metrics. Mrs. GREEN APPLE won Artist of the Year, Fujii Kaze landed 17 nominations, and Creepy Nuts became the most-winning artist with nine awards. The MTV VMAs Japan have been running since 2002, but this new awards infrastructure signals Japan's music business is done playing second fiddle to K-pop's global dominance.

With 26 UNESCO World Heritage Sites (21 cultural, 5 natural), Japan's heritage infrastructure is extraordinary—the Sado mine just got listed in 2024. But here's what separates Japan from countries that treat UNESCO sites like museum exhibits: they actually use them. Kyoto's Kiyomizudera Temple does illumination festivals in spring and fall, Nijo Castle's 400 cherry trees bloom for the public every April, and Yasaka-jinja Shrine hosts the Gion Festival every July with massive portable shrine processions through the city. Shirakawa-go's autumn Doboroku Matsuri features home-brewed sake offerings and traditional dancing. Nara National Museum's annual exhibition of Todaiji Temple's Shoso-in treasures is a major cultural event. These aren't static monuments—they're living cultural infrastructure that connects contemporary Japanese life to 1,000+ years of aesthetic tradition.

The tension in Japanese culture right now is how to maintain this connection to tradition while creating space for genuinely radical contemporary work. Art Week Tokyo's "post-art fair" model works precisely because it doesn't force galleries to choose between showing Yayoi Kusama retrospectives or emerging ceramicists working with AI-generated glaze patterns. Both exist simultaneously, both command respect, both sell. The film industry's global success comes from this same flexibility—"Godzilla Minus One" is a kaiju movie that also happens to be a meditation on postwar Japanese trauma. "The Boy and the Heron" uses traditional animation techniques to tell a story that's deeply weird and personal. Japan's cultural superpower is refusing to separate "high" and "low" culture, "traditional" and "contemporary" art, "heritage preservation" and "innovative creation." The infrastructure supports all of it—the government funds it, audiences show up for it, and the international market can't get enough. That's what a functional cultural ecosystem looks like.`;

  await prisma.locationSummary.create({
    data: {
      id: 'JP-culture',
      name: 'Japan',
      type: 'country',
      country: 'JP',
      category: 'culture',
      lat: 35.6762,
      lng: 139.6503,
      summary: summary,
      issues: JSON.stringify([
        "Art Week Tokyo's 'post-art fair' model driving 89% VIP attendance surge",
        "Japanese film and TV's global domination with Oscars and Emmy records",
        "MUSIC AWARDS JAPAN launch challenging K-pop's regional supremacy",
        "UNESCO heritage sites as living cultural infrastructure not static museums"
      ]),
      topStories: '[]',
      storyCount: 0
    }
  });

  console.log('✓ Japan culture summary inserted');
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
