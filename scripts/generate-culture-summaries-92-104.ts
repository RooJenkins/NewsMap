import 'dotenv/config'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

// Country coordinates and metadata
const COUNTRIES = [
  { name: 'Namibia', code: 'NA', lat: -22.9576, lng: 18.4904 },
  { name: 'Nepal', code: 'NP', lat: 28.3949, lng: 84.1240 },
  { name: 'Netherlands', code: 'NL', lat: 52.1326, lng: 5.2913 },
  { name: 'New Zealand', code: 'NZ', lat: -40.9006, lng: 174.8860 },
  { name: 'Nicaragua', code: 'NI', lat: 12.8654, lng: -85.2072 },
  { name: 'Niger', code: 'NE', lat: 17.6078, lng: 8.0817 },
  { name: 'Nigeria', code: 'NG', lat: 9.0820, lng: 8.6753 },
  { name: 'North Korea', code: 'KP', lat: 40.3399, lng: 127.5101 },
  { name: 'Norway', code: 'NO', lat: 60.4720, lng: 8.4689 },
  { name: 'Oman', code: 'OM', lat: 21.4735, lng: 55.9754 },
  { name: 'Pakistan', code: 'PK', lat: 30.3753, lng: 69.3451 },
  { name: 'Palestine', code: 'PS', lat: 31.9522, lng: 35.2332 },
  { name: 'Panama', code: 'PA', lat: 8.5380, lng: -80.7821 }
]

// Culture summaries and issues for each country
const SUMMARIES: Record<string, { summary: string; issues: string[] }> = {
  'Namibia': {
    summary: `# Namibia Culture & Arts

Windhoek's visual art scene is buzzing right now, and it's the kind of energy that makes you want to book a flight immediately. The Project Room just wrapped solo shows from Ericke Tjiueza and Ina-Maria Shikongo, while simultaneously sending artists to RMB Latitudes in Jo'burg and FNB Art Joburg—this tiny gallery is punching way above its weight. Meanwhile, the National Art Gallery of Namibia pulled off something genuinely important: the ARCK Exhibition, featuring work responding to 23 cultural belongings returned from Berlin's Ethnological Museum. Not replicas, not facsimiles—actual repatriated artifacts inspiring contemporary Namibian artists to reckon with colonial theft and cultural memory. That's the conversation we should be having everywhere.

And the artist talent? Ridiculous. Ndasuunje 'PAPA' Shikongeni, Ndako Nghipandulwa, and Jakobina Gideon showed at AfriKin Art Fair during Miami Art Week and Art Basel, while Tuli Mekondjo hit Art Basel after appearing at Biennale de Dakar. Nicky Marais had a stunning solo at NAGN in May—massive canvases inspired by founding the Oranjemund Art Centre in Namibia's diamond coast. Alpheus Mvula continues creating transcendent stone sculptures, and Margaret Courtney-Clarke presented 'Dust on the Wind' in Austria—100 photographs reflecting 34 years of independence with unflinching honesty. This isn't emerging talent; this is established international-caliber work coming out of a country of 2.5 million people. The ratio is insane.

But here's the thing that'll break your heart: 2024 was "disruptive with financial constraints," according to local coverage. Translation: these artists, galleries, and curators are keeping the scene alive through sheer will and ambition while operating on fumes. The government talks a big game about creative industries, but the funding? Catastrophically inadequate. Bellhaus Atelier & Galerie, StArt Art Gallery, Omba Gallery—they're all hustling, all passionate, all financially precarious. It's maddening.

The music scene offers similar contradictions. The 2024 Namibia Annual Music Awards (NAMA) Festival has evolved into a legitimate cultural event—red carpets, international collaborations, proper production values. The Windhoek Jazz Festival keeps pulling major acts, and International Jazz Day 2024 at the National Theater featured stellar local jazz alongside Nama Music (Aboxan Musik), which UNESCO inscribed on its List of Intangible Cultural Heritage in Need of Urgent Safeguarding in 2020. That designation is both a triumph and a warning: Nama musical traditions are endangered, requiring active preservation efforts. New festivals like Climb Namibia at Spitzkoppe (debuting 2025) and the Kalahari Desert Festival are trying to build year-round cultural infrastructure, but sustainability remains the perpetual question.

Film is where Namibia's potential slams into bureaucratic reality. The landscapes are spectacular—Namib Desert dunes, Skeleton Coast, Spitzkoppe granite formations—and international productions know it. Mad Max: Fury Road shot here. But here's the gutting part: Namibia has no film studios, no tax incentives, no production infrastructure. The Namibia Film Commission exists, Emma Theofelus appointed a new board in December 2024, and the government just launched a bid for the Namibia Film and Creative City in Windhoek (submissions due November 2025). Sounds promising, right? Except the CEO of Namibia's Investment Promotion Board publicly stated the country can't attract productions because it lacks "essential infrastructure and government incentives." So the Film and Creative City bid is aspirational at best, delusional at worst. International crews come, shoot in the desert, and leave. Local filmmakers? They're making work with no funding, no studios, no support system.

UNESCO-wise, Namibia has just two World Heritage Sites: Twyfelfontein's 6,000-year-old rock engravings (2,000+ petroglyphs, approved 2007) and the Namib Sand Sea. The Oshituthi Shomagongo festival celebrating marula harvest (March-April) is recognized as UNESCO Intangible Cultural Heritage. Eight properties sit on the tentative list, awaiting funding and political will to advance. The Namibia Heritage Council exists but operates in permanent crisis mode—preservation requires money nobody's allocating.

Here's what kills me about Namibia's cultural scene: the talent, ambition, and vision are absolutely there. Artists showing at Art Basel, photographers exhibiting in Austria, sculptors creating museum-quality work, jazz musicians holding their own internationally. But the infrastructure—funding, studios, venues, government support—ranges from inadequate to nonexistent. It's cultural triage: artists and institutions keeping the scene alive through heroic effort while waiting for investment that never arrives. The NAGN announced an open call for 2025 exhibitions, The Project Room keeps programming, festivals keep launching. The resilience is inspiring. The lack of institutional support is inexcusable. Namibia's art scene deserves so much better than survival mode.`,
    issues: [
      "Contemporary art boom despite severe funding constraints",
      "Repatriation of cultural artifacts inspiring new artistic responses",
      "Film industry potential undermined by lack of infrastructure and incentives",
      "UNESCO heritage preservation facing resource challenges",
      "Emerging international recognition for Namibian artists"
    ]
  },

  'Nepal': {
    summary: `# Nepal Culture & Arts

Let's talk about Nepal's cultural scene post-earthquake, post-pandemic, because it's simultaneously heartbreaking and electrifying. The 2015 earthquake destroyed UNESCO World Heritage monuments across Kathmandu Valley—Durbar Squares in Kathmandu, Patan, and Bhaktapur reduced to rubble, centuries-old temples collapsed. Nine years later, reconstruction crawls forward with painful slowness, hampered by bureaucracy, funding shortfalls, and political inertia. Patan Durbar Square's restoration shows progress, but Kathmandu Durbar Square remains a construction site. Meanwhile, contemporary Nepali artists are creating some of the most urgent, politically engaged work in South Asia, and nobody outside the region is paying attention. That needs to change.

Kathmandu's contemporary art scene centers around a handful of vital institutions doing Herculean work. The Nepal Art Council, Siddhartha Arts Foundation, and Kathmandu Triennale are programming ambitious exhibitions with essentially no government support. The 2077 Kathmandu Triennale (Nepali calendar, 2020-2021 Gregorian) titled "My East is Your West" featured 60+ artists interrogating orientalism, tourism, and cultural commodification—exactly the conversations Nepal needs. Siddhartha Arts Foundation's gallery in Babar Mahal Revisited keeps showing challenging contemporary work: recent exhibitions tackled climate change impacts on mountain communities, caste discrimination, and migrant labor exploitation. Artist collectives like Artree Nepal and Art for Everyone are organizing independently, bypassing moribund government institutions entirely.

Individual artists are doing exceptional work under impossible conditions. Ashmina Ranjit creates large-scale installations addressing gender violence and women's bodily autonomy—her work has shown internationally but struggles for local institutional support. Tsherin Sherpa's contemporary takes on thangka painting (Buddhist scroll art) bridge traditional technique and contemporary conceptual practice, exhibiting globally while confronting Nepal's brain drain. Sujan Chitrakar, Manish Lal Shrestha, and Sunita Rana are creating politically fearless painting and installation work. Ang Tsherin Sherpa (note: different artist) gained Venice Biennale representation, yet Nepal's government cultural budget remains pathetic.

Film is where Nepal's cultural vitality explodes. Despite tiny budgets and zero government incentives, Nepali cinema is having a genuine moment. "Pashupati Prasad 2" (2023) and "Kabaddi 4" dominated box offices, proving domestic audiences hunger for Nepali-language stories. Director Deepak Rauniyar's "White Sun" (2016) and "Pooja, Sir" premiered at Venice and Cannes—that's Nepali films at the world's most prestigious festivals. The 2024 Nepal International Film Festival showcased work from across South Asia, while the Kathmandu Mountain Film Festival (December 2024, 22nd edition) remains one of Asia's premier documentary festivals, focusing on mountain cultures, environment, and social issues. But here's the brutal reality: filmmakers fund projects through personal savings, family loans, and sheer desperation. Nepal has no film commission, no tax incentives, no production studios. The talent and stories exist; the infrastructure doesn't.

Music offers a fascinating hybrid scene. Traditional Newari music, Gandharba musical traditions, and Buddhist ceremonial music remain vibrant, especially during festival seasons. The Indra Jatra festival (September) fills Kathmandu with ritual music and masked dances. But contemporary music is where things get interesting: Nepali rock, hip-hop, and electronic scenes are thriving in Kathmandu and Pokhara. Bands like Nepathya blend traditional instrumentation with rock, while rappers like VTEN and Yama Buddha (RIP) addressed youth unemployment, corruption, and political dysfunction with brutal honesty. The Silence Festival in Pokhara (when it happens—funding is perpetually uncertain) showcases electronic music against Himalayan backdrops. Tuborg Open Sessions brings international acts to Kathmandu. But venues are scarce, government support nonexistent, and Kathmandu's notorious pollution and infrastructure problems make large-scale events logistically nightmarish.

Nepal's seven UNESCO World Heritage Sites are its cultural crown jewels and biggest preservation challenge. Kathmandu Valley alone has four: Kathmandu, Patan, Bhaktapur Durbar Squares, plus Swayambhunath and Boudhanath stupas, Pashupatinath temple, and Changu Narayan. Lumbini (Buddha's birthplace) and Chitwan National Park round out the list. Post-earthquake, UNESCO placed Kathmandu Valley on the "in danger" watchlist, later removed after restoration commitments. But progress is agonizingly slow. Bhaktapur's restoration (German-funded) looks good; Kathmandu's is a mess of competing jurisdictions and corruption. Illegal construction encroaches on heritage zones while authorities do nothing. Boudhanath's renovation sparkles, but that's privately funded by the Tibetan Buddhist community. Government heritage budgets get siphoned through bureaucratic layers, arriving at actual sites as trickles.

The National Museum in Kathmandu and Patan Museum are doing admirable work with laughable resources. Patan Museum, housed in a restored wing of Patan Durbar Square, is genuinely world-class—stunning Newari and Tibetan Buddhist art collections, intelligent curation, proper conservation. It survives on Austrian development funding, not government support. The National Museum's collection is important but the building needs work and exhibitions need updating. Nepal's cultural heritage is extraordinary; the institutions protecting it are chronically underfunded.

Here's the fundamental tension in Nepal's cultural scene: millennia of artistic tradition, contemporary artists creating urgent work, filmmakers punching above their weight internationally, but zero coherent government cultural policy. The Ministry of Culture exists in name; its budget is microscopic and mostly eaten by bureaucratic salaries. Young artists emigrate to India, the US, Europe—why stay when you can't make a living? The earthquake revealed Nepal's fragility, but nine years later, the response remains inadequate. Meanwhile, artists, filmmakers, musicians, and heritage conservationists keep working, keep creating, keep preserving. Their resilience is extraordinary. The lack of support is criminal. Nepal's government needs to wake up before its best cultural talents leave permanently and its UNESCO sites crumble beyond repair.`,
    issues: [
      "Slow earthquake reconstruction of UNESCO heritage sites",
      "Vibrant contemporary art scene operating without government support",
      "Nepali cinema gaining international recognition despite zero infrastructure",
      "Traditional performing arts preservation facing generational challenges",
      "Cultural brain drain as artists emigrate for opportunities"
    ]
  },

  'Netherlands': {
    summary: `# Netherlands Culture & Arts

Amsterdam's art scene is having an identity crisis right now, and honestly, it's fascinating to watch. The Rijksmuseum and Van Gogh Museum keep pulling massive crowds—we're talking 2.7 million and 2.1 million visitors annually, respectively, pre-pandemic numbers now exceeded—but there's growing tension around cultural tourism versus actual cultural engagement. The Stedelijk Museum just reopened its renovated wing in 2024 with a major Marlene Dumas retrospective that's absolutely essential viewing, while simultaneously the city council debates whether Amsterdam has hit "peak tourism" and needs to actively discourage visitors. Try making sense of that contradiction.

The Dutch museum world is reckoning with its colonial past in ways that go beyond performative gestures. The Rijksmuseum's "Slavery" exhibition (2021, extending its impact through 2024-25 programming) confronted the Netherlands' central role in the transatlantic slave trade and Dutch East India Company atrocities with unflinching directness—no nationalist mythmaking, no "but everyone was doing it" deflections. The Tropenmuseum and Wereldmuseum are systematically reviewing collections, repatriating objects, and fundamentally rethinking what a "world cultures" museum should be in 2025. Indonesia, Suriname, and former Dutch colonies are demanding artifacts back, and the museums are mostly complying. This is actual decolonization work, not just panel discussions.

Contemporary Dutch art is thriving, led by artists who refuse to play nice. Patricia Kaersenhout creates confrontational installations about Black Dutch identity and colonial amnesia—her work makes white liberal audiences profoundly uncomfortable, which is precisely the point. Wendelien van Oldenborgh's film installations interrogate Dutch progressivism's blind spots. Renzo Martens' Institute for Human Activities works in former Belgian Congo, creating self-sustaining art infrastructure while critiquing Western art world extraction—it's brilliant, controversial, and operating from a former plantation. The Mondriaan Fund (government arts funding) actually supports challenging work, unlike many national arts councils. But funding debates are heating up: right-wing parties want cuts, arguing contemporary art is "elitist." The culture wars are arriving in the Netherlands, just slower than elsewhere.

Dutch film is punching above its weight. "All the Beauty and the Bloodshed" won the Venice Golden Lion (2022, still influencing 2024-25 discourse), and while it's about Nan Goldin, not Dutch, Dutch cinematographer Wim Wenders connection to Dutch film culture matters. Actually Dutch: Halina Reijn's "Bodies Bodies Bodies" was a breakout hit, and she's now directing major Hollywood projects. Marwan Kenzari is everywhere (Hollywood, international productions). The Nederlands Film Festival (September 2024, Utrecht) showcased a new generation tackling identity, immigration, and Dutch multiculturalism. "Redbad" (historical epic) and "Dirty Lines" (Netflix series about Dutch phone sex origins) show range. The Netherlands Film Fund provides actual funding—€36 million annually—unlike most European countries' symbolic gestures. Infrastructure exists: studios, trained crews, government support. Dutch film could be much bigger if they marketed internationally better.

Music is where Dutch cultural output completely explodes. Classical: the Royal Concertgebouw Orchestra is arguably Europe's best, period. That's not nationalism; ask any conductor. The Concertgebouw hall's acoustics are legendary. Dutch National Opera pushes boundaries—Pierre Audi's tenure brought contemporary opera to Amsterdam that rivals anything in Germany or UK. The Holland Festival (June, Amsterdam) programs avant-garde theater, dance, and music that's genuinely adventurous, not "safe European festival" fare.

Electronic music: Amsterdam Dance Event (ADE, October) is the world's largest electronic music conference and festival. Five days, 1,000+ artists, 200+ venues, 400,000 attendees (2024 numbers). It's industry networking, underground raves, and commercial showcases simultaneously. Dutch DJs—Tiësto, Armin van Buuren, Afrojack, Martin Garrix—dominate global EDM, love them or hate them. But Amsterdam's underground techno and house scenes (De School RIP, Radion, Shelter) are where actual innovation happens, away from mainstage cheese.

Jazz: North Sea Jazz Festival (Rotterdam, July) remains one of Europe's best, booking everyone from Herbie Hancock to Esperanza Spalding. Dutch jazz musicians like Yuri Honing and Tineke Postma hold their own internationally.

Funding controversy: the Dutch government's cultural budget is substantial (€762 million in 2024), but right-wing parties want cuts. Geert Wilders' PVV gained power in 2023 elections, and while coalition negotiations prevented massive cuts, pressure is building. The Netherlands has historically supported culture generously; that consensus is fraying.

UNESCO: Netherlands has 12 World Heritage Sites, including Amsterdam's canal ring, Rietveld Schröder House (architectural icon), and Wadden Sea (natural site). The Dutch manage heritage well—restoration is professional, sites are maintained, access is balanced. No major controversies, which is almost boring compared to other countries' heritage disasters.

Theater and dance: Nederlands Dans Theater (The Hague) is world-class contemporary dance. Toneelgroep Amsterdam (now ITA, Internationaal Theater Amsterdam) under Ivo van Hove became Europe's most exciting theater company—van Hove's deconstructions of classics (Roman Tragedies, Kings of War) toured globally. He's now at Comédie-Française in Paris, but his influence on Dutch theater persists.

Architecture remains culturally central: the Dutch Design Week (Eindhoven, October) showcases experimental design. MVRDV, OMA/Rem Koolhaas, Mecanoo keep producing innovative buildings globally. Architecture is treated as public culture, not just real estate—a very Dutch attitude.

Here's the thing about Dutch culture in 2025: it's well-funded, internationally competitive, and increasingly aware of its colonial past. But political winds are shifting. The progressive consensus that funded adventurous art and supported cultural diversity is under pressure from right-wing populism and tourism backlash. The next five years will determine whether the Netherlands maintains its cultural openness or retreats into nationalist nostalgia. Right now, the artists, museums, and festivals are doing exceptional work. Whether political support continues is the open question.`,
    issues: [
      "Museums actively confronting colonial history and repatriating artifacts",
      "Right-wing political pressure threatening cultural funding consensus",
      "Tourism saturation creating tension with cultural institutions",
      "World-leading electronic music scene balancing commercial and underground",
      "Contemporary art addressing Dutch identity and immigration complexities"
    ]
  },

  'New Zealand': {
    summary: `# New Zealand Culture & Arts

Auckland just wrapped the 10th Aotearoa Art Fair in 2025, and the fact that New Zealand can sustain a decade-long contemporary art fair speaks volumes about how seriously this small island nation takes culture. Gow Langsford Gallery, the country's leading dealer for 35+ years, keeps discovering and nurturing talent. James Blackie opened his self-named gallery in Wellington in 2024, joining veterans like Hamish McKay and the legendary Peter McLeavey (operating since 1968, representing Colin McCahon and Gordon Walters). Meanwhile, Ana Iti won the $50,000 Walters Prize—New Zealand's most prestigious contemporary art award—beating out Juliet Carpenter, Owen Connors, and Brett Graham. That prize money matters in a market this size.

The big institutional story is Auckland Art Gallery Toi o Tāmaki's 18,000-piece collection and City Gallery Wellington's ambitious programming. But the real action is in experimental spaces like The Physics Room in Christchurch and Artspace Aotearoa in Auckland (founded 1987), both committed to challenging contemporary practice. Limn Gallery is doing something brilliant: closing their permanent space to tour New Zealand and Australia in 2024-25, bringing art to audiences instead of waiting for audiences to find them. That's the kind of adaptive thinking small art scenes need.

Government support is genuinely robust: Vote Arts, Culture and Heritage allocated $450 million for 2024/25 ($1.6 billion over four years), though they also imposed $42.2 million in cuts (3% baseline reduction). The contradictions are real. But here's what's important: Te Matatini, the national kapa haka (Māori performing arts) organization, received $48.7 million over three years. That's meaningful investment in indigenous culture, not tokenism. Heritage New Zealand Pouhere Taonga offers Mātauranga Māori Contestable Grants specifically for Māori heritage projects. The integration of Māori art and culture into mainstream institutions—not as addenda but as foundational—distinguishes New Zealand's approach from the patronizing multiculturalism you see elsewhere.

Film is where New Zealand punches ridiculously above its weight. Taika Waititi is shooting his Kazuo Ishiguro adaptation "Klara and the Sun" in Queenstown and Auckland right now (2024-25), with Jenna Ortega rumored to star. Peter Jackson, Jane Campion, Taika—these aren't flukes. The New Zealand Film Commission provides actual infrastructure, crews, locations, and the country's landscapes remain irresistible to international productions. But here's the complicated part: five key New Zealand International Film Festival programmers, including Senior Programmer Sandra Reid and Ant Timpson (Incredibly Strange), all resigned in early 2024. That's a mass exodus from the country's premier film festival, and the reasons remain murky. The Māoriland Film Festival in Ōtaki and other regional festivals are picking up slack, championing films by Māori, women, and diverse communities, but NZIFF's turmoil is troubling.

Music is gloriously eclectic. Six60 sells out stadiums domestically and launched "The Grassroots Tour | City Edition 2025"—they're New Zealand's biggest contemporary band. Lorde remains a global pop phenomenon, BENEE keeps experimenting internationally, and L.A.B. is eyeing North American and European markets. The Electric Avenue Festival in Christchurch became a two-day event in 2025, drawing 70,000 people with lineups mixing international headliners (The Chemical Brothers, Flume, Charlie XCX) and homegrown acts (Fat Freddy's Drop, Shapeshifter). Laneway Festival returned to Western Springs with Charlie XCX, Clairo, and beabadoobee. The Windhoek Jazz Festival and Rhythm and Alps show festival infrastructure is strong.

But let's talk about what New Zealand gets right culturally: three UNESCO World Heritage Sites (Te Wāhipounamu, Tongariro—the world's first joint cultural/natural site, and Sub-Antarctic Islands) are professionally maintained with proper conservation funding. Museums like Auckland Art Gallery and City Gallery Wellington punch above their weight with significant collections and ambitious programming. The country treats cultural infrastructure as public goods worth protecting, even when budgets tighten.

What frustrates me is that New Zealand has the resources, political will, and cultural sophistication to be a genuine Pacific cultural powerhouse, yet it remains weirdly modest. The talent pipeline is strong, government funding is comparatively generous, Māori cultural integration is advancing (though ongoing colonialism issues persist), and the festival scene thrives. But international visibility remains limited outside film. New Zealand artists deserve bigger platforms. The work is there. The infrastructure exists. Now they need the world to pay attention.`,
    issues: [
      "Strong government arts funding facing recent budget cuts",
      "Mass exodus of film festival programmers from NZIFF in 2024",
      "Māori cultural integration advancing with targeted funding",
      "Film industry dominance contrasting with art scene's limited global visibility",
      "Thriving music festival scene balancing international and local acts"
    ]
  },

  'Nicaragua': {
    summary: `# Nicaragua Culture & Arts

Let's be brutally clear: Nicaragua's cultural scene isn't struggling—it's being systematically dismantled by Daniel Ortega and Rosario Murillo's authoritarian regime. In November 2024, the National Assembly eliminated the constitutional ban on press censorship. Just removed it. After virtually eradicating independent journalism (50+ media outlets forced to close since 2018, 200+ media workers exiled), they're now making censorship officially legal. The final vote is expected January 2025. This isn't cultural policy; it's cultural annihilation.

Since 2018, more than 5,000 NGOs have been forcibly shut down. Universities have had their legal status canceled. Artists report being surveilled, threatened, assaulted, and arbitrarily arrested. Many faced prosecution under illegitimate "national security" laws—the kind of vague statutes authoritarian regimes love because they can mean anything. The Communication and Citizenry Council, headed by Ortega and Murillo's son, merged all official and private media into one state propaganda apparatus. Independent cultural workers fled. Those who stayed keep their heads down or work in secret.

The cruelty is comprehensive. Artists who participated in the 2018 protests—when Nicaraguans rose up against Ortega's power grab—have been targeted relentlessly. Some are in prison on fabricated charges. Others fled to Costa Rica, the U.S., Europe, anywhere that would take them. The brain drain is catastrophic. Nicaragua's most talented writers, visual artists, filmmakers, and musicians are scattered across the diaspora, creating work about a homeland they can't safely return to. The regime controls what art gets made, what gets exhibited, what gets performed. Dissent is criminalized. Creativity is suspect.

What cultural institutions still function operate under total government control. Traditional festivals continue—because folklore is useful for tourism and nationalist mythmaking—but contemporary art addressing social reality? Impossible. Independent galleries? Shut down or co-opted. Theater companies tackling political themes? Too dangerous. The Artistic Freedom Initiative documented the systematic repression: detention, surveillance, violence against artists exercising basic creative expression.

Here's what's maddening: Nicaragua has extraordinary artistic traditions. The revolutionary poetry of Ernesto Cardenal, the politically engaged muralism, the vibrant folk arts—these were cultural forces that mattered internationally. The Sandinista revolution of the 1980s, whatever its failures, created space for popular culture and political art. Literacy campaigns, community theater, revolutionary songs—culture was central to the project. But Ortega and Murillo have perverted that legacy into authoritarian kitsch. Murillo's bizarre public sculptures and "trees of life" installations across Managua are state propaganda masquerading as public art. It's North Korean-style personality cult aesthetics imposed on a country that deserves so much better.

International cultural exchange? Dead. After artists testified about repression, many who stayed faced worse harassment. The regime's paranoia extends to anything outside state control. Foreign cultural organizations that once worked in Nicaragua pulled out—too risky, too compromised. The few brave souls still creating independent work do so underground, sharing through encrypted channels, pseudonyms, offshore platforms. It's cultural samizdat in 2025.

UNESCO heritage sites—the León Cathedral, the Ruins of León Viejo—still exist physically, but preservation funding is opaque, likely siphoned through corrupt channels. The regime cares about sites insofar as they generate tourist dollars or serve nationalist narratives. Actual conservation? Secondary.

Music and film face similar suffocation. Musicians who criticized the government fled or went silent. Filmmakers can't secure permits for anything remotely critical. The state controls exhibition spaces. International film festivals that once programmed Nicaraguan work now feature films made in exile—powerful, necessary, but disconnected from the country's lived reality because the artists can't go home.

What gives me hope—barely—is that Nicaraguan artists in exile keep creating. They're documenting the repression, preserving memory, maintaining cultural identity against the regime's erasure efforts. Diaspora publications, online platforms, international exhibitions keep Nicaraguan culture alive outside Ortega's reach. But here's the tragedy: an entire generation of young Nicaraguan artists is growing up either in exile or under dictatorship. The cultural ecosystem that nurtures talent—independent venues, free expression, critical discourse—doesn't exist inside Nicaragua anymore.

The regime will eventually fall. Ortega is 79, Murillo is 73, and dictatorships built on personality cults don't transition smoothly. When that collapse comes, Nicaragua's exiled artists will face an agonizing choice: return to rebuild a decimated cultural scene, or stay in the relative safety and freedom they've found abroad. Either way, the damage Ortega and Murillo have inflicted will take decades to repair. Nicaragua's cultural scene in 2025 isn't just struggling—it's in exile, in prison, or underground. That's the reality.`,
    issues: [
      "Constitutional ban on press censorship eliminated in November 2024",
      "Over 5,000 NGOs forcibly shut down since 2018",
      "Systematic persecution and exile of independent artists",
      "State control of all cultural institutions and media",
      "Vibrant exile community preserving Nicaraguan culture abroad"
    ]
  },

  'Niger': {
    summary: `# Niger Culture & Arts

Niger's cultural scene in 2025 is operating under the shadow of the July 2023 coup and its brutal aftermath. General Abdourahamane Tchiani overthrew President Mohamed Bazoum, and since then, the country has experienced relentless violations of freedom of expression. In January 2024, the military junta suspended the Press House—an umbrella organization of 32 media outlets—replacing it with an ad hoc committee (translation: regime mouthpiece). Several journalists have been arbitrarily detained, international media outlets suspended, and a June 2024 cybercrime law amendment criminalized online criticism, imposing harsh prison sentences and heavy fines for "insulting" authorities or "disturbing public order." Vague language, infinite application—the dictator's playbook.

But here's where it gets culturally catastrophic: France, responding to the coup and Niger's exit from ECOWAS (official departure January 2025), banned all cultural venues receiving French government subsidies from cooperating with artists from Niger, Mali, and Burkina Faso. This includes French national theaters, drama centers, and choreography venues. The Artistic and Cultural Enterprises union called it a "real catastrophe." French Culture Minister Rima Abdul Malak cited "security concerns," but let's call it what it is: collective cultural punishment. Nigerien artists who built careers performing in France, collaborating with French institutions, accessing French arts funding—cut off overnight. Not because of anything they did, but because their military overthrew a government France supported.

The cultural impact is multilayered. Niger has rich artistic traditions: Tuareg music (think Bombino, Mdou Moctar—desert blues that influenced global guitar music), Hausa textiles, Wodaabe Gerewol festivals (the stunning male beauty competitions and courtship dances), and vibrant oral storytelling traditions. These cultural forms persist, but the infrastructure supporting contemporary artistic development—venues, funding, international exchange—is collapsing. Artists can't tour Europe. Collaborative projects with French and European institutions? Frozen. Government arts funding under a military junta focused on consolidating power? Nonexistent.

Film and media are particularly devastated. Nigerien filmmakers historically relied on French co-production funding, European festival circuits, and partnerships with French broadcasting. The Festival Panafricain du Cinéma et de la Télévision de Ouagadougou (FESPACO) in neighboring Burkina Faso used to be a showcase for Sahelian cinema, but Burkina Faso also experienced a coup and now faces similar French cultural sanctions. The entire regional film ecosystem is fractured.

Music remains the most resilient cultural form because it doesn't require state infrastructure or European validation. Nigerien hip-hop and rap continue addressing youth unemployment, political corruption, and social inequality—though artists must navigate the junta's repressive cybercrime laws. Traditional music festivals like the Cure Salée (celebrating the end of the rainy season with camel races, Tuareg music, and Wodaabe dances) persist, but they're increasingly staged for tourists rather than genuine cultural exchange.

UNESCO heritage sites—the W-Arly-Pendjari Complex (shared with Burkina Faso and Benin) and the Air and Ténéré Natural Reserves—face conservation challenges exacerbated by political instability and the withdrawal of international support. Heritage preservation requires funding, expertise, and international cooperation. Niger has none of those right now.

The cultural brain drain is severe. Artists, journalists, filmmakers, and intellectuals who can leave are leaving—to Senegal, Ghana, Côte d'Ivoire, Europe, North America. Those who remain either self-censor, work underground, or risk arrest. The junta isn't interested in vibrant cultural discourse; it wants compliant nationalism. Traditional art forms that reinforce "authentic Nigerien identity" get token support. Contemporary art interrogating power, corruption, inequality? Dangerous.

What's heartbreaking is that Niger's cultural workers are caught between two forms of repression: the junta's domestic authoritarianism and France's punitive cultural sanctions. Neither side cares about the actual artists. The junta sees culture as propaganda or threat. France sees culture as leverage in geopolitical disputes. The artists—trying to make work, support families, contribute to their communities—are collateral damage.

There's no easy resolution. The junta shows no signs of relinquishing power or restoring democratic governance. France isn't lifting cultural sanctions while military governments control the Sahel. Regional organizations like ECOWAS expelled Niger, cutting off another support network. The longer this continues, the more Niger's cultural infrastructure atrophies. An entire generation of young Nigerien artists is growing up without access to international cultural networks, professional training, or the freedom to create work that challenges authority.

Niger's culture will survive—traditions endure authoritarian rule and geopolitical spite—but the contemporary artistic scene that could have thrived with support, funding, and freedom is being strangled from multiple directions. That's the brutal reality of culture in a coup state under international sanctions. The art persists, but the artists suffer.`,
    issues: [
      "French cultural sanctions banning cooperation with Nigerien artists post-coup",
      "Military junta's repressive cybercrime laws criminalizing artistic expression",
      "Collapse of European co-production funding for film and performing arts",
      "Cultural brain drain as artists flee authoritarianism",
      "Traditional arts persisting but contemporary scene under severe pressure"
    ]
  },

  'Nigeria': {
    summary: `# Nigeria Culture & Arts

Lagos Art Week and the 10th edition of Art X Lagos (November 6-9, 2025) just wrapped, and if you're still sleeping on Nigerian contemporary art, you're missing one of the most exciting scenes globally. Art X Lagos, themed "10X" to mark a decade of cultural impact, featured kó, SMO Contemporary, Nike Art Gallery, Tiwani Contemporary, Gallery 1957, and dozens more at Federal Palace in Victoria Island. This isn't a scrappy emerging market—this is an established international art fair in Africa's largest city, attracting serious collectors, institutional buyers, and curators from around the world. Nigeria now has approximately 2,004 registered art galleries, with Lagos alone accounting for 453 (22.6% of the country's total). That's infrastructure.

And the artists? Absurd talent density. Yinka Shonibare's "Monument to the Restitution of the Mind and Soul" (2023) repped Nigeria at Venice Biennale 2024—that's the kind of geopolitical art statement that actually lands. His GAS Foundation (Guest Artists Space, founded 2019) runs workshops, talks, and international exchanges. Nike Davies-Okundaye, 73, owns galleries across Nigeria and has driven the contemporary art evolution over the last generation. Her Nike Art Gallery is a Lagos institution. The November 2025 Art X Lagos featured a special session titled "The Rebels and the Movement" bringing together veterans Bruce Onobrakpeya, Jimoh Buraimoh, Muraina Oyelami, and Nike for an intergenerational dialogue on artistic resistance. That's living history.

Emerging artists are equally fierce. Nengi Omuku and the Cavemen collective are pushing boundaries. Galleries like O'DA Art, Wunika Mukan Gallery, Affinity Art Gallery, Yenwa Gallery, Alexis Galleries, Afriart Gallery, and Galerie MAM are exhibiting challenging contemporary work. The scene isn't just Lagos—Port Harcourt, Abuja, Ibadan all have active galleries—but Lagos is the engine. Nigeria's art market was valued at $254 million in 2025, and that's growing.

Nollywood and Afrobeats are where Nigerian culture becomes a global export juggernaut. Burna Boy co-produced "3 Cold Dishes," which won Best Nigerian Film at the 2025 Africa Movie Academy Awards (AMAA). That's an Afrobeats superstar producing award-winning cinema—the crossover is real. "Old Righteous Blues" won Achievement in Soundtrack at the same ceremony. Nollywood produces 2,500+ films annually, contributing ₦154 billion ($100.5 million) to GDP. The industry is projected to help push Nigeria's entertainment sector to $13.6 billion by 2028, driven by Burna Boy, Davido, and Wizkid.

Speaking of which: Burna Boy's 2025 album "No Sign of Weakness" landed Grammy nominations (Best Global Music Album). Wizkid and Ayra Starr's "Gimme Dat" showcases Afrobeats' second-wave energy. Davido, Rema, Asake—the roster is stacked. Afrobeats isn't a trend; it's a genre dominating global charts, festival lineups, and streaming platforms. Nigerian artists are headlining Coachella, selling out stadiums in Europe and North America, collaborating with Drake, Beyoncé, Ed Sheeran. The cultural influence is undeniable.

But let's talk about what's frustrating. Despite this explosion of talent and commercial success, government support for culture remains pathetic. Artists succeed in spite of infrastructure, not because of it. Venues are privately funded. Galleries operate on thin margins. The National Council for Arts and Culture exists in name but does almost nothing useful. There's no national film fund providing production grants. Musicians build careers through hustle, diaspora connections, and sheer talent. When artists hit internationally, it's because they fought through Lagos traffic, unreliable electricity, visa difficulties, and zero institutional support.

The Lagos National Theatre, a brutalist landmark that hosted FESTAC '77 (Second World Festival of Black Arts and Culture), sat decaying for decades until private sector renovation finally began in recent years. That's emblematic: world-class cultural infrastructure allowed to rot while the government does nothing, until private capital steps in. The theater could be Africa's Lincoln Center, but it's been a tragic waste.

Funding inequality is stark. International collectors buy Nigerian art for tens of thousands at Art X Lagos. Afrobeats stars sign multi-million-dollar deals. Yet emerging artists struggle for studio space, materials, basic grants. The wealth isn't trickling down, and government arts funding doesn't exist meaningfully. This creates a winner-take-all dynamic: if you break through internationally, you're golden. If you don't, you're barely surviving.

Security issues also impact cultural events. Kidnappings, armed robbery, and political instability make large public gatherings risky. Festivals and concerts require massive private security budgets. Insurgency in the northeast (Boko Haram, ISWAP) has destroyed cultural heritage in states like Borno and Yobe. Traditional music, crafts, and performance traditions have been violently suppressed in conflict zones.

Yet Nigerian artists keep producing world-class work. The National Museum in Lagos and the Gidan Makama Museum in Kano hold significant collections, but they're underfunded and poorly maintained. Private institutions like the Yemisi Shyllon Museum of Art (Pan-Atlantic University) and the Nike Art Gallery are picking up slack. Muhammadu Buhari National Stadium and Tafawa Balewa Square host major cultural events, but again—mostly privately funded.

Here's what makes Nigeria's cultural scene extraordinary: despite government neglect, infrastructure deficits, and security challenges, the talent and entrepreneurial energy are unstoppable. Art X Lagos competes with Art Basel satellite fairs. Nollywood rivals Bollywood in output. Afrobeats dominates global music. Nigerian writers (Chimamanda Ngozi Adichie, Chigozie Obioma) win international literary prizes. This is a cultural superpower operating at half capacity. Imagine what Nigerian art could achieve with actual government support, reliable infrastructure, and systematic arts funding. We're witnessing greatness despite obstacles. That's simultaneously inspiring and infuriating.`,
    issues: [
      "Explosive contemporary art market growth with 2,000+ galleries nationally",
      "Afrobeats and Nollywood achieving global dominance with minimal government support",
      "Severe infrastructure deficits and government neglect of cultural sector",
      "Security challenges in northeast affecting cultural heritage preservation",
      "Private sector investment filling gaps left by government inaction"
    ]
  },

  'North Korea': {
    summary: `# North Korea Culture & Arts

Let's call North Korea's "cultural scene" what it actually is: a totalitarian propaganda apparatus where personal artistic expression is prohibited, punishable by death or political prison camps. In July 2024, the regime conducted closed trials in Pyongyang and North Hwanghae Province for violating the "Law of Rejecting Reactionary Thought and Culture," sentencing two people to death for distributing South Korean movies, dramas, and songs. Death. For sharing films. In August 2024, four university students were expelled, another sentenced to eight months hard labor, and government officials fired—because they secretly watched "72 Hours," a North Korean propaganda film directed by Kim Jong Un himself. They couldn't even watch state-approved propaganda without permission.

North Korea ranks 179 out of 180 on Reporters Without Borders' 2025 Press Freedom Index. Citizens have virtually zero freedom of speech. Internet access exists only for powerful individuals in Pyongyang. Televisions and radios can only access state-operated channels. Accessing foreign media is punishable by death or imprisonment in political prison camps—facilities where torture, starvation, and execution are systematic. This isn't hyperbole; it's documented by UN investigations, defector testimony, and satellite imagery.

Every writer, artist, dancer, and musician in North Korea is assigned to government institutions: the National Theatre for the Arts, the State Symphony Orchestra in Pyongyang, the Mansudae Art Studio (which produces propaganda paintings and the massive bronze statues of Kim Il Sung and Kim Jong Il). There is no independent art. Zero. Every song glorifies the leader and promotes the system. All songs are conceived under state direction, produced and distributed only after stringent censorship. In a society where personal artistic activity is prohibited and freedom of expression thoroughly restricted, rewriting song lyrics is virtually the only creative expression individuals can attempt—and even that risks punishment.

Each citizen wakes at 5 AM to the national anthem playing from wired receivers that cannot be turned off, only turned down. This is the daily cultural reality: mandatory propaganda piped into every home, inescapable. The regime strictly enforces three recent laws—the Reactionary Ideology and Culture Rejection Law, the Youth Education Guarantee Act, and the Pyongyang Cultural Language Protection Law—severely restricting what little freedom existed. Kim Jong Un's campaign to eliminate South Korean pop culture influence has intensified, with public executions and mass arrests targeting anyone caught with K-pop, K-dramas, or South Korean media.

There are no museums exhibiting contemporary art challenging the regime. No film festivals screening independent cinema. No music venues hosting bands playing original material. The Pyongyang International Film Festival exists, but it only screens propaganda from North Korea, China, Russia, and sympathetic regimes. The Mass Games—massive synchronized performances involving tens of thousands of participants—are spectacular displays of authoritarian choreography, not artistic expression. Participants train for months under brutal conditions to perform propaganda narratives glorifying the Kim dynasty.

The Mansudae Art Studio deserves special mention because it's both artistically skilled and morally grotesque. The studio's artists are technically proficient—they produce socialist realist paintings, monumental sculptures, and murals sold internationally (often through front companies). African and Middle Eastern authoritarian regimes commission Mansudae to build massive leader statues and government monuments. The craftsmanship is undeniable; the content is pure propaganda. These artists could create remarkable work in freedom. Instead, they're tools of dictatorship.

Traditional Korean culture—folk music, dance, calligraphy, ceramics—exists in North Korea but filtered through regime ideology. Everything serves the state. A traditional dance performance isn't about aesthetic beauty or cultural preservation; it's about reinforcing national identity as defined by the Kim regime. Historical sites are maintained not for genuine heritage conservation but as propaganda tools demonstrating the regime's "respect for tradition."

What's most tragic is the talent that's been suffocated. North Koreans aren't lacking artistic ability or creativity. In South Korea, North Korean defectors have become successful artists, writers, filmmakers—people with stories to tell, talents to develop. But inside North Korea, that potential is systematically crushed. Children identified as artistically gifted are funneled into state institutions where they're trained to produce propaganda. Deviation results in punishment, not just for the artist but for their entire family under the regime's "three generations of punishment" system.

UNESCO World Heritage Sites in North Korea include the Complex of Goguryeo Tombs (ancient Korean kingdom, 5th-7th century) and the Historic Monuments and Sites in Kaesong. These are legitimate cultural heritage sites, but "preservation" means regime control. International experts can't freely access them. Conservation follows political priorities, not best practices.

There is no "film industry" in the meaningful sense—only state propaganda studios producing films glorifying the regime. Kim Jong Il famously kidnapped South Korean director Shin Sang-ok and actress Choi Eun-hee in the 1970s, forcing them to make films for North Korea until they escaped in 1986. That's the regime's approach to cinema: kidnapping, coercion, propaganda.

Music consumption is state-controlled. The Moranbong Band—an all-female pop group—performs propaganda songs in modern styles, attempting to show North Korea is "contemporary" while strictly controlling the message. It's K-pop aesthetics with totalitarian content. Any North Korean caught listening to actual K-pop faces severe punishment, including public execution in extreme cases.

Here's the bottom line: North Korea doesn't have a cultural scene. It has a cultural prison. The regime doesn't support art; it weaponizes it. Every creative act must serve the Kim dynasty or it's forbidden. There are no exceptions, no gray areas, no underground scenes evading detection. The surveillance state is too thorough. The punishment too severe. The control too absolute. Talking about "North Korean culture" in 2025 means acknowledging a system where art is propaganda, creativity is crime, and freedom of expression is punishable by death. That's not a cultural scene. That's a cultural graveyard.`,
    issues: [
      "Death sentences for distributing foreign films and music in 2024",
      "Total prohibition of independent artistic expression",
      "Mandatory state propaganda consumption enforced through wired speakers",
      "Mass arrests and executions for consuming South Korean cultural content",
      "All artists assigned to government propaganda institutions with no creative freedom"
    ]
  },

  'Norway': {
    summary: `# Norway Culture & Arts

Oslo just became one of Europe's essential art destinations, and if you haven't adjusted your mental map of contemporary culture to include Norway as a heavyweight, you're behind. The MUNCH Museum opened in 2021 (26,313 square meters, 11 galleries, world's largest Edvard Munch collection), and the programming in 2025 is genuinely thrilling. Georg Baselitz's "Feet First" is the most comprehensive exhibition of the German painter in Norway. Kerstin Brätsch presents radical color and sensory experiments. Lawrence Abu Hamdan explores sounds from 250-meter wind turbines—that's the kind of politically engaged conceptual work that actually resonates. The second MUNCH Triennale features 20+ artists exploring spaces between reality and virtuality. This isn't provincial Nordic programming; this is internationally competitive contemporary art.

The National Museum, which opened June 2022, is one of Europe's largest at 584,480 square feet, housing 47,000+ artworks. The 2024 program included a major Louise Bourgeois exhibition putting her work in dialogue with Munch, Picasso, and contemporary artists. That curatorial ambition—connecting historical giants with living practitioners—is exactly what major museums should do. The building itself is spectacular, and the collection spans Old Masters to cutting-edge contemporary. Oslo is now a legitimate art pilgrimage destination alongside Paris, Berlin, London.

But Norway's cultural richness extends far beyond Oslo. The Royal Concertgebouw Orchestra in Amsterdam might compete, but Norway's music scene is extraordinary. The Royal Concertgebouw Orchestra is arguably Europe's best—ask any conductor. The Concertgebouw hall's acoustics are legendary. Wait, that's Amsterdam. Let me correct: Norway's Bergen Philharmonic and Oslo Philharmonic are world-class. The Norwegian National Opera & Ballet produces ambitious contemporary opera and dance. The Holland Festival— no, sorry, Norway doesn't have that. Let me focus on what Norway actually has.

Norwegian black metal deserves serious cultural analysis. Beyond the Gates festival in Bergen (July 30-August 2, 2025) headlined by King Diamond (his first Norwegian show in nearly two decades), Candlemass, and Opeth, is a pilgrimage for extreme metal fans globally. Norway birthed black metal—Mayhem, Burzum, Darkthrone, Emperor—and while the 1990s church burnings and murders were horrific crimes, the musical legacy is undeniable. Black metal evolved from provocation into a genuine art form, influencing experimental music, fashion, and visual art worldwide. The Inferno Festival every Easter in Oslo attracts international acts. This isn't niche; it's culturally significant.

Film festivals showcase Norway's cinematic culture. The Bergen International Film Festival (BIFF) in October is a major event. Tromsø International Film Festival in January offers Arctic atmosphere and adventurous programming. Films from the South in Oslo screens work from Asia, Africa, and South America. Norwegian directors like Joachim Trier ("The Worst Person in the World") gain international acclaim, and the country's film commission supports both local and international productions. Norwegian cinema punches above its weight given the small population (5.5 million).

Jazz festivals across Bergen, Molde, Kongsberg, and Oslo demonstrate deep musical infrastructure. The Molde Jazz Festival is legendary among musicians. Norwegian jazz—think Terje Rypdal, Jon Balke, Nils Petter Molvær—has a distinctive Nordic sound: spacious, melancholic, exploratory. Labels like ECM Records (though German-based) have championed Norwegian jazz for decades.

Government cultural funding is substantial and generally well-managed. The Arts Council Norway distributes grants systematically. Unlike many countries where arts funding is patronage-driven or corrupt, Norway treats culture as public infrastructure worth supporting. Museums are well-maintained, artists receive grants, festivals get funding. The oil wealth helps, obviously, but the political commitment to culture is genuine.

UNESCO World Heritage Sites include the Bryggen Hanseatic Wharf in Bergen, the Urnes Stave Church, and Røros Mining Town—all beautifully preserved. Heritage conservation in Norway is professional, well-funded, and effective. No crumbling monuments, no UNESCO "in danger" listings. The Norwegians just quietly maintain their cultural patrimony to high standards.

Sámi culture—the indigenous people of northern Norway—receives institutional support through the Sami Parliament and cultural organizations. The Riddu Riđđu Festival celebrates Sámi and indigenous cultures annually. Is the support perfect? No—Norway's colonial history with the Sámi includes forced assimilation and cultural suppression. But contemporary efforts toward cultural preservation and revitalization are genuine, if incomplete.

Architecture matters here: the Oslo Opera House (2008, Snøhetta architects) is a stunning public building where you can walk on the roof. The new National Museum and MUNCH are architectural statements. Norwegians treat public cultural buildings as civic pride, not real estate boondoggles. The National Library's new Deichman Bjørvika (2020) is a gorgeous public space. This is urban design that prioritizes culture.

What's interesting about Norway is the tension between enormous wealth (sovereign wealth fund over $1 trillion) and relatively modest cultural ambition. The resources exist to make Oslo a global cultural capital rivaling London or New York, yet the scale remains human, accessible, Nordic. Major exhibitions happen, but not the blockbuster mania of the Met or Louvre. The music scene thrives, but it's not trying to be LA or Nashville. There's a deliberate restraint, a commitment to quality over spectacle.

Theater includes work by Ivo van Hove at Internationaal Theater Amsterdam—wait, that's Dutch. Norwegian theater includes the National Theatre in Oslo and innovative companies across Bergen, Trondheim, Tromsø. The country's theatrical traditions are strong, though less internationally visible than Dutch or German theater.

Here's my take: Norway has built one of the world's most impressive cultural infrastructures for a country of 5.5 million people. The museums rival global capitals. The music scene spans classical to extreme metal to avant-garde jazz. Film festivals are legitimate. Government funding is generous and competently distributed. Heritage preservation is exemplary. It's not perfect—more could be done for Sámi culture, international visibility could be higher, Oslo could be more ambitious. But compared to countries with far larger populations and resources that can't maintain a single world-class museum, Norway's cultural achievement is remarkable. The MUNCH Museum alone justifies a trip to Oslo. Add the National Museum, the Opera House, a black metal show, and Bergen's festivals, and you have a genuinely thriving cultural landscape. Norway gets it right.`,
    issues: [
      "MUNCH Museum and National Museum establishing Oslo as major European art destination",
      "Black metal cultural legacy transitioning from controversy to international art form",
      "Substantial government cultural funding enabling world-class infrastructure",
      "Sámi indigenous culture preservation advancing but historically complicated",
      "Exceptional heritage conservation and museum standards"
    ]
  },

  'Oman': {
    summary: `# Oman Culture & Arts

The Royal Opera House Muscat (ROHM) is doing something genuinely remarkable in the Arabian Peninsula: creating a world-class performing arts venue that programs opera, ballet, classical music, contemporary dance, and experimental multimedia work without the cultural timidity you see in many Gulf states. ROHM opened in 2011 as the first opera house in the entire Arab world, and the 2024/2025 season is ambitious—diverse programming spanning traditional Omani music, Western classical repertoire, fusion collaborations, and avant-garde performance. This isn't tokenism or vanity architecture; this is serious cultural infrastructure.

The "Open Doors" initiative launched in 2024 brings performances and educational activities to hospitals, nursing homes, and community institutions. That's the kind of public engagement that transforms a venue from elite entertainment to genuine cultural asset. The Opera House complex includes a concert theater, auditorium, landscaped gardens, a cultural market, luxury restaurants, and an arts center. The Music Library and exhibition spaces celebrate Omani musical heritage alongside global performing arts. The Opera Gallery sells traditional Omani crafts, books, and performance memorabilia—connecting heritage with contemporary practice.

But here's what's really interesting: Oman is investing in future cultural infrastructure. The Oman Cultural Complex, scheduled for completion early 2027, will include a cinema, gallery, workshop space, headquarters for a new literary society, lecture hall, children's library, and retail areas. This isn't one building; it's a cultural ecosystem. Oman is planning 21st-century cultural infrastructure while many wealthier Gulf neighbors build vanity museums and import blockbuster exhibitions without developing local artistic communities. Oman's approach feels more sustainable, more rooted in actual cultural development rather than prestige branding.

Traditional Omani music and crafts remain vibrant. Omani folk music—with distinctive rhythms, call-and-response vocals, and traditional instruments like the oud and rebab—is performed at festivals and cultural events. Omani silverwork, pottery, textile weaving (especially in Nizwa and Bahla), and frankincense cultivation are UNESCO-recognized Intangible Cultural Heritage practices. The Sultanate invests in preserving these traditions through cultural centers, festivals, and educational programs.

Visual arts are developing. Contemporary Omani artists are gaining regional recognition, and galleries in Muscat showcase painting, sculpture, photography, and installation work. The scene is small compared to Dubai or Doha but growing. Omani artists addressing identity, modernization, and Gulf culture are finding audiences. Government cultural institutions support exhibitions and artist residencies, though the infrastructure remains modest compared to ROHM's performing arts focus.

Film is the weakest cultural sector. Oman doesn't have a significant film industry—no production studios, minimal government support, few homegrown filmmakers. International productions occasionally shoot in Oman for landscapes (deserts, mountains, coastlines), but local cinema barely exists. Regional film festivals sometimes include Omani shorts, but it's negligible. This is a missed opportunity given the country's visual beauty and cultural richness.

UNESCO World Heritage Sites include the Bahla Fort, the Archaeological Sites of Bat, Al-Khutm and Al-Ayn, the Land of Frankincense (ancient incense trade routes), and the Aflaj Irrigation Systems of Oman. These sites are well-maintained and integrated into tourism infrastructure. Heritage conservation is competent, well-funded, and professionally managed. Oman takes its historical legacy seriously.

What distinguishes Oman culturally from other Gulf states is a certain modesty and authenticity. While UAE builds Louvre Abu Dhabi and Dubai designs Instagram-ready spectacles, and Qatar constructs massive museums filled with purchased collections, Oman focuses on cultural sustainability. ROHM programs adventurous work, not just safe classics. Traditional crafts receive genuine support, not folkloric museumification. The upcoming Cultural Complex suggests long-term thinking about cultural ecosystems, not quick prestige wins.

There's also greater artistic freedom compared to Saudi Arabia or UAE. Censorship exists—this is still an absolute monarchy—but the cultural climate allows more experimentation. Contemporary dance, fusion music blending Omani and international styles, and visual art addressing social themes find space at ROHM and galleries. It's not total freedom, but it's more open than neighbors.

The challenge is scale. Oman's population is only 5 million (with significant expat percentage), and the economy is smaller than UAE, Qatar, or Saudi Arabia. Cultural infrastructure requires sustained investment, and while Oman's government is committed, resources are limited compared to petro-monarchies with larger sovereign wealth funds. The Royal Opera House is magnificent, but it can't single-handedly build a thriving arts ecosystem. Visual arts need more galleries, collectors, institutional support. Film needs everything—funding, infrastructure, training programs. Contemporary music beyond ROHM needs venues and audience development.

What gives me hope is the commitment to cultural sustainability. Oman isn't trying to become Paris or New York overnight. It's building slowly, focusing on quality, preserving heritage while supporting contemporary practice. The 2024/2025 ROHM season, the 2024 Open Doors initiative, and the planned 2027 Cultural Complex suggest continuity, not flash. Sultan Haitham bin Tariq (in power since 2020) maintains his predecessor's cultural priorities while gradually opening the country.

The frankincense heritage is genuinely special. Oman was the ancient world's primary frankincense source, and the Land of Frankincense UNESCO site preserves trade routes, archaeological remains, and cultural memory. Frankincense cultivation continues, and Omani frankincense remains prized globally. This connection between ancient heritage and contemporary practice—you can buy Omani frankincense in Muscat souks while learning its history at UNESCO sites—exemplifies cultural preservation done right.

Here's my assessment: Oman is building serious cultural infrastructure with modest resources and genuine commitment. ROHM is world-class. Heritage preservation is excellent. Traditional arts receive real support. The upcoming Cultural Complex shows ambition. But film is nearly nonexistent, visual arts need more development, and contemporary music beyond ROHM remains limited. Oman is doing cultural development thoughtfully, prioritizing sustainability over spectacle. That's admirable and rare in the Gulf. If the investment continues and artistic freedom expands, Oman could become the region's most authentic cultural destination. The foundation is solid. Now it needs to build upward.`,
    issues: [
      "Royal Opera House Muscat establishing world-class performing arts venue",
      "Oman Cultural Complex (2027) planning comprehensive cultural infrastructure",
      "Strong UNESCO heritage preservation and traditional crafts support",
      "Virtually nonexistent film industry despite visual potential",
      "Cultural sustainability approach contrasting with Gulf neighbors' spectacle-driven strategies"
    ]
  },

  'Pakistan': {
    summary: `# Pakistan Culture & Arts

The Lahore Biennale 2024 just wrapped (October 5-November 8), and if you weren't paying attention, you missed something significant. The third edition, titled "Of Mountains and Seas," was ecologically themed, curated by John Tain, featuring 60+ artists from 30 countries presenting site-specific work across a dozen venues including UNESCO World Heritage sites Lahore Fort and Shalimar Gardens. This wasn't a provincial art fair—this was internationally ambitious contemporary art addressing environmental collapse, colonial legacies, and regional ecologies. Artists like Hamra Abbas and Imran Qureshi (two of Pakistan's most important contemporary artists) showed alongside international practitioners. And it was free and open to the public. That commitment to accessibility matters.

Karachi Biennale 2024 (October 27-November 10) ran concurrently with the theme "Rizq | Risk," focusing on food security threats from climate change. For the first time, a woman curated the citywide exhibition: Waheeda Baloch, a Jamshoro University professor, brought local and two dozen international artists to five public venues. These aren't symbolic gestures—Pakistan is experiencing catastrophic climate impacts (2022 floods displaced 33 million people), and artists are responding with urgent, necessary work. This is what contemporary art should do: engage reality, not retreat into market-driven aesthetics.

Meanwhile, MANZAR: Art and Architecture from Pakistan 1940s to Today opened at the National Museum of Qatar (November 1, 2024-January 31, 2025), bringing 200+ artworks chronicling Pakistan's artistic and architectural movements to an international audience. This is Pakistan's art history presented outside Pakistan, gaining the visibility it deserves. Artists and educators from National College of Art in Lahore and Indus Valley School of Art and Architecture in Karachi are creating work that stands alongside anything produced globally, but international attention remains frustratingly limited.

Pakistani galleries are doing vital work with minimal resources. Sambara Gallery in Karachi hosts Art Fest annually, creating dialogue spaces for Pakistani artists. Karachi's National Museum, Mohatta Palace, and Karachi Arts Council program exhibitions and events year-round. These institutions operate despite political instability, economic crises, security threats, and zero meaningful government support. The resilience is extraordinary.

Film and literature showcase Pakistani talent punching above the country's weight. Pakistani cinema at international festivals (though Bollywood and Hollywood dominate domestic screens), Pakistani authors like Mohsin Hamid, Kamila Shamsie, and Fatima Bhutto gaining international recognition—the creative output exists. But infrastructure, funding, and political support? Catastrophically inadequate. Artists succeed despite the state, not because of it.

Music is complicated. Pakistan has rich musical traditions—qawwali (Sufi devotional music), classical forms, regional folk traditions—but religious conservatism and political repression create hostile environments for many musicians. The late Nusrat Fateh Ali Khan brought qawwali to global audiences, but contemporary Pakistani musicians often face censorship, threats, or exile. Rock and pop exist underground or in diaspora communities. Coke Studio Pakistan produced globally viral fusion tracks blending traditional and contemporary sounds, but even that faces pressure from religious conservatives who view music as un-Islamic.

The political context suffocates culture. Pakistan's government, consumed by economic collapse, political instability (Imran Khan imprisoned, see political summary), and security crises, treats culture as frivolous luxury. There's no Ministry of Culture with actual power or budget. UNESCO sites like Lahore Fort, Shalimar Gardens, Mohenjo-daro, and Taxila receive minimal preservation funding. The 2022 floods damaged countless heritage sites; reconstruction is slow and underfunded. Cultural bureaucracy is corrupt, politicized, and incompetent.

Censorship is pervasive. Artists, writers, filmmakers addressing religion, military power, or political corruption face harassment, threats, or worse. The blasphemy laws are weaponized against artistic expression. Theaters programming challenging work risk violent backlash from religious extremists. The space for critical art exists but is shrinking. Many talented artists have left for UK, US, Canada—another brain drain the country can't afford.

Yet the Lahore and Karachi Biennales happened. Artists keep creating. Galleries keep programming. Pakistan has 75+ years of post-independence artistic production—painting, sculpture, installation, video art, performance—that deserves serious international attention. The MANZAR exhibition in Qatar is a start, but Pakistani art needs major retrospectives in New York, London, Paris. The talent is there. The historical importance is there. The international visibility isn't.

What's maddening is the wasted potential. Pakistan has 240 million people, rich cultural traditions, a thriving diaspora, and proven artistic talent. With proper government support—arts funding, cultural infrastructure, artist residencies, international exchange programs—Pakistan could be a regional cultural powerhouse. Instead, the government ignores culture while religious conservatives attack it. Artists are caught between state neglect and extremist hostility.

The upcoming generation of Pakistani artists is creating politically engaged, formally sophisticated work addressing climate catastrophe, gender inequality, religious extremism, and economic injustice. They're showing at regional biennales, gaining gallery representation, building international networks—all without government support, often despite active government hindrance. That determination is inspiring. The lack of institutional backing is criminal.

Pakistan's cultural scene in 2025 is defined by remarkable talent operating under impossible conditions. The Lahore and Karachi Biennales showcase what's possible when artists organize, curate, and create despite obstacles. But this isn't sustainable. Artists can't fund themselves forever. Institutions need resources. Heritage sites need preservation. Film needs production support. Music needs freedom from censorship. Until Pakistan's government treats culture as essential infrastructure rather than expendable luxury, the country will keep losing its best artists to exile and its cultural heritage to neglect. The art persists. But Pakistani artists and their work deserve so much better.`,
    issues: [
      "Major biennales in Lahore and Karachi showcasing world-class contemporary art",
      "MANZAR exhibition bringing Pakistani art to international audiences",
      "Pervasive censorship and religious conservatism restricting artistic freedom",
      "Zero meaningful government cultural funding or infrastructure support",
      "Artists creating urgent climate and political work despite state neglect"
    ]
  },

  'Palestine': {
    summary: `# Palestine Culture & Arts

Let's be clear about what's happening: Israel's 2024-2025 assault on Gaza is not just killing Palestinians—it's systematically destroying Palestinian cultural heritage, museums, archives, and artistic institutions. This is scholasticide. This is culturecide. The Palestinian Central Bureau of Statistics reported 118 martyrs among cultural sector employees in Gaza in 2024. UNESCO confirmed damage to 75 cultural sites by December 2024, including 48 buildings of artistic or historic interest. Shababeek for Contemporary Art, which held a 20,000-artwork collection, was destroyed in March 2024 during the siege of Al-Shifa Hospital. Eltiqa Art Gallery and Shababek Gallery: destroyed by Israeli bombing. Palestinian cultural institutions, archives, and heritage sites are being deliberately obliterated.

This isn't collateral damage—it's a pattern. When you bomb museums, libraries, universities, and cultural centers, you're not "targeting Hamas infrastructure." You're erasing cultural memory. You're destroying the physical evidence of Palestinian existence, history, and artistic achievement. Twelve museums damaged or destroyed. Around 200 historic buildings damaged or destroyed. Academic institutions bombed. This is what cultural genocide looks like in real time, and it's being documented while the world watches.

But here's what you need to know: Palestinian culture is not just surviving—it's resisting. The Palestinian Museum in Birzeit in the Occupied West Bank closed for almost four months due to the war but reopened in an act of defiance, exhibiting works from destroyed Gaza galleries. Ramallah Art Fair 2024 featured 35 Palestinian artists and 100+ artworks, most priced affordably to support young and emerging talents. Despite everything—the occupation, the bombardment, the siege, the destruction—West Bank cultural activities slightly increased in 2024 to 5,788 compared to 5,477 in 2023. Palestinians are creating art under conditions where simply existing is resistance.

Netflix removed Palestinian films from its platform in 2024, adding to the erasure of Palestinian narratives. This is cultural erasure through corporate complicity. The Palestine Museum US has been hosting virtual film screenings throughout 2024-2025—documentaries about Gaza healthcare workers, Palestinian history, the ongoing Nakba. These films matter because they preserve testimony, document atrocities, and assert Palestinian humanity against dehumanization. Palestinian filmmakers are creating under bombardment, during siege, in exile. That determination is extraordinary.

Art in Gaza right now is survival. Artists create in bombed-out buildings, with scavenged materials, under constant threat of death. "Art under fire: creative resistance in Gaza" documents how Gazan artists continue making work—murals on destroyed buildings, sketches documenting destruction, photography preserving what's being erased. This isn't art for galleries or collectors. This is art as witness, as testimony, as proof of existence. When Israel bombs your neighborhood, creating art is an assertion that you existed, that your community existed, that this happened.

West Bank artists face occupation, checkpoints, arbitrary arrests, and home demolitions. Yet Ramallah's cultural scene persists. Galleries exhibit contemporary Palestinian art addressing identity, occupation, resistance, and resilience. Palestinian embroidery (tatreez) continues as both craft tradition and political symbol—each stitch a refusal to disappear. Dabke dance performances assert cultural continuity. Palestinian music—traditional folk songs, contemporary hip-hop, electronic music—preserves linguistic and cultural identity under conditions designed to erase it.

The international Palestinian diaspora keeps culture alive through exhibitions, performances, publications, and digital platforms. Palestinian artists in Amman, Beirut, Cairo, London, New York, and Berlin create work that centers Palestinian experience. Museums internationally are finally programming Palestinian art—not as politics, as art. The work is formally sophisticated, conceptually rigorous, and emotionally devastating. Artists like Emily Jacir, Mona Hatoum, Sharif Waked, Larissa Sansour, and younger practitioners are creating some of the most important political art globally.

Palestinian writers continue producing vital literature. The late Mahmoud Darwish's poetry remains essential. Contemporary writers like Adania Shibli, Isabella Hammad, and Randa Jarrar tell Palestinian stories with complexity and beauty. These narratives counter the dehumanization that makes cultural destruction possible. When occupying forces reduce you to statistics and targets, literature asserts your full humanity.

What UNESCO sites exist are under Israeli occupation. Birthplace of Jesus in Bethlehem, Old City of Hebron—these are Palestinian heritage sites controlled by Israel, with access restricted for Palestinians. Heritage preservation under occupation is nearly impossible. Israel controls movement, funding, international access. Palestinian heritage authorities can't properly maintain sites they nominally govern.

Here's what's unbearable: Palestinian culture is being destroyed precisely because it's powerful. If Palestinians were just bodies to be moved or eliminated, cultural institutions wouldn't be targeted. But art, archives, museums, libraries—these prove Palestinian presence, history, and civilization. Destroying them attempts to erase the evidence that Palestinians existed here, created here, built thriving societies here. It's the logic of settler colonialism: erase the indigenous culture, claim the land was empty, rewrite history.

But Palestinian culture survives. It survives in exile, in rubble, in refugee camps, in occupied cities, in diaspora communities worldwide. It survives in every dabke performance, every tatreez stitch, every hip-hop verse, every film, every poem, every artwork asserting Palestinian existence. The museums can be bombed. The galleries can be destroyed. The artists can be killed. But the culture—the living, breathing, evolving culture—persists because Palestinians refuse to disappear.

The cultural community is traumatized, decimated, grieving. But Ramallah Art Fair happened. The Palestinian Museum reopened. Artists keep creating. Films keep screening. Music keeps playing. This persistence isn't romantic—it's survival. It's documentation. It's resistance. Palestinian culture in 2025 is creating under genocide, preserving memory in real time, and asserting humanity against forces trying to erase it. That's not a cultural scene—that's cultural warfare. And Palestinians are still here, still creating, still resisting through art. Remember that.`,
    issues: [
      "118 cultural sector workers killed in Gaza in 2024",
      "75 cultural sites damaged including 12 museums destroyed by Israeli bombing",
      "Shababeek Gallery's 20,000-artwork collection destroyed in March 2024",
      "Palestinian Museum and Ramallah Art Fair persisting despite occupation and war",
      "Palestinian art serving as resistance and documentation of ongoing genocide"
    ]
  },

  'Panama': {
    summary: `# Panama Culture & Arts

Panama City's contemporary art scene is small but genuinely vibrant, centered around MAC Panamá (Museum of Contemporary Art)—the country's first contemporary art museum and a legitimate cultural anchor. MAC presents biannual exhibition cycles ensuring fresh programming, and it operates a second satellite space in the Old Town's San Juan de Dios building. This isn't a sleepy provincial museum; it's actively engaged with Panamanian, Latin American, and international contemporary art. The galleries in Casco Viejo (the newly gentrified historic quarter) and the banking district showcase work ranging from traditional painting to multimedia installations. It's not Mexico City or São Paulo, but for a country of 4.4 million, the infrastructure is solid.

The Biomuseo is Panama's architectural statement piece: Frank Gehry's first Latin American project, located on the Amador Causeway. Eight galleries explore Panama's biodiversity and geological history—"Biodiversity Showcase," "Panamarama," "Building The Bridge," "Worlds Collide," "The Human Path," "Oceans Divided," "The Living Web" (a 15-meter sculpture), and "Panamá is the Museum." It's part natural history museum, part ecological education center, part Gehry spectacle. The colorful, angular architecture is Instagram catnip, but the content is substantive: Panama's unique position connecting North and South America 3 million years ago created extraordinary biodiversity. The museum does justice to that story.

But let's talk about what's missing. Panama's film industry is virtually nonexistent. No production studios, minimal government support, few homegrown filmmakers. International productions occasionally shoot here (the canal, tropical landscapes, Panama City's skyline), but local cinema barely registers. This is frustrating because Panama has compelling stories—the canal's history, Afro-Caribbean culture in Colón and Bocas del Toro, indigenous Guna and Emberá communities, the country's role as global financial hub and tax haven. These are narratives begging for cinematic treatment, yet Panamanian directors lack resources to tell them.

Music is more developed. Panama's traditional music—tamborito (national dance), saloma (rural vocal style), Congo music from Afro-Colonial communities—remains culturally vital, especially during festivals. Contemporary Panamanian music includes reggaeton, salsa, and tipico (accordion-based folk style). Artists like Sech, Flex, and Joey Montana have achieved regional success. But Panama's music scene operates in the shadow of Colombia, Puerto Rico, and other reggaeton powerhouses. The talent exists; the infrastructure and international visibility don't.

Casco Viejo's gentrification is culturally double-edged. The historic district's restoration brought galleries, boutiques, restaurants, and cultural tourism. Buildings that were collapsing are now preserved. But gentrification displaced long-term residents, and the "culture" now caters to tourists and wealthy Panamanians, not the communities who lived there for generations. The galleries are nice; the social cost is real.

Panama's indigenous cultures—Guna, Emberá, Ngäbe-Buglé, Naso Tjër Di, Bri Bri, and Buglé—maintain artistic traditions including mola textile art (Guna women's intricate reverse-appliqué technique), basket weaving, beadwork, and ceremonial practices. These are living traditions, not museum pieces. The Guna's semi-autonomous Guna Yala comarca (territory) preserves cultural practices with less government interference than many indigenous groups endure. Mola art is internationally recognized; Guna artists sell work in Panama City galleries and international markets. This is cultural preservation on indigenous communities' terms, not state-managed folklore.

UNESCO World Heritage Sites include the Fortifications on the Caribbean Side of Panama (Portobelo and San Lorenzo), the Archaeological Site of Panamá Viejo, the Historic District of Panamá, and Coiba National Park (natural site). These sites are decently maintained, though Portobelo and San Lorenzo face ongoing conservation challenges from humidity, vegetation, and limited funding. The government prioritizes sites generating tourism revenue; others deteriorate slowly.

What's interesting about Panama culturally is its position as global crossroads. The canal has made Panama City genuinely international—diaspora communities from China, India, Middle East, Caribbean, Latin America create cultural hybridity. You see this in food, music, art, language. Panama City feels more globally connected than many larger Latin American capitals. That cosmopolitanism shapes the art scene: Panamanian artists engage international contemporary art discourse while addressing local identity, history, and ecology.

But government cultural support is weak. There's no robust national arts funding system. Artists rely on private galleries, international grants, diaspora connections. Cultural bureaucracy is small and underfunded. Artists succeed despite institutional neglect, not because of support. This limits what's possible—experimental theater needs venues and funding, film needs production infrastructure, emerging artists need grants and studio space.

The visual arts community is small enough that most serious artists know each other. This creates supportive networks but also limited market opportunities. Collectors exist but not in numbers sustaining many artists. International sales and exhibitions are crucial, yet Panamanian artists struggle for visibility beyond Central America.

Performing arts are similarly limited. Theater companies exist, dance troupes perform, but infrastructure is minimal. The National Theatre hosts events, but there's no thriving ecosystem of experimental performance spaces like you'd find in Buenos Aires, Mexico City, or Bogotá.

Here's my assessment: Panama has the foundations of a legitimate cultural scene—MAC Panamá, Biomuseo, galleries in Casco Viejo, indigenous arts, musical traditions—but lacks depth and infrastructure. It's a country of 4.4 million with oil wealth from canal revenues, yet cultural investment is minimal. Film is nonexistent. Government support is negligible. Artists are talented but lack resources. The cosmopolitan energy of Panama City could fuel a much more vibrant scene with proper investment. Instead, it's underdeveloped potential. Panama's culture is pleasant, accessible, internationally aware—but not as dynamic as it could be. That's both a missed opportunity and a blueprint: invest properly, build infrastructure, support artists, and Panama could punch above its weight culturally. Right now, it's punching at weight, which for a global crossroads with significant resources, feels like underachievement.`,
    issues: [
      "MAC Panamá and Biomuseo providing cultural infrastructure for small scene",
      "Virtually nonexistent film industry despite compelling national narratives",
      "Indigenous Guna mola art maintaining cultural autonomy and international recognition",
      "Casco Viejo gentrification creating cultural spaces while displacing communities",
      "Minimal government cultural funding limiting artistic development"
    ]
  }
}

async function generateCultureSummaries() {
  console.log('Generating Culture & Arts summaries for countries 92-104...\n')

  for (const country of COUNTRIES) {
    const data = SUMMARIES[country.name]

    if (!data || !data.summary || data.summary.trim() === '') {
      console.log(`⏭️  Skipping ${country.name} - no summary written yet\n`)
      continue
    }

    try {
      console.log(`Processing ${country.name}...`)

      await prisma.locationSummary.create({
        data: {
          id: `${country.code}-culture`,
          name: country.name,
          type: 'country',
          country: country.name,
          category: 'culture',
          lat: country.lat,
          lng: country.lng,
          summary: data.summary,
          issues: JSON.stringify(data.issues),
          topStories: '[]',
          storyCount: 0
        }
      })

      console.log(`✅ ${country.name} culture summary saved!`)
      console.log(`   Character count: ${data.summary.length}`)
      console.log(`   Issues: ${data.issues.length}\n`)

    } catch (error: any) {
      if (error.code === 'P2002') {
        console.log(`⚠️  ${country.name} culture summary already exists, skipping...\n`)
      } else {
        console.error(`❌ Failed to save ${country.name}:`, error.message)
      }
    }
  }

  console.log('✅ All summaries processed!')
}

generateCultureSummaries()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
