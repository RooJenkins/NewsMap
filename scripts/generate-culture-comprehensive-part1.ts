import 'dotenv/config'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const writeups = [
  {
    name: 'Azerbaijan',
    lat: 40.1431,
    lng: 47.5769,
    summary: `Azerbaijan is an oil-rich petro-state with grand cultural ambitions and deep contradictions. Baku is trying to become a cultural hub - flashy museums, international events, UNESCO sites - but underneath the glamour is authoritarian control and stifled creative freedom.

The Heydar Aliyev Center, designed by Zaha Hadid, is an architectural marvel -all flowing curves and futuristic white surfaces. Inside is a museum dedicated to the late president (cult of personality alert). The Azerbaijan Carpet Museum is genuinely fascinating - carpets are UNESCO Intangible Heritage here, and the collection spans centuries. The National Art Museum has Azerbaijani and Russian art, though it's heavily focused on regime-friendly work.

UNESCO sites: The Walled City of Baku (Icheri Sheher) is spectacular - medieval fortress walls, the Maiden Tower, Shirvanshah's Palace. Gobustan has 40,000-year-old rock art. These sites are well-funded and polished for tourists, sometimes over-restored.

Music: Mugham (traditional improvised vocal and instrumental music) is UNESCO-recognized. It's complex, modal, and beautiful. Contemporary artists like Alim Qasimov are international ambassadors. Eurovision 2012 was in Baku - a soft-power move that cost hundreds of millions.

Film: Azerbaijan had a golden age of cinema in the 1960s-70s, but contemporary film is tiny and state-controlled. Directors who tackle social issues or corruption face censorship. Documentaries about political prisoners can't be made locally.

Visual arts: There's a contemporary gallery scene in Baku, but it's cautious. Artists who criticize the Aliyev regime or address the Nagorno-Karabakh conflict from non-official perspectives risk consequences. Diaspora artists have more freedom.

Government funding is generous - for projects that glorify the nation or the Aliyev family. The Ministry of Culture supports heritage preservation and international festivals. But press freedom is nonexistent, and that chills creative expression.

Cultural exports are limited beyond mugham music and carpets. Azerbaijan wants to be seen as sophisticated and European, but the authoritarianism undermines genuine cultural vitality.`,
    issues: [
      'Authoritarian censorship of artists',
      'Oil-funded heritage preservation',
      'UNESCO carpet-making traditions',
      'Stifled contemporary film and art scenes',
      'Soft-power investments (Eurovision, museums)'
    ]
  },
  {
    name: 'Bahamas',
    lat: 25.0343,
    lng: -77.3963,
    summary: `The Bahamas' cultural identity is often overshadowed by tourism marketing - pristine beaches, casinos, cruise ships - but there's a real Junkanoo tradition, a visual arts scene, and a growing literary voice that deserves attention.

Junkanoo is the cultural heart - a street carnival held on Boxing Day and New Year's, with elaborate costumes, goatskin drums, cowbells, and brass bands. It's African-derived, evolved from enslaved people's celebrations, and it's UNESCO-recognized Intangible Heritage. The music - rake-and-scrape, goombay - is infectious. Contemporary musicians like Baha Men ("Who Let the Dogs Out") brought Bahamian sound to global pop.

The National Art Gallery of the Bahamas, opened in 2003 in a restored colonial building, showcases Bahamian artists like Amos Ferguson (folk art), Brent Malone, and Antonius Roberts. The collection is small but growing. The problem? Limited government funding and reliance on private donors.

Film industry is minimal - a few documentaries, some international productions shot here for the scenery. "Thunderball" and other Bond films used Bahamian locations, but local filmmaking is underdeveloped.

Literature: anthologies like "Bahamas: Family of Islands" collect stories and poems exploring identity, colonialism, and island life. Writers like Marion Bethel and Ian Strachan address race, gender, and nationalism, but they're better known in Caribbean literary circles than globally.

There are no UNESCO World Heritage sites yet, though the Lucayan National Park (underwater cave system) is on the tentative list. Historical preservation is inconsistent - colonial-era buildings in Nassau are maintained for tourism, but broader heritage work is underfunded.

Government cultural funding is modest. The Ministry of Tourism and Culture prioritizes tourism (obviously) over arts. Censorship isn't overt, but conservative Christian social norms discourage LGBTQ+ representation and critical exploration of colonialism.

Cultural exports: Junkanoo, calypso, and that persistent "island paradise" branding. The Bahamas' soft power is tied to tourism fantasy, which can flatten the real culture underneath.`,
    issues: [
      'Culture overshadowed by tourism industry',
      'Underfunded National Art Gallery',
      'Strong Junkanoo and musical traditions',
      'Minimal film production',
      'Conservative censorship of LGBTQ+ content'
    ]
  },
  {
    name: 'Bahrain',
    lat: 26.0667,
    lng: 50.5577,
    summary: `Bahrain styles itself as the Gulf's cultural hub - less conservative than Saudi Arabia, more accessible than the UAE's manufactured flash. There's truth to this, but it's still a monarchy with red lines around political criticism and religious dissent.

The Bahrain National Museum is excellent - archaeological artifacts from the Dilmun civilization (Bronze Age), pearl-diving heritage, and Islamic art. The building itself is striking, designed by Krohn and Hartvig Rasmussen. Nearby is the Beit al-Quran, one of the world's premier Quranic manuscript museums - beautifully curated.

UNESCO sites: The Bahrain Fort (Qal'at al-Bahrain) - a tell with layers of occupation from 2300 BC to the 18th century. It's well-preserved and atmospheric. The Pearling Path in Muharraq commemorates Bahrain's pearl-diving history - oyster beds, merchant houses, a beautiful example of heritage preservation.

Contemporary art: The Bahrain Authority for Culture and Antiquities supports a small but active art scene. The Bahrain Art Fair (now defunct, but revived periodically) showcased Gulf artists. Bahraini artists like Balqees Fakhro and Waheeda Malullah make work about gender, tradition, and modernity. The Al Riwaq Art Space and La Fontaine Centre host exhibitions.

Film: Bahrain has a tiny film industry. "Hurma!" by Mahmood Al-Yousif was the first Bahraini feature (2012). Documentaries about political unrest (the 2011 Pearl Roundabout protests) are made by activists abroad, not locally.

Music: The sawt tradition (sung poetry with oud accompaniment) is traditional. Contemporary music blends Gulf and Western pop. Bahrain hosts Formula 1, which brings international acts, but local music scenes are small.

Government funding is substantial - the BACA budget supports museums, heritage sites, and cultural festivals. But censorship is real: criticism of the monarchy, Shia activism, or LGBTQ+ themes are off-limits. Artists have been jailed.

Cultural exports are modest - regional art fair participation, heritage tourism. Bahrain's soft power is  more about positioning itself as "moderate" and "open" compared to neighbors, which is partly true, partly PR.`,
    issues: [
      'Censorship of political and LGBTQ+ content',
      'Strong heritage preservation (UNESCO sites)',
      'Growing contemporary art scene',
      'Jailing of dissident artists',
      'Positioning as "moderate" Gulf state'
    ]
  },
  {
    name: 'Bangladesh',
    lat: 23.685,
    lng: 90.3563,
    summary: `Bangladesh has a vibrant, resilient cultural scene shaped by the Bengali language movement, independence struggle, and the legacy of Rabindranath Tagore. It's also dealing with religious extremism, political violence against writers, and climate threats to heritage sites.

The Bangladesh National Museum in Dhaka is sprawling - archaeology, art, natural history, and Independence War exhibits. The Liberation War Museum documents the 1971 genocide and independence struggle - essential and gut-wrenching. The Bangla Academy promotes Bengali language and literature (Language Movement Day, February 21, is UNESCO-recognized).

Film: Bangladesh has a thriving film industry - Dhallywood produces hundreds of films yearly, mostly melodramas and action films. But there's also an art cinema tradition. Directors like Tareque Masud (RIP, died in 2011) and Tanvir Mokammel make socially conscious films. Rubaiyat Hossain's "Made in Bangladesh" tackles labor rights. The Dhaka International Film Festival is significant regionally.

Music: Baul music (mystical, Sufi-influenced folk songs) is UNESCO Intangible Heritage - wandering minstrels singing about love and the divine. Contemporary artists like Lalon Fakir's disciples keep it alive. Mainstream music blends Bengali folk, Bollywood, and Western pop.

Visual arts: The Faculty of Fine Arts at Dhaka University has trained generations of artists. Zainul Abedin (RIP) is the father of Bangladeshi modernism - his famine sketches from 1943 are devastating. Contemporary artists like Mahbubur Rahman and Shahabuddin Ahmed work with watercolor, abstraction, and social themes.

UNESCO sites: The Sundarbans mangrove forest, Bagerhat's historic mosque city, and Paharpur Buddhist monastery ruins. Climate change threatens the Sundarbans; preservation funding is limited.

Government support: The Ministry of Cultural Affairs funds museums and festivals, but budgets are tight. Censorship and violence are serious issues - bloggers and writers critical of Islam have been murdered by extremists. The government sometimes bans books or films to avoid controversy.

Cultural exports: Bengali literature, film, and textiles. The soft power is real but overshadowed by political instability and extremism threats.`,
    issues: [
      'Violence against secular writers and bloggers',
      'Climate threats to UNESCO Sundarbans',
      'Vibrant film industry (Dhallywood)',
      'Baul music and Bengali literary traditions',
      'Government censorship to appease conservatives'
    ]
  },
  {
    name: 'Barbados',
    lat: 13.1939,
    lng: -59.5432,
    summary: `Barbados, now a republic (as of 2021), has a cultural identity shaped by African heritage, British colonialism, and fierce independence. The culture is proudly Bajan - Crop Over festival, calypso and soca music, literary voices confronting empire.

Crop Over is the cultural highlight - a summer festival rooted in sugar harvest celebrations, with calypso competitions, costume parades, and kadooment day (think Caribbean Carnival). Rihanna, the island's most famous cultural export, is a Crop Over regular and global cultural ambassador.

The Barbados Museum, housed in a former military prison, covers indigenous Amerindian history, slavery, and colonial artifacts. It's well-curated but small. The George Washington House (yes, he visited as a teenager) is preserved for tourism. Bridgetown's historic garrison is a UNESCO World Heritage site - colonial military architecture, well-maintained.

Music: Calypso legends like the Mighty Gabby and Red Plastic Bag are national treasures. Contemporary soca and reggae artists like Rupee and Alison Hinds have regional followings. Rihanna is the global superstar, obviously - her foundation supports education and arts in Barbados.

Literature: Barbadian writers like George Lamming ("In the Castle of My Skin"), Kamau Brathwaite (poet, RIP), and Austin Clarke have shaped Caribbean literature. Contemporary voices include Karen Lord (speculative fiction). The island literary scene is small but intellectually serious.

Visual arts: The Artists' Collective Gallery and other spaces showcase Bajan artists. Work often addresses colonialism, identity, and landscape. Ras Akyem Ramsay and Ras Ishi Butcher work with themes of African heritage and resistance.

Government cultural funding is modest. The Ministry of Creative Economy, Culture and Sports supports festivals and heritage preservation, but budgets are limited. Censorship isn't a major issue - Barbados has a free press and relatively open society.

Cultural exports: Rihanna, calypso, rum culture, and cricket (yes, it's culture here). Barbados' soft power is tied to its post-colonial confidence and global musical influence.`,
    issues: [
      'Small cultural budgets',
      'Rihanna as dominant cultural export',
      'Strong literary and calypso traditions',
      'UNESCO garrison preservation',
      'Navigating post-colonial identity'
    ]
  },
  {
    name: 'Belarus',
    lat: 53.7098,
    lng: 27.9534,
    summary: `Belarus under Lukashenko is a cultural wasteland for independent artists - state control, censorship, and a2020-2021 crackdown on creatives who supported democracy protests. But underground, in exile, Belarusian culture survives and resists.

The National Art Museum in Minsk has Eastern European and Russian art - decent collection, but exhibitions avoid anything politically sensitive. The Marc Chagall Museum in Vitebsk celebrates the Jewish artist's early years, though the Soviet regime once suppressed his work. The Museum of the Great Patriotic War is massive - World War II victory mythology, essential to Lukashenko's nationalism.

UNESCO sites: Mir Castle and Nesvizh Palace (Renaissance/Baroque architecture), Białowieża Forest (primeval forest shared with Poland), and Struve Geodetic Arc points. These are maintained for tourism and national pride.

Film: Belarusian cinema is state-controlled. Sergei Loznitsa, the country's most internationally recognized director, works in exile and makes documentaries critiquing Soviet and post-Soviet authoritarianism ("Donbas," "State Funeral"). Local filmmakers who made work about the 2020 protests faced imprisonment.

Music: Traditional folk music is promoted as safe nationalism - the dudki and the cymbaly (hammered dulcimer). Contemporary rock and indie music exists but is heavily surveilled. The band N.R.M. was persecuted for political lyrics. Post-2020, many musicians fled to Poland, Ukraine, or Lithuania.

Visual arts: Belarus Free Theatre (actually a theater company, exiled in London) is the most famous cultural export - politically radical, internationally acclaimed, banned at home. Visual artists like Ales Pushkin and Maria Kozhenkova address state repression, often from abroad.

Government control is absolute. The Ministry of Culture funds only pro-regime work. Independent artists, writers, and musicians have been jailed, beaten, or forced into exile. Cultural venues that hosted opposition events were shut down.

Cultural exports: exile culture, protest art, and Chagall's legacy. Belarus's soft power is negative - the regime is a pariah, and genuine Belarusian culture is in diaspora.`,
    issues: [
      'Total state censorship and artist repression',
      'Major creative brain drain to exile',
      'Belarusian Free Theatre in London',
      'UNESCO heritage tourism',
      'Underground and emigrant resistance culture'
    ]
  },
  {
    name: 'Belgium',
    lat: 50.5039,
    lng: 4.4699,
    summary: `Belgium is absurdly cultured for its size - world-class museums, a film tradition that punches way above its weight, comic book heritage (Tintin, anyone?), and a contemporary art scene that's genuinely exciting. Plus, the beer culture is UNESCO-recognized, because of course it is.

The museums: The Royal Museums of Fine Arts in Brussels include the Magritte Museum (surrealism perfection), Old Masters (Bruegel, Rubens, van der Weyden), and the Fin-de-Siècle Museum. It's world-class. The MUZE Museum of Contemporary Art opened recently and showcases Belgian and international contemporary work. Ghent's Museum of Fine Arts (MSK) and SMAK (contemporary) are excellent.

Comics are serious business here - the Belgian Comic Strip Center celebrates Hergé (Tintin), Peyo (Smurfs), and decades of bande dessinée tradition. Comic strips are considered the "Ninth Art" in Belgium and France.

Film: The Dardenne brothers (Jean-Pierre and Luc) are Belgium's greatest cultural exports - "Rosetta," "The Kid with a Bike," "Two Days, One Night" - multiple Palme d'Or winners, humanist social realism at its finest. Other directors like Joachim Lafosse and Michael R. Roskam ("Bullhead") make gripping, intimate films. The Flanders Image fund supports Flemish-language productions.

Music: Jacques Brel (RIP) is a legend - chanson singer-songwriter whose work is still performed globally. Contemporary acts like Stromae (electro-pop singer) are huge in Europe. Belgium's electronic music scene (clubs like Fuse, festivals like Tomorrowland) is world-renowned.

UNESCO sites: Historic centers of Bruges and Brussels, belfries, béguinages, and the Flemish Béguinage complexes. These are impeccably maintained - Belgian heritage preservation is rigorous.

Government support: Strong. The Flemish and Walloon communities both fund culture (Belgium's regionalism means dual systems). The film industry gets subsidies, museums are well-funded. Censorship isn't an issue.

Cultural exports: Tintin, the Dardennes, Magritte, beer, waffles (yes, really). Belgium's soft power is understated but real - it's the quiet cultural heavyweight of Europe.`,
    issues: [
      'Linguistic/regional cultural splits (Flemish vs. Walloon)',
      'Dardenne brothers as film icons',
      'Comic book heritage (Ninth Art)',
      'UNESCO belfries and béguinage preservation',
      'Strong government arts funding'
    ]
  },
  {
    name: 'Belize',
    lat: 17.1899,
    lng: -88.4976,
    summary: `Belize's culture is a joyful, chaotic blend - Maya heritage, Garifuna (Afro-Indigenous) traditions, Creole identity, Mestizo influences, and Mennonite communities. It's small, under-resourced, but culturally rich in ways that constantly surprise.

The Museum of Belize in Belize City (housed in a former colonial prison - very on-brand) covers Maya artifacts, colonial history, and contemporary art. The collection is modest, but the Maya jade and ceramic pieces are stunning. The problem: chronic underfunding and limited international visibility.

Maya heritage: UNESCO World Heritage sites include the Belize Barrier Reef, but cultural sites like Caracol, Xunantunich, and Lamanai (Maya ruins) are nationally significant. These ancient cities are less restored than Mexico's or Guatemala's sites, which actually makes them more atmospheric.

Music: Punta and punta rock (Garifuna music/dance) are high-energy, drum-driven, and infectious. Andy Palacio (RIP) was a Garifuna music ambassador - his album "Wátina" is phenomenal. Brukdown (Creole music with banjo, accordion, drums) is another tradition. Contemporary artists blend Caribbean, Latin, and American influences.

Film industry: basically nonexistent. A few documentaries, some international productions shot here ("The Mosquito Coast"). Local filmmaking is limited by funding and infrastructure.

Visual arts: Belizean artists like Pen Cayetano (painter and punta rock pioneer) and Carolyn Carr explore Garifuna culture and Caribbean landscapes. The Savannah Art Gallery and Image Factory showcase local work, but the market is tiny.

Garifuna culture is UNESCO Intangible Heritage - language, music, dance, and culinary traditions brought by the Garifuna people (Afro-Indigenous from St. Vincent, deported to Central America in 1797). Settlement Day (November 19) celebrates this heritage with music, dance, and food.

Government funding is minimal. The National Institute of Culture and History operates on a shoestring. Censorship isn't a major issue - Belize is pretty open.

Cultural exports: punta music, Maya tourism, Caribbean vibes. Belize's soft power is friendly and laid-back, but underdeveloped economically.`,
    issues: [
      'Severe underfunding of cultural institutions',
      'Garifuna UNESCO heritage preservation',
      'Maya archaeological sites under-resourced',
      'No significant film industry',
      'Small but vibrant music and visual arts scenes'
    ]
  },
  {
    name: 'Benin',
    lat: 9.3077,
    lng: 2.3158,
    summary: `Benin is one of the most culturally significant countries in West Africa - birthplace of Vodun (voodoo), home of the Dahomey Kingdom, and site of a massive cultural heritage restitution effort. It's also wrestling with underfunding and infrastructure challenges.

The big news: France returned 26 royal treasures looted from the Kingdom of Dahomey in 1892 - statues, thrones, and sacred objects. These are now in the Palais de la Marina in Cotonou (temporary space) while the Museum of Amazons and Kings in Abomey is being built. This restitution is historic and has energized discussions about colonial plunder globally.

The Royal Palaces of Abomey are a UNESCO World Heritage site - 12 palaces from the Dahomey Kingdom (17th-19th centuries). The bas-reliefs and historical artifacts are incredible, though preservation is underfunded and the site needs restoration work.

Vodun culture: Benin is the spiritual homeland of Vodun (what became voodoo in Haiti and New Orleans). The annual Vodun Festival in Ouidah draws pilgrims and tourists. The Vodun Temple and the Door of No Return (slave trade memorial) in Ouidah are historically and spiritually significant.

Music: Angelique Kidjo is Benin's global superstar - Grammy-winning singer blending Afrobeat, funk, and jazz. She's a UNESCO Goodwill Ambassador and outspoken activist. Traditional music includes zinli dance songs and the bata drums.

Film: Benin has a small but important film tradition. The Quintessence festival in Ouidah showcases African cinema. Directors like Jean Odoutan make work about identity and social issues, but funding is limited.

Visual arts: The contemporary art scene is small. The Fondation Zinsou promotes Benin art and culture, with exhibitions in Cotonou. Artists like Romuald Hazoumé (uses jerrycans and found objects to critique corruption and oil politics) have international recognition.

Government support: modest. President Patrice Talon has invested in tourism and cultural heritage, but budgets remain tight. Censorship is not a major issue.

Cultural exports: Vodun heritage, Kidjo's music, restituted royal art. Benin's soft power is tied to its role as a cultural heartland of the African diaspora.`,
    issues: [
      'Repatriation of looted Dahomey treasures',
      'Underfunded UNESCO palace preservation',
      'Vodun cultural tourism',
      'Angelique Kidjo as global ambassador',
      'Small contemporary art and film scenes'
    ]
  },
  {
    name: 'Bhutan',
    lat: 27.5142,
    lng: 90.4336,
    summary: `Bhutan is fiercely protective of its Buddhist culture - it's official policy (Gross National Happiness includes cultural preservation). The government controls tourism, limits modernization, and mandates traditional dress in public spaces. It's culturally authentic, but also controlled.

Museums: The National Museum in Paro (housed in a 17th-century watchtower) showcases Bhutanese art, thangka paintings, textiles, and bronze statues. The Folk Heritage Museum in Thimphu recreates traditional Bhutanese rural life - looms, tools, and fermentation pots. These are modest but charming.

Architecture: Bhutan's dzongs (fortress-monasteries) are architectural masterpieces - Punakha Dzong, Paro Dzong, Trongsa Dzong - massive whitewashed structures with ornate woodwork and courtyards. Taktsang Monastery (Tiger's Nest), clinging to a cliffside, is iconic. These are sacred, active religious sites, not just heritage tourism.

Performing arts: Cham dances (masked Buddhist ritual dances) are performed at festivals (tsechus) - monks in elaborate costumes enacting spiritual stories. These are UNESCO Intangible Heritage candidates. Traditional music uses the dramnyen (lute) and lingm (flute).

No UNESCO World Heritage sites yet - the entire country is basically a living heritage site. The government limits tourist numbers (high-value, low-impact model) to preserve culture and environment.

Film: Bhutan's film industry is tiny but exists. "Travelers & Magicians" (2003) by Khyentse Norbu (a Buddhist lama and filmmaker) is a beautiful meditation on modernity vs. tradition. Bhutan participates in regional film festivals, but production is limited.

Visual arts: Thangka painting (Buddhist scroll paintings) and traditional textile weaving are supported crafts. Contemporary art exists but is small - the Voluntary Artists Studio Thimphu (VAST) promotes modern Bhutanese art.

Government control: Total, but benevolent (mostly). The government funds cultural preservation, enforces traditional dress codes (gho for men, kira for women), and limits Western media. Tobacco is banned. Censorship exists, but it's framed as cultural protection.

Cultural exports: Minimal by design. Bhutan's soft power is its mystique - happiness index, environmental conservation, untouched culture. It's intentionally insular.`,
    issues: [
      'Government control over cultural expression',
      'Limited tourism to preserve culture',
      'Dzong architecture and Buddhist heritage',
      'Mandated traditional dress in public',
      'Small contemporary art and film scenes'
    ]
  }
]

async function saveAll() {
  console.log(`🎨 Saving ${writeups.length} Culture & Arts writeups\n`)
  for (const w of writeups) {
    try {
      await prisma.locationSummary.upsert({
        where: { name_type_category: { name: w.name, type: 'country', category: 'culture' } },
        update: {
          summary: w.summary,
          issues: JSON.stringify(w.issues),
          topStories: JSON.stringify([{
            title: `${w.name} Cultural Heritage and Contemporary Arts`,
            source: 'Cultural Analysis',
            link: `https://en.wikipedia.org/wiki/Culture_of_${w.name.replace(/ /g, '_')}`,
            pubDate: new Date().toISOString(),
          }]),
          storyCount: 1,
          updatedAt: new Date(),
        },
        create: {
          name: w.name, type: 'country', country: w.name, lat: w.lat, lng: w.lng, category: 'culture',
          summary: w.summary,
          issues: JSON.stringify(w.issues),
          topStories: JSON.stringify([{
            title: `${w.name} Cultural Heritage and Contemporary Arts`,
            source: 'Cultural Analysis',
            link: `https://en.wikipedia.org/wiki/Culture_of_${w.name.replace(/ /g, '_')}`,
            pubDate: new Date().toISOString(),
          }]),
          storyCount: 1,
        },
      })
      console.log(`✅ ${w.name}`)
    } catch (error) {
      console.error(`❌ ${w.name}:`, error)
    }
  }
  console.log(`\n✅ Completed ${writeups.length} countries!`)
}

saveAll().catch(console.error).finally(() => prisma.$disconnect())
