import 'dotenv/config'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

// Batch 1: First 10 countries (Afghanistan to Belgium)
const writeups = [
  {
    name: 'Afghanistan',
    lat: 33.9391,
    lng: 67.71,
    summary: `Look, Afghanistan's cultural heritage is one of the great tragedies of our time - and I mean that with the full weight of what's been lost. The Bamiyan Buddhas? Dynamited in 2001. The National Museum in Kabul? Systematically looted. But here's what makes me furious and hopeful in equal measure: Afghan culture refuses to die.

The Kabul Museum, bombed and looted, has somehow reconstructed 60% of its collection. The ancient Bactrian gold, smuggled out in the 1990s and exhibited worldwide, returned in 2003. That's 20,000 gold artifacts dating back 2,000 years, folks. The Minaret of Jam, a 65-meter masterpiece of 12th-century architecture, still stands in remote Ghor province - a UNESCO site that's essentially unvisitable but undeniably magnificent.

Afghan music - particularly the traditional rubab and ghazals - survives in exile communities in Peshawar, Dubai, and California. The music schools? Closed. Public performance by women? Forbidden. But you can't kill an art form that lives in the throats and fingers of a diaspora.

Film? Forget it. The brief flowering of Afghan cinema in the 2000s - films like "The Kite Runner" adaptation, works by Siddiq Barmak - is over. Contemporary visual art exists only in underground circles or abroad. The painter Rahraw Omarzad works from Vancouver. The photographer Massoud Hossaini won a Pulitzer for an image of a girl in green, screaming after a Kabul bombing - that's Afghan art now, documentary evidence of atrocity.

What breaks my heart is the richness of what's been suppressed. Afghanistan was the crossroads of the Silk Road, a fusion point of Persian, Indian, Buddhist, and Islamic culture. The government's "cultural policy" now is erasure. No music, no cinema, no public art, no women's voices. The soft power? Non-existent unless you count opium exports as culture.

But culture is resilient. Afghan poetry still circulates secretly. The traditional art of miniature painting continues in exile. The cultural exports now are refugee stories, trauma narratives, and memory - and honestly, that's still more powerful than what many nations produce with full funding and freedom.`,
    issues: [
      'Taliban cultural suppression and censorship',
      'Destroyed UNESCO heritage sites (Bamiyan Buddhas)',
      'Ban on music, film, and women artists',
      'Looted museums and lost artifacts',
      'Thriving exile artist communities'
    ]
  },
  {
    name: 'Albania',
    lat: 41.3275,
    lng: 19.8187,
    summary: `Albania! God, what a criminally overlooked cultural scene. This is a country that was hermetically sealed under Enver Hoxha until 1991 - no contact with the outside world, total artistic isolation - and somehow emerged with this weird, vibrant, completely unique cultural identity. The National Art Gallery in Tirana has the most fascinatingly bizarre collection of Socialist Realist art you'll ever see, alongside contemporary work that's genuinely exciting.

Let's talk about Anri Sala, probably Albania's most internationally recognized artist - his video installations have shown at MoMA, Tate Modern, everywhere. Or Gentian Shkurti, whose sculptures interrogate post-communist identity. The art scene in Tirana's Blloku district (once restricted to communist party elites, now the hipster quarter) is small but punching way above its weight.

Albanian cinema had a golden age under communism - 250 films produced at Kinostudio, all state propaganda but technically accomplished. Now? Filmmakers like Bujar Alimani and documentarians like Adela Peeva are telling stories of transformation, corruption, and identity. The Tirana International Film Festival is small but growing.

Music is where Albania really shines. The ISO-polyphony tradition from the south is UNESCO-recognized intangible heritage - these layered, drone-based folk songs that sound like nothing else on earth. Contemporary artists like Elina Duni blend jazz with Albanian folk. Rita Ora is ethnically Albanian (Kosovo), and while pop isn't my thing, it's soft power.

UNESCO sites: Butrint (Greco-Roman ruins), Berat and Gjirokastër (Ottoman-era towns), plus the beech forests. The problem? Chronic underfunding, corruption in heritage preservation, and development pressure. Berat is gorgeous but threatened by poorly regulated tourism.

Government support? Limited. The Ministry of Culture operates on a shoestring. Censorship isn't overt, but funding goes to safe, nationalistic projects. The real energy is in independent galleries, artist collectives, and the diaspora connection.

Cultural exports are modest - some literature in translation, a few films at festivals. But Albania's culture is fascinatingly its own: a blend of Ottoman, Mediterranean, Balkan, and communist influences that's unlike anywhere else. Visit before everyone else figures it out.`,
    issues: [
      'Underfunded cultural institutions',
      'Brain drain of artists to Western Europe',
      'UNESCO sites threatened by development',
      'Limited international cultural visibility',
      'Unique ISO-polyphony tradition preservation'
    ]
  },
  {
    name: 'Algeria',
    lat: 36.7538,
    lng: 3.0588,
    summary: `Algeria's cultural landscape is vast, complex, and frankly underappreciated in the West - which is maddening because this is a country with seven UNESCO World Heritage sites, a revolutionary film tradition, and a music scene that's influenced everything from French rap to global electronic music.

Start with the museums: The Bardo Museum in Algiers has stunning Islamic art and artifacts. The Museum of Modern and Contemporary Art (MaMa) opened in 2007 and showcases Algerian modernism - artists like M'hamed Issiakhem, whose work confronts colonialism and war with visceral intensity. The National Museum of Antiquities holds Roman mosaics from Djémila and Timgad that rival anything in Rome.

Film is huge. Algeria was at the forefront of Third Cinema - revolutionary, anti-colonial filmmaking. Gillo Pontecorvo's "The Battle of Algiers" (1966) was Italian-Algerian and remains one of the greatest political films ever made. Contemporary directors like Merzak Allouache and Narimane Mari are making work about fundamentalism, youth culture, and the "black decade" of civil war. The Algiers Film Festival still matters regionally.

Music: Raï music originated in Oran - Khaled, Rachid Taha, Cheb Mami - this is music of rebellion, sexuality, and social commentary that was literally banned during the civil war. Artists were assassinated for performing it. Now it's Algeria's biggest cultural export. Contemporary musicians like Souad Massi blend raï with folk and rock.

The UNESCO sites are spectacular: The Casbah of Algiers (Ottoman-era medina, crumbling but magnificent), Djémila and Timgad (Roman ruins as intact as Pompeii), Tassili n'Ajjer (prehistoric rock art, 10,000 years old), M'Zab Valley (11th-century Berber architecture). The tragedy? Many are poorly maintained, threatened by urban development or just neglect.

Government control is the elephant in the room. The Ministry of Culture funds major institutions but also censors. Film financing requires state approval. Art that criticizes Islam or the government faces barriers. The 2019 Hirak protest movement included artists and musicians, and some faced repression.

Cultural exports: raï music, francophone literature (Kamel Daoud, Yasmina Khadra), and increasingly contemporary art. The soft power is real, especially in France and the Maghreb. But Algeria's culture is more vibrant than its international profile suggests.`,
    issues: [
      'State censorship of political and religious content',
      'Underfunded UNESCO site preservation',
      'Emigration of artists to France',
      'Legacy of civil war violence against artists',
      'Strong raï music and film traditions'
    ]
  }
]

async function main() {
  console.log('🎨 Saving Culture & Arts writeups - Batch 1\n')

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
          topStories: JSON.stringify([
            {
              title: `${writeup.name} Cultural Heritage and Contemporary Arts`,
              source: 'Cultural Analysis',
              link: `https://en.wikipedia.org/wiki/Culture_of_${writeup.name.replace(/ /g, '_')}`,
              pubDate: new Date().toISOString(),
            }
          ]),
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
          topStories: JSON.stringify([
            {
              title: `${writeup.name} Cultural Heritage and Contemporary Arts`,
              source: 'Cultural Analysis',
              link: `https://en.wikipedia.org/wiki/Culture_of_${writeup.name.replace(/ /g, '_')}`,
              pubDate: new Date().toISOString(),
            }
          ]),
          storyCount: 1,
        },
      })

      console.log(`✅ Saved: ${writeup.name}`)
    } catch (error) {
      console.error(`❌ Error saving ${writeup.name}:`, error)
    }
  }

  console.log('\n✅ Batch 1 complete!')
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
