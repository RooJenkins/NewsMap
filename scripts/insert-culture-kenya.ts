import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const summary = `Nairobi's art scene is absolutely buzzing—16 exhibitions ran simultaneously in March 2024 alone, which is an absurd density of cultural production for a city that Western institutions still somehow overlook. The Nairobi Contemporary Art Institute's "60 Years" exhibition (August-September 2024) showcased Kenyan, Ugandan, Ethiopian, Sudanese, and Congolese artists, while "In the Absence" at The African Arts Trust Gallery featured installations that directly channeled Gen Z frustrations with political and economic realities. Collectives like Kuona Trust, GoDown Arts Centre, and One Off Contemporary Art Gallery aren't just showing work—they're mentoring new talent and creating the ecosystem that launches careers. Wajukuu, founded in 2003 by Shabu Mwangi to teach art to kids in Mukuru Runga Runga informal settlement, proves how grassroots arts education shapes the next generation. The Print Press exhibition at Alliance Française (June 2025) featured Mari Endo, Dennis Muraguri, Michael Soi, and others, maintaining Nairobi's position as East Africa's contemporary art capital. Artists like Cyrus Kabiru (with his Afrofuturist "C-Stunners" from discarded metal), Wangechi Mutu (interrogating gender and postcolonial identity), and Michael Soi (whose satirical work dissects power and politics) command international respect while staying rooted in Kenyan contexts.

Kenya's film industry exploded in 2024—over 20 feature films released, 15 nominations at the Africa Movie Academy Awards (the country's highest total ever), with Boda Love winning Best Soundtrack and Counter Punch taking Best Animation. Philit Productions' Makosa ni Yangu premiere drew 6,000 attendees, unprecedented for Kenya and maybe all of Africa. That's not a film screening; that's a cultural event. December 2024 was busier than any month in Kenyan film history, and 2025's started strong with Kash Money becoming the first Kenyan project on Netflix this year, while MTV Shuga Mashariki returned after a 15-year absence. The 2025 Kalasha Awards promise a "bigger and better" edition, and the Kenya Music and Cultural Festival (97th edition in 2024, running since 1926) brings together music, dance, drama, and cultural expressions across eight days every November-December. The Rock 'n' Roll Film Festival Kenya adds music-focused cinema to the festival circuit, creating infrastructure for music videos and concert films alongside narrative features.

Eight UNESCO World Heritage Sites (five cultural, three natural) with Gedi inscribed July 27, 2024—a historic Swahili settlement that's testament to architectural and cultural heritage most people have never heard of. Lamu Old Town remains East Africa's oldest Swahili settlement, hosting major Islamic festivals since the 19th century and functioning as a center for Swahili and Islamic studies. Fort Jesus in Mombasa, Thimlich Ohinga's stone-walled settlements, and the Sacred Mijikenda Kaya Forests connect contemporary Kenyan identity to centuries-old traditions. The natural sites—Lake Turkana National Parks, Mount Kenya, and the Great Rift Valley lake system—showcase ecological diversity that matters globally, not just regionally. Lamu's cultural festivals and Islamic celebrations demonstrate how UNESCO sites remain living spaces, not fossilized tourist attractions.

The energy in Kenya's cultural sector comes from artists and filmmakers refusing to wait for international validation or government funding. The art collectives are self-organized, the film premieres are community-driven, and the festivals happen because people make them happen. When Kenyan films earn 15 AMAA nominations, when Nairobi galleries exhibit 16 shows simultaneously, when 6,000 people show up to a film premiere—that's not potential, that's achievement. The challenge is converting this grassroots energy into sustainable infrastructure without sacrificing the very independence that makes it vital. The Kenya Music and Cultural Festival's 97-year history proves the country understands cultural continuity, but contemporary arts need the same institutional support and funding that heritage preservation receives. Kenya's got the talent, the audiences, and the international recognition. Now it needs policy and investment that matches the ambition of its artists.`;

  await prisma.locationSummary.create({
    data: {
      id: 'KE-culture',
      name: 'Kenya',
      type: 'country',
      country: 'KE',
      category: 'culture',
      lat: -1.2921,
      lng: 36.8219,
      summary: summary,
      issues: JSON.stringify([
        "Nairobi's 16 simultaneous exhibitions in March 2024 showcasing East African art boom",
        "Record 15 AMAA nominations with 20+ feature films released in 2024",
        "Historic 6,000-person film premiere signaling unprecedented audience engagement",
        "Eight UNESCO sites including 2024's Gedi inscription balancing heritage with modernity"
      ]),
      topStories: '[]',
      storyCount: 0
    }
  });

  console.log('✓ Kenya culture summary inserted');
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
