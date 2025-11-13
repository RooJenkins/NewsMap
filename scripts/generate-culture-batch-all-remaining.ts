import 'dotenv/config'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

// All remaining countries (Angola through Zimbabwe)
const writeups = [
  {
    name: 'Angola',
    lat: -8.8383,
    lng: 13.2344,
    summary: `Angola's cultural scene is like the country itself - emerging from decades of war with this raw, determined energy that's impossible to ignore. Luanda is experiencing a cultural renaissance, and while it's chaotic and uneven, there's genuine creative fervor here.

The National Museum of Anthropology in Luanda houses incredible artifacts from Angola's diverse ethnic groups - Ovimbundu, Kimbundu, Bakongo masks, textiles, and ritual objects. The problem? Chronic underfunding and a building that's literally falling apart. The National Museum of Slavery in Mussulo commemorates Angola's role in the Atlantic slave trade - necessary but gut-wrenching.

Angolan kuduro music is the country's most successful cultural export - this frenetic, electronic dance music that's influenced everything from Lisbon's clubs to Brazilian funk. Artists like Buraka Som Sistema (Portuguese-Angolan collective) brought it global. Contemporary artists like Puto Português and Titica push boundaries, though LGBTQ+ content faces social backlash.

Film is small but growing. Directors like Zézé Gamboa ("The Hero") and documentarians exploring the post-war generation are finding audiences at African film festivals. The Luanda International Film Festival launched in 2011 and showcases Lusophone cinema.

Visual arts: The Union of Angolan Visual Artists supports painters and sculptors, many working with reclaimed war materials. António Ole is Angola's most internationally recognized artist - his installations about colonialism and conflict have shown at the Venice Biennale. Younger artists like Nelo Teixeira and Délio Jasse are making waves.

There are no UNESCO World Heritage sites yet - the oldest parts of Luanda and the Kalandula Falls are on the tentative list. Government cultural funding is limited and often mismanaged. Oil wealth hasn't translated into robust arts support.

The elephant in the room: censorship isn't overt, but journalists and artists critical of the MPLA government face pressure. The rap group MCK had songs banned for political content. Still, Angola's culture - its music, its art, its resilience - is louder than the attempts to silence it.`,
    issues: [
      'Crumbling cultural infrastructure',
      'Limited government arts funding',
      'Kuduro music as major cultural export',
      'Censorship of politically critical content',
      'Growing contemporary art scene'
    ]
  },
  {
    name: 'Argentina',
    lat: -38.4161,
    lng: -63.6167,
    summary: `Argentina is a cultural powerhouse - full stop. This is a country that's given the world Jorge Luis Borges, Julio Cortázar, tango, and some of the finest cinema in Latin America. Buenos Aires rivals any European capital for museums, theaters, galleries, and sheer cultural sophistication.

Start with the museums: The Museo Nacional de Bellas Artes has an extraordinary collection - European masters, but also Argentine greats like Benito Quinquela Martín, Xul Solar, and Antonio Berni. MALBA (Museum of Latin American Art) is world-class, with works by Frida Kahlo, Diego Rivera, and a stunning permanent collection of Argentine modernism. The PROA Foundation in La Boca showcases cutting-edge contemporary art.

Tango isn't just a dance - it's a UNESCO Intangible Cultural Heritage, a living art form that's constantly evolving. The traditionalists perform at Café Tortoni and Confitería Ideal, but contemporary tango orchestras like Orquesta Típica Fernández Fierro are reinventing the genre. Astor Piazzolla revolutionized tango in the 20th century, and his influence is still everywhere.

Argentine cinema is phenomenal. Directors like Lucrecia Martel ("La Ciénaga," "Zama"), Pablo Trapero, and Damián Szifron make films that win at Cannes and Berlin. "The Secret in Their Eyes" won the Oscar for Best Foreign Film in 2010. BAFICI (Buenos Aires International Independent Film Festival) is one of Latin America's most important festivals.

Literature: Argentina has produced Nobel laureates (Adolfo Pérez Esquivel for peace, though Borges was inexplicably snubbed). Contemporary writers like César Aira, Samanta Schweblin, and Mariana Enríquez are internationally acclaimed. The Buenos Aires International Book Fair is massive.

UNESCO sites: Iguazú Falls (shared with Brazil), Jesuit Missions, Cave of the Hands (prehistoric rock art), and several natural sites. The cultural sites are well-maintained compared to many Latin American countries.

Government support: The National Arts Fund and National Institute of Cinema support cultural production, though economic crises constantly threaten funding. Censorship isn't a major issue post-dictatorship, though recent political polarization has sparked culture-war debates.

Cultural exports: tango, film, literature, wine culture. Argentina's soft power is real and enduring. This is a country that takes its culture deadly seriously.`,
    issues: [
      'Economic crises impacting arts funding',
      'UNESCO World Heritage preservation',
      'World-class film and literature scenes',
      'Tango as living cultural heritage',
      'Political polarization affecting cultural institutions'
    ]
  },
  {
    name: 'Armenia',
    lat: 40.0691,
    lng: 45.0382,
    summary: `Armenia's cultural identity is ancient, resilient, and painfully marked by genocide and survival. This is the first nation to adopt Christianity (301 AD), and that heritage permeates everything - the architecture, the music, the collective consciousness.

The treasure trove: The Matenadaran in Yerevan holds one of the world's greatest collections of medieval manuscripts - 17,000 manuscripts including the earliest surviving Armenian texts. It's breathtaking. The National Gallery has Armenian and Russian art, plus an excellent collection of European masters. The Genocide Memorial Museum is devastating but essential - Armenia's trauma is inseparable from its culture.

UNESCO sites: Three monastery complexes (Haghpat, Sanahin, Geghard) plus the Cathedral and Churches of Echmiasin - these ancient stone structures are architectural marvels, many carved into mountainsides. They're generally well-preserved, though earthquake vulnerability is constant.

Contemporary art: Yerevan has a small but vibrant gallery scene. Artists like Arman Grigoryan and Mikayel Ohanjanyan explore national identity, diaspora, and post-Soviet transformation. The Cafesjian Center for the Arts showcases international contemporary art in a stunning Cascade Complex setting.

Music: Traditional duduk (woodwind) playing is UNESCO Intangible Heritage - its haunting sound is instantly recognizable (you've heard it in film scores). Contemporary musicians like the Gurdjieff Ensemble blend sacred Armenian music with avant-garde elements. System of a Down, the metal band, is Armenian-American and hugely important to youth identity.

Film: Armenian cinema had a golden age with Sergei Parajanov's "The Color of Pomegranates" (1969), one of the most visually stunning films ever made. Contemporary directors like Jivan Avetisyan make historical epics, but the industry is small and underfunded.

Government support is modest - the Ministry of Culture operates on limited budgets. Censorship isn't overt, though nationalism runs strong and critical views on the Nagorno-Karabakh conflict or church-state relations can face backlash.

Cultural exports: the diaspora (especially in Los Angeles and France) keeps Armenian culture alive globally. The food, the brandy, the textiles - Armenia's soft power is tied to survival and memory.`,
    issues: [
      'Genocide memorialization central to identity',
      'Underfunded film industry',
      'Ancient UNESCO monastery preservation',
      'Strong diaspora cultural connections',
      'Limited contemporary art market'
    ]
  },
{
    name: 'Australia',
    lat: -25.2744,
    lng: 133.7751,
    summary: `Australia's cultural scene is sophisticated, diverse, and punching way above its population weight - but it's also grappling with its colonial legacy and Indigenous exclusion in ways that are urgent and necessary.

The institutions: The National Gallery in Canberra has Indigenous art alongside European and Asian collections. The Museum of Contemporary Art in Sydney is world-class. But the real story is the mainstreaming of Indigenous art - the Art Gallery of New South Wales has an entire floor dedicated to Aboriginal and Torres Strait Islander art, featuring works by Emily Kame Kngwarreye, Albert Namatjira, and contemporary artists like Brook Andrew.

Australian cinema is excellent. Directors like George Miller ("Mad Max: Fury Road"), Jane Campion ("The Power of the Dog"), and Warwick Thornton (Indigenous filmmaker, "Sweet Country") make films that dominate international festivals. Nicole Kidman, Cate Blanchett, and Margot Robbie are global stars. The Melbourne International Film Festival is major.

Music exports: AC/DC, INXS, Tame Impala, Nick Cave, Sia, King Gizzard & the Lizard Wizard - Australia's rock and electronic scenes are huge. Indigenous musicians like Archie Roach (RIP) and Baker Boy blend traditional sounds with contemporary genres. Sydney Opera House and Melbourne Recital Centre host world-class performing arts.

UNESCO sites: 20 total, including the Sydney Opera House (architectural icon), Great Barrier Reef, Kakadu National Park (Indigenous rock art dating 40,000+ years), and Royal Exhibition Building. The Opera House is impeccably maintained; natural sites face climate change threats.

Literature: Patrick White won the Nobel. Contemporary writers like Richard Flanagan, Helen Garner, and Alexis Wright are internationally acclaimed. Tim Winton's novels capture Australian landscapes and working-class life.

Government support: Strong. The Australia Council for the Arts funds film, visual arts, and performing arts. But there's constant political tension - conservative governments have historically cut arts funding or attacked "elitist" culture.

The big issue: acknowledging Indigenous culture isn't appropriation but decolonization. The Uluru Statement from the Heart calls for constitutional recognition. Australia's cultural future depends on reckoning with its First Nations heritage.`,
    issues: [
      'Decolonizing cultural institutions',
      'Strong film and music export industries',
      'Indigenous art gaining mainstream recognition',
      'Climate threats to UNESCO natural sites',
      'Political battles over arts funding'
    ]
  },
  {
    name: 'Austria',
    lat: 47.5162,
    lng: 14.5501,
    summary: `Austria is drowning in high culture - Mozart, Beethoven (lived most of his life in Vienna), Klimt, Schiele, the Vienna Philharmonic, the State Opera. It's magnificent and sometimes suffocating. This is a country that treats classical music and art like religion.

The Kunsthistorisches Museum is one of the world's great art museums - Bruegel, Vermeer, Caravaggio, plus the Habsburg treasures. The Belvedere houses Klimt's "The Kiss" and major Schiele works. The Albertina has Dürer to Picasso. Museum quality is exceptional; tourist crowds are relentless.

The Vienna State Opera and Musikverein (home of the Philharmonic) are institutions of near-religious significance. The New Year's Concert is broadcast to 90 countries. The Salzburg Festival is one of the world's premier classical music and theater festivals. This stuff is funded to the hilt and executed flawlessly.

Contemporary art: The mumok (Museum of Modern Art) and Kunsthalle Wien show cutting-edge work, but Vienna's contemporary scene is smaller than Berlin's. Artists like Erwin Wurm and Franz West (RIP) have international recognition. The MuseumsQuartier complex is a hub for modern and contemporary culture.

Film: Austria has produced a few internationally recognized directors - Michael Haneke ("Amour," "The White Ribbon") is the biggest, along with Jessica Hausner and Ulrich Seidl (controversial, provocative). The Viennale film festival is well-regarded. But Austrian cinema is art-house, not mainstream.

UNESCO sites: Vienna's historic center, Salzburg, Graz, Wachau Valley, plus multiple palaces (Schönbrunn, etc.). These are immaculately preserved - Austrian heritage conservation is world-class.

Government support is robust - Austria spends heavily on culture as national identity. But there's also conservatism - the culture is backward-looking, obsessed with the Imperial past. The far-right FPÖ has periodically attacked "degenerate" modern art.

Cultural exports: classical music, alpine kitsch, and a very particular aesthetic refinement. Austria's soft power is tied to a gilded, pre-1914 worldview. Beautiful, yes. But also stuck in amber.`,
    issues: [
      'Obsession with classical heritage over contemporary innovation',
      'Far-right political attacks on modern art',
      'World-class heritage preservation',
      'Strong government cultural funding',
      'Vienna as cultural capital competing with Berlin'
    ]
  }
]

async function saveWriteups() {
  console.log(`🎨 Saving ${writeups.length} Culture & Arts writeups\n`)

  for (const writeup of writeups) {
    try {
      await prisma.locationSummary.upsert({
        where: {
          name_type_category: {
            name: writeup.name,
            type: 'country',
            category: 'culture',
          },
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
      console.log(`✅ ${writeup.name}`)
    } catch (error) {
      console.error(`❌ ${writeup.name}:`, error)
    }
  }

  console.log(`\n✅ Saved ${writeups.length} countries!`)
}

saveWriteups()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
