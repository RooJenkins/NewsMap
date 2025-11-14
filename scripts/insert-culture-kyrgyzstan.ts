import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const summary = `Bishkek's winning its reputation as Central Asia's contemporary art hub, and artists from Uzbekistan and Tajikistan explicitly say Kyrgyzstan offers more freedom of expression than anywhere else in the region—that matters enormously when censorship shapes what's possible everywhere else. Underground spaces—literally below-ground venues—have become key contemporary art sites in post-Soviet Kyrgyzstan, with Rakhat Asangulova-Kyzy's "Ittey Bishkek" exhibition (May-June 2025) showcasing how artists are repurposing infrastructure. The Bishkek School of Contemporary Art (BiSCA), established in 2020, has developed permanent programs including the School of Methodology of Art Research, the Trash-festival, and ARALASH-zine, while completing three major projects with state museums in Bishkek, Talas, and Issyk-Kul between 2020-2022. Б'Art Contemporary develops emerging Kyrgyz work as an alternative to traditional arts, running programs like the Nomadic Art Camp. Pioneer artist-architect Ulan Zhaparov has organized events and supported dozens of artists since the early 1990s, helping transform Bishkek into a regional contemporary art center. The Kyrgyz National Museum of Fine Arts preserves traditional work, but the energy's in the underground venues and independent spaces where artists can actually take risks.

The film industry's having a genuinely remarkable moment—domestic films captured about 50% of the distribution market in 2024, sometimes hitting 60% of box office receipts, successfully competing against Hollywood. Films like "Beyish enenin tamaninda," "Ayash," and "Taxi" drove this surge, while the government doubled the production budget from 250m KGS to 500m KGS. Dastan Zhapar Ryskeldi's "Deal at the Border" won Best Film at a Vietnam festival in 2025, and the Bishkek International Film Festival (June 11-15, 2025) celebrated past, present, and future Central Asian cinema while launching the book "New Cinema in Kyrgyzstan" in June 2025. The "Kyrgyzstan - Land of Short Films" festival showcases talent specifically in that format. This isn't just national cinema finding an audience—it's Kyrgyz films outperforming Hollywood blockbusters at the domestic box office, which is wild for a country of 7 million people. KOLFEST (July 19-21, 2024) brought diverse music and arts to Lake Issyk-Kul, mixing local and international acts in settings that showcase the country's natural beauty alongside its cultural production.

Three UNESCO World Heritage Sites—Sulaiman-Too Sacred Mountain (2009), Silk Roads: Chang'an-Tianshan Corridor (2014), and Western Tien-Shan (2016)—plus 15 Intangible Cultural Heritage listings tell the story of a culture that's preserved nomadic traditions while navigating empires, Soviet rule, and independence. Sulaiman-Too in Osh has been a pilgrimage site for over 1,000 years with 101+ petroglyphs. The Silk Roads corridor stretches 3,106 miles, connecting Chang'an to Central Asia. The Intangible Heritage list includes the Art of Akyns, traditional felt carpets, the Kyrgyz epic trilogy Manas, yurt-making, and Aitysh improvisation art. Nooruz celebrations every March 21st mark the vernal equinox with festive dishes, guest visits, and folk festivals—these aren't museum exhibits; they're living practices that connect contemporary Kyrgyz identity to centuries of nomadic culture.

What makes Kyrgyzstan's cultural moment compelling is how it's leveraging Central Asia's freest expression environment without replicating Western institutions. Underground art spaces aren't trying to be Brooklyn galleries; BiSCA works with state museums rather than opposing them; film festivals celebrate regional cinema, not just international prestige. The government's doubling film production budgets shows policy supporting cultural output, and domestic films beating Hollywood proves audiences want locally rooted stories. The challenge is sustaining this momentum as regional competition intensifies and ensuring freedom of expression—Kyrgyzstan's competitive advantage—doesn't erode under political or economic pressure. Artists across Central Asia watch Bishkek precisely because what's possible there isn't possible elsewhere. That's cultural infrastructure that matters beyond box office numbers or gallery attendance—it's about creating the conditions where artists can work without fear, and audiences can engage with challenging ideas. Kyrgyzstan's delivering that right now; the question is whether it can maintain it.`;

  await prisma.locationSummary.create({
    data: {
      id: 'KG-culture',
      name: 'Kyrgyzstan',
      type: 'country',
      country: 'KG',
      category: 'culture',
      lat: 42.8746,
      lng: 74.5698,
      summary: summary,
      issues: JSON.stringify([
        "Bishkek emerging as Central Asia's freest contemporary art hub with underground venues",
        "Domestic films capturing 50-60% of box office revenue competing with Hollywood",
        "Government doubling film production budget from 250m to 500m KGS",
        "Three UNESCO sites plus 15 Intangible Heritage listings preserving nomadic traditions"
      ]),
      topStories: '[]',
      storyCount: 0
    }
  });

  console.log('✓ Kyrgyzstan culture summary inserted');
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
