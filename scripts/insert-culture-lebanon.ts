import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const summary = `Lebanese producer Georges Schoucair shot two independent features and helped launch a new arthouse cinema in 2024 while bombs were falling—that's not heroic romanticism, that's cultural survival under impossible conditions. His film "It's A Sad And Beautiful World" won €10,000 at Marrakech, while Palestinian and Lebanese filmmakers launched Route 243 (named for the 243 kilometers between Jerusalem and Beirut) at Cannes Market May 2025, signaling cross-border collaboration despite regional conflict. Mira Shaib's debut "Arzé" premiered in Beijing and Tribeca, and "The Third of the Rahbanis" documents composer Elias El Rahbani's journey distinct from his famous brothers. The Lebanese Independent Film Festival (LIFF) runs February 11-16, 2025 in Alba, Beirut, while Australia's 13th Lebanese Film Festival showcases 2024 productions. But here's the brutal reality: galleries across Beirut shut down in recent months because there's no demand to buy art during war. Cultural venues reopened, then international events got canceled due to evacuation orders. Artists told Reuters they're literally creating in the dark as infrastructure collapses. This isn't a cultural scene—it's cultural triage.

The Beirut Museum of Art (BeMA) plans pop-up exhibitions of its 100-year-old collection until its official 2029 opening, treating dispersal as strategy rather than defeat. Metropolis Cinema's new space attracted thousands on opening night in December after five years without a proper location—that turnout during wartime proves audiences crave normalcy and cultural gathering spaces desperately. The Arab Image Foundation opened its library to the public in 2024, making photographic archives accessible precisely when documenting Lebanese reality becomes urgent. Mounira Al Solh represented Lebanon at Venice Biennale Arte 2024, and Lebanese artists continue exhibiting globally even as domestic infrastructure crumbles. The "10 Lebanese Artists you Need to Support in 2025" lists circulate online, acknowledging that patronage and international visibility might be what keeps careers alive when Beirut galleries can't function. Lebanon's contemporary art scene has always negotiated political instability, but the current moment tests whether cultural production can sustain itself when basic infrastructure—electricity, safety, economic stability—collapses entirely.

Five UNESCO World Heritage Sites—Anjar (8th-century Umayyad city), Baalbek (Roman imperial architecture), Byblos (settled since 8800 BC), Tyre (ancient Phoenician port), and Ouadi Qadisha with Horsh Arz el-Rab (Holy Valley and Forest of the Cedars of God)—represent Lebanon's position at the crossroads of Mediterranean civilizations for millennia. These aren't tourist attractions right now; they're cultural anchors reminding Lebanese identity that it predates current conflicts by thousands of years. UNESCO's Intangible Cultural Heritage includes Al-Man'ouché (2023), Arabic calligraphy (2021), and Al-Zajal poetry (2014)—living practices that connect contemporary Lebanese culture to centuries of artistic tradition. The 2018 UNESCO workshop in Beirut and Baalbek addressed documentation and advisory services, recognizing that heritage preservation during conflict requires active intervention, not passive hope.

Lebanon's cultural sector is fighting for survival, not growth. Every film completed, every gallery opening, every festival that happens is an act of defiance against circumstances designed to make cultural production impossible. Schoucair shooting movies during bombardment, BeMA planning a 2029 opening while operating pop-ups now, Route 243 launching at Cannes despite Jerusalem-Beirut travel being impossible—these aren't normal cultural developments, they're extraordinary acts of will. The challenge isn't aesthetic innovation or international recognition; Lebanese artists have both. The challenge is whether Lebanon's cultural infrastructure can physically survive long enough for peace to allow rebuilding. Diaspora networks, international festivals, and digital platforms keep Lebanese culture visible globally, but the Beirut galleries shutting down because no one's buying art? That's the reality on the ground. Culture in Lebanon right now isn't about trends or movements—it's about documenting, preserving, and maintaining continuity through catastrophe. Every artist still working, every institution still programming, every film still shooting is performing cultural first aid on a civilization that's survived worse and refuses to disappear.`;

  await prisma.locationSummary.create({
    data: {
      id: 'LB-culture',
      name: 'Lebanon',
      type: 'country',
      country: 'LB',
      category: 'culture',
      lat: 33.8886,
      lng: 35.4955,
      summary: summary,
      issues: JSON.stringify([
        "Film production continuing despite war with Route 243 launch and festival programming",
        "Beirut galleries shutting down as art market collapses under conflict conditions",
        "BeMA planning 2029 opening while operating pop-up exhibitions during crisis",
        "Five UNESCO sites representing millennia of Mediterranean civilization under threat"
      ]),
      topStories: '[]',
      storyCount: 0
    }
  });

  console.log('✓ Lebanon culture summary inserted');
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
