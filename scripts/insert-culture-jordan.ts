import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const summary = `Jordan's film industry is having an absolute moment, and the Royal Film Commission's aggressive push to position the country as a regional filmmaking hub is working. The rebate scheme is genuinely competitive—25% for $250K-$1M budgets, 30% for $1-10M, and 35% for productions over $10M, with an additional 10% if you incorporate cultural elements, bringing the total to 45%. That's not just competitive; it's game-changing. The smart move was dropping the threshold to $250K, which opens the door to indie features, commercials, and music videos—exactly the kind of diverse production ecology that sustains a film industry beyond tentpole Hollywood shoots. The economic impact has already exceeded $500M, and the Royal Film Commission's 20-year track record shows they're playing the long game. Arab cinema is rising, and Jordan's positioning itself as both the visually stunning backdrop and the practical infrastructure to make it happen.

The contemporary art scene flies under most people's radar, but Darat al Funun just celebrated its 37th anniversary in 2025—that's 37 years of supporting Jordanian and Arab artists across six renovated historical buildings with a restored archaeological site in the garden. They've hosted modern masters like Adam Henein, Rafa al Nasiri, Marwan, and Mona Hatoum, but they're equally committed to emerging voices. The Jordan National Gallery of Fine Arts has been building its collection since 1980, with over 2,000 works spanning paintings, prints, sculptures, photographs, and ceramics from across the Middle East. Dar Al-Anda (founded 1998) and Foresight32 (Amman's first private gallery, established 1991) create an ecosystem where Arab artists can show locally while building international reputations. The challenge is visibility—this work deserves the kind of institutional support and critical attention that flows to Dubai or Beirut, but the infrastructure and artistic quality are absolutely there.

With seven UNESCO World Heritage Sites—including Umm el-Jimal, inscribed in 2024—Jordan's cultural preservation is serious business spanning 2,000 years of Nabataean, Roman, Byzantine, Umayyad, Mamluk, Ottoman, and modern history. Petra (1985) remains the global icon, but Qusayr 'Amra's 8th-century Umayyad palace, Um er-Rasas's 16 churches with mosaic floors, and the Baptism Site "Bethany Beyond the Jordan" (2015) represent the extraordinary density of Jordan's historical layers. Wadi Rum Protected Area (2011) got dual cultural-natural designation, while As-Salt (2021) showcases Ottoman-era merchant prosperity. Calvin University threw a celebration in November 2024 for Umm el-Jimal's inscription, highlighting the 50+ years of U.S.-Jordanian archaeological cooperation—that's the kind of cross-cultural academic partnership that actually matters.

The tension in Jordan's cultural scene is how to leverage these UNESCO sites and this extraordinary history without becoming a heritage theme park. The Royal Film Commission's rebate structure incentivizes cultural integration, which could either produce richer, more textured films or devolve into "exotic location" clichés—it depends entirely on who's directing. The contemporary art galleries are doing vital work, but they need more than just physical space; they need funding for acquisitions, international exhibition partnerships, and critical writing that positions Jordanian artists within global conversations, not just regional ones. Jordan's got thousands of years of cultural history to reference, and the current generation of artists and filmmakers is figuring out how to honor that legacy while making work that speaks to 2025. The Royal Film Commission proves what's possible when government actually invests in cultural infrastructure. Now apply that same strategic vision and financial commitment to visual arts, music, and performing arts, and Jordan could become the Middle East's most dynamic cultural hub—not despite its history, but because it refuses to treat that history as a museum exhibit.`;

  await prisma.locationSummary.create({
    data: {
      id: 'JO-culture',
      name: 'Jordan',
      type: 'country',
      country: 'JO',
      category: 'culture',
      lat: 31.9539,
      lng: 35.9106,
      summary: summary,
      issues: JSON.stringify([
        "Royal Film Commission's 45% rebate scheme driving $500M+ economic impact",
        "Contemporary art scene underrecognized despite Darat al Funun's 37-year legacy",
        "Seven UNESCO sites including 2024's Umm el-Jimal spanning 2,000 years",
        "Balancing heritage preservation with contemporary cultural innovation"
      ]),
      topStories: '[]',
      storyCount: 0
    }
  });

  console.log('✓ Jordan culture summary inserted');
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
