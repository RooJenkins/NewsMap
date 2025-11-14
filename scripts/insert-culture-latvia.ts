import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const summary = `Gints Zilbalodis's "Flow" just won Latvia's first-ever Oscar for Best Animated Feature in March 2025, and the film drops on Max February 14—that's not a fluke award, it's a genuinely innovative animated film without dialogue that proves Latvian cinema can compete at the highest international level. The Ministry of Economics, LIAA, and the film industry agreed to resume support for new projects "as quickly as possible" with improved conditions for 2025, recognizing that Oscar buzz means nothing without sustainable production funding. Latvian director Krista Burāne's in postproduction on "All the Birds Sing," a musical documentary with animated elements that signals genre experimentation beyond traditional narrative. The Riga International Film Festival's Baltic Music Video Competition awarded Anna Ansone's "Protection" (for German post-punk group SMILE) top prize in October 2024, with special mention to Antons Georgs Grauds's "In My Nostrils" for musical project Zvīņas. That music video category matters—it's where young directors learn craft on minimal budgets while building portfolios that lead to feature work.

Riga's positioning itself as a Baltic cultural hub with real infrastructure, not just aspiration. The inaugural Riga Contemporary art fair (July 10-13, 2025) at Hanzas Perons brings 35+ international galleries from the Baltics, Nordics, USA, and Japan—founded by Kim? Contemporary Art Centre, which has been building international credibility since 2021 through NADA Miami, Paris Internationale, and Tokyo's Onsen Confidential. Riga Art Week (May 26-June 1, 2025) spreads contemporary art across established venues and emerging neighborhoods like Grizindarzs, Veldze, New Hanza, and Agenskalns—making art citywide, not siloed in museums. The Latvian National Museum of Art's "The Latvian Collection" (December 2024-February 2025) paired early 20th-century Latvian works from Malmö Art Museum with eight new contemporary pieces interrogating nationalism and state formation—exactly the kind of curatorial conversation that makes historical collections relevant. Latvia participated in Venice Biennale Arte 2024, and Kim? Contemporary Art Centre's international fair presence shows Baltic artists don't need to move to Berlin or London to access global networks anymore.

Three UNESCO World Heritage Sites—Historic Centre of Riga, Struve Geodetic Arc, and Old Town of Kuldīga (inscribed 2023)—plus UNESCO Intangible Cultural Heritage recognition for Baltic song and dance celebrations (2008). Riga's Historic Centre showcases medieval and Art Nouveau architecture from its Hanseatic League prosperity (13th-15th centuries), while Kuldīga's recent inscription recognizes a western Latvian town's "outstanding universal value to humanity." The Struve Geodetic Arc, spanning 2,820 kilometers across ten countries, represents 19th-century scientific achievement that shaped modern geodesy. The Baltic song and dance celebrations aren't performative heritage—they're living traditions connecting contemporary Latvian identity to pre-Soviet cultural practices that survived occupation. Riga's nightlife vibrates with music and dancing in clubs that overlay centuries of architectural history, refusing to treat UNESCO status as museum preservation rather than lived urban space.

Latvia's cultural momentum comes from strategic infrastructure building—art fairs, film festivals, music video competitions, government funding resumption—rather than waiting for organic growth. The Oscar win validates years of investment in animation and experimental filmmaking. The art fair and Riga Art Week create commercial and critical infrastructure simultaneously. The UNESCO inscriptions (Kuldīga in 2023) show ongoing preservation alongside contemporary innovation. The challenge is maintaining this energy post-EU accession euphoria as regional competition intensifies from Vilnius, Tallinn, and Warsaw. Latvia's population of 1.9 million means every cultural investment needs to punch above its weight demographically. The film industry's pushing for improved support conditions in 2025 because they know Oscar momentum won't translate to sustainable production without policy backing. The contemporary art scene's building international networks because the domestic market alone can't sustain 35 galleries. Latvia's cultural strategy is working—now it needs the resources to scale without losing the experimental edge that made "Flow" and Riga Art Week possible in the first place.`;

  await prisma.locationSummary.create({
    data: {
      id: 'LV-culture',
      name: 'Latvia',
      type: 'country',
      country: 'LV',
      category: 'culture',
      lat: 56.9496,
      lng: 24.1052,
      summary: summary,
      issues: JSON.stringify([
        "First Oscar win for 'Flow' driving film industry funding improvements in 2025",
        "Riga Contemporary art fair launching July 2025 with 35+ international galleries",
        "Kuldīga UNESCO inscription in 2023 expanding heritage recognition",
        "Baltic Music Video Competition nurturing experimental directors and musicians"
      ]),
      topStories: '[]',
      storyCount: 0
    }
  });

  console.log('✓ Latvia culture summary inserted');
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
