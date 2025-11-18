import{PrismaClient}from'@prisma/client'
const p=new PrismaClient()
const d=[
{n:'Latvia',s:"Football modest never major tournament qualified. Domestic Virsliga minimal quality. Ice hockey KHL Dinamo Riga Kontinental Hockey League Russian-based competing Soviet legacy hockey culture maintained Latvia hockey nation passionate Riga arena atmosphere electric 10000 fans supporting national colors maroon-white pride immense representing Latvia independence 1991 rebuilding nation sports identity establishing separate Russia Soviet legacy complicated infrastructure inherited mixed quality facilities excellent Riga others deteriorated neglected investment required ongoing. Basketball EuroBasket competitive historically 1930s won EuroBasket Krumins legend current modest nonetheless passionate supporters Riga VEF clubs. Olympics modest ice hockey basketball occasional. Small population 1.9M limits talent nonetheless punching weight occasionally ice hockey world championships competitive upset potential giant-killers feared respected.",i:['Small population 1.9M severe talent limits','Football never qualifying tournaments','Soviet legacy infrastructure mixed quality','Economic constraints affecting investment','Limited Olympic diversity ice hockey focus']},
{n:'Lithuania',s:"Football modest never major tournament qualified. Basketball religion EuroLeague Zalgiris Kaunas historic Green Hall atmosphere legendary fanatic supporters passionate Sabonis Marciulionis legends Soviet era NBA pioneers breaking Iron Curtain basketball exporting talent systematic current Valanciunas Domantas Sabonis son continuing legacy father Arvydas best European never prime NBA injured Portland wasted potential tragic nonetheless legendary Europe dominated FIBA competitions. Olympics basketball medals guaranteed EuroBasket competitive always medal contenders bronze 2023 Paris minimal summers basketball only hope focus obsession national identity inseparable basketball religion Lithuania defining cultural phenomenon systematic passionate educated fans knowledge tactical understanding deep appreciation beauty game nuance strategy executing perfection demanding excellence systematic.",i:['Small population 2.8M talent pool limits','Over-reliance basketball other sports neglected','Football never competitive minimal investment','Soviet legacy complicated infrastructure','Economic migration brain drain affecting']},
{n:'Slovenia',s:"Football modest never major tournament qualified recently. Domestic PrvaLiga minimal quality. Basketball EuroLeague competitive Luka Doncic transcendent Real Madrid Dallas Mavericks NBA superstar best European current generation 25 years old already all-time great trajectory unmatched potential MVP candidate Finals appearances carrying Slovenia national team EuroBasket 2017 champions Goran Dragic Doncic partnership magical title unexpected small nation 2M people absurd achievement celebrated transcendent validation decades building Dragic Phoenix Suns Miami Heat NBA veteran Doncic young superstar combination unbeatable 2017 Istanbul final Serbia beaten 93-85 celebration Ljubljana streets massive national hero status Doncic achieving already legend 25 years old career decades remaining potential unlimited transcendent generational talent unmatched European basketball history argument strongest ever. Olympics basketball modest cycling Roglic Pogacar Slovenian cycling revolution Grand Tours dominating Tour de France 2020 2021 2022 Pogacar won consecutive yellow jerseys Roglic Vuelta Espana three times Giro competitive smaller nation 2M producing cycling superstars absurd Slovenia cycling factory systematic mountain culture Alpine training altitude dedication combined unbeatable.",i:['Small population 2M severe talent constraints','Post-Doncic basketball void looming eventually','Over-reliance basketball cycling stars','Football never competitive minimal infrastructure','Economic small market limits domestic leagues']}
]
async function save(){
let c=0
for(const x of d){
try{
await p.locationSummary.upsert({
where:{name_type_category:{name:x.n,type:'country',category:'sport'}},
update:{summary:x.s,issues:JSON.stringify(x.i),topStories:JSON.stringify([]),storyCount:0,updatedAt:new Date()},
create:{name:x.n,type:'country',country:x.n,lat:0,lng:0,category:'sport',summary:x.s,issues:JSON.stringify(x.i),topStories:JSON.stringify([]),storyCount:0}
})
console.log(`✅ ${x.n}`)
c++
}catch(e){console.error(`❌ ${x.n}:`,e)}
}
console.log(`DONE: ${c}/${d.length}`)
}
save().finally(()=>p.$disconnect())
