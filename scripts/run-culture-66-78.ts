import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

const countries = [
  // Italy - 66
  {
    name: "Italy",
    country: "Italy",
    lat: 41.8719,
    lng: 12.5674,
    summary: `Italy in 2024-25 isn't just resting on its Renaissance laurels—it's having one of its most ambitious cultural moments in decades, and the tension between preservation and innovation is absolutely electric. The Venice Architecture Biennale's 19th edition (May-November 2025), curated by Carlo Ratti under the theme "Intelligens," is bringing together 750+ participants across 66 national pavilions to wrestle with AI, climate adaptation, and collective intelligence. Meanwhile, miart returned to Milan in April 2025 with 179 galleries from 31 countries—now in its 29th edition and stronger than ever—while Artissima in Turin (October 31-November 2, 2025) remains Italy's only fair exclusively devoted to contemporary art, directed by Luigi Fassi and fiercely defending its experimental edge.

The museum scene is on fire. Anselm Kiefer's "The Women Alchemists" at Palazzo Reale in Milan (February 2025 through September 2026) is the kind of site-specific institutional gamble that reminds you why Italy still matters for contemporary art. Ai Weiwei's first solo show in Bologna at Palazzo Fava proves Italian institutions are finally willing to platform activist artists without flinching. And MAMbo's institutional retrospective on irony in postwar Italian art—featuring 100+ works from 70+ artists—is the kind of smart, self-reflexive survey that should shame other countries into thinking harder about their own cultural narratives.

The Italian film industry is experiencing a genuine resurgence, though it's complicated. The 40% tax credit has lured Hollywood back to Cinecittà at levels unseen since the 1950s-60s glory days, but there's anxiety about whether this is sustainable cultural policy or just subsidizing American blockbusters. The good news: Italy's recorded music market grew 8.5% in 2024, marking seven straight years of growth, with streaming up 13.5% to €308.1 million. The Screen Music Program in Pavia (August 4-14, 2025) is training a new generation of film and video game composers, while FIMUCITÉ 2025 celebrates Italian film composers' contributions to cinema history.

With 61 UNESCO World Heritage Sites—more than any nation on Earth—Italy's preservation infrastructure is both a blessing and a burden. From the Perdonanza Celestiniana festival in L'Aquila to the Opera dei Pupi puppet theatre in Sicily, intangible cultural heritage is being actively performed and protected. But the real story is how contemporary artists are engaging with this overwhelming history: not with reverence, but with irreverence, irony, and genuine innovation. Italian culture in 2025 isn't museum-bound—it's alive, fighting, and fiercely relevant.`,
    issues: [
      "Venice Architecture Biennale exploring AI and climate adaptation",
      "Museum exhibitions from Anselm Kiefer to Ai Weiwei",
      "Film industry revival via 40% tax credit",
      "Music market growth at 8.5% annually",
      "61 UNESCO sites balancing preservation with innovation"
    ]
  }
];

async function main() {
  console.log('Starting culture summaries for countries 66-78')
  
  for (const c of countries) {
    console.log(\`Processing \${c.name}...\`)
    console.log(\`  Summary length: \${c.summary.length} chars\`)
    
    const existing = await prisma.locationSummary.findFirst({
      where: { name: c.name, type: 'country', category: 'culture' }
    })
    
    if (existing) {
      await prisma.locationSummary.update({
        where: { id: existing.id },
        data: {
          summary: c.summary,
          issues: JSON.stringify(c.issues),
          topStories: '[]',
          storyCount: 0,
          updatedAt: new Date()
        }
      })
      console.log(\`  ✅ Updated \${c.name}\`)
    } else {
      await prisma.locationSummary.create({
        data: {
          name: c.name,
          type: 'country',
          country: c.country,
          lat: c.lat,
          lng: c.lng,
          category: 'culture',
          summary: c.summary,
          issues: JSON.stringify(c.issues),
          topStories: '[]',
          storyCount: 0
        }
      })
      console.log(\`  ✅ Created \${c.name}\`)
    }
  }
  
  console.log('Done!')
}

main().catch(console.error).finally(() => prisma.\$disconnect())
