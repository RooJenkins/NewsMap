import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const summary = `The Benghazi Summer Festival returned in August 2024 after a 15-year hiatus, and the symbolism of that timeline is crushing—Libya's first major cultural event in 15 years featured 27+ artists from across the Arab world, including Egyptian rapper Wegz, Moroccan rapper ElGrandeToto, and Libyan musicians finally performing at home. Libyan artist Amaka Jaji released his debut album TIDET in April 2024, channeling Tuareg and Sufi music's spiritual trance to honor his heritage. Post-2011 revolution, Libyan rap and hip-hop emerged as youth expression and political commentary, produced in informal/underground settings because infrastructure and censorship make formal production impossible. The Libya International Short Film Festival (October 1, 2024) drew 216 films from 21 countries, but here's the brutal reality: Libya's produced six feature films, 40 shorts, 200 documentaries—and Libyans can't access them because they're locked in government archives. That's not a film industry; that's cultural hostage-taking.

The contemporary art scene thrives despite, not because of, government support. "Art as Identity" (curated by Ludovico Pratesi, opened February 21 in Tripoli after Benghazi) staged dialogue between Libyan and Italian artists around heritage, archaeology, and shared identity. Younger artists like Yousef Fetis, Matug Aborwai, Mohammed Bin Lamin, Hadia Gana, and Tewa Barnosa express socio-political concerns bolder than previous generations crushed under Gaddafi's censorship. Benghazi's galleries showcase emerging talent, while diaspora artists launch initiatives like Tewa Barnosa's WaraQ Foundation for arts and culture—a not-for-profit reviving the Libyan art scene from outside because domestic infrastructure barely functions. These artists explore history, cultural resilience, and rebirth in work that refuses to treat Libya's catastrophic decade-plus as the final chapter. The art's being made, exhibited, discussed—but without institutional support, stable venues, or functioning markets.

Five UNESCO World Heritage Sites—Cyrene, Leptis Magna, Sabratha (all Roman archaeological sites), Rock-Art Sites of Tadrart Acacus (Neolithic-era art), and Old Town of Ghadamès (traditional architecture)—were all listed as endangered in 2016 due to civil war instability. In 2025, Ghadamès got removed from the endangered list thanks to extensive restoration by local authorities and partners—that's genuinely hopeful news in a country where heritage preservation competes with survival. Leptis Magna's amphitheatre, basilica, and baths offer insights into Roman urban planning, while Tadrart Acacus's rock art showcases millennia of North African cultural continuity. Ghadamès's white-washed houses with narrow alleyways and central square—where locals gather for socializing, trade, and festivals—prove traditional architecture adapted perfectly to desert conditions. UNESCO partnership shows international commitment to preserving Libya's heritage even when the state can't.

Libya's cultural production happens in the cracks—underground rap sessions, diaspora-funded art foundations, international festival partnerships, local authority heritage restoration. The Benghazi Festival's 15-year gap isn't a statistic; it's an entire generation that grew up without major cultural events. The government archive hoarding films while Libyans can't watch their own cinema is policy failure that borders on cultural sabotage. Artists creating under these conditions aren't building careers—they're performing cultural archaeology on a living civilization, documenting and preserving what survives. Every restored heritage site, every festival that happens, every artwork exhibited is remarkable not because of aesthetic innovation but because it exists at all. The challenge isn't whether Libya has cultural talent—artists like Jaji, the Benghazi galleries, the WaraQ Foundation prove it does. The challenge is whether Libya can build infrastructure—archives that aren't locked, venues that stay open, funding that flows, festivals that happen annually not once in 15 years—before another generation loses access to its own culture. Ghadamès coming off the endangered list shows what's possible with commitment and resources. Now scale that to the entire cultural sector before the archives decay, the artists emigrate, and the institutional memory disappears entirely.`;

  await prisma.locationSummary.create({
    data: {
      id: 'LY-culture',
      name: 'Libya',
      type: 'country',
      country: 'LY',
      category: 'culture',
      lat: 32.8872,
      lng: 13.1913,
      summary: summary,
      issues: JSON.stringify([
        "Benghazi Festival returning after 15-year hiatus marking cultural revival",
        "Government archives holding Libyan films inaccessible to citizens",
        "Ghadamès removed from UNESCO endangered list after restoration efforts",
        "Contemporary art scene driven by diaspora initiatives like WaraQ Foundation"
      ]),
      topStories: '[]',
      storyCount: 0
    }
  });

  console.log('✓ Libya culture summary inserted');
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
