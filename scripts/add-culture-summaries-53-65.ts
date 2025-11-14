import 'dotenv/config'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const CULTURE_SUMMARIES = [
  {
    name: 'Greece',
    type: 'country',
    country: 'GR',
    lat: 39.0742,
    lng: 21.8243,
    category: 'culture',
    summary: `Athens is having an art moment that nobody saw coming—not this big, not this fast, and certainly not with Gagosian and Michael Werner setting up shop in Kolonaki like it's the new Paris. Seven years after documenta 14 put the city on the map, the contemporary scene is absolutely thriving.

Here's what's actually happening: Art Athina 2024 just wrapped its 31st edition with 71 galleries at Zappeion, focusing on ecology and sustainability with the kind of earnest intention that would make Jerry Saltz roll his eyes—but the work was good. Really good. The Museum of Cycladic Art is showing Marlene Dumas in dialogue with archaeological artifacts through September 2025, which is the kind of curatorial risk that pays off when you've got an artist who knows how to make 2,000-year-old objects feel urgent. The Basil & Elise Goulandris Foundation just finished a massive Takis retrospective, celebrating the kinetic sculptor who made magnetism sexy before anyone knew what that meant.

The gallery scene tells the real story. Bernier/Eliades has been around since 1977, introducing Arte Povera and minimalism to Greece when nobody was asking for it. Gagosian opened in 2009 and upgraded to a bigger villa in 2020—you don't expand unless the money's there. Michael Werner inaugurated its Athens space in May 2024, which is a serious vote of confidence. The islands are exploding with residencies—Alkinois on Hydra brought in Faye Wei Wei and Marco Villard, while DESTE featured George Condo's "The Mad and the Lonely." It's not just Athens anymore; it's archipelago-wide.

Film is messier but equally vital. Thessaloniki International Film Festival hit its 66th edition in October-November 2025, still the Balkans' premier showcase for emerging filmmakers. Athens International Film Festival is prepping its 31st edition with submissions closing July 2025, while Greece International Film Festival just wrapped its 5th edition in March 2025 with 29 films from 20 countries. The infrastructure's there, the audiences show up, but Greek cinema lacks the funding and international distribution muscle to break through like it did in the Theo Angelopoulos era.

Music festivals are where the energy is. Release Athens brings Fontaines D.C., The Prodigy, Morrissey, and Kylie to the open-air Plateia Nerou by the sea. Plisskën earned consecutive Greener Festival Awards for its techno-indie-electronic mix. Primer festival pulled Armin van Buuren and Alesso to the Olympic Sports Complex. It's not cutting-edge programming—these are touring acts hitting every European festival—but the appetite is massive and the production quality rivals Western Europe.

The Ministry of Culture's "Greece together for Culture 2024" program is genuinely inspired: 70 cultural productions in 70 archaeological sites across 12 regions. Theatre, dance, and concerts in ancient theatres, castles, monasteries. The Athens Epidaurus Festival celebrated 68 years of performances in one of the world's most acoustically perfect venues. UNESCO added four Greek traditions to its Intangible Cultural Heritage list in 2025, including shadow theater. European Heritage Days offered free entry to all state museums and sites in September 2025, and millions showed up.

The contradictions are real: Athens ranks as the world's top cultural heritage destination in 2025, yet contemporary artists struggle with funding and visibility. The ancient past dominates tourism marketing while the present fights for recognition. But this tension is productive—artists are responding to it, gallerists are betting on it, and international institutions are taking notice. Greece isn't just resting on Parthenon laurels anymore. It's building something new.`,
    issues: JSON.stringify([
      'Contemporary art boom with international galleries expanding in Athens',
      'Film festivals thriving but Greek cinema lacks funding and distribution',
      'Ministry of Culture activating archaeological sites for performing arts',
      'UNESCO heritage tourism dominance vs contemporary scene visibility',
      'Music festival growth attracting major international acts'
    ]),
    storyCount: 0
  },
  {
    name: 'Guatemala',
    type: 'country',
    country: 'GT',
    lat: 14.6349,
    lng: -90.5069,
    category: 'culture',
    summary: `Guatemala's cultural scene exists in the space between ancient Mayan grandeur and contemporary survival—and right now, that tension is producing some of the most interesting work in Central America, even if most of the world isn't watching.

Let's start with the UNESCO sites, because they matter: Tak'alik Ab'aj, inscribed in 2023, is one of the few preserved Mesoamerican transitional sites showing both Olmec and Mayan elements from the 9th century BC to the 10th century AC. Quirigua's intricately carved stelae are genuinely breathtaking—three-dimensional sculptures with detailed glyphic texts that make you understand why the Maya are considered master artists. These aren't tourist attractions; they're living cultural infrastructure. UNESCO is funding a "heritage guardians" training program through October 2026 with nearly $100,000, which is desperately needed as sites face climate and preservation challenges.

The contemporary art scene is small but vital. Galería Extra from Guatemala City represented at Liste Art Fair Basel 2025 with three artists exploring organic materials—that's a big deal for a country where gallery infrastructure barely exists. Artists like Jamie Denburg Habie are blending neuroscience and political ecologies in Antigua, while Andrea Monroy Palacios interrogates Guatemala's textile traditions and their role in identity. Adán Vallecillo combines sociology with visualization and has exhibited across America, Europe, and Asia. These artists are working without institutional support, without collectors, without the market mechanisms that prop up scenes in Mexico City or Buenos Aires. They're doing it anyway.

Film is where persistence meets reality. The ÍCARO Festival Internacional de Cine is opening its 28th edition in November 2025, produced by Casa Comal with support from the Ministry of Culture. It's Central America's premier film festival, showcasing work from Guatemala, Honduras, El Salvador, Nicaragua, Costa Rica, and Panama. Festival de Cine Antigua runs screenings through November 2025 and into early 2026, with an awards ceremony in February. The infrastructure exists, the festivals persist, but Guatemalan cinema lacks funding, distribution, and the political stability needed for sustained cultural production.

Here's the brutal truth: Guatemala's cultural institutions are under siege from the same corrupt networks strangling its democracy. The Ministry of Culture and Sports provides what funding exists, but it's negligible. There's no significant private patronage. Artists work day jobs. Filmmakers crowdfund. Musicians tour internationally because there's no domestic market.

And yet—the 2025 Guyana Folk Festival is celebrating 25 years of cultural preservation in the diaspora. Mayan textile traditions continue to evolve. The Museo de Arte Colonial in Guatemala City preserves 17th and 18th-century religious art in a colonial building that somehow survived earthquakes and civil war. This is culture as resistance, as survival, as refusal to disappear.

The next generation is watching. If Arévalo's anti-corruption crusade succeeds, cultural funding might follow. If it fails, artists will keep working in the margins, as they always have. Guatemala's culture doesn't need rescuing—it needs resources and recognition. The work is already extraordinary.`,
    issues: JSON.stringify([
      'UNESCO sites preservation with limited funding',
      'Contemporary artists gaining international recognition despite lack of infrastructure',
      'Film festivals persisting without adequate government support',
      'Mayan cultural heritage and textile traditions in evolution',
      'Political instability threatening cultural institutions'
    ]),
    storyCount: 0
  },
  {
    name: 'Guyana',
    type: 'country',
    country: 'GY',
    lat: 4.8604,
    lng: -58.9302,
    category: 'culture',
    summary: `Guyana's cultural scene lives in diaspora and returns home transformed—and in 2025, that circular migration is producing work that refuses to fit neat categories.

Suchitra Mattai, the Guyana-born Indian artist, had her largest exhibition to date in 2024: wall tapestries, found furniture, anthropomorphic sculptures from repurposed saris. Her family history as indentured laborers brought to Guyana from India informs every stitch, every assemblage. It's gorgeous, heartbreaking work that interrogates what it means when your identity is literally fabric—something worn, discarded, reclaimed. Mattai's based in the U.S. now, but the work is profoundly Guyanese: layered, hybrid, refusing simple narratives.

The Guyana Cultural Association in New York just hit 25 years of promoting Guyanese heritage with the Folk Festival, which is less nostalgia tourism and more living archive. The 2025 awards include prizes for Heritage Journalism and Music Education—categories that acknowledge culture needs infrastructure, not just sentiment. Festival areas span arts and craft, performing arts, music, STEM, drama, photography, video, and film. It's comprehensive because it has to be; there's no major cultural institution in Georgetown doing this work at scale.

Back home, Mashramani 2025 is being planned with pop-up concerts and competitions for calypso, soca, and chutney music. The deadline for submissions was December 31, 2024—no extensions, which tells you how seriously they're taking it. Mash is Georgetown's answer to Carnival, and 2025 promises to be "bigger, bolder," which probably means more elaborate costumes, larger sound systems, and the kind of street-level cultural production that happens when official institutions are absent or inadequate.

Sandra Brewster, the Toronto-based Guyanese-Canadian artist, was in conversation with Ohene Koama, curator of Guyana's National Gallery of Art at Castellani House, in September 2025. Castellani House is trying—it's the closest thing Guyana has to a serious contemporary art venue—but resources are thin and the audience is small. The diaspora conversation matters because that's where Guyanese artists build careers: Toronto, New York, London.

Aubrey Williams, the Guyanese artist who introduced distinct visual aspects to the Caribbean Artists Movement, made large-scale paintings vibrant with Amerindian imagery and Guyana's tropical landscape. His legacy is taught more abroad than at home, which is the persistent tragedy of postcolonial cultural production.

Film and music exist mostly in festival contexts: the Folk Festival showcases video and film, but there's no robust domestic film industry. Performing arts happen at community level—Georgetown has a performing arts scene centered around Carnival, but it's grassroots, underfunded, volunteer-driven.

Here's what's exciting: Guyana's oil boom is generating obscene wealth. If even a fraction flows to cultural infrastructure—a proper national museum, artist residencies, film production funds—the scene could explode. Right now, it's potential energy. Artists are working, audiences are there, but the institutional framework barely exists. Watch this space. When the money finally arrives, Guyana's culture won't need to live in diaspora anymore.`,
    issues: JSON.stringify([
      'Diaspora artists achieving international recognition',
      'Mashramani and Folk Festival as primary cultural platforms',
      'National Gallery struggling with limited resources',
      'Oil wealth not yet translating to cultural infrastructure',
      'Caribbean Artists Movement legacy underrepresented domestically'
    ]),
    storyCount: 0
  },
  {
    name: 'Haiti',
    type: 'country',
    country: 'HT',
    lat: 18.9712,
    lng: -72.2852,
    category: 'culture',
    summary: `Haiti is having a moment in the global art market that's decades overdue—and it's happening precisely when the country can least benefit from it, which is both maddening and somehow perfect.

"Spirit & Strength: Modern Art from Haiti" at the National Gallery of Art in Washington ran September 2024 through March 2025, featuring Rigaud Benoit, Hector Hyppolite, Philomé Obin, alongside contemporary powerhouses Myrlande Constant and Edouard Duval-Carrié. This is the exhibition Haitian art deserves: major institution, proper curatorial framing, acknowledgment that this work is foundational to Caribbean modernism. Benoit's auction prices have exploded—his top three results all came since October 2023, generating $117,075 in 2024 compared to $2,318 in 2018. The market is finally catching up.

In Haiti itself, the scene persists against impossible odds. El-Saieh Gallery in Port-au-Prince is one of Haiti's most pivotal institutions for modern and contemporary art, still operating while the country descends into gang violence and state collapse. Expressions Galerie d'Art in Pétion-Ville, established 1991, houses one of the largest collections of Haitian artwork. Villa Kalewès, a gingerbread mansion turned contemporary gallery, serves as an artist-owned space showing work the international market hasn't discovered yet. These galleries are acts of defiance.

Contemporary artists are pushing boundaries nobody outside Haiti seems to notice. Viktor El-Saieh merges Haitian mythologies with sci-fi settings and Modernist grids—it's visually arresting and conceptually sophisticated. Maksaens Denis manipulates documentary footage of daily Haitian life into colorful fractals overlaid with sculptural frames made from cut metal. Pascale Faublas experiments with batik printing, creating fuschia, white and black hearts with Vodou vèvè-inspired motifs. This is not "naïve" art or folkloric tourism—it's contemporary practice engaging global conversations.

Vodou culture remains central. The second annual Vodou festival in Gonaïves ran weekends through January 2025, hosting 16 Vodou groups from across Artibonite. It's ceremony, music, and a deliberate mission to redefine Vodou's global image beyond Hollywood voodoo stereotypes. RASANBLE! in the diaspora features folkloric dance, drumming, and the GODMAMA photo exhibition. Rara festival during Lenten season is street-level cultural production at its most vital—music, parades, community.

Film is emerging: the 10th Annual Haiti International Film Festival celebrates Haitian art and culture with submissions due May 2025. Haïti en Folie! in Montreal is a week-long festival with performances, conferences, film screenings, gastronomy. The infrastructure is fragile but persistent.

Here's the contradiction: Haitian art is booming internationally while Haiti itself is collapsing. Galerie Nader in the U.S. features Hyppolite and Obin; Art Basel Miami Beach 2024 spotlighted Haitian artists; museums are finally giving this work serious attention. But in Port-au-Prince, galleries operate under armed guard, artists flee when they can, and cultural production happens despite—not because of—conditions on the ground.

Haitian culture doesn't need saving. It needs security, infrastructure, and markets that benefit artists in Haiti, not just collectors abroad. The work has always been extraordinary. The world is finally noticing. Now what?`,
    issues: JSON.stringify([
      'International art market boom for Haitian modern and contemporary art',
      'Port-au-Prince galleries operating under extreme security challenges',
      'Vodou cultural festivals reclaiming narratives and traditions',
      'Contemporary artists engaging global discourse despite isolation',
      'Diaspora festivals sustaining cultural preservation'
    ]),
    storyCount: 0
  },
  {
    name: 'Honduras',
    type: 'country',
    country: 'HN',
    lat: 15.2,
    lng: -86.2419,
    category: 'culture',
    summary: `Honduras has one of the great archaeological treasures of the Americas—Copán's carved stelae commissioned by 16 powerful rulers between 400 and 800 CE are genuinely jaw-dropping—and a contemporary art scene that's only just beginning to figure out what to do with that legacy.

The Honduras National Gallery of Art in Tegucigalpa displays pre-Columbian ceramics and Mayan sculptures from Copán in a 350-year-old building, with eight galleries covering Honduran art history from Mayan works through 20th-century painters like Pablo Zelaya Sierra. The Sculpture Museum at Copán Ruins includes thousands of sculptures and a full-size replica of the Rosalila Temple. These institutions exist, they're functional, but they're starved for resources and international attention.

Contemporary Honduran art is caught between Euro-Western influence, indigenous elements, and Afro-Caribbean groups. By the 21st century, Honduras saw an artistic boom in murals closely related to political unrest—which makes sense when official institutions fail and artists take to the streets. The problem is documentation and visibility: this work is happening, but who's archiving it? Who's showing it internationally?

Film is regional, not national. The ÍCARO International Film Festival accepts Honduran shorts and features in fiction, documentary, animation, and experimental categories for its November 2025 Guatemala event. It's Central America's major platform, but it's not in Honduras. Latin American film festivals feature Honduran work, but there's no robust domestic festival infrastructure. Filmmaking happens despite, not because of, institutional support.

Music is where Honduras punches above its weight. Sunjam Festival brings international electronic DJs to Barra Vieja in Tela—professional programming, beach setting, genuinely competitive with regional festivals. But it's one event. Traditional festivals are mostly linked to religious events and indigenous culture celebrations, which are culturally significant but not necessarily pushing artistic boundaries.

Copán is the elephant in the room—or more accurately, the UNESCO World Heritage Site that overshadows everything else. It's a legitimate wonder: the Maya replicated nature's visible world through art with precision and ambition that still astonishes. The site draws tourists, generates revenue, anchors national identity. But it also creates a cultural bottleneck where contemporary artists are expected to reference or respond to Mayan heritage, which is both opportunity and burden.

Here's what Honduras needs: a major contemporary art museum in Tegucigalpa, a national film fund, artist residencies connecting Honduran artists with international networks, and critics who can contextualize the work beyond tourist brochure language. The National Gallery is trying, but one institution can't carry an entire country's cultural infrastructure.

The potential is obvious. Honduras has the historical foundation, the geographic diversity, the political urgency that generates powerful art. What it lacks is investment—financial and institutional. Artists are working, musicians are touring, muralists are painting. They're just doing it without the support systems that would amplify their work beyond borders. Fix that, and Honduras could surprise everyone. Ignore it, and the world will keep visiting Copán while missing the culture being created right now.`,
    issues: JSON.stringify([
      'Copán UNESCO site overshadowing contemporary cultural production',
      'Political murals emerging from social unrest',
      'National Gallery and museums operating with limited resources',
      'Regional film festivals more prominent than domestic infrastructure',
      'Electronic music festivals attracting international acts'
    ]),
    storyCount: 0
  },
  {
    name: 'Hungary',
    type: 'country',
    country: 'HU',
    lat: 47.1625,
    lng: 19.5033,
    category: 'culture',
    summary: `Budapest's art scene is thriving precisely because the state wants it dead—and that's the kind of perverse vitality that produces genuinely exciting work.

Budapest Contemporary just held its third edition in September 2024 at Bálna Budapest with over 40 galleries, including 30 Hungarian and 12 international exhibitors. In 2025, it's moving to an even larger space, which tells you the market is there despite—or maybe because of—government hostility. The Ludwig Museum (Museum of Contemporary Art) has Warhol and Oldenburg in its collection. The Kunsthalle has showcased avant-garde since 1896. These institutions persist while state funding dries up and the government takes "hostile measures against art."

Here's the beautiful contradiction: Hungarian collectors established a "friends of contemporary art" committee pooling money to buy works for the Hungarian National Gallery collection, with each member allotted €10,000. When the state abandons culture, private money steps in. It's not ideal—it's precarious and excludes artists without collector backing—but it's happening.

Film is where Hungary still has international clout. CineFest awards include the Zukor and Pressburger prizes honoring Hungarian émigrés who shaped global cinema. The Budapest Independent Film Festival is running strong for 2025 with categories for documentary, feature, animation, and specifically Best Hungarian Film. Hungarian cinema has always been intellectually ambitious—Béla Tarr, Miklós Jancsó—and that tradition continues even as funding gets weaponized.

Music festivals are massive. Sziget runs August 11-15, 2025 in Budapest with rock and pop programming that rivals any European festival. JazzFest Budapest in mid-April spans concert halls, clubs, and public squares. Balaton Sound brings electronic music to the lake in July. Valley of Arts is Hungary's largest multi-genre festival—2000+ programs across three villages for 10 days, covering concerts, literary evenings, theatre, new circus, exhibitions, workshops. It's genuinely ambitious, and it's thriving.

Performing arts persist through venues like the Valley of Arts and Pécs Summer Theatre. The fact that these events continue at scale shows cultural demand that the state can't fully suppress, even when it wants to.

The Hungarian National Gallery and Museum of Fine Arts are hosting exhibitions through 2024-2025, though what they can show is increasingly constrained by political pressure. Zsófia Keresztes represented Hungary at the 2022 Venice Biennale with ornate sculptures covered in colorful tesserae—that's the caliber of artist Hungary produces when given space to work.

What's actually happening is a two-tier system: state-sanctioned culture that's increasingly conservative and propaganda-adjacent, and a thriving independent scene operating in galleries, festivals, and international platforms. Artists are leaving—brain drain is real—but those who stay are resourceful, networked, and defiant.

The next few years will determine whether Budapest's independent scene can sustain itself without state support or whether attrition wins. Right now, collectors are buying, galleries are expanding, festivals are selling out. The culture is stronger than the politics trying to kill it. But for how long? That's the question everyone's asking, and nobody wants to answer.`,
    issues: JSON.stringify([
      'State hostility to contemporary art spurring private collector activism',
      'Budapest Contemporary expanding despite government opposition',
      'Film festivals honoring Hungarian cinematic legacy',
      'Major music festivals thriving across multiple genres',
      'Two-tier cultural system: state-sanctioned vs independent scenes'
    ]),
    storyCount: 0
  },
  {
    name: 'Iceland',
    type: 'country',
    country: 'IS',
    lat: 64.9631,
    lng: -19.0208,
    category: 'culture',
    summary: `Iceland's cultural output is absurdly disproportionate to its population—360,000 people producing art, music, and film that punches at heavyweight level—and 2024-2025 shows no signs of the scene slowing down.

The Sequences Biennial's 11th edition in October 2024 explored ecological destruction through imperceptible spaces, and the 12th edition "Pause" runs October 10-19, 2025 across Reykjavík. The 29th Reykjavík Arts Festival in June 2024 featured 38 exhibitions, performances, and concerts. For a city of 130,000, that's extraordinary programming density. These aren't vanity projects—they're serious curatorial endeavors attracting international attention.

BERG Contemporary is showing Woody Vasulka's "The Brotherhood" through January 2026. i8 Gallery represents Ólafur Elíasson, Roni Horn, and Ragnar Kjartansson—that's a murderer's row of contemporary heavyweights. Þula Gallery showed Rakel McMahon and Guðmundur Thoroddsen in 2024. Hildigunnur Birgisdóttir exhibited at the 2024 Venice Biennale Icelandic Pavilion; her work's now at the National Gallery of Iceland through September 2025. Ragnar Kjartansson's multi-channel "World Light" is screening at Reykjavík Art Museum until late September 2025.

This is world-class work shown in intimate spaces. The gallery scene isn't big, but it's connected to global networks in ways most small countries can't match. Jónsi from Sigur Rós has work titled "FLÓÐ (Flood)" at Reykjavik Art Museum—the crossover between music and visual art is fluid here in ways that feel natural rather than forced.

Music is where Iceland's international reputation is bulletproof. Iceland Airwaves ran November 6-8, 2025 and returns November 4-7, 2026. It's an immersive, multi-genre festival across Reykjavík venues: art museums, Kolaport flea market, Gaukurinn, Iðnó, Nasa, Fríkirkjan, the converted cinema Gamla bíó, and 12 Tónar record store. The festival doesn't just book big names—it showcases Iceland's absurdly fertile music scene alongside international acts. Why Iceland produces so much great music is a question anthropologists study; that it does is indisputable.

Film is equally ambitious scaled down. RIFF—Reykjavík International Film Festival—hits its 22nd edition September 25-October 5, 2025, screening around 80 features and numerous shorts from around the world. RIFF is known for "surprising special events": visual food experiences, swim-up cinemas, cave cinemas, concerts. Northern Lights Fantastic Film Festival showcases 50 international shorts in adventure, fantasy, horror, sci-fi, magic realism.

Mengi, curated by Skúli Sverrisson, provides intimate space for local artists and experimental music. It's the kind of venue that exists because someone cares, not because there's institutional funding. That's Iceland's cultural model: small-scale, artist-driven, internationally connected.

The brutal honesty: Iceland can afford this because it's wealthy, educated, and has strong public support for culture. The population is small enough that everyone knows everyone, which creates tight networks but also insularity. Artists leave for Berlin, New York, London to build careers, then return. The scene is sustainable because it's embedded in national identity—being culturally productive is what Icelanders do.

What's next? More biennials, more music, more films. Iceland isn't trying to be a cultural capital—it already is one, per capita. The rest of the world is just catching up.`,
    issues: JSON.stringify([
      'Sequences Biennial and Reykjavík Arts Festival showcasing ambitious curation',
      'Gallery scene representing world-class contemporary artists',
      'Iceland Airwaves cementing international music reputation',
      'RIFF film festival creating innovative screening experiences',
      'Small population producing disproportionately influential cultural output'
    ]),
    storyCount: 0
  },
  {
    name: 'India',
    type: 'country',
    country: 'IN',
    lat: 20.5937,
    lng: 78.9629,
    category: 'culture',
    summary: `India's art market is booming like it's 1991 all over again—except this time Mumbai has more billionaires than Beijing, and the money is actually flowing to contemporary artists.

India Art Fair Delhi 2025 is the largest edition yet: 116 exhibitors including 77 galleries and 25 institutions, December 6-9 at NSIC Exhibition Grounds with BMW as presenting partner. But the real news is India Art Fair Contemporary launching in Mumbai November 13-16, 2025 with 50-70 galleries at Jio World Garden, focusing exclusively on post-1970 contemporary art and design. This is market validation—Delhi for breadth, Mumbai for cutting-edge work.

The numbers are obscene: South Asian modern and contemporary art grew 250% in the past decade. India's interior design market, including art acquisitions, is projected to hit $67.4 billion by 2032, up from $31.5 billion in 2023. Mumbai became the Asian city with the most billionaires in 2024, overtaking Beijing. That wealth is buying art—Nature Morte, Experimenter, DAG, Chemould Prescott Road, Jhaveri Contemporary are all expanding. Fulcrum launched in Mumbai's Fort district in January 2025, showing Bharathesh GD, Chetan Kurekar, Amiya Ranjan Ojha.

Gallery infrastructure is maturing. Art Mumbai in November, Mumbai Gallery Weekend in January, India Art Fair in February—it's a year-round calendar now, not occasional events. BMW partnered with Kochi-Muziris Biennale since 2012, signaling long-term corporate investment. Akar Prakar has spaces in New Delhi and Kolkata. Vadehra Art Gallery, founded 1987, is a South Asian art pioneer still relevant.

Film is complicated. The 55th International Film Festival of India in Goa celebrated centenaries of Raj Kapoor, Tapan Sinha, Akkineni Nageswara Rao, Mohammed Rafi in November 2024. The inaugural Guwahati Asian Film Festival launches February 2025. Jagran Film Festival covered 14 cities. Infrastructure exists—India released ~2000 films in 2024 across 15+ languages.

But Bollywood is struggling. 2024 extended the COVID-era slump, with filmmakers unable to adapt to audience tastes. "Stree 2" was a massive hit, but one success doesn't fix structural problems. Over 50% of the top 15 highest domestic grossers were South Indian films—Telugu, Tamil, Malayalam. Bollywood's dominance is eroding, and the industry hasn't figured out what comes next.

Music festivals are generic: industry-standard lineups, decent production, nothing groundbreaking. The classical music and traditional performance scene is more interesting but less visible internationally.

Here's what's happening: India's contemporary art market is professionalizing faster than its film industry is adapting. Visual art benefits from global networks, international collectors, and portable objects. Film requires distribution deals, theatrical releases, and audience buy-in that's increasingly fragmented across languages and regions.

The Kochi-Muziris Biennale continues to be Asia's most important contemporary art event. Delhi and Mumbai galleries are showing internationally recognized artists. Collectors have money and taste is developing. But outside visual art, Indian culture is wrestling with scale, language diversity, and political pressure that complicates everything.

The opportunity is obvious: India has wealth, audiences, and artists. What it needs is curatorial ambition, better film distribution, and resistance to political censorship. The art market figured it out. The rest is catching up—slowly.`,
    issues: JSON.stringify([
      'Art market boom driven by Mumbai billionaire wealth',
      'India Art Fair Contemporary launching in Mumbai 2025',
      'Bollywood struggling while South Indian cinema dominates',
      'Kochi-Muziris Biennale as major international platform',
      'Gallery infrastructure maturing in Delhi and Mumbai'
    ]),
    storyCount: 0
  },
  {
    name: 'Indonesia',
    type: 'country',
    country: 'ID',
    lat: -0.7893,
    lng: 113.9213,
    category: 'culture',
    summary: `Jakarta is positioning itself as Southeast Asia's art hub, and the 2024-2025 calendar proves it's not just ambition—the infrastructure is real and expanding fast.

Art Jakarta 2025 runs October 3-5 at JIExpo Kemayoran with 75 galleries including first-timers like Esther Schipper alongside regional players. The fair features Korea Focus with 12 Korean galleries in collaboration with Korea's Ministry of Culture—that's diplomatic soft power meeting market opportunity. Art Jakarta Scene showcases 32 Indonesian artist collectives and independent projects. The new Art Jakarta Papers launches February 2026 focusing on paper-based contemporary art. This is strategic programming, not just commercial fair.

Jakarta Biennale 2024 celebrated its 50th anniversary October 1-November 15 at Emiria Soenassa and S. Sudjojono galleries in Taman Ismail Marzuki. The biennale operates without traditional themes or curatorial teams—instead, Dewan Kesenian Jakarta initiated the Majelis Jakarta for democratic engagement. It's messy, experimental, and distinctly Indonesian: rejecting Western curatorial models for something more participatory.

Gallery infrastructure is booming. Museum MACAN has 5,000 square meters featuring works from founder Haryanto Adikoesomo's collection plus long-term loans. Gajah Gallery from Singapore opened a Jakarta space because, as founder Jasdeep Sandhu noted, "There's a new crop of collectors here." JKT ART HUB has two Menteng locations with 10 galleries across five floors. ISA Art Gallery at Wisma 46 shows Indonesian and international contemporary artists. This is serious commercial infrastructure.

Bali is the wild card. Komaneka Fine Art Gallery shows Balinese artists moving beyond traditional aesthetics into modern themes. TONYRAKA houses tribal and contemporary art from Indonesian and international artists. Cush Cush Gallery in Denpasar is a cutting-edge platform fostering collaboration. Natta-Cita Art Space from ISI Bali is presenting at Art Jakarta 2025. The island is producing contemporary work that's finding mainland markets.

Film is developing infrastructure fast. The 18th BALINALE runs June 1-7, 2025 in Sanur, inviting creative, thought-provoking independent work from Indonesia and worldwide. Jakarta World Cinema festival is in its third edition, expanding theatrical audiences. Indonesia launched JAFF Market 2024, the country's first large-scale film market at Jogja-Netpac Asian Film Festival in Yogyakarta December 3-5, 2024, bringing together 100+ domestic and international film companies. That's market-making infrastructure.

Music is less interesting artistically but commercially massive. Djakarta Warehouse Project alternates between Jakarta and Bali—in 2025 it returns to GWK Cultural Park in Bali. Hammersonic and Joyland festivals are coming. The Mekotek festival in Munggu village features Balinese dances and gamelan orchestras, which is culturally significant but not pushing boundaries.

What's actually happening: Indonesia is building the commercial and institutional infrastructure that makes sustained cultural production possible. Museums, galleries, biennials, art fairs, film markets. The artists are there, the audiences exist, and now the mechanisms for connecting them are professionalizing.

The next step is international visibility. Art Jakarta is getting there. Jakarta Biennale offers an alternative model. MACAN is world-class. Indonesian contemporary art is ready for global attention. The question is whether international curators, collectors, and critics will look beyond Singapore and Hong Kong to see what's happening in Jakarta. They should.`,
    issues: JSON.stringify([
      'Art Jakarta expanding with international gallery participation',
      'Jakarta Biennale experimenting with democratic curatorial models',
      'Museum MACAN and new collectors driving gallery infrastructure',
      'JAFF Market launching as first large-scale Indonesian film market',
      'Bali contemporary art scene gaining mainland recognition'
    ]),
    storyCount: 0
  },
  {
    name: 'Iran',
    type: 'country',
    country: 'IR',
    lat: 32.4279,
    lng: 53.6880,
    category: 'culture',
    summary: `Tehran has over 150 contemporary art galleries—up from literally a handful in 2004—operating under sanctions, censorship, and the constant threat of government reprisal. That's not cultural resilience. That's defiance.

In November 2024, Tehran Museum of Contemporary Art unveiled "Eye to Eye" featuring Picasso, Warhol, Bacon alongside celebrated Iranian artists—over 120 works, some not publicly seen in a decade. Numerous women attended with uncovered hair, which is its own form of protest. The exhibition is both concession and provocation: the state showing Western art it usually hides while women visibly violate hijab laws in the galleries. Iranian culture exists in these contradictions.

CAMA Gallery is a leading Tehran institution with outposts in London and New York in development. Dastan Gallery and Assar Art Gallery co-organize Teer Art Week. O Gallery and Aaran Gallery show contemporary work that can't be too nude, too sexual, too critical of Islam or government. Artists work around censorship through "creative subjects, subtle allegory, references to traditional mysticism"—it's coded resistance embedded in aesthetics.

The real story is what can't be shown. One Tehran-based female artist created a fabric book with names of those killed and "Women, Life, Freedom" slogans—"it cannot be presented inside Iran under these conditions." Galleries fear government reprisal. Over 100 artists in film, theatre, and music have been detained, banned from working, or prohibited from leaving the country for supporting protests. All of Jafar Panahi's films are banned from Iranian theaters.

Underground cinema is thriving precisely because official channels are closed. Films are produced without Ministry of Culture approval, shot in secrecy, distributed through foreign festivals or internet. The aesthetic structures mirror Persian rap—both emerged from censorship, repression, ideological constraints. They're reactions, survival mechanisms, refusals to submit.

The 2024 Fajr Film Festival was an embarrassment: Iran's best-known filmmakers refused to attend, critics panned programming, artists confronted officials. Actress Elnaz Shakerdoost bought a ticket to her own film's screening after not being invited, then took the stage to address censorship. The festival is a political tool for hardliners—it punishes independent filmmakers and promotes loyalists.

Music is even more constrained. Artists are detained for expressing support for protests. The underground scene is vast but invisible to anyone not looking for it.

Here's the economic stranglehold: one artist said "sanctions have harmed art and culture more than censorship inside the country." Iranian artists, gallerists, collectors must navigate impossible transactions to receive money for art. International shows are logistically nightmarish. Artists can't travel. Materials are expensive or unavailable.

And yet: 150 galleries. Exhibitions opening. Artists creating work about the challenges around them. Underground films being made. The state wants to control culture, and culture keeps escaping.

The post-2022 uprising has intensified everything. More repression, more resistance. The question isn't whether Iranian culture will survive—it already is. The question is how long artists can sustain work under conditions designed to break them. Right now, they're not breaking. That won't last forever.`,
    issues: JSON.stringify([
      'Over 150 galleries operating despite state censorship',
      'Tehran Museum showing Western art with uncovered women attending',
      'Underground cinema and music as resistance to repression',
      'Fajr Film Festival dominated by hardliner political agenda',
      'Sanctions and government detention crippling artist mobility and commerce'
    ]),
    storyCount: 0
  },
  {
    name: 'Iraq',
    type: 'country',
    country: 'IQ',
    lat: 33.2232,
    lng: 43.6793,
    category: 'culture',
    summary: `Baghdad's art scene is emerging from decades of war with tentative hope—galleries are opening, artists are staying, and international attention is finally arriving—but the infrastructure is so fragile that one bad year could collapse everything.

The Ruya Foundation runs a gallery on Mutanabbi Street and commissions the Iraqi pavilion at Venice Biennale, but co-founder Tamara Chalabi is blunt: "the infrastructure is not there... no local support, no collectors." Baghdad once had 15 galleries; now four commercial spaces survive. The Gallery opened in culturally rich Karrada. Tarkib, launched ten years ago, is a key platform for critical art, offering workshops and internationally minded exhibitions like Baghdad Walk public art program.

Artists are working at extraordinary caliber. Sadik Kwaish Alfraji's existentialist multi-media work features shadowy, faceless figures. Amir Hazim explores memory, identity, cultural history influenced by post-2003 Baghdad. In June 2025, CCS Bard's Hessel Museum opened the first comprehensive U.S. survey of the Baghdad Group for Modern Art—that's overdue recognition for artists who shaped Arab modernism while the world ignored them.

Museums are in crisis. The National Museum of Modern Art was looted during the 2003 invasion and is now "utterly dilapidated" with water dripping on important works. The Iraqi Museum reopened March 2025 after three years closed due to protests and pandemic. The Iraqi Artist Syndicate and Iraqi Fine Artists Association provide main support for artists as NGOs relying on donations—there's no state funding worth mentioning.

Babylon International Festival is where Iraqi culture makes its stand. The 12th edition ran through April 19, 2025 in the ancient city, a UNESCO World Heritage Site. International acts from Spain, Turkey, Switzerland performed alongside Iraq's Oud Orchestra led by Mustafa Zayer. Contemporary artists use Babylon itself as canvas through projections, sculptures, night-time lightwork transforming ruins into installations. The festival blends local and international, traditional and experimental—it's ambitious programming against impossible odds.

Established in 1987 and revitalized after an 18-year conflict hiatus, Babylon Festival encompasses music, singing, musicals, stage performances, seminars, workshops. It's all aspects of arts representing different civilizations. That scope is necessary when there's no year-round cultural infrastructure.

Film barely exists as industry. There's talent—Iraqi filmmakers get featured in Latin American and international festival short film programs—but no domestic production infrastructure, no funding, no distribution.

Tarkib co-founder Hella Mewis notes "the Tishreen protests were a turning point, especially for young women" with generational shifts visible in the art scene. Artists who came of age post-2003 are making work that refuses nostalgia or trauma tourism—they want to engage present and future, not just process past.

Here's the brutal economics: Iraq is wealthy from oil but invests virtually nothing in culture. Artists work without institutional support, without collectors, without galleries that can afford to pay them. International interest is growing—exhibitions abroad, festival inclusions, critical attention—but that doesn't translate to sustainable careers in Baghdad.

What Iraq needs is obvious: restore museum infrastructure, fund artist residencies, establish a national film fund, create tax incentives for collectors. The artists are there, the audiences are hungry, the historical foundation is extraordinary. But without investment, Baghdad's revival remains precarious—sustained by artist determination rather than institutional support. That's heroic, but it's not sustainable.`,
    issues: JSON.stringify([
      'Baghdad galleries opening but operating without collector base',
      'National museums looted and dilapidated from 2003 invasion',
      'Babylon International Festival as major cultural platform',
      'Post-Tishreen generation of artists emerging',
      'No state cultural funding despite oil wealth'
    ]),
    storyCount: 0
  },
  {
    name: 'Ireland',
    type: 'country',
    country: 'IE',
    lat: 53.4129,
    lng: -8.2439,
    category: 'culture',
    summary: `Dublin's cultural scene is punching above its weight in ways that would be impressive for a city twice its size—and the November 2024-2025 calendar shows a scene that's professionalized, internationally connected, and genuinely ambitious.

Dublin Gallery Weekend returns November 6-9, 2025, showcasing 100+ artists through free events across 40 galleries and institutions. It's not just quantity—the programming is smart. Olivier Cornet Gallery's "Ode to Giants" group show, Temple Bar Gallery+Studios' Frank Sweeney "Go Ye Afar," Project Arts Centre's Ciarán Ó Dochartaigh "Vague Symptom Clinic." The Douglas Hyde Gallery at Trinity is showing Atsushi Kaga's "Just Another Human Experience"—this Ireland-based Japanese artist gets wall space at one of Dublin's most respected venues.

IMMA—Irish Museum of Modern Art in a renovated 17th-century Kilmainham hospital—is showing Cecilia Vicuña's first solo Irish exhibition through 2025. Vicuña is a legendary Chilean artist, poet, and activist; IMMA landing this show is a coup. The National Gallery's Picasso: From the Studio exhibition in collaboration with Musée national Picasso-Paris ran through 2024. Kerlin Gallery, opened 1998, has featured Sean Scully exhibitions and Andy Warhol retrospectives. For a city of 550,000, that's world-class programming.

Film festivals are where Ireland's cultural identity actually lives. TradFest runs January 22-26, 2025 in Temple Bar with 200+ free events celebrating traditional Irish music—music trail, singers clubs, open sessions, outdoor stages, Celtic Irish dance festival, master classes. The Irish Film Institute in Temple Bar hosts festivals year-round: IFI Family Festival (August 15-17, 2025), Documentary Festival (September 10-14), Horrorthon (October 23-27), French Film Festival (November 19-30), IBERSCREEN (April 24-27), Queer Spectrum (June 13-14), GAZE LGBT (July 29-August 4). That's a festival almost monthly.

Cork International Film Festival runs November 6-16, 2025. Dublin International Short Film and Music Festival (DISFMF) is Ireland's largest independent short film festival, October 3-5, 2025. The infrastructure is there, the audiences show up, and Irish filmmakers are getting international attention even if domestic funding is always precarious.

Music is weirdly conservative for a country with such rich traditions. TradFest is excellent at what it does—preserving and showcasing Irish traditional music—but there's less experimental or contemporary music programming than you'd expect from a capital city.

Here's what's working: Ireland has invested in cultural infrastructure—museums, galleries, film institutes—and artists are using it well. IMMA's collection includes 3,500 artworks by Irish and international artists. The Douglas Hyde focuses on artists pushing boundaries or marginalized voices. Galleries like Olivier Cornet and Kerlin are commercially viable while showing serious work.

What's missing is risk. Dublin Gallery Weekend is great, but it's also safe—established galleries showing established artists to established audiences. Where's the underground? Where's the art that makes people uncomfortable? Maybe it's there and I'm missing it, but the public-facing scene feels buttoned-up, institutionally approved, aesthetically moderate.

Still, this is a city taking culture seriously. The festivals run on time, the museums are well-curated, the galleries are professional. That's not nothing. And with the National Gallery bringing Picasso, IMMA showing Vicuña, and IFI programming year-round film, Dublin is making the case that it belongs in conversations about European cultural capitals. Whether it's doing enough to support the next generation of Irish artists—that's the open question.`,
    issues: JSON.stringify([
      'Dublin Gallery Weekend showcasing 100+ artists across 40 venues',
      'IMMA and National Gallery securing major international exhibitions',
      'IFI hosting monthly film festivals covering diverse programming',
      'TradFest celebrating traditional Irish music at scale',
      'Cultural infrastructure strong but risk-taking limited'
    ]),
    storyCount: 0
  },
  {
    name: 'Israel',
    type: 'country',
    country: 'IL',
    lat: 31.0461,
    lng: 34.8516,
    category: 'culture',
    summary: `Tel Aviv's contemporary art scene is operating in the shadow of October 7, and what's remarkable isn't that culture is happening—it's that artists are using it to process trauma, resistance, and the impossible question of what comes next.

CCA Tel Aviv-Yafo is a non-collecting institution fostering practices connected to contemporary issues—it's artist-driven and currently showing Gilad Ratman's "Plecos." Zemack Contemporary Art (ZCA), founded 2010, is a leading Tel Aviv gallery. Braverman Gallery, established 2004, focuses on video and installation. Florentin45 nurtures emerging talent. Sommer Contemporary Art promotes Israeli artists internationally. The infrastructure is solid, the galleries are professional, the market exists.

But the context has changed. The Other Israel Film Festival November 6-13, 2025 features documentaries addressing "the identity crisis of Bedouins in the Negev that intensified since October 7." That single phrase contains volumes: communities marginalized before are now navigating war, military operations, displacement. Film is documenting what politicians won't acknowledge.

Haifa International Film Festival runs October 5-14, 2025—it's the first international film festival established in Israel and it's still going. TLVFest (Tel Aviv LGBTQ Film Festival) is October 23-November 1, 2025 at Tel Aviv Cinematheque. These festivals are continuing because stopping would be capitulation, but programming is unavoidably shaped by present crisis.

The Israel Film Center Festival in New York is described as "a post-October 7 Israeli cultural event that hasn't been canceled." The director noted that big festivals snubbing Israeli filmmakers is "an opportunity to get stronger premieres than ever." That's defiance disguised as pragmatism—if we can't show at Cannes or Berlinale, we'll build our own platforms.

Music is quieter. InDNegev Festival happens every October with rising Israeli stars and art activities, but 2024-2025 editions are muted compared to before.

Here's what nobody's saying out loud: Israeli culture is experiencing international boycotts, festival rejections, and isolation unprecedented since the state's founding. BDS (Boycott, Divestment, Sanctions) movement has cultural power now. Filmmakers face dilemmas: identify as Israeli and risk rejection, or obscure nationality and feel complicit in erasure.

Internally, culture is fragmented. Artists processing October 7 trauma. Artists protesting government policy. Artists who've lost friends, family. Artists who refuse to make work about the conflict because they're exhausted. Artists who can't make work about anything else.

Tel Aviv is thriving as art market—galleries are full, collectors are buying, contemporary art sells. But what's being made, what's being shown, what's being said is unavoidably shaped by war, occupation, isolation. The museums are open, festivals run, galleries exhibit. But the work can't escape context.

What's actually happening is artists navigating impossible conditions: international isolation, internal division, trauma, grief, and the knowledge that cultural production is being weaponized by all sides. Make political work, you're instrumentalized. Make apolitical work, you're criticized for silence.

The next year will determine whether Israeli culture can sustain international connections or whether isolation becomes total. Festivals are continuing, galleries are showing, artists are working. But the ground is shifting, and nobody knows what the scene looks like in five years. Right now, it's persisting—but persistence isn't the same as thriving.`,
    issues: JSON.stringify([
      'Post-October 7 cultural production processing trauma and crisis',
      'International festival boycotts isolating Israeli filmmakers',
      'Other Israel Film Festival documenting marginalized community challenges',
      'Tel Aviv gallery scene commercially viable amid political turmoil',
      'Artists navigating impossible choices around political engagement'
    ]),
    storyCount: 0
  }
]

async function addCultureSummaries() {
  console.log('Adding Culture summaries for countries 53-65...\n')

  for (const country of CULTURE_SUMMARIES) {
    console.log(`Processing: ${country.name}`)
    console.log(`Character count: ${country.summary.length}`)

    try {
      await prisma.locationSummary.upsert({
        where: {
          name_type_category: {
            name: country.name,
            type: country.type,
            category: country.category
          }
        },
        create: {
          name: country.name,
          type: country.type,
          country: country.country,
          lat: country.lat,
          lng: country.lng,
          category: country.category,
          summary: country.summary,
          issues: country.issues,
          topStories: '[]',
          storyCount: country.storyCount,
          updatedAt: new Date()
        },
        update: {
          summary: country.summary,
          issues: country.issues,
          topStories: '[]',
          storyCount: country.storyCount,
          updatedAt: new Date()
        }
      })

      console.log(`✅ ${country.name} culture summary added (${country.summary.length} chars)\n`)
    } catch (error) {
      console.error(`❌ Error processing ${country.name}:`, error)
    }
  }

  console.log('✅ All culture summaries processed!')
}

addCultureSummaries()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
