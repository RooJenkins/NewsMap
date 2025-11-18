import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const summary = `Venice is about to absolutely lose its mind when Carlo Ratti's 19th International Architecture Exhibition opens this May, running through November 2025—and this time, the Biennale's architectural ambitions feel urgent in a way that transcends mere spectacle. Meanwhile, Milan's miart returns April 4-6 with 179 galleries from 31 countries under the theme "Among Friends," which sounds cozy until you realize it's actually a pointed commentary on the increasingly tribal contemporary art world. Anselm Kiefer is dropping a new site-specific work at Palazzo Reale that already has collectors circling, while Ai Weiwei's first Bologna solo at Palazzo Fava proves the Chinese dissident is still making work that matters politically and aesthetically.

The Italian film industry is having one of those weird boom moments—revenues jumped 8.5% in 2024, streaming surged 13.5% to €308.1m, and Italian artists now account for 45% of all streams in the country. That's not just national pride; it's a genuine cultural shift. Director Margherita Vicario's GLORIA! turned heads everywhere from Venice to international festivals with its music-fueled story of an overlooked maid at a Venetian orphanage—exactly the kind of fresh, feminist cinema that Italian film has desperately needed. But here's the tension: while streaming money floods in, the culture ministry dragged its feet approving the 40% tax credits that actually keep productions afloat, sparking protests from industry figures at Cannes. Classic Italian bureaucracy strangling its own renaissance.

Turin's Artissima (October 31-November 2, 2025) remains the only Italian fair exclusively devoted to contemporary art, under Luigi Fassi's sharp curatorial eye, while Bologna's Arte Fiera brings 170+ galleries showcasing modern masters this January-February. The gap between these two approaches—reverence for the past versus commitment to the now—defines Italy's cultural civil war. Palazzo Barberini's Caravaggio 2025 exhibition is mounting 24 rare works by Michelangelo Merisi, and yes, it's spectacular, but there's something telling about how Italy still leans hardest into its 17th-century genius when promoting culture abroad. Contemporary voices like those shown at Galleria Studio G7—which brought an entirely Italian roster to Untitled Art Fair 2024—deserve that same institutional firepower.

With 61 UNESCO World Heritage Sites (more than any country on Earth), plus 15 Intangible Cultural Heritage traditions like the Perdonanza Celestiniana in L'Aquila and the Opera dei Pupi in Palermo, Italy's cultural preservation game is unmatched. But preservation can become paralysis. The FIMUCITÉ 2025 festival in Tenerife is celebrating Italian film composers—Morricone, Rota, Trovajoli—which is lovely, but where's the spotlight on the living composers scoring Netflix's Italian productions? Where's the investment in digital arts, in experimental theater outside Rome and Milan? Italy has the infrastructure, the talent, the global brand. The question for 2025 is whether it's willing to fund the messy, difficult, forward-looking work as generously as it venerates its incomparable past.`;

  await prisma.locationSummary.create({
    data: {
      id: 'IT-culture',
      name: 'Italy',
      type: 'country',
      country: 'IT',
      category: 'culture',
      lat: 41.8719,
      lng: 12.5674,
      summary: summary,
      issues: JSON.stringify([
        "Architecture Biennale and contemporary art fair boom",
        "Film industry revenue surge amid bureaucratic funding delays",
        "Tension between UNESCO preservation and contemporary innovation",
        "Streaming revolution transforming Italian music dominance"
      ]),
      topStories: '[]',
      storyCount: 0
    }
  });

  console.log('✓ Italy culture summary inserted');
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
