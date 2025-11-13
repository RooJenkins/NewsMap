import 'dotenv/config'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const ROMANIA_POLITICS = {
  name: 'Romania',
  country: 'Romania',
  lat: 45.9432,
  lng: 24.9668,
  summary: `Romania in November 2025 is a country that just narrowly avoided democratic catastrophe—but the danger hasn't passed. In May 2025, pro-EU centrist Nicușor Dan defeated hard-right nationalist George Simion 54%-46% in a presidential runoff that was supposed to happen six months earlier. Why the delay? Because in November 2024, Romania's Constitutional Court took the unprecedented step of annulling the first-round presidential election after far-right candidate Călin Georgescu shocked everyone by winning amid credible allegations of Russian interference. The court ordered a complete do-over, pushing the election to May 2025. Dan's victory was welcomed with relief in Brussels and Kyiv, but don't mistake this for stability. Euro-skeptic far-right parties now hold 113 seats in Romania's Chamber of Deputies, nearly matching the ruling coalition's 135. The Alliance for the Union of Romanians (AUR), led by Simion, has gone from fringe protest movement to kingmaker. In November 2025, Romanian politics are defined by three tensions: a far-right surge that reflects deep voter frustration with corruption and economic pain; a defense procurement scandal that's exposing systemic graft; and EU relations fraying as Ukraine fatigue and sovereignty rhetoric gain traction. President Dan has breathing room, but Romania is one economic shock or political crisis away from the far-right taking power. The question isn't whether AUR is a threat—it demonstrably is—but whether Romania's pro-European coalition can deliver enough to neutralize it before 2029.

**The Annulled Election Crisis and Far-Right Consolidation**

Let's start with the chaos. On November 24, 2024, Călin Georgescu—a far-right, pro-Russia independent who had barely registered in polls—won the first round of Romania's presidential election. It was a political earthquake. Georgescu, who had praised Vladimir Putin and questioned Romania's NATO membership, secured enough votes to advance to the December 8 runoff. Then, on December 6—just two days before the runoff—Romania's Constitutional Court dropped a bombshell: it annulled the entire election, citing evidence of "manipulation of public opinion" by a "foreign state." The court didn't name Russia explicitly, but everyone knew. Intelligence reports revealed coordinated TikTok campaigns, bot networks amplifying Georgescu's anti-establishment messaging, and suspicious funding flows. The annulment was unprecedented in Romanian democratic history and deeply controversial. Critics argued it set a dangerous precedent—what's to stop future courts from canceling elections they don't like? Supporters insisted it was necessary to protect democracy from foreign interference. The do-over election was scheduled for May 2025. This time, the far-right vote consolidated around George Simion, leader of the Alliance for the Union of Romanians (AUR). Simion is more polished than Georgescu—less overtly pro-Russia, more tactically nationalist. He campaigned on unifying Romania with Moldova, cracking down on corruption (while conveniently ignoring AUR's own ethical lapses), and rolling back what he called Romania's "submissive" relationship with the EU. In the first round on May 4, Simion topped the field. In the May 18 runoff, he faced Nicușor Dan, Bucharest's popular mayor and a centrist technocrat backed by pro-European parties. Dan won 54%-46%, but the margin was narrower than EU officials had hoped. The far-right didn't go away. AUR and allied parties now control 113 parliamentary seats. They're blocking reforms, forcing the ruling coalition to negotiate on key legislation, and positioning themselves for the next electoral cycle. Simion has positioned AUR as the voice of "forgotten Romania"—rural areas, pensioners, workers left behind by globalization. And it's working. In November 2025, AUR is polling competitively for the next parliamentary elections, and the ruling coalition—led by Prime Minister Marcel Ciolacu's Social Democrats and the National Liberal Party—is governing on thin margins, vulnerable to populist backlash.

**Corruption and the Defense Procurement Scandal**

Romania has been fighting corruption for decades, with mixed results. The National Anticorruption Directorate (DNA) achieved some high-profile prosecutions in the 2010s, but political interference has weakened it in recent years. Now, in 2025, a new scandal has emerged that perfectly encapsulates Romania's corruption problem: a convoluted arms-trafficking scheme tied to Ukraine aid. In early 2025, Romanian authorities arrested a former senator for allegedly attempting to bribe the Defense Minister with 1 million euros. The goal? To facilitate a fraudulent arms deal that would purchase Russian-type artillery shells from Kazakhstan, import them to Romania, refurbish and relabel them as "Romanian shells," and then sell them to Ukraine via a Bulgarian intermediary. The scheme was designed to fraudulently obtain EU funds from the Rearm Europe program, a 27-nation initiative to boost weapons manufacturing. This wasn't just about one corrupt politician—it exposed systemic rot in Romania's military procurement. A Balkan Investigative Reporting Network (BIRN) investigation uncovered troubling patterns: local military units funneling public contracts to companies with questionable qualifications, ties to military personnel, or previous criminal investigations. Since the Ukraine war began, millions in public funds have gone to suppliers who shouldn't have qualified. The Romanian government insists it's cracking down, but public trust is cratering. Romanians are watching politicians promise solidarity with Ukraine while skimming off aid meant for Kyiv. It's a gift to the far-right. Simion and AUR have weaponized the scandal, arguing that Romania's pro-EU elite are corrupt hypocrites enriching themselves while ordinary Romanians struggle with inflation and energy costs. The tragedy is that Romania actually has been a critical supporter of Ukraine—hosting NATO troops, accepting refugees, and providing military aid. But the corruption scandal undermines that narrative. In November 2025, the Ciolacu government faces a credibility test: will they prosecute the procurement scandal credibly, holding elites accountable? Or will they bury the investigation to protect political allies, confirming public cynicism?

**EU Relations, Ukraine Fatigue, and the Sovereignty Debate**

Romania joined the EU in 2007, and for years, EU membership was sacrosanct in Romanian politics—supported by over 70% of the population. That consensus is fracturing. In November 2025, polling suggests EU support has dropped to around 60%, with younger voters and rural populations increasingly skeptical. The far-right has tapped into this. AUR doesn't call for outright EU exit—Romanians aren't that Eurosceptic—but pushes "sovereignty" rhetoric: Brussels shouldn't dictate Romania's migration policy, energy choices, or judicial reforms. Simion frames the EU as an elitist project that benefits Western Europe at Eastern Europe's expense. He's not entirely wrong. Romania is one of the EU's poorest members, with a GDP per capita roughly half the EU average. Millions of young, educated Romanians have emigrated West for better wages. Rural areas are depopulating. Infrastructure is crumbling. And EU funds meant to close these gaps have been slow, bureaucratic, and sometimes diverted by corrupt local officials. Then there's Ukraine. Romania has been a frontline state in supporting Ukraine since February 2022. It shares a 650 km border with Ukraine, hosts NATO's largest Eastern European deployment, and has accepted hundreds of thousands of Ukrainian refugees. But by late 2025, fatigue is setting in. Romanians are frustrated by rising energy costs (partly blamed on EU sanctions on Russian energy), inflation running above 6%, and the sense that Western Europe isn't sharing the burden equally. Georgescu's platform in 2024 explicitly called for ending Romanian support for Ukraine. Simion is more cautious—he backed Ukraine support publicly but hinted at "reassessing priorities." The ruling coalition, led by Ciolacu's Social Democrats and the National Liberal Party, remains staunchly pro-Ukraine and pro-EU. But they're governing on thin margins, vulnerable to populist backlash. If the economy worsens, or if a major incident—say, Russian missiles landing on Romanian soil—happens without strong NATO response, public opinion could flip fast. President Dan is working to reassure Brussels and Washington. Foreign Minister Luminița Odobescu has attended NATO summits, backed Ukraine aid packages, and emphasized Romania's strategic importance. But every time the government backs EU sanctions or increases defense spending, AUR gains votes. Watch Romania's relationship with Moldova closely. Simion campaigned on reunification—absorbing Moldova back into Romania, reversing the 1940 Soviet annexation. It's nationalist red meat, but it's also dangerous. Moldova is fragile, with a pro-EU government in Chișinău under constant Russian pressure. If Romania's politics shift further right, it could destabilize Moldova and complicate EU enlargement plans.

**Institutions Under Pressure: Courts, Media, and Democratic Health**

Romania's democratic institutions are functional but strained. The Constitutional Court's November 2024 decision to annul the election was controversial precisely because it showed courts willing to intervene dramatically in politics. Was it defending democracy from foreign interference, or was it overreach? The answer probably depends on your politics. But it set a precedent that worries both sides: liberals fear future conservative courts could annul left-wing victories; conservatives fear liberal courts already did. The judiciary broadly is under pressure. Prosecutors investigating corruption face political interference. The DNA, once celebrated for high-profile convictions, has been weakened by legislative changes limiting its powers. Judicial independence is threatened when politicians can punish prosecutors who investigate them. Media freedom is decent but fragile. Romania has a pluralistic media landscape with private outlets, public broadcasters, and investigative journalists. But oligarchs own major media companies, and editorial independence is compromised by business interests. Journalists investigating corruption face lawsuits, harassment, and political pressure. The far-right has weaponized anti-media rhetoric, calling critical journalists "traitors" or "foreign agents." Parliament remains a battleground. The ruling coalition has 135 seats; AUR and allies have 113. That's enough for AUR to block constitutional changes (which require two-thirds majorities) and force concessions on legislation. AUR uses parliament as a platform for nationalist theater—dramatic speeches, confrontational tactics, and media spectacles. It's effective politics, keeping them in headlines and energizing their base. Civil society and NGOs remain active, but they face funding pressures and political attacks. Pro-democracy groups, anti-corruption watchdogs, and human rights organizations operate freely but are labeled "Soros-funded" or "Brussels puppets" by the far-right. It's a smear campaign designed to delegitimize independent voices.

**The Bottom Line**

Romania in November 2025 is a democracy that dodged a bullet but remains in danger. Nicușor Dan's presidency gives pro-European forces breathing room, but the far-right surge isn't reversing—it's consolidating. AUR controls over a third of parliament, and unless the ruling coalition delivers on corruption reform, economic growth, and tangible improvements to ordinary Romanians' lives, Simion will be back in 2029 with an even stronger hand. Watch three things: First, whether Romania can prosecute the defense procurement scandal credibly. If it buries the investigation or lets elites off easy, public trust will collapse further, and AUR will weaponize it. Second, whether the EU steps up with real financial support for Romania's Ukraine burden. Rhetoric isn't enough anymore—if Brussels wants Eastern Europe's continued backing for Ukraine, it needs to share costs more equitably. Third, whether Nicușor Dan can use the presidency to push genuine reform. If he becomes another aloof technocrat disconnected from voters' economic pain, the far-right will feast. Romania is strategically vital: NATO's eastern flank, Ukraine's neighbor, a potential anchor for EU enlargement into Moldova and the Western Balkans. But it's politically fragile, economically vulnerable, and one election cycle away from a very different trajectory. Europe can't take Romania for granted anymore. The far-right surge is real, and it's not going away without serious political, economic, and institutional responses. Romania's democracy survived 2024-2025, but survival isn't the same as thriving. In November 2025, Romania is in a holding pattern—stable enough to avoid crisis, but not strong enough to feel secure.`,
  issues: JSON.stringify([
    'Annulled election crisis and far-right consolidation',
    'Defense procurement corruption scandal',
    'EU relations and Ukraine fatigue',
    'Institutional pressures on courts and media'
  ]),
  topStories: JSON.stringify([
    {
      title: 'Pro-EU Nicușor Dan defeats hard-right rival in key Romania election',
      source: 'Al Jazeera',
      link: 'https://www.aljazeera.com/news/2025/5/18/pro-eu-nicusor-dan-on-course-to-beat-hard-right-rival-in-romania-election',
      pubDate: '2025-05-18'
    },
    {
      title: 'Far-right Simion tops first round of Romania\'s presidential election',
      source: 'Al Jazeera',
      link: 'https://www.aljazeera.com/news/2025/5/4/romania-votes-in-crucial-presidential-election-rerun',
      pubDate: '2025-05-04'
    },
    {
      title: 'Suspect arrested for attempt to bribe minister over Ukraine arms purchase',
      source: 'RFE/RL',
      link: 'https://www.rferl.org/a/suspect-arrested-romania-bribe-ukraine-arms-purchase/33587466.html',
      pubDate: '2025-02-15'
    },
    {
      title: 'Fog of War: Battling transparency in Romanian military contracts',
      source: 'Balkan Insight',
      link: 'https://balkaninsight.com/2025/02/04/fog-of-war-battling-a-lack-of-transparency-in-romanian-military-contracts/',
      pubDate: '2025-02-04'
    }
  ])
}

async function addRomaniaPolitics() {
  console.log('Adding Romania Politics summary...\n')

  try {
    const result = await prisma.locationSummary.upsert({
      where: {
        name_type_category: {
          name: ROMANIA_POLITICS.name,
          type: 'country',
          category: 'politics'
        }
      },
      create: {
        name: ROMANIA_POLITICS.name,
        type: 'country',
        country: ROMANIA_POLITICS.country,
        lat: ROMANIA_POLITICS.lat,
        lng: ROMANIA_POLITICS.lng,
        category: 'politics',
        summary: ROMANIA_POLITICS.summary,
        issues: ROMANIA_POLITICS.issues,
        topStories: ROMANIA_POLITICS.topStories,
        storyCount: 0,
        updatedAt: new Date()
      },
      update: {
        summary: ROMANIA_POLITICS.summary,
        issues: ROMANIA_POLITICS.issues,
        topStories: ROMANIA_POLITICS.topStories,
        updatedAt: new Date()
      }
    })

    console.log('✅ Romania Politics added/updated successfully')
    console.log('   ID:', result.id)
    console.log('   Name:', result.name)
    console.log('   Category:', result.category)
    console.log('   Summary length:', result.summary.length, 'characters')
    console.log('   Issues:', JSON.parse(result.issues).length)
    console.log('   Stories:', JSON.parse(result.topStories).length)
    console.log()
  } catch (error) {
    console.error('❌ Error processing Romania:', error)
    throw error
  }
}

addRomaniaPolitics()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
