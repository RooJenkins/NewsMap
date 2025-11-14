import 'dotenv/config'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

// Country data with coordinates
const COUNTRIES = [
  { name: 'Singapore', code: 'SG', lat: 1.3521, lng: 103.8198 },
  { name: 'Slovakia', code: 'SK', lat: 48.6690, lng: 19.6990 },
  { name: 'Slovenia', code: 'SI', lat: 46.1512, lng: 14.9955 },
  { name: 'Somalia', code: 'SO', lat: 5.1521, lng: 46.1996 },
  { name: 'South Africa', code: 'ZA', lat: -30.5595, lng: 22.9375 },
  { name: 'South Korea', code: 'KR', lat: 35.9078, lng: 127.7669 },
  { name: 'South Sudan', code: 'SS', lat: 6.8770, lng: 31.3070 },
  { name: 'Spain', code: 'ES', lat: 40.4637, lng: -3.7492 },
  { name: 'Sri Lanka', code: 'LK', lat: 7.8731, lng: 80.7718 },
  { name: 'Sudan', code: 'SD', lat: 12.8628, lng: 30.2176 },
  { name: 'Suriname', code: 'SR', lat: 3.9193, lng: -56.0278 }
]

// Culture summaries in Jerry Saltz / Mark Kermode voice
const SUMMARIES: { [key: string]: { summary: string; issues: string[] } } = {
  'Singapore': {
    summary: `Walk into the National Gallery during Singapore Art Week 2025 and you'll feel it—this city-state's art scene isn't just arriving, it's already here, and it's dripping with money, ambition, and a hunger that's borderline ferocious. ART SG, now in its third year, downsized from 150 to 105 galleries in 2025, but here's the kicker: everyone says the energy's better. Smaller, tighter, sharper. That's Singapore—ruthlessly efficient even in its cultural ambitions. The Art Basel and UBS Survey dropped a bombshell: 42 percent of new high-net-worth art buyers globally are based in Singapore. Forty-two percent! The city wants to be Southeast Asia's art capital, and honestly? It's getting there.

The infrastructure's insane. National Gallery holds the world's largest public collection of Southeast Asian modern art—world's largest, mind you. Gillman Barracks just celebrated its 11th anniversary as the city's art precinct, and private galleries are sprouting like mushrooms after rain. Tang Contemporary Art opened a sleek new space in June 2024. The Tanoto Art Foundation launched in 2024 as one of Singapore's first major private foundations focused on contemporary Southeast Asian art. This isn't organic growth—this is state-backed, capital-fueled cultural engineering, and you can feel the machinery humming beneath the surface.

But here's where it gets interesting: Singapore only has one UNESCO World Heritage Site—the Singapore Botanic Gardens, inscribed in 2015 as the world's first and only tropical botanic garden on the list. In December 2020, they added Hawker Culture to UNESCO's Intangible Cultural Heritage list, which is brilliant and weird and very Singaporean—elevating street food culture to the same tier as ancient monuments. The film and music scene's more complicated. Singapore International Film Festival (SGIFF) will run its 36th edition from November 26 to December 7, 2025, showcasing 30+ local features and shorts. The Singapore International Festival of Arts (SIFA) runs May 16 to June 1, 2025, blending theater, dance, music, film, and visual arts into one massive cultural showcase. Music festivals like Ultra Singapore (March 28-30, 2025), Sundown (May 7-11), and Baybeats (October) pull international crowds, but there's a persistent sense that Singapore's homegrown creative voices get drowned out by all the imported talent.

The censorship question hangs over everything. Singapore's government funds the arts generously through the National Arts Council, but don't mistake generosity for freedom. There are lines you don't cross—political criticism, religious sensitivities, LGBT themes all navigate a minefield of regulations. Artists self-censor, venues play it safe, and the result is a scene that's polished and professional but sometimes frustratingly toothless. You look at the National Gallery's gleaming halls and think: where's the grit? Where's the danger? It's there, occasionally, in smaller galleries like The Substation or independent spaces, but it's always negotiating with power, always aware of the limits.

Singapore's art boom is real, but it's a boom with contradictions. It's Southeast Asia's richest art market but not necessarily its most daring. It's a city where a Sotheby's auction pulls millions but local experimental artists struggle for space. And yet, the momentum's undeniable. By 2026, Singapore will have cemented itself as the region's art hub—whether that hub has soul, or just capital, remains the question.`,
    issues: [
      "ART SG consolidation and high-net-worth collector dominance",
      "State funding versus artistic freedom and censorship concerns",
      "Singapore Botanic Gardens UNESCO status and cultural heritage",
      "Film and music festivals balancing local and international voices"
    ]
  },

  'Slovakia': {
    summary: `Here's something that'll break your heart: Kunsthalle Bratislava, Slovakia's cornerstone contemporary art institution since 2014, was dismantled in 2024. Just gone. This wasn't a funding crisis or natural disaster—this was a deliberate political choice to erase a space that showcased diverse international and national artistic voices. That's where Slovak culture stands in late 2024: fighting for survival against a government increasingly hostile to anything that questions, challenges, or complicates the national narrative.

But Slovak artists don't give up easily. The 31st Art Film Fest in Košice (June 20-27, 2025) is Slovakia's premier film showcase, featuring Alexandra Makarová's "Perla," an Austrian-Slovak co-production that premiered at Rotterdam's Tiger Competition. Genre filmmaker Peter Bebjak's "Duchoň," a biographical music drama about 1970s pop icon Karol Duchoň, drops July 31, 2025. At Febiofest's Bratislava Industry Days (March 24-25, 2025)—Slovakia's main industry platform—documentaries outnumbered fiction among works in progress, which tells you something about where Slovak filmmakers are focusing: on reality, on testimony, on capturing a moment before it's erased.

Slovakia has eight UNESCO World Heritage sites—six cultural, two natural. There's Spiš Castle, one of Central Europe's largest medieval fortresses; Bardejov, an exceptionally preserved medieval trading town; Vlkolínec, where traditional folk architecture remains intact since 1993; and eight wooden churches from northeastern Slovakia added in 2008. These sites represent Slovakia's deep historical roots, but they also highlight the tension: the government loves heritage when it's safely in the past, less so when contemporary artists try to wrestle with what that heritage means today.

The music scene offers a glimmer. The [fjúžn] festival curated by Juraj Hoppan maps genre-less contemporary club sounds. White Night (Biela Noc) in September transforms Košice into an outdoor gallery with light art and installations illuminating the historical center. Jazz festivals and folklore celebrations—bagpipes echoing through medieval squares from June to September—keep traditional culture alive. Kaseko rhythms from the working-class neighborhoods; the Banská Štiavnica Folklore Festival celebrating local traditions. It's vibrant, it's rooted, it's real.

And then there's the Slovak National Gallery, which opened the experimental "Model: Museum of Contemporary Art" exhibition in June 2024, a long-term show that's trying to redefine what a national contemporary collection can be. It's brave, it's ambitious, and it's happening in the shadow of Kunsthalle's closure—a reminder that every cultural victory in Slovakia right now is provisional, contested, fragile.

The Artistic Freedom Initiative lists Slovakia as a country where artistic freedom is under pressure. Artists face censorship, funding cuts, political interference. The dismantling of Kunsthalle wasn't an isolated incident—it's part of a broader pattern of cultural retrenchment. What's inspiring is that Slovak artists keep working, keep exhibiting, keep making films and music and installations that refuse to be silenced. Slovakia's culture scene in 2025 isn't thriving—it's surviving. And survival, right now, is an act of resistance.`,
    issues: [
      "Kunsthalle Bratislava dismantled amid growing censorship",
      "Art Film Fest Košice and independent Slovak cinema",
      "Eight UNESCO heritage sites and folklore traditions",
      "Artistic freedom under political pressure"
    ]
  },

  'Slovenia': {
    summary: `Ljubljana's Cukrarna Gallery, housed in a gorgeously restored 19th-century sugar factory, is where Slovenian contemporary art makes its boldest statements. Walk through in 2025 and you might catch cutting-edge installations, performance art that'll make you uncomfortable in all the right ways, or exhibitions that nobody outside this small Alpine nation is paying attention to—yet. Slovenia's cultural scene operates on this paradox: it's geographically tiny (population: 2 million) but artistically outsized, punching way above its weight class.

The Maribor Art Gallery just hit its 70th anniversary, celebrating with "Spekter," an exhibition running through December 2025 that surveys Slovenian visual art across generations. Škuc Gallery in the Metelkova district—a former military barracks turned autonomous cultural zone—hosts the kind of daring contemporary shows, performance art, film programs, and talks that bigger European capitals would kill for. Jakopič Gallery, founded in 1988, showcases painting, graphic art, and photography with a rotating program of solo shows and biennials. And MGLC (Museum of Modern Art Ljubljana) anchors the Biennale of Graphic Arts every two years, with the next edition in September 2025 spreading across multiple galleries.

The festival circuit is absurdly rich. Festival Lent (June 20-28, 2025) transforms Maribor into a massive outdoor performance space. Ljubljana Festival runs all summer (June-September) with classical music, opera, and contemporary performance. Druga Godba in late May focuses on world and alternative music—genres that don't fit neat categories. Jazz Cerkno celebrates its 30th edition in 2025. Art Stays in Ptuj (July 10-September 15, 2025) is the country's main summer visual arts event. Animateka in December brings animated films to Kinodvor and the Slovenian Cinematheque. For a country this size, the programming density is staggering.

Film-wise, Slovenia's largest festival hits Ljubljana every November, pulling in international cinema alongside robust national production. The Ljubljana Film Festival and the growing indie scene show Slovenian filmmakers engaging with European art cinema traditions while carving out distinct voices. It's not flashy—Slovenia doesn't do flashy—but it's serious, committed, technically sophisticated.

Here's what's remarkable: Slovenia doesn't have massive oil wealth or a colonial legacy to fund culture. It's a post-Yugoslav nation that joined the EU in 2004 and has been quietly building one of Europe's most consistently interesting cultural ecosystems. No UNESCO World Heritage contemporary sites yet, but Ljubljana's old town and the Škocjan Caves anchor the country's heritage credentials. The real heritage is happening now: in Cukrarna's cavernous exhibition halls, in Metelkova's scrappy DIY spaces, in the summer festivals that turn medieval towns into contemporary art installations.

The Slovenian government funds the arts without heavy-handed interference—a rarity in Central Europe right now. There's no major censorship crisis, no political purge of cultural institutions. Artists aren't rich, but they're working, exhibiting, touring. The scene feels sustainable, embedded, organic. Ljubljana might not have Berlin's scale or Vienna's imperial grandeur, but it has something those cities lost: intimacy, coherence, a sense that the whole city's cultural community actually knows each other and is building something together. In 2025, that's radical.`,
    issues: [
      "Cukrarna and MGLC leading contemporary visual arts",
      "Festival Lent and summer cultural programming density",
      "Post-Yugoslav cultural identity and EU integration",
      "Government arts funding without heavy censorship"
    ]
  },

  'Somalia': {
    summary: `Somali Week Festival 2025 (October 16-26) hits London with the theme "Resonate! Sounds of the Past, Voices of the Future," and it's the largest Somali cultural festival outside the Horn of Africa. Wait—why is Somalia's biggest arts festival happening in London? Because that's the brutal reality of Somali culture in 2025: dispersed, diasporic, surviving in exile. The Somali Arts Foundation, founded by Sagal Ali in 2020, is the first contemporary art institution in Somalia itself, based in Mogadishu, trying to build something from rubble and memory and sheer determination.

Let me tell you about the Somali Museum UK, which radically reimagines what a museum can be: a virtual and physical container for Somali stories, combining art gallery, library, archive, museum, dance studio, and music venue in one space. It's based in London, not Mogadishu. Somali artists, musicians, and filmmakers are scattered across Toronto, Minneapolis, Nairobi, Stockholm, London—wherever the diaspora landed after decades of civil war, state collapse, and ongoing conflict. Somali culture in 2024-2025 isn't happening in one place; it's a constellation of creative communities trying to hold onto identity while building new forms.

The 2024 Somali Week Festival brought the Dur-Dur Band—legends of the 1980s Mogadishu funk and disco scene—for a live performance. That moment mattered: these musicians represented the golden age of Somali music before everything fell apart, before the theatres closed and the recording studios were destroyed. The festival also premiered "Amina," a film by Swedish-Somali director Ahmed Abdullahi, and celebrated Faadumo Cabdillahi (Maandeeq), a retired singer from the first generation of modern Somali musicians. These aren't just cultural events—they're acts of preservation, of refusing to let a generation's artistic legacy disappear.

Back in Mogadishu, tiny shoots of culture are emerging. There's no major museum infrastructure, no state funding to speak of, but there are artists. The Somali Arts Foundation runs programs and exhibitions. Soomaal House of Art launched the Aragti Wadaag residency program in 2024, giving artists a space to think, work, develop practices in a city still scarred by violence. These initiatives are fragile, underfunded, operating under constant security threats. But they exist. That's not nothing.

Traditional Somali visual arts—intricate patterns, textile work, wood carving—continue in informal settings. Somali poetry, historically the culture's crown jewel, circulates orally, online, in diaspora gatherings. The lack of physical infrastructure means Somali culture is mobile, adaptive, resilient in ways that institutionalized arts scenes can't match. When your museums are destroyed, you carry the museum in your memory. When your galleries burn, you make art on phone screens and share it globally.

The challenge is recognition. Western arts institutions are slowly starting to include Somali artists—Whitechapel Gallery in London hosted "Somali Museum: Any-Space-Whatever," a conceptual exhibition exploring Somali cultural memory. But Somali artists remain underrepresented in major collections, biennials, festivals. The diaspora produces astonishing work—experimental film, Afrofuturist visual art, genre-bending music—and it barely gets covered outside niche platforms.

Somalia's cultural story in 2025 is one of survival against catastrophic odds, of artists creating without infrastructure, of memory preserved against erasure. It's not a triumph—it's ongoing struggle. But the fact that Somali culture exists at all, thrives even, in fragments across the globe, is extraordinary.`,
    issues: [
      "Somali Week Festival and diasporic cultural preservation",
      "Somali Arts Foundation building infrastructure in Mogadishu",
      "Dur-Dur Band and 1980s musical heritage revival",
      "Lack of physical arts infrastructure and state support"
    ]
  },

  'South Africa': {
    summary: `Zeitz MOCAA just lost Koyo Kouoh, their visionary Executive Director and Chief Curator, who passed away in 2025. Her death leaves a massive void in African contemporary art—Kouoh was one of the continent's most important cultural figures, transforming the Zeitz Museum of Contemporary Art Africa (housed in a converted Cape Town grain silo) into Africa's largest and most ambitious contemporary art museum. This is where South African culture stands right now: world-class infrastructure, jaw-dropping talent, and constant reminders of how fragile it all is.

The gallery scene is thriving, at least in Cape Town and Johannesburg. Goodman Gallery represents some of the continent's biggest names. The Melrose Gallery in Joburg is the exclusive global representative of Dr. Esther Mahlangu, the 89-year-old Ndebele artist whose geometric abstractions have appeared on BMW Art Cars and museum walls worldwide—they just debuted at Atlanta Art Fair 2025. Southern Guild, with spaces in Cape Town and Los Angeles, pushes contemporary African and diaspora artists onto the global stage. The Norval Foundation in Cape Town runs a museum and sculpture garden dedicated to African modern and contemporary art, with educational programming that's actually accessible, not just elite vanity projects.

But here's the tension: South African contemporary art is booming internationally while the country's cultural funding is a disaster. Artists are getting shows in New York, Paris, London while local institutions scramble for resources. The Iziko South African National Gallery in Cape Town, the country's premier public art museum, holds a vast collection of historical, modern, and contemporary South African, African, and international work—but visit on a weekday and the galleries are half-empty, underfunded, struggling.

Film and music? Complicated. South African cinema punches below its weight given the country's talent pool. There are brilliant filmmakers—but where's the consistent funding, the distribution infrastructure, the international festival presence South African film deserves? Meanwhile, South African music genres—Amapiano, gqom, kwaito—are conquering global charts and filling dancefloors from Lagos to London. The disconnect is jarring: music thrives on informal networks and digital distribution, while film and visual arts still depend on institutional support that's constantly under threat.

Let's talk UNESCO: South Africa has ten World Heritage sites, including Robben Island (where Mandela was imprisoned), the Cradle of Humankind (some of the world's oldest hominid fossils), and the cultural landscape of Mapungubwe. These sites represent South Africa's deep history—human origins, colonial violence, anti-apartheid struggle. But here's what's missing: major investment in preserving and interpreting these sites for contemporary audiences. Heritage gets treated as tourism product, not living culture.

Censorship isn't the issue—South Africa has one of the world's most progressive constitutions, with strong protections for artistic freedom. The issue is inequality. Cultural infrastructure is concentrated in Cape Town, Joburg, Durban. Townships and rural areas have virtually nothing. The artists coming out of Alexandra, Soweto, Khayelitsha are phenomenal, but they're navigating a system that wasn't built for them. Galleries in Cape Town's Waterfront or Joburg's Rosebank might as well be on another planet.

What's thrilling about South African art right now is the refusal to be boxed in. Artists like William Kentridge, Zanele Muholi, Nicholas Hlobo, Mary Sibande have global profiles and use them to address South African realities—apartheid's long shadow, gender and sexuality, economic violence. The energy's there. The talent's there. What's missing is equitable infrastructure and sustainable funding. South African culture in 2025 is spectacular and precarious, visionary and vulnerable. Exactly like the country itself.`,
    issues: [
      "Zeitz MOCAA and Koyo Kouoh's legacy in African contemporary art",
      "Global success of South African artists amid local funding crisis",
      "Amapiano and gqom music versus struggling film industry",
      "UNESCO heritage sites and cultural inequality across regions"
    ]
  },

  'South Korea': {
    summary: `Walk into any gallery in Seoul right now and you'll feel the tension—K-art is having its moment, and nobody's quite sure what to do with it. Between the NFT bros trying to monetize everything and the old guard clutching their Joseon scrolls, Korean contemporary art is in the middle of an identity crisis that's absolutely electric to watch. Frieze Seoul just wrapped its fourth edition (September 3-6, 2024) at COEX, cementing Seoul as Asia's newest major art market. The money's pouring in, blue-chip galleries like Kukje and Gallery Hyundai in Jongno are expanding, and suddenly international collectors who couldn't find Seoul on a map three years ago are apartment-hunting in Gangnam.

The infrastructure's insane. The National Museum of Modern and Contemporary Art (MMCA) is running "MMCA Collection: Korean Modern and Contemporary Art I" from May 2025 through June 2027 across Seoul and Gwacheon locations—a massive survey show asserting Korean art's canonical status. The Photography Seoul Museum of Art opens in Dobong District in May 2025 as South Korea's first public museum dedicated solely to photography, with over 20,000 works in the Seoul Museum of Art network. The Gangneung Museum of Art Sorol reopens in April 2025. This is state-backed cultural infrastructure on steroids—museums, public collections, festival support.

Let's talk K-pop because you can't discuss Korean culture without it. Year-end music festivals—KBS Song Festival, SBS Gayo Daejeon, MBC Gayo Daejejeon—close out 2024 with massive spectacles. MyK Festa 2025 at Seoul's KSPO Dome features WayV, aespa, ITZY. Incheon Pentaport Rock Festival pulls international rock and electronic acts. K-Link Festival is literally sponsored by the Korea Tourism Board because the government understands culture as soft power. K-pop isn't just music—it's industrial policy, export product, national brand. Which is brilliant and terrifying: when culture becomes this instrumentalized, where's the space for weirdness, failure, experimentation?

Film's in better shape. Bong Joon-ho, Park Chan-wook, Lee Chang-dong are global auteurs. Korean cinema balances commercial genre filmmaking (action thrillers, horror) with festival-circuit art films. The industry's got state support, robust domestic audience, international distribution. But even here, there's conformity pressure—films that rock the boat politically (criticizing chaebols, the military, conservative social norms) face funding challenges, online harassment campaigns, pressure to self-censor.

The Seoul Mediacity Biennale (August 26-November 23, 2025) at Seoul Museum of Art showcases video art, new media, experimental practices. DDP—Dongdaemun Design Plaza, Zaha Hadid's spaceship-shaped cultural complex—hosts design and fashion exhibitions. The Leeum Samsung Museum of Art (Jean Nouvel, Rem Koolhaas, Mario Botta architecture) blends traditional Korean art and contemporary work. The Amorepacific Museum (David Chipperfield) offers free admission and world-class shows. South Korea's corporate conglomerates fund culture aggressively—Samsung, Hyundai, Amorepacific all run private museums. It's generous, it's sophisticated, and it's deeply tied to corporate branding.

Here's the contradiction at the heart of Korean culture in 2025: unprecedented global influence (BTS, Squid Game, Frieze Seoul, Park Seo-bo's Dansaekhwa paintings selling for millions) alongside persistent domestic conservatism. LGBTQ+ artists face barriers. Feminist art provokes backlash. Anything challenging the nationalist consensus gets attacked. So you have this bifurcated scene: internationally celebrated, domestically constrained. K-culture conquers the world while Korean artists navigate minefields at home.

The excitement is real—Seoul's art market is exploding, museums are opening, Korean artists are getting retrospectives at Tate and MoMA. But the bigger question: can Korean culture maintain its experimental edge as it becomes global brand? Or will success breed conservatism, risk-aversion, the flattening of everything that made it interesting in the first place? Ask me again in five years.`,
    issues: [
      "Frieze Seoul and the K-art market boom",
      "K-pop as state-backed cultural export versus artistic freedom",
      "Corporate-funded museums and the Samsung/Hyundai culture model",
      "Global success versus domestic conservatism and censorship"
    ]
  },

  'South Sudan': {
    summary: `The Baobab House in Juba, founded in 2019, is a miracle. In the world's youngest nation—a country that's been at war for most of its independent existence since 2011—a group of artists, poets, musicians, and filmmakers carved out a space for healing, creation, and memory. In August 2024, they mounted "Exodus," an exhibition featuring Juma Morris's work on displacement, and if you understand anything about South Sudan's reality (13 million people displaced since the latest conflict erupted), you realize this isn't abstract art-world posturing. This is testimony. This is survival made visible.

South Sudan doesn't have museum infrastructure to speak of. The Juba National Museum exists, housing artifacts from South Sudan's diverse ethnic groups—Dinka, Nuer, Shilluk, Azande, dozens more—but it's underfunded, undersupplied, operating in a country where basic state functions barely exist. What South Sudan has instead is oral culture, living traditions, artists working without galleries or grants or international residencies. Contemporary Azande craftspeople still create ironwork, clay pottery, wood carvings using techniques passed down generations. Modern South Sudanese painters work with acrylic, water, oil paints—often self-taught, selling work in informal markets.

Music's where South Sudanese culture gets global traction. Alijoma, singing in Jieng Dinka, blends Zouk, Afrobeat, dancehall, Afropop, reggae, taking his language to international stages. Western genres like hip-hop and reggae are massively popular among young South Sudanese. There's also Sudanese/Sudanic fusion—a melding of Arabic and African rhythms that predates the 2011 split from Sudan and remains part of South Sudan's contested cultural inheritance. The question "What is South Sudanese music versus Sudanese music?" is still being negotiated, still politically charged.

The Rise of South Sudan Music and Arts Festival 2024 (ROSS MAF) happened—a bi-annual event celebrating South Sudanese and broader African communities, mostly organized by diaspora in places like Melbourne, Australia. Again, you see this pattern: South Sudan's culture happening in exile, in refugee camps in Uganda and Kenya, in diaspora communities in North America and Australia. The Juba Film Festival exists as an annual event, showcasing regional filmmakers, but it's operating on a shoestring, in a city where electricity is intermittent and internet unreliable.

Here's what breaks your heart: South Sudan should have one of the world's most vibrant cultural scenes. The country has enormous ethnic and linguistic diversity, deep artistic traditions, young population hungry for creative expression. But it's been gutted by war, corruption, economic collapse. Artists have no funding, no venues, no international visibility. When South Sudanese artists do break through—like Nyakim Gatwech, the model known as "Queen of the Dark," or athletes and musicians in the diaspora—they're succeeding despite the state, not because of it.

Censorship isn't the primary issue; the primary issue is state failure. There's no arts ministry worth mentioning, no public funding, no cultural policy. In a weird way, this creates radical freedom—nobody's telling artists what to create because nobody in government cares about culture when the country's fighting over oil revenue and political power. But that freedom's hollow when you lack basic infrastructure to actually make and show work.

What's happening at the Baobab House—artists using creative expression for "healing and growth" in a traumatized nation—that's the story. It's small, it's fragile, it could disappear tomorrow if funding dries up or violence returns. But it's real. South Sudanese culture in 2025 is happening in the margins, in exile, in small rooms where people gather to make something beautiful despite everything. That's not inspiring—it's devastating. But it's also necessary, urgent, irreplaceable.`,
    issues: [
      "Baobab House and art as healing in post-conflict society",
      "Juba Film Festival and informal cultural infrastructure",
      "Alijoma and South Sudanese music in diaspora",
      "State failure and the absence of arts funding or policy"
    ]
  },

  'Spain': {
    summary: `Madrid's Museo del Prado just hit 3,457,057 visitors in 2024—an all-time record. Meanwhile, the Reina Sofía down the street lost 22.5% of its audience, dropping to 1,960,249 visitors, partly because the Palacio de Cristal has been closed since April 2023. That gap tells you everything about Spanish culture right now: the Old Masters are packing them in, but contemporary art's struggling for attention, funding, coherence. Spain has world-class cultural infrastructure—the "Golden Triangle" of Prado, Reina Sofía, and Thyssen-Bornemisza in Madrid alone—but it's coasting on legacy, not innovation.

Let's talk about what's working. The 72nd San Sebastián International Film Festival (September 20-28, 2024) was spectacular: Pedro Almodóvar received the Donostia Award from Tilda Swinton, his collaborator on "The Human Voice" and the Venice Golden Lion-winning "The Room Next Door." The festival pulled Cate Blanchett, Johnny Depp, Javier Bardem, François Ozon, Mike Leigh, Walter Salles—serious auteur cinema, not Netflix filler. Almodóvar, at 75, remains Spain's cinematic giant, and his 2024 Venice win for a film about female friendship and euthanasia proves he's still making dangerous, beautiful work. Spanish cinema's in decent shape: robust festival circuit (Barcelona's Human Rights Film Festival, Málaga, Gijón), state support through the ICAA, strong regional film commissions in Catalonia, Basque Country, Andalusia.

But here's the problem: beyond Almodóvar, who are Spain's internationally visible contemporary artists? Visual artists, I mean. Spain gave the world Picasso, Dalí, Miró, Goya—but in 2025, where's the next generation making noise at Venice Biennale or Documenta? The Reina Sofía's 2024 acquisitions prioritized works by women and artists from Afro-descendant and Indigenous backgrounds, which is commendable but also feels reactive, like catching up to conversations the rest of the art world's been having for a decade. The museum renovated its auditorium and opened a rooftop terrace as exhibition space in 2025—infrastructural tweaks, not curatorial earthquakes.

Spain has forty-nine UNESCO World Heritage sites—tied with Italy, trailing only China. There's the Alhambra, Sagrada Família, Santiago de Compostela, Altamira caves, Roman aqueduct of Segovia. Spain's heritage game is unmatched. But heritage can be a trap—when your cultural identity is so tied to past glories, how do you make space for the present? Spanish contemporary culture sometimes feels like it's performing in the shadow of its own history, unable to escape the gravitational pull of Velázquez and Cervantes.

Music's more alive. Rosalía blew up globally with flamenco-inflected pop, C. Tangana's genre-blending, Spanish hip-hop and electronic scenes thriving in Madrid and Barcelona. The festival circuit—Primavera Sound in Barcelona, Sónar, FIB (Festival Internacional de Benicàssim), Mad Cool in Madrid—pulls massive international crowds. But these are international festivals that happen to be in Spain, not necessarily Spanish cultural expressions. When you're hosting Radiohead and Kendrick Lamar, are you creating culture or just providing real estate?

The uncomfortable truth: Spain's contemporary cultural output doesn't match its historical weight or current economic scale (it's the EU's fourth-largest economy). There's no censorship crisis—Spain's a democracy with strong cultural freedoms since Franco died in 1975. There's decent public funding through regional and national arts councils. So what's missing? Urgency. Risk. The sense that Spanish artists are wrestling with something that matters beyond career advancement. The Prado's record attendance is great, but it's also a museum full of dead people. Where's the live current running through Spanish culture in 2025? I'm not sure it knows where to look for it.`,
    issues: [
      "Prado Museum record attendance versus Reina Sofía decline",
      "Almodóvar and San Sebastián Film Festival prestige",
      "Forty-nine UNESCO sites and the heritage industry trap",
      "Contemporary art lagging behind historical legacy"
    ]
  },

  'Sri Lanka': {
    summary: `The Barefoot Art Gallery in Colombo, founded way back in 1966 by Barbara Sansoni, is still going—still hosting exhibitions, workshops, quiz nights, concerts, still functioning as the beating heart of Sri Lankan contemporary art. That longevity matters. In a country that's careened from civil war (ended 2009) to Easter bombings (2019) to economic collapse (2022), the fact that Barefoot endures is a minor miracle. It's also a reminder that Sri Lankan culture has always been resilient, adaptive, finding ways to survive when the state can't or won't help.

New spaces are emerging. Kälam, founded in Jaffna in 2020 by Kirutharshan Nicholas, runs programming in the war-scarred north—symposia, workshops, exhibitions, film screenings—giving Tamil artists in a region that bore the brunt of the civil war a platform. Studio Kayamai opened in 2022, hosting talks, performances, exhibitions, workshops. These aren't massive institutions with endowments; they're scrappy, community-driven, operating on passion and minimal budgets. But they're building something: a contemporary Sri Lankan art scene that's not just Colombo-centric, that acknowledges the island's ethnic and regional diversity.

The festival scene's wild. The Matara Festival for the Arts (February 1-4, 2024) brought contemporary art and music to Sri Lanka's southern coast, curated by heavyweights like Prof. Jagath Weerasinghe, featuring exhibitions, workshops, film screenings, a community market—all at Matara Fort and riverfront spaces. Deep Jungle Music and Cultural Festival 2024 at Sigiriya bills itself as "Sri Lanka's biggest cross-cultural music festival," blending contemporary genres against the backdrop of one of the island's most iconic heritage sites (Sigiriya Rock Fortress, a UNESCO World Heritage site dating to the 5th century CE).

Speaking of UNESCO: Sri Lanka has eight World Heritage sites, including the ancient cities of Polonnaruwa and Anuradhapura, the sacred city of Kandy, the Dambulla cave temples, and the Sinharaja Forest Reserve. These sites represent Sri Lanka's Buddhist heritage and biodiversity, but they're also tourism engines—sometimes preserved more for dollars than cultural meaning. The tension between heritage as living culture versus heritage as commodity is real.

Music's vibrant but fragmented. The Galle Concerto series (January-March 2024) brought international and Sri Lankan culture-makers to the south coast for festivals in art, food, literature, and music. The IIMSD Festival 2025 (May-August) covers music, dance, and speech & drama across the island. Shankra Festival blends electronic music and spirituality. But there's a disconnect: these festivals target tourists and Sri Lankan elite, while traditional music—Kandyan drumming, baila, folk forms—exists in parallel worlds with little crossover.

Film's the weakest link. There's no major Sri Lankan film festival with international clout. Domestic film production exists but it's underfunded, dominated by formulaic commercial cinema, rarely breaking into global festival circuits. Where's the Sri Lankan Apichatpong Weerasethakul or Lav Diaz? The talent's there—Sri Lankan filmmakers working abroad have proven it—but local infrastructure and funding can't support the kind of ambitious, experimental cinema the island deserves.

The 2022 economic crisis hammered culture budgets. The government's broke, inflation's crushing, fuel shortages paralyze transport. Artists are leaving—emigrating to India, Australia, the Gulf, anywhere with opportunities. The brain drain's real. What keeps me hopeful is the grassroots resilience: Kälam in Jaffna, Kayamai, the artists who didn't leave, the festival organizers cobbling together budgets from corporate sponsors and NGOs. Sri Lankan culture in 2025 isn't thriving—it's surviving with dignity, creativity, and a refusal to disappear. That might not sound like much, but given what this island's been through, it's everything.`,
    issues: [
      "Barefoot Gallery and contemporary art spaces in Colombo and Jaffna",
      "Matara Festival and regional cultural programming",
      "Eight UNESCO sites balancing heritage and tourism",
      "Economic crisis and cultural brain drain"
    ]
  },

  'Sudan': {
    summary: `When photos of Khartoum's ransacked National Museum surfaced in March 2025, showing one of North Africa's most significant archaeological collections looted and destroyed, it devastated Sudan's cultural workers. But here's the thing: Sudan's culture wasn't just attacked in March 2025. It's been under assault for decades—state censorship under Omar al-Bashir's regime (1989-2019), then the brief democratic opening (2019-2021), then the military coup, and now the catastrophic civil war that erupted in April 2023 between the Sudanese Armed Forces and the Rapid Support Forces. Over 12.5 million Sudanese displaced—more than a quarter of the population. Khartoum, once a thriving cultural capital, is now a battleground.

Let me tell you what existed before the war: from January to April 2023, Khartoum had a genuine arts boom. Ninety-six artists showcased work. Eleven new galleries opened. Downtown Gallery, founded in 2019, housed over 500 paintings, collaborated with 68 artists, officially represented 40. There were talks of a National Museum of Art. Artists were organizing, exhibiting, selling work. For the first time in decades, Sudanese contemporary art had infrastructure, momentum, hope. Then April 15, 2023 happened, and it all collapsed.

Downtown Gallery's Rahiem Shaddad managed to send artworks abroad for a traveling exhibition on April 12, 2023—three days before the war started and the airport was attacked. Those paintings are now in exile, touring internationally, while the gallery itself is destroyed. Shaddad created a fund to support Sudanese artists in exile, because that's where Sudanese culture is now: scattered across Cairo, Nairobi, Kampala, European cities, anywhere artists could flee.

The Sudan Art Archive, launched February 25, 2025 by Reem Aljeally, is an attempt to digitally preserve what's being erased physically. It's not just art—it's memory, identity, stories. When the National Museum gets looted, when studios burn, when artists flee with nothing, digital archives become lifelines. "Sudan, Remember Us" is the rallying cry—a documentary project weaving art and activism, insisting that Sudanese culture won't be erased by war.

Sudan has three UNESCO World Heritage sites: the archaeological sites of Meroe (Nubian pyramids), Gebel Barkal and the Napatan region, and Sanganeb Marine National Park. These sites represent Sudan's deep history as the Kingdom of Kush, a civilization that rivaled Egypt. But in the current war, who's protecting these sites? Archaeological looting is rampant. Heritage destruction is collateral damage.

Music persists in fragments. Sudanese musicians in exile perform in Cairo, Kampala, European cities. Traditional Sudanese rhythms, Nubian songs, contemporary Sudanese fusion—it continues, but detached from the land, the language's home. The war silenced Khartoum's clubs, concert halls, recording studios. What you hear now are recordings made before 2023, or new music created in diaspora.

This isn't a cultural crisis—it's a cultural catastrophe. Sudanese artists aren't negotiating censorship or funding cuts; they're fleeing bombs, documenting atrocities, trying to stay alive. The "For Sudan" fundraiser at London's Shubbak Festival 2025 and exhibitions like "Sudan Retold" at Georgetown Qatar are attempts to keep Sudanese culture visible while the world looks away.

Here's what keeps me up at night: when this war eventually ends—and it will, eventually—what will Sudanese artists return to? Destroyed institutions, looted collections, a generation traumatized and scattered. Rebuilding Sudanese culture will take decades. The artists creating now in exile, digitizing archives, documenting displacement—they're not just making art. They're ensuring there's something left to rebuild from. That's not inspiring. It's heartbreaking. But it's also essential.`,
    issues: [
      "National Museum looting and cultural destruction from civil war",
      "Downtown Gallery and the collapse of Khartoum's 2023 arts boom",
      "Sudan Art Archive and digital preservation in exile",
      "12.5 million displaced and the cultural diaspora crisis"
    ]
  },

  'Suriname': {
    summary: `Paramaribo's Historic Inner City, a UNESCO World Heritage site since 2002, is this gorgeous, weird blend of Dutch colonial architecture, tropical decay, and Creole adaptation—wooden buildings with wide verandas, synagogues next to mosques, a city that shouldn't work but does. Suriname's whole cultural identity is like that: Afro-Surinamese, Indian, Javanese, Chinese, Indigenous communities somehow coexisting, creating hybrid art forms nobody else has. Kaseko music—the term probably comes from French "casser le corps" (break the body), a phrase from slavery—fuses African rhythms with European brass, Indigenous percussion, a sound that's rhythmically complex and completely Surinamese.

The Readytex Art Gallery in Paramaribo is the country's main visual arts institution, and in 2024 they hosted Reinier Asmoredjo's solo show "Mi Gudu; 40 jaar beeldend kunstenaar" (My Treasure; 40 years visual artist) from March to April, and René Tosari's "RELEASE. Liberated from dogmas" from May to June. These aren't international blockbusters—they're local artists getting serious gallery treatment in a country of 600,000 people. That matters. It means there's a functioning, if small, contemporary art ecosystem.

But here's the catch: the Suriname Museum opened in winter 2024—in Amsterdam. Not Paramaribo. Amsterdam. It's dedicated to Surinamese culture, history, and people, but it's in the former colonial metropole, not the country itself. This is the postcolonial paradox: Suriname's cultural heritage is preserved and exhibited in the Netherlands, where there's funding, infrastructure, audiences. Meanwhile in Paramaribo, cultural institutions scrape by on minimal budgets.

Suriname has three UNESCO World Heritage properties: Paramaribo's Historic Inner City (2002), the recently inscribed Jodensavanne Archaeological Site: Jodensavanne Settlement and Cassipora Creek Cemetery (2023)—which preserves the remains of a 17th-century Jewish settlement in the rainforest—and the Central Suriname Nature Reserve (2000), a massive area of pristine tropical rainforest. That 2023 addition of Jodensavanne is significant: it acknowledges Suriname's Sephardic Jewish community, one of the Americas' oldest, and the entanglement of Jewish colonists with the plantation slavery system. It's heritage, but it's uncomfortable heritage that complicates easy narratives.

Festivals pulse through Suriname's cultural calendar. Pagara Estafette on December 31, 2024 lit up Paramaribo with fireworks and celebration—a massive New Year's Eve tradition. Keti Koti Festival marks the end of slavery (July 1, 1863), a day of reckoning and remembrance. Maroon Day honors the Maroon communities who escaped slavery and created autonomous societies in the interior. Diwali, Eid al-Fitr, Holi—Suriname celebrates Hindu, Muslim, Christian, Indigenous festivals, a calendar that reflects genuine multiculturalism, not tokenism.

Music's where Suriname's hybridity shines. Kaseko's the national sound, but there's also kawina (Creole drumming and dance), Indian chutney music, Javanese gamelan, contemporary hip-hop and dancehall. Surinamese artists blend these influences without worrying about purity or authenticity—the mixing is the point. Genres aren't fixed categories; they're raw materials.

The problem is scale and visibility. Suriname's cultural output is rich, but it barely registers internationally. Surinamese artists working in Amsterdam or Rotterdam get more attention than those in Paramaribo. The country's small population and economy mean cultural funding is minimal. Artists emigrate. Talent drains to the Netherlands. And Suriname's culture, which should be globally celebrated as a model of Afro-Indo-Asian-European fusion, remains under-recognized.

What's beautiful about Surinamese culture in 2025 is its unpretentious hybridity. There's no anxiety about cultural purity, no nationalist culture wars. Suriname just is—mixed, layered, syncretic. That's radical in a world obsessed with borders and authenticity. But beauty doesn't pay bills. Surinamese culture deserves infrastructure, investment, international attention. Instead, it survives on resilience and improvisation. Same as it ever was.`,
    issues: [
      "UNESCO Paramaribo Historic Inner City and Jodensavanne site",
      "Readytex Art Gallery and Surinamese contemporary art scene",
      "Kaseko music and Afro-Indo-Asian cultural hybridity",
      "Suriname Museum in Amsterdam and postcolonial cultural displacement"
    ]
  }
}

async function insertCultureSummaries() {
  console.log('Inserting Culture & Arts summaries for countries 118-128...\n')

  let successCount = 0
  let errorCount = 0

  for (const country of COUNTRIES) {
    const summaryData = SUMMARIES[country.name]

    if (!summaryData) {
      console.error(`❌ No summary data found for ${country.name}`)
      errorCount++
      continue
    }

    try {
      console.log(`\n📝 Processing ${country.name}...`)
      console.log(`   Summary length: ${summaryData.summary.length} characters`)
      console.log(`   Issues: ${summaryData.issues.length}`)

      await prisma.locationSummary.upsert({
        where: {
          name_type_category: {
            name: country.name,
            type: 'country',
            category: 'culture'
          }
        },
        create: {
          name: country.name,
          type: 'country',
          country: country.name,
          lat: country.lat,
          lng: country.lng,
          category: 'culture',
          summary: summaryData.summary,
          issues: JSON.stringify(summaryData.issues),
          topStories: JSON.stringify([]),
          storyCount: 0,
          updatedAt: new Date()
        },
        update: {
          summary: summaryData.summary,
          issues: JSON.stringify(summaryData.issues),
          topStories: JSON.stringify([]),
          storyCount: 0,
          updatedAt: new Date()
        }
      })

      console.log(`✅ ${country.name} culture summary saved successfully!`)
      successCount++

    } catch (error) {
      console.error(`❌ Failed to insert ${country.name}:`, error)
      errorCount++
    }
  }

  console.log('\n' + '='.repeat(80))
  console.log('SUMMARY GENERATION COMPLETE')
  console.log('='.repeat(80))
  console.log(`✅ Successfully inserted: ${successCount} summaries`)
  console.log(`❌ Errors: ${errorCount}`)
  console.log('\nCharacter counts:')
  COUNTRIES.forEach(country => {
    const data = SUMMARIES[country.name]
    if (data) {
      console.log(`   ${country.name}: ${data.summary.length} chars`)
    }
  })
}

insertCultureSummaries()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
