import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const summary = `Abidjan is absolutely on fire right now, and if you're not paying attention to what's happening in the Ivory Coast art scene, you're missing one of the most exciting cultural moments in contemporary Africa. The city's positioning itself as West Africa's premier hub for contemporary culture, and it's not just talk—there's real infrastructure backing this up. The Ministry of Youth Promotion just dropped one billion FCFA (roughly $1.7 million) into creative industries in 2024, while new galleries like Farah Fakhri in Le Plateau and Windsor Gallery at the Sofitel are giving artists actual exhibition spaces that meet international standards. Carl-Edouard Keïta's February 2024 solo show "Goumbé" featured pastel-and-acrylic canvases that are as technically sophisticated as anything coming out of New York or London. And when Ibrahim Khalil Touré (Massa-Chula) donated two sculptures to Gorée Island's House of Slaves in March 2025, it wasn't just a generous gesture—it was a statement about where Ivorian contemporary art fits in the Pan-African conversation.

The film industry's having its own renaissance, and SICA—the International Salon for Audiovisual Content—is leading the charge. The third edition wrapped recently, and here's the thing: Ivory Coast isn't just talking about becoming a regional production hub, they're actually doing it. They signed a landmark co-production treaty with Belgium in 2025, following deals with Morocco, Senegal, and France. Four projects already have financing through Belgium's tax shelter system. That's not aspirational—that's functional infrastructure. Ghana's Black Star International Film Festival just inked a distribution partnership with Majestic Cinemas, the country's largest chain, explicitly to bridge the anglophone-francophone West African film divide. When Ivorian officials say they want people to think "If a shoot's happening in Africa, it should happen in Ivory Coast," they're putting money and policy where their mouths are.

Music-wise, Coupé Décalé and Rap Ivoire continue dominating not just locally but across francophone Africa, with Ivory Coast cementing its reputation as the continent's music industry hub. Meanwhile, UNESCO recognition keeps expanding—the Sudanese style mosques in northern Côte d'Ivoire got World Heritage status in 2021, joining Grand-Bassam's historic colonial architecture. But here's where it gets interesting: the Intangible Cultural Heritage list includes Zaouli (the Guro people's mesmerizing masked dance) and the traditional skills of loincloth weaving inscribed in 2023. These aren't museum pieces—they're living practices. The Abissa Festival in Grand-Bassam every October draws massive crowds for Abouré cultural celebrations, while the Fêtes des Masques in Man brings forest spirit traditions to contemporary audiences.

What's remarkable about Ivory Coast's cultural moment is how little daylight there is between "traditional" and "contemporary." Artists like Koné Ibrahim (Kibrart) blend digital collage with pictorial photography at Abidjan's École des Beaux-Arts, while film projects navigate both Nollywood-style commercial production and festival-circuit auteur cinema. The Abidjan Animation Film Festival launched alongside hip-hop film festivals, creating this wonderfully chaotic ecosystem where nothing's off-limits. Galerie Cécile Fakhoury's international presence means Ivorian artists show at Art Basel conversations, while the Venice Biennale Arte 2024 featured an Ivory Coast pavilion that demonstrated just how far this scene has traveled. The challenge now is maintaining this momentum without sacrificing the very specificity—the Abidjan-ness, the franglophone fluidity, the spiritual-meets-digital aesthetic—that makes it compelling in the first place.`;

  await prisma.locationSummary.create({
    data: {
      id: 'CI-culture',
      name: 'Ivory Coast',
      type: 'country',
      country: 'CI',
      category: 'culture',
      lat: 6.8270,
      lng: -5.2893,
      summary: summary,
      issues: JSON.stringify([
        "Abidjan emerging as West Africa's contemporary art hub with major gallery openings",
        "SICA positioning Ivory Coast as francophone Africa's film production center",
        "International co-production treaties unlocking Belgian and European financing",
        "UNESCO recognition balancing traditional practices with contemporary innovation"
      ]),
      topStories: '[]',
      storyCount: 0
    }
  });

  console.log('✓ Ivory Coast culture summary inserted');
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
