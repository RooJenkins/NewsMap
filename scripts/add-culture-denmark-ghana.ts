import 'dotenv/config'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

// DENMARK CULTURE SUMMARY
const DENMARK_CULTURE = {
  name: 'Denmark',
  type: 'country' as const,
  lat: 56.2639,
  lng: 9.5018,
  country: 'DK',
  category: 'culture' as const,
  summary: `Copenhagen Contemporary just dropped Marta Minujín's first European retrospective, and let me tell you—watching this 82-year-old Argentine pop artist's psychedelic installations fill that massive 7,000-square-metre former welding hall in Refshaleøen is exactly the kind of cultural flex Denmark does best. "Intensify Life" runs through April 2025, and it's pure maximalist joy in a country that usually worships minimalist design. Meanwhile, Denmark just secured the biggest film funding injection in decades—DKK 98 million annually starting 2025 from a streaming levy, finally making Netflix and Disney pay their dues. The catch? Denmark was literally the only country in Europe besides Luxembourg without a film tax incentive until they announced a 25% rebate kicking off in 2026. Better late than never, but Danish filmmakers have been hemorrhaging to Sweden and Czech Republic for years while politicians debated. The Film Agreement 2024-2027 pumps DKK 720 million total into the industry, and you can already feel the energy shifting—Jonas Struck got a HARPA nomination for his film score work, Raymond Enoksen's "Stranger" is premiering March 2025, and the Copenhagen Film Festival is booking international premieres again. But here's what's really happening: Denmark's art scene is having a quiet, sophisticated moment while everyone's looking at Berlin or Paris.

The National Gallery just pulled off the most ambitious Michelangelo exhibition in 150 years—not in Rome, not in Florence, but in Copenhagen. That's the confidence we're talking about. CHART, the Nordic region's leading contemporary art fair, launched CHART Public in 2025, turning the fair into a open-call extravaganza for scenographers, designers, and architects alongside the usual gallery circus. Kunsthal Charlottenborg is showcasing the Royal Danish Academy of Fine Arts' 2025 graduating class, and the work is fearless—AI and algorithms, gender fluidity, climate catastrophe, all rendered in Denmark's signature blend of craft and conceptual rigor. There's no singular "Danish aesthetic" anymore, but there's a common thread: tactile materials, ceramics, textiles, things you want to touch. It's a rejection of the screen, a return to the physical, and it's happening across galleries from Den Frie Centre to the experimental spaces in Nørrebro.

Danish cinema is in a strange spot—creatively vibrant, financially precarious, politically charged. The 2% VoD investment obligation forces streamers to fund Danish productions starting 2025, but the DKK 125 million annual rebate won't launch until 2026, meaning one more year of watching productions flee to cheaper territories. The Odense International Film Festival and Copenhagen's annual showcase keep programming bold work, but the gap between Denmark's auteur reputation (Susanne Bier, Nicolas Winding Refn, Thomas Vinterberg) and its current production capacity is widening. The Nordic Film Music Days in 2024 highlighted Danish composers like Jonas Struck, proving the talent pipeline is strong, but talent doesn't pay for crew and equipment.

Then there are the UNESCO sites—twelve in total, with the Viking ring fortresses officially joining the list in September 2024 at the Riyadh conference. Kronborg Castle still stages Hamlet annually (because of course it does), and the Jelling Mounds, Roskilde Cathedral, and Stevns Klint draw heritage tourists year-round. But Denmark's culture ministry isn't just preserving the past—they're weaponizing it. The Viking fortresses inscription is soft-power genius: Denmark as the cradle of Nordic civilization, the original European democracy, the progressive inheritor of a warrior tradition now channeled into climate leadership and social welfare. It's nation-branding disguised as heritage conservation, and it's working.

The tension in Danish culture right now is between accessibility and elitism. The Statens Kunstfond (Danish Arts Foundation) funds experimental work that most Danes will never see, while MARTE and Louisiana Museum pack in crowds with blockbuster shows. The streaming levy democratizes funding, but the rebate benefits big-budget productions that hire internationally, not local indies. And while Copenhagen's galleries boom, the rest of Denmark—Aarhus, Odense, Aalborg—feels left behind. The art world is centralizing in the capital, and that's creating resentment. Still, Denmark's culture sector is punching above its weight: five million people producing world-class museums, competitive film festivals, and a contemporary art scene that's intimate enough to feel accessible but ambitious enough to matter internationally. Summer 2025 brings Monster Chetwynd's total installation at CC Create, and if you know Chetwynd's work, you know it'll be unhinged, brilliant, and thoroughly un-Danish in the best way possible.`,
  issues: JSON.stringify([
    'Historic film funding boost via streaming levy and 25% tax rebate launching 2026',
    'Marta Minujín retrospective and CHART Public redefining contemporary art scene',
    'Viking fortresses UNESCO inscription as nation-branding strategy',
    'Cultural centralization in Copenhagen creating regional disparities',
    'Tension between auteur cinema reputation and production capacity gaps'
  ])
}

// DOMINICAN REPUBLIC CULTURE SUMMARY
const DOMINICAN_REPUBLIC_CULTURE = {
  name: 'Dominican Republic',
  type: 'country' as const,
  lat: 18.7357,
  lng: -70.1627,
  country: 'DO',
  category: 'culture' as const,
  summary: `Santo Domingo's art scene just had its "it has arrived" moment, according to dealer Marwan Zakhem, and he's not wrong. Gallery 1957, Tate representatives, Victoria and Albert Museum curators, and Sotheby's brass all descended on Accra Cultural Week—wait, wrong country—but they're also showing up in Santo Domingo, because the Caribbean art world is exploding and the DR is riding that wave hard. The Arawak Art Gallery, founded by Mildred Canahuate in 1981, is still the OG contemporary space on Calle Rafael Augusto Sanchez, showing emerging Dominican artists who blend local surrealism with global contemporary trends. Galerie Marassa curates shows that bounce between Latin American firebrands and European conceptualists, creating dialogues that feel less like cultural exchange and more like creative combat. The Museo de Arte Moderno offers free admission on Wednesdays, which is either brilliant populist policy or a tacit admission that nobody's paying to see Dominican contemporary art yet. Probably both.

Then there's the brand-new Galería Emil Silenzio, which opened in April 2024 as a vanity project-slash-serious art space dedicated entirely to visual artist Emil Silenzio's work. Is it self-indulgent? Absolutely. Is the work good enough to justify a whole gallery? We'll see. Meanwhile, Galería Punta Cana is doing the resort-town thing—contemporary pieces that "blend local and international influences," which usually means palatable abstraction for tourists who want to feel cultured between beach days. Puerto Plata's Galería de Arte Raffaele Corvino is more interesting, showcasing genuine experimentation from local and international artists in a city that doesn't get enough art-world attention.

The 18th Santo Domingo Global Film Festival runs January 28 to February 4, 2026, and after 17 editions, it's finally getting international credibility. The festival's mission—"offering Dominicans and visitors access to cinema's unique perspective on global issues through personal stories"—sounds like standard festival-speak, but the programming is sharp, favoring auteur-driven narratives from Latin America, Africa, and the Caribbean over Hollywood overflow. The 13th Annual Dominican Film Festival at Symphony Space in New York is where the diaspora story gets told, and it's essential viewing if you want to understand how Dominican filmmakers navigate identity between the island and Washington Heights. But here's the problem: the DR doesn't have the production infrastructure to support its filmmaking ambitions. There's talent, there's stories, but there's no tax incentive, no major studios, no post-production facilities worth the name.

Music is where the Dominican Republic actually dominates. Barbarella 2025 is returning with its "summer from another world" futuristic music festival vibe, mixing reggaeton, dembow, and electronic music into something that feels both hyperlocal and globally plugged-in. The Merengue Festival every July is a nationalist cultural flex—merengue is UNESCO Intangible Cultural Heritage, and the DR treats it like France treats wine. The Dominican Republic Jazz Festival in Cabarete, Sosúa, and Puerto Plata brings international and local artists to the north coast, and it's one of the few festivals that genuinely integrates tourists and locals instead of creating a velvet-rope VIP scene. November 2025's Higüey music festival booked Ayra Starr, Sexyy Red, and DJ Maphorisa—Afrobeats, American rap, and South African amapiano on one bill in the DR. That's the future of Caribbean music culture: radically eclectic, unapologetically commercial, and impossible to categorize.

Carnaval Dominicano in February is the big cultural spectacle—costumes, parades, music, dancing, the whole thing. It's tourism bait, sure, but it's also genuinely vital cultural expression, especially in Santiago and La Vega where the traditions run deepest. The Guloya Festival in January preserves Afro-Caribbean dance and music traditions brought by English-speaking migrants from the Lesser Antilles, and it's a reminder that Dominican culture isn't just Spanish—it's a Creole mix of Taíno, African, Spanish, and Caribbean influences that mainstream narratives often flatten.

The Dominican art world's biggest issue is infrastructure. Santo Domingo has the galleries, the collectors, the artists, but outside the capital? Almost nothing. The Colonial Zone is where artists cluster, but rent is skyrocketing, and studios are getting priced out. There's no real arts funding from the government—it's all private collectors and gallery owners keeping the scene alive. The film industry has even less support, which is why Dominican stories get told in New York or Miami instead of Santo Domingo. And while music thrives commercially, there's zero investment in music education or preservation of non-commercial genres. The DR is culturally rich and institutionally poor, which means everything depends on individual hustle and private money. That's exciting when it works—scrappy, entrepreneurial, unpredictable—but it's also exhausting and unsustainable. Still, when you see the energy at Barbarella or walk through Arawak's latest exhibition, you realize the Dominican Republic doesn't need permission or infrastructure to create. It just does.`,
  issues: JSON.stringify([
    'Santo Domingo gallery boom with international attention but weak infrastructure',
    'Film festival growth without domestic production support or tax incentives',
    'Music festivals thriving commercially with zero education funding',
    'Cultural centralization in Santo Domingo pricing out artists',
    'Private collectors sustaining art scene with no government support'
  ])
}

// ECUADOR CULTURE SUMMARY
const ECUADOR_CULTURE = {
  name: 'Ecuador',
  type: 'country' as const,
  lat: -1.8312,
  lng: -78.1834,
  country: 'EC',
  category: 'culture' as const,
  summary: `The Eacheve Foundation is about to change everything. When its new building opens in Guayaquil this autumn 2025, artist Manuela Ribadeneira says "there is a before and after Eacheve when it comes to the Ecuadorian contemporary art scene," and that's not hyperbole. Ecuador's art world has been stuck for decades—Quito's got the Centro de Arte Contemporáneo in a beautiful historic building, +ARTE Galería Taller has been pushing contemporary work since 2016, but there's no critical mass, no international visibility, no institutional support. Eacheve is the first serious attempt to build a contemporary art infrastructure in Ecuador's largest city, and if it works, it pulls Guayaquil out of Quito's cultural shadow and makes Ecuador a stop on the Latin American art circuit, not just a layover between Colombia and Peru.

Quito's street art scene is the real story right now—the whole city is an outdoor gallery, massive murals by local and international artists transforming neighborhoods into visual manifestos. Artist STEEP's six-mural series is a cultural and visual journey through Ecuadorian identity, blending indigenous motifs with contemporary urban aesthetics. It's Instagram bait, sure, but it's also genuinely democratic art—free, public, unavoidable. The Centro de Arte Contemporáneo de Quito programs local and international exhibitions, and it's housed in a historic building that somehow makes contemporary art feel less alienating, more rooted in place. But the 16th Cuenca Biennial (Quizá Mañana) ended in March 2024, and the question hanging over Ecuador's art scene is: what happens between biennials? The answer: not enough. Ecuador's contemporary art infrastructure is event-driven, not sustained. There's no thriving gallery scene, no major collectors, no auction houses. Artists make work, show it at a biennial or a group show, then... wait.

The Guggenheim called Ecuador "a vigorous scene," which is the kind of thing institutions say when they want to sound supportive without committing resources. But there's truth there—Ecuadorian artists are vigorous, they're making bold work about climate change, indigenous rights, gender, urbanization. The problem is context. An artist like Manuela Ribadeneira gets international attention, but most Ecuadorian artists are invisible outside Ecuador, and inside Ecuador, they're invisible outside Quito and Guayaquil. Cuenca had a contemporary art scene once—the biennial put it on the map—but the 2024 edition's catalogue asked "why contemporary art has to fight for survival in Cuenca," and that's the whole problem. Art survives when there's an ecosystem: galleries, collectors, critics, institutions, funding. Ecuador has fragments of an ecosystem, not the whole thing.

Film and music are even more precarious. Ecuador doesn't have a film industry, it has filmmakers—auteurs making one movie every few years with international co-production money, usually European or Mexican. There's no domestic market for Ecuadorian cinema, no distribution, no exhibition infrastructure outside Quito's art-house theaters. Music is more vibrant but also more fragmented: Andean folk traditions, coastal Afro-Ecuadorian rhythms, Quito's indie rock and electronic scenes, Guayaquil's reggaeton and cumbia. There's no unifying sound, no breakout artist making Ecuador legible to global audiences the way Bad Bunny did for Puerto Rico or Rosalía for Spain. That's partly because Ecuador is small (17 million people), partly because its music industries are undercapitalized, partly because Ecuadorian identity is regional, not national.

Quito's Historic Center is a UNESCO World Heritage Site, the best-preserved colonial city in Latin America, and it's both a blessing and a curse. Blessing: tourism revenue, international prestige, cultural pride. Curse: preservation restrictions that make it nearly impossible to build contemporary cultural infrastructure in the heart of the capital. So contemporary art gets pushed to the periphery, literally and figuratively. The Galápagos Islands are UNESCO sites too, and they're Ecuador's global brand, but they have nothing to do with contemporary culture—it's all nature conservation and Darwin tourism.

What Ecuador needs is what Eacheve is trying to build: a major contemporary art institution with the resources to commission work, build collections, publish scholarship, and create a reason for international curators to visit. One museum won't fix everything—Ecuador also needs film funding, music industry investment, arts education reform, and a cultural policy that treats contemporary art as essential, not decorative. But it's a start. If Eacheve succeeds, Ecuador goes from a "vigorous scene" to a real player. If it fails, Ecuador stays stuck—talented artists, beautiful work, zero infrastructure, no future.`,
  issues: JSON.stringify([
    'Eacheve Foundation opening autumn 2025 as potential game-changer for national art scene',
    'Quito street art boom creating democratic public art but no market infrastructure',
    '16th Cuenca Biennial ended March 2024 exposing event-driven vs sustained cultural ecosystem gap',
    'No film industry infrastructure despite auteur talent and international co-productions',
    'UNESCO Historic Center preservation restricting contemporary cultural development in Quito'
  ])
}

// EGYPT CULTURE SUMMARY
const EGYPT_CULTURE = {
  name: 'Egypt',
  type: 'country' as const,
  lat: 26.8206,
  lng: 30.8025,
  country: 'EG',
  category: 'culture' as const,
  summary: `Egypt's censorship regime is eating its own cultural future. The General Authority for Censorship of Works of Arts revoked the screening license for "The Last Miracle" 48 hours before its premiere at El Gouna Film Festival in October 2024—a 20-minute film about a newspaper obituary editor who misspells a Sufi sheikh's name. That's the level we're at: a typo is too dangerous for Egyptian screens. "Al-Molhed" (The Atheist) got approved by censors with a +16 rating in August 2024, then producer Ahmed al-Sobky pulled it anyway because "controversial topics" would create social backlash the film couldn't survive. So even when censors say yes, the answer is still no. The result? Egyptian film production collapsed to EGP 19.33 million (USD 384,850) in 2024, and filmmakers are either fleeing to Lebanon and Jordan or making anodyne comedies that pass the censorship gauntlet. The El Gouna Film Festival opened in October 2024 with co-founder Naguib Sawiris calling for peace and filmmakers calling out censorship, and the irony is crushing—Egypt's most prestigious film festival has become a showcase for what Egyptian cinema could be if it were allowed to exist.

The third quarterly report from the Association for Freedom of Thought and Expression (AFTE) documented eight violations in Q3 2024 alone: raids on publishing houses, professional union restrictions, festival cancellations, concert bans. Middle East Eye's brutal assessment: "The banality of censorship: A decade of war against the arts in Sisi's Egypt." It's not dramatic crackdowns anymore—it's bureaucratic strangulation. The foreign funding law criminalizes cultural institutions for accepting grants, festivals get "scrapped" with no explanation, musicians are banned from performing because their lyrics might be "interpreted" as political. The Prime Minister promised to restructure the censorship authority after the "film crisis," but restructuring censorship doesn't end censorship, it just makes it more efficient.

Cairo's contemporary art scene survives in the cracks. Townhouse Gallery, Darb 1718, the Egyptian Center for Culture and Arts (Makan) keep programming exhibitions and performances, but they operate in a state of permanent precarity—wondering which show will trigger a raid, which artist will get detained, which foreign grant will get them prosecuted. Egyptian artists are world-class—the diasporic talent alone proves it—but they can't work in Egypt. So they show in Beirut, Dubai, Berlin, New York, and Egyptian contemporary art becomes a global phenomenon disconnected from Egypt itself. The Cairo Opera House programs safe classics, the Museum of Modern Egyptian Art shows approved modernists, and anything genuinely contemporary, genuinely critical, genuinely alive happens underground or abroad.

Music is the same story. Mahraganat—Egypt's homegrown electronic shaabi music, raw and working-class and massive among young Egyptians—is effectively banned from state media and major venues. The Musicians Syndicate won't license mahraganat artists, so they can't perform legally, which means the most vital Egyptian music of the last decade exists in a legal gray zone. Meanwhile, the government promotes sanitized "heritage" music and imports Gulf pop stars for big concerts that reinforce the regime's "modern Egypt" branding. Underground hip-hop and electronic scenes thrive in Cairo's clubs and online, but they're constantly surveilled, constantly vulnerable.

Egypt's UNESCO sites—the Pyramids, Luxor, Islamic Cairo, Abu Mena—are tourism cash cows and nationalist symbols, but they have nothing to do with contemporary culture. The government invests billions in heritage conservation and new archaeology museums (the Grand Egyptian Museum finally opened phases in 2024) while starving contemporary arts funding. It's a clear message: Egypt's culture is its past, not its present. Dead pharaohs get world-class museums; living artists get censorship.

The tragic irony is that Egypt has everything a major cultural power needs: massive population (110 million), regional influence, deep artistic traditions, a huge diaspora maintaining connections, and talent everywhere you look. Egyptian cinema dominated the Arab world for decades—the "Hollywood of the Middle East"—and that infrastructure still exists, the studios are still there. But Sisi's regime decided that control matters more than creativity, and now Egypt is losing its cultural primacy to Lebanon, Morocco, the Gulf. Saudi Arabia is pouring billions into film production and music festivals, positioning itself as the new Arab cultural capital, while Egypt bans films about typos.

What's the future? More of the same until something breaks. Artists will leave, festivals will die, the underground will shrink, and Egyptian culture will calcify into heritage spectacle and regime propaganda. Or—and this is the long shot—the economic crisis forces the government to realize that tourism and soft power require a living culture, not just pyramids and mummies, and censorship gets relaxed. But don't hold your breath. For now, Egypt's most exciting cultural production is happening everywhere except Egypt.`,
  issues: JSON.stringify([
    'Film censorship crisis: "The Last Miracle" banned 48 hours before El Gouna premiere October 2024',
    'Production revenues collapsed to $384,850 in 2024 amid social and political restrictions',
    'AFTE documented 8 violations Q3 2024: raids, festival cancellations, foreign funding criminalization',
    'Mahraganat music banned from state media while underground scenes face surveillance',
    'Billions invested in heritage tourism while contemporary arts funding starved'
  ])
}

// EL SALVADOR CULTURE SUMMARY
const EL_SALVADOR_CULTURE = {
  name: 'El Salvador',
  type: 'country' as const,
  lat: 13.7942,
  lng: -88.8965,
  country: 'SV',
  category: 'culture' as const,
  summary: `MARTE—the Salvadoran Museum of Art—is doing the impossible: keeping contemporary art alive in a country that's simultaneously cracking down on gangs and clamping down on everything else. The museum's free on Sundays, $5 for foreigners during the week, and it's genuinely trying to build a public contemporary art culture in San Salvador. "San Salvador 500 años" runs through December 2026, a sprawling exhibition proposing "a space of encounter between art and history, past and present," which is a diplomatic way of saying Salvadoran identity is contested, violent, unresolved, and the only way to process it is through art. MARTE Contemporaneo programs "Intervenciones"—artists challenging the museum's architecture and grounds—and it's the kind of institutional self-critique that most Latin American museums talk about but never actually do. SUMARTE 2025 ran from October 8 to November 4, showcasing mid-19th century to contemporary Salvadoran artists, and the through-line is clear: Salvadoran art has always been political because Salvadoran history has always been violent.

But here's the problem: MARTE is basically it. One museum carrying the entire contemporary art scene for a country of 6.3 million people. There are smaller galleries in San Salvador—commercial spaces showing decorative work for the tiny collector class—but no serious contemporary infrastructure. No biennials, no art fairs, no international gallery presence, no robust arts press. Salvadoran artists who want careers leave for Mexico City, Miami, Los Angeles. The ones who stay make work for MARTE, maybe get a regional show, then hit a ceiling. It's not MARTE's fault—the museum is doing heroic work with limited resources—but one institution can't build an ecosystem.

Film and music are even more invisible internationally. El Salvador doesn't have a film industry, doesn't have music industry infrastructure, doesn't have cultural exports beyond the diaspora and the disturbing global fascination with Nayib Bukele's authoritarian "success story." Salvadoran musicians and filmmakers exist, obviously—there's punk in San Salvador, indie filmmakers making documentaries about migration and violence—but it's all underground, all underfunded, all invisible unless you're looking hard. The gang crackdown has created a bizarre cultural climate: safer streets, sure, but also a surveillance state, mass incarceration without trial, and a general sense that anything critical, anything questioning, is suspect. Artists are being careful, and careful art is dead art.

El Salvador's UNESCO World Heritage Site is Joya de Cerén, the "Pompeii of the Americas"—a pre-Columbian Maya farming village preserved by volcanic ash. It's archaeologically significant, draws some tourism, and has zero connection to contemporary Salvadoran culture. There's no performing arts infrastructure worth the name, no major music festivals, no film festivals. The National Theatre does classical programming, occasional touring shows, but nothing that engages with contemporary Salvadoran reality.

The diaspora is where Salvadoran culture actually lives. Salvadoran-American artists, musicians, filmmakers in Los Angeles, Washington DC, New York are making urgent work about migration, identity, violence, memory—and almost none of it circulates back to El Salvador. The country exports its people and imports remittances, and culture follows the same pattern: Salvadoran creativity happens elsewhere and sends money home, but the work itself stays in the US. It's a cultural brain drain that's been happening for 40 years, and there's no plan to reverse it.

What would it take to build a real culture sector in El Salvador? Stable arts funding, film and music industry incentives, cultural infrastructure outside the capital, arts education, international partnerships, and—most importantly—creative freedom. But Bukele's government is focused on security, Bitcoin, and mega-projects like the new national library and surfing tourism. Contemporary art is a non-priority, which means it's left to individual artists, underfunded institutions like MARTE, and the diaspora. That's not sustainable, but it's what El Salvador has. The tragedy is that Salvadorans are making incredible art—you just have to leave El Salvador to see it.`,
  issues: JSON.stringify([
    'MARTE museum sole pillar of contemporary scene with "San Salvador 500 años" through December 2026',
    'No film or music industry infrastructure forcing artists to leave for Mexico City and Miami',
    'Gang crackdown creating surveillance climate chilling critical artistic expression',
    'Diaspora culture thriving in US while domestic ecosystem starves',
    'Joya de Cerén UNESCO site disconnected from contemporary cultural production'
  ])
}

// ESTONIA CULTURE SUMMARY
const ESTONIA_CULTURE = {
  name: 'Estonia',
  type: 'country' as const,
  lat: 58.5953,
  lng: 25.0136,
  country: 'EE',
  category: 'culture' as const,
  summary: `Estonia's contemporary art scene is punching way above its weight, and the Contemporary Art Museum of Estonia (EKKM) is the proof. Housed in a three-story former industrial building on Kursi 5 in Tallinn, EKKM operates as a self-initiated, non-profit space that somehow manages to stay relevant, radical, and genuinely public in a tiny country of 1.3 million people. In 2025, artists Jake Shepherd and Yvette Bathgate built a new greenhouse in the EKKM community garden, because why not make art infrastructure that's also literal infrastructure for growing food? It's the kind of move that sounds precious but is actually profound—art embedded in daily life, not sequestered in white cubes. Meanwhile, Kumu Art Museum is doing blockbuster programming: Icelandic video artist Ragnar Kjartansson's first Estonian solo exhibition opened May 16, 2025, featuring six large-scale works from 2004-2025, and it's the kind of show that reminds you Estonia is weird, ambitious, and unapologetically Nordic-but-not-quite.

The Estonian Academy of Arts graduated 15 MFA Contemporary Art students in spring 2025, with 13 exhibiting thesis projects, and the work is fearless—video installations interrogating Soviet memory, participatory performances about climate anxiety, research-based projects dismantling national myths. Estonian contemporary art has no single aesthetic, but it has a clear intellectual rigor and a willingness to be difficult. Tallinn Art Hall and the Estonian Contemporary Art Development Center (ECADC) provide institutional support, but the real action is in the artist-run spaces and project-based collectives that pop up, make something urgent, then dissolve.

Foto Tallinn 2024 brought together a thousand art enthusiasts and set records for art sales, proving there's actual collector appetite for contemporary photography in Estonia. In 2025, Tallinn hosted the first international cultural management forum "Shaping Cultural Futures," which sounds like bureaucratic hell but is actually Estonia positioning itself as a thought leader in arts policy and digital culture integration. Arvo Pärt is still Estonia's most famous cultural export—the composer's work is showing alongside Lucas Cranach and Gerhard Richter in an October 2025 exhibition bridging Estonian and German art—and that's the tension: Estonia wants to be contemporary, experimental, forward-looking, but it's still leaning on Pärt's sacred minimalism and Soviet-era nostalgia for international legitimacy.

Estonian cinema is in a strange spot. The country produces a handful of features annually, mostly art-house fare that plays festivals and disappears. There's no commercial Estonian film industry, just auteurs making personal films with Baltic Film Fund money and co-production deals with Finland and Latvia. Music is more vibrant: Estonia won Eurovision in 2001 and has been chasing that high ever since, but the real story is the electronic and experimental music scenes in Tallinn—artists blending folk samples with techno, noise, and ambient soundscapes. It's niche, it's weird, and it's thoroughly Estonian: simultaneously rooted in tradition and allergic to nostalgia.

Estonia's UNESCO sites—Tallinn's Old Town and the Struve Geodetic Arc—are medieval tourism magnets, but they have nothing to do with contemporary culture. The government invests in heritage preservation while underfunding contemporary arts, which is standard small-country cultural policy: protect the past, hope the present takes care of itself. But Estonia's digital infrastructure gives it an edge: the country runs on e-governance, and that digital-first mindset extends to arts funding, documentation, and international networking. Estonian artists can apply for grants, submit portfolios, and connect with international curators entirely online, which matters when you're in a country most people can't find on a map.

The biggest challenge for Estonian contemporary art is scale. The domestic market is tiny, so artists need international visibility to survive, but international visibility requires resources Estonia doesn't have—major museums, big biennials, commercial gallery networks. EKKM, Kumu, and Tallinn Art Hall are excellent, but they can't compete with Berlin's institutional density or Helsinki's funding. So Estonian artists end up in a weird position: too small to matter globally, too ambitious to stay local, stuck in a productive but exhausting in-between. Still, for a country that regained independence in 1991 and joined the EU in 2004, Estonia's contemporary art scene is remarkable. It's self-aware, internationally connected, intellectually serious, and committed to art as a public good, not a luxury commodity. That's rare, and it's worth celebrating, even if the rest of the world isn't paying attention yet.`,
  issues: JSON.stringify([
    'EKKM community greenhouse by Shepherd and Bathgate merging art and literal infrastructure',
    'Ragnar Kjartansson solo exhibition at Kumu May 2025 signaling Nordic blockbuster ambitions',
    'Estonian Academy of Arts MFA graduates spring 2025 showing fearless thesis projects',
    'Foto Tallinn 2024 setting sales records proving collector appetite',
    'Small domestic market forcing artists into international visibility struggles'
  ])
}

// ETHIOPIA CULTURE SUMMARY
const ETHIOPIA_CULTURE = {
  name: 'Ethiopia',
  type: 'country' as const,
  lat: 9.145,
  lng: 40.4897,
  country: 'ET',
  category: 'culture' as const,
  summary: `Ethiopian art just had its Venice Biennale moment—2024 marked the country's first national pavilion, with artist Tesfaye Urgessa representing—and the timing is perfect because Addis Ababa's contemporary scene is absolutely exploding. The Zoma Museum opened in June 2024 as an eco-homage to indigenous architecture and a distinctly African home for contemporary art, and it's the kind of institution Ethiopian art has needed for decades: purpose-built, philosophically grounded, and unapologetically Ethiopian in its aesthetics and mission. Meanwhile, Addis Fine Art hosted "Where We Coalesce" featuring Tadesse Mesfin from September to November 2024, and curator Mifta Zeleke told Global Voices that Ethiopian art is rising on the global stage not through Western validation, but through artists, collectors, and institutions building their own networks and markets. That's the key insight: Ethiopia isn't waiting for Frieze or Art Basel to notice—it's building its own art world infrastructure and inviting the global scene to catch up.

The tenth annual "Big Art Sale 2025" on April 12-13 showcased 62 Ethiopian artists at Hilton Addis Ababa, and "The Art of Ethiopia" ran April 9-11 at Sheraton Addis—these are collector-focused, commercially driven events, and they're selling. Ethiopian art is hot right now among African diasporic collectors, Gulf buyers, and Western collectors looking for the next underpriced market to corner before prices explode. Makush Art Gallery is the must-visit for emerging artists, featuring portraits, landscapes, and urban collages that blend traditional Ethiopian Christian iconography with contemporary street aesthetics. The Alle School of Fine Art and Design (formerly Addis Ababa Fine Art School), established in 1957 and run entirely by Ethiopian artists and educators, has trained generations of artists who are now showing internationally—New York, London, Lagos, Johannesburg.

The diaspora plays a huge role: artists who left during the Derg regime, the Eritrean war, or more recent political instability are now returning or staying connected, mentoring younger artists, funding initiatives, and providing international networks. But here's the tension: is Ethiopian contemporary art Ethiopian, or is it global contemporary art made by Ethiopians? The best work refuses that binary—artists like Tesfaye Urgessa, Tadesse Mesfin, and others are making art deeply rooted in Ethiopian visual traditions (Orthodox iconography, Ge'ez script, indigenous cosmologies) while engaging with global contemporary discourses around migration, identity, and postcolonialism.

"Ethiopia at the Crossroads" at the Toledo Museum of Art and Peabody Essex Museum in 2024 was a major US survey, and the conversation with curators revealed the challenge: how do you present Ethiopian art diachronically (from antiquity to digital art) without flattening difference and reinforcing the "timeless Africa" narrative? The exhibition succeeded because it insisted on Ethiopian art's modernity—not as a recent phenomenon, but as a centuries-long engagement with form, meaning, and innovation. That's the reframing Ethiopian art needs globally: not "emerging" or "discovered," but always already modern.

Film and music are less developed. Ethiopia has no real film industry—occasional features, lots of documentaries about the diaspora experience, but no consistent production or distribution. Music is more vibrant: Ethiopian jazz (Ethio-jazz) had its global moment in the 2000s with Mulatu Astatke, and contemporary artists are reviving and updating those sounds. But there's no major music industry infrastructure, no international label presence, and most Ethiopian musicians make money touring Europe and North America, not selling records at home.

Ethiopia's UNESCO sites—Lalibela's rock-hewn churches, Aksum's obelisks, Fasil Ghebbi in Gondar—are spiritual and historical centers, but they're also tourism revenue and nationalist symbols. The government invests in heritage preservation while underfunding contemporary arts, which is the standard postcolonial pattern: the past is safe, the present is dangerous. But Ethiopian artists are done waiting for government support—they're building galleries, organizing fairs, courting collectors, and making Addis Ababa a destination for contemporary art on their own terms. It's not perfect, it's not equitably distributed (most of the action is in Addis, with some activity in Dire Dawa and Harar), but it's real, it's growing, and it's no longer asking for permission.`,
  issues: JSON.stringify([
    'First Venice Biennale pavilion 2024 with Tesfaye Urgessa marking global recognition',
    'Zoma Museum opened June 2024 as eco-architecture contemporary art space',
    '"Big Art Sale 2025" and "Art of Ethiopia" April 2025 driving commercial collector market',
    'Diaspora artists returning and mentoring while building international networks',
    'No film or music industry infrastructure despite jazz legacy and touring musicians'
  ])
}

// FIJI CULTURE SUMMARY
const FIJI_CULTURE = {
  name: 'Fiji',
  type: 'country' as const,
  lat: -17.7134,
  lng: 178.065,
  country: 'FJ',
  category: 'culture' as const,
  summary: `Fiji's contemporary art scene is doing something genuinely interesting: blending indigenous weaving, tapa cloth, and carving traditions with digital art, installation, and climate activism in ways that don't feel forced or tokenistic. Artist Ratu Tuisau is making paintings that incorporate traditional Fijian motifs while interrogating nationalism and climate change—the rising seas aren't metaphorical for Fiji, they're existential, and Fijian artists are processing that terror and grief through work that's both aesthetically stunning and politically urgent. The Fiji Arts Festival kicked off June 7, 2024, with grand opening ceremonies in Suva and Nadi, featuring traditional and modern performances, art exhibitions, and workshops that showcased this exact hybridity: bilibili bamboo raft building next to digital projections, meke dance alongside contemporary theater.

Then there's LAGI 2025 Fiji—the Land Art Generator Initiative launching January 6, 2025, with two $100,000 awards for creative energy and water system solutions in partnership with Marou Village. This is where contemporary art meets climate infrastructure: artists, designers, and engineers collaborating on installations that generate renewable energy while addressing water scarcity. It's art-as-public-utility, and it's happening in rural Fiji because that's where the need is most acute and where traditional knowledge about sustainability can inform contemporary design. The project is global (artists from anywhere can submit), but it's rooted in Fijian priorities and partnership with Fijian communities, which is how international collaboration should work but rarely does.

Fijian art has always been functional—tapa cloth for ceremonies, pottery for cooking, canoes for navigation—and contemporary artists are maintaining that functionality while pushing formal boundaries. Technological advancements are bridging traditional and digital: artists scanning tapa patterns and animating them, weaving techniques informing parametric design software, oral storytelling traditions shaping video art narratives. It's not "tradition vs. modernity"—it's tradition as a living, adaptive practice that generates contemporary forms.

The challenge is market and infrastructure. Fijian contemporary art doesn't have significant collector demand, doesn't have gallery representation in major art capitals, doesn't get reviewed in international art press. Tourism brings some buyers—people wanting "authentic" Fijian art, which usually means decorative carvings and paintings of beaches—but that's not sustaining serious contemporary practice. Artists making challenging, conceptual, politically engaged work are doing it without institutional support, without grants, without the ecosystem that artists in Australia, New Zealand, or even Papua New Guinea might access.

Film and music face the same problem: no industry infrastructure. Fiji has musicians blending indigenous music with reggae, hip-hop, and gospel, but there's no record labels, no distribution, no touring infrastructure. Fijian musicians who want careers move to Australia or New Zealand. Film is occasional documentaries and rare features, mostly funded by international NGOs or development agencies, focused on climate change or indigenous rights. Important work, but it's educational advocacy, not cinema as art.

Fiji's cultural tourism is massive—fire walking, meke performances, kava ceremonies for resort guests—but it's anthropological spectacle, not contemporary culture. The government invests in heritage preservation and tourism-friendly cultural programming while underfunding contemporary arts. This is the postcolonial pattern: culture is either heritage (safe, past, marketable) or entertainment (also safe, also marketable), and anything genuinely contemporary, genuinely critical, genuinely experimental is left to fend for itself.

But Fijian artists keep making work anyway. They're adapting traditional practices to address contemporary crises, building international networks through residencies and online platforms, and insisting that Fijian art is global contemporary art, not regional craft. The Fiji Arts Festival, LAGI 2025, and artists like Ratu Tuisau prove there's creative energy and conceptual sophistication in Fijian contemporary art. What's missing is infrastructure: galleries, funding, markets, critical discourse. Until that gets built—and it won't get built by tourism dollars or government heritage programs—Fijian contemporary art will remain under-recognized, undervalued, and unsustainable. Which doesn't mean it isn't vital. It just means it's harder than it should be.`,
  issues: JSON.stringify([
    'Fiji Arts Festival June 2024 blending traditional and modern performances',
    'LAGI 2025 launching January 6 with $100K awards for climate art infrastructure',
    'Artists like Ratu Tuisau merging traditional motifs with climate activism',
    'No collector market or gallery infrastructure for contemporary practice',
    'Cultural tourism spectacle undermining serious contemporary arts funding'
  ])
}

// FINLAND CULTURE SUMMARY
const FINLAND_CULTURE = {
  name: 'Finland',
  type: 'country' as const,
  lat: 61.9241,
  lng: 25.7482,
  country: 'FI',
  category: 'culture' as const,
  summary: `Kiasma—the Museum of Contemporary Art in Helsinki—has been running since 1998 in Steven Holl's award-winning building, and it's still the beating heart of Finnish contemporary art. But here's what's happening now: the Ars Fennica 2025 candidates exhibition at HAM Helsinki Art Museum (October 24, 2025 to March 15, 2026) is showcasing the next generation of Finnish artists, and the work is pushing way beyond the "Nordic design" aesthetics that international audiences expect. These artists are dealing with AI and algorithmic culture, gender fluidity, climate catastrophe, and the legacy of Finland's fraught relationship with Russia, the Sámi, and its own self-mythology as a progressive utopia. The Ateneum Art Museum is programming heavy hitters for 2025: Nelli Palomäki's "Holds" (October 3, 2025 to January 18, 2026), Mohamed Bourouissa's "Genealogy of Violence" (October 3 to November 23, 2025), and Nora Sederlöf's "Laced" (October 3 to November 23, 2025). That's not just Finnish artists—it's international contemporary art in dialogue with Finnish institutional priorities, and the programming is bold, political, and unapologetically challenging.

The Sinebrychoff Art Museum is doing something weirder: "Spain Beyond the Myths" (September 11, 2025 to January 11, 2026), presenting 19th and 20th-century depictions of mythical Spain. It's art history as ideology critique—how did Northern Europeans construct "exotic" Spain, and what does that reveal about Nordic identity? It's the kind of curatorial question that sounds academic but is actually urgent: Finland is reckoning with its own national myths, and looking at how other countries were mythologized is part of that reckoning.

Finnish cinema is in a renaissance. The country's film output is small—maybe 15-20 features annually—but the quality is absurdly high. Directors like Aki Kaurismäki (winner of the Palme d'Or for "Fallen Leaves" in 2023) and Dome Karukoski are getting international distribution, and Finnish films are showing up at Cannes, Berlin, and Sundance. The Finnish Film Foundation funds work that's uncompromisingly auteur-driven, and there's no pressure to make commercially viable films for export—the domestic market is tiny (5.5 million people), so filmmakers just make the films they want and hope they find audiences. Often, they do.

Music is where Finland gets weird. The country has the highest per-capita metal bands in the world—seriously, more metal bands per person than anywhere else—and that's not a joke, it's a genuine cultural phenomenon. But Finnish music is also Sibelius, Orthodox liturgical choirs, folk traditions from Karelia, electronic music from the Helsinki club scene, and pop stars like Alma and Isac Elliot. There's no single "Finnish sound," but there's a consistent intensity and melancholy that runs through everything. It's cold, dark six months of the year, and the music reflects that.

Finland's UNESCO sites—Fortress of Suomenlinna, Old Rauma, Petäjävesi Old Church, Verla Groundwood and Board Mill, Bronze Age Burial Site of Sammallahdenmäki, High Coast / Kvarken Archipelago, Struve Geodetic Arc—are heritage tourism staples, but they're also nationalist symbols. The Suomenlinna fortress is a reminder of Swedish and Russian rule, the Struve Arc is scientific history, and the Bronze Age burial site asserts Finnish presence on this land for millennia. Heritage is never just heritage—it's always political.

The challenge for Finnish contemporary art is visibility. Finland is small, Northern, and not on the way to anywhere. International curators don't accidentally end up in Helsinki. So Finnish artists either stay local (and risk irrelevance) or leave for Berlin, London, New York (and risk losing their Finnishness, which is often what made their work interesting). The Finnish government funds arts generously compared to most countries, but that funding comes with expectations: represent Finland well, don't embarrass us, stay within acceptable boundaries of critique. The result is a contemporary art scene that's technically proficient, intellectually serious, and occasionally a bit too polite.

But when Finnish artists go hard—and they do—the work is devastating. The Ars Fennica competition, HAM's programming, Kiasma's exhibitions, the graduating MFA students from the Academy of Fine Arts—there's urgent, uncompromising work being made. It just needs to be seen by more people than the Finnish art world, and that's an infrastructure problem, not a talent problem.`,
  issues: JSON.stringify([
    'Ars Fennica 2025 at HAM showcasing next generation October 24, 2025 to March 15, 2026',
    'Ateneum programming Bourouissa, Palomäki, Sederlöf in fall 2025 blockbusters',
    'Finnish film renaissance with Kaurismäki Palme d\'Or 2023 and international distribution',
    'Highest per-capita metal bands globally as cultural phenomenon',
    'Generous arts funding creating polite work, breakthrough artists need international visibility'
  ])
}

// FRANCE CULTURE SUMMARY
const FRANCE_CULTURE = {
  name: 'France',
  type: 'country' as const,
  lat: 46.2276,
  lng: 2.2137,
  country: 'FR',
  category: 'culture' as const,
  summary: `The Louvre just did haute couture. "Louvre Couture" (January 24 to July 21, 2025) places 65 fashion creations from French and international houses next to 30 antiquities from Byzantine to 1800s, and it's either brilliant or blasphemous depending on whether you think fashion belongs in the world's largest museum. Either way, it's a flex: only the Louvre could pull this off, and only France would try. Meanwhile, the Fondation Louis Vuitton is running a David Hockney retrospective (January 22 to May 12, 2025) with 400 works spanning seven decades—traditional painting to digital iPad creations—and it's the kind of blockbuster that reminds you France still sets the global museum agenda. Art Paris 2025 returned to the renovated Grand Palais with 170 exhibitors from 25 countries, and it's the leading spring event for modern and contemporary art in Europe, which is French for "we're still the center of the art world, deal with it."

But the real story is JR's Pont Neuf transformation. Four decades after Christo and Jeanne-Claude wrapped Paris's oldest bridge in fabric, French photographer and street artist JR is turning it into a giant rock sculpture in 2025. It's public art as monumental intervention, and it's happening in the heart of Paris—not in a gallery, not in a museum, but on the bridge where everyone walks every day. That's what French contemporary art does best: it occupies public space unapologetically and forces you to reckon with it. The Gerhard Richter retrospective (270 works, six decades, comprehensive) reminds you that French museums program German, British, and American artists as easily as French ones—this isn't nationalism, it's cultural imperialism disguised as cosmopolitanism.

The Picasso Museum is showing Philip Guston, the Musée Jacquemart-André has Artemisia Gentileschi, and contemporary photography exhibitions are everywhere because Paris is still the city where photography became art and where it's taken most seriously. The French art world is ruthlessly hierarchical—there's the institutions (Louvre, Pompidou, Fondation Vuitton), the blue-chip galleries (Perrotin, Thaddaeus Ropac, Kamel Mennour), the mid-tier spaces, and everyone else fighting for crumbs. If you're not in the system, you don't exist. But if you're in, you're global.

French cinema is... French cinema. The industry is protected by subsidies, quotas, and cultural policy that treats film as essential to national identity. The Centre National du Cinéma (CNC) funds everything from auteur films to blockbusters, and French directors can make uncommercial, intellectually rigorous work and still get budgets. The problem is insularity: French cinema is beloved in France, respected at festivals, and largely ignored everywhere else unless it's a Palme d'Or winner. There's no French "Netflix competitor," no successful streaming exports, and younger French audiences are watching American and Korean content while French films play to aging cinephiles.

Music is even messier. France has thriving hip-hop (the second-largest rap market after the US), electronic music (French Touch is still influential), and chanson française (traditional singer-songwriter stuff). But French music doesn't export well—language is a barrier, the industry is insular, and French radio quotas that mandate 40% French-language songs create a captive domestic market that discourages international ambition. There are exceptions—Daft Punk, Christine and the Queens, Stromae (Belgian but Francophone)—but they're exceptions.

France's UNESCO sites—Mont-Saint-Michel, Versailles, the banks of the Seine, Carcassonne—are tourist cash machines and national symbols, but they're also suffocating. Paris is so obsessed with preserving its 19th-century architecture that contemporary architecture struggles to find space. The Grand Palais renovation is a rare victory for contemporary design integrated with heritage, but try building something radical in central Paris—the preservation lobby will destroy you.

The tension in French culture is between global ambition and national insularity. French institutions program internationally and attract global audiences, but French artists, filmmakers, and musicians often struggle to break out beyond the Francophone world. France is still a cultural superpower—the museum infrastructure, the film funding, the intellectual tradition are unmatched—but it's a superpower in decline, clinging to 20th-century models while the rest of the world moves on. Still, when France gets it right—Hockney at Vuitton, JR on Pont Neuf, Louvre Couture—it's untouchable. And they know it.`,
  issues: JSON.stringify([
    'Louvre Couture January 24-July 21, 2025 merging fashion and antiquities',
    'David Hockney retrospective at Fondation Louis Vuitton January 22-May 12, 2025',
    'JR transforming Pont Neuf into rock sculpture 2025 as monumental public intervention',
    'Art Paris 2025 at renovated Grand Palais with 170 exhibitors reasserting centrality',
    'Cinema subsidies sustaining auteur production but failing international relevance'
  ])
}

// GEORGIA CULTURE SUMMARY (THE COUNTRY)
const GEORGIA_CULTURE = {
  name: 'Georgia',
  type: 'country' as const,
  lat: 42.3154,
  lng: 43.3569,
  country: 'GE',
  category: 'culture' as const,
  summary: `Tbilisi's contemporary art scene is having a moment—and a crisis. The Tbilisi Art Fair 2024 (April 11-14 at EC Expogeorgia) hosted over 30 galleries, 25 Georgian, and exhibitors from 15 countries, solidifying the city's position as a regional art hub. In July 2024, Frieze's No.9 Cork Street in London spotlighted female-led Tbilisi galleries—E.A Shared Space, Gallery 4710, The Why Not Gallery, MAUDI, CH64 Gallery—proving Georgian artists are getting international visibility. The Shalva Amiranashvili State Museum of Art relaunched in October 2024 after nearly a decade closed, the Silk Museum reopened the same month after life-saving repairs, and Culture Week Tbilisi 2024 transformed the former Coca-Cola factory into Factory Tbilisi, an innovative art and culture hub. This is infrastructure development, institutional recovery, and genuine creative energy. But it's happening against the backdrop of political violence, protest crackdowns, and a government pivoting toward Russia and away from Europe—which makes every gallery opening feel defiant, every exhibition political, whether the art is explicitly political or not.

The 5th Tbilisi Triennial "Peace Pandemic" is scheduled for October 1, 2025, and that title is either darkly ironic or desperately hopeful depending on how the next year goes. Georgian contemporary art has always navigated geopolitical chaos—Soviet legacy, post-independence wars, Rose Revolution, Russian invasion 2008, frozen conflicts in Abkhazia and South Ossetia—and artists have gotten very good at encoding political critique in abstraction, performance, installation. But the current moment is different: the government isn't just authoritarian, it's nakedly hostile to the cultural class that built Tbilisi's international reputation. Artists, curators, and gallerists are mostly pro-European, pro-democracy, and anti-Georgian Dream, which makes them targets. Not official censorship yet, but pressure, surveillance, funding cuts, visa complications for international collaborations.

Street art is Tbilisi's most visible contemporary cultural expression—76 stunning murals mapped across the city, transforming Soviet-era apartment blocks and abandoned buildings into open-air galleries. It's public, free, and impossible to censor without literally painting over it (which has happened). Georgian street artists and international visitors create work that's gorgeous, provocative, and often politically charged—stencils of protest slogans, portraits of arrested activists, abstract pieces that feel like cries for freedom. The government tolerates it because tourism likes it, but that tolerance is conditional.

The fourth Tbilisi Architecture Biennial "Correct Mistakes" (September-October 2024) explored people's relationship with natural resources, which in Georgia means: how do you build a modern city without destroying the mountains, rivers, and landscapes that define Georgian identity? The answer: very badly. Tbilisi is booming with construction—luxury apartments, hotels, shopping centers—and almost none of it respects historical architecture or environmental sustainability. The biennial was a critique disguised as an exhibition, and everyone knew it.

Georgian cinema is in survival mode. The film industry that produced Sergei Parajanov and gave the world "The Color of Pomegranates" is now making two, maybe three features a year, mostly international co-productions with European funding. The Georgian Film Center exists, but it's underfunded and politicized. Georgian filmmakers increasingly work abroad—Dea Kulumbegashvili's "Beginning" won four awards at San Sebastián 2020, but it was a French-Georgian co-production shot in Georgia, not a Georgian film. That's the pattern: Georgian talent, international funding, global distribution. Which is fine for individual filmmakers, but it means Georgian cinema as a national industry is dying.

Music is more resilient. Georgian polyphonic singing is UNESCO Intangible Cultural Heritage, and it's genuinely extraordinary—three-part harmonies that sound ancient and avant-garde simultaneously. Contemporary Georgian musicians blend polyphony with electronic music, jazz, indie rock, creating sounds that are distinctly Georgian but globally legible. Clubs like Bassiani and Khidi have put Tbilisi on the international techno map—before the government started raiding them in 2018 under the guise of drug enforcement, but really because the clubs were pro-LGBTQ spaces and hubs for political organizing.

Georgia's UNESCO sites—Mtskheta's historical monuments, Bagrati Cathedral, Gelati Monastery, Upper Svaneti—are spiritual and nationalist symbols, but they're also tourism revenue. The government invests in heritage conservation while cutting contemporary arts funding, which is the standard authoritarian move: the past is safe, the present is dangerous. But Georgian artists keep working, keep showing, keep resisting. The Tbilisi art world is small, precarious, and utterly determined. For now.`,
  issues: JSON.stringify([
    'Tbilisi Art Fair 2024 with 30 galleries establishing regional hub status amid political crisis',
    'State Museum of Art and Silk Museum reopened October 2024 after decade closed',
    '5th Tbilisi Triennial "Peace Pandemic" October 1, 2025 as political statement',
    '76 murals transforming city into open-air gallery while government raids techno clubs',
    'Film industry producing 2-3 features annually, talent fleeing to European co-productions'
  ])
}

// GERMANY CULTURE SUMMARY
const GERMANY_CULTURE = {
  name: 'Germany',
  type: 'country' as const,
  lat: 51.1657,
  lng: 10.4515,
  country: 'DE',
  category: 'culture' as const,
  summary: `Documenta 16 is coming—June 12 to September 19, 2027, in Kassel—and the art world is already nervous. Naomi Beckwith, Deputy Director and Chief Curator of the Guggenheim, was announced as curator in November 2024, and she's inheriting a poisoned chalice. Documenta 15 in 2022 imploded over antisemitism allegations, canceled artworks, international scandal, and a complete breakdown of curatorial trust. The Indonesian collective Ruangrupa's "lumbung" concept—communal resource-sharing—was supposed to be a radical reimagining of how art exhibitions work, but instead it became a cautionary tale about what happens when institutional oversight disappears and curatorial vision collides with political landmines. Beckwith's challenge is to rebuild documenta's credibility while honoring its experimental legacy, and that's probably impossible. But documenta is still the world's most important non-commercial contemporary art exhibition, and 2027 is already circled on every curator, artist, and critic's calendar. Dimitris Athiridis's 848-minute (yes, 14 hours) documentary on documenta 14 dropped in 2024, and it's essential viewing for understanding how monumental art exhibitions are made and how spectacularly they can fail.

Berlin's Hamburger Bahnhof—Nationalgalerie der Gegenwart—is programming seven solo exhibitions in 2025 featuring Ayoung Kim, Klára Hosnedlová, Delcy Morelos, Petrit Halilaj, Annika Kahrs, and Saadane Afif. That's the kind of international, conceptually rigorous programming that makes Berlin the contemporary art capital of Europe—not London, not Paris, but Berlin. The city has the gallery density, the artist population (everyone moves to Berlin because it's still cheaper than New York or London), the institutional infrastructure, and the intellectual seriousness. German contemporary art isn't just about German artists—it's about Germany as the platform for global contemporary art discourse.

But Germany is also reckoning with its Nazi past and its Holocaust memory culture in ways that are making the art world very uncomfortable. The documenta 15 antisemitism scandal exposed how German institutions struggle to balance postcolonial solidarity with Jewish safety, and there's no resolution. German museums are world-class at presenting historical art and memorializing atrocity, but they're less confident with contemporary art that challenges German narratives about democracy, tolerance, and Vergangenheitsbewältigung (coming to terms with the past). The result is institutional caution masquerading as ethical responsibility.

German cinema is in a weird moment. The country has robust film funding—the Filmförderungsanstalt (FFA), regional film funds, public broadcasters co-producing—but the films getting made are either grim social realism for festival circuits or bland comedies for domestic audiences. There's no German equivalent of French auteur cinema or British genre innovation. Christian Petzold and Maren Ade are exceptions, but they're exceptions. German TV is having a better moment—"Dark," "Babylon Berlin," "Deutschland 83"—proving German storytelling can work internationally when it's genre-savvy and visually ambitious. But those are Netflix and streaming co-productions, not traditional film industry outputs.

Music is where Germany has genuine cultural power. Berlin is a techno capital—Berghain, Tresor, Watergate—and German DJs and producers (Paul van Dyk, Paul Kalkbrenner, Modeselektor) shape global electronic music. But German pop music is mostly a domestic phenomenon, and classical music (which Germany dominated for centuries) is now a heritage industry, not a living culture. The Berlin Philharmonic is world-class, but it's performing Brahms and Mahler, not commissioning radical new work.

Germany's UNESCO sites—Cologne Cathedral, Bauhaus sites, Speyer Cathedral, Luther memorials—are heritage tourism and nationalist iconography. The Bauhaus sites particularly get weaponized: Germany invented modernism, Germany is the birthplace of rational design, Germany is progressive and forward-thinking. It's nation-branding through architecture, and it works. But it also creates pressure for contemporary German architecture to live up to an impossible legacy, which is why so much new German architecture is timid, deferential, and uninspiring.

The challenge for German culture is that it's institutionally rich but creatively risk-averse. The funding is there, the museums are world-class, the infrastructure is unmatched, but there's a caution, a fear of making mistakes, a need to be seen as responsible and ethical and historically aware. That's understandable given German history, but it's also suffocating. The best German contemporary art and culture happens despite institutions, not because of them—in artist-run spaces, underground clubs, experimental theater collectives that don't wait for permission. Documenta 16 will test whether German institutions can still take risks, or if they've decided safety is more important than ambition.`,
  issues: JSON.stringify([
    'Documenta 16 June 12-September 19, 2027 with Naomi Beckwith rebuilding post-scandal credibility',
    'Hamburger Bahnhof 2025 programming seven international solo exhibitions',
    'Documenta 15 antisemitism scandal exposing institutional struggles with postcolonial critique',
    'Berlin techno capital with Berghain and global DJ influence',
    'Film funding robust but output split between festival social realism and domestic comedies'
  ])
}

// GHANA CULTURE SUMMARY
const GHANA_CULTURE = {
  name: 'Ghana',
  type: 'country' as const,
  lat: 7.9465,
  lng: -1.0232,
  country: 'GH',
  category: 'culture' as const,
  summary: `Accra Cultural Week 2024 in late October wasn't just an art fair—it was a declaration. "It has arrived," dealer Marwan Zakhem said about Ghana's art scene, and the proof was in the crowd: 200 collectors, artists, curators, art fair directors, and museum directors from Tate, Victoria and Albert Museum, Sotheby's, and 1:54 Contemporary African Art Fair all converged on Accra. Gallery 1957 opened with "The Listening Sweet II Ghana," and the group exhibition "Keeping Time" curated by Ekow Eshun and Karon Hepburn showcased artists who aren't emerging—they've emerged. Ghanaian contemporary art has been building for decades, but now the international art world is paying attention, which means prices are rising, galleries are multiplying, and Accra is positioning itself as the West African art capital. The question is whether the infrastructure can sustain this moment, or whether it's a speculative bubble that'll burst when international collectors move on to the next "undiscovered" market.

"Ghana 1957: Art After Independence" at the National Museum (September 21, 2024 to March 29, 2025) explores how independence shaped visual arts, and it's essential viewing for understanding why Ghanaian art looks the way it does. Post-independence optimism, pan-African identity, modernist experimentation, and the eventual disillusionment—it's all there. The exhibition argues that Ghanaian art has always been contemporary, always engaged with global discourses, and that the "discovery" narrative is colonialist nonsense. Ghana's art schools trained generations of artists, the gallery scene existed before international collectors showed up, and Ghanaian artists have been showing globally for decades. What's changed is market attention, not quality.

The gallery ecosystem is robust: Arawak Art Gallery (founded 1981, still going), Gallery 1957, Nubuke Gallery, Ada Contemporary Art Gallery, dot.ateliers, Noldor Residency, Savannah Centre for Contemporary Art in Tamale, Red Clay Studio—these are serious institutions with programming, residencies, and international partnerships. Cultural Week tours included Dikan Center, Lafa Foundation for the Arts, and Serge Attukwei Clottey's studio, because Clottey is the breakout star everyone references: his work with "afrogallonism" (sculptures and installations made from yellow plastic jerrycans) has been shown at Tate Modern, and he's become the face of Ghanaian contemporary art for international audiences. But Ghana's art scene is much deeper than one artist or one medium—painters, photographers, sculptors, installation artists, performance artists, all making work that's formally sophisticated and conceptually rigorous.

The challenge is sustainability. Accra Cultural Week is in its third edition, which is promising, but three years isn't a track record—it's a start. Can the galleries survive economically when international collector interest wanes? Is there a domestic collector base to sustain the market? Are Ghanaian artists getting institutional support (funding, studios, materials, health care) or are they reliant on gallery sales and international residencies? The research on "creative intermediaries in Accra's contemporary art sector" (published 2025 in *Creative Industries*) argues that gallerists and curators are essential to sustainable development, but they can't do it alone—policy support, arts funding, and infrastructure investment are necessary.

Film and music are less developed institutionally. Ghanaian cinema exists—Nollywood spillover, some local productions, occasional international co-productions—but there's no film industry infrastructure, no consistent funding, no major studios. Ghanaian filmmakers work in Nigeria or diaspora. Music is massive: hiplife, highlife, Afrobeats, gospel—Ghanaian musicians like Sarkodie, Stonebwoy, and Shatta Wale have regional and international audiences. But the industry is chaotic, undercapitalized, and dominated by informal networks. Success is individual hustle, not industry structure.

Ghana's UNESCO sites—Forts and Castles (slave trade dungeons on the coast), Ashanti traditional buildings—are heavy with historical trauma and cultural pride. The government invests in heritage tourism (Cape Coast Castle is essential visiting for African diaspora heritage tourism), but contemporary arts funding is negligible. The cultural budget goes to heritage preservation and festival sponsorship (Chale Wote Street Art Festival, Afrochella), not sustained institutional support for contemporary artists.

The excitement around Accra's art scene is real, but it's also fragile. If international collectors keep buying, galleries keep opening, and institutional support develops, Ghana becomes a sustainable art hub. If the market cools and government funding doesn't materialize, the scene contracts, artists leave, and Accra becomes another "almost" story. Right now, the energy is undeniable—you can feel it at Cultural Week, in the galleries, in the studios. But energy isn't enough. Infrastructure is.`,
  issues: JSON.stringify([
    'Accra Cultural Week 2024 attracting 200 international collectors and museum directors',
    '"Ghana 1957: Art After Independence" at National Museum September 21, 2024 to March 29, 2025',
    'Gallery ecosystem robust with 1957, Nubuke, Ada Contemporary, dot.ateliers, Noldor',
    'Serge Attukwei Clottey afrogallonism at Tate Modern making Ghana globally visible',
    'No film industry infrastructure, music industry massive but undercapitalized and informal'
  ])
}

async function addAllCountries() {
  console.log('Adding 13 Culture & Arts summaries to database...\n')

  const summaries = [
    DENMARK_CULTURE,
    DOMINICAN_REPUBLIC_CULTURE,
    ECUADOR_CULTURE,
    EGYPT_CULTURE,
    EL_SALVADOR_CULTURE,
    ESTONIA_CULTURE,
    ETHIOPIA_CULTURE,
    FIJI_CULTURE,
    FINLAND_CULTURE,
    FRANCE_CULTURE,
    GEORGIA_CULTURE,
    GERMANY_CULTURE,
    GHANA_CULTURE
  ]

  for (let i = 0; i < summaries.length; i++) {
    const summary = summaries[i]
    console.log(`${i + 1}. Adding ${summary.name} culture summary...`)
    console.log(`   Character count: ${summary.summary.length}`)

    await prisma.locationSummary.upsert({
      where: {
        name_type_category: {
          name: summary.name,
          type: summary.type,
          category: summary.category
        }
      },
      create: {
        name: summary.name,
        type: summary.type,
        country: summary.country,
        lat: summary.lat,
        lng: summary.lng,
        category: summary.category,
        summary: summary.summary,
        issues: summary.issues,
        topStories: '[]',
        storyCount: 0,
        updatedAt: new Date()
      },
      update: {
        summary: summary.summary,
        issues: summary.issues,
        updatedAt: new Date()
      }
    })
    console.log(`   ✅ ${summary.name} added/updated successfully\n`)
  }

  console.log('🎉 All 13 culture summaries added/updated successfully!')
  console.log('\nCharacter count summary:')
  summaries.forEach(s => {
    console.log(`  - ${s.name}: ${s.summary.length} characters`)
  })
  console.log('')
}

addAllCountries()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
