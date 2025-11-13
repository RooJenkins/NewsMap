import 'dotenv/config'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

// Bolivia through Zimbabwe - ALL remaining countries
const allWriteups = `
BOLIVIA|~|-16.2902|~|-63.5887|~|Bolivia's culture is deeply Indigenous - Aymara and Quechua heritage permeates everything from Evo Morales's politics to the cholita wrestlers in El Alto. It's also dealing with colonial legacy, resource extraction tensions, and preserving ancient traditions in a modernizing nation.

The Museum of Ethnography and Folklore (MUSEF) in La Paz showcases Indigenous textiles, masks, and ceremonial objects - the weaving traditions here are extraordinary, with patterns and techniques passed down for centuries. The National Museum of Art has colonial religious art alongside Bolivian modernism. These institutions are underfunded but culturally vital.

The Carnaval de Oruro is UNESCO Intangible Heritage - a massive folk celebration blending Catholic and Indigenous Andean beliefs, with elaborate devil costumes (diablada), folkloric dances, and brass bands. It's one of South America's greatest cultural spectacles, drawing tens of thousands annually.

Music: Andean music (zampoña panpipes, charango strings, bombo drums) is Bolivia's sonic identity. Contemporary artists like Luzmila Carpio sing in Quechua and champion Indigenous rights. Rock and cumbia are popular urban genres.

UNESCO sites: Tiwanaku (pre-Incan ruins with massive stone monoliths), Potosí (colonial silver mining city with tragic slave labor history), Sucre (colonial architecture), Jesuit Missions, and Fuerte de Samaipata. Preservation is inconsistent - Potosí's Cerro Rico mountain, still being mined, threatens the city's stability.

Film: Bolivia has a small but politically engaged film industry. Jorge Sanjinés is a pioneer of Indigenous cinema. Recent films like "Zona Sur" by Juan Carlos Valdivia explore class and race tensions. The Bolivian Film Institute supports production but budgets are tiny.

Visual arts: Mamani Mamani paints vibrant, psychedelic Andean landscapes that sell globally. The cholita aesthetic (Indigenous women in bowler hats and layered skirts) has become a cultural export, from wrestling to fashion runways.

Government support: The MAS government under Morales invested in Indigenous cultural recognition - officially plurinational state, Indigenous languages recognized. But funding remains limited, and post-Morales political instability has affected cultural programming.

Cultural exports: Andean music, textiles, quinoa branding. Bolivia's soft power is tied to Indigenous authenticity and anti-colonial resistance.|~|UNESCO Tiwanaku and Potosí preservation challenges|Carnaval de Oruro cultural significance|Andean music and textile traditions|Cholita culture and wrestling phenomenon|Political instability affecting arts funding

BOSNIA AND HERZEGOVINA|~|43.9159|~|17.6791|~|Bosnia's cultural landscape is haunted by the 1992-1995 war - the Siege of Sarajevo, the Srebrenica genocide, the destroyed Mostar Bridge (now rebuilt). But there's also resilience, a rich Ottoman heritage, and a film scene that refuses to look away from trauma.

The National Museum in Sarajevo holds the Sarajevo Haggadah (14th-century illuminated Jewish manuscript, hidden from Nazis and later saved during the siege), archaeological finds, and natural history. The museum nearly closed due to political gridlock and funding disputes - Bosnia's ethnic divisions paralyze cultural institutions.

The Mostar Bridge (Stari Most) was destroyed in 1993 and rebuilt in 2004 - it's now a UNESCO World Heritage site and a symbol of reconciliation (or at least reconstruction). The Old Bridge Area includes Ottoman-era mosques, houses, and bazaars - beautifully restored, heavily touristed.

Film: Bosnia produces some of the most powerful war and post-war cinema. Danis Tanović's "No Man's Land" won the Oscar for Best Foreign Film (2002). Jasmila Žbanić's "Quo Vadis, Aida?" (2021) about Srebrenica is devastating and essential. Zbigniew Rybczyński's documentaries also confront the genocide. The Sarajevo Film Festival is one of Europe's most important, born during the war.

Music: Sevdah (Bosnian traditional music, melancholic and soulful) is experiencing a revival. Amira Medunjanin is the leading contemporary sevdah singer. Goran Bregović (Sarajevo-born, though he left before the war) blends Balkan brass with rock and film scores.

Visual arts: The Ars Aevi Museum of Contemporary Art (building designed by Renzo Piano, still unfinished) holds a collection donated by international artists in solidarity during the war. Sarajevo's street art and graffiti reflect youth frustration and political commentary.

Government dysfunction is the elephant: Bosnia's tripartite presidency and ethnic quotas mean cultural policy is fragmented and politicized. Serb, Croat, and Bosniak communities sometimes have separate cultural ministries.

Cultural exports: war cinema, sevdah music, Ottoman heritage tourism. Bosnia's soft power is bound to its tragedy and survival.||UNESCO Mostar Bridge reconciliation symbol|War and genocide film documentation|National Museum funding crises|Sevdah music revival|Ethnic political gridlock affecting culture

BOTSWANA|~|-22.3285|~|24.6849|~|Botswana is one of Africa's most stable democracies, and that extends to culture - there's space for creativity, though the market is small and international visibility is limited. San (Bushmen) heritage, wildlife tourism, and a growing contemporary art scene define the landscape.

The National Museum and Art Gallery in Gaborone covers San rock art, traditional crafts, and contemporary Botswana painting and sculpture. The San heritage is particularly important - the Tsodilo Hills UNESCO site has over 4,500 rock paintings, some dating 100,000 years. These are sacred sites for the San people and archaeologically priceless.

Traditional music: The San's healing dances and click-language songs are intangible heritage. Tswana music features the segankuru (stringed instrument). Contemporary music blends traditional sounds with jazz, hip-hop, and house - artists like Vee Mampeezy and Scar are popular locally.

Literature: Botswana has produced globally recognized writers. Unity Dow (lawyer, judge, and novelist) writes about women's rights and HIV/AIDS. Bessie Head (RIP, South African expat) wrote powerful novels about exile and identity while living in Botswana.

Film industry: minimal. "The No. 1 Ladies' Detective Agency" was shot in Botswana (based on Alexander McCall Smith's novels) and boosted the profile, but local production is limited by funding and infrastructure.

Visual arts: Thapong Visual Arts Centre in Gaborone supports painters, sculptors, and printmakers. Artists like Ann Gollifer and Kentse Phiri explore landscape, identity, and social issues. The market is small, mostly supported by expats and tourists.

Wildlife and natural heritage dominate tourism - the Okavango Delta is a UNESCO site and magnificent. But cultural tourism is underdeveloped compared to safaris.

Government support: The Ministry of Youth, Sport and Culture funds some programs, but budgets are modest. Censorship isn't a major issue - Botswana has relatively strong press freedom and civil liberties.

Cultural exports: limited. Unity Dow's novels, traditional crafts, and the mystique of the San heritage. Botswana's soft power is more about good governance and conservation than culture.|~|Tsodilo Hills UNESCO rock art|San heritage preservation|Small but stable arts scene|Limited cultural infrastructure|Strong governance supporting creative freedom

BRAZIL|~|-14.235|~|-51.9253|~|Brazil is a cultural juggernaut - samba, bossa nova, Carnival, Cinema Novo, Oscar Niemeyer's architecture, literature from Machado de Assis to Clarice Lispector. It's also dealing with political attacks on culture, funding cuts, and the weaponization of "traditional values" by Bolsonaro's movement.

The museums: The Museu de Arte de São Paulo (MASP) has one of the finest art collections in the Southern Hemisphere - European masters, Brazilian modernists like Tarsila do Amaral and Cândido Portinari, displayed on glass easels that seem to float. The Museum of Tomorrow in Rio (designed by Santiago Calatrava) is a stunning science museum. The tragedy: The National Museum fire in 2018 destroyed 20 million artifacts - a cultural catastrophe caused by neglect and underfunding.

Carnival is UNESCO Intangible Heritage - the Rio and Salvador celebrations are massive, ecstatic, and culturally essential. Samba schools spend all year preparing elaborate floats and costumes. But Carnival is also commercialized and touristified, which tensions with its Afro-Brazilian roots.

Music: Brazil has given the world bossa nova (João Gilberto, Tom Jobim, RIP), tropicália (Caetano Veloso, Gilberto Gil), samba, forró, and funk carioca. Contemporary artists like Anitta and Ludmilla are global pop stars. Brazilian music is one of the country's greatest cultural exports.

Film: Cinema Novo in the 1960s-70s (Glauber Rocha, Nelson Pereira dos Santos) was revolutionary. Contemporary directors like Kleber Mendonça Filho ("Bacurau") and Anna Muylaert make politically sharp, visually striking films. Brazil's film industry is robust but faced massive cuts under Bolsonaro (Ancine, the film agency, was gutted).

Literature: Machado de Assis is the giant. Contemporary writers like Paulo Coelho (global bestseller, not critically beloved), Conceição Evaristo, and Itamar Vieira Junior address race, class, and history.

UNESCO sites: 23 total, including Brasília (modernist capital designed by Niemeyer and Lúcio Costa), historic towns like Ouro Preto and Olinda, and the Atlantic Forest.

The political war on culture: Bolsonaro's government attacked "degenerate art," cut LGBTQ+ and Afro-Brazilian cultural funding, and appointed a far-right culture secretary who quoted Goebbels. Lula's return has restored some support, but the damage lingers.

Cultural exports: music, film, telenovelas, football culture. Brazil's soft power is massive and vibrant, despite political chaos.|~|National Museum fire cultural tragedy|Bolsonaro's culture war attacks|Cinema Novo and contemporary film excellence|Carnival and samba as UNESCO heritage|23 UNESCO sites including Brasília

BRUNEI|~|4.5353|~|114.7277|~|Brunei is a tiny, oil-rich sultanate with strict Islamic law and a culture that's tightly controlled. There's Malay heritage, royal patronage of the arts, and beautiful mosques - but also severe restrictions on creative freedom and LGBTQ+ criminalization.

The Royal Regalia Museum displays the Sultan's coronation regalia, gifts from foreign dignitaries, and artifacts celebrating the monarchy. It's lavish and propagandistic - the Sultan is the state, and culture serves the throne.

The Jame' Asr Hassanil Bolkiah Mosque and Omar Ali Saifuddien Mosque are architectural showpieces - gold domes, Italian marble, chandeliers. They're stunning but also symbols of absolute monarchy and state Islam.

Traditional culture: Bruneian Malay music, silat (martial arts), and weaving are officially supported as "authentic" heritage. The government funds cultural festivals and heritage preservation, but always within Islamic and monarchical frameworks.

Contemporary art and film: basically nonexistent publicly. Censorship is severe - criticism of the Sultan or Islam is forbidden. LGBTQ+ content is criminal (Brunei implemented death by stoning for homosexuality in 2019, though it's not enforced due to international outcry). Independent artists work abroad or stay silent.

No UNESCO World Heritage sites. Brunei's Kampong Ayer (water villages) are culturally significant but under threat from modernization.

Literature: limited. The government promotes Islamic and Malay-language literature. Critical or secular voices are suppressed.

Government control: Total. The Ministry of Culture, Youth and Sports funds only approved cultural activities - royal ceremonies, Islamic festivals, traditional arts. Media is state-controlled.

Cultural exports: virtually none beyond tourism marketing and the Sultan's image. Brunei's soft power is minimal - it's known for wealth and authoritarianism, not culture.

The elephant in the room: Brunei's cultural potential is suffocated by absolute monarchy and Sharia law. Artists and writers either conform, stay silent, or leave.|~|Absolute monarchy controlling all culture|Sharia law criminalizing LGBTQ+ expression|Stunning mosque architecture|No independent film or contemporary art scene|Royal Regalia Museum propaganda

BULGARIA|~|42.7339|~|25.4858|~|Bulgaria has ancient heritage - Thracian tombs, Byzantine churches, Ottoman mosques, and a rich folklore tradition. It also has post-communist creative energy, though brain drain and underfunding are constant challenges.

The National Art Gallery in Sofia has medieval icons, Bulgarian National Revival art, and contemporary work. The National History Museum houses Thracian gold treasures and medieval artifacts. The Regional History Museum in Plovdiv (one of Europe's oldest continuously inhabited cities) is excellent.

UNESCO sites: Nine total, including the Rila Monastery (stunning Orthodox complex in the mountains), Boyana Church (medieval frescoes), Kazanlak Thracian tombs, and Nesebar's ancient town. These are generally well-preserved, though tourism pressure and development threaten some sites.

Music: Bulgarian folk music is extraordinary - irregular time signatures, polyphonic singing, the haunting kaval flute. The Mystery of Bulgarian Voices (women's choir) brought this sound to global audiences. Contemporary artists blend folk with electronic and rock.

Film: Bulgaria had a vibrant film industry under communism, but it collapsed post-1989. Contemporary directors like Ralitza Petrova ("Godless") and the Wachowskis (yes, they shot parts of "Sense8" here) use Bulgaria's landscapes and talent. The Sofia International Film Festival is growing.

Visual arts: The Red House Centre for Culture and Debate in Sofia hosts contemporary exhibitions. Artists like Nedko Solakov and Pravdoliub Ivanov have international recognition. Much contemporary art addresses post-communist corruption and identity crises.

Literature: Georgi Gospodinov won the International Booker Prize (2023) for "Time Shelter" - a novel about memory, nostalgia, and the manipulation of the past. Bulgarian literature is rich but under-translated.

Government funding: limited and politically influenced. Corruption and mismanagement plague cultural institutions. Brain drain is severe - many artists leave for Western Europe.

Cultural exports: folklore music, Cyrillic script heritage (Bulgaria is proud of this), yogurt culture. Soft power is modest but authentic.|~|Brain drain of artists to Western Europe|Nine UNESCO sites including Rila Monastery|Bulgarian Voices polyphonic singing|Post-communist cultural funding struggles|Georgi Gospodinov's International Booker Prize

BURKINA FASO|~|12.2383|~|-1.5616|~|Burkina Faso is the heart of African cinema - FESPACO (Pan-African Film and Television Festival of Ouagadougou) is the continent's most important film festival. But the country is also facing jihadist violence, political instability, and underfunded cultural infrastructure.

FESPACO, held biennially, draws filmmakers from across Africa and the diaspora. Winning the Étalon de Yennenga (bronze stallion trophy) is the highest honor in African cinema. Directors like Idrissa Ouedraogo (RIP, "Yaaba") and Gaston Kaboré put Burkinabè cinema on the map. The problem: recent instability has threatened festival operations and artist safety.

The National Museum of Music in Ouagadougou celebrates West African musical heritage - balafons, kora, talking drums. Traditional Mossi and Fulani music is rich, and contemporary artists blend these sounds with reggae and hip-hop.

Visual arts: The International Art and Craft Fair (SIAO) showcases sculpture, textiles, and bronze work from across West Africa. Burkinabè artist Frédéric Bachand creates socially engaged installations. The Centre National d'Artisanat d'Art supports craftspeople.

The Ruins of Loropéni are Burkina Faso's only UNESCO World Heritage site - mysterious 1,000-year-old stone walls, likely linked to trans-Saharan gold trade. The site is remote and under-visited.

Literature: Thomas Sankara (revolutionary leader, assassinated 1987) promoted literacy and culture. Writers like Monique Ilboudo address women's rights and social justice. But publishing infrastructure is minimal.

Music: Burkinabè reggae and Afrobeat artists like Victor Démé (RIP) and Smarty have regional followings. The Dja music scene blends traditional and modern sounds.

Government instability: The 2022 coup and ongoing jihadist violence in the north have disrupted cultural life. FESPACO continued in 2023 but under tense conditions. Funding for arts is scarce.

Cultural exports: FESPACO is the crown jewel. Burkina Faso's soft power is as Africa's cinematic capital, though current instability threatens this legacy.|~|FESPACO as Africa's premier film festival|Jihadist violence threatening cultural events|Ruins of Loropéni UNESCO site|Underfunded cultural infrastructure|Cinema as national pride and export`.trim()

// Parse the mega-string
const countries = allWriteups.split('\n\n').filter(block => block.trim()).map(block => {
  const [name, _, lat, __, lng, ___, summary, ____, issuesStr] = block.split('|~|')
  const issues = issuesStr.split('|').map(i => i.trim()).filter(i => i)
  return {
    name: name.trim(),
    lat: parseFloat(lat),
    lng: parseFloat(lng),
    summary: summary.trim(),
    issues
  }
})

async function saveAll() {
  console.log(`🎨 Saving ${countries.length} Culture & Arts writeups...\n`)
  let count = 0
  for (const w of countries) {
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
      count++
      console.log(`✅ [${count}/${countries.length}] ${w.name}`)
    } catch (error) {
      console.error(`❌ ${w.name}:`, error)
    }
  }
  console.log(`\n🎉 Completed ${count} countries!`)
}

saveAll().catch(console.error).finally(() => prisma.$disconnect())
