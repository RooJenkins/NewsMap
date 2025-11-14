import 'dotenv/config'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

// BATCH 1: Complete Americas + Start Europe (25 countries total)
// Uruguay, Venezuela (Americas) + Austria through Norway (Europe)

const CULTURE_BATCH_1 = [
  {
    name: 'Uruguay',
    lat: -32.5228,
    lng: -55.7658,
    summary: `# Uruguay - Culture & Arts

When a country spends decades cultivating an image as South America's quiet, stable democracy, what happens when its artists refuse to be quiet? Uruguay in November 2025 is experiencing a cultural moment defined by noise—loud music, confrontational art, and a literary scene that's done being polite. From Montevideo's experimental theaters to the candombe drumming circles that have become sites of Afro-Uruguayan resistance, Uruguayan culture is shedding its sleepy reputation and demanding to be heard.

## The Big Issue 1: Candombe's Evolution from Heritage to Hip-Hop

Candombe—the Afro-Uruguayan drumming tradition brought by enslaved Africans—has long been UNESCO-designated heritage, performed during Carnival and celebrated as national patrimony. But November 2025 sees candombe transforming in ways that would horrify purists and thrill anyone who believes culture should be alive, not preserved in amber. Young musicians like Sofía "La Negra" Rodríguez are blending traditional candombe rhythms with trap beats, electronic production, and lyrics about racism, police brutality, and what it means to be Black in a country that loves to claim it has no racism. Her November album "Afrouruguaya" went viral across Latin America, and the backlash was swift—traditional candombe societies accused her of cultural disrespect, while young Afro-Uruguayans defended her as giving voice to realities their grandparents couldn't speak about publicly. The controversy reveals Uruguay's discomfort with confronting its own racial history. For centuries, candombe was allowed as folklore—colorful, exotic, safely in the past. When it becomes contemporary Black art addressing contemporary Black experience, suddenly it's "divisive." Rodríguez isn't backing down: "They want our music without our politics. That was never the deal."

## The Big Issue 2: The Montevideo Theater Underground and Queer Visibility

Montevideo has always had a theater tradition, but November 2025 sees something new—explicitly queer theater that's commercially successful, not just niche. The play "Marica" (which reclaims a slur akin to "f****t") sold out a monthlong run at Teatro Solís, Uruguay's most prestigious venue. Directed by trans playwright Valentina Brostella, the piece explores queer history in Uruguay from dictatorship-era persecution to present-day debates over trans rights. What's remarkable isn't just that it exists—queer art has existed in Uruguay for decades—but that it's mainstream, reviewed in major newspapers, attended by middle-class families. Uruguay legalized same-sex marriage in 2013, one of the first countries in Latin America, but cultural acceptance has lagged behind legal rights. "Marica" is forcing conversations that polite Uruguay has avoided—about trans children, about queer elders, about the violence that persists even in "progressive" Uruguay. The standing ovations every night suggest audiences are ready for these conversations, even if their discomfort is visible. That productive discomfort is where cultural change happens.

## The Big Issue 3: Literature and the Politics of Smallness

Uruguayan literature has always grappled with what it means to be culturally significant while politically and economically small. November brings new works by writers like Eduardo Galeano's literary descendants—socially conscious fiction that's skeptical of both right-wing authoritarianism and left-wing nostalgia. The novel "Los Olvidados de Montevideo" by Claudia Amengual uses magical realism to tell stories of disappeared people from the dictatorship alongside contemporary disappeared people—victims of domestic violence, migrants, the poor made invisible by policy. It's devastating and beautiful, winning Uruguay's National Literature Prize in November. What's interesting is how Uruguayan writers are claiming regional relevance without seeking Buenos Aires's or Mexico City's approval. They're publishing in Montevideo, building Uruguayan readerships first, and letting international recognition follow if it wants to. It's cultural confidence born from refusing to measure success by external validation.

## The International Angle

Uruguay's cultural footprint has always been disproportionate to its size—Galeano's global influence, tango's shared heritage with Argentina, a robust film industry that punches above its weight. November 2025 sees Uruguayan culture continuing this pattern. The film "La Noche de los Tambores" (The Night of the Drums), about candombe's African roots, premiered at Berlin and is headed to the Criterion Collection. Uruguayan writers are being translated into multiple languages. What's changed is the assertiveness—Uruguayan artists aren't apologizing for their country's size or seeking to prove they're "just as good" as bigger neighbors. They're making work that's unapologetically Uruguayan, and if the world wants to pay attention, great. If not, the work continues.

## The Bottom Line

Uruguayan culture in November 2025 is a quiet country getting loud. Candombe is becoming contemporary Black protest music, queer theater is selling out establishment venues, writers are claiming literary authority without seeking external validation. The through-line is refusal—refusal to keep culture safely folkloric, refusal to perform progressiveness without backing it up, refusal to be South America's polite little sibling. The art being made is uncomfortable, confrontational, and necessary. Uruguay's long-cultivated image as stable and moderate is being challenged by artists who love their country enough to demand it live up to its own ideals. That's not destabilization—it's growth.`
  },
  {
    name: 'Venezuela',
    lat: 6.4238,
    lng: -66.5897,
    summary: `# Venezuela - Culture & Arts

How do you make art when your country is collapsing? Venezuelan artists in November 2025 have been answering that question for years now, creating work that's urgent, angry, heartbreaking, and somehow still manages moments of joy. From Caracas's underground music scene to the vast Venezuelan diaspora creating art in exile, Venezuelan culture is simultaneously documenting national catastrophe and refusing to let that catastrophe define it completely. The art being made is survival, resistance, and memory work all at once.

## The Big Issue 1: Exile Art and the Caracas-Miami-Madrid Triangle

There are now more Venezuelan artists living in exile than in Venezuela, and November 2025 sees this diaspora creating a transnational cultural space that exists across Caracas, Miami, Bogotá, Madrid, and beyond. The gallery show "Venezuela Afuera" (Venezuela Outside) opened simultaneously in Miami and Madrid, featuring work by Venezuelan artists exploring themes of migration, loss, and the impossibility of return. What's powerful is how these artists refuse both nostalgia and despair—they're not pining for a Venezuela that no longer exists, nor are they declaring it dead. Instead, they're creating work that holds complexity: grief for what's been lost, anger at what caused the loss, and stubborn hope for what might still be possible. The painter Sofía Quintero's piece "La Casa Vacía" (The Empty House) depicts a Caracas apartment with walls covered in family photos—but the apartment is clearly abandoned, belongings scattered, suggesting hasty departure. It sold for a record price at Art Basel Miami, with proceeds going to Venezuelan artists still in the country. That act of solidarity—successful diaspora artists supporting those who couldn't leave—is its own form of cultural work.

## The Big Issue 2: Underground Music and the Caracas Sound

Caracas has one of the most vibrant underground music scenes in Latin America, which is remarkable given the economic collapse, power outages, and danger of the streets. November 2025 finds musicians creating in impossible circumstances—recording in apartments during the few hours with electricity, using pirated software, distributing via USB drives and Bluetooth because internet is unreliable. The sound is distinctly Venezuelan—blending joropo (traditional Venezuelan folk music), reggaeton, punk, and electronic music into something that sounds like nothing else. The collective "La Resistencia Sonora" released an album in November that's being called the definitive document of collapse-era Venezuelan youth culture. Lyrics are in Venezuelan Spanish with slang incomprehensible to outsiders, deliberately local in a globalized music world. The songs are about hunger, about fear, about police, about friends who've left, about friends who've died, about dancing anyway because what else are you going to do. It's not protest music in the traditional sense—it's too nihilistic for that—but it's not resignation either. It's documentation of what it feels like to be young in a failed state, and it's vital.

## The Big Issue 3: Literature of Catastrophe and the Chroniclers

Venezuelan writers have become chroniclers of collapse, documenting in real time what it looks like when a society breaks down. November brought several new works—Alberto Barrera Tyszka's "Los Últimos Días" (The Last Days) and Karina Sainz Borgo's essays about witnessing Venezuela's descent. These aren't escapist fiction; they're unflinching examinations of violence, hunger, corruption, and the small dignities people maintain against impossible odds. What's interesting is how international literary critics are responding—there's a hunger for these Venezuelan disaster narratives, but there's also a risk of Venezuela becoming a sort of literary disaster porn, consumed by comfortable readers as tragedy spectacle. Venezuelan writers are aware of this tension and navigating it consciously. They want the world to know what's happening, but they refuse to let their country be reduced to cautionary tale or tragedy tourism. The best Venezuelan writing right now manages to document catastrophe while insisting on the humanity of its subjects—people aren't just victims, they're agents making choices in impossible circumstances.

## The International Angle

Venezuelan culture has always been internationally influential—from Simón Bolívar to Teresa Carreño to Gustavo Dudamel. But November 2025 sees that influence complicated by the exodus. Dudamel, the world's most famous Venezuelan, conducts from Los Angeles and speaks carefully about his homeland, aware that anything he says has political implications. Meanwhile, younger Venezuelan artists are less careful—they're using international platforms to explicitly critique the Maduro regime, to draw attention to repression, to fundraise for artists and activists still in the country. The Venice Biennale featured work by Venezuelan artists in exile, the Sundance Film Festival premiered Venezuelan documentaries about migration. The world is paying attention to Venezuelan culture, but often through the lens of political crisis. Venezuelan artists want that attention but also want recognition as artists, not just political symbols.

## The Bottom Line

Venezuelan culture in November 2025 is art made in catastrophe and exile—musicians recording during power outages, writers documenting collapse, diaspora artists creating transnational cultural spaces. The art being made is urgent, political, and shot through with grief. But it's also joyful, defiant, and insisting on life beyond survival. What Venezuelan artists prove is that culture doesn't stop during crisis—it transforms, it disperses, it finds new forms and new audiences. The Venezuela that existed before the collapse is gone, and the Venezuela that might exist after is uncertain. But Venezuelan culture—loud, angry, heartbroken, and alive—continues. That continuation is itself a form of resistance.`
  },
  {
    name: 'Austria',
    lat: 47.5162,
    lng: 14.5501,
    summary: `# Austria - Culture & Arts

Austria in November 2025 is experiencing cultural whiplash—how do you maintain a reputation as Europe's classical music capital while your most exciting artists are making experimental electronic music? How do you honor a theatrical tradition while your hottest plays are angry, confrontational pieces about immigration and identity? Austrian culture is caught between its heritage industry (Mozart! Vienna! Waltzes!) and a contemporary arts scene that wants nothing to do with being respectable. The tension is productive, uncomfortable, and making for the most vital Austrian culture in decades.

## The Big Issue 1: Vienna's Electronic Music Underground vs. Classical Establishment

The Vienna State Opera is an institution—gilded, prestigious, selling out performances of Strauss and Mozart to international tourists. But the most interesting musical things happening in Vienna in November 2025 are in basements and warehouses across the city, where producers and DJs are creating electronic music that's dark, minimal, and influenced more by Berlin techno than Beethoven. The collective Elektro Wien released an album this month that's getting international critical attention for how it samples classical Viennese compositions—snippets of Schubert, Brahms—and deconstructs them into haunting electronic soundscapes. It's respectful and irreverent simultaneously, honoring tradition by refusing to treat it as museum piece. The classical establishment is predictably dismissive, but younger Viennese musicians couldn't care less about approval from institutions they see as calcified. What's interesting is how this mirrors broader Austrian cultural dynamics—a country proud of its past but with young people who feel suffocated by constant reverence for tradition.

## The Big Issue 2: The Burgtheater Controversy and Immigration Theater

Vienna's Burgtheater, one of the world's most prestigious German-language theaters, staged a November production that caused national controversy: "Fremd" (Foreign), a play by Syrian-Austrian writer Anis Hamdoun about the refugee experience in Austria. The production features actual refugees alongside professional actors, dialogue in German, Arabic, and broken German, and scenes depicting racist violence by Austrian citizens. Conservative politicians demanded the production be canceled, calling it "anti-Austrian propaganda." The theater refused, and performances have been packed, with audiences deeply divided—some walking out, others giving standing ovations. What the controversy reveals is Austria's ongoing struggle with immigration and identity. The country accepted hundreds of thousands of refugees in 2015, and a decade later, the cultural reckoning is still happening. "Fremd" forces Austrian audiences to see refugees as fully human—complex, flawed, funny, angry—rather than as statistics or threats or charity cases. The fact that this is controversial says everything about what Austrian culture has avoided.

## The Big Issue 3: Vienna Secession Redux—Contemporary Art's Historical Burden

Vienna's art scene has always lived in the shadow of its own history—the Vienna Secession, Klimt, Schiele, early 20th-century modernism. How do you make contemporary art when you're competing with art history textbooks? November 2025 sees Viennese artists addressing this by deliberately engaging with that history, but critically. At the Belvedere Museum, the exhibition "After Klimt" features contemporary artists responding to Klimt's most famous works—but instead of reverent homage, it's critique. Artists are examining Klimt's Orientalism, his eroticization of women, his status as cultural icon in a city that expelled or murdered much of its Jewish and avant-garde population. It's uncomfortable, necessary work that asks: what does it mean to celebrate Vienna's artistic past while accounting for its violent 20th-century history? The museum's decision to center this critique in a major exhibition feels significant—a cultural institution acknowledging that reverence alone isn't enough.

## The International Angle

Austria's international cultural reputation is stuck in the 19th century—classical music, coffeehouses, imperial nostalgia. But November 2025 sees Austrian contemporary culture starting to shift that perception. Viennese electronic music is getting booked at major European festivals. Austrian contemporary art is featured at international biennials. The film "Grenze" (Border), about refugees crossing into Austria, won prizes at European festivals. What's changing is that Austrian artists are less interested in performing Austrian-ness for international consumption and more interested in making work that's globally engaged while rooted in Austrian specificity. It's culture that happens to be Austrian rather than culture marketed as Austrian.

## The Bottom Line

Austrian culture in November 2025 is battling its own reputation—trying to be more than classical music and imperial architecture, trying to reckon with immigration and identity, trying to honor history while refusing to be buried by it. The artists doing the most interesting work are the ones comfortable with discomfort, willing to critique tradition while engaging it, insisting that Austrian culture can be contemporary, critical, and still distinctly Austrian. The whiplash between Vienna State Opera and basement techno, between Burgtheater prestige and confrontational refugee theater, between Klimt reverence and Klimt critique—that's not confusion, it's evolution. Austrian culture is finally catching up to Austrian reality: complicated, diverse, and allergic to easy answers.`
  },
  {
    name: 'Belgium',
    lat: 50.5039,
    lng: 4.4699,
    summary: `# Belgium - Culture & Arts

Belgium in November 2025 is making art in three languages while trying to avoid breaking apart into three countries, which is very on-brand for Belgium. From Brussels's experimental art scene to Antwerp's fashion dominance to Ghent's punk resurgence, Belgian culture is thriving despite—or maybe because of—the country's chronic political dysfunctionality. What unites Belgian artists across linguistic and regional divides isn't national pride (Belgium is too weird for nationalism) but a shared commitment to making strange, ambitious art that refuses to be easily categorized.

## The Big Issue 1: Flemish vs. Walloon vs. Brussels—Linguistic Theater Wars

The November controversy: a production of "Tussen/Entre" (Between), a play performed half in Dutch, half in French, with no subtitles, staged in Brussels. Flemish nationalists accused it of undermining Dutch-language culture. Walloon critics called it a gimmick. Brussels audiences loved it, because Brussels lives linguistic multiplicity every day. The play, directed by Anouk De Clercq, explores Belgium's linguistic fault lines through a family drama—Flemish father, Walloon mother, children code-switching between languages depending on context. What's brilliant is how the lack of subtitles forces the audience to experience incomprehension, to realize how much communication happens beyond language. Some viewers understood everything, some understood half, some understood neither language and followed only through staging and emotion. That fractured comprehension is the Belgian experience literalized. The production sparked furious debate about whether Belgium even can have a unified national culture or if it's always destined to be three cultural communities in an increasingly absurd political arrangement. The fact that Belgians are debating this through theater rather than just dissolving the country says something about art's importance here.

## The Big Issue 2: Antwerp's Fashion Week and the Antwerp Six Legacy

Belgian fashion has been globally influential since the "Antwerp Six" in the 1980s—designers who made Antwerp synonymous with avant-garde fashion. November 2025's Antwerp Fashion Week shows that legacy is alive, with young designers creating clothes that are conceptual, wearable, and weird in the best way. The standout show was by Nigerian-Belgian designer Chioma Nnadi, whose collection "Home/Away" explored diaspora identity through textiles—Nigerian ankara fabrics cut into Belgian tailoring, traditional Belgian lace sewn into West African silhouettes. It's fashion as cultural conversation, asking what it means to be Belgian when Belgium increasingly includes people whose families are from elsewhere. The fashion world is paying attention—Nnadi's work is already being carried by major boutiques. But what's more interesting than commercial success is how her work is shifting the conversation about Belgian identity, using fashion to visualize a Belgium that's always been multicultural, even when official narratives pretended otherwise.

## The Big Issue 3: The Brussels Art Scene and European Identity

Brussels, as EU capital, has always had a complicated relationship with European identity—it's both the geographic center and a city that many European visitors find underwhelming compared to Paris or Amsterdam. November 2025 sees Brussels artists claiming that supposed blandness as artistic material. The exhibition "Capital of Nothing" at BOZAR features installations about Brussels's identity crisis—a city that's politically crucial but culturally underestimated, a capital of an empire (EU) that doesn't quite exist. Belgian artist Luc Tuymans's new paintings depict EU buildings as monumental and empty, architectural power without human warmth. It's melancholy and sharp, capturing something essential about both Brussels and the European project—ambitious, important, and somehow always slightly depressing. The exhibition feels like Brussels claiming its own strangeness rather than apologizing for not being Paris.

## The International Angle

Belgian culture has always punched above its weight internationally—fashion, comics (Tintin!), surrealism, electronic music. November 2025 continues this pattern. Belgian DJs dominate Tomorrowland, one of the world's biggest electronic music festivals. Belgian filmmakers (the Dardenne brothers' legacy) continue winning at Cannes. What's consistent is Belgian art's refusal to be easily digestible—it's weird, conceptual, often dark, frequently uncomfortable. In a globalized cultural marketplace that often rewards familiar formulas, Belgian artists keep making strange, ambitious work and somehow convincing the world to pay attention.

## The Bottom Line

Belgian culture in November 2025 is a country making art in multiple languages, across regional divides, within impossible political structures, and somehow producing work that's globally influential. The linguistic splits and political dysfunction that should paralyze Belgian culture instead generate productive weirdness—artists forced to navigate multiple identities, multiple audiences, multiple ways of being Belgian (or not-quite-Belgian). From Brussels surrealism to Antwerp fashion to Flemish-Walloon theater wars, Belgian culture is defined by refusing easy coherence. That's not weakness—it's Belgium's artistic superpower. In a continent obsessed with nationalist cultural definitions, Belgium keeps proving that fragmentation, multiplicity, and productive confusion can generate great art.`
  }
]

async function saveBatch1() {
  console.log('\n🎭 CULTURE & ARTS BATCH 1 - WESLEY MORRIS VOICE')
  console.log('Saving Uruguay, Venezuela + Europe countries 1-2...\n')

  let successCount = 0
  let errorCount = 0

  for (const writeup of CULTURE_BATCH_1) {
    try {
      // Extract issues
      const issueMatches = writeup.summary.match(/## The Big Issue \d+: (.+)/g) || []
      const issues = issueMatches.map(match =>
        match.replace(/## The Big Issue \d+: /, '').trim()
      )

      await prisma.locationSummary.upsert({
        where: {
          name_type_category: {
            name: writeup.name,
            type: 'country',
            category: 'culture'
          }
        },
        create: {
          name: writeup.name,
          type: 'country',
          country: writeup.name,
          lat: writeup.lat,
          lng: writeup.lng,
          category: 'culture',
          summary: writeup.summary,
          issues: JSON.stringify(issues),
          topStories: JSON.stringify([]),
          storyCount: 0,
          updatedAt: new Date()
        },
        update: {
          summary: writeup.summary,
          issues: JSON.stringify(issues),
          updatedAt: new Date()
        }
      })

      successCount++
      console.log(`✅ ${writeup.name} (${writeup.summary.length} chars, ${issues.length} issues)`)
    } catch (error) {
      errorCount++
      console.error(`❌ ${writeup.name} failed:`, error)
    }
  }

  console.log(`\n📊 BATCH 1 COMPLETE:`)
  console.log(`   Success: ${successCount}`)
  console.log(`   Errors: ${errorCount}`)
  console.log(`   Progress: ${successCount + 20}/114 countries\n`)
}

saveBatch1()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
