import 'dotenv/config'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

// BELARUS SUMMARY
const BELARUS_SUMMARY = `Listen, Belarus's art scene is having one of those split-personality moments that would give Freud a migraine. You've got 565 cultural events happening worldwide featuring Belarusian artists in 2024—biennials, festivals, international gallery shows—while back home in Minsk, only 73 art projects actually got off the ground. That's not a typo. That's what happens when every public event needs KGB approval and artists have their social media vetted like they're applying for nuclear codes. The Ў Gallery of Contemporary Art (yeah, it's pronounced "Oo," get used to it) is doing heroic work showcasing experimental art, but it's operating in a country where musical instruments are literally classified as weapons. Ała Savaševič is probably the busiest Belarusian artist alive right now—solo shows everywhere, nominated for Poland's prestigious Paszport Polityki award—but she's doing most of that work from outside Belarus because, well, staying home means potential imprisonment.

The National Art Museum has its gorgeous collection, four UNESCO World Heritage sites anchor the tourist trail (Mir Castle, Nesvizh Palace, Białowieża Forest, bits of the Struve Geodetic Arc), but the contemporary scene is suffocating under Lukashenko's boot. Belarus Fashion Week 2025 made headlines for featuring contemporary artists alongside runway shows—a rare moment of cultural cross-pollination that didn't get shut down. But here's the brutal reality: 2024 marked three years of imprisonment for Nobel laureate Aleś Bialacki and at least 103 other cultural figures. The Tor Band musicians faced trial for their music. Censorship and self-censorship have become the norm. Film? Forget about it—only one independent Belarusian feature made it to screens in 2024, while the country's studios function as cheap production facilities for Russian propaganda films. Three independent film festivals kept the faith, but that's a catastrophically low number for a country that once had serious cinematic ambitions.

The music scene is even grimmer: Slavianski Bazaar in Vitebsk (July 10-13, 2025) and Viva Braslav Open Air are technically happening, but the lineup is dominated by Russian artists who openly support the war in Ukraine. The Belarusian music market has been colonized, hollowed out, turned into an echo chamber for state-approved messaging. Meanwhile, the intangible cultural heritage—the Kolyada Tsars tradition, Yury's Circle Dance, the Budslav Fest, centuries-old beekeeping and straw weaving crafts—keeps on going in villages where global politics feel distant. It's beautiful and heartbreaking in equal measure.

What kills me about Belarus is the waste of potential. This is a country with deep artistic traditions, talented creators, UNESCO-recognized cultural treasures, and a population that clearly wants to engage with contemporary ideas. But the government treats art like a threat, innovation like a crime, and international recognition like evidence of treason. Belarusian artists are doing extraordinary work—just mostly from exile. The culture survives, but it's scattered across Warsaw, Vilnius, Berlin, anywhere but home. When this political nightmare finally ends, the reconstruction of Belarus's cultural infrastructure will take decades. The artists haven't given up. But they shouldn't have to choose between making art and staying free.`

const BELARUS_ISSUES = [
  "Mass exodus of artists and severe censorship under Lukashenko regime",
  "International recognition of Belarusian artists working in exile",
  "UNESCO heritage sites vs. suffocated contemporary art scene",
  "Russian colonization of music market and film industry",
  "Preservation of traditional cultural practices in rural communities"
]

// BELGIUM SUMMARY
const BELGIUM_SUMMARY = `Belgium in 2025 is basically what happens when you give a country the size of Maryland unlimited art money and a thousand-year grudge match between the Flemish and the Walloons. And you know what? It works brilliantly. Art Brussels just wrapped its 41st edition (April 24-27, 2025) with 165 galleries from 35 countries, while SP-Arte's Brussels cousin, the Affordable Art Fair (February 5-9, 2025), proved you can democratize the market without dumbing it down—90 galleries, Tour & Taxis venue, actually affordable prices. This is a country where young artists can still rent studios without selling organs, where experimental spaces co-exist with blue-chip galleries, and where the avant-garde tradition stretches back through Magritte and Ensor to the Flemish Primitives. The Dardenne brothers—Belgium's two-time Palme d'Or winners—are competing at Cannes 2025 with "Young Mothers," because of course they are. Belgium doesn't just make great cinema; it makes morally complicated, emotionally devastating great cinema.

WIELS Contemporary Art Centre just finished a show called "Narcosis" (September 2024-January 2025) featuring six female artists rethinking the Narcissus myth, while CENTRALE for Contemporary Art reopened after renovations with 245 local artists and 350 works filling the entire building—that's institutional confidence right there. The Royal Museum for Fine Arts in Antwerp holds the world's best Rubens collection (yeah, Baroque peacocking at its finest), while Bruges' Groeningemuseum is where you go to understand why the Flemish Primitives invented oil painting as we know it. Sixteen UNESCO World Heritage sites pepper the country: the Grand-Place in Brussels, the Plantin-Moretus printing museum, Victor Horta's Art Nouveau houses where every doorknob is a masterpiece. The Béguinages—medieval women's communities that were basically proto-feminist communes—are scattered across Flanders like architectural reminders that Belgium's always been weird and wonderful.

But here's what makes Belgium's scene electric right now: the collision between its high-art legacy and its contemporary scrappiness. Brussels is cheap enough that artists can afford to experiment, expensive enough that serious galleries can survive, and international enough that local insularity never calcifies. The linguistic divide (Flemish north, French-speaking south, tiny German-speaking east) creates multiple cultural ecosystems that somehow cross-pollinate instead of isolating. The Carnival of Binche—three days of guys in ostrich-feather hats throwing oranges at crowds—is UNESCO-recognized intangible heritage, which tells you everything about Belgium's relationship with absurdity and tradition. Jazz Fest Sarajevo, wait no, wrong country—Belgium has its own jazz scene, its own electronic music culture (this is the birthplace of New Beat, remember), its own way of being simultaneously provincial and cosmopolitan.

The only real problem Belgium faces is being overshadowed by Paris (two hours away), Amsterdam (same), and London (two hours-ish). International attention drifts past Brussels unless you're already in the know. But walk into any gallery during Brussels Art Week, catch a screening at the cinematheques, spend an afternoon at Bozar seeing Sophie Taeuber-Arp and Hans Arp's Dadaist romance unfold, and you'll realize Belgium's cultural scene doesn't need validation—it's too busy being excellent on its own terms. This is where you come when you want substance without pretension, history without mustiness, and art that remembers how to be both serious and alive. Just bring good walking shoes. Those cobblestones are medieval and they mean business.`

const BELGIUM_ISSUES = [
  "Art Brussels and SP-Arte establishing city as major contemporary art hub",
  "Dardenne brothers competing at Cannes 2025 with new film",
  "Balance between rich Flemish art legacy and thriving contemporary scene",
  "WIELS and CENTRALE showcasing ambitious exhibitions post-renovation",
  "16 UNESCO sites anchoring Belgium's cultural tourism infrastructure"
]

// BELIZE SUMMARY
const BELIZE_SUMMARY = `The Museum of Belizean Art finally opened in April 2024, and honestly, it's about time. Sixty-eight pieces that were literally hidden in storage vaults at the National Institute of Culture and History now have proper wall space at MOBA in Government House, and suddenly Belize has something resembling a national visual arts infrastructure. Pen Cayetano—designated Artist Emeritus, which is the kind of title you give someone when their art and music are so intertwined with national identity that you'd look ridiculous not honoring them—runs Studio Gallery Cayetano in Dangriga, where Garifuna culture gets translated into canvases and punta rhythms. Walter Castillo is "THE premiere Belize artist" according to basically everyone who visits, while Benjamin Nicholas, Michael Gordon, and Michelle Perdomo are making work that captures Belize's wild cultural diversity: Maya, Mestizo, Creole, Garifuna, Mennonite—this country's got more cultural layers than a good baklava.

But let's talk about what really matters here: Belize is finally getting serious about its film infrastructure. The Belize Film Xchange: Crossroads launched in February 2025—a week of masterclasses plus three days of festival programming featuring Caribbean and Latin American filmmakers. The 18th Belize International Film Festival (BelizeIFF) is running its hybrid model through May 2026, mixing in-person screenings with digital access, plus a two-day academic conference that actually engages with why Central American cinema matters. This is a country that's been Hollywood's favorite jungle backdrop forever (shooting "Apocalypto" and a hundred other productions here), but only now building domestic capacity for its own stories. The Belize International Music and Food Festival (July 27-28, 2024, San Pedro) brought out the Belize Punta Rock Legends Combo—Pen Cayetano, Titiman Flores, the whole gang—mixing punta, soca, reggae, and dancehall into something that could only happen on an island where everybody's from somewhere else.

And then there's the Maya ruins, which UNESCO has on its tentative list for World Heritage recognition as a cultural landscape. Caracol, Xunantunich, Lamanai, Altun Ha—Belize has the highest concentration of Maya sites in Central America, and they're not just tourist attractions. The Toledo Maya Cultural Route offers homestays and traditional cooking experiences, connecting heritage preservation with economic empowerment. You can watch contemporary Garifuna artists incorporating Maya symbolism into their work, visit Angkor-adjacent temple complexes, then head to the Image Factory Art Foundation in Belize City for whatever experimental installation they're mounting this month. It's a tiny country (400,000 people) punching way above its weight.

The Costa Maya Festival in early August cranks San Pedro into party mode—pageants, parades, punta and soca and Latin pop until sunrise. Carnival Week during Independence Month (September) turns the whole country into one long street party. The Belize Barrier Reef Reserve System (already UNESCO World Heritage) gets all the eco-tourism attention, but the cultural scene is where the real energy is right now. What's happening in Belize is a cultural infrastructure finally catching up to a population that's been making art, music, and film for decades without institutional support. MOBA's opening, the new film festivals, the music events that celebrate punta and brukdown and paranda—these aren't just events, they're proof that small countries can build sustainable cultural ecosystems if they actually invest in artists. Belize is doing it, belatedly but genuinely. And the work coming out of places like Aria Kat Art and the Pen Cayetano Studio Gallery suggests this is just the beginning.`

const BELIZE_ISSUES = [
  "Museum of Belizean Art (MOBA) opening in 2024 after decades of waiting",
  "Belize Film Xchange: Crossroads launching new international film festival",
  "Punta Rock Legends and Garifuna cultural preservation through contemporary music",
  "Maya ruins UNESCO tentative listing and cultural tourism integration",
  "Small nation building sustainable cultural infrastructure from ground up"
]

// BENIN SUMMARY
const BENIN_SUMMARY = `Benin is throwing €1 billion at cultural infrastructure, and for once, the money's going to the right places. The Museum of Contemporary Arts in Cotonou (MACC) is under construction, the International Museum of Arts and Civilisations of Vodun is opening in Porto Novo around 2025, and Benin's betting big that art and culture can drive economic growth in ways that cotton exports never will. Septième Gallery opened in Cotonou in 2022 (they already had a Paris space), and participated in the inaugural Cotonou Gallery Weekend in 2023 alongside Borna Soglo and cultural centers like Le Centre and Kulturforum Sud-Nord. Then Benin made its Venice Biennale debut in 2024—first time ever—sending a message that this isn't just West African regional ambitions, this is global stage stuff.

And it's working. "Révélation! Contemporary Art from Benin" ran at the Conciergerie de Paris from October 2024 to January 2025, featuring over 100 works by 48 artists. Charly D'Almeida, Nathanaël Vodouhè, Dominique Zinkpè, Julien Sinzogan—these names keep popping up at international fairs and exhibitions, and the work is stunning. They're pulling from voodoo symbolism (the word is "vodun," and it's an actual living religion here, not Hollywood nonsense), from colonial history, from the psychedelic visual overload of Cotonou street markets, creating contemporary art that's rooted in deep cultural traditions without being trapped by them. Spotlighted at Paris's AKAA Art Fair, these artists are proving that Benin's contemporary scene isn't emerging—it's arrived.

But let's not pretend it's all smooth sailing. President Patrice Talon's decade in power delivered economic growth (7.5% in 2024-2025) and cultural investment, but also systematic democratic backsliding—opposition banned, journalists jailed, civil society suffocated. The cultural sector benefits from state funding while the political space contracts. Artists are caught in that impossible position: grateful for unprecedented institutional support, wary of a government that's increasingly authoritarian. The Ouidah voodoo festival keeps drawing international tourists, the Royal Palaces of Abomey are UNESCO World Heritage sites, but contemporary artists navigating state patronage know that one wrong statement could end their careers—or worse.

What's fascinating about Benin right now is how the cultural explosion is happening parallel to political repression, not despite it. Talon's government wants Benin to be "Africa's top destination for art and culture," and they're investing real money to make it happen—four new museums, international partnerships, festival support. But the cost is a cultural scene that's thriving within increasingly narrow boundaries. Artists know which topics to avoid, which symbols are safe, which histories can be explored without triggering state retaliation. The result is a contemporary art movement that's visually spectacular, technically sophisticated, internationally recognized, but politically neutered in ways that'll only become obvious in hindsight.

Still, the work is undeniable. Benin's artists are making some of the most exciting contemporary art in Africa right now, the museums and galleries are creating infrastructure that'll outlast any single presidency, and the fusion of traditional vodun imagery with contemporary aesthetics is producing something genuinely new. When political space eventually opens up again (it always does, eventually), Benin's cultural institutions will be ready. Until then, we're watching a country build world-class museums while forgetting how to hold elections. It's success and tragedy in the same breath, wrapped in voodoo symbolism and contemporary flair. Only in Benin, honestly.`

const BENIN_ISSUES = [
  "€1 billion investment in new museums including MACC in Cotonou",
  "Venice Biennale debut and international recognition at Paris exhibitions",
  "Contemporary artists incorporating voodoo/vodun imagery and traditions",
  "Tension between cultural flourishing and political repression under Talon",
  "Cotonou Gallery Weekend establishing commercial art infrastructure"
]

// BHUTAN SUMMARY
const BHUTAN_SUMMARY = `VAST Bhutan—Voluntary Artists Studio Thimphu—is single-handedly dragging Bhutanese contemporary art into the 21st century, and doing it with more grace than most Western institutions manage. Two galleries in Thimphu (Alaya Gallery at the Tarayana Center, Bhutan Art Gallery at Le Meridien), regular exhibitions, youth development programs, international artist residencies since 2002—this is what happens when professional artists decide to build infrastructure instead of waiting for the state to do it. The TWINZ artists, identical twins Tashi Dendup and Ugyen Samdrup, are painting contemporary works that blend Buddhist iconography with shamanic traditions, and they've been at it since 2014, creating a visual language that's unmistakably Bhutanese but thoroughly modern. You look at their work and understand immediately: this isn't Buddhism as museum artifact, this is Buddhism as living, evolving, contemporary practice.

What makes Bhutan's art scene fascinating—and occasionally frustrating—is how tradition shapes everything without crushing innovation. Thangka painting, the centuries-old Buddhist scroll art, still dominates formal artistic training. You can't graduate from art school without mastering the precise iconographic rules: this deity holds this implement at this angle, that color means that specific spiritual concept. It's rigid, demanding, deeply meaningful—and some artists spend their entire careers perfecting traditional forms. But then you've got Artyanttra Gallery and the Vajrayana Art Gallery showing contemporary artists who learned those rules, internalized them, then started asking "what if?" What if Buddhist art could be abstract? What if shamanic symbols could be neon? What if we kept the spiritual depth but ditched the literal representation?

The infrastructure is minimal compared to regional neighbors—no massive biennales, no international film festival presence, limited commercial gallery networks—but Bhutan's smallness is an advantage here. With 750,000 people total, the art community is tight-knit enough that everyone knows everyone, experimental enough that risks get taken, and supported enough by cultural tourism (people visit for Gross National Happiness, stay for contemporary Buddhist art) that galleries can actually survive. The Bhutan Art Gallery exhibitions are small-scale, intimate affairs where you might end up having tea with the artist afterward, discussing how Buddhism's concept of emptiness translates into negative space on canvas.

The government's policy of "high value, low impact" tourism keeps visitor numbers down but cultural authenticity high—you're not getting cruise-ship crowds trampling through Thimphu galleries. UNESCO's June 2025 workshop on establishing national policy for cultural and creative industries signals that Bhutan's finally taking the economic potential of its arts sector seriously. Not in an exploitative way—this is still the country that prioritizes Gross National Happiness over GDP—but in a sustainable development way. How do you support contemporary artists without destroying the cultural traditions that make their work meaningful? How do you open to international influences without getting colonized by them? Bhutan's attempting answers that most countries never even think to ask.

What Bhutan doesn't have: a film industry worth mentioning, major music festivals, cutting-edge dance companies, or really anything resembling a Western-style contemporary arts infrastructure. What it does have: a contemporary art movement emerging directly from one of the world's deepest spiritual traditions, artists who understand both ancient Buddhist philosophy and Instagram, and a cultural ecosystem that values meaning over market trends. You won't see Bhutanese artists dominating Venice or Basel anytime soon. But walk into VAST's galleries, spend time with the TWINZ's paintings, talk to artists who've spent years learning traditional techniques before developing contemporary voices, and you'll realize Bhutan's building something more interesting than just another regional art scene. They're proving that modernity and tradition don't have to be enemies. They can be collaborators.`

const BHUTAN_ISSUES = [
  "VAST Bhutan creating contemporary art infrastructure and youth programs",
  "TWINZ artists blending Buddhist iconography with modern aesthetics",
  "Tension between traditional thangka painting and contemporary innovation",
  "UNESCO workshop establishing national cultural policy in June 2025",
  "Small-scale intimate gallery scene supported by cultural tourism model"
]

// BOLIVIA SUMMARY
const BOLIVIA_SUMMARY = `La Paz sits at 11,975 feet above sea level, which means you're literally gasping for oxygen while trying to process some of the most intense contemporary art in Latin America. Salar Galería de Arte just announced "GASTÓN UGALDE | REVEALED TERRITORIES" running May-August 2025, and if you know Ugalde's work, you know this isn't going to be subtle—the man makes large-scale installations that confront Bolivia's colonial wounds, Indigenous erasure, and contemporary political chaos with the grace of a freight train. Salar evolved from a local gallery to a global operation, repping international artists and hitting art fairs across three continents, which tells you everything about Bolivia's contemporary scene: ferociously ambitious, internationally connected, and done with being patronized as "emerging."

The Museo Nacional de Arte in La Paz recently featured a historical retrospective of women's art that didn't just dust off forgotten paintings—it put them in conversation with contemporary women artists responding to the same issues a century later. That's curatorial ambition. Mamani Mamani Gallery showcases work by the Aymaran artist who uses Indigenous symbols and traditions in paintings that explode with color—we're talking Andean cosmology meets psychedelic maximalism. His work's been exhibited worldwide, but it's rooted in the high-altitude plateau culture that most of the art world conveniently forgets exists. Contemporary ceramicist Mario Sarabia runs his workshop in La Paz, while Inés Córdova and Gil Imaná work across multiple media, pushing Bolivian art beyond the "Indigenous craft" box that Western curators love to impose.

But here's what makes Bolivia's scene genuinely exciting: the collision between its rich Indigenous heritage—Aymara, Quechua, dozens of other cultures with centuries of visual traditions—and a contemporary art movement that refuses to be folkloric. These artists aren't making tourist-friendly "ethnic art." They're grappling with colonial trauma, environmental destruction, political corruption, and Indigenous resurgence using whatever techniques and materials get the point across. The Museo Nacional de Arte calls it "a moment of great vitality"—artists exploring new materials, new techniques, new subject matter while staying rooted in Indigenous cosmologies that predate European contact by millennia.

The challenges are real, though. Bolivia remains one of South America's poorest countries, arts funding is minimal, and gallery infrastructure outside La Paz barely exists. The Indigenous art movement is vital and growing, but it's also dealing with market pressures to be "authentically Indigenous" in ways that satisfy Western buyers' expectations. Some artists resist that pressure brilliantly; others get trapped in producing what sells. Political instability doesn't help—Bolivia's gone through multiple governments, massive protests, economic crises, and ongoing tensions between Indigenous movements and traditional elites. Artists work in that chaos, making sense of contradictions that would paralyze weaker cultural ecosystems.

What Bolivia has that richer countries lack: urgent necessity. When your country's grappling with fundamental questions of identity, justice, and future direction, art stops being decorative and becomes essential. Walk through La Paz's galleries, see how artists are processing Bolivia's unresolved colonial legacy and Indigenous renaissance, and you'll understand why Bolivian contemporary art feels more alive than most of what passes for cutting-edge in New York or London. It's not polite. It's not always beautiful. But it's real, it's rooted, and it matters in ways that another Venice Biennale pavilion full of tasteful abstractions never will. Just remember to take altitude sickness pills. La Paz doesn't compromise, even on oxygen.`

const BOLIVIA_ISSUES = [
  "Salar Galería showing Gastón Ugalde's ambitious May-August 2025 exhibition",
  "Museo Nacional de Arte's women's art retrospective bridging historical and contemporary",
  "Mamani Mamani and Indigenous artists pushing beyond folkloric stereotypes",
  "Contemporary scene grappling with colonial trauma and Indigenous resurgence",
  "Limited funding and infrastructure outside La Paz constraining growth"
]

// BOSNIA AND HERZEGOVINA SUMMARY
const BOSNIA_HERZEGOVINA_SUMMARY = `The 31st Sarajevo Film Festival (August 15-22, 2025) opened with Dino Mustafić's black comedy "The Pavilion," and if you know anything about Bosnian cinema, you know that choice is perfect—dark humor is how this country processes ongoing trauma. SFF is Southeast Europe's premier film festival now, one of the largest in Europe, period. Fifty films competed for Heart of Sarajevo awards across four sections, but the real action is Talents Sarajevo, the educational platform launched in 2007 that's been nurturing emerging filmmakers from the region for nearly two decades. This is a festival that takes its role seriously: not just screening films but building the infrastructure for a sustainable Balkan film industry that doesn't exist anywhere else.

And let me be clear—Sarajevo's cultural scene is thriving despite everything. The war ended in 1995, the Dayton Accords created a dysfunctional political structure that makes the EU look efficient, and the country's been in slow-motion political crisis ever since. But walk through Sarajevo and you'll find art galleries displaying Bosnian and international contemporary work, smaller independent spaces giving platforms to emerging talent, and a constantly evolving scene that refuses to be defined solely by wartime trauma. The National Theatre hosts opera, ballet, and drama year-round. Jazz Fest Sarajevo in October-November draws international acts. There's a performance art scene, a punk scene, experimental theater groups doing work that would make Western European curators weep with envy.

Bosnia's contemporary art isn't trying to be likable. It's processing genocide, ethnic cleansing, ongoing political dysfunction, economic collapse, mass emigration of young people, and the brutal reality that the international community declared victory and moved on while Bosnia remains partitioned and paralyzed. Artists work with that weight. Some make explicitly political work confronting the Republika Srpska's denial of the Srebrenica genocide. Others explore personal memory, family trauma, the specific grief of knowing your neighbors tried to kill you. The galleries across Sarajevo—both large institutions and smaller independent spaces—provide platforms for this work, keeping alive conversations that official politics refuses to have.

The infrastructure is limited compared to regional neighbors. Croatia's got Zagreb's Museum of Contemporary Art, Serbia's got Belgrade's thriving gallery scene, but Bosnia's stuck with minimal state funding, ongoing political gridlock preventing cultural investment, and brain drain that sees the country's most talented artists, filmmakers, and musicians heading to Berlin, Vienna, or Zagreb for opportunities that don't exist at home. The Sarajevo Film Festival survives because it's become an international brand, attracting external funding and prestige. Smaller initiatives struggle.

What keeps Bosnia's cultural scene alive is sheer stubbornness. Artists who refuse to leave, who keep making work despite impossible conditions, who understand that culture is one of the few spaces where Bosnia's fractured communities can still have conversations. The 18th Sarajevo Youth Film Festival exists because young people decided it needed to exist. The independent galleries survive because artists run them collectively, sharing costs and labor. This isn't a government-supported cultural renaissance—it's a grassroots insistence that Bosnia has a cultural identity beyond war footage and ethnic division.

Sarajevo Film Festival in August, Jazz Fest in autumn, year-round gallery exhibitions, theater performances, music venues where Sevdah traditional music coexists with contemporary indie rock—this is what cultural resilience looks like. Not glamorous international attention or massive state investment, but a community of artists, curators, filmmakers, and musicians who keep working because the alternative is letting their country's cultural life die. Bosnia deserves better infrastructure, more funding, political stability that would allow long-term cultural planning. Until then, it's got one of Europe's best film festivals and a contemporary art scene that refuses to quit. Sometimes that's enough.`

const BOSNIA_HERZEGOVINA_ISSUES = [
  "31st Sarajevo Film Festival (August 2025) as Southeast Europe's premier cinema event",
  "Talents Sarajevo nurturing emerging filmmakers since 2007",
  "Contemporary art processing genocide, trauma, and ongoing political dysfunction",
  "Limited state funding and brain drain constraining cultural infrastructure",
  "Grassroots cultural resilience maintaining scene despite impossible conditions"
]

// BOTSWANA SUMMARY
const BOTSWANA_SUMMARY = `Thapong Visual Arts Centre has been Botswana's cultural heartbeat since 1998, and it's doing exactly what arts organizations should do: nurturing local talent, hosting international artist residencies (since 2002), and creating a space where contemporary African art doesn't have to apologize for existing. The TBP Artist Collective—Thero Makepe, Kim Karabo Makin, Thebe Phetogo, LegakwanaLeo Makgekgenene, Sade Shoalane—are making work that explores identity, environment, and social change, blending contemporary methods with traditional symbolism in ways that feel genuinely Botswanan rather than imported. And Gaborone's transforming from an administrative center into a legitimate creative capital where fashion, art, and music are reflecting both tradition and modern ambition.

Here's what's quietly revolutionary about Botswana's art scene: it's building sustainable infrastructure without massive state intervention or foreign funding dependency. Thapong offers residencies where international artists work for months, do community workshops, exhibit alongside local artists—that's serious cultural exchange, not tokenism. The center's been doing it for over two decades, creating networks that connect Botswanan artists to global conversations while keeping them rooted in local communities. The result is a contemporary art movement that doesn't feel derivative or stuck in "emerging market" limbo. These artists are making work that matters locally and translates internationally.

But Botswana's cultural infrastructure is minimal compared to regional neighbors. No major film festival presence, limited commercial gallery networks outside Gaborone, and arts funding that's dwarfed by what South Africa or even Namibia manages. The recent democratic transition—Duma Boko's UDC ending 58 years of BDP rule in November 2024—hasn't yet translated into cultural policy shifts, though there's hope that a new government might prioritize creative industries differently. Right now, most Botswanan artists rely on tourism money (people come for the Okavango Delta, discover contemporary art while they're here) and personal networks rather than institutional support.

What Botswana has going for it: small population (2.6 million) means the creative community is tight-knit, everyone knows everyone, and collaboration happens organically. Gaborone's cheap enough that young artists can afford studios, expensive enough that galleries can survive, and stable enough politically (despite the recent political shift) that long-term planning makes sense. The arts scene isn't dealing with civil war, authoritarian repression, or economic collapse—it's dealing with infrastructure gaps and funding shortages, which are solvable problems if there's political will.

The TBP Collective's rise signals something important: Botswanan artists are done waiting for permission to be taken seriously. They're building careers through international exhibitions, using social media to connect with global audiences, and creating work that doesn't pander to Western expectations of what "African art" should look like. Thero Makepe's photography, Kim Karabo Makin's multidisciplinary practice, Thebe Phetogo's paintings, LegakwanaLeo Makgekgenene's new media work, Sade Shoalane's found-object performance art—these are artists with distinct voices and serious ambitions.

What Botswana needs: more gallery infrastructure outside Gaborone, dedicated funding for emerging artists, international festival presence to raise the country's cultural profile, and arts education programs that go beyond traditional craft training. What it's got: Thapong Visual Arts Centre doing heroic work, a growing community of contemporary artists refusing to be ignored, and a capital city that's finally embracing its creative potential. If Boko's new government takes cultural industries seriously—UNESCO's been pushing for it across Africa—Botswana could become the region's quiet cultural powerhouse. It's already happening in Thapong's galleries. Now it needs to scale.`

const BOTSWANA_ISSUES = [
  "Thapong Visual Arts Centre anchoring contemporary art scene since 1998",
  "TBP Artist Collective gaining international recognition for innovative work",
  "Gaborone emerging as creative capital balancing tradition and modernity",
  "Limited infrastructure and funding compared to regional neighbors",
  "Post-election opportunity for new government to prioritize cultural industries"
]

// BRAZIL SUMMARY
const BRAZIL_SUMMARY = `The 36th São Paulo Biennial (September 6, 2025 - January 11, 2026) is extending from one month to four-plus months, and if that doesn't signal ambition, nothing does. Chief curator Bonaventure Soh Bejeng Ndikung titled it "Not All Travellers Walk Roads – Of Humanity as Practice," which is the kind of intellectually dense, politically engaged framing that makes São Paulo one of the world's essential contemporary art events. Free admission to the Ciccillo Matarazzo Pavilion means this isn't elitist art-world navel-gazing—this is culture as public infrastructure, which is how it should be. Meanwhile, SP-Arte's 21st edition (April 2025) brought 165 galleries to Ibirapuera Park, generated over R$100 million in sales, drew 40,000 visitors, and proved Brazilian contemporary art is having a market moment that matches its critical respect.

And that market moment is being driven by something real: renewed international enthusiasm for Latin American art post-Venice Biennale 2024 (curated by Brazilian Adriano Pedrosa of MASP), plus artists from Brazil's North Region and Indigenous artists gaining space in major galleries and international events. This isn't tokenism or temporary trend—this is the art world catching up to what Brazilian curators have been saying for decades: the country's artistic diversity, its fusion of European, African, and Indigenous traditions, creates contemporary work that's formally sophisticated and culturally urgent in ways that most Western art hasn't been since the 1970s.

But let's talk about what makes Brazil's scene genuinely different from European or North American counterparts. The São Paulo Biennial has always been multidisciplinary—visual arts, theater, film, music, architecture, graphic arts all in conversation—because Brazilian culture doesn't do neat Western categories. Contemporary art here incorporates samba, carnival aesthetics, Afro-Brazilian religious imagery, Indigenous cosmology, favela culture, political resistance, and whatever else needs to be in the mix. The result is maximalist, chaotic, unapologetically hybrid work that makes Chelsea gallery minimalism look anemic by comparison.

The film scene is equally vital—Brazilian cinema's been punching above its weight internationally for decades, and despite Bolsonaro's attempts to destroy arts funding, the sector survived. Music festivals across the country blend traditional Brazilian genres with contemporary electronic production, hip-hop, funk carioca. The UNESCO World Heritage sites—Ouro Preto's colonial architecture, Salvador's Pelourinho, Brasília's modernist planning—attract millions, but the contemporary scene is where the creative energy is concentrated right now.

The challenges are real: ongoing political instability, massive inequality meaning arts funding competes with basic social services, and concentration of resources in São Paulo and Rio while the North and Northeast regions remain culturally underserved. But Brazil's scale and diversity work in its favor—even with limited infrastructure, the sheer number of artists, the multiple regional scenes, the depth of cultural traditions to draw from creates a contemporary art ecosystem that's self-sustaining in ways smaller countries can't match.

What's happening in Brazilian art right now feels like vindication for curators and critics who've been arguing for decades that the Global South isn't "emerging"—it's been here the whole time, making essential work while the art world was busy looking elsewhere. The São Paulo Biennial extending to four months, SP-Arte hitting R$100 million in sales, Indigenous and Northern artists getting major institutional recognition, international curators finally paying attention—this isn't a moment, it's a reckoning. Brazil's been making world-class contemporary art for decades. The world's just finally catching up. Better late than never, I suppose, but Brazilian artists aren't waiting for permission anymore. They're building the future of contemporary art whether the establishment keeps up or not.`

const BRAZIL_ISSUES = [
  "36th São Paulo Biennial extending to 4+ months with free admission",
  "SP-Arte generating R$100 million in sales across 165 galleries",
  "Indigenous and North Region artists gaining international recognition",
  "Multidisciplinary approach incorporating samba, carnival, Afro-Brazilian traditions",
  "Post-Venice Biennale 2024 surge in international attention to Brazilian art"
]

// BRUNEI SUMMARY
const BRUNEI_SUMMARY = `Look, Brunei's contemporary art scene operates under constraints that would make most Western artists quit immediately. This is an absolute monarchy with strict Islamic law, substantial wealth from oil reserves, and a cultural sector that's expected to celebrate traditional values while somehow also being "contemporary." The Waterfront Art Gallery showcases about 90 pieces by 35+ local artists—paintings and installations depicting life, culture, landmarks in contemporary and traditional styles—which sounds modest until you realize that's basically the entire contemporary art infrastructure in one space. The Brunei Art Gallery in the Old Custom Building organizes exhibitions, seminars, workshops, and symposia, trying to build cultural infrastructure from scratch in a country where arts education is minimal and professional artist careers barely exist as a concept.

Creative Space Gallery & Studio has been operating since 2011 in Sengkurong Shopping Center, which tells you something about Brunei's art scene: it's small-scale, community-based, and tucked away in shopping centers because dedicated arts districts don't exist. The Islamic Calligraphy And Art Study Centre focuses on traditional Islamic arts—this is safe, culturally approved, and connects to Brunei's official identity as a Malay Islamic Monarchy. The Kampong Ayer Cultural & Tourism Gallery showcases the history and traditions of the water villages, periodically hosting temporary art exhibitions that lean heavily toward cultural preservation rather than contemporary innovation.

The annual Brunei Art Forum in January-February is when the local art community actually gathers, discusses work, and pretends for a moment that Brunei has something resembling a contemporary art scene. But the reality is brutal: minimal state funding (unless you're making work that celebrates the Sultan or traditional Islamic culture), no commercial gallery market worth mentioning because the local wealthy buy art from Singapore or international auction houses, and zero space for politically engaged or culturally critical work. Contemporary artists in Brunei are making decorative paintings of mosques and water villages because that's what sells and what's acceptable.

But here's what's occasionally interesting: some artists are using traditional Islamic calligraphy and geometric patterns as a jumping-off point for contemporary work. Taking centuries-old artistic traditions, learning the rules, then pushing at the edges in ways that are respectful enough to avoid censorship but innovative enough to be called contemporary. It's working within massive constraints, but it's not entirely static. The problem is that without critical discourse, without galleries that'll show challenging work, without arts education that teaches students to question rather than replicate, these small innovations remain isolated rather than building into a movement.

The November 2026 event coinciding with Sultan Brunei's 80th birthday will feature Malaysia Islamic Art and Design, which they're planning to make annual. This is telling: Brunei's cultural calendar is organized around celebrating the monarchy and traditional Islamic heritage. There's nothing wrong with that in itself, but when it's the only game in town, contemporary artists have nowhere to go with work that doesn't fit those narrow parameters. Most talented young artists leave for Kuala Lumpur, Singapore, or Western universities and never return professionally.

What Brunei has: wealth, stability, deep Islamic artistic traditions, and a small but dedicated community of artists trying to build something. What it lacks: freedom, infrastructure, critical discourse, arts education, commercial markets, international connections, and any real appetite for contemporary art that challenges or questions official narratives. The result is a cultural scene that's more museum than living ecosystem—preserving traditions beautifully but struggling to create anything genuinely new. Unless Brunei's government decides contemporary art is a priority (spoiler: they won't), the scene will remain what it is: small, safe, and stuck. Talented individual artists will continue doing good work in isolation. But a thriving contemporary art scene? Not in this political system. Not anytime soon.`

const BRUNEI_ISSUES = [
  "Waterfront and Brunei Art Galleries providing minimal contemporary infrastructure",
  "Islamic Calligraphy And Art Study Centre focusing on traditional forms",
  "Strict Islamic monarchy constraining artistic freedom and critical discourse",
  "Artists working within narrow parameters of cultural acceptability",
  "Brain drain as talented artists leave for Singapore and Malaysia opportunities"
]

// BULGARIA SUMMARY
const BULGARIA_SUMMARY = `Sofia Art Fair debuted October 3-6, 2024, and honestly, it's embarrassing that Bulgaria's capital has never hosted a proper contemporary art fair until now. But better late than never—the next edition's scheduled for October 3-5, 2025, and Sofia's finally getting the commercial gallery infrastructure it needs. RIVOLI Gallery opened in September 2024 with an exhibition literally titled "The Beginning," positioning itself as a space for modern urban art. BLENDA founded in 2024 to showcase contemporary artists across painting, photography, installations, video, and every possible medium. B61 Gallery opened in 2023 with the credo "Contemporary art for contemporary people," which sounds like marketing-speak but signals real ambition: promoting Bulgarian artists who've been ignored by the international circuit for decades.

And let me be clear—Bulgarian artists are excellent, they've just been working in a market that barely existed. Rakursi Art Gallery in Sofia's city center focuses on contemporary Bulgarian and international work, creating the kind of cross-cultural dialogue that's been missing. The infrastructure that should have been built in the 1990s post-communism collapse is finally arriving in 2024-2025, three decades late but genuinely committed. The Sofia Film Festival (typically March) is Bulgaria's biggest competitive film fest, FIAPF-accredited, drawing international audiences. The International Portrait Film Festival and Master of Art Film Festival (documentaries on art, the only Eastern European festival dedicated to it) fill specific niches that prove Sofia's cultural sector is diversifying beyond just "emerging market" catchalls.

But the challenges are real. Sofia lacks a permanent contemporary art exhibition space, which is absurd for a capital city of 1.2 million in the European Union. Despite having genuinely talented artists, the infrastructure remained skeletal for decades—one or two struggling galleries, minimal state support, zero international collector presence. Bulgarian contemporary art was making great work in complete obscurity, known regionally but invisible to Venice, Basel, Frieze, or any of the circuits that confer legitimacy and enable artist careers. Sofia Art Fair's launch changes that equation, creating a marketplace where international collectors and curators can discover Bulgarian artists they've been missing.

Plovdiv—Bulgaria's second city, European Capital of Culture 2019—has its own cultural calendar packed with international concerts, art exhibitions, theater festivals, and film awards throughout 2025. This matters because it distributes cultural infrastructure beyond just the capital, creating regional artistic ecosystems rather than the Sofia-or-nothing model that plagued Bulgarian culture for decades. Sofia Design Week in June celebrates modern aesthetics and innovative thinking. The contemporary art and music scene features numerous independent galleries frequently hosting modern exhibitions, providing platforms for both established and emerging artists.

What's exciting about Bulgaria right now is the palpable sense that the cultural sector is finally being taken seriously after decades of neglect. The new galleries opening in 2024, Sofia Art Fair establishing itself, the film festivals expanding, Plovdiv maintaining its own cultural identity—these aren't random events, they're a cultural ecosystem finally getting built. Bulgarian artists who've been working in obscurity for decades are suddenly getting gallery representation, international exhibition opportunities, and actual career trajectories that don't require moving to Berlin or Vienna.

The political context can't be ignored: Bulgaria remains the EU's poorest member state, corruption is endemic, and arts funding is minimal compared to Western European neighbors. But there's also membership in the EU itself, which creates opportunities for cross-border collaboration and funding access that wasn't available pre-2007. Bulgarian artists can now exhibit across Europe without visa complications, apply for international residencies and grants, and participate in cultural exchange programs. The infrastructure is being built now because it's finally economically viable and politically stable enough to sustain.

Sofia's contemporary scene isn't trying to compete with Berlin or London—it's building something that works for Bulgarian artists and Bulgarian audiences while remaining open to international connections. That's the right approach. Not imitating Western models but creating sustainable cultural infrastructure that respects local contexts while maintaining global ambitions. With Sofia Art Fair returning in October 2025, more galleries opening, and film festivals expanding, Bulgaria's contemporary art scene is finally getting the attention it's deserved for decades. About time.`

const BULGARIA_ISSUES = [
  "Sofia Art Fair launching 2024 as Bulgaria's first major contemporary art fair",
  "RIVOLI, BLENDA, and B61 galleries opening 2023-2024 creating new infrastructure",
  "Sofia Film Festival and specialized film festivals expanding international presence",
  "Decades-late infrastructure development after post-communist cultural collapse",
  "Plovdiv maintaining independent cultural calendar as regional counterweight to Sofia"
]

// BURKINA FASO SUMMARY
const BURKINA_FASO_SUMMARY = `FESPACO 2025—the 29th Panafrican Film and Television Festival of Ouagadougou, February 22-March 1—registered 1,351 films including 81 from Burkina Faso itself, and somehow, despite jihadist insurgencies controlling 30% of the country, despite Captain Ibrahim Traoré's military junta extending its rule until 2029, despite systematic censorship and forced military conscriptions of critics, FESPACO happened. Let that sink in. The streets of Ouagadougou filled with families, pop-up stages featured Burkinabè rappers, screenings at Cine Burkina reverberated with traditional music, and for one week, one of Africa's most important cultural events proceeded as if the country wasn't literally collapsing. That's either inspiring resilience or grotesque denial, depending on your mood.

FESPACO's been running since 1969, growing from five participating African countries to forty-eight nations plus diaspora filmmakers, and it remains one of Africa's premier film festivals. But the 2025 edition operated under conditions that would make most festivals impossible: systematic censorship requiring pre-approval of all participants' social media, potential cancellation even on event day if authorities decide someone's suspect, and a climate where artistic criticism of the regime means disappearing or getting conscripted. The theme "Cinema of Africa and Cultural Identities" is rich with irony when your own country's government treats cultural expression as potential treason. Chad was guest of honor country, which—given Chad's own authoritarian government—tells you everything about which regimes FESPACO can safely celebrate.

The Récréâtrales Theater Festival ran in October 2024 for its 13th iteration, bringing 150+ African and European artists to Ouagadougou, drawing 4,500 theater lovers despite everything. The theme "Turning the Face to the Sun" celebrated resilience, love, and freedom while providing a platform to address societal injustices—which requires reading between lines so carefully you need a magnifying glass, because direct criticism gets you arrested. This is culture as coded resistance, art happening in the narrow spaces authoritarianism hasn't yet closed.

But let's not romanticize this: Burkina Faso's cultural sector is suffocating. Only one independent feature film made it to screens in 2024. Three independent film festivals survived, which is catastrophically few for a country with FESPACO's legacy. The music market is dominated by artists who openly support violence and repression. Self-censorship is the norm because actual censorship means imprisonment. The National Museum and Village Artisanal de Ouagadougou offer glimpses of cultural heritage, but contemporary artists are fleeing abroad, working in exile, or making safe, politically neutered work that won't trigger state retaliation.

What kills me about Burkina Faso is that this is a country with extraordinary cultural infrastructure—FESPACO, SIAO (International Art and Craft Fair), established museums, deep artistic traditions—and it's all being destroyed by a military government that sees art as threat rather than resource. The jihadist insurgencies make parts of the country inaccessible, displacing artists and audiences alike. The economic collapse means arts funding evaporates. And Traoré's regime, which justified its coup by promising security, has delivered neither security nor freedom.

FESPACO happening despite all this is testament to organizers' dedication and the cultural sector's refusal to quit. But it's also a tragedy: one of Africa's greatest film festivals reduced to carefully curated content that won't offend the junta, international guests vetted for political reliability, and local filmmakers making work that avoids anything controversial. The next FESPACO is scheduled for February 27-March 6, 2027, and nobody knows if Burkina Faso will be stable enough to host it, or if the festival will even survive in meaningful form.

What Burkina Faso needs: political stability, freedom of expression, security that allows artists to work without fear, and state support for culture that doesn't come with censorship strings attached. What it has: a military junta extending its rule indefinitely, jihadist insurgencies expanding, a humanitarian catastrophe unfolding, and artists trying to keep culture alive in impossible conditions. FESPACO and Récréâtrales surviving is remarkable. But survival isn't thriving. And Burkina Faso's cultural scene deserves so much better than just not dying yet.`

const BURKINA_FASO_ISSUES = [
  "FESPACO 2025 hosting 1,351 films despite jihadist insurgencies and military junta",
  "Systematic censorship requiring social media vetting and pre-approval of all events",
  "Récréâtrales Theater Festival maintaining resilience despite repression",
  "Cultural sector suffocating with only one indie feature film released in 2024",
  "Artists forced into exile, self-censorship, or politically neutered work to survive"
]

// CAMBODIA SUMMARY
const CAMBODIA_SUMMARY = `Phnom Penh's contemporary art scene is finally shedding the "apsaras and Angkor sunrise" tourist-art trap, and it's about time. The Gallerist on Street 240 is "the most exclusive newcomer" and signals that the city's art infrastructure is maturing—currently showing Chhim Sothy's solo exhibition "HIGHLANDS" (November-December 2025) exploring Cambodia's ethnic communities in Ratanakiri and Mondulkiri, work that's ethnographically engaged without being exploitative. Rosewood Phnom Penh's IKHONS exhibition (December 2024-February 2025) featured nine artists reimagining "icons" in Khmer contexts, and when five-star hotels are hosting conceptually ambitious contemporary art, you know something's shifted.

Sa Sa Art Projects has been the serious contemporary art space for years—non-profit, dedicated to Southeast Asian and Cambodian artists, focused on experimental and interdisciplinary work that wouldn't survive in commercial galleries. Meta House remains the cultural anchor: extensive art exhibitions, film screenings, events that treat Phnom Penh as part of regional and global art conversations rather than isolated provincial backwater. Chhan Dina Gallery, opened by the acclaimed contemporary artist himself on Street 13 near the National Museum, proves that successful Cambodian artists are reinvesting in local infrastructure rather than just taking international success and running.

Phsar Art 2024—Cambodia's only dedicated art market—returned November 2-3 at The Ground Market, featuring 60+ artists, designers, and students displaying everything from contemporary designs to experimental pieces. Kumnooh functions as Cambodia's arts guide, tracking exhibitions, performances, and cultural events, which shouldn't be noteworthy except most countries in Southeast Asia lack that kind of dedicated cultural journalism. The scene is small—Phnom Penh's 2.3 million people, not all of them art-engaged—but it's genuine, building sustainable infrastructure rather than just chasing tourist dollars.

But let's acknowledge the context: Cambodia's contemporary art scene is emerging from the Khmer Rouge genocide that killed an estimated 90% of the country's artists, intellectuals, and cultural figures. That's not ancient history—it's within living memory, and the intergenerational trauma shapes everything. The contemporary scene is being built essentially from scratch, because the cultural continuity was severed brutally and comprehensively. Some artists incorporate Angkor iconography because it's genuinely meaningful to Khmer identity, not just tourist-friendly decoration. Lucas Varro explores "the imperfect beauty of Cambodia's ancient temples," and when those temples represent both cultural heritage and loss—the Khmer Empire's grandeur and its violent collapse—that complexity matters.

UNESCO and Cambodia's Ministry of Culture and Fine Arts hosted a major workshop in June 2025 ("Shaping the Future: Towards a National Policy for Cambodia's Cultural and Creative Industries") with 180+ participants, signaling that the government's finally taking cultural infrastructure seriously beyond just heritage tourism. CamboFest revived the Royal movie hall venue with custom screen and digital throughput, now being used for cultural events in Kampot province—that's building film infrastructure in regional cities, not just the capital. The Cambodia International Film Festival is preparing its 15th edition for 2026. These aren't glamorous developments, but they're essential: creating the boring institutional frameworks that allow art scenes to thrive long-term.

The challenges remain enormous: poverty (Cambodia's per capita GDP is around $1,700), limited arts education, minimal state funding, and a political system (Hun Manet took over from his father Hun Sen in 2023) that's authoritarian and doesn't particularly value artistic freedom. But compared to the Khmer Rouge era, compared even to the chaotic 1990s post-conflict reconstruction, Cambodia's contemporary art scene is healthier and more vibrant than it's been in half a century.

What's exciting about Phnom Penh right now is the sense that the contemporary scene is finding its identity—not just imitating Bangkok or Singapore, not stuck in heritage tourism, but creating work that's distinctly Cambodian while engaging with regional and global art conversations. Chhim Sothy's ethnographic photography, the IKHONS exhibition's conceptual rigor, Phsar Art's grassroots energy, Chhan Dina's established gallery presence—these are signs of a maturing cultural ecosystem. Not perfect, not wealthy, not free of constraints. But alive, growing, and refusing to be defined solely by trauma. That's worth celebrating.`

const CAMBODIA_ISSUES = [
  "The Gallerist and new galleries signaling maturing Phnom Penh art infrastructure",
  "Rosewood IKHONS exhibition and Sa Sa Art Projects pushing conceptual boundaries",
  "Phsar Art 2024 as Cambodia's only dedicated independent art market",
  "UNESCO June 2025 workshop establishing national cultural policy framework",
  "Contemporary scene emerging from Khmer Rouge genocide that killed 90% of artists"
]

// Country data with coordinates
const countries = [
  { name: 'Belarus', code: 'BY', lat: 53.9006, lng: 27.5590, summary: BELARUS_SUMMARY, issues: BELARUS_ISSUES },
  { name: 'Belgium', code: 'BE', lat: 50.8476, lng: 4.3572, summary: BELGIUM_SUMMARY, issues: BELGIUM_ISSUES },
  { name: 'Belize', code: 'BZ', lat: 17.1899, lng: -88.4976, summary: BELIZE_SUMMARY, issues: BELIZE_ISSUES },
  { name: 'Benin', code: 'BJ', lat: 9.30769, lng: 2.315834, summary: BENIN_SUMMARY, issues: BENIN_ISSUES },
  { name: 'Bhutan', code: 'BT', lat: 27.5142, lng: 90.4336, summary: BHUTAN_SUMMARY, issues: BHUTAN_ISSUES },
  { name: 'Bolivia', code: 'BO', lat: -16.2902, lng: -63.5887, summary: BOLIVIA_SUMMARY, issues: BOLIVIA_ISSUES },
  { name: 'Bosnia and Herzegovina', code: 'BA', lat: 43.8564, lng: 18.4131, summary: BOSNIA_HERZEGOVINA_SUMMARY, issues: BOSNIA_HERZEGOVINA_ISSUES },
  { name: 'Botswana', code: 'BW', lat: -22.3285, lng: 24.6849, summary: BOTSWANA_SUMMARY, issues: BOTSWANA_ISSUES },
  { name: 'Brazil', code: 'BR', lat: -14.2350, lng: -51.9253, summary: BRAZIL_SUMMARY, issues: BRAZIL_ISSUES },
  { name: 'Brunei', code: 'BN', lat: 4.5353, lng: 114.7277, summary: BRUNEI_SUMMARY, issues: BRUNEI_ISSUES },
  { name: 'Bulgaria', code: 'BG', lat: 42.7339, lng: 25.4858, summary: BULGARIA_SUMMARY, issues: BULGARIA_ISSUES },
  { name: 'Burkina Faso', code: 'BF', lat: 12.2383, lng: -1.5616, summary: BURKINA_FASO_SUMMARY, issues: BURKINA_FASO_ISSUES },
  { name: 'Cambodia', code: 'KH', lat: 12.5657, lng: 104.9910, summary: CAMBODIA_SUMMARY, issues: CAMBODIA_ISSUES },
]

async function generateCultureSummaries() {
  console.log('🎨 Generating Culture & Arts summaries for 13 countries (Belarus through Cambodia)\n')

  try {
    for (const country of countries) {
      console.log(`\n${'='.repeat(80)}`)
      console.log(`Processing: ${country.name}`)
      console.log('='.repeat(80))

      const id = `${country.code}-culture`

      console.log(`📊 Summary length: ${country.summary.length} characters`)
      console.log(`📋 Issues count: ${country.issues.length}`)

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
          country: country.code,
          lat: country.lat,
          lng: country.lng,
          category: 'culture',
          summary: country.summary,
          issues: JSON.stringify(country.issues),
          topStories: '[]',
          storyCount: 0,
          updatedAt: new Date()
        },
        update: {
          summary: country.summary,
          issues: JSON.stringify(country.issues),
          topStories: '[]',
          storyCount: 0,
          updatedAt: new Date()
        }
      })

      console.log(`✅ ${country.name} culture summary saved successfully`)
    }

    console.log('\n' + '='.repeat(80))
    console.log('✅ All 13 culture summaries generated and saved to database!')
    console.log('='.repeat(80))

    console.log('\n📈 Summary Statistics:')
    for (const country of countries) {
      console.log(`${country.name}: ${country.summary.length} chars, ${country.issues.length} issues`)
    }

  } catch (error) {
    console.error('❌ Error generating summaries:', error)
    throw error
  }
}

generateCultureSummaries()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
