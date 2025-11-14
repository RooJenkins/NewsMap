import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const summary = `Kingston is a UNESCO Creative City of Music, and 2024 proved exactly why—it was perhaps the best year the Jamaican entertainment landscape has seen in recent memory, with non-stop lyrical confrontations, viral collaborations, and an industry that's finally getting the institutional support it deserves. The Jamaica Screen Development Initiative just dropped $668 million into local film production, funding 91 small and medium-sized enterprises across 259 evaluated projects. That's real money going to actual filmmakers, not just talk. Seven projects got festival support, nine films in progress received completion funding, and 51 more landed development grants. Meanwhile, JAMPRO's negotiating co-production treaties with Canada, Nigeria, India, and South America—positioning Jamaica not as some exotic filming location but as a genuine production partner. When Paramount's Bob Marley biopic spent US$20 million locally and created 1,800 jobs, it proved what's possible when the infrastructure exists.

But here's the tension: while music and film are getting government backing, the visual arts are starving. The National Gallery of Jamaica is basically holding the entire contemporary art scene together with the Kingston Biennial 2024: Green X Gold featuring 28 artists, plus a 'Celebrating Reggae' exhibition running through July 2025. Beyond that? There's Susanne Fredricks' Beyond Tropical collection at the AC Marriott—the only other public contemporary art display in the country—with recent acquisitions of Ebony G. Patterson and Kimani Beckford. Experience Jamaique Gallery is doing yeoman's work with exhibitions by Lisa Hendricks, Kadiejra O'Neal, and Stafford Schliefer through 2025, but the funding scarcity is criminal. You've got artists like Bonito 'Nito' Thompson doing genuinely innovative work linking 3-D art to dancehall through augmented reality, and there's nowhere for him to show it properly. The streetside murals, Kingston Night Market pop-ups, and the Annual Liguanea Art Festival are great, but Jamaica deserves better exhibition infrastructure than that.

Reggae's UNESCO Intangible Cultural Heritage status (inscribed 2018) feels both validating and slightly beside the point when you look at what's actually happening in Jamaican music right now. The 2024 Jamaica Music Countdown Year-End Charts track radio airplay, club rotation, streaming stats, and street buzz—and the diversity is wild. The 2025 Island Music Conference panels on digital transformation showed an industry wrestling with how streaming has democratized access while complicating revenue streams. The global music business raked in $29.6 billion in 2024, and Jamaican artists are claiming their share through TikTok virality and playlist placement in ways that don't fit the traditional reggae narrative. Jamaica Music Festivals are pulling international crowds, but there's this weird disconnect between the UNESCO heritage brand and the constantly mutating sound coming out of Kingston studios.

The Blue and John Crow Mountains (UNESCO World Heritage since 2015) remain the only mixed cultural-natural site on the island, while the Maroon Heritage of Moore Town got ICH status back in 2008. Every January, the Accompong Maroons celebrate the 1739 peace treaty signing, and Seville Heritage Park hosts Emancipation Day culture parties every August 1st with traditional foods and activities. These aren't tourist attractions—they're living cultural practices. The 17th Century Port Royal archaeological ensemble represents Jamaica's complex colonial history, but it's telling that the contemporary cultural conversation focuses far more on music and film than on preserving or interpreting these sites for younger generations. Jamaica's cultural power comes from its ability to constantly reinvent itself, but you can't sustain that reinvention without funding the spaces where new work happens. The Screen Development Initiative shows what's possible; now apply that same energy and resources to visual arts and heritage preservation before the gap becomes insurmountable.`;

  await prisma.locationSummary.create({
    data: {
      id: 'JM-culture',
      name: 'Jamaica',
      type: 'country',
      country: 'JM',
      category: 'culture',
      lat: 18.1096,
      lng: -77.2975,
      summary: summary,
      issues: JSON.stringify([
        "Jamaica Screen Development Initiative investing $668M in film production infrastructure",
        "Visual arts funding crisis despite thriving National Gallery exhibitions",
        "Reggae's UNESCO status vs. digital-age music industry transformation",
        "Heritage site preservation lagging behind music and film investment"
      ]),
      topStories: '[]',
      storyCount: 0
    }
  });

  console.log('✓ Jamaica culture summary inserted');
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
