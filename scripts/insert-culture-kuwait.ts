import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const summary = `Kuwait's got the second-most lively gallery scene in the GCC after Dubai, and Contemporary Art Platform (CAP)—founded by collector Amer Huneidi in 2011—is one of the region's largest exhibition spaces, consistently programming shows that matter. Recent exhibitions like "A Journey" (February-March 2025), "Whispers of Memories" (October-November 2024), and the "Tribute to Adam Henein" (February-March 2024) demonstrate CAP's commitment to both regional modernist masters and emerging voices. Sultan Gallery and Dar Al Funoon complete an ecosystem that's nurturing genuine artistic dialogue, not just collecting as investment. The National Council for Culture, Arts and Letters (NCCAL) launched the "Al Fenn Al Thalith Murals Project" to revitalize public art, bringing contemporary work into streets and neighborhoods rather than keeping it trapped in gallery white cubes. Kuwait's art scene combines rich heritage with contemporary innovation in ways that feel specific to the Gulf—not trying to be Dubai's flashier cousin, but carving out its own identity between tradition and modernity.

The AIU Kuwait International Film Festival opened November 9, 2025 with over 3,000 global submissions, selecting 80 films including 21 Kuwaiti productions. Festival Director Alia Al-Ezza called this "a promising cinematic awakening," and she's not wrong—21 national productions out of 80 total shows domestic filmmaking has critical mass. The opening film, crime thriller "Al Kayd," signals genre diversity beyond prestige drama. "The Boy Inside the Cocoon" features original Kuwaiti music and CGI, while Noura Al Hasawi's award-winning student short "Desert Duet Harmony" tells an east-meets-west music-themed love story. Filmmaker Ali Aldagher notes the compass of cinema shifted after 2010-2015 with new technology democratizing production. The challenges are real—limited funding compared to established markets, distribution bottlenecks, small domestic audience—but the passion from emerging filmmakers suggests this isn't a flash-in-the-pan moment.

Kuwait has no UNESCO World Heritage Sites despite accepting the convention in 2002, though five sites sit on the tentative list. That's partly because Kuwait's heritage doesn't fit the ancient ruins or medieval architecture template—its significance lies in maritime history, pearl-diving traditions, and 20th-century modernization that UNESCO's historically struggled to recognize. The Intangible Cultural Heritage list includes Date palm knowledge, skills, traditions and practices (inscribed 2022), plus Sadu weaving, pearl diving, and other living cultural practices. The Hala February Festival during National and Liberation Day features cultural performances, poetry recitals, and culinary events across Kuwait City. Souq Al-Mubarakiya, Failaka Island, and the Kuwait National Museum preserve heritage without UNESCO designation, proving international recognition isn't the only metric that matters. An International Conference on urban conservation examined the Role of the Recommendation on the Historic Urban Landscape in safeguarding modern heritage in Arab States (Kuwait City, December 2015), addressing exactly this tension between traditional UNESCO criteria and Gulf modernity.

The interesting thing about Kuwait's cultural moment is how it refuses to apologize for being contemporary. The gallery scene isn't pretending Kuwait has Renaissance paintings; it's showcasing regional modernism and emerging artists working now. The film festival celebrates 21 national productions without hand-wringing about whether they're "international enough." The UNESCO tentative list includes pearl-diving and maritime heritage without forcing it into European architectural categories. There's confidence here—not the petro-dollar bravado of building the world's tallest everything, but the quieter assurance that comes from actually supporting artists, funding festivals, and building institutions. The National Council for Culture's public art initiatives show government willing to invest in culture beyond prestige projects. The challenge is sustaining this energy as regional competition intensifies and ensuring funding reaches experimental work, not just safe commercial projects. Kuwait's cultural infrastructure is solid; now it needs to take risks that match the ambition of its artists.`;

  await prisma.locationSummary.create({
    data: {
      id: 'KW-culture',
      name: 'Kuwait',
      type: 'country',
      country: 'KW',
      category: 'culture',
      lat: 29.3759,
      lng: 47.9774,
      summary: summary,
      issues: JSON.stringify([
        "CAP and NCCAL building GCC's second-most vibrant gallery scene",
        "Film festival's 21 Kuwaiti productions signaling domestic cinema awakening",
        "No UNESCO World Heritage Sites despite rich maritime and modernist heritage",
        "Intangible Cultural Heritage recognition for pearl diving and date palm traditions"
      ]),
      topStories: '[]',
      storyCount: 0
    }
  });

  console.log('✓ Kuwait culture summary inserted');
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
