import 'dotenv/config'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

// Countries with their data
const COUNTRIES = [
  { name: 'Afghanistan', code: 'AF', lat: 33.9391, lng: 67.71 },
  { name: 'Albania', code: 'AL', lat: 41.1533, lng: 20.1683 },
  { name: 'Algeria', code: 'DZ', lat: 28.0339, lng: 1.6596 },
  { name: 'Angola', code: 'AO', lat: -11.2027, lng: 17.8739 },
  { name: 'Argentina', code: 'AR', lat: -38.4161, lng: -63.6167 },
  { name: 'Armenia', code: 'AM', lat: 40.0691, lng: 45.0382 },
  { name: 'Australia', code: 'AU', lat: -25.2744, lng: 133.7751 },
  { name: 'Austria', code: 'AT', lat: 47.5162, lng: 14.5501 },
  { name: 'Azerbaijan', code: 'AZ', lat: 40.1431, lng: 47.5769 },
  { name: 'Bahamas', code: 'BS', lat: 25.0343, lng: -77.3963 },
  { name: 'Bahrain', code: 'BH', lat: 26.0667, lng: 50.5577 },
  { name: 'Bangladesh', code: 'BD', lat: 23.685, lng: 90.3563 },
  { name: 'Barbados', code: 'BB', lat: 13.1939, lng: -59.5432 },
]

const cultureSummaries: { [key: string]: { summary: string; issues: string[] } } = {
  'Afghanistan': {
    summary: `Here's the brutal truth about Afghanistan's arts scene right now: it's one of the most heartbreaking and defiant cultural movements in the world, happening both in exile and under the thumb of a regime that literally wants it dead. Since the Taliban's 2021 return, music has been outlawed, women banned from public life, and yet—somehow—the creative resistance is absolutely electric.

Let's start with Shamsia Hassani, Afghanistan's first female street artist, who's creating murals across the globe—from Amsterdam to America to the streets of Kabul itself. Her work portrays women as powerful and vibrant, deliberately spitting in the face of Taliban's oppressive narrative. Rada Akbar's "Infinite Power" series pays tribute to ancient Persian painting while celebrating Afghan women's resilience. The ArtLords collective continues their artistic crusade for peace, painting murals despite the very real danger. In August 2024, the Afghan Youth Orchestra—46 male and female musicians aged 14-22—performed at Carnegie Hall and Kennedy Center in what can only be described as acts of pure defiance against a regime that's imposed gender apartheid and banned music entirely.

The film scene is equally vital. Recent releases include "Bread & Roses," an Oscar-aspiring documentary about women's lives under Taliban rule, "And Still I Sing" about girls competing in Afghan Star music competition, and "Last Song from Kabul." These aren't just films—they're evidence that Afghan cinema refuses to die, even as most filmmakers have fled the country. Meanwhile, Turquoise Mountain's work with women carpet weavers in Bamiyan gives artists a voice and income, producing extraordinary carpets in village workshops.

As for heritage, Afghanistan's two UNESCO World Heritage Sites—the Bamiyan Valley (where the Taliban destroyed those sixth-century Buddha statues in 2001) and the Minaret of Jam—remain on the danger list. The Taliban now cynically claims to protect cultural heritage, even declaring March 11 "Safeguarding of Cultural Heritage Day," while reports of illegal excavations and neglect continue. The proposed UNESCO nominations for the Behzad miniature painting style, the Atan national dance, and the Afghan rubab instrument sit frozen in time.

What's happening in Afghanistan isn't just cultural survival—it's active, furious resistance. Artists like Hassani and Akbar, musicians performing in exile, filmmakers documenting atrocities—they're all refusing to let Afghan culture be erased. The tragedy is that much of this extraordinary work is happening outside Afghanistan, while those inside create under conditions that would break most artists. It's a cultural scene defined by absence and presence, exile and defiance.`,
    issues: [
      "Taliban ban on music and women's artistic expression",
      "Shamsia Hassani and diaspora artists working in resistance",
      "Afghan Youth Orchestra performing in exile (2024)",
      "UNESCO heritage sites under threat from neglect",
      "Film industry documenting Taliban oppression from abroad"
    ]
  },
  'Albania': {
    summary: `Albania's cultural scene is having an absolutely fascinating identity crisis right now, caught between its Ottoman past, communist legacy, and a desperate hunger for European recognition. The country's arts are finally shaking off decades of Stalinist isolation, and watching it happen is genuinely thrilling.

Tirana's arts district Blloku has transformed from a communist-era restricted zone into the Balkans' most vibrant creative quarter. The National Theatre saga epitomizes Albania's cultural tensions—the government demolished the 1930s-era theatre in 2020 despite massive protests, planning to replace it with a €30 million cultural complex. Artists and intellectuals are still furious. Meanwhile, the House of Leaves Museum, opened in 2017 in the former communist secret police headquarters, has become a crucial space examining Albania's surveillance state history through unflinching exhibitions.

Albanian cinema is punching way above its weight internationally. Eliza Hoxha's documentaries about post-communist Albanian women have screened at major European festivals, while Saimir Kumbaro and Bujar Alimani continue producing films that grapple with Albania's brutal 20th century. The Tirana International Film Festival has grown into a serious regional player, screening over 80 films in its 2024 edition and attracting directors from across the Balkans.

Music is where things get really interesting. Albania's traditional iso-polyphony earned UNESCO Intangible Cultural Heritage status, but it's the contemporary scene that's electric. Rapper Noizy is massive across the Albanian-speaking world, while DJ producer Regard's deep house tracks have topped European charts. The Kala Festival, held in Dhërmi's abandoned military bunkers overlooking the Ionian Sea, has become one of Europe's coolest electronic music destinations, attracting international DJs and thousands of young Albanians embracing club culture.

The country has four UNESCO World Heritage Sites—Butrint's archaeological ruins, Berat and Gjirokastër's Ottoman-era old towns, and the ancient Illyrian and Albanian forest primeval beech forests. But preservation funding is chaotic, and mass tourism threatens these sites. The National Gallery and History Museum in Tirana have undergone renovations, but Albania's arts infrastructure remains underfunded compared to its Balkan neighbors. Still, there's an energy here—a hunger to prove Albania matters culturally. It's messy, it's contentious, but it's absolutely alive.`,
    issues: [
      "National Theatre demolition controversy and cultural identity debates",
      "Albanian cinema gaining international festival recognition",
      "Kala Festival establishing Albania as electronic music destination",
      "UNESCO heritage sites threatened by tourism and underfunding",
      "Post-communist artistic reckoning through museums and film"
    ]
  },
  'Algeria': {
    summary: `Algeria's cultural landscape is exploding right now, and nobody outside the Maghreb seems to be paying attention—which is criminal, because what's happening in Algiers, Oran, and Constantine is absolutely vital. This is a country where French colonial legacy, Berber identity, Arab nationalism, and a hungry young population are colliding in the most spectacular ways.

The contemporary art scene centers on Algiers' nascent gallery district. The Mohammed Racim National Museum of Algerian Miniatures reopened in 2023 after renovations, showcasing miniature painting traditions, while private galleries like Espace Badr and Atelier Bel Horizon are championing young artists like Lyès Hammadouche and Massinissa Selmani—whose politically charged drawings have shown at the Venice Biennale and Centre Pompidou. The 2024 Algiers Biennale, after years of false starts, finally happened with serious regional participation, focusing on decolonization and memory.

Algerian cinema remains one of Africa's most important. Karim Moussaoui's "Jusqu'à la fin des temps" and Sofia Djama's work continue the tradition of politically engaged filmmaking, while younger directors are emerging from the ESAA film school. The Oran Film Festival and Algiers' Panorama du Cinéma Algérien are crucial showcases, though funding remains precarious. Netflix's arrival has created opportunities, but also tensions about commercialization versus artistic integrity.

Raï music—Algeria's gift to world music—has had a fascinating 2024-25. While old guard artists like Khaled remain respected, new generation raï-rap fusion artists are dominating. Soolking, the Paris-based Algerian rapper, is massive, blending raï samples with trap beats. L'Algérino and Cheb Nadir represent different strains of contemporary Algerian music reaching global audiences. The Oran International Festival of Raï, held annually, celebrated its latest edition in 2024 with sold-out shows mixing traditional and contemporary acts.

Algeria has seven UNESCO World Heritage Sites, including the stunning Casbah of Algiers, the Roman ruins of Djémila and Timgad, and the M'Zab Valley's fortified ksour. But preservation is in crisis—the Casbah is literally crumbling, with families living in increasingly dangerous conditions while bureaucracy stalls restoration. The government talks about cultural heritage while allowing priceless Ottoman-era structures to collapse.

Here's what frustrates me: Algeria has one of the most sophisticated cultural scenes in Africa, with serious intellectual traditions, world-class filmmakers, and a music scene that influences global pop. But between political instability, funding chaos, and diaspora brain drain, so much talent ends up in Paris or Montreal. Still, the artists who stay are producing fearless work about identity, memory, and what it means to be Algerian in 2025.`,
    issues: [
      "Algiers Biennale revival focusing on decolonization themes (2024)",
      "Raï music evolution with new generation raï-rap fusion artists",
      "UNESCO heritage sites deteriorating amid funding crisis",
      "Contemporary artists showing at Venice Biennale and international venues",
      "Film industry balancing political engagement with commercial pressures"
    ]
  },
  'Angola': {
    summary: `Angola's arts scene is finally emerging from decades of civil war darkness, and what's bubbling up is raw, urgent, and totally electric. Luanda has become one of Africa's most exciting—if chaotic—cultural capitals, fueled by oil money, a massive young population, and artists determined to define post-war Angolan identity on their own terms.

The contemporary art scene is centered on Luanda's rapidly developing gallery infrastructure. The Sindika Dokolo Foundation, before its founder's tragic death in 2020, amassed Africa's largest collection of contemporary art, much of it by Angolan artists. His widow, Isabel dos Santos, remains controversial, but the collection's influence persists. Artists like Nástio Mosquito—whose provocative video and performance work has shown at the Venice Biennale and Tate Modern—and sculptor António Ole are Angola's international cultural ambassadors. Kiluanji Kia Henda's photography and installations, which interrogate colonial history and utopian dreams, have become fixtures at major biennials.

The National Museum of Anthropology in Luanda reopened in 2022 after extensive renovations, finally providing proper context for Angola's diverse ethnic cultures—Ovimbundu, Mbundu, Bakongo, and others. But Angola's museum infrastructure remains thin; much of the country's colonial-era artifacts remain in Portuguese institutions, a source of ongoing tension.

Angolan cinema had a remarkable 2024. The Luanda International Film Festival (LIFF) attracted filmmakers from across Lusophone Africa, while directors like Zézé Gamboa and newcomer Dulce Amistad are telling Angolan stories without the war trauma that dominated earlier films. There's a generational shift happening—younger directors want to explore contemporary Luanda's contradictions: extreme wealth and poverty, Chinese investment reshaping the city, youth culture navigating tradition and globalization.

Music is where Angola absolutely dominates. Kuduro—the frenetic electronic dance music born in Luanda's musseques (slums)—has gone global, influencing everything from Portuguese pop to Baltimore club music. C4 Pedro, Anselmo Ralph, and Yola Semedo represent the slicker kizomba and semba styles that soundtrack Lusophone weddings worldwide. But it's artists like Puto Português and the Batida project that are pushing Angolan music into genuinely new territories, mixing traditional rhythms with electronic production.

Angola's UNESCO World Heritage Site, the Mbanza Kongo ruins, represents the capital of the ancient Kongo Kingdom. It's symbolically vital—proof of sophisticated pre-colonial African civilization—but preservation funding is limited, and the site sees minimal international tourism.

What's complicated about Angola's cultural boom is how it's funded. Oil money built the galleries, financed the films, and sponsors the festivals. But that same extractive economy has created massive inequality, and many artists are wrestling with complicity. Still, there's undeniable energy here—a sense that Angolan culture is finally being defined by Angolans, not war, not colonialism, not outsiders. It's messy, contradictory, and absolutely worth watching.`,
    issues: [
      "Luanda emerging as major African contemporary art hub",
      "Kuduro and kizomba music achieving global influence",
      "Post-war cinema exploring contemporary Angolan identity",
      "Oil money funding cultural infrastructure amid inequality debates",
      "Mbanza Kongo UNESCO site preservation challenges"
    ]
  },
  'Argentina': {
    summary: `Buenos Aires never stopped being one of the great cultural capitals, but 2024-25 has been particularly wild—and I mean that in both the best and worst ways possible. The Milei government's brutal austerity has gutted arts funding, and yet the city's creative energy feels almost defiant, like everyone's determined to prove culture can survive even when the state abandons it.

Start with visual arts. MALBA just opened a massive Adriana Lestido photography retrospective that's drawing international attention—her haunting images of Argentine women, prisoners, and mothers documenting dictatorship-era disappeared have never felt more relevant. The Museo Nacional de Bellas Artes showcased Xul Solar's mystical paintings in a major 2024 exhibition, while contemporary galleries like Constitución and Ruth Benzacar are championing young artists like Nicanor Aráoz and Sofía Bohtlingk, whose installations interrogate gender, memory, and Argentine identity.

Teatro Colón—one of the world's greatest opera houses—is doing sold-out runs of a radical new tango-opera hybrid that has the purists absolutely losing their minds. It's tango meets avant-garde composition, and it shouldn't work but it absolutely does. The theatre narrowly avoided funding cuts in 2024, saved by massive public outcry. Meanwhile, the San Martín Theatre complex continues producing innovative work despite budget slashes, including a stunning adaptation of Borges' stories that played to packed houses.

Argentine cinema is in a weird, precarious spot. Directors like Lucrecia Martel still command respect at Cannes, and films like "Argentina, 1985" (about the junta trials) won international acclaim and an Oscar nomination. Santiago Mitre's "El Robo del Siglo" was Argentina's 2024 Oscar submission. But INCAA, the National Film Institute, has seen its budget decimated under Milei—film production is down, and many directors are seeking international co-productions or moving abroad. The Mar del Plata Film Festival survived its 2024 edition, but organizers are worried about 2025.

Music remains vital. Trap and urban music dominate youth culture—artists like Duki, Bizarrap, and Trueno are massive across Latin America. But traditional folklore and rock nacional endure. Fito Páez released a new album in 2024 that topped charts, proving the old guard still resonates. The Buenos Aires Jazz Festival and the indie-focused Primavera Sound Buenos Aires brought international acts despite economic chaos.

Argentina has eleven UNESCO World Heritage Sites, including the stunning Iguazú Falls, the Jesuit missions of Córdoba, and Quebrada de Humahuaca. These sites remain relatively well-maintained, though tourism infrastructure is suffering from broader economic crisis.

Here's what kills me: Argentina has extraordinary artistic institutions, world-class talent, and a population that genuinely cares about culture. But Milei's government sees arts funding as expendable. The result is artists scrambling for survival, institutions operating on fumes, and an entire cultural ecosystem under threat. Yet somehow, the work continues—angrier, more urgent, more necessary than ever.`,
    issues: [
      "Milei austerity decimating film institute and arts funding",
      "MALBA and major museums mounting significant exhibitions despite cuts",
      "Teatro Colón's tango-opera innovation challenging purists",
      "Argentine cinema seeking international co-productions amid crisis",
      "Urban music boom with artists like Bizarrap gaining global reach"
    ]
  },
  'Armenia': {
    summary: `Armenia's cultural scene is having this fascinating moment where ancient heritage and fierce contemporary ambition are colliding in the most wonderful ways. Yerevan isn't trying to be the next Berlin or Istanbul—it's carving out its own identity, and that confidence is infectious.

The Cafesjian Center for the Arts, with its massive cascade staircase covered in contemporary sculptures, has become Yerevan's cultural anchor. The National Gallery holds one of the world's significant collections of Armenian art, but it's the newer spaces making waves. Dalan Art Gallery, established in 2011, showcases 26 contemporary artists, while Two Arcs Art Space (founded 2020) by artist Anna Arutyunyan is championing affordable contemporary work. The Armenian Center for Contemporary Experimental Art (ACCEA) hosts everything from avant-garde exhibitions to theater and the annual alternative art festival—it's where the real experimental energy lives.

The Armenia Art Fair has become crucial for connecting diaspora artists with the homeland scene, bringing international curators and collectors to assess Armenian modern art achievements. What's compelling is how contemporary artists are wrestling with the 2020 Artsakh war trauma and Armenian identity in the post-Soviet space—the work is raw, political, and uncompromising.

Music is where Armenia punches way above its weight. The Golden Apricot International Film Festival (celebrating its 20th edition) brings auteur cinema to Yerevan every July—it's become a serious regional player for art house film. But music is the soul here. The duduk (that haunting double-reed instrument made from apricot wood) is UNESCO-recognized intangible heritage, and contemporary musicians are doing extraordinary things with traditional forms. The Yerevan Music Night brings Charles Aznavour Square alive with concerts spanning genres. The High Fest in October—an international performing arts festival hitting both Yerevan and Gyumri—features contemporary dance, theater, and comedy that's genuinely adventurous.

Armenia's three UNESCO World Heritage Sites are stunning: the Cathedral and Churches of Echmiatsin (possibly the world's oldest cathedral, 4th century), the Monasteries of Haghpat and Sanahin, and the partially cave-carved Geghard Monastery. Lavash bread-making is also UNESCO-protected intangible heritage—you'll see it prepared at GUM Market in Yerevan.

Here's what strikes me: Armenia's cultural confidence comes from being one of the world's oldest Christian civilizations, but there's zero complacency. Young artists and musicians are creating work that's distinctly Armenian but absolutely contemporary. The diaspora connection means ideas and funding flow in, but the cultural authority firmly sits in Yerevan. It's a small scene, but it's serious, and it deserves way more international attention than it gets.`,
    issues: [
      "Contemporary art grappling with 2020 Artsakh war trauma",
      "Golden Apricot Film Festival marking 20 years as regional art house hub",
      "Duduk music and traditional forms evolving with contemporary artists",
      "High Fest bringing international performing arts to Yerevan and Gyumri",
      "Diaspora-homeland artistic exchange shaping cultural identity"
    ]
  },
  'Australia': {
    summary: `Australian culture in 2024-25 is absolutely on fire, and I'm not talking about the bushfires (though climate is everywhere in the art). The country's finally—finally—centering First Nations voices in major institutions, and the result is some of the most important contemporary art being made anywhere right now.

Start with the seismic shift: Archie Moore, a Kamilaroi and Bigambul artist, won the Golden Lion for Best National Participation at the 2024 Venice Biennale. That's not just a win for Moore—it's Australian art announcing it's done being Europe's colonial outpost. The 24th Biennale of Sydney, titled "Ten Thousand Suns," ran March-June 2024 across the Art Gallery of NSW, MCA, and the restored White Bay Power Station—88 artists from 47 countries in the festival's 50th anniversary year. For the first time, Sydney, Melbourne, and Adelaide coordinated biennials to create the "Art Grand Tour," and it actually worked.

First Nations art is ascendig globally. "The Stars We Do Not See" premieres at Washington's National Gallery in October 2025—the largest exhibition of Aboriginal and Torres Strait Islander art ever presented internationally, touring through 2028. The Australian government poured $38 million into Indigenous Visual Arts Industry Support, funding 83 First Nations-owned art centres and organizations. New ICIP legislation is being developed to protect Indigenous Cultural and Intellectual Property. The National Gallery of Australia holds over 7,500 Aboriginal and Torres Strait Islander works—the world's largest collection—and launched its Innovate RAP in 2024.

Film and performing arts are thriving despite funding pressures. AACTA Awards moved to the Gold Coast through 2028, expanding with new music categories (Best Original Song, Best Soundtrack). PHOTO 2024 in Melbourne featured Nan Goldin and Malick Sidibé alongside Australian talents. Sydney Contemporary, Melbourne Art Fair, and commercial galleries like Roslyn Oxley9 (representing Tracey Moffatt, Patricia Piccinini, Bill Henson) are championing artists showing globally.

Australia has 20 UNESCO World Heritage Sites—including Kakadu, the Great Barrier Reef, and Sydney Opera House—but climate change threatens several. The performing arts scene is robust: Sydney Opera House programming remains world-class, while experimental companies push boundaries. Music festivals faced a rough 2024 with several cancellations, but Splendour in the Grass and Falls Festival endure.

What's exciting is the confidence. Australian artists aren't looking to London or New York for validation anymore—they're making work rooted in this place, this landscape, these 65,000+ years of First Nations cultural continuity. The next Dhaka Art Summit is 2026, and Australian artists will be there. The cultural cringe is dead. About time.`,
    issues: [
      "Archie Moore's Venice Biennale Golden Lion marking global recognition",
      "First Nations art achieving unprecedented international exhibition scale",
      "$38M government investment in Indigenous art centres and ICIP protection",
      "Sydney-Melbourne-Adelaide Art Grand Tour coordinating major biennials",
      "AACTA expanding music categories and relocating to Gold Coast"
    ]
  },
  'Austria': {
    summary: `Vienna remains one of the great cultural capitals—and yes, I know that sounds like a cliché, but when you've got the Vienna Philharmonic's New Year's Concert broadcasting to 50 million viewers worldwide and museums like Mumok and Albertina Modern mounting genuinely adventurous exhibitions, the cliché holds. What's interesting about Austria in 2024-25 is how it's navigating tradition versus contemporary ambition.

Mumok (Museum of Modern Art Ludwig Foundation) is one of Europe's largest contemporary art museums, with 10,000 works including major Warhol, Picasso, Beuys, and Richter pieces. But the 2025 programming is what excites me: "The World of Tomorrow Will Have Been Another Present" features five contemporary artists (Nikita Kadan, Barbara Kapusta, Frida Orupabo, Lisl Ponger, Anita Witek) in dialogue with classical modernism. "Mapping the 60s" runs through May 2026. Albertina Modern—opened 2020 with 60,000 works by 5,000 artists—is showing Damien Hirst drawings (world premiere) and Marina Abramović (through March 2026). The "Gothic Modern" exhibition (September 2025) puts Munch and van Gogh beside late Middle Ages works, examining medieval influences on modernism.

The Salzburg Festival (July-August annually) remains one of the world's most important arts events—the 2025 edition features five Vienna Philharmonic concerts conducted by Nelsons, Muti, and Nézet-Séguin. The Vienna Film Festival at Rathausplatz (June 28-August 31, 2025) offers free opera and concert film screenings. The Summer Night Concert at Schönbrunn Palace—a UNESCO World Heritage Site—is free and attracts thousands. Vienna's MuseumsQuartier opened WAM (Vienna Actionism Museum) in March 2024, dedicated to that wild 1960s performance art movement.

Austria has 12 UNESCO World Heritage Sites including Schönbrunn Palace, Salzburg's historic centre, and Hallstatt. The Viennese waltz itself is UNESCO intangible heritage (recognized 2017). But here's the tension: Austria's arts infrastructure is spectacular, but it's largely state-funded and deeply traditional. Contemporary art exists in these incredible spaces, but there's always this undertone of needing to prove worthiness against Mozart and Klimt.

Music remains central—Vienna isn't called the Musical Capital of Europe for nothing. But beyond the Philharmonic and State Opera, there's less risk-taking than you'd expect from a city this size and wealthy. The contemporary art scene is sophisticated, the film festivals are serious, but Austria sometimes feels more like a curator of past genius than a generator of future movements. Still, when the curatorial choices are this smart and the institutions this resourced, maybe that's enough.`,
    issues: [
      "Mumok and Albertina Modern mounting major contemporary exhibitions",
      "Salzburg Festival and Vienna Philharmonic maintaining global prestige",
      "Vienna Actionism Museum opening documenting radical 1960s performance art",
      "UNESCO heritage sites balancing preservation with contemporary use",
      "State-funded arts navigating tradition versus experimental contemporary work"
    ]
  },
  'Azerbaijan': {
    summary: `Baku's contemporary art scene is one of the most fascinating cultural experiments happening right now—and I mean that in both the exciting and complicated ways. This is a petro-state using oil money to build serious cultural infrastructure, and the result is genuinely ambitious institutions sitting alongside very real questions about freedom and funding.

YARAT Contemporary Art Centre, founded in 2011 by artist Aida Mahmudova, is the driving force. Located in a converted naval warehouse, YARAT runs multiple programs: the main space, YAY Gallery in Baku's Old Town (Icherisheher) for emerging artists, ARTIM, and the annual Baku Public Art Festival bringing Azerbaijani artists to city streets. The Heydar Aliyev Center (that Zaha Hadid building that photographs like a spaceship) and Baku Museum of Modern Art anchor the institutional scene. Commercial galleries like Q Gallery, Gazelli Art House, and YAY provide market infrastructure. ArtFacts lists Baku as having two museums, six platforms, and four foundations exhibiting contemporary art—impressive for a city this size.

The mugham music tradition (UNESCO intangible heritage) is having a renaissance. The International Mugham Center hosts the biennial "World of Mugham" festival—the 6th edition ran June 2024 across Baku, Aghjabadi, and newly reclaimed Shusha. Azerbaijan birthed jazz mugham, fusing traditional music with jazz, and the Baku International Jazz Festival and Gabala Music Festival feature artists from 15+ countries spanning jazz to classical to mugham. The genre combines singing, poetry, and improvisation—it's complex, beautiful, and deeply Azerbaijani.

Azerbaijan's five UNESCO World Heritage Sites tell the identity story: the Walled City of Baku with Shirvanshah's Palace and Maiden Tower (12th-15th centuries), Gobustan rock art, Sheki's Khan's Palace, the Hyrcanian Forests, and the 2023-added Khinalig cultural landscape. These aren't just tourist sites—they're cultural anchors. Baku was declared 2009 capital of Islamic culture.

Here's the complication: This cultural boom is funded by oil revenues in an authoritarian state. YARAT operates with significant independence and genuine curatorial ambition, but artistic freedom has limits. Many artists navigate these constraints carefully. The Azerbaijani art scene is sophisticated, internationally connected, and producing serious work—but it exists within very real political boundaries. Still, what's being built here matters. The question is whether this infrastructure will outlast the oil money and political control.`,
    issues: [
      "YARAT Contemporary Art Centre building sophisticated gallery infrastructure",
      "Mugham music renaissance with biennial international festivals",
      "Oil revenue funding major cultural institutions amid artistic freedom questions",
      "UNESCO heritage sites anchoring Azerbaijani cultural identity",
      "Baku Public Art Festival bringing contemporary work to city streets"
    ]
  },
  'Bahamas': {
    summary: `Nassau's art scene has quietly become one of the Caribbean's most vital, and it's about time people paid attention. The National Art Gallery of The Bahamas isn't just preserving history—it's actively shaping contemporary Bahamian art, and the results are genuinely exciting.

The NAGB, with over 500 works in its permanent collection spanning historic and contemporary Bahamian art, appointed Maelynn Ford as executive director in January 2025—a signal of institutional ambition. Four gallery spaces include the Permanent Exhibition Gallery, Project Space, and two temporary exhibition spaces mounting adventurous programming. The D'Aguilar Art Foundation holds 450 works spanning fifty years, offering crucial historical context for how contemporary Bahamian art evolved. Popopstudios runs one of the Caribbean's most established residency programs, hosting local and international artists working and exhibiting on-site. The Current Gallery at Baha Mar launched HEXAGON in 2024—an artist initiative bringing exceptional talent through exhibitions, lectures, and workshops. Hillside House, curated by Antonius Roberts, exhibits contemporary Bahamian work for sale.

Film has the Bahamas International Film Festival every December—screenings, panels, galas attracting Hollywood names (Nicolas Cage, Sean Connery) while providing platforms for emerging directors. It's world-renowned and punches above the country's weight.

But music is where Bahamas culture absolutely dominates. Junkanoo—the national festival—explodes on Boxing Day (December 26) and New Year's Day (January 1) with parades starting at 2 AM. Bay Street in Downtown Nassau becomes this wild spectacle of "rushers" in vibrant handmade costumes, dancing to cowbells, goatskin drums, whistles, and brass. Groups compete fiercely for Best Music, Best Costume, Best Overall Performance. Junkanoo is UNESCO-recognized, retaining African elements through indigenous music, performance, storytelling, and craftsmanship. The Junkanoo Summer Festival in July offers a more tourist-friendly version, but the real deal is the winter parades—raw, competitive, spectacular.

The Bahamas has zero UNESCO World Heritage Sites (a genuine surprise given the historic significance), but Junkanoo's UNESCO intangible heritage status matters more culturally anyway. What's happening in Nassau is artists defining Bahamian identity on their own terms—not as tourist backdrop, but as serious artistic practice. The gallery scene has grown exponentially in the last decade, and the energy is palpable.`,
    issues: [
      "National Art Gallery appointing new director signaling institutional ambition",
      "Popopstudios residency program connecting local and international artists",
      "Junkanoo UNESCO recognition anchoring Bahamian cultural identity",
      "Bahamas International Film Festival attracting Hollywood while supporting emerging voices",
      "Contemporary gallery scene expanding beyond tourist art market"
    ]
  },
  'Bahrain': {
    summary: `Bahrain's contemporary art scene just made a major leap, and it's centered on one man's vision and a converted shopping mall. The Art Station, opened February 2024 in Muharraq, is housed in a gorgeous 1970s ivory and sky-blue former mall. Founded by Shaikh Rashid bin Khalifa Al Khalifa—artist, philanthropist, royal family member, and "godfather" of contemporary art in Bahrain—it features subsidized split-level studios for artists around a central courtyard. This is the kind of cultural infrastructure that can genuinely transform a scene.

Manama's established galleries provide crucial support. Albareh Art Gallery in Adliya has spent over a decade showcasing contemporary and historical work from the MENASA region (Middle East, North Africa, South Asia)—both established masters and emerging talents. Al Riwaq Arts Space, one of Bahrain's earliest non-profit contemporary art organizations, hosts in-gallery dinners, open mics, kids' art clubs, exhibitions, and workshops with regular open calls. La Fontaine Art Centre, Bahrain's first private museum, mounts year-round exhibitions and film screening nights. Bait Al Salmaniya serves as a cultural hub with workshops, exhibitions, and artist talks.

Museums anchor the heritage scene. The Bahrain National Museum features archaeology, pearling, natural history, plus contemporary art exhibitions and galleries for local artists. A recent temporary exhibition on Japanese manufacturing and art showed the programming range. Beit Al Quran completed renovations and reopened November 2024. The Bin Matar House, run by Sheikh Ebrahim bin Mohammed Al Khalifa Centre for Culture and Research, showcases local and international artists year-round.

Bahrain has three UNESCO World Heritage Sites: the Bahrain Fort (Qal'at al-Bahrain), the Pearling Path in Muharraq, and the Dilmun Burial Mounds—all cultural sites reflecting the island's ancient trading civilization heritage. The Pearling Path specifically documents Bahrain's economy and cultural identity before oil.

What's compelling about Bahrain's art scene is the scale—it's small enough that individual initiatives (like The Art Station) can genuinely shift the entire ecosystem. Shaikh Rashid's commitment provides artists with affordable workspace, something that's increasingly rare even in wealthier art capitals. The MENASA regional focus positions Bahrain as a cultural bridge. It's not Dubai's spectacle or Abu Dhabi's Louvre franchise—it's something more intimate and artist-centered, which might actually be more sustainable.`,
    issues: [
      "The Art Station opening providing subsidized studios for contemporary artists",
      "Shaikh Rashid bin Khalifa Al Khalifa's patronage shaping Bahraini art infrastructure",
      "Albareh and Al Riwaq galleries championing MENASA regional artists",
      "UNESCO Pearling Path documenting pre-oil cultural and economic identity",
      "Small-scale scene allowing individual initiatives to transform ecosystem"
    ]
  },
  'Bangladesh': {
    summary: `Dhaka's art scene is one of South Asia's most underrated, and that's criminal because what's happening here—especially around the Dhaka Art Summit—is genuinely world-class. This isn't provincial; it's sophisticated, politically engaged, and punching way above Bangladesh's economic weight.

The Dhaka Art Summit (DAS), organized biennially by the Samdani Art Foundation since 2012, has evolved into one of the largest international contemporary art gatherings in South Asia. The last edition (DAS 2023, February 3-11) was massive; the 7th edition is scheduled for 2026. This is a non-commercial research and exhibition platform for South Asian art and architecture, and it matters internationally. Major galleries anchor the infrastructure: Bengal Gallery of Fine Arts (established 2000) promotes Bangladeshi art internationally; Bengal Art Lounge (2011, Gulshan) platforms local and international artists; Dhaka Art Centre (2010, Dhanmondi) offers six large galleries, an auditorium, and workshop spaces as a non-profit. Gallery 21 (revived 2013) and La Galerie at Alliance Française (20+ exhibitions yearly) add depth. ShohorNama Dhaka Episode II, inaugurated February 2025 at Bengal Shilpalay, collaborates with visual artists, architects, artisans, and University of Dhaka academics.

Film is vital. The 23rd Dhaka International Film Festival ran January 11-19, 2025, with 253 films from 74 countries (including 71 Bangladeshi films). DIFF, established 1992, went biennial in 1995, then returned to annual in 2017. The 24th edition (January 10-18, 2026) expects 200 films from 60 countries. Raihan Rafi's "Lion," featuring Kolkata's Jeet and Bangladesh's Sariful Razz, is highly anticipated.

Music in 2025 started strong: Bappa Mazumder performed January 3, while Pakistani act Kaavish and Indian singer Sunidhi Chauhan performed January 10-11 at "Dhaka Dreams" with Arnob, Armeen Musa, and Level Five. The musical fraternity's "Get Up, Stand Up" movement against authoritarianism in 2024 showed culture's political power.

Bangladesh has three UNESCO World Heritage Sites—the Mosque City of Bagerhat, the Buddhist Vihara at Paharpur, and the Sundarbans mangrove forest (natural site). What strikes me about Bangladesh's cultural scene is the resilience—artists creating serious work despite political instability, underfunding, and natural disasters. The Dhaka Art Summit alone proves Bangladesh belongs in any conversation about South Asian contemporary art.`,
    issues: [
      "Dhaka Art Summit establishing Bangladesh as South Asian art hub",
      "23rd International Film Festival screening 253 films from 74 countries",
      "Bengal Foundation galleries promoting Bangladeshi art internationally",
      "Musicians forming 'Get Up, Stand Up' movement against authoritarianism",
      "Contemporary art scene thriving despite political and economic challenges"
    ]
  },
  'Barbados': {
    summary: `Barbadian culture is having its global moment—and it's not just because Rihanna showed up at Crop Over 2024 in a bedazzled winged costume (though that didn't hurt). Bridgetown's art scene is maturing beyond craft markets and tourist paintings into something genuinely sophisticated, and the music culture has always been world-class.

The National Gallery of Barbados in Bridgetown serves as the portal into Bajan artistic identity, with collections spanning centuries—established masters and emerging talents, paintings, sculptures, mixed media reflecting island history and contemporary spirit. Queen's Park Gallery (currently at Pelican Village) platforms iconic Barbadian artists while supporting up-and-comers. The Barbados Arts Council Gallery at Pelican Craft Centre mixes traditional and contemporary work—post-impressionist paintings from Everick Lynton and Neville Legall alongside new wave contemporary expression from Rasheed Boodhoo and Joanna Crichlow. On the Wall Art Gallery (locations at Limegrove, Champers Restaurant, Earthworks Complex) showcases vibrant Barbadian creators from post-impressionist to abstract modern. The Gallery of Caribbean Art in Speightstown is the only gallery committed to promoting art from the entire Caribbean—Haiti, Cuba, Jamaica, Barbados, Guyana, and beyond.

CaFA Fair Barbados 2025 (15th edition, March 5-9 at Pelican House in Bridgetown) is the major event: visual art, fashion, film, performance, presentations, workshops highlighting 35+ artists and galleries representing 12 Caribbean nations plus Ghana, Senegal, and the USA. This positions Barbados as a Caribbean art hub.

But Crop Over is the cultural soul. This three-month festival (historically celebrating sugarcane harvest, revived 1974) runs through summer, culminating in the Grand Kadooment parade on August Bank Holiday. It's soca and calypso competitions, parties, art shows, street fairs, craft markets—and Rihanna strutting in Lauren Austin's custom bedazzled costume with massive orange-pink-yellow wings celebrating the festival's 50th anniversary in 2024. Crop Over isn't just tourism; it keeps Bajan folk culture alive while evolving with contemporary music and design.

Barbados has one UNESCO World Heritage Site: Historic Bridgetown and its Garrison—a well-preserved example of British colonial architecture and military planning. What's exciting is Barbados leveraging culture for regional leadership. The gallery scene is small but serious, CaFA Fair positions the island as Caribbean art center, and Crop Over's international profile (helped by Rihanna's devotion) showcases Bajan creativity globally.`,
    issues: [
      "CaFA Fair Barbados positioning island as Caribbean art hub (2025)",
      "National Gallery and Pelican Village galleries maturing beyond tourist art",
      "Crop Over Festival maintaining cultural authenticity while gaining global profile",
      "Rihanna's 2024 return celebrating 50th anniversary in custom bedazzled costume",
      "Gallery of Caribbean Art promoting pan-Caribbean artistic exchange"
    ]
  },
}

async function main() {
  console.log('🎨 Starting Culture & Arts Category Summary Generation')
  console.log('='.repeat(80))
  console.log(`Countries: ${COUNTRIES.length}`)
  console.log('Category: culture')
  console.log('Voice: Jerry Saltz / Mark Kermode')
  console.log('Length: 2,500-3,500 characters')
  console.log('='.repeat(80))
  console.log('')

  const results: { country: string; charCount: number; success: boolean }[] = []

  for (const country of COUNTRIES) {
    console.log(`\n${'='.repeat(80)}`)
    console.log(`🎭 Processing: ${country.name} (${country.code})`)
    console.log('='.repeat(80))

    try {
      const data = cultureSummaries[country.name]

      if (!data) {
        console.log(`  ⚠️  No culture summary data for ${country.name} - skipping`)
        results.push({ country: country.name, charCount: 0, success: false })
        continue
      }

      const { summary, issues } = data
      const charCount = summary.length

      console.log(`  ✅ Summary ready: ${charCount} characters`)
      console.log(`  📋 Issues: ${issues.length}`)

      // Validate length
      if (charCount < 2500) {
        console.log(`  ⚠️  Warning: Summary is under 2,500 characters (${charCount})`)
      } else if (charCount > 3500) {
        console.log(`  ⚠️  Warning: Summary exceeds 3,500 characters (${charCount})`)
      }

      // Save to database
      await prisma.locationSummary.create({
        data: {
          id: `${country.code}-culture`,
          name: country.name,
          type: 'country',
          country: country.code,
          category: 'culture',
          lat: country.lat,
          lng: country.lng,
          summary: summary,
          issues: JSON.stringify(issues),
          topStories: '[]',
          storyCount: 0,
        },
      })

      console.log(`  💾 Saved to database with ID: ${country.code}-culture`)

      results.push({
        country: country.name,
        charCount,
        success: true
      })

    } catch (error) {
      console.error(`  ❌ Error processing ${country.name}:`, error)
      results.push({
        country: country.name,
        charCount: 0,
        success: false
      })
    }
  }

  // Final report
  console.log('\n\n' + '='.repeat(80))
  console.log('📊 GENERATION COMPLETE - FINAL REPORT')
  console.log('='.repeat(80))
  console.log('')

  const successful = results.filter(r => r.success)
  const failed = results.filter(r => !r.success)

  console.log(`✅ Successful: ${successful.length}/${COUNTRIES.length}`)
  console.log(`❌ Failed: ${failed.length}/${COUNTRIES.length}`)
  console.log('')

  if (successful.length > 0) {
    console.log('CHARACTER COUNTS:')
    successful.forEach(r => {
      const status = r.charCount >= 2500 && r.charCount <= 3500 ? '✓' : '⚠'
      console.log(`  ${status} ${r.country.padEnd(20)} ${r.charCount} characters`)
    })
  }

  if (failed.length > 0) {
    console.log('\nFAILED/SKIPPED COUNTRIES:')
    failed.forEach(r => {
      console.log(`  ❌ ${r.country}`)
    })
  }

  console.log('\n' + '='.repeat(80))
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
