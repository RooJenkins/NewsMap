import{PrismaClient}from'@prisma/client'
const p=new PrismaClient()
const d=[
{n:'Albania',s:"Football Euro 2016 first time qualified historic celebrated. Kosovo diaspora players represent heritage. Communist isolation 1944-1991 destroyed infrastructure. Rebuilding slow corruption endemic. EU candidate seeking membership. Olympics weightlifting wrestling occasional medals.",i:['Communist legacy infrastructure','Corruption organized crime','Small 2.8M population','Diaspora dependence','Poverty investment minimal']},
{n:'North Macedonia',s:"Football Euro 2020 first qualified Pandev legend. Name dispute Greece resolved 2019 became North Macedonia. Yugoslav breakup 1991 poorest republic. NATO 2020 EU candidate. Infrastructure minimal building slowly.",i:['Small 2M population','Name dispute delayed','Euro 2020 only','Yugoslav poorest','Corruption governance']},
{n:'Bosnia and Herzegovina',s:"Football never qualified major tournaments. Bosnian War 1992-95 destroyed infrastructure genocide Srebrenica. Dayton 1995 divided entities dysfunctional governance. Political paralysis blocks reforms. Small population divided.",i:['War 1992-95 destroyed','Ethnic divisions entities','Political paralysis','Small 3.3M divided','Corruption systematic']},
{n:'Montenegro',s:"Football never qualified. Water polo world power Olympic medals only success. Yugoslavia 2006 independence newest Europe. Tiny 620K people infrastructure minimal. Close Serbia nonetheless independent.",i:['Tiny 620K population','Football never qualifying','Water polo only','Newest nation 2006','Serbia relations complex']},
{n:'Kosovo',s:"Football FIFA 2016 recognized Serbia opposed. Diaspora players Switzerland represent. Never qualified major tournaments. Olympics judo Kelmendi 2016 gold first medal. Independence 2008 Serbia disputes UN blocked.",i:['Serbia dispute recognition','FIFA 2016 recent','Never qualified','Small 1.8M population','Diaspora representing']},
{n:'Barbados',s:"Football modest never World Cup. Cricket West Indies legends Sobers best ever. Independence 1966 republic 2021 removed monarchy. Small 280K population limits talent. Tourism economy sports secondary.",i:['West Indies decline','Small 280K population','Cricket legacy nostalgia','Football never competitive','Limited infrastructure']},
{n:'Bahamas',s:"Football modest never competitive. Athletics Miller-Uibo Olympic 400m gold 2016 Rio diving finish iconic. Small 400K population limits talent. Tourism economy sports secondary. Basketball Hield NBA growing.",i:['Small 400K population','Football never competitive','Athletics Miller-Uibo reliance','Tourism economy','Limited infrastructure']},
{n:'Brunei',s:"Football modest never competitive. Oil wealth sultan absolute monarchy. Population 450K limits talent. Olympics never medals rare participation. Islamic restrictions. Infrastructure excellent wealth nonetheless talent limited.",i:['Tiny 450K population','Oil cannot buy talent','Absolute monarchy','Islamic restrictions','Never medals Olympics']},
{n:'Maldives',s:"Football modest never competitive. Surfing tourism beaches paradise. Olympics never medals rare participation. Climate change sea level rising existential threat islands disappearing. Tiny 500K population scattered islands.",i:['Tiny 500K islands','Climate change threat','Football never competitive','Tourism economy','Never medals Olympics']},
{n:'Bhutan',s:"Football modest lowest FIFA rankings. Archery national sport traditional Olympics. Happiness GNH prioritized over GDP unique philosophy. Buddhist kingdom Himalayas isolated peaceful. Tiny 780K population mountains.",i:['Tiny 780K mountains','Football lowest FIFA','Archery traditional focus','Himalayas isolation','Happiness prioritized']}
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
