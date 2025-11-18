import { saveEntertainmentSummaries } from './save-entertainment-summaries'

const BATCH_01 = [
  {
    name: 'United States',
    summary: `American entertainment remains the global hegemon, though cracks in the empire grow more visible daily. Hollywood's theatrical business model is genuinely imperiled—streaming fragmentation, pandemic-accelerated behavioral changes, and ballooning production costs create existential challenges. Yet American film still sets global agendas. Everything Everywhere All at Once winning Best Picture signaled genuine appetite for creative risk-taking. Barbenheimer dominated 2023, proving event cinema survives. The strikes of 2023-2024 exposed industry fault lines—streaming residuals, AI concerns, collapsing middle-class careers. Independent cinema struggles for oxygen, though A24 demonstrates sustainable models exist for ambitious work.

Television's golden age plateaus into something stranger—too much content, declining quality thresholds, audience fragmentation so severe that monoculture feels like historical artifact. Prestige TV persists—Succession, The Bear, The Last of Us—but streaming economics are brutal. Netflix cancels everything, Disney bleeds money, consolidation accelerates. Reality TV and true crime remain reliably profitable, which tells you something depressing about sustainable content models. Late-night comedy contracts as cable dies, though YouTube provides new distribution possibilities.

Music sees continued genre-blurring—hip-hop remains culturally dominant, but pop, country, and R&B boundaries dissolve. Taylor Swift and Beyoncé operate at unprecedented commercial and cultural scale. Concert touring becomes primary revenue stream as streaming pays pennies. Nashville's songwriter economy demonstrates music industry's ongoing structural unfairness. The festival circuit expands despite economic headwinds. Licensing and sync remain crucial for emerging artists.

Gaming is massive—bigger than film and music combined, though culturally less respected. Call of Duty, Fortnite, and Roblox print money. Microsoft's Activision acquisition reshapes industry power. Unionization efforts gain traction as crunch culture faces overdue reckoning. Esports professionalization continues unevenly, some leagues collapsing while others stabilize. Gaming's cultural influence on film and TV grows impossible to ignore.

Social media entertainment: YouTube creators, TikTok stars, podcast empires operate parallel to traditional media. MrBeast represents new entertainment paradigm—algorithmic optimization as creative philosophy. The influencer economy's top tier earns astounding sums while the middle class struggles. Parasocial relationships monetized at industrial scale. American soft power through entertainment remains formidable despite political dysfunction making the export less appealing.`
  },
  {
    name: 'Canada',
    summary: `Canadian entertainment exists in productive tension with American cultural gravity. The film industry survives through tax credits that make Toronto and Vancouver de facto Hollywood North—huge production volumes, limited Canadian creative control. Yet genuine Canadian cinema persists: Denis Villeneuve became science fiction's preeminent director. The Banshees of Inisherin (though Irish-set) showcased Martin McDonagh's Canadian connections. Indigenous filmmakers are creating vital work—Danis Goulet, Jeff Barnaby, Michelle Latimer pushing boundaries. TIFF remains crucial festival infrastructure. Telefilm Canada provides essential funding, though budgets pale compared to Hollywood scale. French-language Quebec cinema operates in its own ecosystem, often more culturally confident than English-Canadian equivalents.

Television punches above weight. Schitt's Creek achieved genuine cultural breakthrough, demonstrating Canadian sensibilities can travel. Kim's Convenience found global audiences before messy ending. Canadian television often feels more British than American—CBC sensibilities, modest production values, genuine regional character. The streaming era complicates Canadian content requirements, Netflix and others negotiating around CanCon rules. Documentary tradition remains strong—the National Film Board's influence endures.

Music sees genuine international success: The Weeknd, Drake, Justin Bieber dominate globally, though their Canadian identity often gets minimized. Indigenous artists like Tanya Tagaq, Buffy Sainte-Marie redefine what Canadian music means. The indie scene—Arcade Fire, Broken Social Scene legacy—continues producing internationally respected acts. FACTOR and similar programs provide crucial support infrastructure. Montreal's music scene remains vibrant, French and English intermingling productively. Country music finds substantial audiences in prairie provinces and Atlantic Canada.

Gaming industry is significant—BioWare, Ubisoft Montreal producing major titles. Vancouver and Montreal are development hubs. Government support through tax credits and training programs helps compete globally. Esports sees growing infrastructure, though major tournaments still gravitate toward American cities.

Social media creators carve out space, though often migrate to Los Angeles for career advancement. The Canadian politeness stereotype sometimes works commercially—wholesome content performs well algorithmically. Quebec influencers operate primarily in francophone digital spaces. CanCon rules don't really apply to social platforms, creating genuine cultural challenges as younger Canadians consume primarily American digital entertainment.`
  },
  {
    name: 'Mexico',
    summary: `Mexican entertainment operates at two speeds simultaneously—the narco-saturated popular culture that dominates streaming globally, and the sophisticated auteur cinema that wins Oscars and Venice Lions. Alfonso Cuarón, Guillermo del Toro, Alejandro González Iñárritu—the "Three Amigos" demonstrated Mexican directors could dominate prestige cinema. Their success opened doors for younger generations. Michel Franco's clinical brutality, Alonso Ruizpalacios's genre experimentation, Fernanda Valadez's migrant chronicles represent genuine artistic ambition. Yet commercial Mexican cinema often means narco-comedies and action films that American critics ignore while pulling massive domestic box office.

Television's narco obsession is inescapable—narcocorridos, narco-series, true crime documentaries endlessly circling cartel mythology. Narcos: Mexico, El Chapo, countless telenovelas mining violence for melodrama. The genre's international popularity on Netflix and other platforms ensures continued production, moral ambiguity be damned. Yet Mexican television also produces sophisticated work—period dramas, comedies, adaptations of literary fiction. Televisa and TV Azteca maintain duopoly power, though streaming services complicate their dominance.

Music remains culturally vital and globally influential. Regional Mexican music—corridos, banda, norteño—commands massive audiences in Mexico and throughout US Latino communities. Bad Bunny's collaborations with Mexican artists demonstrate continued cross-pollination. Pop music sees international success—Peso Pluma, Natanael Cano innovating within regional Mexican traditions. Rock en español legacy continues through new generations. The Mexico City music scene is diverse and creative—electronic music, indie rock, experimental sounds finding audiences.

Lucha libre remains pop culture institution—masked wrestlers are genuine celebrities, appearing in films, commercials, variety shows. The theatrical tradition intersects with broader entertainment culture in distinctly Mexican ways. Gaming culture grows steadily, Mexico City hosting major esports tournaments. Internet penetration expanding access, though infrastructure gaps persist.

Social media influencers are huge—beauty bloggers, comedians, lifestyle creators building massive followings. YouTube sensations like Luisito Comunica operate at global scale. TikTok México produces viral content that crosses borders easily. The creator economy offers opportunities in nation with limited traditional employment. Mexican entertainment's global soft power continues expanding, especially throughout Latin America and US Spanish-speaking markets.`
  },
  {
    name: 'Brazil',
    summary: `Brazilian entertainment is a behemoth—the largest Portuguese-language market, cultural superpower throughout Latin America, exporter of sounds and styles that reshape global pop culture. The film industry produces hundreds of features annually, though commercial viability remains challenging. City of God's legacy endures, favela cinema continuing to grapple with violence and inequality. Contemporary directors like Kleber Mendonça Filho (Bacurau) and Anna Muylaert push formal boundaries while engaging social realities. The nordeste produces distinctive regional cinema. São Paulo and Rio remain production centers, but film culture extends nationwide.

Television means telenovelas—Globo's prime-time melodramas remain cultural institution despite streaming disruption. The novela format influences narrative television globally, Netflix and others mining Brazilian IP. Reality TV is massive—Big Brother Brasil among the most-watched in franchise history. Streaming originals increasingly target Brazilian market—3%, The Mechanism, invisible city drawing international audiences. Sports broadcasting dominates—football obsession means rights are extraordinarily valuable.

Music is where Brazil's cultural power truly shows. Sertanejo—Brazilian country music—is commercially massive, stadium tours selling hundreds of thousands of tickets. Funk carioca, born in Rio favelas, goes global through streaming and social media—Anitta's international breakthrough validates decades of funk innovation. MPB tradition continues through new generations, samba persists as cultural foundation. Forró, brega, tecnobrega demonstrate regional musical diversity. São Paulo's electronic music scene is world-class, carnival in Rio and Salvador remain massive cultural-economic events.

Gaming culture explodes—Brazil is Latin America's largest gaming market. Esports sees professional infrastructure, Brazilian CS:GO and League of Legends teams competing globally. Free Fire is phenomenally popular, mobile gaming accessibility crucial in economically stratified society. Game development industry grows, though talent often migrates to higher-paying markets.

Social media creators are massive—beauty influencers, comedians, gamers, lifestyle creators building multi-million followings. Brazilian TikTok, Instagram, YouTube scenes are vibrant and distinctive. The creator economy offers entrepreneurial possibilities in nation with high unemployment and economic uncertainty. Brazilian Portuguese content dominates lusophone digital spaces, influence extending to Portugal, Angola, Mozambique.`
  },
  {
    name: 'Argentina',
    summary: `Argentine entertainment maintains cultural sophistication despite recurring economic catastrophe. The film industry punches far above the country's economic weight—Luis Puenzo's The Official Story won the foreign-language Oscar in 1986, establishing template for Argentine cinema engaging dictatorship trauma. Contemporary directors like Lucrecia Martel, Pablo Trapero, and Damián Szifron produce formally adventurous work that circulates globally. INCAA provides government funding, though budget cuts and political interference create uncertainty. Buenos Aires film culture is intense—cinephilia as genuine social identity, repertory programming, serious criticism.

Television saw golden age in early 2000s—sophisticated dramas, comedies, variety shows demonstrating Buenos Aires's cultural ambitions. Economic crisis undercut production budgets, though quality programming persists. The streaming era brings Argentine originals to Netflix, Amazon, HBO—El Marginal, Apache, The Kingdom finding international audiences. Sports broadcasting centers on football obsession, documentary tradition remains strong. Teatro culture influences television aesthetics—performance styles, narrative structures reflecting stage traditions.

Music operates across high and low culture productively. Tango remains tourist attraction and genuine art form—contemporary musicians innovate within tradition. Rock nacional is cultural institution, bands like Soda Stereo achieving legendary status. Cumbia villera documents working-class realities, urban music scene blends reggaeton, trap, and distinctly Argentine flavors. Folkloric traditions persist, Mercedes Sosa's legacy echoes through generations. Buenos Aires is serious music city—jazz, classical, electronic scenes all active. The economic crisis makes sustainable music careers nearly impossible, yet creativity persists.

Gaming culture exists among younger, more economically comfortable demographics. Esports infrastructure develops slowly, economic instability limiting investment. Internet access improving but inconsistent. Argentine gamers and developers operate despite challenging environment.

Social media entertainment grows despite economic headwinds. Comedy and political satire thrive—Argentines process endless crisis through humor. Influencer culture develops, though monetization challenges in peso economy. YouTube creators produce content across genres, TikTok Argentina is active. The creator economy offers alternative to traditional employment in nation where jobs are scarce and unstable. Porteño cultural confidence ensures Buenos Aires remains cultural capital disproportionate to economic circumstance.`
  },
  {
    name: 'Chile',
    summary: `Chilean entertainment benefits from relative economic stability in turbulent region, though social explosion of 2019 and constitutional crises reveal underlying tensions. The film industry produces internationally recognized work—Pablo Larraín is major auteur, his Pinochet trilogy and films like Spencer demonstrating range and ambition. No occupies strange space as explicitly political film nominated for Best Foreign Language Film. Younger directors explore contemporary anxieties—class division, indigenous rights, environmental destruction. Government funding through CNCA supports production, though budgets remain modest. Santiago's film culture is active, Valparaíso offers bohemian alternative.

Television underwent modernization in 2000s, cable and later streaming disrupting traditional networks. TVN produces quality programming despite funding challenges, Canal 13 and Mega compete commercially. Chilean Netflix originals—42 Days of Darkness, The Marked Heart—demonstrate production capabilities. Telenovelas persist but evolve, comedy and variety shows maintain audiences. Documentary tradition is strong, particularly work engaging dictatorship memory and contemporary social movements.

Music scene is diverse and politically engaged. Nueva canción legacy—Victor Jara's martyrdom—haunts Chilean music, protest songs resurging during 2019 uprising. Rock and pop produce commercially successful acts, reggaeton and urban music dominate youth markets. Electronic music scene in Santiago is sophisticated, folkloric traditions persist in rural areas. Mapuche musicians assert indigenous cultural presence. The festival circuit is active, Lollapalooza Chile among largest music events.

Gaming culture grows among urban middle class. Chilean developers create games, though small market limits commercial viability. Esports infrastructure develops, particularly around League of Legends and FIFA. Internet access is relatively good by regional standards, smartphone penetration high.

Social media entertainment is active—beauty influencers, comedians, political commentators building audiences. The 2019 protests radicalized Chilean social media, memes and videos documenting state violence and popular resistance. YouTubers and TikTokers produce content across genres. The creator economy offers opportunities, though monetization challenges persist. Chilean content often engages social and political tensions that traditional media sometimes avoids. Earthquake humor demonstrates processing collective trauma through digital culture.`
  },
  {
    name: 'Colombia',
    summary: `Colombian entertainment breaks free of narco stereotypes, though Pablo Escobar's ghost still generates streaming revenues. The film industry produces diverse work—Ciro Guerra's Embrace of the Serpent was mesmerizing, black-and-white journey into Amazonian cosmologies. Contemporary filmmakers explore violence, displacement, and contemporary urban life beyond reductive narco narratives. Government support through Proimágenes Colombia and FDC funds production. Cartagena Film Festival is regional institution. Yet commercial Colombian cinema often means comedies and narco-content that international critics ignore.

Television transformed from regional player to global content supplier. Narcos legitimized Colombian locations and stories for international audiences, creating production infrastructure boom. Medellín and Bogotá host major productions, crews gain experience working on international projects. Colombian telenovelas—Yo soy Betty, la fea being most successful Spanish-language format ever—demonstrate narrative sophistication. RCN and Caracol produce for domestic and export markets. Reality shows are huge, Colombian talent shows launching careers.

Music is where Colombia's cultural power truly radiates. Shakira and Carlos Vives are global superstars, championing Colombian sounds internationally. Vallenato, cumbia, and other regional styles influence Latin music broadly. The reggaeton explosion owes huge debt to Colombian innovation—Medellín is major urban music center. J Balvin operates at global pop scale. The música popular scene thrives, folkloric traditions persist across regions. Bogotá, Medellín, and Cali each have distinct musical identities.

Gaming culture expands rapidly as internet access improves. Colombian esports teams compete regionally, Bogotá and Medellín host tournaments. Free Fire and mobile gaming reach wide audiences, PC gaming among economically comfortable demographics. Development industry exists in nascent form.

Social media creators build substantial followings—beauty influencers, comedians, lifestyle bloggers operating at scale. Colombian YouTube creators produce high-quality content, TikTok Colombia is vibrant. The creator economy offers entrepreneurial paths in nation with significant unemployment. Colombian content circulates throughout Spanish-speaking world, influencers collaborating across borders. The narco association lingers in some content, but contemporary Colombian digital culture is far more diverse and creative than stereotypes suggest.`
  },
  {
    name: 'Peru',
    summary: `Peruvian entertainment operates from Latin America's margins, culturally overshadowed by larger neighbors yet producing distinctive work. The film industry is small but vibrant—Claudia Llosa's The Milk of Sorrow won Berlin's Golden Bear, putting Peruvian cinema on international map. Contemporary directors explore indigenous identity, urban migration, and Amazon realities. Government funding through DAFO supports production, though budgets are minimal. Lima film culture is active, festivals showcase local work. The challenge is domestic distribution—Peruvian films struggle for theater space dominated by Hollywood and occasionally Mexican or Argentine productions.

Television consists primarily of telenovelas, variety shows, and news programming. Production values are modest by regional standards, creativity constrained by limited budgets. Reality TV is popular—talent shows, dating programs, competition formats finding audiences. Streaming platforms increasingly produce Peruvian originals, though at smaller scale than larger markets. Sports broadcasting centers on football obsession, volleyball also commands attention. The Amazon region remains underrepresented in national television.

Music demonstrates Peru's cultural richness—Afro-Peruvian traditions, Andean folkloric music, cumbia amazónica, chicha, and contemporary urban sounds create diverse soundscape. Susana Baca represents Afro-Peruvian music internationally. Chicha—psychedelic cumbia fusion born in Lima's migration experience—is experiencing revival. Reggaeton and trap dominate youth markets, while traditional música criolla maintains older audiences. The festival circuit is active, though infrastructure limitations affect production quality.

Gaming culture grows among urban youth. Internet cafés remain popular gathering spaces, PC gaming and mobile gaming both significant. Esports infrastructure develops slowly, Peruvian teams competing regionally. Internet access improving but inconsistent, particularly outside Lima.

Social media entertainment is active—comedy creators, political satirists, lifestyle influencers building audiences. Peruvian YouTubers produce content across genres, TikTok Peru is vibrant. The creator economy offers possibilities in nation with substantial informal economy. Peruvian digital content often engages class tensions and regional diversity that mainstream media ignores. Meme culture is sophisticated, processing political dysfunction and social absurdity through humor. The diaspora connection is strong, content circulating among Peruvians globally.`
  },
  {
    name: 'Venezuela',
    summary: `Venezuelan entertainment exists in crisis, reflecting broader national collapse. The film industry that once produced internationally recognized work is decimated—filmmakers flee to Colombia, Spain, Mexico, seeking viable production conditions. Lorenzo Vigas's From Afar won Venice Golden Lion in 2015, but that feels like final gasp of functioning industry. Contemporary Venezuelan cinema is often made in exile, directors documenting migration crisis and authoritarian decay from abroad. Government cultural institutions are hollowed out, funding nonexistent, censorship pervasive. The infrastructure for filmmaking has essentially collapsed.

Television is state propaganda mixed with cheap entertainment. RCTV's closure in 2007 demonstrated regime's intolerance for independent media. Venevisión survives through accommodation, telenovelas continue production though budgets and quality plummet. Streaming services provide escape—Venezuelans with electricity and internet watch Netflix, though economic crisis makes subscriptions luxury. Sports broadcasting continues, baseball and football offering brief respite from daily dysfunction.

Music remains culturally vital despite everything. Salsa, merengue, gaita—Venezuelan musical traditions persist. Yet the contemporary scene is devastated by mass emigration. Musicians relocate to Miami, Bogotá, Madrid, Buenos Aires, maintaining Venezuelan identity while building careers elsewhere. Reggaeton and trap artists emerge, though often record internationally. The Venezuelan diaspora creates transnational musical networks, WhatsApp and YouTube enabling collaboration across borders.

Gaming exists in limited form—electricity rationing makes consoles impractical, internet access is unreliable, economic crisis puts gaming PCs out of reach for most. Mobile gaming on phones works when power and connectivity align. Esports infrastructure has collapsed, Venezuelan gamers migrate if they're serious about competitive play.

Social media becomes survival tool—Venezuelans document crisis, build networks, monetize content from abroad. YouTube channels run by diaspora Venezuelans offer news, commentary, connection. TikTok Venezuela is surprisingly active, humor and creativity persisting despite circumstances. The creator economy offers actual income in worthless bolivar economy—dollars from YouTube and Patreon represent genuine lifeline. Venezuelan entertainment is increasingly diaspora phenomenon, talent scattered globally while maintaining cultural identity through digital platforms.`
  },
  {
    name: 'Ecuador',
    summary: `Ecuadorian entertainment operates in productive obscurity, largely invisible internationally but culturally active domestically. The film industry produces perhaps 10-15 features annually, made on minimal budgets through government support (CNCine) and international co-productions. Sebastián Cordero is Ecuador's most internationally recognized director—Chronicas, Europa Report demonstrating genre versatility. Contemporary filmmakers explore indigenous identity, environmental destruction, and urban migration. Quito and Guayaquil host small but dedicated film communities. Distribution remains challenge—limited theater infrastructure, audience preference for Hollywood blockbusters.

Television consists of telenovelas, variety shows, news, and sports programming. Production quality is modest, budgets constrained by small market. Reality TV formats find audiences, talent shows launching careers. Ecuadorian television often feels provincial compared to Colombian or Mexican productions, yet serves local audiences adequately. Streaming platforms provide alternatives, though subscription costs limit access. Indigenous-language programming exists in limited form, coastal and highland regions have distinct cultural preferences.

Music reflects Ecuador's cultural diversity—Andean folkloric traditions, Afro-Ecuadorian rhythms from Esmeraldas, coastal music blending cumbia and salsa, contemporary urban sounds. Traditional música nacional maintains audiences, while reggaeton and trap dominate youth markets. The live music scene is active in major cities, festivals occur throughout year. Ecuadorian musicians rarely achieve international recognition, though digital platforms enable modest cross-border reach.

Gaming culture grows among urban middle class. Internet cafés provide access where home infrastructure is lacking. Mobile gaming is widespread, PC and console gaming among economically comfortable demographics. Esports infrastructure develops slowly, Ecuadorian teams occasionally competing regionally. Internet access improving but inconsistent.

Social media entertainment is active—comedians, political satirists, lifestyle influencers building local followings. Ecuadorian YouTubers produce content across genres, TikTok Ecuador demonstrates creativity despite small market. The creator economy offers entrepreneurial possibilities in nation with limited formal employment. Coastal and highland regional distinctions appear in content, indigenous creators assert cultural presence. Ecuadorian digital entertainment operates at small scale but reflects genuine cultural diversity and creativity.`
  }
]

async function main() {
  console.log('🎬 ENTERTAINMENT BATCH 01: Countries 1-10')
  console.log('='.repeat(80))

  const result = await saveEntertainmentSummaries(BATCH_01)

  console.log('\n✅ Batch 01 complete!')
  console.log(`Saved ${result.successCount} summaries to database`)
}

main()
