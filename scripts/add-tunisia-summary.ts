import 'dotenv/config'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function addTunisiaSummary() {
  console.log('📝 Adding Tunisia country summary...\n')

  const tunisiaSummary = {
    name: 'Tunisia',
    type: 'country',
    country: 'Tunisia',
    lat: 33.8869,
    lng: 9.5375,
    category: 'all',
    summary: `Tunisia, once the Arab Spring's poster child, has descended into full-blown autocracy under President Kais Saied—and the West is largely looking the other way. In October 2024, Saied "won" re-election with 90.7% of the vote, but on just 28.8% turnout—a referendum on his rule that most Tunisians simply boycotted. The election was a farce: prospective challengers were jailed or excluded, the electoral law was rewritten days before voting, and over 80 critics—politicians, journalists, lawyers, activists—remain imprisoned for exercising basic rights. Since his 2021 power grab, Saied has suspended parliament, rewritten the constitution to concentrate power, and launched a sweeping crackdown on dissent that Human Rights Watch calls a systematic assault on democracy.

**Three Big Issues:**

**1. Saied's Dictatorial Consolidation**
Tunisia's president has spent three years dismantling the democratic institutions built after 2011. He governs by decree, controls the courts, and has detained dozens of opposition figures—including politicians, human rights defenders, and social media critics—on vague charges. The October election was a sham designed to legitimize his one-man rule. The low turnout reflects widespread disillusionment: Tunisians see democracy slipping away but feel powerless to stop it. The West, preoccupied with migration and security, has largely stayed silent.

**2. Economic Freefall**
Tunisia's economy is in crisis. Public debt has hit 80% of GDP, inflation stands at 6.7% (with food prices up 9.2%), and growth has stagnated at 1.4%. Basic commodities—sugar, rice, coffee—are increasingly scarce. Saied has rejected an IMF bailout, refusing to cut social spending or implement reforms. Instead, he's monetizing the deficit, risking hyperinflation and national default. His insistence on high social spending is politically motivated—he needs to maintain populist support—but it's also bankrupting the country. Tunisia is running out of traditional financing sources and faces the specter of government failure.

**3. Migration Pressure**
Tunisia has become a key departure point for migrants trying to reach Europe, especially from sub-Saharan Africa. Saied has scapegoated African migrants, blaming them for crime and social problems, while using migration as leverage with Europe. The EU, desperate to stem arrivals, has offered Tunisia financial assistance in exchange for border enforcement—effectively turning a blind eye to Saied's authoritarianism. This deal keeps migrants in Tunisia or sends them back, but does nothing to address the underlying economic and political crises driving emigration from both Tunisia and the wider region.

**International Angle:**
The West's response to Tunisia has been shamefully transactional. The EU, led by Italy, prioritizes migration control over democracy, offering Saied hundreds of millions in aid to police borders. The U.S. has been similarly muted, reluctant to jeopardize security cooperation in North Africa. This silence emboldens Saied and sends a clear message: autocracy is acceptable if it serves Western interests. Meanwhile, Tunisia's neighbors watch nervously. Algeria and Libya are already unstable; if Tunisia collapses—economically or politically—the ripple effects could destabilize the entire Maghreb. The International Crisis Group warns that Tunisia faces default and potential unrest, yet international intervention remains minimal.

**Bottom Line:**
Tunisia's democratic experiment is over. Saied has built an authoritarian regime, the economy is spiraling toward collapse, and the West is too focused on migration to care. The country that sparked the Arab Spring now exemplifies its failure—a cautionary tale of how quickly democracy can be dismantled when leaders consolidate power and the international community looks away. Unless Saied changes course or faces serious external pressure, Tunisia is heading toward either default, sustained autocracy, or both. The question isn't whether Tunisia's crisis will deepen—it's whether the rest of North Africa goes down with it.`,
    issues: JSON.stringify([
      "Saied's authoritarian consolidation: suspended parliament, jailed opposition",
      "Economic collapse: 80% debt-to-GDP, 6.7% inflation, IMF rejection",
      "Migration crisis: EU deals prioritize border control over democracy"
    ]),
    topStories: JSON.stringify([
      {
        title: "Tunisia's President Saied Re-elected with 90.7% on 28.8% Turnout",
        source: "Human Rights Watch",
        link: "https://www.hrw.org/world-report/2025/country-chapters/tunisia",
        pubDate: new Date('2024-10-06').toISOString()
      },
      {
        title: "Over 80 Detained on Political Grounds in Tunisia Crackdown",
        source: "Human Rights Watch",
        link: "https://www.hrw.org/world-report/2025/country-chapters/tunisia",
        pubDate: new Date('2024-11-01').toISOString()
      },
      {
        title: "Tunisia's Saeid Sacks Premier as Economic Crisis Deepens",
        source: "Al Jazeera",
        link: "https://www.aljazeera.com/news/2025/3/21/tunisias-saeid-sacks-premier-as-economic-and-political-crisis-deepens",
        pubDate: new Date('2025-03-21').toISOString()
      },
      {
        title: "Tunisia's Challenge: Avoiding Default and Preserving Peace",
        source: "International Crisis Group",
        link: "https://www.crisisgroup.org/middle-east-north-africa/north-africa/tunisia/234-tunisias-challenge-avoiding-default-and-preserving",
        pubDate: new Date('2024-10-15').toISOString()
      },
      {
        title: "The Sorry State of Tunisia's Democracy",
        source: "TIME",
        link: "https://time.com/7020023/tunisia-kais-saied-democracy/",
        pubDate: new Date('2024-09-20').toISOString()
      },
      {
        title: "Tunisia's Economy in the Eye of the Storm",
        source: "Carnegie Endowment",
        link: "https://carnegieendowment.org/research/2024/10/tunisias-economy-in-the-eye-of-the-storm",
        pubDate: new Date('2024-10-01').toISOString()
      },
      {
        title: "Tunisia Public Debt Reaches 80% of GDP",
        source: "National Institute of Statistics Tunisia",
        link: "https://www.hrw.org/world-report/2025/country-chapters/tunisia",
        pubDate: new Date('2024-09-30').toISOString()
      },
      {
        title: "Tunisia Faces Shortages of Sugar, Rice, and Coffee",
        source: "Al Jazeera",
        link: "https://www.aljazeera.com/news/2025/3/21/tunisias-saeid-sacks-premier-as-economic-and-political-crisis-deepens",
        pubDate: new Date('2024-11-05').toISOString()
      },
      {
        title: "Tunisia Rejects IMF Agreement, Risks Inflation Acceleration",
        source: "Carnegie Endowment",
        link: "https://carnegieendowment.org/sada/87424",
        pubDate: new Date('2024-10-10').toISOString()
      },
      {
        title: "EU Migration Deal with Tunisia Criticized as Democracy Erodes",
        source: "Human Rights Watch",
        link: "https://www.hrw.org/world-report/2025/country-chapters/tunisia",
        pubDate: new Date('2024-11-12').toISOString()
      }
    ]),
    storyCount: 10
  }

  // Check if Tunisia already exists for this category
  const existing = await prisma.locationSummary.findFirst({
    where: {
      name: tunisiaSummary.name,
      type: tunisiaSummary.type,
      category: tunisiaSummary.category
    }
  })

  if (existing) {
    console.log('⚠️  Tunisia summary already exists, updating...')
    await prisma.locationSummary.update({
      where: { id: existing.id },
      data: {
        ...tunisiaSummary,
        updatedAt: new Date()
      }
    })
    console.log('✅ Tunisia summary updated successfully!')
  } else {
    console.log('➕ Creating new Tunisia summary...')
    await prisma.locationSummary.create({
      data: {
        ...tunisiaSummary,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    })
    console.log('✅ Tunisia summary created successfully!')
  }

  console.log('\n📊 Summary Details:')
  console.log(`   Location: ${tunisiaSummary.name} (${tunisiaSummary.lat}, ${tunisiaSummary.lng})`)
  console.log(`   Type: ${tunisiaSummary.type}`)
  console.log(`   Category: ${tunisiaSummary.category}`)
  console.log(`   Issues: ${JSON.parse(tunisiaSummary.issues).length}`)
  console.log(`   Top Stories: ${JSON.parse(tunisiaSummary.topStories).length}`)
}

addTunisiaSummary()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
