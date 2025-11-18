import{PrismaClient}from'@prisma/client'
const p=new PrismaClient()
const d=[
{n:'Slovakia',s:"Football modest Euro 2016 qualified knockout round rare. Domestic Fortuna Liga Slovan Bratislava modest. Ice hockey world power world championships competitive NHL exports Hossa Gaborik Satan Chara legends Tatar current. Olympics ice hockey medals modest. Czechoslovakia split 1993 Czech Republic Slovakia separated Velvet Divorce peaceful nonetheless divided resources infrastructure talent pools Czech kept Prague capital advantages Slovakia Bratislava secondary nonetheless independent identity establishing sports separate flags anthems teams pride national representing Slovakia distinct Czech historical complicated brothers separated nonetheless competing fiercely Slovakia proving independence validation seeking respect earning gradually systematic infrastructure building decades slow nonetheless improving potential unlocking demographics resources leveraging.",i:['Small population 5.4M talent pool limits','Czechoslovakia split 1993 divided resources','Football modest never consistent qualifying','Ice hockey competitive but Czech rivalry','Economic constraints affecting infrastructure']}
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
