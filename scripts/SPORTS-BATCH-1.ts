import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

interface CountryData {
  name: string
  lat: number
  lng: number
  summary: string
  issues: string[]
}

// SPORTS BATCH 1: First 10 countries
const countries: CountryData[] = [
  {
    name: 'United States',
    lat: 37.0902,
    lng: -95.7129,
    summary: "American sports culture remains the world's most commercially dominant ecosystem, where the NFL prints money like it's going out of style, the NBA has become a global cultural force, and college sports operate as billion-dollar enterprises masquerading as amateur athletics. The 2024-25 season sees the NFL continuing its stranglehold on American attention spans - Sunday football isn't just a sport, it's basically a national religion with beer commercials. Patrick Mahomes and the Kansas City Chiefs are building a dynasty that has people genuinely debating whether they can challenge the Patriots' early 2000s dominance. The quarterback is married to a pop star's best friend, making him somehow even more famous.\n\nThe NBA is navigating its post-LeBron future while the next generation - led by the Greek Freak, Jokić, and Luka - are redefining what greatness looks like. Victor Wembanyama's rookie season has scouts running out of superlatives. Meanwhile, women's basketball is experiencing a genuine breakthrough moment - Caitlin Clark's college dominance translated to massive WNBA audiences, and suddenly networks are realizing women's hoops can actually drive ratings. The gender pay gap remains absurd, but momentum is building.\n\nBaseball confronts existential questions about pace of play and youth engagement while Shohei Ohtani just signed a $700 million contract that breaks every financial model ever conceived. The sport's biggest star is on a team-friendly deal that defers most of the money for a decade - truly the most baseball thing ever. The pitch clock has actually worked, games are shorter, and young stars like Julio Rodríguez and Gunnar Henderson are making the game fun again.\n\nCollege sports are in absolute chaos as NIL deals and the transfer portal have turned amateur athletics into free agency with fewer rules. Alabama football still wins, but now they're basically paying players legally. March Madness remains appointment television, proof that the tournament format is sports television perfection. The College Football Playoff expansion to 12 teams means more meaningful games and more arguments about who got snubbed.\n\nSoccer continues its American growth story - MLS is actually good now, which feels weird to say. Lionel Messi joining Inter Miami was like if Michael Jordan came back to play for the Charlotte Hornets, except somehow even more improbable. Attendance is up, talent is improving, and American players are succeeding in Europe's top leagues. The USWNT faces a transition period after World Cup disappointment, but the talent pipeline remains strong.\n\nThe Olympics loom large with LA 2028 approaching - Americans are already planning how to dominate the medal count on home soil. Simone Biles proved in 2024 that she's still the greatest gymnast ever, Katie Ledecky continues rewriting swimming record books, and American track and field is experiencing a renaissance led by Noah Lyles and Sha'Carri Richardson.",
    issues: [
      'NFL player safety and CTE concerns despite sport\'s dominance',
      'Baseball struggling to attract young viewers despite rule changes',
      'College sports NIL chaos creating competitive imbalance',
      'WNBA pay equity issues despite surging popularity',
      'Regional sports network collapse affecting local team broadcasts'
    ]
  },
  {
    name: 'Canada',
    lat: 56.1304,
    lng: -106.3468,
    summary: "Canadian sports identity remains inextricably linked to hockey, where the sport isn't just entertainment but practically a constitutional requirement. The 2024-25 NHL season sees Canadian teams carrying the weight of a nation that hasn't seen a Stanley Cup winner since 1993 - a drought so painful it's become its own cultural phenomenon. The Toronto Maple Leafs continue their tradition of spectacular regular seasons followed by playoff heartbreak, while the Edmonton Oilers and Connor McDavid are genuinely must-watch television. McDavid might be the most talented player since Gretzky, which in Canada is basically saying he might be the second coming.\n\nThe Toronto Raptors' championship feels like a lifetime ago, and the team's current rebuild has fans experiencing withdrawal from relevance. The Blue Jays keep promising contention while somehow never quite getting there, though Vladimir Guerrero Jr. and Bo Bichette provide hope. Canadian soccer is experiencing a golden generation - Alphonso Davies is a superstar at Bayern Munich, Jonathan David scores goals in France, and the men's national team actually made the 2022 World Cup after 36 years of failure. The 2026 World Cup being co-hosted in Canada, USA, and Mexico means the national team has genuine momentum for the first time in decades.\n\nLacrosse maintains its status as Canada's official summer sport, though most Canadians couldn't name three pro lacrosse players if their poutine depended on it. The sport's Indigenous roots run deep, and efforts to center Indigenous voices in lacrosse governance are finally gaining traction. Women's hockey dominates internationally - Canada and USA trade gold medals while the rest of the world watches from a distance. The rivalry produces some of the best hockey on earth, though the professional infrastructure remains embarrassingly underdeveloped.\n\nCurling is surprisingly popular during the Olympics, when Canadians suddenly become experts on ice conditions and sweeping technique. Canadian athletes continue punching above their weight in summer Olympics - Andre De Grasse in track, Penny Oleksiak in swimming, and wrestlers and fighters who seem to overperform relative to population size. The infrastructure for athlete development through Own the Podium has created a pipeline that keeps Canada competitive despite being dwarfed by larger nations.\n\nGrey Cup remains distinctly Canadian despite the CFL being basically minor league football with weird rules. Three downs! Bigger field! The league survives on nostalgia and regional pride, which is honestly charming in an era of hyper-commercialized sports.",
    issues: [
      'Stanley Cup drought for Canadian teams approaching three decades',
      'NHL player safety concerns and fighting culture debates',
      'Women\'s hockey professional infrastructure severely underdeveloped',
      'CFL financial struggles and existential viability questions',
      'Toronto sports teams playoff underperformance becoming cultural trauma'
    ]
  },
  {
    name: 'Mexico',
    lat: 23.6345,
    lng: -102.5528,
    summary: "Mexican sports culture revolves around fútbol with an intensity that makes European fans look casual. Liga MX remains the crown jewel - América vs. Guadalajara Clásicos stop the country, while teams like Tigres, Monterrey, and Cruz Azul have massive followings. The league's quality has improved substantially with Mexican teams regularly competing in CONCACAF Champions League, though the gap to Europe's top leagues remains vast. The national team, El Tri, exists in a perpetual state of promising potential that somehow never quite delivers at World Cups. The 'quinto partido' (fifth game) barrier feels like a curse - Mexico always makes the knockout rounds, always loses in the Round of 16, always leaves fans wondering what if.\n\nThe 2026 World Cup being co-hosted offers a golden opportunity for redemption on home soil. The current generation led by players in Europe - Raúl Jiménez, Hirving Lozano, Edson Álvarez - represents Mexico's most talented pool in years, though youth development concerns persist. The under-20 and under-17 squads have struggled recently, raising questions about the pipeline. Liga MX's decision to eliminate promotion/relegation drew fierce criticism from purists who argued it removes competitive urgency from smaller clubs.\n\nBoxing maintains its status as Mexico's second sport - the tradition from Julio César Chávez through Canelo Álvarez remains unbroken. Canelo's dominance across multiple weight classes and his absolute stranglehold on Mexican fight cards makes him the country's most bankable athlete. The pageantry around Mexican boxing - the walkouts, the atmosphere, the sold-out stadiums - creates an experience unmatched globally. Lucha Libre occupies a cultural space somewhere between sport and performance art, with luchadores achieving folk hero status.\n\nBaseball thrives in the north and Pacific coast - the Mexican Pacific League produces talent that filters to MLB and maintains passionate regional followings. Players like Fernando Tatis Jr. in MLB represent Mexican heritage, though he plays for the Dominican Republic. The Caribbean Series brings Mexican teams against Cuba, Puerto Rico, and others in winter ball's marquee event. American football is growing - the NFL's regular-season games in Mexico City sell out instantly, and college football has established presence.\n\nThe Olympics see Mexico competitive in specific sports - diving, archery, taekwondo, boxing - where world-class athletes emerge from focused programs. The success is often individual brilliance rather than systematic development, reflecting resource constraints that limit broad-based excellence.",
    issues: [
      'National team perpetual Round of 16 World Cup failures',
      'Liga MX promotion/relegation elimination controversy',
      'Youth development infrastructure gaps versus European academies',
      'Drug violence occasionally impacting sporting events and teams',
      'Olympic medal counts modest despite population size'
    ]
  },
  {
    name: 'Brazil',
    lat: -14.2350,
    lng: -51.9253,
    summary: "Brazilian football isn't just a sport - it's the national identity compressed into 90 minutes of samba-style artistry that the rest of the world tries desperately to replicate. The Seleção remains the sport's ultimate brand despite recent World Cup disappointments. The 2022 quarter-final exit to Croatia on penalties felt like sacrilege for a nation that expects nothing less than jogo bonito delivered with Cups. The current squad features Vinícius Jr. emerging as a potential Ballon d'Or winner, Rodrygo terrorizing defenses, and a generation trying to escape Neymar's massive shadow while he winds down his career in Saudi Arabia.\n\nThe Brasileirão domestic league is tactically sophisticated chaos - teams attack with abandon, defend questionably, and produce more drama than a telenovela. Flamengo, Palmeiras, and São Paulo dominate financially while smaller clubs cycle through Brazilian and South American talent before selling to Europe. The gap between rich and poor clubs is absurd, and corruption remains an open secret. But the football? Spectacular. The Copa Libertadores remains South America's pinnacle - Brazilian clubs winning it is expected, and the competition's intensity makes Champions League look pedestrian.\n\nFormula 1 mourns Ayrton Senna decades later while celebrating current drivers who'll never quite match his mythology. The Brazilian Grand Prix at Interlagos produces reliably chaotic racing on a circuit that rewards bravery. Volleyball dominates Olympics conversation - Brazil's men's and women's teams are perennial contenders who approach the sport with the same flair they bring to football. Beach volleyball was basically invented by Brazilians, or at least that's what Copacabana would have you believe.\n\nMMA has become genuinely popular as Brazilian fighters from humble backgrounds achieve UFC stardom. The lineage from Brazilian jiu-jitsu through the Gracie family to modern MMA dominance is direct, and gyms across Brazilian favelas produce fighters with technical skills and toughness that come from environments where combat sports aren't metaphorical. Basketball has a foothold - the NBB domestic league produces talent, and Brazilians have made NBA rosters, though the sport remains distant fourth behind football, volleyball, and motor racing.\n\nThe Olympics showcase Brazilian excellence across unexpected sports - judo, sailing, gymnastics, skateboarding - where individual brilliance emerges from programs that punch above their funding weight. Rebeca Andrade challenging Simone Biles in gymnastics felt like national validation.",
    issues: [
      'National team underperforming relative to talent and expectations',
      'Domestic league financial inequality and corruption',
      'European clubs poaching youth talent before Brazilian development complete',
      'Infrastructure deficits limiting Olympic sports development',
      'Violence and organized crime occasionally impacting sporting events'
    ]
  },
  {
    name: 'Argentina',
    lat: -38.4161,
    lng: -63.6167,
    summary: "Argentina just won the 2022 World Cup, and the country still hasn't recovered from the euphoria. Lionel Messi finally lifting the trophy felt like karmic justice for a player who'd given everything to a nation that simultaneously worshipped and tortured him with expectations. The victory parade in Buenos Aires drew millions - not thousands, millions - into the streets in scenes that looked like the entire country needed therapy for decades of football trauma. The team's current status as champions means every match carries the weight of defending glory while Messi's final years create bittersweet awareness that this era ends soon.\n\nDomestic football in Argentina remains passionate chaos - Boca Juniors vs. River Plate Superclásicos are religious experiences where the actual match quality matters less than the atmosphere, tribalism, and barras bravas (ultras) who run club politics through intimidation. The Primera División produces absurd talent that immediately gets sold to Europe, creating a perpetual cycle where Argentina's best players are always somewhere else. Racing, San Lorenzo, and Independiente maintain massive followings, but financial instability means clubs lurch from crisis to crisis.\n\nBasketball is Argentina's clear second sport - the national team's 2004 Olympic gold over the USA remains one of history's greatest upsets, and the generation that followed has kept Argentina competitive internationally. Campazzo, Deck, and others have played NBA minutes. The domestic league produces talent that filters to Europe's secondary leagues. Manu Ginóbili's retirement left a void, but the system he helped build continues producing.\n\nRugby union has surprising strength - Los Pumas compete with the world's best despite rugby being traditionally upper-class. The addition to the Rugby Championship alongside New Zealand, Australia, and South Africa elevated the program. Physicality and passion compensate for the resource gap with northern hemisphere powers. Tennis has rich tradition - Guillermo Vilas, Gabriela Sabatini through to modern players maintaining presence. Diego Schwartzman reached top-ten rankings, and Argentina's Davis Cup history is distinguished.\n\nThe Olympics see Argentinian success in specific sports - field hockey (Las Leonas), sailing, boxing - where focused programs yield results. Economic instability affects sports funding, but athletic culture remains strong. Motorsport fascinates given Fangio's legendary status and Argentina's Formula 1 history, though the country lacks a current GP.",
    issues: [
      'Domestic football financial crisis and club instability',
      'Barra brava violence and corruption in club governance',
      'Economic crisis affecting sports infrastructure investment',
      'Brain drain of talent to European leagues at younger ages',
      'Post-World Cup hangover and Messi retirement looming'
    ]
  },
  {
    name: 'Chile',
    lat: -35.6751,
    lng: -71.5430,
    summary: "Chilean football peaked with back-to-back Copa América victories in 2015-16, creating a golden generation narrative that has since confronted reality. Alexis Sánchez and Arturo Vidal aging means Chile's missed 2022 World Cup qualification felt like the end of an era. The current squad rebuilds while dealing with the weight of recent success creating impossible expectations. Domestic football in Chile centers on Santiago - Colo-Colo, Universidad de Chile, and Universidad Católica dominate financially and culturally while regional teams struggle. The Superclásico between Colo-Colo and Universidad de Chile produces atmosphere that compensates for tactical sophistication.\n\nTennis remains Chile's most successful Olympic sport - Nicolás Massú's 2004 Athens gold medals (singles and doubles) were miraculous, and Christian Garín has maintained Tour-level presence. The clay court tradition runs deep given South American tennis culture. The sport enjoys middle-class popularity that football's working-class dominance doesn't diminish. Skiing exists in the Andes - Chilean resorts attract South American and international visitors, and the country has produced Winter Olympic competitors, though medals remain elusive.\n\nCycling has grown substantially - Chilean riders compete in grand tours, and domestic races attract regional talent. The topography creates natural training grounds for climbers. Surfing thrives along the Pacific coast - Chilean surfers compete internationally, and spots like Pichilemu draw global attention. Basketball maintains presence through the national league, though resources pale versus Argentina's program. Chile competes regionally but rarely advances beyond South American tournaments.\n\nRodeo is the national sport officially - huaso culture centered on Chilean cowboys and horsemanship, though football's dominance makes rodeo's official status more symbolic. The sport maintains passionate regional followings in rural areas where traditions persist. Mining culture produces tough endurance athletes - ultra-marathon runners and adventure racers who thrive in Chile's diverse, challenging terrain.\n\nThe Olympics see limited success - medals come sporadically in tennis, sailing, and individual sports where athlete brilliance overcomes resource constraints. The country's geography provides natural advantages in certain sports, but systematic development requires investment that competes with other national priorities.",
    issues: [
      'National team decline after golden generation aging',
      'Domestic football financial gap between big three and rest',
      'Limited Olympic success despite athletic culture',
      'Geographic isolation affecting international competition access',
      'Sports infrastructure investment competing with other national needs'
    ]
  },
  {
    name: 'Colombia',
    lat: 4.5709,
    lng: -74.2973,
    summary: "Colombian football culture embodies passionate extremes - brilliant talent emerging from challenging circumstances, combined with dark history that the sport has worked to overcome. The national team has evolved from the tragedy surrounding Andrés Escobar's 1994 murder to becoming genuine World Cup contenders led by players like Luis Díaz, who escaped poverty to star for Liverpool. James Rodríguez's 2014 World Cup golden boot created expectations the team still navigates. Radamel Falcao's career arc - from goal-scoring machine to injury struggles to veteran leadership - mirrors the team's journey through triumph and adversity.\n\nDomestic football centers on fierce rivalries - América de Cali, Millonarios, Atlético Nacional, and Deportivo Cali produce atmosphere and talent. The league's quality has improved, though it remains a selling league for Europe and Mexico. Violence has decreased from narco-trafficking era peaks, but security concerns persist around certain matches. The passion is undeniable - Colombian fans create some of South America's most intense atmospheres, and the country's success in developing technical players from street football to professional careers is remarkable.\n\nCycling is Colombia's other sports obsession - the country's mountainous terrain produces natural climbers who've dominated grand tours. Egan Bernal winning the 2019 Tour de France felt like national vindication, though his career-threatening crash created collective anxiety. Nairo Quintana, Rigoberto Urán, and a pipeline of climbers make Colombia a cycling powerhouse. The sport's working-class roots create accessibility that resonates culturally. Domestic races like Vuelta a Colombia draw massive roadside crowds in mountain stages that look like Tour de France cols.\n\nBoxing maintains presence through fighters who emerge from Barranquilla, Cartagena, and Caribbean coast cities where combat sports thrive. Skating has surprising strength - Colombia's inline and roller speed skating teams dominate world championships with medal counts that dwarf larger nations. The sport receives minimal attention domestically but produces consistent international success. Volleyball, baseball (on the coast), and basketball exist but remain distant from football and cycling's cultural centrality.\n\nThe Olympics see Colombian athletes successful in specific disciplines - weightlifting, BMX, wrestling - where focused programs yield results. Mariana Pajón's BMX dominance (two Olympic golds) made her a national icon. The athletic culture is strong, but resources concentrate on sports with proven medal potential.",
    issues: [
      'Violence and security concerns around certain football matches',
      'Domestic league financial limitations versus European competition',
      'National team underperforming relative to talent pool',
      'Sports infrastructure gaps outside major cities',
      'Cycling success not translating to broader Olympic medal counts'
    ]
  },
  {
    name: 'Peru',
    lat: -9.1900,
    lng: -75.0152,
    summary: "Peruvian football exists in a perpetual state of unfulfilled potential - the national team's 36-year absence from World Cups (1982-2018) created generational trauma that the 2018 qualification briefly healed before missing 2022 reopened wounds. The team's style emphasizes technical skill and possession, producing entertaining football that somehow doesn't translate to consistent qualification. Paolo Guerrero's career as Peru's all-time leading scorer spans the entire modern era, making him both hero and symbol of near-misses. Ricardo Gareca's tenure as coach elevated the team to genuine competitiveness, though his departure created uncertainty.\n\nDomestic football centers on Lima - Universitario and Alianza Lima's Clásico is Peruvian football's defining rivalry, producing atmosphere that makes the tactical quality secondary. Both clubs have massive nationwide followings despite being based in the capital. Sporting Cristal provides a third power, and regional teams occasionally challenge but rarely sustain success. The league suffers from financial instability, and the country's best players leave for Mexico, Brazil, or Europe as soon as possible. Youth development has improved, but the gap to South American powers remains visible.\n\nVolleyball is Peru's second sport - the women's national team has achieved South American dominance and Olympic qualification, creating genuine national celebration. The team's success resonates particularly with working-class communities where volleyball is accessible and popular. Players become celebrities, and major matches draw television audiences that rival all but the biggest football games. The men's program exists but receives fraction of the attention and resources.\n\nSurfing thrives along Peru's Pacific coast - spots like Chicama offer some of the world's longest waves, and Peruvian surfers compete internationally. Sofía Mulánovich's 2004 world championship made her a national sports icon. The sport enjoys growth as tourism develops coastal infrastructure. Badminton and table tennis have niche followings, and Peru occasionally produces world-class players who achieve regional success.\n\nThe Olympics see Peru struggle for medals - occasional boxing or shooting success, but systematic challenges in funding and development limit competitiveness. The country's geography provides natural advantages for certain sports, but translating that to Olympic success requires resources and infrastructure often unavailable.",
    issues: [
      'National team World Cup qualification inconsistency',
      'Domestic league financial instability and quality gaps',
      'Best players departing young for foreign leagues',
      'Limited Olympic success despite athletic culture',
      'Sports infrastructure concentrated in Lima versus provinces'
    ]
  },
  {
    name: 'Venezuela',
    lat: 10.4806,
    lng: -66.9036,
    summary: "Venezuelan sports navigate economic collapse that has devastated infrastructure and created athlete exodus. Baseball remains the national sport - Venezuela has produced more MLB players per capita than anywhere outside the Dominican Republic and Cuba. Miguel Cabrera, José Altuve, Ronald Acuña Jr., and countless others have made Venezuelan baseball synonymous with talent. The Venezuelan winter league once rivaled any in the Americas but has deteriorated as economic crisis prevents operations. MLB academies in Venezuela have scaled back, and the talent pipeline, while still producing major leaguers, faces infrastructure challenges unimaginable a decade ago.\n\nFootball exists in baseball's shadow but maintains passionate following - the national team has never qualified for a World Cup, creating frustrated dreams of breakthrough that economic conditions make increasingly unlikely. Domestic football through Liga FutVe produces talent that occasionally succeeds abroad, but the league operates amid currency collapse and attendance that has plummeted as Venezuelans struggle with basic survival. Players leave at first opportunity, and clubs barely function as professional enterprises. Salomón Rondón represents Venezuela's greatest football export - a striker who's played across Europe's top leagues while carrying national team hopes.\n\nBoxing maintains tradition despite infrastructure decay - Venezuelan fighters continue emerging from gyms that somehow survive economic catastrophe. The sport's individual nature means talented fighters can develop with minimal resources before signing promotional deals that provide escape from Venezuela's crisis. The country has produced world champions across weight classes, and boxing culture remains embedded in working-class communities.\n\nTrack and field has produced Olympic medal winners - Yulimar Rojas is a global triple jump star who holds the world record and has won Olympic gold. Her success represents individual brilliance overcoming systematic challenges. The economic collapse means Venezuelan athletes increasingly compete for other nations or train abroad, creating brain drain that athletics federations cannot prevent. Swimming, gymnastics, and other Olympic sports that require infrastructure and resources have largely collapsed.\n\nThe crisis means Venezuelan sports exist in survival mode - maintaining any competitive programming represents achievement given that the country cannot fund basics. Athletes who succeed do so despite, not because of, Venezuelan sports infrastructure.",
    issues: [
      'Economic collapse devastating all sports infrastructure',
      'Baseball winter league barely operational',
      'Athlete exodus to other countries for training and competition',
      'National team sports lacking resources for development',
      'Currency crisis making professional sports economically unviable'
    ]
  },
  {
    name: 'Ecuador',
    lat: -1.8312,
    lng: -78.1834,
    summary: "Ecuadorian football has achieved genuine South American respectability - consecutive World Cup appearances (2002, 2006, 2014, 2022) established the national team as competitors rather than fodder. The current generation led by Moisés Caicedo (who moved to Chelsea for British record transfer), Pervis Estupiñán, and Enner Valencia represents Ecuador's most talented pool ever. Qualifying from CONMEBOL's brutal format requires consistency that Ecuador has developed, though the team remains underdogs against Argentina, Brazil, and Uruguay.\n\nDomestic football centers on passionate rivalries - Barcelona SC (Guayaquil) vs. Emelec creates atmosphere as intense as any South American derby, despite the actual quality being several tiers below European football. Liga de Quito and Independiente del Valle have achieved Copa Libertadores success, proving Ecuadorian clubs can compete continentally. The league's quality has improved through better youth development and academies producing talent that sells to Mexico and Europe. The country's mid-altitude provides training advantages, and Ecuador has become difficult to beat at home in Quito's 2,800-meter elevation.\n\nVolleyball maintains presence as the second sport - Ecuador has produced South American competitive teams, though they rarely challenge Brazil or Argentina's continental dominance. Tennis has niche following with Ecuador occasionally producing ATP-level players. Auto racing through TC2000 and regional series attracts enthusiasts. Boxing produces fighters who occasionally achieve regional success but rarely world championship level.\n\nThe Olympics see Ecuador struggle for medals - Jefferson Pérez's race walking golds (1996, 2008) were transcendent achievements, but systematic Olympic success requires resources Ecuador cannot consistently allocate. Neisi Dajomes winning weightlifting gold in 2021 created national celebration. The country competes but rarely advances deep in most Olympic sports. The athletic culture exists, but infrastructure and funding limit what's achievable.\n\nBicycle racing and mountain biking enjoy participation given Ecuador's topography, though international success remains limited. The country's biodiversity and geography create potential for adventure sports and surfing along the Pacific coast, with growing interest but limited infrastructure.",
    issues: [
      'Domestic league financial limitations compared to neighbors',
      'Brain drain as best talents leave young for foreign clubs',
      'Limited Olympic sports infrastructure and funding',
      'National team inconsistency between qualifying cycles',
      'Regional inequality in sports infrastructure between coast and highlands'
    ]
  }
]

async function saveSportsBatch1() {
  console.log(`⚽ SPORTS BATCH 1: ${countries.length} countries!\n`)
  let success = 0
  for (const c of countries) {
    try {
      await prisma.locationSummary.upsert({
        where: {name_type_category: {name: c.name,type: 'country',category: 'sport'}},
        update: {summary: c.summary,issues: JSON.stringify(c.issues),topStories: JSON.stringify([]),storyCount: 0,lat: c.lat,lng: c.lng,updatedAt: new Date()},
        create: {name: c.name,type: 'country',country: c.name,lat: c.lat,lng: c.lng,category: 'sport',summary: c.summary,issues: JSON.stringify(c.issues),topStories: JSON.stringify([]),storyCount: 0}
      })
      console.log(`✅ ${c.name}`)
      success++
    } catch (e) { console.error(`❌ ${c.name}:`, e) }
  }
  console.log(`\n🎯 Batch 1: ${success}/${countries.length} saved!`)
}

saveSportsBatch1().catch(console.error).finally(() => prisma.$disconnect())
