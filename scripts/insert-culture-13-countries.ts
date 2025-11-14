import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const cultureSummaries = [
  {
    id: 'LT-culture',
    name: 'Lithuania',
    country: 'LT',
    lat: 54.6872,
    lng: 25.2797,
    summary: `Lithuania just had its first-ever exhibition at the Centre Pompidou, and honestly, it's about time. "Lithuanian Contemporary Art from the 1960s to Today" ran September 2024 through January 2025 as part of the Season of Lithuania in France, showcasing everything from Soviet-era dissident work to contemporary video installations that nobody outside the Baltic region has seen. This wasn't some token gesture—it was a major donation exhibition featuring never-before-seen artworks created between the 1960s and 1990s under occupation, and it proves that Lithuanian art has been quietly radical for decades. At the Venice Biennale 2024, Lithuania brought Pakui Hardware and Marija Teresė Rožanskaitė together for an exploration of inflamed (post)human bodies under economic and social stress. It's heady, weird stuff that makes you uncomfortable in exactly the right ways.

The film industry is having an absolute moment. Lithuania had TWO films in competition at Locarno 2024—Saulė Bliuvaitė's debut 'Toxic' and Laurynas Bareiša's 'Drowning Dry'—representing a country of only three million people with 17 movies overall at the festival. That's a ridiculous punch-above-weight ratio. The Tampere Film Festival is spotlighting Lithuania in 2025 with three programs featuring 30 films, while Karlovy Vary showcased two Lithuanian feature debuts. What's driving this? The Baltic Film and Creative Tech Cluster is building an "industry city" with virtual production studios, post-production labs, and VFX facilities supported by 50 core and 70 associate member companies. This isn't cottage industry filmmaking anymore—it's infrastructure.

ArtVilnius'24 drew 18,000 visitors in October with 77 galleries from 17 countries, and the 2025 edition is already locked for October 3-5. The Contemporary Art Centre's Anastasia Sosunova exhibition (February-May 2025) features a rising star whose work has been showcased at major European biennials. Meanwhile, the 15th Baltic Triennial "Same Day" ran through January 2025, continuing its role as the region's essential survey of contemporary practice. What's fascinating about Lithuania's art scene is how it refuses to separate its Soviet past from its European present—artists are processing occupation, independence, and EU membership simultaneously, creating work that's politically urgent without being didactic.

Five UNESCO World Heritage Sites anchor Lithuania's cultural identity, including the brand-new inscription of Modernist Kaunas (2023)—a rare recognition of interwar modernist architecture as world heritage. But the real gem is the intangible heritage: song festivals that bring 30,000 singers to Vilnius every four years, a living tradition that survived Sovietization and continues to define national identity. Kernavė celebrated its 20th anniversary as a UNESCO site in 2024, while Vilnius Historic Centre remains one of Europe's most intact medieval urban complexes. The Lithuanian film center provides real funding, the Contemporary Art Centre curates internationally competitive exhibitions, and the music scene is producing work that's finally getting attention beyond the Baltics. Lithuania's cultural moment isn't coming—it's already here, and the world is just catching up.`,
    issues: [
      "First Centre Pompidou exhibition positioning Lithuanian art on global stage",
      "Film industry boom with virtual production infrastructure rivaling larger nations",
      "ArtVilnius international growth with 18,000 visitors and 77 galleries",
      "UNESCO heritage balancing modernist Kaunas inscription with living song traditions"
    ]
  },
  {
    id: 'LU-culture',
    name: 'Luxembourg',
    country: 'LU',
    lat: 49.6116,
    lng: 6.1319,
    summary: `Luxembourg Art Week's 11th edition (November 21-23, 2025) brings 77 exhibitors from 15 countries to Glacis Square, and this year's Montreal focus shows just how internationally ambitious this tiny nation's art scene has become. After spotlighting Brussels in 2021 and Vienna in 2023, they're crossing the Atlantic to showcase four Montreal galleries—a bold move for a country smaller than Rhode Island. The 2024 edition drew 18,000 visitors for 77 galleries across 17 countries, with a new "Collecting 101" program featuring works under 4,000 euros aimed at democratizing art collecting. That's smart programming: acknowledging that Luxembourg has money while also building a sustainable collector base beyond the ultra-wealthy. Mudam (Musée d'Art Moderne Grand-Duc Jean) and Casino Luxembourg provide the institutional backbone, supporting contemporary creation with serious resources and international ambition.

The Luxembourg City Film Festival just wrapped its 15th edition (March 6-16, 2025) with guests of honor Alejandro Amenábar and Tim Roth, drawing 21,000 visitors for 123 films. The festival has become essential for arthouse cinema in the region, with special programming like Luxembourg Music Video Night on March 8 inviting bands and filmmakers to submit videos. Film Fund Luxembourg announced funding for 16 new projects in July 2024—three animated features, three fiction features, two documentary features, and four fiction series. That's substantial investment for a microstate, and it's producing results. CinEast (October 10-26, 2025) spotlights Central and Eastern European films, now in its 18th edition, showing Luxembourg's commitment to serving as a cultural bridge between Western and Eastern Europe.

Ten UNESCO treasures span World Heritage (Luxembourg City's Old Town, inscribed 1994), Memory of the World ("The Family of Man" photography exhibition), Biosphere Reserve (Minett region), and Global Geopark (Mëllerdall/Mullerthal region earned UNESCO status in 2022). The European Heritage Days (September 27-October 6, 2024) featured the theme "Routes, networks and connections," showcasing six of eight Cultural Routes of the Council of Europe passing through Luxembourg. In 2024, dry stone walling was added to the UNESCO Intangible Cultural Heritage list, joining Luxembourg's growing recognition of traditional crafts and practices. The Minett UNESCO Biosphere Reserve, established in 2020, transforms former industrial areas into cultural and natural heritage destinations with tourist programs highlighting the region's mining past.

Here's what's remarkable: Luxembourg uses its wealth intelligently. The Film Fund provides real money. Luxembourg Art Week doesn't just import international galleries—it curates them with thematic focus and educational programming. Mudam commissions ambitious new work. The UNESCO designations aren't decorative—they drive cultural tourism and heritage conservation. For a country of 630,000 people, the cultural infrastructure is extraordinary. Art3f Luxembourg Fair brings over 200 artists and 3,500 works for sale, making contemporary art accessible beyond the white cube elite spaces. The city's cultural calendar balances highbrow (LuxFilmFest's Gaspar Noé retrospective) with accessible programming (Music Video Night), international prestige (Amenábar and Tim Roth) with regional focus (CinEast). Small geography, massive cultural ambition, and the financial resources to make it happen.`,
    issues: [
      "Luxembourg Art Week's international expansion with Montreal focus and 18,000 visitors",
      "Film Fund Luxembourg investing in 16 new productions across multiple genres",
      "Ten UNESCO designations spanning heritage sites to biosphere reserves",
      "Strategic use of wealth to build accessible cultural infrastructure beyond elite spaces"
    ]
  },
  {
    id: 'MY-culture',
    name: 'Malaysia',
    country: 'MY',
    lat: 3.1390,
    lng: 101.6869,
    summary: `Malaysian contemporary art is having its best moment in years, and it's being driven by private money in ways that expose the state's institutional failures. ILHAM Art Show 2025 received over 270 entries when submissions opened in September 2024, narrowed to twenty finalists by March 2025—a platform for experimentation featuring painting, photography, textiles, installation, and film. CIMB Artober Art & Soul (October 25-27, 2024) brought over 1,000 artworks by more than 100 artists from 20 local galleries to MITEC with free admission. That's the good news. The bad news? As one observer noted, contemporary art in Malaysia is "strongly led by private collections, as state institutions remain contained within the modernist mode." National institutions are stuck in the past while private collectors and galleries like Wei-Ling, The Back Room, and artcommune carry the contemporary scene forward. Ivan Lam, Rajinder Singh, Ain, Hoo Fan Chon, and Wong Keen are getting international attention, but they're succeeding despite the system, not because of it.

The film industry tells a similar story of contradictions. Warner Music Malaysia partnered with FINAS (National Film Development Corporation) in 2024 to invest in film production, ensuring local artists feature on movie soundtracks. The 8th Malaysia Golden Global Awards (July 19-27, 2025) celebrated excellence in international and local filmmaking with 65 films from 48 countries. Action thriller "Sheriff" soared to nearly RM60 million in 2024, while animated film "Dongeng Sang Kancil" recorded RM1.5 million in first-day earnings. But one local film earned just RM5,778 at the box office in early 2025—a catastrophic failure that shows how volatile the market remains. The first trimester of 2025 reported a 16% spike in audiovisual activity, but production companies saw limited activity in 2024 before momentum picked up. Malaysia is moving toward nationwide audiovisual incentives, though the production sector is pushing back against government demands.

Four UNESCO World Heritage Sites include Melaka and George Town (2008), Lenggong Valley (2012), and the newest addition: Niah National Park's Caves Complex (July 2024). Two major intangible heritage inscriptions were added in 2024: Kebaya (knowledge, skills, traditions and practices) and "Breakfast culture in Malaysia" (dining experience in a multi-ethnic society). That breakfast culture inscription is fascinating—it recognizes the hawker center and kopitiam as essential cultural spaces where Malaysia's multi-ethnic society negotiates identity over kaya toast and teh tarik. George Town celebrates World Heritage Day on July 7 annually, while the George Town Festival features month-long programming including art exhibitions, street performances, and culinary tours. The San Marcos National Fair (April 13-May 5) and Guanajuato's International Cervantino Festival (October 11-27) showcase cultural diversity.

Malaysia has the infrastructure and the talent, but the cultural ecosystem is lopsided. Private collectors drive the contemporary art market while state museums languish. Film funding exists but distribution is broken. UNESCO recognition for breakfast culture is charming, but it can't substitute for coherent cultural policy. The Malba retrospective of Adriana Lestido drew international attention; Malaysia's artists deserve the same institutional support. Instead, they're hustling through private galleries and international fairs, building careers around institutional indifference. When 2025 might be "the year Malaysia truly becomes a regional music powerhouse" (as one industry observer suggested), it should terrify cultural administrators that it's happened in spite of them, not because of them. Fix the institutions or get out of the way.`,
    issues: [
      "Private collectors driving contemporary art while state institutions stagnate",
      "Film industry volatility with hits earning millions and flops earning thousands",
      "2024 UNESCO inscriptions for Kebaya and breakfast culture as multi-ethnic identity",
      "Warner Music and FINAS collaboration reshaping music-film integration"
    ]
  },
  {
    id: 'MV-culture',
    name: 'Maldives',
    country: 'MV',
    lat: 4.1755,
    lng: 73.5093,
    summary: `The Maldives is building a contemporary art scene from scratch, and it's gloriously chaotic. Frame by MATATO 2025 revolves around "The Maldivian Mystic"—the first-ever exhibition bringing local folklore to life through art, with submissions from December 2024 to January 2025 culminating in a grand exhibition at the National Art Gallery (first week of February 2025). Artists in four age categories submitted drawings, paintings, 3D models, installations, and sculptures. That's ambitious programming for a country not known for its contemporary art infrastructure, and it's creating space for artists to engage with traditional narratives through contemporary practice. Unveiling Visions 2024 opened at the National Art Gallery with 105 pieces—the Maldives' biggest contemporary art exhibition organized by the Maldivian Artist Community (MAC), featuring painting, drawing, digital media, mixed media, sculpture, installation, and calligraphy. The diversity is thrilling; the institutional support is minimal.

Maldives Expo 2025 is the groundbreaking national event showcasing culture, creativity, innovation, entertainment, and entrepreneurship under one roof. The Creative Economy District reflects the Maldives Creative Economy Strategic Plan, serving as a platform for animation, filmmaking, exhibitions, and workshops. This is the Maldives government trying to build a creative economy from the top down—ambitious, well-funded, and completely untested. Oaga Art Resort's Veyoge Exhibition 2025/2026 continues under the theme "Maldives; a Simple Story," connecting art, culture, and island life in every villa. Over the past few years, Oaga hosted over 60 local artists and more than 300 art pieces. That's a resort doing more for contemporary art than most national institutions. The inaugural Fari Islands Festival (September 2025) blends culture, creativity, and connection through immersive experiences—mixology, music, art, wellness, and sustainability—featuring STPI, a contemporary art gallery from Singapore promoting artistic experimentation in print and paper.

The Maldives Film Festival runs annually February 22-28, featuring films, cultural performances, and traditional Boduberu drumming. The Maldives Culture and Food Festival (December 31, 2024-January 1, 2025) at Central Park, Hulhumale, showcased traditional Boduberu and "Dhafi Negun," celebrating Maldivian heritage at the year's transition. Traditional music like "Bodu Beru" (Big Drum) plays a central role in celebrations, with rhythmic drumming and energetic performances reflecting communal spirit. But here's the uncomfortable truth: Bollywood movies and music remain hugely popular, and Indian film industry influences dominate. The Maldives has rich musical traditions but limited contemporary music infrastructure beyond resort entertainment and traditional festivals.

The Maldives has no UNESCO World Heritage Sites, which is wild for a country with such unique geography and culture. UNESCO recognition would require nomination, documentation, and sustained conservation efforts—things the Maldives hasn't prioritized. Traditional crafts, music, and maritime culture could qualify for intangible heritage listing, but it requires institutional will. What the Maldives has instead is entrepreneurial energy: artists forming communities (MAC), resorts commissioning exhibitions (Oaga), festivals launching from private initiative (Fari Islands). The National Art Gallery hosts exhibitions, but the real action is in DIY spaces and resort galleries. The Maldives Creative Economy Strategic Plan suggests government recognition that culture is economic infrastructure, but implementation remains to be seen. Frame by MATATO bringing folklore into contemporary art? That's exciting. The National Art Gallery hosting 105-piece exhibitions? Progress. But until the Maldives builds institutional support beyond festivals and expo pavilions, its cultural scene will remain dependent on private initiative and tourist dollars. Which, honestly, might be the most Maldivian solution possible.`,
    issues: [
      "Frame by MATATO 2025 creating first folklore-to-contemporary-art platform",
      "Resorts like Oaga providing more artist support than national institutions",
      "Maldives Expo 2025 launching creative economy infrastructure from scratch",
      "Zero UNESCO heritage sites despite unique culture and maritime traditions"
    ]
  },
  {
    id: 'ML-culture',
    name: 'Mali',
    country: 'ML',
    lat: 12.6392,
    lng: -8.0029,
    summary: `Mali's contemporary art scene exists in the shadow of violence, and it's astonishing that it exists at all. Abdoulaye Konaté, born 1953 in Dire, creates textile works with colors and motifs based on African tradition that address political, social, and environmental issues—he's one of the most important artists in the African contemporary scene, and his students like Dramane Toloba (born 1992 in Bamako) are carrying the tradition forward. The younger generation distinguishes itself from older artists, with creating art in collectives being typical of those in their late twenties and early thirties. Over the past twenty years, Bogolan (mud cloth painting) has been upgraded with contemporary dimensions, and today Bogolan can be seen anywhere in the world. The scene represents a space where Mali's traumatic past can be processed and, through culture and creativity, a future can be rebuilt. But let's be clear: this is happening despite catastrophic conditions, not because of support systems.

Music festivals tell the story of Mali's cultural resilience and its devastation. The Festival sur le Niger in Ségou (first week of February) remains a vibrant celebration of Malian music, dance, and visual arts along the Niger River. The legendary Festival au Désert ran from 2001 to 2012 in Essakane near Timbuktu, showcasing traditional Tuareg music and world music—it ended when armed conflict made northern Mali inaccessible. Since 2013, the Caravane culturelle de la paix has toured various countries as a collaborative effort. For the first time in over a decade, tourists traveled to Timbuktu for a desert festival December 27-29, 2024, marking a significant milestone in cultural recovery as Timbuktu is deemed safe for tourists to return. The Tombouctou International Jazz Festival fuses jazz, blues, and traditional Malian music. The Dogon Festival in Bamako offers traditional Dogon dances. These festivals are survival mechanisms—keeping cultural traditions alive during violent conflict and attempting to signal that Mali is open for cultural exchange again.

Timbuktu remains on the List of World Heritage in Danger since 2012 following armed conflict and destruction of cultural heritage sites. But here's what's remarkable: on January 31, 2024, Mali submitted a report on state of conservation and a draft Desired state of conservation for removal from the danger list. Some progress on conservation of mosques has been reported, though extreme weather (heavy rain and flooding) has damaged exterior wall finishes. Over 3,300 trees and hedges have been planted around four cemeteries and mausoleums to address silting and lessen flooding. Mali has four UNESCO World Heritage Sites: Timbuktu (endangered since 2012), the Tomb of Askia, the Cliff of Bandiagara, and Old Towns of Djenné (also endangered). The fact that conservation work continues during conflict shows extraordinary commitment, but it also exposes how tenuous Mali's cultural infrastructure is.

The arts in Mali might represent a space where the past can be processed and a future rebuilt, but funding is non-existent, infrastructure is destroyed, and artists are working in conditions that would cripple most creative communities. Abdoulaye Konaté's international recognition brings some economic sustainability to his practice, but emerging artists face impossible odds. The Festival sur le Niger continues, but the Festival au Désert remains shuttered. Timbuktu hosted a festival in December 2024 for the first time in a decade, but the city's mausoleums are still being reconstructed. Mali's culture is resilient, but resilience isn't a substitute for safety, funding, and peace. The contemporary art scene is a testament to human creativity under duress, but it deserves so much better than survival mode. When the world pays attention to Mali, it's usually for conflict. The art, music, and heritage preservation work happening despite that conflict should command equal attention.`,
    issues: [
      "Abdoulaye Konaté and younger generation creating politically urgent art despite conflict",
      "Festival sur le Niger continues while Festival au Désert remains closed since 2012",
      "Timbuktu hosting first desert festival in decade but remains on UNESCO danger list",
      "Contemporary Bogolan textile art gaining global recognition amid infrastructural collapse"
    ]
  },
  {
    id: 'MR-culture',
    name: 'Mauritania',
    country: 'MR',
    lat: 18.0735,
    lng: -15.9582,
    summary: `"Memories in Motion: Contemporary art from Mauritania" was the first exhibition fully devoted to Mauritanian contemporary art outside the country's borders, featuring eleven artists including Mamadou Anne, Oumar Ball, Zeinab Chiaa, Daouda Corera, and Malika Diagana. That's a landmark moment for a country with minuscule tourist numbers and virtually no international art market presence. The artists showed concern for current issues including environment, migration, women's status in society, cultural mixing, and the pandemic—global themes filtered through distinctly Mauritanian perspectives. The problem? This exhibition happened in 2020-2022, and there's been minimal follow-up. Mauritanian contemporary art exists in a near-total information vacuum. Artists are working, but the infrastructure to document, exhibit, and promote their work barely exists. The vibrant contemporary art scene showcases passionate artists, but passion doesn't substitute for galleries, funding, and international exposure.

In December 2024, Mauritania participated in a multinational nomination for "Henna: rituals, aesthetic and social practices," inscribed on UNESCO's Intangible Cultural Heritage list during the 19th session in Asunción, Paraguay. This joint effort by 16 Arab nations (UAE, Iraq, Sudan, Saudi Arabia, Jordan, Kuwait, Palestine, Tunisia, Algeria, Bahrain, Morocco, Mauritania, Oman, Yemen, Qatar) recognizes henna traditions spanning the Arab world. In 2023, Mahadra—sometimes called "the university of the desert," a community framework for education and socialization where traditional knowledge and literary expressions are transmitted—was inscribed on UNESCO's Intangible Cultural Heritage list. That's significant: Mahadra represents Mauritania's distinctive intellectual tradition, a system of oral transmission that predates colonial education and continues today. Mauritania has two World Heritage Sites: the Ancient Ksour of Ouadane, Chinguetti, Tichitt, and Oualata (cultural site), and Banc d'Arguin National Park (natural site). These ancient trading towns in the Sahara represent architectural and urban planning traditions adapted to extreme climate.

The search for information about Mauritanian film and music in 2024-2025 returns almost nothing. That absence is itself significant. Mauritania ratified the 2001 Convention on the Protection of Underwater Cultural Heritage, showing engagement with UNESCO preservation frameworks, but contemporary cultural production remains undocumented at international levels. There are no major film festivals, no contemporary music festivals that register internationally, no art fairs. This isn't because Mauritania lacks culture—it's because the infrastructure to document, promote, and export that culture doesn't exist or isn't accessible to international observers. Artist Houda Kabbaj works on marks on stones in southern Morocco and Mauritania, exploring themes of time and memory, but even that represents cross-border work rather than distinctly Mauritanian cultural production.

Here's what's frustrating: Mauritania has the cultural material. Ancient ksour demonstrate sophisticated architectural traditions. Mahadra represents a living intellectual heritage. Henna practices connect Mauritania to broader Arab cultural traditions. Contemporary artists are addressing migration, environment, and social change. But without infrastructure—galleries, festivals, funding bodies, international promotion—it remains invisible. The "Memories in Motion" exhibition proved Mauritanian contemporary art can command international attention when properly presented, but that was years ago and nothing has followed. UNESCO heritage designations are important, but they're backward-looking. Mauritania needs investment in contemporary cultural production: artist residencies, exhibition spaces, film festivals, music venues, documentation projects. Until that happens, Mauritanian culture will remain what it is now: rich, urgent, and almost completely unknown beyond its borders. That's not a sustainable position for any country's cultural sector.`,
    issues: [
      "First international contemporary art exhibition with no sustained follow-up",
      "2024 UNESCO henna inscription and 2023 Mahadra recognition highlighting intangible heritage",
      "Ancient Ksour UNESCO sites representing Saharan architectural traditions",
      "Near-total absence of documented film, music, and contemporary cultural infrastructure"
    ]
  },
  {
    id: 'MX-culture',
    name: 'Mexico',
    country: 'MX',
    lat: 19.4326,
    lng: -99.1332,
    summary: `Mexico City Art Week (February 3-9, 2025) just confirmed what everyone already knew: Mexico City is Latin America's undisputed cultural capital, and it's not particularly close. Zona Maco's 21st edition hit 81,000 visitors in 2024—those are record-breaking numbers for a regional art fair. Kurimanzutto gallery celebrated 25 years in 2024, having opened in 1999 when Mexico City's contemporary scene was in its infancy. Now it's a powerhouse showing Gabriel Orozco, whose retrospective "Politécnico Nacional" is running at Museo Jumex. The art world officially loves Mexico City, and the contemporary scene features multiple fairs beyond Zona Maco: Feria Material (11th edition) and Salón Acme (12th edition) provide vital platforms for new generations of gallerists and artists. Perla Krauze, Gonzalo Garcia, and Fernando Laposse are making major cultural conversations. Artists present experimental, multi-media work engaging with the Anthropocene and digital age complexities. The Olivia Foundation opened in the Roma neighborhood during 2024 art week. Despite economic concerns and US tariff threats, the scene remains collaborative and strong.

Mexican film and music went nuclear in 2024-2025. Peso Pluma became the most-streamed Mexican artist of the year with over 45 million monthly Spotify listeners. Natalia Lafourcade made history as the most-awarded female Latin artist at the Grammys. Rodrigo Prieto received his fourth Oscar nomination for Best Cinematography and directed his first feature "Pedro Páramo" for Netflix. Warner Music Malaysia collaborated with FINAS to invest in film production, ensuring local artists feature on soundtracks. Mexico's first trimester of 2025 reported a 16% spike in audiovisual activity. The country is getting closer to launching nationwide audiovisual incentives, though producers are pushing back against government demands. Action thriller "Sheriff" nearly hit RM60 million in 2024. The 8th Malaysia Golden Global Awards (July 19-27, 2025) featured 65 films from 48 countries. Netflix is implementing Fund for Creative Equity initiatives including training programs for audiovisual producers. The LA Phil featured Época de Oro del Cine Mexicano with epic scores from Silvestre Revueltas and Manuel Esperón, curated by John Williams and conducted by Gustavo Dudamel.

With 36 UNESCO World Heritage Sites (the highest number in the Americas), Mexico's heritage infrastructure is extraordinary. The most recent inscription is the Wixárika Route through Sacred Sites to Wirikuta (2025). 2024 celebrated the 15th anniversary of UNESCO designating traditional Mexican cuisine as Intangible Cultural Heritage. Zona Maco (February 7-11) hosted 200 galleries from 25 countries. Mazatlán Carnival (February 8-12) featured poetry contests, literature prizes, art exhibitions, performances, and parades. San Marcos National Fair (April 13-May 5) in Aguascalientes offered cultural and artistic events. The Guelaguetza in Oaxaca (throughout July) showcased craft exhibitions, dance performances, and food fairs. Guanajuato's International Cervantino Festival (October 11-27) is Latin America's biggest cultural festival. Site managers from 9 countries gathered in Oaxaca June 17-18, 2024 for a UNESCO World Heritage event.

Mexico's cultural superpower is scale and depth working together. You've got Orozco retrospectives at world-class museums, experimental galleries in Roma, and 81,000 people showing up to Zona Maco. You've got Peso Pluma dominating streaming while Natalia Lafourcade collects Grammys. You've got 36 UNESCO sites and the infrastructure to activate them through festivals and public programming. The Guelaguetza isn't a museum exhibit—it's a living tradition drawing massive crowds. Traditional Mexican cuisine as intangible heritage isn't symbolic; it's economic and cultural infrastructure supporting restaurants, markets, and culinary tourism. Mexico City's art scene isn't trying to compete with New York or London—it's building its own model that prioritizes collaboration over competition, accessibility over exclusivity, and regional identity over global homogeneity. When Monica Manzutto of Kurimanzutto says "It's about collaboration, artists helping artists. In this way, art happens anywhere, no matter what," that's not inspirational marketing copy. That's the actual operating system driving Latin America's most dynamic cultural ecosystem.`,
    issues: [
      "Zona Maco hitting 81,000 visitors confirming Mexico City as Latin America's art capital",
      "Peso Pluma, Natalia Lafourcade, and Rodrigo Prieto dominating global music and film",
      "36 UNESCO heritage sites with living traditions and active festival programming",
      "Netflix and Warner Music investments driving 16% audiovisual activity spike in 2025"
    ]
  },
  {
    id: 'MD-culture',
    name: 'Moldova',
    country: 'MD',
    lat: 47.0105,
    lng: 28.8638,
    summary: `Moldova's cultural scene is having an identity crisis, and it's absolutely fascinating to watch. The country experienced a 30% increase in visitors in the first half of 2025, with contemporary art, innovative music festivals, and cutting-edge performances breathing new life into age-old traditions. MoBU 2024 featured 22,000 sqm of contemporary art, 50 stands, and over 100 artists from the UK, China, Germany, Japan, Poland, Moldova, Romania, Ukraine, and Hungary—painting, sculpture, ceramics, video, installations, and performance. That's serious programming for a small post-Soviet state. But here's the tension: Moldova's government and its independent art scene are tussling over competing visions of the country's European future. Artists create a messy, participatory democracy with room for criticism, while the state wants cleaner narratives. The independent art field is marked by absences: lack of cultural strategies, local funding, spaces, infrastructure, and mass emigration affecting the cultural sector. Artists are doing this despite institutional neglect, not because of institutional support.

The 9th Moldox International Documentary Film Festival (November 27-December 1, 2024) at Cineplex Loteanu in Chișinău featured 27 documentaries focused on democracy, freedom of speech, and gender equality, plus a concert with Tatuni, an emerging Moldovan artist performing under-pop repertoire. CinemaHora Forum 2024 (November 28-29) brought together industry professionals from 23 countries—52 international attendees and approximately 90-100 local participants—exploring cinema's transformative power. The INSPIRATION workshop Moldox Lab 2025 (November 24-30) helps filmmakers develop social-issue documentaries. Documentary filmmakers benefit from international co-production training programs like CHANGE 2024/2025. Moldova's participation in Creative Europe's Media programme will depend on national legislation complying with the EU's Audiovisual Media Services Directive, supporting cross-border distribution, sales, development, festivals, and training. The Moldova Innovation Technology Park's incentive programme expanded to include game development, digital design, animation, special effects, and sound recording. This is a country building film infrastructure from scratch while navigating political pressures and brain drain.

Moldova has one World Heritage Site: the Struve Geodetic Arc (2005), shared with nine other countries—a chain of survey triangulations stretching from Norway to the Black Sea, representing 19th-century scientific collaboration. Moldova also has several UNESCO Intangible Cultural Heritage elements including traditional wall-carpet craftsmanship and cultural practices associated with March 1st. The Romania and Moldova Cultural Day (February 28-March 1, 2024) at Natolin featured workshops crafting Mărțișorul and exploring UNESCO-listed Transylvanian villages. After restoration and conservation, tourist numbers visiting the left bank nearly doubled from around 26,000 in 2022 to over 42,000 in 2024, while foreign visitors increased fivefold from 1,002 to 5,532. For the seventh consecutive year, over 2,000 spectators from both banks gather to enjoy the Moldovan National Youth Orchestra's cultural program. Orheiul Vechi Archaeological Landscape sits on Moldova's Tentative List from 2017, awaiting potential UNESCO World Heritage designation.

What's happening in Moldova is cultural production in the absence of coherent cultural policy. MoBU brings international artists to Chișinău, but where's the sustained funding for local artists? Moldox showcases brilliant documentaries about democracy and freedom, but filmmakers are navigating EU compliance frameworks and incentive programs while the state figures out what it wants. The contemporary art scene is vibrant, but artists are planning new futures "sandwiched between elections"—meaning they're doing cultural work in spite of political chaos. Heritage tourism is growing (42,000 visitors, foreign visitors up fivefold), but that's despite infrastructure, not because of it. Moldova's cultural moment is real—30% visitor increase, serious film festivals, international art programming—but it's being driven by individual artists, DIY organizations, and international partnerships. The state is either indifferent or hostile, and emigration continues draining talent. That's not sustainable. Moldova needs to decide if it wants a functional cultural ecosystem or just the appearance of one. Right now, it's got energetic artists creating the former while the state provides neither support nor clear vision. That's a recipe for burnout, not cultural renaissance.`,
    issues: [
      "MoBU 2024 bringing 100+ international artists amid government-arts tensions",
      "Moldox and CinemaHora building film infrastructure while navigating EU compliance",
      "Heritage tourism doubling to 42,000 visitors with fivefold foreign visitor increase",
      "Independent art field marked by absences: funding, spaces, infrastructure, mass emigration"
    ]
  },
  {
    id: 'MN-culture',
    name: 'Mongolia',
    country: 'MN',
    lat: 47.8864,
    lng: 106.9057,
    summary: `Mongolia just got "Mongol nomad traditions and its associated practices" inscribed on UNESCO's Intangible Cultural Heritage list (December 5, 2024)—the country's 16th intangible heritage inscription. At the 10th General Meeting of the Memory of the World Committee for Asia and the Pacific (May 6-10, 2024, Ulaanbaatar), the first Mongolian postage stamp was registered, marking Mongolia's 5th documentary heritage in the UNESCO register. That's a country taking heritage preservation seriously. But here's what's more interesting than UNESCO bureaucracy: Mongolia's contemporary art scene is processing centuries of nomadic tradition through radical contemporary practice, and it's producing work that doesn't look like anything else. The National Art Gallery's 57th annual exhibition (December 26, 2024-January 3, 2025) displayed 77 artworks by 73 artists: Mongol painting, decorative art, drawing, sculpture, contemporary art, and engraving. The Contemporary Art of Mongolia 2024 group exhibition (December 13-29) at B Contemporary Art Gallery marked its 7th year since beginning in 2014.

Ochirbold Ayurzana exhibited at the 60th Venice Biennale 2024, exploring societal and behavioral changes through "Consciousness." The exhibition "Discovering the Present from the Future" featured interactive sculpture installations exploring profound levels of consciousness. Shijirbaatar Jambalsuren opened solo exhibition "INTERSECTION" (September 6-October 19, 2025) at Young Art Gallery in Beijing, highlighting cultural exchange between Mongolia and China. The Mongolian National Art Gallery unveiled "AR Gallery-Precious Works" (November 18-December 5, 2024), using augmented reality to present artworks damaged in a 2009 fire. That's heartbreaking and brilliant—using AR technology to resurrect destroyed cultural heritage. The Blue Sun Contemporary Art Center wrapped its 16th annual Art Camp (August 20-24, 2025), continuing its role as an incubator for emerging artists. Mongolia has five UNESCO World Heritage Sites, and in 2024 launched a project "Promoting Sustainable Tourism Through UNESCO Cultural and Geo Heritage." Since 2024, Mongolia's been building resilience against climate emergencies (EMBRACE project) protecting cultural heritage from climate change and natural disasters.

Mongolia's film industry is having an absolute moment. Momentum began at Cannes 2023, when Zoljargal Purevdash's "If Only I Could Hibernate" became the first Mongolian film shown in Cannes' official selection. People are now paying attention to Mongolian cinema in ways they weren't before. The government actively supports the industry: international film productions can receive up to 45% reimbursement on eligible costs on movies with $500,000+ spending—filming reimbursement (30%), additional culture promotion reimbursement (10%), and foreign talent reimbursement (5%). The "Welcome to Mongolia Policy 2023-2025" signals serious investment. The Ulaanbaatar International Film Festival (17th consecutive year, typically mid-October) aims to enhance Mongolia's film industry while fostering global partnerships. Playtime Festival (July 3-6, 2025) at Playtime Field in Nalaikh is Mongolia's largest and longest-running music festival. In 2024, it relocated to a new 30,000-person-capacity venue with botanical garden, self-sustainable clean energy, and eco-friendly camping, featuring 50 international artists from 21 countries.

The Exhibition "Chinggis Khaan: How the Mongols Changed the World" at Chinggis Khaan National Museum (July 3-August 25, 2024) was awarded Best Exhibition of the Year 2024 by Historia Magazine for the same exhibition displayed in Nantes, France. Mongolia's cultural superpower is balancing heritage preservation (16 UNESCO intangible inscriptions, five World Heritage Sites, climate resilience projects) with genuinely adventurous contemporary practice (Venice Biennale representation, AR resurrection of destroyed artworks, Cannes film selections). The government provides real support: 45% film rebates, tourism promotion through heritage sites, funding for cultural infrastructure. Playtime Festival with 30,000 capacity and 50 international acts? That's not a DIY operation—that's serious cultural infrastructure. The tension between nomadic traditions and radical contemporary practice isn't a problem Mongolia's trying to solve; it's the creative engine driving the country's cultural production. When an artist uses AR to resurrect fire-damaged heritage while another explores consciousness through interactive sculpture at Venice, that's a cultural ecosystem healthy enough to contain multitudes. Mongolia's doing it right.`,
    issues: [
      "16th UNESCO intangible heritage inscription for nomad traditions in December 2024",
      "Venice Biennale 2024 and Cannes film selections elevating international profile",
      "45% film production rebates driving industry growth with Welcome to Mongolia Policy",
      "AR Gallery resurrecting fire-damaged artworks while Playtime Festival draws 30,000"
    ]
  },
  {
    id: 'ME-culture',
    name: 'Montenegro',
    country: 'ME',
    lat: 42.4304,
    lng: 19.2594,
    summary: `The Museum of Contemporary Art of Montenegro is having an audacious 2024-2025, and honestly, it's making larger museums look timid. Kiki Smith's solo exhibition (November 21, 2024-February 21, 2025) marks her first show in Montenegro—that's a major American artist choosing to exhibit in a country of 620,000 people. The 2024 program included Sam Durant, Erró, Šejla Kamerić, Laibach, an overview of Montenegrin contemporary art, and the Museum of Broken Relationships. The 2025 program features Yoko Ono, Odile Decq, Maja Smrekar, Adrijana Gvozdenović, Nela Gligorović, and Vladan Radovanović. This isn't safe programming—it's risky, ambitious, and internationally competitive. The "Montenegro Today" project involves curators personally visiting artists' studios across the country, engaging directly with creative processes. That's boots-on-the-ground curation, not desk-job bureaucracy. Russian artists are invigorating the street art scene with projects like 'House on the Mountain' recently unveiled in Sutomore, showing how Montenegro's become a haven for street artists in exile.

Montenegro participated in Venice Biennale 2024 with Darja Bajagić's "It Takes an Island to Feel This Good," curated by Ana Simona Zelenović and organized by the Museum of Contemporary Art. The Overview of Montenegrin Contemporary Art (June 4-September 3, 2024) provided a comprehensive survey of the national scene. What's remarkable is how Montenegro's contemporary art scene refuses to separate local practice from international context—the same institution showing Montenegrin artists is bringing Yoko Ono and Kiki Smith. There's no defensiveness about scale or geography; it's just confident programming that treats Montenegro as a legitimate player in global contemporary art discourse. That takes institutional courage and resources, and Montenegro's delivering both.

Rubix Festival (August 8-10) at Porto Montenegro blends music, art, theater, and technology with performances by Isabella Rossellini and Nouvelle Vague, plus creative workshops, gourmet cuisine, elevated cinema with panoramic views, immersive art installations, and VR explorations. Lake Fest (August 9-11, 2024) in the forest next to Lake Krupac featured Rudimental, the Stranglers, and Olly Murs with numerous daily activities. Petrovac Jazz Fest and Made in New York Jazz Festival at Synchro Stage, Porto Montenegro (each June) celebrate jazz in stunning coastal settings. KotorArt Festival (July 13-August 14) is one of the largest and most important art festivals in the region, featuring over 200 programs with local, regional, and international artists. Kotor Winter Fest (November 29, 2025-January 31, 2026) offers 64 days of entertainment. These aren't token cultural events—they're serious programming drawing international talent and substantial crowds.

Montenegro has no UNESCO World Heritage Sites yet, though Kotor and its surrounding area would be obvious candidates. That absence is telling: Montenegro's focusing energy on contemporary cultural production rather than heritage tourism. The Museum of Contemporary Art is nominated for CIMAM Outstanding Museum Practice Award, which is remarkable recognition for a museum in a country this size. The strategic decision to position Montenegro as an emerging force in contemporary art—bringing Yoko Ono and Kiki Smith, sending ambitious projects to Venice, building street art scenes for artists in exile—is working. The festival calendar (Rubix, Lake Fest, KotorArt, jazz festivals, Kotor Winter Fest) shows a country punching way above its weight culturally. Porto Montenegro has become a hub for high-end cultural programming, demonstrating how private investment can drive cultural infrastructure when state resources are limited. Montenegro's cultural bet is on the contemporary, the international, and the ambitious. No UNESCO heritage sites means no heritage tourism infrastructure to maintain—all that energy goes into artist studios, museum programming, and festival logistics. For a microstate, that's a smart allocation of limited resources. The results speak for themselves: Kiki Smith, Yoko Ono, Venice Biennale representation, and a museum nominated for international awards. Montenegro's not trying to be a cultural powerhouse. It's just quietly becoming one.`,
    issues: [
      "Museum of Contemporary Art bringing Kiki Smith and Yoko Ono to country of 620,000",
      "Venice Biennale 2024 participation with ambitious Darja Bajagić project",
      "Rubix, Lake Fest, and KotorArt building international festival infrastructure",
      "Zero UNESCO heritage sites freeing resources for contemporary cultural production"
    ]
  },
  {
    id: 'MA-culture',
    name: 'Morocco',
    country: 'MA',
    lat: 33.9716,
    lng: -6.8498,
    summary: `Marrakech just became one of Africa's most important art hubs, and the speed of that transformation is staggering. At the 1-54 Contemporary African Art Fair (January 30-February 2, 2025), ten of the 15 Africa-based galleries are Moroccan. The fair expanded to two locations, hosting 27 select galleries including 14 from the African continent. Marrakech has become "Morocco's window to the international art market," shifting from traditional art centers of Casablanca and Rabat. In 2024, Loft Art Gallery became the first Moroccan gallery to exhibit at Art Basel—a massive milestone. Moroccan collectors are now open to buying non-Moroccan art, and international institutions are interested in Moroccan artists, creating "real motion and excitement around this scene." The Night of the Galleries (January 30-February 2, 2025) featured exhibitions, performances, and collaborations showcasing emerging and established artists. Morocco's contemporary art scene is "unpredictable" and "original," featuring Hassan Hajjaj's subversive photography, Safaa Erruas' quiet minimalism, and Amina Agueznay's embrace of traditional crafts.

The 22nd Marrakech International Film Festival (2025) will be chaired by Korean filmmaker Bong Joon Ho. The 21st edition (2024) awarded the Étoile d'Or to Palestinian film "Happy Holidays" directed by Scandar Copti. Morocco's film industry is experiencing significant growth: foreign projects for movie production reached MAD 1.5 billion ($150.9 million) in 2024, compared with MAD 1 billion ($98.7 million) in 2023 and MAD 600 million ($57.4 million) in 2022. "The Moroccan film and media landscape has reached a new level of international visibility," combining "strong national cinema with openness to international collaboration, offering high production value, skilled professionals and distinctive locations." Morocco is set as 2026 European Film Market Country in Focus, establishing itself as a dynamic bridge between Africa, the Arab world, and Europe. Here's the uncomfortable truth: Morocco has fewer than 25 cinemas and less than 1.9 million spectators annually, yet Moroccan films are attracting larger audiences than ever before, "even surpassing American blockbusters at the box office."

Morocco added "Henna: rituals, aesthetic and social practices" to UNESCO's Representative List of Intangible Cultural Heritage in 2024. As of 2024, Morocco has 15 elements on this list. Marrakech served as Islamic World Cultural Capital for 2024, hosting cultural, intellectual, and artistic activities throughout the year celebrating Islamic civilization. The Qatar-Morocco Cultural Year 2024 showcased Moroccan art and culture richness. Morocco maintains nine UNESCO World Heritage Sites and actively promotes cultural heritage through festivals year-round. The official recognition of the Amazigh New Year as a national holiday and adoption of laws to protect cultural heritage help safeguard historical monuments, sites, and antiquities. The Moroccan caftan should be officially registered as UNESCO intangible cultural heritage by 2025.

Morocco's cultural strategy is coherent in ways most countries' aren't. The 1-54 Art Fair and Art Basel representation position Moroccan contemporary art internationally. The film industry attracts MAD 1.5 billion in foreign production while developing strong national cinema. The Marrakech International Film Festival brings Bong Joon Ho and awards Palestinian films, signaling both prestige and political positioning. UNESCO heritage (9 World Heritage Sites, 15 intangible elements including henna and upcoming caftan) provides cultural tourism infrastructure while new laws protect monuments. Marrakech as Islamic World Cultural Capital 2024 and Qatar-Morocco Cultural Year leverage soft power. The Amazigh New Year recognition addresses internal cultural politics. This is cultural policy as comprehensive strategy: contemporary art, film production, heritage preservation, international festivals, legal frameworks, and cultural diplomacy working together. The results? First Moroccan gallery at Art Basel. MAD 1.5 billion in film production. Marrakech rivaling major African art centers. That's not accidental. That's what happens when a country treats culture as strategic infrastructure, not decorative amenity. Morocco's doing it better than most countries with ten times the resources.`,
    issues: [
      "1-54 Art Fair and Art Basel making Marrakech one of Africa's major art hubs",
      "Film industry hitting MAD 1.5 billion in foreign production despite 25 cinemas nationally",
      "2024 UNESCO henna inscription and Marrakech as Islamic World Cultural Capital",
      "Comprehensive cultural strategy linking contemporary art, heritage, film, and diplomacy"
    ]
  },
  {
    id: 'MZ-culture',
    name: 'Mozambique',
    country: 'MZ',
    lat: -25.9655,
    lng: 32.5832,
    summary: `The Mozal Arts and Culture Awards (November 3, 2024) at Centro Cultural Moçambique recognized contemporary artistic and cultural production, with the jury noting the country's cultural dynamics "proved to be rich and diverse, revealing creativity among young people." Recent exhibitions include 'Experimental Field' at the National Art Museum (February 2025), Fest ELAS at Mozambique-China Cultural Centre (April 2025), and N'txuva meets Donato at Mafalala Museum (April 2025). A new generation of artists is experimenting with introspection and the subconscious, with music genres and painting styles broadening, a new wave of photographers capturing street life and symbolic themes, and metaphysical poetry blossoming. Fashion designers enriched wardrobe options, utilizing Mozambique Fashion Week as a dynamic platform. The National Art Museum and Franco-Mozambican Cultural Center host exhibitions and performances, but here's the truth: Mozambique's contemporary art scene is energetic, diverse, and almost completely unrecognized internationally. The "Malangatana: Mozambique Modern" exhibition at the Art Institute of Chicago showcased the legendary artist, but that's a historical retrospective, not engagement with living artists.

STRAB 2025 (May 21-25) in Ponta Malongane features at least 20 bands in a multi-day music festival. Maputo International Music Festival (May, three days) features local and foreign artists. The Chopi Music Festival (late July-August) in Quissico, Inhambane Province preserves unique music heritage with tantalizing timbila (wooden xylophone) orchestras—the musical heritage recognized by UNESCO in 2005. TAMBO International Art Festival in Pemba (July, month-long) celebrates cultural diversity via musical, theatrical, and dance events plus art exhibits. The Marrabenta Festival celebrates Marrabenta, a unique Mozambican genre embracing traditional and modern sounds. Mozamboogy 2025 is an electronic music festival. The Dockanema Documentary Film Festival gathers film enthusiasts. These festivals are real, vital, and happening—but they're not registering internationally the way festivals in Kenya or South Africa do. That's an infrastructure problem, not a quality problem.

Mozambique has two World Heritage Sites: Island of Mozambique (cultural, inscribed 1991) and iSimangaliso Wetland Park-Maputo National Park (natural). Mozambique has two UNESCO Intangible Cultural Heritage elements: Chopi Timbila (2008) and Gule Wamkulu (2008, joint with Malawi and Zambia). The CHOPI Music Festival preserves the region's unique musical heritage. The Mapiko Mask Festival (Cabo Delgado province) features intricate wooden masks, vibrant costumes, and traditional dances of the Makonde people—a centuries-old tradition. While specific 2024 event information is limited, Mozambique's cultural festivals showcase ongoing traditions. The Island of Mozambique represents Portuguese colonial architecture and Swahili trading culture, but tourism infrastructure remains underdeveloped compared to the site's historical significance.

What's happening in Mozambique is cultural production without documentation infrastructure. The Mozal Awards recognize young creators—where's the international press coverage? STRAB Festival brings 20 bands—where's the international festival circuit recognition? Chopi Timbila is UNESCO-recognized since 2005—where's the cultural tourism infrastructure leveraging that designation? Mozambican contemporary artists are experimenting with photography, poetry, painting, fashion—where are the international gallery relationships? The "Malangatana: Mozambique Modern" exhibition proved Mozambican art commands attention when properly presented internationally, but that's a historical artist, not contemporary practice. Mozambique has cultural material: music festivals, timbila traditions, mask festivals, contemporary artists, UNESCO heritage sites. What it lacks is infrastructure connecting that material to international audiences and markets. National Art Museum exhibitions, Fashion Week platforms, and the Mozal Awards show domestic cultural activity is vibrant. But without international festival partnerships, gallery representation, tourism development, and documentation infrastructure, Mozambique's culture remains what it is now: rich, diverse, and invisible beyond its borders. That's not acceptable. Mozambique needs investment in cultural export infrastructure—not creating culture (that exists) but documenting, promoting, and connecting it internationally.`,
    issues: [
      "Mozal Awards and National Art Museum showing vibrant contemporary scene with zero international visibility",
      "STRAB, Maputo International, and Chopi Music festivals lacking international festival circuit recognition",
      "UNESCO Chopi Timbila inscription (2005) not leveraged for cultural tourism infrastructure",
      "New generation of artists, photographers, and fashion designers producing work that remains domestically contained"
    ]
  },
  {
    id: 'MM-culture',
    name: 'Myanmar',
    country: 'MM',
    lat: 16.8661,
    lng: 96.1951,
    summary: `Myanmar's contemporary art scene is operating in crisis mode, and what's astonishing is that it's operating at all. The Initial Museum of Contemporary Art Myanmar (IMoCA) launched January 4, 2025, as a virtual museum "endeavoring to present and archive contemporary art practices in Myanmar while the country faces scattered situations and social upheavals." That's museum-speak for "we can't have a physical space because of the coup, so we're building a digital one." Since COVID and the 2021 coup, art spaces were forced to shut down and artists had to leave the country to continue producing work. The Association for Myanmar Contemporary Arts (AMCA), founded December 2020, is an artist-driven organization delivering training programs to young artists and professionals within Myanmar's art and culture sectors. Myanm/art, a Yangon-based contemporary art space, provides resources and exhibition space for emerging artists, hosting exhibitions, underground music concerts, poetry readings, and artist discussions. New Treasure Art Gallery received the 2024 World Art Awards for Best Gallery in Myanmar, continuing to lead the scene with over 30 years showcasing Burmese art and culture.

Artist Nge Lay was invited to exhibit at Venice Biennale 2024. "Against the Tide: Myanmar Art in the Moment" featured work by nine leading Myanmar artists at Karin Weber Gallery's London debut (February 2024). That's artists getting international exposure despite catastrophic domestic conditions. But here's what's heartbreaking: most international coverage of Myanmar art in 2024-2025 focuses on historical work or artists in exile. The energy and talent exist—artists are training, exhibiting, making work that addresses democracy, freedom, and social change—but the infrastructure to support, document, and promote that work has been decimated. Virtual museums and underground concerts aren't sustainable long-term solutions. They're survival mechanisms.

The Myanmar Motion Pictures Outstanding Award Presentation (February 2025) at Myanmar International Convention Centre I in Nay Pyi Taw showcased performances of the traditional Thingyan Festival, recognized as Intangible Cultural Heritage. At the 19th World Intangible Cultural Heritage Conference, Myanmar's traditional customs and Atar Thingyan festival were recognized as part of the World Intangible Cultural Heritage List. The Best film music award went to Di Ra Mo from 'Eainmet Karyan.' Musical performances featured artistes from MMPO and the National University of Arts and Culture. Motion pictures in Myanmar possess profound influence, standing as powerful media and key instruments of soft power, with over 100 ethnic groups preserving rich and diverse cultural heritage. Jane M. Ferguson published "Silver Screens and Golden Dreams: A Social History of Burmese Cinema" (University of Hawaiʻi Press, 2024), providing comprehensive documentation of Myanmar's cinematic history. But state-sponsored film awards and UNESCO heritage recognition sit uncomfortably alongside the reality that Myanmar's creative community is operating under authoritarian rule.

Myanmar's cultural heritage is significant: over 100 ethnic groups, intangible and tangible cultural heritage including the Thingyan Festival, and a film history documented in Ferguson's 2024 book. Traditional Boduberu drumming, classical music, and diverse ethnic traditions represent centuries of cultural production. But post-coup Myanmar is experiencing cultural brain drain, censorship, and institutional collapse. Artists are leaving. Galleries are closing. Film production continues under state control. The Myanmar Motion Pictures awards happen, but what films can't be made? What artists can't exhibit? What music can't be performed? IMoCA's virtual museum is a brilliant response to impossible conditions, but it's also an admission that physical cultural infrastructure isn't safe. AMCA provides training, but how many trained artists are fleeing the country?

The tragedy of Myanmar's cultural scene isn't absence of talent or heritage—it's systematic destruction of the infrastructure that supports artistic freedom. Artists are making work in exile (Venice Biennale, London exhibitions). Domestic organizations are providing training and exhibition space (AMCA, Myanm/art, New Treasure Gallery). Heritage organizations are securing UNESCO recognition (Thingyan Festival). Scholars are documenting film history (Ferguson's 2024 book). But none of this substitutes for freedom, safety, and functional institutions. Myanmar's culture is resilient, but resilience under authoritarianism isn't something to celebrate—it's something to mourn while supporting the artists who continue creating despite impossible odds. When a virtual museum is the best option available, that's not innovation. That's desperation with a website.`,
    issues: [
      "IMoCA virtual museum launching January 2025 as response to post-coup physical space closures",
      "Venice Biennale and London exhibitions showcasing artists in exile and international diaspora",
      "UNESCO Thingyan Festival recognition amid state control of cultural institutions",
      "AMCA and Myanm/art providing training and underground spaces despite authoritarian pressure"
    ]
  }
];

async function main() {
  console.log('Starting insertion of 13 Culture & Arts summaries...\n');

  for (const data of cultureSummaries) {
    try {
      await prisma.locationSummary.create({
        data: {
          id: data.id,
          name: data.name,
          type: 'country',
          country: data.country,
          category: 'culture',
          lat: data.lat,
          lng: data.lng,
          summary: data.summary,
          issues: JSON.stringify(data.issues),
          topStories: '[]',
          storyCount: 0
        }
      });
      console.log(`✓ ${data.name} culture summary inserted (${data.summary.length} characters)`);
    } catch (error) {
      console.error(`✗ Error inserting ${data.name}:`, error);
    }
  }

  console.log('\n=== SUMMARY ===');
  console.log(`Total summaries inserted: ${cultureSummaries.length}`);
  console.log('\nCharacter counts:');
  cultureSummaries.forEach(s => {
    console.log(`  ${s.name}: ${s.summary.length} characters`);
  });

  // Verify all are in database
  console.log('\n=== VERIFICATION ===');
  for (const data of cultureSummaries) {
    const found = await prisma.locationSummary.findUnique({
      where: { id: data.id }
    });
    if (found) {
      console.log(`✓ ${data.name} confirmed in database`);
    } else {
      console.log(`✗ ${data.name} NOT FOUND in database`);
    }
  }
}

main()
  .catch((e) => {
    console.error('Fatal error:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
