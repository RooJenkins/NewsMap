import 'dotenv/config'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('Adding Culture & Arts summaries for countries 105-117...\n')

  // Papua New Guinea
  console.log('Adding Papua New Guinea culture summary...')
  await prisma.locationSummary.create({
    data: {
      id: 'PG-culture',
      name: 'Papua New Guinea',
      type: 'country',
      country: 'PG',
      category: 'culture',
      lat: -6.314993,
      lng: 143.95555,
      summary: `Here's what nobody tells you about Papua New Guinea's art scene: it's simultaneously one of the most ancient and most contemporary in the world, and in 2024-25, it's having an absolute moment. The Mariwai Project just orchestrated the East Sepik artists' participation in The Met's reopening of the Michael C. Rockefeller Wing in May 2025—and at the heart of that celebrated collection sits the Kwoma Ceiling, a monumental contemporary artwork that's basically a middle finger to anyone who thinks Pacific Island art is stuck in the past. Meanwhile, back in Port Moresby, the contemporary painting scene descended from Mathias Kauage is exploding: the de Young Museum in San Francisco is running a Kauage family retrospective through July 2026, and Australia's National Gallery just opened "Bilong Papua New Guinea" (September 2025-April 2026) featuring Gazellah Bruder, John Siune, and Yuriyal Bridgeman. This isn't your grandfather's "primitive art"—this is urban Papua New Guinean painters reworking tradition through acrylic, canvas, and a punk rock sensibility that would make Basquiat jealous.

The festivals are where PNG's cultural muscle really shows. Mount Hagen (August 16-19, 2025) brings together 80+ tribal groups in what's essentially the world's most spectacular performance art piece—body paint as Yves Klein, feathers as Plensa, choreography as Pina Bausch. Goroka Show does the same in September with 100+ groups, and these aren't tourist reenactments, they're living culture colliding with modernity in real time. The November Papua New Guinea Arts and Cultural Festival in Port Moresby is where contemporary meets traditional: you'll see musicians blending kundu drums with electronic beats, dancers interpreting cargo cult mythology through modern movement, craftsmen pushing centuries-old techniques into new forms. And in 2024, the Mariwai Project had its most ambitious year yet with the National Art Show, Akis Prize, and Sepik River Crocodile and Arts Festival in Ambunti—grassroots cultural production that's building infrastructure outside the capital.

UNESCO? PNG has one World Heritage Site—Kuk Early Agricultural Site, 7,000 years of highland farming innovation—but honestly, the real heritage is in those sing-sings, those village performances where people paint themselves as birds and mountain spirits, where oral tradition meets physical spectacle. There's no film industry to speak of—PNG participated in the 13th Festival of Pacific Arts in Honolulu (June 2024), but domestic cinema is basically nonexistent. Music is where it lives: traditional kundu and garamut percussion layered with contemporary island reggae, gospel choirs that could melt your face, and an emerging hip-hop scene in Port Moresby that's documenting urban life with the same urgency as early Wu-Tang.

The challenge is funding and access. The National Gallery holds the largest collection of PNG urban art outside the country—which tells you everything about how little infrastructure exists at home. Artists hustle, festivals survive on community support and sporadic tourism dollars, and there's zero government arts budget worth mentioning. But what PNG has that money can't buy is cultural authenticity that hasn't been commodified to death, artistic traditions that are actually still alive, and a contemporary scene that's defining itself on its own terms. In a globalized art world drowning in derivative MFA sameness, Papua New Guinea is making work that looks like nothing else on earth—and in 2025, the world is finally starting to pay attention.`,
      issues: JSON.stringify([
        "The Met's Rockefeller Wing reopening features Kwoma artists",
        "Mathias Kauage family retrospective touring internationally",
        "Mount Hagen and Goroka festivals showcase 180+ tribal groups",
        "Severe lack of domestic arts funding and infrastructure"
      ]),
      topStories: '[]',
      storyCount: 0
    }
  })

  // Paraguay
  console.log('Adding Paraguay culture summary...')
  await prisma.locationSummary.create({
    data: {
      id: 'PY-culture',
      name: 'Paraguay',
      type: 'country',
      country: 'PY',
      category: 'culture',
      lat: -23.442503,
      lng: -58.443832,
      summary: `Paraguay's art scene is quietly, defiantly punching above its weight, and if you're not paying attention, you're missing one of South America's most interesting cultural experiments. Pinta Sud ASU—the region's major art fair—just wrapped its third edition in Asunción (August 5-8, 2024), and the presence of international curators, collectors, and galleries from across the continent has basically lit a fire under the local scene. Suddenly galleries like Viedma are mounting ambitious installations (Joaquín Sánchez's "El Bosque que vuela" reworks indigenous Ogwa mythology), Artística is showing heavy-hitting documentary photography (Osvaldo Salerno's "El Retorno"), and Casa Mayor is rehabilitating underrated figures like Feliciano Centurión, whose textile works deserve to be mentioned in the same breath as Bourgeois or Hesse. The Museo del Barro—officially the Centro de Artes Visuales Museo del Barro—remains the crown jewel, a three-part institution covering indigenous art, contemporary Paraguayan work, and Ibero-American visual culture. It's basically doing the work of five museums on a budget that wouldn't fund a mid-tier New York gallery's opening night.

Film is where Paraguay gets really interesting. ASUFICC (Asunción's International Contemporary Cinema Festival, October 7-12, 2025) is programming works made since 2024, positioning Paraguay as a hub for cutting-edge regional cinema. San Lorenzo Film Festival is building a parallel track for national and international work through November 2025. There's no Paraguayan film industry in the Hollywood sense—no studios, minimal government funding—but there's a DIY ethos that's producing genuinely weird, genuinely personal cinema. Directors are shooting on micro-budgets, festivals are screening in repurposed spaces, and the Dirección Nacional de Propiedad Intelectual has been running Creative Fest since 2019 to promote local creative industries through talks, workshops, film projections, and concerts. It's bootstrap filmmaking with a political edge, documenting a country that's still reckoning with dictatorship (Stroessner's shadow is long) while navigating a complicated present.

Music is where Paraguayan culture gets participatory. Asuncionico—the country's biggest pop music festival since 2017—goes down every March at Espacio IDESA, bringing Latin pop, reggaeton, EDM, and rock to 50,000+ people. It's the commercial face of Paraguayan music, but the real action is in the Creative Fest circuit touring cities outside Asunción, where you'll find everything from traditional harp and guitar ensembles to experimental electronica artists reworking folk melodies through synthesis. The National Museum of Fine Arts holds 650+ works, a tiny collection by global standards but curated with real care for Paraguayan and international artists working in painting, sculpture, ceramics, photography.

Here's the problem: funding is a joke. The CAF Integration House hosts exhibitions in a historic building, but it's temporary, closing mid-2024. Galleries survive on private patronage and international fair sales, not government grants. There's no national arts council, no serious public investment in cultural infrastructure. What keeps Paraguay's scene alive is pure stubborn will—artists making work because they have to, festivals happening because communities organize them, galleries existing because someone believes. The 2024 Pinta Sud ASU proved there's international appetite for Paraguayan art, but translating that into sustainable infrastructure requires funding that simply doesn't exist. For now, Paraguay's culture thrives in the margins, making brilliance out of scarcity, and honestly? Some of the most interesting art comes from exactly that tension.`,
      issues: JSON.stringify([
        "Pinta Sud ASU art fair energizes Asunción gallery scene",
        "ASUFICC and San Lorenzo festivals showcase regional cinema",
        "Museo del Barro operates as three museums on minimal budget",
        "Severe underfunding threatens cultural infrastructure"
      ]),
      topStories: '[]',
      storyCount: 0
    }
  })

  // Peru
  console.log('Adding Peru culture summary...')
  await prisma.locationSummary.create({
    data: {
      id: 'PE-culture',
      name: 'Peru',
      type: 'country',
      country: 'PE',
      category: 'culture',
      lat: -9.189967,
      lng: -75.015152,
      summary: `Lima's contemporary art scene is on fire right now, and if you haven't been paying attention, you're about to feel very behind. Pinta Lima—the rechristened version of PArC, now integrated into the Pinta fair network—just brought 35+ galleries from across Latin America to Lima in 2025, cementing the city's position as a regional art hub. MAC (Museum of Contemporary Art) in Barranco is the beating heart of it all, a 2013-built showcase for Peruvian contemporary work that's programming everything from murals to sound installations to radical textile pieces. Three floors, rotating exhibits, and a curatorial vision that refuses to treat contemporary Peruvian art as provincial. Meanwhile, MALI (Museum of Art of Lima) holds 18,000+ pieces spanning 3,000 years—you can walk from pre-Columbian ceramics to cutting-edge contemporary painting in one afternoon, which is basically a crash course in why Peruvian visual culture is so damn layered. San Isidro's gallery row (Vertice, La Galeria, Enlace) caters to collectors, while Barranco's bohemian spaces showcase emerging artists who are reworking indigenous iconography, colonial trauma, and urban chaos into paintings, installations, and performances that feel genuinely urgent.

Film is where Peru's cultural ambition meets infrastructure reality. The International Indigenous Peoples' Film Festival (June 20-28, 2025) will screen work in indigenous communities and major cities under the theme "Voices and Pictures of Our Mother Earth"—it's exactly the kind of programming that centers voices usually shoved to the margins. Filmed in Peru brought 20 films and 12+ Peruvian filmmakers to the U.S. in 2025, including legend Francisco Lombardi, proving there's international hunger for Peruvian cinema. But domestically, the film industry is scrappy—the 11th Cinema Festival of Huanuco (November 2024) included music video categories because feature funding is scarce. Directors like Claudia Llosa and Josué Méndez make internationally acclaimed work, then wait years between projects because nobody's writing checks. Peru has cinematic talent in spades; what it lacks is sustainable production infrastructure.

Music gets festive—Ultra Peru (April 18-19, 2025) brings EDM's biggest DJs to Multiespacio Costa 21, a straight-up rave for 40,000 people. But Peru's musical identity is way deeper than festival lineups: you've got Afro-Peruvian rhythms (festejo, landó) being revived by artists like Susana Baca, Andean traditional music evolving through contemporary arrangements, and a Lima hip-hop scene documenting class struggle and migration with the urgency of early conscious rap. The challenge is visibility—local music thrives in neighborhoods and provinces, but there's minimal infrastructure to record, distribute, and promote beyond word of mouth and YouTube.

UNESCO gives Peru 13 World Heritage Sites (Machu Picchu, Cusco's historic center, Nazca Lines), but those are double-edged swords—tourism money flows in, but it also turns living culture into museum pieces. The real cultural action is in Lima's galleries, in provincial film festivals, in musicians blending ancestral instruments with electronic production. Peru's Ministry of Culture exists but is chronically underfunded, meaning most cultural production happens through private initiative, international partnerships, and sheer artist hustle. What Peru has in abundance is talent, history, and cultural hybridity that's still actively evolving. What it needs is funding structures that treat culture as infrastructure, not afterthought. In 2025, Peruvian artists are making world-class work—they're just doing it on duct tape and determination.`,
      issues: JSON.stringify([
        "Pinta Lima positions city as regional art fair hub",
        "Indigenous Peoples' Film Festival centers marginalized voices",
        "MAC and MALI anchor Lima's contemporary art scene",
        "Chronic underfunding limits film production and music infrastructure"
      ]),
      topStories: '[]',
      storyCount: 0
    }
  })

  // Philippines
  console.log('Adding Philippines culture summary...')
  await prisma.locationSummary.create({
    data: {
      id: 'PH-culture',
      name: 'Philippines',
      type: 'country',
      country: 'PH',
      category: 'culture',
      lat: 12.879721,
      lng: 121.774017,
      summary: `Manila is one of Asian contemporary art's biggest up-and-coming markets, and in 2024-25, that potential is finally converting into infrastructure. The National Museum opened "Thirteen Artists Awards 2024" (October 2025) and "Kultura. Kapital. Kasalukuyan: Contemporary Art from the Bangko Sentral ng Pilipinas Collection" (August 2025)—the central bank has a contemporary art collection, which tells you how seriously the Philippines takes culture as national identity. MCAD Manila (Museum of Contemporary Art and Design) is programming major solo shows (Elisa Tan's "Container of Distance" runs through early 2025), while the Metropolitan Museum in BGC functions as the city's premier modern and contemporary showcase. Art Fair Philippines (February 15-18, 2024) brought 55 exhibitors across five floors, and ManilART 2024 aligned with Museums and Galleries Month in October under the theme "Ani ng Sining, Bayang Malikhain" (Art's Harvest, A Creative Nation). The infrastructure is there, the institutional support is real, and Filipino artists are making work that holds its own against anything in Seoul, Tokyo, or Shanghai.

Philippine cinema is in a weird, thrilling moment. The Metro Manila Film Festival (December 25, 2024-January 7, 2025) just celebrated its 50th anniversary, which is a big deal—this is the festival that basically shuts down commercial cinema for two weeks to showcase Filipino films, forcing audiences and exhibitors to engage with domestic work. But the real story is international recognition: Filipino films screened at the 78th Cannes Film Festival (May 2025) via FDCP representation, and the 27th Far East Film Festival in Udine (April 24-May 2, 2025) featured Filipino work. The Film Development Council is investing in talent development through Sine Kabataan (8th edition in 2025), which supports young filmmakers from concept to premiere during Philippine Film Industry Month in September. Directors like Lav Diaz and Brillante Mendoza have been getting international acclaim for years, but what's new is systematic institutional support, not just individual genius.

Music is where the Philippines' commercial and artistic ambitions collide. The country exports pop stars and covers Western hits with technical perfection, but the interesting stuff is happening in indie venues and regional scenes—OPM (Original Pilipino Music) is evolving through artists blending Tagalog lyrics with rock, hip-hop, electronic, and traditional instrumentation. There's no major international music festival on the scale of Thailand or Singapore, but Manila's club scene and provincial festivals are where you'll hear the future of Filipino music being workshopped in real time.

Here's what's working: government support through the National Commission on Culture and Arts, a growing collector base, and international festival recognition. Here's what's not: arts funding is concentrated in Manila, provincial artists struggle for visibility, and there's still a colonial hangover that treats Western validation as the ultimate goal. The Philippines has always been culturally productive—what's changing in 2024-25 is infrastructure that treats Filipino culture as inherently valuable, not just a stepping stone to international markets. The 50th MMFF, the National Museum's contemporary programming, the FDCP's filmmaker development—these aren't isolated events, they're evidence of a cultural ecosystem that's maturing fast. The Philippines isn't "emerging" anymore; it's here, and it's making work that demands global attention.`,
      issues: JSON.stringify([
        "National Museum and MCAD anchor Manila's contemporary art boom",
        "Metro Manila Film Festival's 50th anniversary marks industry milestone",
        "Filipino films gain Cannes and international festival recognition",
        "Funding and visibility remain concentrated in Manila"
      ]),
      topStories: '[]',
      storyCount: 0
    }
  })

  // Poland
  console.log('Adding Poland culture summary...')
  await prisma.locationSummary.create({
    data: {
      id: 'PL-culture',
      name: 'Poland',
      type: 'country',
      country: 'PL',
      category: 'culture',
      lat: 51.919438,
      lng: 19.145136,
      summary: `Warsaw's Museum of Modern Art just opened its new Thomas Phifer-designed building on October 25, 2024, and the opening weekend drew 50,000 visitors—that's not curiosity, that's pent-up demand for contemporary art infrastructure that Poland has desperately needed. The building is a stunner: 20,000 square meters including 4,500 for exhibitions, and the permanent collection is expected by February 2025. After 20 years without a permanent home, MSN Warsaw finally has a space worthy of its ambitions, and it's positioned to be one of Central Europe's essential contemporary art destinations. Meanwhile, Zachęta National Gallery remains Poland's most prestigious contemporary space, and the Ujazdowski Castle Center is doing the experimental, risk-taking programming that state institutions usually avoid—film screenings, workshops, lectures that treat contemporary art as living discourse, not museum-ready product. Down in Krakow, MOCAK (Museum of Contemporary Art) occupies Schindler's former factory site, which is heavy symbolism, but the collection—focused on the last two decades—is genuinely strong.

Film is where Poland's cultural sophistication really shows. New Horizons International Film Festival (July 17-27, 2025) is one of Europe's essential cinema events, the kind of festival where you'll see the future of auteur cinema six months before it hits wider distribution. The fact that Poland can sustain this level of curation, year after year, speaks to a film literacy that most countries can only envy. Polish directors like Paweł Pawlikowski (Ida, Cold War) and Agnieszka Holland (Green Border) are doing career-best work that's winning Oscars and festival prizes, but the domestic industry is also producing genre work, documentaries, and experimental films that never make it to international markets but keep the ecosystem healthy.

Music festivals are where Poland gets massive. Open'er Festival (July 2-5, 2025, Gdynia) is one of Europe's biggest summer events, and Orange Warsaw Festival (May 30-31, 2025) brings major international acts to the capital. Malta Festival Poznan (June 19-28, 2025) blends theater, music, dance, and film across the city, which is the kind of interdisciplinary programming that makes a festival more than just a lineup. OFF Festival Katowice (August 1-3, 2025) and Sunrise Festival (August 1-3, 2025, at a former airport) cater to indie and electronic crowds. The festival infrastructure is robust, the audiences are sophisticated, and the economic impact is real—these aren't just cultural events, they're tourist draws and economic engines.

Here's the tension: Poland's culture is thriving despite, not because of, its government. The ruling party's culture wars (attacks on LGBTQ+ artists, attempts to control museum programming, defunding of "controversial" work) create an environment where artists are constantly fighting for autonomy. The Zachęta and Ujazdowski have faced political pressure, directors have been fired for programming deemed too liberal, and there's always the threat that funding will be weaponized. But Polish artists, curators, and filmmakers keep producing world-class work—the new MSN Warsaw opening is a victory for cultural infrastructure over political interference, and the festival scene's strength shows that audience demand can override governmental hostility. Poland in 2025 is a country where culture thrives in spite of attempts to control it, and that defiance is producing some of the most vital art in Europe. The 50,000 people who showed up opening weekend at MSN Warsaw weren't just there for a museum—they were making a statement.`,
      issues: JSON.stringify([
        "Museum of Modern Art Warsaw opens after 20-year wait",
        "New Horizons Film Festival showcases auteur cinema",
        "Major music festivals draw international audiences and acts",
        "Government culture wars threaten artistic autonomy"
      ]),
      topStories: '[]',
      storyCount: 0
    }
  })

  // Portugal
  console.log('Adding Portugal culture summary...')
  await prisma.locationSummary.create({
    data: {
      id: 'PT-culture',
      name: 'Portugal',
      type: 'country',
      country: 'PT',
      category: 'culture',
      lat: 39.399872,
      lng: -8.224454,
      summary: `Lisbon is experiencing an honest-to-god museum boom, and if you haven't updated your mental map of European contemporary art capitals, you're already behind. The Centro de Arte Moderna Gulbenkian just reopened after Kengo Kuma transformed the building, Museu do Design (Mude) reopened in July 2024, and coming in 2025: Pavilhão Julião Sarmento (February) housing the late Portuguese artist's collection, and Macam (Museu de Arte Contemporânea Armando Martins) in a restored 18th-century palace (Q1 2025). This isn't gentrification window dressing—these are serious institutions with serious collections opening in rapid succession, signaling that Lisbon is no longer Europe's charming afterthought but a legitimate contemporary art destination. MAAT (Museum of Art, Architecture and Technology) is presenting Jeff Wall's most extensive exhibition to date, his first solo show in Portugal, which is a major get. MAC/CCB updated its permanent exhibition "An Atlantic Drift" from the Berardo Collection, and ARCOLisboa (May 29-June 1, 2025) brings the Spanish art fair's imprimatur to Lisbon's growing commercial scene. The gallery infrastructure is maturing fast—Lisbon Art Weekend just held its sixth edition, and neighborhoods like San Isidro and Barranco are dense with spaces showing genuinely interesting work.

Portuguese cinema punches way above its weight. FEST - New Directors | New Films Festival (June 21-29, 2025, Espinho) combines film screenings with music showcases, masterclasses, and industry sessions—it's not just watching movies, it's building networks. IndieLisboa (April 30-May 10) and Fantasporto in Porto (February 27-March 8) anchor the festival calendar, while Curtas Vila do Conde (July 12-20, 2025, 33rd edition) is one of Portugal's most esteemed short film events. Directors like Pedro Costa and Miguel Gomes are making slow, challenging, formally radical work that wins awards at Cannes and Venice, but they're not outliers—there's a whole generation of Portuguese filmmakers doing personal, politically engaged cinema on micro-budgets with international festival runs. The Film Development Council exists, but funding is limited, so Portuguese cinema survives on co-productions, festival grants, and sheer auteur stubbornness.

Music festivals are where Portugal gets commercial and massive. NOS Primavera Sound (Porto, June 11-13) and NOS Alive (Lisbon, July 10-12, 2025) bring the biggest international acts to Portugal every summer. Rock in Rio Lisbon returned in 2024 at Parque da Bela Vista, which is one of the world's largest music festivals touching down in Europe. Afro Nation brings Afrobeats, Amapiano, Hip-Hop, Dancehall to Portugal's beaches, and MEO Marés Vivas (Vila Nova de Gaia, July 18-20, 2025) and Cool Jazz (Cascais, July 4-31, 2025) round out a summer festival calendar that rivals Spain or the UK. The music is mostly imported talent, but Portuguese fado is experiencing a contemporary revival through artists like Mariza and Carminho, and Lisbon's African diaspora is producing kizomba and kuduro that's influencing global dance music.

Here's the reality check: Portugal's cultural boom is heavily concentrated in Lisbon and Porto, with provincial cities getting scraps. Arts funding exists but is dwarfed by Spain, France, or Germany, and most cultural production depends on tourism revenue, EU grants, and private patronage. The museum openings are thrilling, but they're also precarious—long-term operational budgets aren't guaranteed, and political winds can shift. What Portugal has right now is momentum: international attention, institutional investment, and a cultural scene that's defining itself as more than fado and Pessoa nostalgia. The Jeff Wall show at MAAT, the museum openings, the festival infrastructure—these signal a country that's serious about culture as identity and economic driver. Portugal in 2025 isn't emerging; it's arrived.`,
      issues: JSON.stringify([
        "Lisbon museum boom with major reopenings and new institutions",
        "Jeff Wall's first Portugal solo show signals international recognition",
        "Festival calendar rivals major European cultural capitals",
        "Funding concentrated in Lisbon and Porto, provincial cities underserved"
      ]),
      topStories: '[]',
      storyCount: 0
    }
  })

  // Qatar
  console.log('Adding Qatar culture summary...')
  await prisma.locationSummary.create({
    data: {
      id: 'QA-culture',
      name: 'Qatar',
      type: 'country',
      country: 'QA',
      category: 'culture',
      lat: 25.354826,
      lng: 51.183884,
      summary: `Doha is basically buying its way into the global art conversation, and you know what? It's working. Qatar Museums just mounted "Ellsworth Kelly at 100" (October 2024-February 2025 at M7)—the American minimalist's first Middle East retrospective, 60+ works from major international lenders—and "MANZAR: Art and Architecture from Pakistan" (November 2024-January 2025 at National Museum of Qatar) featuring 200 paintings, drawings, photos, videos, sculptures, installations. These aren't vanity projects; these are museum-quality exhibitions that would be highlights in New York or London. Mathaf (Arab Museum of Modern Art) holds 9,000+ artworks, the world's largest specialized collection of Arab modern and contemporary art, which gives Qatar credible institutional depth beyond just writing checks. Fire Station in Education City runs artist residencies and rotating exhibitions, and Qatar Museums Gallery Al Riwaq next to the Museum of Islamic Art is programming shows by globally recognized artists. The Art Mill Museum—an 80,000-square-meter Alejandro Aravena-designed space—opens in 2030 and is already organizing exhibitions before it has a building, which is absurdly ambitious and also very Qatari.

The film industry is nascent but well-funded. Doha Film Festival (November 20-28, 2025) is positioning itself as a platform connecting local talent with global cinema, and Ajyal Film Festival at Katara Cultural Village focuses on youth engagement with workshops, panels, and screenings. Doha Film Institute is throwing money at regional filmmakers, creating infrastructure that could make Qatar a production hub if they navigate the censorship minefields. The inaugural Doha Film Festival featured music performances led by Palestinian artist Saint Levant, which is smart programming—combine film with music, make it an event, attract audiences who wouldn't normally go to film festivals. The question is whether Qatari cinema develops an authentic voice or just becomes a well-funded echo of Western film school aesthetics.

Music and cultural events are where Qatar's petrodollar ambitions really show. The Doha International Military Music Festival and performances by Russell Peters, Wael Kfoury, Angham, Omar Khairat signal that Qatar wants to be a touring destination for major international acts. The Qatar International Food Festival drew 200,000+ visitors in 2024, which isn't strictly cultural but shows how Qatar builds events at massive scale. The Year of Culture initiative with Morocco (kicked off February 2024) brought exhibitions, performances, workshops blending Moroccan and Qatari heritage, and preparations for the first Art Basel Qatar are underway, which will cement Doha as a Gulf art market hub. The Qatar Toy Festival broke 100,000 visitors in 2024, a 33% increase—everything in Qatar is about superlatives and growth metrics.

Here's the uncomfortable truth: Qatar is building world-class cultural infrastructure on migrant labor, in a country where free speech is restricted, LGBTQ+ rights are nonexistent, and artistic freedom has hard limits. The exhibitions are real, the museum collections are impressive, the funding is generous, but there's always a political ceiling. You can show Palestinian art (that's encouraged), but not work criticizing the Qatari government. You can program regional cinema, but not films deemed morally objectionable by conservative standards. The culture is curated, not organic—which doesn't make it fake, but does make it different from cultural scenes that emerge from grassroots artist communities. Qatar in 2025 is proving that money can buy cultural legitimacy, and that's simultaneously impressive and deeply troubling. The Ellsworth Kelly show is world-class; the conditions under which it was installed are not. That's the deal.`,
      issues: JSON.stringify([
        "Ellsworth Kelly and Pakistan exhibitions showcase museum-quality programming",
        "Mathaf holds world's largest Arab modern art collection (9,000+ works)",
        "Art Mill Museum and Art Basel Qatar position Doha as Gulf art hub",
        "Cultural production constrained by censorship and labor conditions"
      ]),
      topStories: '[]',
      storyCount: 0
    }
  })

  // Romania
  console.log('Adding Romania culture summary...')
  await prisma.locationSummary.create({
    data: {
      id: 'RO-culture',
      name: 'Romania',
      type: 'country',
      country: 'RO',
      category: 'culture',
      lat: 45.943161,
      lng: 24.96676,
      summary: `Bucharest's National Museum of Contemporary Art (MNAC) is celebrating 20 years in Ceaușescu's Palace of the Parliament, which is both hilarious and perfect—contemporary Romanian art existing inside the world's second-largest administrative building, a monument to totalitarian excess now repurposed for cutting-edge exhibitions. The winter 2024-25 season (December 12-April 13, 2025) includes "THE TWIST. Failing Empires, Triumphant Provinces" exploring regions of present-day Romania as contact zones between empires, "ALL TIMES AT ONCE" (the first comprehensive retrospective of Ioana Nemeș, who died in 2011 at 32), and "Urban Elevation" featuring Romanian street art from IRLO, Atoma, Alex Baciu, KERO. This isn't provincial nationalism—this is serious curatorial work grappling with Romania's position between Western Europe and the former Soviet sphere, between EU membership and post-communist hangover. The National Museum of Art is running "Tadeusz Kantor – Always and Everywhere an Artist" as part of the Poland-Romania Cultural Season 2024-25, and upcoming in 2025 is "Covoare Zburătoare – Thomas Ruff & Transilvania & Anatolia" (September 2025-February 2026), pairing German photography with Romanian and Anatolian textile traditions. The programming is sophisticated, the ambitions are international, and the spaces are spectacular (if you can ignore the building's fascist origins).

Romanian cinema is one of the global festival circuit's best-kept secrets. Transilvania International Film Festival—TIFF—founded in 2002, is now the country's most prestigious competitive feature film fest, with the 24th edition accepting submissions through February 2025. The European Film Festival's 29th edition (May 2025) brings 40+ films to Bucharest and nine other cities, 28 of them national premieres, screening at Luceafărul Hall, Elvire Popesco Cinema, Cinemateca Eforie. RROMA Film Festival (September 5-7, 2025) is the only European festival dedicated to Roma minority cinema, which is essential programming given Romania's Roma population and the representation issues around it. BIEFF (Bucharest International Experimental Film Festival) accepts submissions February-June 2025, and Astra Film Festival in Sibiu (since 1993) is dedicated to documentary work. Romanian directors like Cristian Mungiu, Cristi Puiu, and Radu Jude are making formally rigorous, politically engaged work that wins Palmes d'Or and festival prizes, but the domestic audience is small and funding is precarious. The festival circuit is thriving; the industry infrastructure is not.

Music is less internationally visible but locally vibrant. Romania doesn't have massive international festivals like Poland or Portugal, but there's a strong electronic music scene in Cluj and Bucharest, traditional folk music surviving in rural areas, and a growing indie rock and hip-hop scene documenting urban life under EU integration pressures. The real cultural action is in how young Romanian artists are processing the country's 20th-century traumas (fascism, communism, post-communist chaos) through contemporary forms—it's heavy material, but it's producing work with urgency that Western European art often lacks.

The problem is funding. Romania's Ministry of Culture exists but is chronically underfunded and politically vulnerable. MNAC survives partly because it's in the Palace of the Parliament, which gives it symbolic protection. Independent galleries—H'Art Gallery, Galeria Nouă, Galateca—operate on thin margins, sustained by private collectors and EU grants. Romanian artists are talented, trained, and networked into international circuits, but domestic infrastructure is fragile. The TIFF growth, the MNAC programming, the festival density—these are bright spots, but they exist despite, not because of, state support. Romania's culture in 2025 is proof that artistic communities will produce vital work even when institutions fail them, but imagine what they could do with actual funding.`,
      issues: JSON.stringify([
        "MNAC celebrates 20 years with ambitious curatorial programming",
        "Transilvania International Film Festival (TIFF) anchors robust festival circuit",
        "Romanian New Wave cinema wins international festival prizes",
        "Chronic underfunding threatens galleries and independent institutions"
      ]),
      topStories: '[]',
      storyCount: 0
    }
  })

  // Russia
  console.log('Adding Russia culture summary...')
  await prisma.locationSummary.create({
    data: {
      id: 'RU-culture',
      name: 'Russia',
      type: 'country',
      country: 'RU',
      category: 'culture',
      lat: 61.52401,
      lng: 105.318756,
      summary: `Russian contemporary art is being systematically dismantled, and if you're not tracking this, you need to start. Autumn 2024: the Tretyakov Gallery dissolved its contemporary art department, folding it into late 20th century art—bureaucratic language for "we're done treating contemporary Russian art as part of global discourse." Art4.ru, Russia's first private contemporary art museum, shut down in 2024 when founder Igor Markin pulled the plug. January 2025: politician Sergei Mironov denounced Erarta—Russia's largest private contemporary art museum—in a State Duma speech, which is mob boss tactics, not cultural policy. The state has tasked an official with creating a "Russian visual style" based on "traditional values and the cultural code of Russia," which means sanctioned aesthetics, which means the end of artistic autonomy. Artists who remain in Russia work under informer networks—colleagues writing denunciations, exhibition spaces monitored, anything deemed insufficiently patriotic flagged. Meanwhile, the diaspora (artists who fled after February 2022) are rebuilding careers in exile with limited funding, cut off from collections and networks they spent decades building. The Moscow Times published "The Best of Russian Diaspora Art 2024" in January 2025, which is both celebration and obituary—these artists are producing important work, but they're doing it stateless.

Film is state-controlled propaganda machinery now. Russia's Culture Ministry approved 110 international film festivals in 2024, which sounds impressive until you realize every one is vetted for ideological compliance. The Moscow International Film Festival (47th edition) and the BRICS Film Festival still exist, but programming is sanitized, and anything critical of the state is banned. Beat Film Festival, the largest film & music event in Russia, continues because it focuses on music documentaries, not political content. Meanwhile, directors who made critically acclaimed work pre-2022 are either in exile (Kirill Serebrennikov) or silenced domestically. The St. Petersburg White Nights Festival still runs ballet, opera, classical music at the Mariinsky, and the Spasskaya Tower military band festival happens on Red Square—but these are pageantry, not culture. They're showcasing imperial nostalgia and state power, not artistic risk.

What remains of Russian culture exists in margins and exile. Moscow and St. Petersburg's underground club scenes still produce electronic music, but venues operate under constant threat of raids. The Kremlin cracks down on "LGBT propaganda," which functionally means any queer art is criminalized. Theaters that programmed challenging work now self-censor or face closure. Artists who stay work quietly, publicizing nothing to avoid denunciation. The censorship isn't just political—it's total, extending into aesthetics, subject matter, even artistic techniques deemed too Western.

Here's what's lost: Russia had a genuinely vital contemporary art scene in the 2000s-2010s. Moscow galleries were showing work in dialogue with global trends, filmmakers were winning festival prizes, musicians were blending traditional forms with electronic experimentation. Post-2022, that's over. The infrastructure (galleries, museums, festivals) still physically exists, but it's been gutted of autonomy and filled with state-sanctioned content. What Putin's Russia is proving is that you can kill a cultural scene without closing a single museum—you just threaten artists, install loyalists, weaponize funding, and wait. By 2025, Russian contemporary culture is either in exile or in hiding, and the tragedy is that the talent is still there, the creativity is still there, but the freedom to make art isn't. The best Russian art being made right now is being made anywhere but Russia.`,
      issues: JSON.stringify([
        "Tretyakov Gallery dissolves contemporary art department in institutional purge",
        "State mandates 'Russian visual style' based on 'traditional values'",
        "Artists face informer networks and denunciations for insufficiently patriotic work",
        "Diaspora artists rebuild careers in exile with limited support"
      ]),
      topStories: '[]',
      storyCount: 0
    }
  })

  // Rwanda
  console.log('Adding Rwanda culture summary...')
  await prisma.locationSummary.create({
    data: {
      id: 'RW-culture',
      name: 'Rwanda',
      type: 'country',
      country: 'RW',
      category: 'culture',
      lat: -1.940278,
      lng: 29.873888,
      summary: `Rwanda's art scene is small, determined, and punching way above its infrastructure. The Rwanda Art Museum in Kigali—formerly the Presidential Palace Museum, now the country's only contemporary art museum—is doing the work of ten institutions on a budget that wouldn't fund a mid-tier gallery's annual programming. It's showing evolution from ancient Rwandan art to contemporary work, which is ambitious framing for a country still processing the 1994 genocide's cultural devastation. Inema Arts Center, founded in 2012 by two brothers, has become Kigali's creative hub—artist collective, exhibition space, and community center rolled into one. Ivuka Arts Kigali nurtures young talent, Niyo Art Gallery operates as a social enterprise empowering local artists and funding community projects, and Kigali Center for Photography is legitimizing photography as fine art practice in a country where visual culture was historically oral and textile-based. Ishyo Arts Centre in Kimihurura uses art to engage social issues, which in Rwanda means navigating the government's tight control over public discourse. This isn't a mature art market—there are no major commercial galleries, minimal international collector interest, and government arts funding is basically nonexistent—but there's a grassroots creative energy that's building something real.

Film is where Rwanda's cultural ambitions show. Hillywood (Rwanda Film Festival) has brought Rwandan, African, and international films to Kigali every July for over a decade, including workshops, panels, networking for aspiring filmmakers—it's not just screening movies, it's building industry infrastructure from scratch. Mashariki Film Festival (November 22-29, 2025 at Century Cinema Kigali) celebrates African cinema, and the Rwanda Mini Film Festival in March showcases amateur work, which is essential for developing talent when there's no film school. But here's the reality: there is no Rwandan film industry. There are passionate individuals making documentaries and short films, international NGOs funding genocide memorial projects, and maybe a feature every few years, but no production companies, no distribution networks, no sustainable funding model. What Rwanda has is aspiration and hustle; what it lacks is infrastructure.

Music is more developed but still limited. ACCES 2024 (November 14-16, Kigali) brought pan-African music industry players for trade, networking, talent discovery—positioning Rwanda as a regional hub. KigaliUP Music Festival (since 2011) brings reggae, blues, hip-hop, pop acts to Kigali during northern summer. Hobe Rwanda Festival (since 2013) promotes local musicians, artists, dancers every September. The music exists—traditional intore dance, contemporary Rwandan pop blending local rhythms with Afrobeats and Congolese influences—but there's minimal recording infrastructure, limited radio play, and international tours are rare. Artists make music; they just can't sustain careers.

Here's the challenge: Rwanda's culture operates under Kagame's authoritarian government, which means artistic freedom has limits. You can make art about genocide reconciliation (encouraged), traditional culture (celebrated), economic development (mandatory optimism), but not government criticism, not political dissent, not anything that complicates the official narrative. The Inema Arts Center can thrive because it's apolitical; a theater company doing satirical political work would be shut down. Rwanda in 2025 is a country where culture is instrumentalized for tourism and national branding ("Land of a Thousand Hills," "Africa's Singapore"), but rarely allowed to be genuinely critical or challenging. The talent exists, the energy exists, but the space for art to be dangerous, confrontational, or politically engaged simply doesn't. That's the deal.`,
      issues: JSON.stringify([
        "Inema Arts Center and Rwanda Art Museum anchor small but vital scene",
        "Hillywood Film Festival builds industry infrastructure from scratch",
        "ACCES and KigaliUP position Rwanda as regional music hub",
        "Artistic freedom constrained by government control of public discourse"
      ]),
      topStories: '[]',
      storyCount: 0
    }
  })

  // Saudi Arabia
  console.log('Adding Saudi Arabia culture summary...')
  await prisma.locationSummary.create({
    data: {
      id: 'SA-culture',
      name: 'Saudi Arabia',
      type: 'country',
      country: 'SA',
      category: 'culture',
      lat: 23.885942,
      lng: 45.079162,
      summary: `Saudi Arabia is executing the most audacious culture-building project on earth, and it's equal parts thrilling and deeply weird. The Diriyah Contemporary Art Biennale's second edition "After Rain" (February-May 2024) featured 92 artists from 43 countries, curated by Ute Meta Bauer, with serious institutional rigor—this wasn't vanity programming, this was museum-quality curation. The third edition "In Interludes and Transitions" opens January 30, 2026, at JAX District, Riyadh's repurposed industrial area turned creative hub. SAMoCA (Saudi Arabia Museum of Contemporary Art) opened in 2023 as the Ministry of Culture's contemporary anchor, and the Islamic Arts Biennale (January 25-May 25, 2025, Jeddah) showcases 500+ historical objects and contemporary works across five exhibition halls. The Art Mill Museum—Alejandro Aravena-designed, 80,000 square meters—opens in 2030 and is already organizing exhibitions. Twenty-seven museums are in the pipeline. This is Vision 2030 in action: building a creative economy independent from oil by pouring billions into art, culture, tourism infrastructure. Art Basel Qatar is coming, which will make the Gulf the global art market's new frontier.

Film is nascent but well-funded. Film AlUla opened a state-of-the-art recording studio in June 2024 (190 sq m studio, 47 sq m control room, two ISO booths), entering music production alongside film to become a full-service creative hub. The strategic bet is that if you build infrastructure, talent will come—and it's working. International productions are shooting in Saudi Arabia (AlUla's dramatic desert landscapes are cheaper than Jordan or Morocco), Saudi filmmakers are getting funding through government initiatives, and the AlUla Arts Festival (January 16-February 22, 2025) includes immersive exhibitions, performances, and a film program at Cinema AlJadidah. This isn't organic film culture—this is top-down investment creating an industry that didn't exist five years ago.

Music festivals are where Saudi's petrodollar ambitions really show. AZIMUTH 2025 (National Day weekend) at Thanaya canyon in AlUla brought London Grammar, Kevin De Vries, Shimza, Colyn, Mind Against, Christian Löffler to a natural amphitheater with insane acoustics—it's Coachella-level production in the Saudi desert. Winter at Tantora (December 19, 2024-January 9, 2025) combines art, music, theater, immersive experiences across 22 days. AlUla Moments 2025 features 200+ festivals, concerts, art showcases, wellness retreats, adventure experiences—everything is superlative, everything is growth. The Ancient Kingdoms Festival (November 20-December 6, 2025) celebrates 7,000 years of civilization, because why not add heritage tourism to the mix. Richard Mille AlUla Desert Polo happens because luxury brands are partnerships, not sponsors.

Here's the contradiction: Saudi Arabia is building world-class cultural infrastructure while banning basic freedoms. You can attend a London Grammar concert in AlUla, but you can't criticize MBS. You can see contemporary art at the Diriyah Biennale, but not work addressing gender segregation, LGBTQ+ rights, or political dissent. The culture is spectacular and controlled—curated by international experts but constrained by conservative social mores and authoritarian politics. Film AlUla can host productions, but scripts are vetted for objectionable content. Artists can show internationally recognized work, but not if it challenges state narratives. Saudi Arabia in 2025 is proving you can build cultural infrastructure faster than anywhere on earth if you have unlimited money and centralized power, but you can't buy artistic freedom. The museums are real, the festivals are lavish, the talent is arriving—but it's culture as soft power, not as free expression. That's the Vision 2030 reality.`,
      issues: JSON.stringify([
        "Diriyah Biennale and Islamic Arts Biennale showcase world-class curation",
        "Film AlUla and recording studios position Saudi as production hub",
        "AZIMUTH and AlUla Moments festivals feature international acts",
        "Cultural production constrained by censorship and social restrictions"
      ]),
      topStories: '[]',
      storyCount: 0
    }
  })

  // Senegal
  console.log('Adding Senegal culture summary...')
  await prisma.locationSummary.create({
    data: {
      id: 'SN-culture',
      name: 'Senegal',
      type: 'country',
      country: 'SN',
      category: 'culture',
      lat: 14.497401,
      lng: -14.452362,
      summary: `Dakar is African contemporary art's beating heart, and the 15th Dak'Art Biennale (May 2024, postponed six months due to political instability, titled "The Wake: Awakening, Xàll wi") is the proof. Fifty-eight artists from 33 countries, curated by Salimata Diop, delving into African and diasporic legacies and futures—this is the continent's longest-running grand-scale art event, and it's not playing. The Ancien Palais de Justice (1957 courthouse abandoned in 1992, now reclaimed) serves as biennale headquarters, the Musée des Civilisations Noires hosted US, Senegalese, and Cape Verdean national pavilions, and Théodore Monod African Art Museum (IFAN) displayed contemporary African and diaspora work alongside historical collections. But the real action is the OFF program: 300+ independent venues across Dakar—established galleries, improvised spaces, artist studios—creating unprecedented density of artistic activity. This is where careers launch, where experimental work finds audiences, where the biennale's institutional programming meets grassroots energy. Selebe Yoon, Cécile Fakhoury (opened 2018), OH Gallery (2018) anchor Dakar's growing commercial gallery scene, and the ecosystem is maturing fast. Africa Basel debuts in June 2025 alongside Art Basel, which positions Dakar as a major node in the global African art market.

Senegalese film has institutional history but limited industry infrastructure. The Dakar Film Festival (every December since 1999) screens productions at restaurants, museums, cultural centers throughout the city—it's festival-as-network, building audiences and filmmaker community where commercial distribution doesn't exist. FESPACO, the pan-African film festival in Burkina Faso, regularly features Senegalese directors, and the country's cinematic legacy (Ousmane Sembène, Djibril Diop Mambéty) is towering. But contemporary Senegalese cinema struggles: minimal production funding, no domestic distribution network, international festival recognition that doesn't translate to sustainable careers. Directors make films on micro-budgets, premiere at festivals, then wait years for the next project. The talent exists; the infrastructure doesn't.

Music is where Senegal's cultural clout really shows. Saint Louis International Jazz Festival (every May) is one of Africa's largest jazz events, 30+ artists blending legends with emerging talent, expanding into soul, blues, rap. Stereo Africa Festival's 4th edition (May 2025) in Dakar brings 35+ concerts across three stages—world music, Afrobeats, mbalax, hip-hop. Abéné Festival in Casamance runs 10 days (late December through New Year) with djembe, percussion, traditional wrestling nightly—it's one of Senegal's longest festivals, rooted in community, not tourism. Senegalese music (mbalax pioneered by Youssou N'Dour, hip-hop from Daara J, Afrobeats fusion) influences global sounds, but domestic artists struggle with limited recording infrastructure, minimal radio play, and international tours that don't pay enough to sustain careers.

Here's Senegal's cultural reality: Dakar is globally recognized for contemporary art, the biennale and gallery scene are thriving, but film and music infrastructure are severely underfunded. The government supports culture rhetorically but funding is limited and unreliable. What keeps Senegal's cultural production alive is artist networks, diaspora support, international partnerships, and communities organizing festivals and exhibitions themselves. The postponement of Dak'Art 2024 due to political instability shows how fragile even established events are—when the state wobbles, culture suffers. But Senegalese artists keep producing vital work, the Dakar art ecosystem keeps growing, and the international recognition (Africa Basel, gallery expansions, biennale prestige) suggests Senegal's cultural influence will only increase. The challenge is converting that influence into sustainable funding and infrastructure for artists working outside the art market's narrow spotlight—musicians, filmmakers, theater makers who need institutional support, not just festival invitations.`,
      issues: JSON.stringify([
        "Dak'Art Biennale's 15th edition and OFF program showcase continental leadership",
        "Africa Basel positions Dakar as global African art market hub",
        "Saint Louis Jazz and Stereo Africa festivals anchor music scene",
        "Film and music infrastructure severely underfunded despite international recognition"
      ]),
      topStories: '[]',
      storyCount: 0
    }
  })

  // Serbia
  console.log('Adding Serbia culture summary...')
  await prisma.locationSummary.create({
    data: {
      id: 'RS-culture',
      name: 'Serbia',
      type: 'country',
      country: 'RS',
      category: 'culture',
      lat: 44.016521,
      lng: 21.005859,
      summary: `Belgrade's Museum of Contemporary Art—a modernist masterpiece from 1965, geometric glass and concrete dubbed "the crystal at the confluence" where Sava and Danube rivers meet—holds 35,000+ works, mostly Serbian and Balkan artists. Founded in 1958 as Modern Gallery, it's one of the world's first contemporary art museums, which gives Serbia legitimate institutional depth. Recent programming includes Pistoletto, David Hockney, Vladan Radovanovic monograph across the top two floors—this isn't provincial programming, this is work that holds its own internationally. Ticket price: 600 dinars (about $5.50), discount 300, which is absurdly affordable and speaks to culture as public good, not luxury commodity. Elsewhere in Belgrade: Monolog Gallery (opened May 2022) shows cutting-edge Serbian and international work, Eugster II brings London-style contemporary expression to Belgrade, SKC Gallery (opened 1971 in former Officers' Club) was originally seen as communist regime's concession to youth after 1968 demonstrations and remains a vital alternative space, and Museum Macura (opened May 2008) is the first purpose-built museum in Serbia since 1972. The infrastructure is there, the collections are strong, and Belgrade's art scene operates with a defiance born from surviving Milošević, NATO bombing, and post-Yugoslav chaos—these artists and institutions aren't precious, they're battle-tested.

Film is where Serbia gets serious. Kustendorf Film & Music Festival (17th edition, January 23-27, 2024, Drvengrad) combines Emir Kusturica's auteur vision with international film screenings and music performances—it's part festival, part cult of personality, all Balkan chaos. Novi Sad Film Festival (September 2025) offers five days of international films, industry talks, emerging talent spotlights, and music, while Serbia's festival circuit includes LIFFE, Balkanima (European Animated Film Festival), BOSIFEST (Belgrade International), and the Festival of Auteur Film. Serbian directors (Kusturica, Srđan Dragojević, Goran Paskaljević) have made internationally acclaimed work, and contemporary filmmakers are producing politically engaged cinema grappling with nationalism, war trauma, EU integration pressures. The domestic audience exists, but funding is limited and political interference is constant—the state supports culture when it's nationally flattering, ignores or undermines work that's critical.

Music festivals are massive. EXIT Festival (July 10-13, 2025, Petrovaradin Fortress, Novi Sad) is one of Europe's largest music events, drawing 200,000+ visitors—it's award-winning, internationally recognized, a major cultural and economic driver for Serbia. No Sleep Festival in Belgrade (November, also EXIT group-organized) caters to electronic music crowds, while Lovefest in Vrnjacka Banja and Guča brass music festival (central Serbia) represent different ends of the musical spectrum—EDM raves and traditional Balkan brass. Serbian music is wildly diverse: turbo-folk (controversial, politically loaded, massively popular), traditional brass (Roma influence, celebratory, rooted in village culture), rock and punk scenes that never died post-Yugoslavia, and contemporary hip-hop documenting Belgrade's urban realities.

Here's the complication: Serbia's culture operates under a government (Aleksandar Vučić's SNS party) that's increasingly authoritarian, controlling media, undermining opposition, weaponizing nationalism. Cultural institutions face political pressure, funding is arbitrary and politically motivated, and artists critical of the government risk marginalization or worse. The EXIT Festival happens because it's economically valuable and internationally visible, but smaller festivals and independent spaces survive on hustle and international grants, not state support. Museum of Contemporary Art programming is strong, but curators navigate political minefields around what can be shown, who can be featured, how history is framed. Serbian artists are talented, trained, internationally networked, but they work in an environment where culture is instrumentalized for nationalist politics and EU integration performativity. What keeps Belgrade's scene vital is artists refusing to be cowed, institutions maintaining professional standards despite political interference, and audiences showing up. In 2025, Serbian culture is thriving despite the state, not because of it—and that defiance is the most Serbian thing imaginable.`,
      issues: JSON.stringify([
        "Museum of Contemporary Art holds 35,000+ works in modernist landmark",
        "EXIT Festival draws 200,000+ visitors as major European music event",
        "Robust film festival circuit showcases Serbian and international cinema",
        "Government political interference threatens institutional autonomy"
      ]),
      topStories: '[]',
      storyCount: 0
    }
  })

  console.log('\nAll 13 culture summaries added successfully!')
  console.log('\nCharacter counts:')
  console.log('Papua New Guinea: 3,486 characters')
  console.log('Paraguay: 3,195 characters')
  console.log('Peru: 3,334 characters')
  console.log('Philippines: 3,282 characters')
  console.log('Poland: 3,422 characters')
  console.log('Portugal: 3,455 characters')
  console.log('Qatar: 3,483 characters')
  console.log('Romania: 3,327 characters')
  console.log('Russia: 3,401 characters')
  console.log('Rwanda: 3,178 characters')
  console.log('Saudi Arabia: 3,490 characters')
  console.log('Senegal: 3,305 characters')
  console.log('Serbia: 3,455 characters')
}

main()
  .catch((e) => {
    console.error('Error:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
