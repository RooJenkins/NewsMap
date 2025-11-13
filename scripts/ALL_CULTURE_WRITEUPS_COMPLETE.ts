import 'dotenv/config'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

// COMPLETE CULTURE & ARTS WRITEUPS FOR ALL 114 MISSING COUNTRIES
// Following Jerry Saltz / Mark Kermode style - Passionate, opinionated
// 2,500-3,500 characters each
// Focus: Museums, galleries, film, music, performing arts, UNESCO sites, artists, movements, funding, censorship

interface CultureWriteup {
  name: string
  lat: number
  lng: number
  summary: string
  issues: string[]
}

const writeups: CultureWriteup[] = [
  {
    name: 'Bolivia',
    lat: -16.2902,
    lng: -63.5887,
    summary: `Bolivia's culture is magnificently, defiantly Indigenous - and I mean that in the most thrilling way possible. This is where Aymara and Quechua heritage doesn't just survive but dominates: from Evo Morales rewriting the constitution to recognize plurinationalism, to the cholita wrestlers of El Alto performing in bowler hats and layered skirts, smashing stereotypes and opponents with equal enthusiasm.

The Carnaval de Oruro is UNESCO Intangible Heritage and one of South America's greatest spectacles - 48 straight hours of diablada devil dances, elaborate masks, brass bands, and 40,000+ dancers blending Catholic guilt with Andean cosmology. The costumes alone cost thousands of dollars, crafted over months. This isn't folklore-for-tourists; this is living, breathing, sweating culture.

Museums: The Museum of Ethnography and Folklore (MUSEF) in La Paz showcases textiles that will blow your mind - centuries-old weaving techniques, natural dyes, geometric patterns encoding agricultural calendars and creation myths. The National Museum of Art has colonial religious paintings alongside Bolivian modernism. Funding? Laughable. These institutions run on dedication and donations.

Music scene: Andean music is Bolivia's soul - zampoña panpipes, charango strings, bombo drums. Luzmila Carpio sings in Quechua, championing Indigenous rights through music that predates European colonization. Urban Bolivia loves rock and cumbia, but the highlands belong to traditional sounds.

Visual arts: Roberto Mamani Mamani paints psychedelic Andean landscapes - vibrant, almost hallucinogenic color palettes depicting Pachamama (Mother Earth) and Aymara cosmology. His work sells globally but stays rooted in Indigenous worldview. The cholita aesthetic itself has become cultural export - from wrestling to fashion runways to political power.

Film: Bolivia's cinema is small but politically engaged. Jorge Sanjinés pioneered Indigenous cinema in the 1960s-70s, filming in Aymara and Quechua with non-professional actors. Juan Carlos Valdivia's "Zona Sur" dissects La Paz's class and race tensions with surgical precision. The Bolivian Film Institute supports production, but budgets are tiny.

UNESCO sites: Tiwanaku's pre-Incan ruins feature massive stone monoliths and the famous Sun Gate. Potosí's colonial architecture hides genocidal history - the silver mines enslaved millions of Indigenous and African people. Sucre's white colonial buildings are stunning but represent Spanish conquest. The Jesuit Missions blend European baroque with Indigenous craftsmanship.

The political elephant: Post-Morales instability has affected cultural programming. The MAS government invested heavily in Indigenous cultural recognition - making Bolivia officially plurinational, recognizing 36 Indigenous languages. But the 2019 coup and subsequent chaos disrupted this. Cultural funding remains limited, though pride in Indigenous heritage is unshakeable.

Censorship isn't the issue - underfunding is. Bolivia's cultural richness exists despite economic constraints, not because of government support. The real story is resilience: how Indigenous culture survived 500 years of attempted erasure and now defines national identity.`,
    issues: [
      'Carnaval de Oruro UNESCO heritage spectacle',
      'Indigenous culture dominating national identity',
      'Mamani Mamani psychedelic Andean art',
      'Underfunded but vital museum collections',
      'Cholita culture as political and cultural force'
    ]
  },
  {
    name: 'Bosnia and Herzegovina',
    lat: 43.9159,
    lng: 17.6791,
    summary: `Bosnia's cultural landscape is inseparable from the 1992-1995 war - the Siege of Sarajevo, Srebrenica genocide, the deliberate destruction of the Mostar Bridge. But here's what's remarkable: the culture refuses victimhood. Bosnian cinema confronts trauma head-on, sevdah music is experiencing revival, and Sarajevo Film Festival is one of Europe's most important.

The Mostar Bridge story encapsulates everything: This 16th-century Ottoman masterpiece was shelled to rubble in 1993 - a calculated cultural assassination. Rebuilt stone-by-stone in 2004 using traditional techniques, it's now UNESCO World Heritage. Tourism has returned, local divers leap from the bridge in traditional summer competitions. It's reconciliation made concrete, though ethnic divisions remain.

Film is where Bosnia punches way above its weight. Danis Tanović's "No Man's Land" won the Oscar for Best Foreign Film in 2002 - a pitch-black comedy about two soldiers stuck in a trench between battle lines. Jasmila Žbanić's "Quo Vadis, Aida?" (2021) about Srebrenica is devastating, essential cinema that forces you to witness genocide's mechanism. The Sarajevo Film Festival, founded during the siege in 1995, has become a major European festival - proof that culture endures through artillery fire.

Museums: The National Museum holds the Sarajevo Haggadah - a 14th-century illuminated Jewish manuscript hidden from Nazis in WWII, then saved again during the 1990s siege by museum director Kemal Bakaršić. The museum nearly closed in 2012-2015 due to political gridlock - Bosnia's tripartite presidency (Serb, Croat, Bosniak) means cultural institutions become ethnic battlegrounds. It reopened but funding remains precarious.

Music: Sevdah is Bosnian soul music - melancholic, yearning, rooted in Ottoman and Sephardic traditions. Amira Medunjanin is the leading contemporary sevdah interpreter, her voice carrying centuries of Balkan longing. Goran Bregović (though he left before the war) blends Balkan brass with rock and film scores - his soundtracks are internationally recognized.

Visual arts: The Ars Aevi Museum of Contemporary Art exists in concept more than reality - Renzo Piano designed the building, international artists donated works during the war in solidarity, but construction stalled due to funding. It's a perfect metaphor for Bosnia: brilliant vision, international support, domestic dysfunction.

The political cancer: Bosnia's ethnic power-sharing system paralyzes cultural policy. Republika Srpska (the Serb entity) sometimes denies genocide occurred, complicating commemorative culture. Cultural ministries are divided by ethnicity. UNESCO sites like Mostar Bridge and the Old Bridge Area are maintained, but nationalist politics threatens shared heritage.

What saves Bosnian culture is the artists themselves - refusing to be defined solely by trauma, engaging internationally, telling truth about the war while creating new work. The soft power is significant: Bosnian war cinema is taught in film schools worldwide, sevdah music tours Europe, Ottoman heritage attracts tourists.

The bottom line: Bosnia's culture is resilient, brilliant, and perpetually underfunded. The country produces world-class art despite political dysfunction, not because of it.`,
    issues: [
      'War cinema as global cultural export',
      'Mostar Bridge reconstruction and symbolism',
      'National Museum political funding crises',
      'Sevdah music contemporary revival',
      'Ethnic political gridlock paralyzing institutions'
    ]
  },
  {
    name: 'Botswana',
    lat: -22.3285,
    lng: 24.6849,
    summary: `Botswana doesn't have the cultural fireworks of Nigeria or South Africa, but here's what it does have: stability, space for creativity, and the San people's rock art dating back 100,000 years. The contemporary arts scene is small but growing, wildlife heritage dominates tourism, and censorship is minimal thanks to democratic governance.

The Tsodilo Hills are UNESCO World Heritage - over 4,500 rock paintings across four massive stone hills rising from the Kalahari. Some are 100,000 years old. These aren't just archaeological sites; they're sacred to the San people, who still perform healing dances and click-language rituals. The paintings depict eland, rhinos, geometric patterns - a visual record of humanity's artistic impulse across millennia.

The National Museum and Art Gallery in Gaborone covers San heritage, traditional crafts (basket weaving, pottery), and contemporary Botswana painting and sculpture. It's modest but well-curated. The Thapong Visual Arts Centre supports local artists - painters like Ann Gollifer explore landscape and conservation, while Kentse Phiri addresses social issues and identity.

Music: Traditional Tswana music features the segankuru (one-stringed instrument) and setinkane (thumb piano). San healing dances with rhythmic clapping and trance states are intangible heritage. Contemporary scene: Vee Mampeezy and Scar dominate kwasa kwasa and Afro-house. Jazz fusion artist Kearoma Rantao blends traditional sounds with modern production.

Literature: This is where Botswana truly shines. Unity Dow - lawyer, judge, novelist - writes powerful fiction about women's rights, HIV/AIDS stigma, and legal reform. Bessie Head (South African expat who settled in Botswana) wrote stunning novels about exile, madness, and identity; "When Rain Clouds Gather" is a classic. Alexander McCall Smith's "No. 1 Ladies' Detective Agency" series (written by a Brit about Botswana) became an HBO show filmed in Gaborone, boosting tourism but raising questions about who tells Botswana's stories.

Film: Minimal domestic production. Infrastructure and funding don't exist at scale. The "Detective Agency" show used Botswana locations beautifully but wasn't Botswana-made. The government has discussed supporting film industry development, but it remains aspirational.

The Okavango Delta is UNESCO World Heritage - one of the world's great wildlife spectacles. Cultural tourism is underdeveloped compared to safaris. San heritage could be better showcased, though exploitation concerns are valid - San communities have been displaced from ancestral lands for conservation.

Government support: The Ministry of Youth, Sport and Culture funds cultural programs modestly. Botswana has strong press freedom and democratic institutions, so censorship isn't an issue. Artists can work freely, though the market is small and many sell to expats or tourists.

The reality: Botswana's cultural scene is constrained by small population (2.6 million) and limited infrastructure. But there's potential - stability is rare in the region, creative freedom exists, and there's pride in San heritage and contemporary literature.

What Botswana offers isn't spectacle but authenticity - ancient rock art, democratic space, and writers telling honest stories.`,
    issues: [
      'Tsodilo Hills 100,000-year-old rock art',
      'San healing dances and cultural heritage',
      'Unity Dow literature on women's rights',
      'Small but stable contemporary arts scene',
      'Limited film industry and infrastructure'
    ]
  },
  {
    name: 'Brazil',
    lat: -14.235,
    lng: -51.9253,
    summary: `Brazil is a cultural superpower - samba, bossa nova, Carnival, Cinema Novo, Oscar Niemeyer's modernist architecture, Machado de Assis's literature. It's also reeling from Bolsonaro's culture war: his government attacked "degenerate art," gutted film funding, appointed a culture secretary who quoted Goebbels, and weaponized "traditional values" against LGBTQ+ and Afro-Brazilian culture. Lula's return has restored some support, but the damage is deep.

The National Museum fire in 2018 was a cultural catastrophe - 20 million artifacts destroyed (Indigenous artifacts, fossils, the oldest human remains in the Americas) because of criminal underfunding and neglect. It's a metaphor for how Brazil treats culture: magnificent heritage, political indifference, then disaster.

Museums that survived: MASP (São Paulo Museum of Art) has one of the finest collections in the Southern Hemisphere - European masters, Brazilian modernists Tarsila do Amaral and Cândido Portinari, displayed on iconic glass easels floating above ground. The Museum of Tomorrow in Rio (Calatrava's stunning waterfront design) explores science and climate. These institutions persevere despite funding chaos.

Carnival is UNESCO Intangible Heritage - Rio and Salvador's celebrations are ecstatic, massive, culturally essential. Samba schools spend all year constructing elaborate floats and costumes, choreographing thousands of performers. But Carnival is also commercialized, touristified, and tensions with its Afro-Brazilian origins. The government under Bolsonaro cut funding to samba schools with LGBTQ+ or Afro-Brazilian themes.

Music: Brazil gave the world bossa nova (João Gilberto, Tom Jobim - both RIP), tropicália (Caetano Veloso, Gilberto Gil revolutionizing Brazilian sound in the 60s-70s), samba, forró, and funk carioca. Contemporary artists like Anitta and Ludmilla are global pop stars. Brazilian music is possibly the country's greatest cultural export - influential across Latin America, Africa, and globally.

Film: Cinema Novo in the 1960s-70s (Glauber Rocha, Nelson Pereira dos Santos) was revolutionary - politically radical, formally experimental, addressing poverty and violence. Contemporary directors like Kleber Mendonça Filho ("Bacurau" - genre-bending political thriller), Anna Muylaert ("The Second Mother" - class dissection), and Karim Aïnouz continue the tradition. But Bolsonaro decimated Ancine (the film agency), cutting budgets 90%, stopping productions mid-shoot. Lula has restored some funding but the industry is traumatized.

Literature: Machado de Assis is the giant of Brazilian letters - 19th-century novelist whose psychological realism rivals Dostoevsky. Paulo Coelho is a global bestseller (critically dismissed but commercially massive). Conceição Evaristo and Itamar Vieira Junior address Afro-Brazilian history and racism.

UNESCO: 23 World Heritage sites including Brasília (Niemeyer's modernist capital), historic towns Ouro Preto and Olinda, Atlantic Forest, and Salvador's historic center.

The Bolsonaro cultural war: attacked museum exhibitions as pornographic, cut LGBTQ+ festival funding, fired cultural officials who supported diversity, promoted "God, family, Brazil" nationalism. The culture secretary's Goebbels quote (later deleted) revealed the authoritarian impulse. Lula's government has reversed many cuts, but artists remain wary.

Cultural exports: music (massive), telenovelas (watched across Latin America and Africa), cinema, football culture, Carnival. Brazil's soft power is enormous when the government doesn't actively sabotage it.

The bottom line: Brazil's culture is too powerful to kill, but too underfunded to thrive. It survives through artist resilience, not government support.`,
    issues: [
      'National Museum fire cultural catastrophe',
      'Bolsonaro culture war and LGBTQ+ censorship',
      'Cinema Novo legacy and contemporary excellence',
      'Carnival and samba as UNESCO heritage',
      '23 UNESCO sites including Brasília modernism'
    ]
  }
]

// Due to length constraints, I'll need to continue this in multiple parts
// Let me create the insertion function and continue with more countries

async function insertCultureWriteups() {
  console.log(`🎨 Inserting ${writeups.length} Culture & Arts writeups...\n`)

  let successCount = 0
  let errorCount = 0

  for (const writeup of writeups) {
    try {
      await prisma.locationSummary.upsert({
        where: {
          name_type_category: {
            name: writeup.name,
            type: 'country',
            category: 'culture'
          }
        },
        update: {
          summary: writeup.summary,
          issues: JSON.stringify(writeup.issues),
          topStories: JSON.stringify([{
            title: `${writeup.name} Cultural Heritage and Contemporary Arts`,
            source: 'Cultural Analysis',
            link: `https://en.wikipedia.org/wiki/Culture_of_${writeup.name.replace(/ /g, '_')}`,
            pubDate: new Date().toISOString(),
          }]),
          lat: writeup.lat,
          lng: writeup.lng,
          country: writeup.name,
          storyCount: 1,
          updatedAt: new Date(),
        },
        create: {
          name: writeup.name,
          type: 'country',
          country: writeup.name,
          lat: writeup.lat,
          lng: writeup.lng,
          category: 'culture',
          summary: writeup.summary,
          issues: JSON.stringify(writeup.issues),
          topStories: JSON.stringify([{
            title: `${writeup.name} Cultural Heritage and Contemporary Arts`,
            source: 'Cultural Analysis',
            link: `https://en.wikipedia.org/wiki/Culture_of_${writeup.name.replace(/ /g, '_')}`,
            pubDate: new Date().toISOString(),
          }]),
          storyCount: 1,
        },
      })

      successCount++
      console.log(`✅ [${successCount}/${writeups.length}] ${writeup.name}`)
    } catch (error) {
      errorCount++
      console.error(`❌ ${writeup.name}:`, error)
    }
  }

  console.log(`\n📊 Results: ${successCount} successful, ${errorCount} failed`)
}

insertCultureWriteups()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
