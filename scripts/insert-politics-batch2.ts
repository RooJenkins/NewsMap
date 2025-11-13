import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

// Batch 2 countries for Politics category with pre-written summaries
const countriesData = [
  {
    name: 'Bosnia and Herzegovina',
    lat: 43.9159,
    lng: 17.6791,
    summary: `On November 23rd, Bosnia's Serb-majority entity goes to the polls in an extraordinary presidential election that encapsulates everything dysfunctional about this country's politics. Milorad Dodik—the pro-Russian nationalist who's dominated Republika Srpska for years—was stripped of his mandate by Sarajevo courts after refusing to recognize the authority of the international high representative. He's been convicted, barred from office, yet he's spent months refusing to step aside. Only after sustained pressure did he allow his interim replacement, Ana Trisic Babic, to take the helm ahead of this snap election. It's one of the worst political crises since the Dayton Accords ended the Bosnian War.

Bosnia's constitutional architecture is Byzantine, to put it charitably. You've got two entities—the Federation (Bosniak-Croat) and Republika Srpska (Serb)—plus the Brčko District, all stitched together by Dayton's compromise. The state-level presidency is a rotating tripartite affair, while real power often sits with entity-level leaders. Dodik's SNSD party has long controlled Republika Srpska, and his rhetoric has grown increasingly secessionist, challenging Sarajevo's legitimacy and cozying up to Moscow and Beijing. Meanwhile, the Federation is fragmented among Bosniak and Croat parties, with the SDA (Bosniak nationalist) and HDZ BiH (Croat) jockeying for influence. The international High Representative, Christian Schmidt, remains in post—a hangover from the 1990s that Serbia and Russia don't recognize, but which Dodik ran afoul of when he ignored Schmidt's rulings.

The November 23rd election is a test of strength. Dodik's supporters view this as a battle for Republika Srpska's autonomy; critics see it as farce, given Dodik's legal troubles and the entity's slide toward authoritarianism. The OSCE is observing, but skepticism abounds about whether this poll can resolve the standoff or merely entrench divisions. Corruption is endemic—Bosnia ranks poorly on Transparency International's index—and reforms demanded by the EU for membership talks have stalled. Ethnic tensions simmer, and Dodik's inflammatory language doesn't help. The state institutions are weak, often paralyzed by vetoes and boycotts.

Looking ahead, Bosnia faces a fork in the road. If Republika Srpska continues its drift away from Sarajevo, the risk of renewed conflict—or at least permanent fracture—grows. The EU accession process offers a carrot, but without serious reforms and depoliticization of the judiciary, Brussels won't bite. The U.S. and EU have tried sanctions on Dodik and allies, with mixed results. The 2026 state-level elections loom, and whether Bosnia can coalesce around a functional government or splinter further will depend on these next few years.

**Bottom line:** Bosnia's politics are trapped in 1995. Until Dayton's ossified structures are reformed, and until nationalist leaders stop stoking ethnic division for political gain, the country will remain stuck—neither fully at peace nor truly functional. The Republika Srpska election is another episode in a long-running crisis of legitimacy. Watch for whether Dodik's candidate wins, and whether Sarajevo can muster the political will to enforce its rulings. The international community's patience is waning, but so is its leverage.`,
    issues: [
      'Republika Srpska presidential crisis and Dodik mandate dispute',
      'Ethnic tensions and secessionist rhetoric',
      'Weak state institutions and Dayton system dysfunction',
      'Endemic corruption and stalled EU reforms',
      'International High Representative authority challenges',
    ],
  },
  {
    name: 'Botswana',
    lat: -22.3285,
    lng: 24.6849,
    summary: `In November 2025, President Duma Boko is still basking in the glow of his historic election victory a year ago—a seismic shift that ended the Botswana Democratic Party's 58-year stranglehold on power. Boko's Umbrella for Democratic Change (UDC) won 36 seats in the National Assembly last October, and he was sworn in on November 1st, 2024, becoming Botswana's first president not from the BDP. It was a peaceful, democratic transfer of power that sent shockwaves through the region. Incumbent Mokgweetsi Masisi conceded gracefully the morning after results came in, ensuring a smooth handover. Botswana's democracy, often held up as Africa's shining example, proved its mettle.

Boko's government has been busy. In his first State of the Nation address, he pledged investments in solar energy, medicinal cannabis, and industrial hemp—a bid to diversify an economy still too dependent on diamonds. He's also courted Elon Musk to extend Starlink internet access nationwide, aiming to leapfrog infrastructure gaps and connect remote communities. On the international stage, Boko has reaffirmed Botswana's support for the Sahrawi people's right to self-determination, signaling continuity in foreign policy. The UDC is center-left, a coalition of parties that united under Boko's leadership after years of BDP dominance. Boko himself is a seasoned politician—human rights lawyer, former opposition MP, and a tenacious organizer.

The challenges are formidable. Botswana's economy has long ridden on diamonds, which account for a third of GDP and most export revenue. Global demand is soft, and diamond prices have been under pressure. Youth unemployment is high—around 30%—and inequality is stark, despite Botswana's relatively high per capita income. The BDP, now in opposition for the first time, is regrouping but remains a force, with deep roots in the civil service and traditional structures. Corruption, while lower than in many African countries, remains a concern, particularly around diamond revenues and procurement. Boko's UDC must deliver on its promises—jobs, services, economic diversification—or risk the backlash that often greets new governments.

Politically, Botswana's system is stable: a multiparty parliamentary democracy with regular, credible elections. The president is elected by the National Assembly, not directly, but the system has proven resilient. Boko's victory was a testament to voter frustration with the BDP's complacency and economic stagnation. The question now is whether the UDC can govern effectively, or whether the BDP will stage a comeback. The next elections are in 2029, and Boko's honeymoon period won't last forever. Watch for progress on economic diversification, youth employment, and governance reforms. If the UDC stumbles, the BDP will pounce.

**Bottom line:** Botswana has achieved what many African countries aspire to: a democratic transfer of power, peaceful and credible. Duma Boko's presidency is a fresh start, but the hard work begins now. Diamonds won't sustain Botswana forever, and the UDC must prove it can deliver beyond rhetoric. The region is watching—this could be a model, or a cautionary tale. For now, Botswana's democracy deserves applause, but governance is a marathon, not a sprint.`,
    issues: [
      'Historic democratic transition ending 58-year BDP rule',
      'Economic diversification beyond diamond dependency',
      'Youth unemployment and inequality challenges',
      'Delivery on renewable energy and digital infrastructure promises',
      'UDC governance test and BDP opposition resurgence risk',
    ],
  },
  {
    name: 'Brazil',
    lat: -14.2350,
    lng: -51.9253,
    summary: `Luiz Inácio Lula da Silva is in his third year of his third presidency, and November 2025 has been a stark reminder that Brazilian politics is never boring. Police have accused Lula's predecessor, Jair Bolsonaro, and 36 others—including former ministers and military officers—of plotting a coup to prevent Lula from taking office in 2022. Four military officers and a police officer were detained for allegedly planning to assassinate Lula, Vice President Geraldo Alckmin, and Supreme Court Justice Alexandre de Moraes. It's the kind of bombshell that would dominate headlines anywhere, but in Brazil, it's just the latest chapter in a decade of political convulsions. To add to the chaos, a man detonated explosives and killed himself in front of the Supreme Court after allegedly making threats against the justices.

Lula's relationship with Congress has been rocky. In 2025, he became the first Brazilian president since 1992 to have a decree overturned by Congress, after a proposal to raise a financial transactions tax was rejected. His approval ratings hover around the mid-30s—not disastrous, but hardly a mandate. The Workers' Party (PT) is in coalition with centrist and left-wing parties, but navigating Brazil's fragmented Congress (30+ parties) is like herding cats. The opposition, including Bolsonaro's Liberal Party (PL), remains vigorous, and with Bolsonaro potentially barred from office due to legal troubles, the right is searching for a new standard-bearer ahead of the 2026 elections.

Lula's agenda has focused on reversing Bolsonaro's environmental rollbacks, tackling inequality, and restoring Brazil's international standing. But fiscal credibility is a constant headache. In December 2024, Congress approved a watered-down spending cut package, undermining Lula's efforts to rein in the deficit. Brazil's debt-to-GDP ratio is above 80%, and markets are skittish. Meanwhile, Congress is considering a bill to grant amnesty to those involved in the January 8th, 2023 ransacking of federal buildings—a move that would be politically explosive. The Escazú Agreement, which requires protection of environmental defenders, is also under consideration, but faces resistance from agribusiness interests.

The coup plot allegations against Bolsonaro are politically seismic. If charges stick, it could sideline the far-right leader permanently and fracture the opposition. But it also risks further polarizing an already divided country. Lula's challenge is to deliver economic growth and social progress while navigating a hostile Congress and a judiciary that has become increasingly assertive. The 2026 presidential race is already casting shadows—Lula is eligible for re-election, but at 80 years old, questions about succession loom. Watch for who emerges as the PT's next generation, and whether the center-right can coalesce around a credible candidate.

**Bottom line:** Brazil is a political tinderbox. Lula's presidency is defined by battles with Congress, a resurgent judiciary, and the ghost of Bolsonarismo. The coup plot revelations could reshape the right, but they also underscore how fragile Brazil's democracy felt in 2022. Lula's task is to govern in a polarized environment, deliver for the working class, and prevent democratic backsliding. It's a tall order, and Congress isn't making it easy. Brazil's 2026 elections will be pivotal—watch for whether Lula can rebuild his coalition, or whether the country lurches back to the right.`,
    issues: [
      'Bolsonaro coup plot allegations and political crisis',
      'Congressional defeats and fiscal credibility challenges',
      'Lula approval ratings in mid-30s and coalition fragility',
      'January 8th amnesty bill and polarization risks',
      '2026 election dynamics and PT succession questions',
    ],
  },
  {
    name: 'Bulgaria',
    lat: 42.7339,
    lng: 25.4858,
    summary: `After seven elections in four years, Bulgaria finally has a government again. On January 16th, 2025, parliament approved a coalition led by the center-right GERB party, with Rosen Zhelyazkov—a lawyer and former speaker—as prime minister. The minority government comprises GERB–UDF, the Bulgarian Socialist Party (BSP), and There is Such a People (ITN), with external support from Ahmed Dogan's Alliance for Rights and Freedoms (APS). The vote was 125-114, a narrow margin that speaks to Bulgaria's chronic political fragmentation. The October 2024 election was the seventh in three years, and GERB won only 69 seats in the 240-seat National Assembly—enough to lead, but not to govern alone.

This is Bulgaria's seventh government since 2021, and the country has spent much of the last four years under caretaker administrations. The root cause? A toxic mix of corruption scandals, judicial dysfunction, and voter disillusionment. GERB, led by former prime minister Boyko Borissov, dominated Bulgarian politics for over a decade, but mass protests in 2020 and 2021 over corruption and state capture forced early elections. Since then, no party has managed to form a stable majority. The reform-minded We Continue the Change (PP) and Democratic Bulgaria (DB) have been vocal opponents of GERB, accusing Borissov of entrenched corruption and clientelism, but they've failed to consolidate power themselves.

The current coalition is being called a "Frankenstein" government—an awkward alliance of center-right, left-wing, and populist forces held together by desperation. The BSP, a successor to the Communist Party, is in bed with GERB, while ITN is a populist party founded by a talk show host. The APS, representing Bulgaria's Turkish minority, provides external support, but its leader, Dogan, is a controversial figure. This government's survival depends on avoiding provocative reforms and keeping the coalition's disparate factions from imploding. Already, a Constitutional Court ruling in March 2025 declared 16 MPs illegally elected and added seats to the far-right Velichie party, throwing the coalition's majority into doubt.

Bulgaria is the EU's poorest member state, with chronic corruption, weak rule of law, and a judiciary that's often seen as politicized. The country has been blocked from joining the Schengen Area for years due to concerns over border security and corruption. EU funds are crucial to Bulgaria's economy, but Brussels has withheld disbursements over rule-of-law concerns. Borissov's GERB is part of the European People's Party, giving him allies in Brussels, but his domestic reputation is tarnished. The opposition—PP, DB, and others—are pushing for judicial reforms, anti-corruption measures, and Euroatlantic integration, but they're fractured and unable to govern.

The next elections could come at any moment, given the coalition's fragility. Polls suggest voter fatigue is high, and turnout has been declining. The risk is that Bulgaria becomes ungovernable, trapped in a cycle of elections and caretaker governments. Borissov is a survivor, but his magic is fading. Watch for whether this government can last a full term (unlikely), and whether the opposition can get its act together. Bulgaria's EU future depends on credible reforms, but political stability is a prerequisite.

**Bottom line:** Bulgaria's political crisis is a marathon, not a sprint. Seven elections in four years is exhausting for everyone, and this GERB-led coalition is a band-aid, not a cure. Corruption, judicial dysfunction, and elite capture remain the core problems, and until those are addressed, Bulgaria will keep spinning its wheels. The EU is impatient, voters are cynical, and the risk of democratic backsliding is real. This government is Bulgaria's seventh chance—don't bet on it lasting.`,
    issues: [
      'Seven elections in four years and chronic political instability',
      'Fragile "Frankenstein" coalition with narrow majority',
      'Endemic corruption and weak rule of law',
      'Constitutional Court ruling threatening coalition viability',
      'EU integration blocked by governance and corruption concerns',
    ],
  },
  {
    name: 'Burkina Faso',
    lat: 12.2383,
    lng: -1.5616,
    summary: `Captain Ibrahim Traoré, at 37 one of the world's youngest heads of state, has been running Burkina Faso since his September 2022 coup—the country's second that year. In July 2025, his military junta dissolved the national election commission, arguing it was "prone to foreign influences" and too costly. Electoral matters are now handled by the territorial administration ministry, effectively putting the military in charge of any future polls. Not that elections are imminent: in May 2024, Traoré signed a new transitional charter extending his rule by five years, to 2029. Democracy, in other words, is off the table.

Burkina Faso's descent into chaos began around 2015, when jihadist groups linked to al-Qaeda and Islamic State started attacking from neighboring Mali. Violence has spiraled since then, with over 13,500 people killed by extremists since Traoré took power, and more than 2 million internally displaced—one of the world's highest tolls relative to population. The security situation was the justification for both 2022 coups, as frustration mounted over the civilian government's inability to contain the insurgency. Traoré's junta promised to turn the tide, but the violence has only worsened. Entire swathes of the north and east are beyond government control, held by jihadist factions.

Traoré's government has pivoted sharply away from France, Burkina's former colonial power, and toward Russia. Russian mercenaries (rebranded as Africa Corps after the Wagner Group's implosion) are reportedly operating in the country, and Traoré has embraced Moscow and Beijing as partners. In early 2025, Burkina Faso, Mali, and Niger—all under military rule—withdrew from ECOWAS (the Economic Community of West African States) and formed the Alliance of Sahel States. It's a geopolitical realignment that leaves the region more fragmented and authoritarian.

Domestically, repression is intensifying. The junta has targeted activists, journalists, political opponents, and judicial officials with arbitrary detentions, disappearances, and forced conscription. Committees of civilian informants patrol Ouagadougou, ready to report dissidents. In December 2024, Traoré sacked Prime Minister Apollinaire Kyelem de Tambela and dissolved the government, replacing him with Rimtalba Jean Emmanuel Ouédraogo two days later. It was a power reshuffle, not a sign of political opening. Transparency International ranks Burkina Faso poorly on corruption, and the junta's opacity makes accountability impossible.

The international community has condemned the democratic rollback, but leverage is limited. The AU and UN have called for a return to constitutional order, but sanctions have been half-hearted. France's influence has evaporated, and the U.S. has little foothold. Burkina Faso is now in Russia's orbit, which means Traoré can ignore Western pressure. The question is whether the military can deliver security, or whether the country slides further into violence and authoritarianism. So far, the junta has failed to stem the jihadist tide, and the human cost is staggering.

**Bottom line:** Burkina Faso is a tragedy in slow motion. Traoré's junta has abandoned any pretense of democracy, extending its rule indefinitely and crushing dissent. The security situation is dire, and the pivot to Russia hasn't brought stability. With over 2 million displaced and no elections on the horizon, Burkina Faso is a cautionary tale of how military coups beget instability, not solutions. The Sahel is becoming Africa's most authoritarian corner, and Burkina Faso is at the center of it. Watch for whether the junta can deliver security, or whether the country fractures entirely. The outlook is grim.`,
    issues: [
      'Military junta extending rule to 2029 and dissolving election commission',
      'Deteriorating security with 13,500+ killed and 2 million displaced',
      'Pivot to Russia and withdrawal from ECOWAS',
      'Intensifying repression of dissent and forced conscription',
      'Failure to contain jihadist insurgency despite coup promises',
    ],
  },
  {
    name: 'Cambodia',
    lat: 12.5657,
    lng: 104.9910,
    summary: `Prime Minister Hun Manet, son of long-time strongman Hun Sen, is now two years into his tenure, and any hopes that Cambodia's Western-educated new leader would bring democratic renewal have been thoroughly dashed. In November 2025, Manet met South Korea's Foreign Minister Cho Hyun to discuss fighting online scams and transnational crime—Cambodia has become a hub for cyberscam operations that exploit tens of thousands of workers, often through human trafficking. The government denies the scale of the problem, and in October, authorities arrested prominent journalist Mech Dara for exposing the scam industry. It's classic Cambodian People's Party (CPP) playbook: repress critics, deny abuses, carry on.

Hun Manet succeeded his father, Hun Sen, in August 2023 after the CPP won a landslide in an election from which the main opposition party was banned. The Candlelight Party was dissolved on spurious grounds, leaving the CPP to run virtually unopposed. Hun Sen, who ruled Cambodia for 38 years, has stepped back to a ceremonial role as Senate president, but he still pulls strings behind the scenes. Manet, 47, is a West Point graduate and former army commander—he's technocratic, less bombastic than his father, but no reformer. Under his rule, political repression has intensified. Dozens of opposition figures are in prison, and the space for civil society has shrunk to nothing.

Cambodia's politics are an autocracy dressed up as democracy. The CPP controls the judiciary, military, and most of the economy. Opposition parties are tolerated only if they pose no real threat; the moment they do, they're dissolved or their leaders arrested. The 2023 election was a farce, with a turnout that was likely inflated and international observers barred. Freedom House rates Cambodia "not free," and Reporters Without Borders ranks it near the bottom on press freedom. Corruption is endemic—Cambodia scores poorly on Transparency International's index—and the CPP elite have enriched themselves through land grabs, casino concessions, and Chinese investment.

In November, tensions with Thailand flared again over a disputed border settlement. Despite a U.S. and Malaysia-brokered peace accord signed in October, the conflict has already reignited, killing at least 43 people and displacing over 300,000 in July's clashes. Border disputes with Thailand have simmered for decades, often tied to nationalist posturing and domestic political pressures on both sides. Cambodia's military has modernized with Chinese support, and Beijing is Phnom Penh's closest ally. China's influence is pervasive—infrastructure projects, military aid, diplomatic cover at the UN. Cambodia has become a client state, which gives Manet room to ignore Western criticism.

The opposition is scattered and weak. The Candlelight Party's leaders are in exile or under house arrest, and civil society is cowed. The next national elections are in 2028, and unless there's a dramatic shift, the CPP will win again. The question is whether Cambodia can sustain its economic growth—driven by garments, tourism, and construction—without political reform. The EU has withdrawn trade preferences over human rights concerns, and Western investment has cooled. But Chinese money keeps flowing, and the CPP has proven adept at weathering international pressure.

**Bottom line:** Hun Manet's Cambodia is his father's Cambodia with a fresh coat of paint. The CPP's grip is as tight as ever, repression is intensifying, and the opposition is crushed. Cambodia's democracy is dead, and the international community has limited leverage. China's patronage insulates Phnom Penh from Western pressure, and the CPP has no incentive to reform. Watch for whether the scam industry scandal grows, and whether the border tensions with Thailand escalate. For now, Cambodia is an authoritarian state with no prospect of change. The Manet era is more of the same, just with better English.`,
    issues: [
      'Intensified repression under Hun Manet with opposition crushed',
      'Cyberscam industry explosion and journalist arrests',
      'Border conflict with Thailand reigniting despite peace accord',
      'Chinese influence and client state status',
      'Sham elections and complete CPP dominance',
    ],
  },
  {
    name: 'Cameroon',
    lat: 7.3697,
    lng: 12.3547,
    summary: `On November 6th, 2025, Paul Biya was sworn in for his eighth term as President of Cameroon, at the age of 92. He is the world's oldest ruler, and he's been in power since 1982—43 years and counting. In his inauguration speech, Biya outlined his vision for "an emerging Cameroon by 2035," highlighting the role of youth and women. The irony is almost too much to bear: a 92-year-old man, who spends most of his time in Switzerland, talking about youth empowerment. Biya's re-election in October 2025 was declared by the constitutional court with 53.66% of the vote, defeating his former ally-turned-challenger, Issa Tchiroma, who secured 35.19%. Tchiroma, however, insists the victory was fraudulent, and post-election violence left at least five dead—opposition and civil society groups claim the toll is much higher.

Cameroon's politics are a gerontocracy propped up by patronage, military force, and a compliant judiciary. Biya's Cameroon People's Democratic Movement (CPDM) has ruled since independence in 1960 (Biya took over in 1982). A 2008 constitutional amendment abolished term limits, paving the way for Biya's eternal presidency. He rarely appears in public, governing largely from abroad, with power concentrated in the hands of a small circle of loyalists and family members. His health has been a topic of speculation for years—he's frail, and the question of succession looms large, though no clear heir apparent has emerged.

The October 2025 election was marred by violence and allegations of rigging. Tchiroma, a former minister who broke with Biya, claimed victory and accused the regime of vote tampering. Days of protests followed, and the government imposed a three-day lockdown. At least five people were killed by security forces, though the real number is likely higher—the government controls information tightly, and independent journalists face harassment. France, Cameroon's former colonial power, "took note" of the results and expressed concern over the violence. Canada was more critical, deploring the loss of life and urging respect for freedoms. The international community's response was muted, as always with Biya—he's a survivor, and no one expects him to change.

Cameroon faces multiple crises. The Anglophone regions (Northwest and Southwest) have been in armed conflict since 2017, with separatists fighting for independence. The government's response has been brutal—villages burned, civilians killed, and thousands displaced. The conflict has killed over 6,000 people and displaced hundreds of thousands. Boko Haram, based in neighboring Nigeria, continues to mount attacks in the Far North. Corruption is rampant—Cameroon ranks near the bottom on Transparency International's index—and infrastructure is crumbling despite oil revenues. Unemployment is high, especially among youth, and frustration is palpable.

Biya's age and health mean that succession is inevitable, but the process is opaque. There's no constitutional mechanism for a smooth transition, and insiders speculate that power will pass to someone within Biya's inner circle—possibly his son, Franck Biya, or a loyalist from the CPDM old guard. The risk is that Biya's death triggers instability, with factions vying for control. The Anglophone crisis could escalate, and the military—long a pillar of the regime—might fracture. A leaked document allegedly drafted inside the presidency listed Biya's "new government" to be unveiled after his inauguration, but details remain murky.

**Bottom line:** Paul Biya's Cameroon is a study in how one man can hold a country hostage for decades. At 92, he's the world's oldest ruler, presiding over a country wracked by conflict, corruption, and economic stagnation. His eighth term is a farce, and the post-election violence underscores how fragile the regime's legitimacy is. Succession is coming, whether Biya likes it or not, and when it does, Cameroon could face serious instability. The international community has long looked the other way, but the Anglophone crisis and democratic backsliding are impossible to ignore. Biya's legacy will be one of missed opportunities and entrenched authoritarianism. Cameroon deserves better.`,
    issues: [
      '92-year-old Biya sworn in for eighth term amid fraud allegations',
      'Post-election violence and opposition crackdown',
      'Anglophone crisis with 6,000+ killed and hundreds of thousands displaced',
      'Opaque succession and regime stability risks',
      'Endemic corruption and economic stagnation',
    ],
  },
  {
    name: 'Canada',
    lat: 56.1304,
    lng: -106.3468,
    summary: `Mark Carney, the former governor of the Bank of Canada and the Bank of England, is now Canada's prime minister—an astonishing turn of events in a year of political upheaval. Justin Trudeau announced his resignation on January 6th, 2025, after a political crisis that saw Finance Minister Chrystia Freeland abruptly resign in December 2024 and 21 Liberal MPs publicly demand Trudeau step down. Carney won the Liberal Party leadership race in March with over 85% of first-preference votes in a ranked-choice election, and was sworn in on March 14th—the first PM in Canadian history never to have held elected office. He immediately called a snap election for April 28th, and in a stunning turnaround, the Liberals won but fell 3 seats short of a majority, forming a minority government. Conservative leader Pierre Poilievre, who had led in polls for months, lost his own seat—Carleton, Ontario—by 4,513 votes after holding it for over two decades. Analysts called the Liberal comeback "unprecedented."

Canada's politics have been dominated by Trudeau for nearly a decade, but by late 2024, his government was exhausted. Inflation, housing costs, and immigration pressures had eroded Liberal support, and Trudeau's personal approval ratings were in the low 30s. The Conservatives, under Poilievre, had surged to double-digit leads, promising tax cuts, deregulation, and a harder line on immigration. The December 2024 crisis—Freeland's resignation over fiscal policy disagreements, followed by a caucus revolt—forced Trudeau out. Carney, a technocrat with sterling credentials (he led Canada through the 2008 financial crisis and later ran the Bank of England), was seen as a fresh face who could reset the party's brand.

The April 2025 election was framed around Donald Trump. The U.S. president's hostile foreign policy toward Canada—including threats of tariffs and annexation rhetoric—shifted Canadian public opinion sharply. Carney positioned himself as the steady hand who could navigate Trump's unpredictability, while Poilievre's Conservatives were painted as too aligned with Trump's populism. The gamble paid off: the Liberals won 169 seats, the Conservatives 121, the Bloc Québécois 32, and the NDP 16. Carney's minority government will need support from the NDP or Bloc to pass legislation, but it's a workable arrangement for now. Poilievre's loss of his own seat was a political earthquake, and the Conservative Party is now in disarray, searching for a new leader.

Canada faces significant challenges. Housing affordability is a national crisis, with prices in Toronto and Vancouver among the world's highest. Immigration levels have surged under Trudeau, and while economically beneficial, the pace has strained infrastructure and fueled backlash. Inflation has cooled, but the cost of living remains top of mind for voters. Relations with Trump's U.S. are fraught—trade, defense, and Arctic sovereignty are all flashpoints. Carney's background in finance gives him credibility on economic issues, but he's untested as a politician. His cabinet includes a mix of Trudeau-era veterans and new faces, and the challenge will be to govern effectively while managing a fractious minority parliament.

The NDP, led by Jagmeet Singh, holds the balance of power. Singh has propped up minority governments before, but he'll extract concessions—likely on climate policy, pharmacare, and dental care. The Bloc Québécois, led by Yves-François Blanchet, will push for Quebec's interests, particularly on language laws and federal transfers. Carney's government must navigate these competing demands while delivering on housing, affordability, and Trump. The next election could come at any time if the government loses a confidence vote, so Carney's first year will be a tightrope walk.

**Bottom line:** Canada's political earthquake is complete—Trudeau is out, Carney is in, and Poilievre lost his seat. It's a remarkable turnaround driven by Trump's threat and Carney's technocratic appeal. The Liberals have dodged a Conservative landslide, but governing as a minority will be tough. Housing, affordability, and relations with the U.S. are the defining issues, and Carney's honeymoon will be brief. Watch for whether he can keep the NDP onside, and whether the Conservatives can regroup under new leadership. Canada's politics are in flux, and 2025 will set the tone for the next decade.`,
    issues: [
      'Carney becomes PM without elected office experience after Trudeau resignation',
      'Liberals win minority government in unprecedented comeback',
      'Conservative leader Poilievre loses own seat after two decades',
      'Trump foreign policy driving Canadian political realignment',
      'Housing crisis and cost of living challenges',
    ],
  },
  {
    name: 'Chile',
    lat: -35.6751,
    lng: -71.5430,
    summary: `Chile goes to the polls on November 16th, 2025, to elect a new president, renew the Chamber of Deputies, and fill half the Senate. It's the first presidential election with compulsory voting since 2012, and President Gabriel Boric is constitutionally barred from seeking a consecutive second term. After four years of Boric's left-wing government, the race is wide open. Leading in the polls is Jeannette Jara, 51, representing the Unity for Chile coalition—she served as Boric's labor minister from 2022 to 2025 and has about 25% of first-round vote intention. On the right, former Deputy José Antonio Kast of the Republican Party, who lost to Boric in the 2021 runoff, leads among conservative candidates, though his support has slipped as other right-wing contenders have risen. It's shaping up to be a fragmented race, likely heading to a December runoff.

Boric's presidency has been a mixed bag. Elected in 2021 on a wave of post-2019 protest energy, promising to tackle inequality, reform pensions, and strengthen democracy, he's struggled to deliver. His approval rating hit a low of 27% in May 2025—the lowest of his presidency. The flagship achievement is pension reform: from August 2025, employers are required to make mandatory contributions to a new mixed pension system, passed with bi-partisan support in Congress. It's a significant overhaul of Chile's private pension system (inherited from the Pinochet era), but critics argue it doesn't go far enough. Public safety has emerged as a top concern—crime rates, particularly organized crime linked to drug trafficking, have surged, and Boric's government has struggled to respond effectively.

Boric's Broad Front (Frente Amplio) coalition, along with the Communist Party and other left-wing allies, governed with a minority in Congress, forcing compromises with the center-right. Two constitutional referendums, in 2022 and 2023, both failed—the first was a progressive constitution drafted by a left-dominated assembly, rejected by 62% of voters; the second was a conservative alternative, also rejected. The failed referendums exposed Chile's deep polarization and voters' wariness of radical change. Boric's government has been more cautious since, focusing on incremental reforms rather than sweeping transformations.

The right is ascendant. Kast's Republican Party is socially conservative, economically liberal, and nostalgic for Pinochet (though Kast distances himself from overt dictatorship apologia). Other right-wing candidates include Chile Vamos (the traditional center-right coalition) figures, and the race is crowded. On the left, Jara is trying to hold the coalition together, but she faces challenges from more radical candidates. The center, represented by parties like the Christian Democrats, has collapsed, squeezed between left and right. Compulsory voting, reintroduced after a 2023 reform, will boost turnout and could favor centrist or moderate candidates—previously, turnout was around 50%, skewing to more politically engaged (and polarized) voters.

Chile's democracy is robust—regular elections, strong institutions, independent judiciary—but the polarization is concerning. The 2019 protests, sparked by metro fare hikes and channeling decades of frustration over inequality, reshaped Chilean politics. The old party system has fractured, and new movements (Boric's Broad Front, Kast's Republicans) have risen. The economic outlook is stable—GDP growth is modest, inflation has cooled, and copper exports remain a pillar—but inequality is still glaring, and the pension system's inadequacy has left many retirees in poverty. The November election will determine whether Chile swings right, stays left, or finds a centrist compromise.

**Bottom line:** Chile's November 16th election is a referendum on Boric's left-wing experiment, and the verdict looks mixed. His pension reform is a genuine achievement, but his low approval ratings and the rise of the right suggest voters are ready for a change. Jara, his preferred successor, faces an uphill battle against a resurgent conservative movement. Compulsory voting adds unpredictability—who knows how the disengaged middle will break? Chile's democracy is healthy, but the polarization that emerged from 2019 hasn't healed. Watch for the first-round results on November 16th, and brace for a likely runoff in December. The right is favored, but Chile has surprised before.`,
    issues: [
      'November 16 presidential election with Boric barred from consecutive term',
      'Boric approval rating hits 27% low amid public safety concerns',
      'Pension reform achievement but limited broader policy success',
      'Right-wing resurgence with Kast and fragmented opposition',
      'Compulsory voting reintroduction adding electoral unpredictability',
    ],
  },
  {
    name: 'China',
    lat: 35.8617,
    lng: 104.1954,
    summary: `Xi Jinping's grip on power in China is as firm as ever, and November 2025 underscored that reality. An International Forum on Xi Jinping Thought on Socialism with Chinese Characteristics for a New Era opened in Beijing on November 12th, bringing together about 200 scholars and experts from 35 countries. The theme? "Changes unseen in a century and the governance of China." It's classic CCP pageantry—academic window dressing for what is, in practice, the ideological consolidation of Xi's rule. In late October, the Fourth Plenum of the 20th Central Committee convened, where Xi delivered a speech outlining the party's five-year plan. About 200 voting members and 170 alternates of the Central Committee gathered, and the meeting's details were tightly controlled, as always.

Xi's power is unprecedented in modern China. After abolishing presidential term limits in 2018, he secured a third term as General Secretary in 2022 and a third term as President in 2023. There's no visible succession plan, and at 72, Xi shows no sign of stepping aside. His control over the Chinese Communist Party (CCP) is total—the Politburo Standing Committee, the top decision-making body, is stacked with loyalists. The military, judiciary, propaganda apparatus, and security services all answer to him. The CCP's 100 million members are bound by loyalty oaths, and dissent is crushed swiftly. China is an authoritarian state, and Xi has made it more so during his tenure.

The military anti-corruption campaign has been a key tool of Xi's consolidation. Ahead of the Fourth Plenum, the Defense Ministry announced that nine senior officers suspected of corruption had been expelled from the party. Bloomberg estimates that at least 14 generals out of 79 appointed under Xi's leadership have been officially ousted. This isn't just about rooting out graft—it's about ensuring the People's Liberation Army (PLA) remains loyal to Xi personally. The purges also send a message: no one, not even top brass, is untouchable. Xi's anti-corruption drive, launched in 2012, has ensnared hundreds of thousands of officials, from local cadres to Politburo members. Critics argue it's as much about eliminating rivals as it is about clean governance.

China's domestic politics are opaque, but the key issues are clear: economic growth, technological self-sufficiency, and social stability. GDP growth has slowed—forecasts for 2025 are around 4-5%, down from the double-digit rates of past decades. The property sector, which accounts for a quarter of GDP, is in crisis, with major developers like Evergrande and Country Garden defaulting. Youth unemployment is officially around 15%, though the real figure is likely higher (the government stopped publishing youth unemployment data in 2023). Xi's "common prosperity" campaign aims to reduce inequality, but it's also been used to crack down on tech giants, private tutoring, and other sectors deemed too powerful or ideologically suspect.

On the international stage, Xi has positioned China as a counterweight to U.S. hegemony. The Belt and Road Initiative continues to expand China's global footprint, and Beijing has deepened ties with Russia, despite the war in Ukraine. Relations with the U.S. are tense—trade, Taiwan, the South China Sea, and tech competition are all flashpoints. Xi has made clear that Taiwan reunification is a core goal, and he's refused to rule out force. The CCP's 2027 centenary (of the PLA's founding) is often cited as a potential timeline for Taiwan action, though analysts are divided on whether Xi would risk a war. Domestically, Xinjiang's Uyghur population faces mass surveillance and detention, and Hong Kong's freedoms have been all but extinguished under the National Security Law.

**Bottom line:** Xi Jinping's China is a one-man show, and that's by design. His control over the CCP, military, and state apparatus is unprecedented, and there's no succession in sight. The anti-corruption campaign doubles as a loyalty test, and dissent is nonexistent. China's economic challenges—property crisis, youth unemployment, demographic decline—are mounting, but Xi's political position is secure. The Fourth Plenum and Xi Jinping Thought Forum are theater, reinforcing his ideological dominance. Internationally, China is assertive, challenging the U.S.-led order and backing Russia. Taiwan remains the most dangerous flashpoint, and Xi's ambitions there are non-negotiable. China is stable, but the brittleness beneath the surface is growing. Watch for economic policy shifts, and for any signs of military mobilization toward Taiwan. Xi's China is powerful, but it's also increasingly isolated and risk-prone.`,
    issues: [
      'Xi Jinping consolidating power with no succession plan',
      'Military anti-corruption purges ensuring PLA loyalty',
      'Economic slowdown with property crisis and youth unemployment',
      'Taiwan reunification ambitions and military modernization',
      'International tensions with U.S. and deepening Russia ties',
    ],
  },
  {
    name: 'Colombia',
    lat: 4.5709,
    lng: -74.2973,
    summary: `President Gustavo Petro is limping toward the end of his term, and November 2025 has been brutal. On November 11th, Petro ordered military strikes on structures belonging to FARC dissidents led by alias Ivan Mordisco in the Guaviare jungle. It's a dramatic shift for a president who campaigned on "Total Peace," promising dialogue over bullets. But after three years of failed negotiations, Petro is resorting to force, a move interpreted as a show of strength amid plummeting approval ratings—currently around 34%, his lowest since taking office. The strikes also highlight tensions between Petro and the military brass, who've long been skeptical of his peace overtures.

Relations with the United States have cratered. On November 12th, Petro ordered a halt to intelligence sharing with U.S. agencies, after the Trump administration launched missile strikes at boats in the Caribbean. Trump has accused Petro of being soft on drug traffickers and criticized his decision to spare Colombian rebel leaders involved in the drug trade from extradition. Petro fired back, calling Trump's "Trump Doctrine" (if such a plan exists) a "serious threat to the sovereignty and stability of Latin America." It's a high-stakes diplomatic rupture, and Colombia's military cooperation with the U.S.—decades in the making—is now in jeopardy.

Domestically, Petro's presidency is a mess. In 2025, he sacked his entire government following a campaign finance scandal involving political operator Armando Benedetti (whom Petro appointed chief of staff) and Laura Sarabia (whom he promoted to foreign minister). Both were embroiled in corruption allegations, and the reshuffle reeked of desperation. Petro's Historic Pact coalition, a left-wing alliance that brought him to power in 2022, is fractured. His approval has been underwater for over a year, and recent polls for the 2026 presidential election show Sergio Fajardo (center-left) leading with 26%, followed by Alexander López (Petro's ally) with 22%, and Alejandro De la Espriella (independent) with 19%. Petro himself is term-limited, but his unpopularity is dragging down his coalition.

Petro's "Total Peace" strategy aimed to negotiate with all armed groups—guerrillas, paramilitaries, and criminal gangs. Some ceasefires were achieved, but many have collapsed. The ELN (National Liberation Army) talks stalled, and FARC dissidents like Mordisco's faction have ramped up violence. Colombia's security situation remains dire—drug trafficking, illegal mining, and territorial control battles continue. The murder rate has ticked up, and rural areas are plagued by violence. The military, long the pillar of Colombia's counter-insurgency strategy, has been sidelined by Petro's peace agenda, creating friction. The November strikes suggest Petro is recalibrating, but it may be too late to salvage his presidency.

Economically, Colombia has weathered inflation better than neighbors, but growth is sluggish, and unemployment is high. Petro campaigned on social reform—health care, education, land redistribution—but legislative gridlock has thwarted much of his agenda. His proposals for tax hikes on the wealthy and oil companies have met fierce resistance from the business elite and conservative opposition. The 2026 elections loom, and Petro's successor will inherit a country still grappling with violence, inequality, and weak institutions. The right is resurgent, and the left's window may be closing.

**Bottom line:** Gustavo Petro's presidency is defined by unfulfilled promises and political chaos. His "Total Peace" strategy has failed, forcing him back to military strikes he once opposed. Relations with Trump's U.S. are in tatters, and a government reshuffle over corruption has deepened public cynicism. With approval in the mid-30s, Petro is a lame duck, and his coalition is fragmenting ahead of 2026. Colombia's next president will face the same intractable challenges—violence, inequality, and a fractured political landscape—but the left's moment has passed. Watch for whether Petro can salvage any legacy in his final year, and whether the right can consolidate around a candidate. Colombia's politics are as volatile as ever, and the peace Petro promised feels further away than ever.`,
    issues: [
      'Petro approval at 34% low with failed Total Peace strategy',
      'Military strikes on FARC dissidents after years of negotiations',
      'U.S. intelligence sharing halted amid Trump tensions',
      'Government reshuffle over corruption scandal',
      '2026 election dynamics with left coalition fragmenting',
    ],
  },
  {
    name: 'Costa Rica',
    lat: 9.7489,
    lng: -83.7534,
    summary: `President Rodrigo Chaves has spent 2025 locked in a bitter feud with Costa Rica's Supreme Electoral Tribunal (TSE), and it's become a full-blown constitutional crisis. In October 2025, the TSE requested that the Legislative Assembly remove Chaves' constitutional immunity to allow investigations into claims of "political belligerence" against him. The Assembly passed a motion supporting the TSE and condemning Chaves for "political violence," with backing from all factions except his own. In response, Chaves has doubled down on his attacks on the TSE, accusing it of overreach and political bias. It's a dangerous escalation in a country long considered Central America's most stable democracy.

Chaves, elected in 2022, has governed like a populist strongman, despite Costa Rica's democratic traditions. A former World Bank economist, he ran as an outsider, railing against corruption and promising to shake up the establishment. His Social Democratic Progress Party (PPSD) is small, and he's governed largely through executive decree, clashing repeatedly with the Assembly and judiciary. In July 2025, the Assembly appointed a special commission to assess the Supreme Court's request to strip Chaves of immunity over alleged corruption in a government contract award. Chaves has called it a political witch hunt, but the evidence is mounting.

Public trust in Chaves has collapsed. A November 2024 University of Costa Rica survey found that 38.5% of respondents have no confidence in the government—a 12-point rise from the previous year—with 77% expressing little to no trust in the Executive Branch. Rising crime and insecurity are top concerns, and Chaves' government has struggled to respond. Violent crime, particularly linked to drug trafficking, has surged, and Costa Rica—long a peaceful oasis—feels less safe. Chaves' bombastic style and confrontations with institutions have eroded his support, and he's now deeply unpopular.

Chaves can't seek re-election in February 2026 due to Costa Rica's constitutional ban on consecutive presidential terms, so he's backing his former planning and interior minister, Laura Fernández, who's running under the banner of the new Chaves-aligned Sovereign People's Party. At least 11 other candidates are expected to compete, including centrist and left-wing figures. Polls suggest a fragmented race, with no clear frontrunner. The traditional parties—National Liberation and Social Christian Unity—have been weakened by voter disillusionment, and new movements are proliferating.

In October 2025, Chaves restricted abortion to only life-threatening cases for the mother, after promising to do so at an Evangelical Alliance meeting. It's a sharp reversal for Costa Rica, which had relatively liberal abortion laws by Latin American standards. The move was a sop to evangelical voters, a growing political force, but it's also alienated moderates and women's rights groups. The 2025 Global Organized Crime Index details alleged bribes involving Chaves and suspected links between lawmakers and organized crime, painting a picture of deepening corruption under his watch.

**Bottom line:** Rodrigo Chaves' presidency has been a train wreck for Costa Rican democracy. His battles with the TSE, judiciary, and Assembly have paralyzed governance, and his approval ratings have cratered. The immunity stripping saga is a constitutional showdown, and if it proceeds, Chaves could face criminal charges. His support for Laura Fernández in 2026 is a bid to maintain influence, but the electorate is exhausted. Costa Rica's democracy is resilient, but Chaves has tested it like no president in decades. Watch for the February 2026 election—it'll be a referendum on Chaves' populist experiment, and on whether Costa Rica can restore institutional credibility. The outlook is uncertain, but one thing is clear: the Chaves era has left scars.`,
    issues: [
      'Constitutional crisis with TSE requesting immunity removal',
      'Public trust collapse with 77% expressing little confidence',
      'Rising crime and drug trafficking security concerns',
      'Abortion restrictions and evangelical influence',
      'Corruption allegations and organized crime links',
    ],
  },
  {
    name: 'Croatia',
    lat: 45.1,
    lng: 15.2,
    summary: `Croatia's politics in 2025 have been defined by the tug-of-war between Prime Minister Andrej Plenković and President Zoran Milanović—two men who loathe each other. In January 2025, Milanović won a second term as president with a crushing 75% in the runoff, the highest ever for a Croatian presidential candidate. It was a landslide repudiation of Plenković's Croatian Democratic Union (HDZ), which had backed rival candidate Dragan Primorac. Milanović, a former prime minister from the center-left Social Democratic Party (SDP), has spent his presidency feuding with Plenković, accusing the HDZ of systemic corruption and undermining democracy. The January result gave Milanović a powerful mandate, but Croatia's political system limits the president's powers—real authority sits with the prime minister and government.

Plenković, for his part, became the first Croatian PM to win a third consecutive term after the April 2024 parliamentary elections. The HDZ formed a right-wing coalition with the Homeland Movement (a far-right party) and returned Plenković as PM. The government was endorsed by parliament 79-61 in May 2024, and Plenković has proven remarkably durable, despite corruption scandals and public frustration. The HDZ has ruled Croatia for much of its post-independence history, and Plenković's coalition is built on patronage, rural support, and the backing of the Catholic Church. The opposition, led by Milanović's SDP and other center-left parties, has struggled to break HDZ's grip.

The clash between Milanović and Plenković isn't just personal—it's institutional. Milanović, as president, has authority over foreign policy and the armed forces, and he's used that to obstruct Plenković's government where he can. Plenković, meanwhile, has accused Milanović of overstepping his constitutional role and playing populist politics. In November 2024, Croatia's health minister was dismissed after being indicted on corruption charges, another blow to the HDZ's credibility. Corruption is a persistent problem—Croatia scores middling on Transparency International's index, and EU accession (Croatia joined in 2013) hasn't stamped it out. Public procurement, state-owned enterprises, and political patronage are all areas of concern.

Croatia's economy is tourism-dependent—the Adriatic coast draws millions of visitors annually—but the sector is seasonal and low-wage. GDP growth is modest, and youth unemployment, while improved from a decade ago, remains a concern. Croatia adopted the euro in 2023 and joined the Schengen Area, milestones that integrated the country further into the EU. But public satisfaction with the political elite is low, and Milanović's 75% victory was as much a protest vote against the HDZ as an endorsement of Milanović himself.

The next parliamentary elections are due by 2028, and Milanović has hinted he might return to party politics after his presidency ends in 2030. If he does, he could lead the SDP in a renewed challenge to the HDZ. Plenković's coalition is stable for now, but the Homeland Movement's presence on the right flank creates tensions. The far-right has grown in Croatia, as elsewhere in Europe, and the HDZ's alliance with them is pragmatic, not ideological. Watch for whether corruption scandals erode HDZ support, and whether Milanović can translate his presidential popularity into legislative gains for the left. Croatia's democracy is functional, but the polarization between Milanović and Plenković reflects deeper frustrations with the status quo.

**Bottom line:** Croatia's politics are a battle between Plenković's HDZ machine and Milanović's populist presidency. Milanović's 75% landslide in January was a rebuke to Plenković, but the PM's parliamentary majority means the government's grip is secure. Corruption scandals, economic stagnation, and public cynicism are the backdrop, and neither man offers a clear path forward. Croatia's democracy is solid, but the personal vendetta between president and PM is corroding trust in institutions. The next parliamentary elections will be pivotal—watch for whether Milanović can mobilize the left, or whether Plenković's coalition holds. For now, Croatia is stuck in a holding pattern, with two alpha males circling each other and little progress on the issues that matter to voters.`,
    issues: [
      'Milanović wins 75% landslide presidential re-election',
      'Plenković becomes first PM to win three consecutive terms',
      'President-PM feud over corruption and institutional powers',
      'HDZ coalition with far-right Homeland Movement',
      'Corruption concerns and health minister indictment',
    ],
  },
]

async function main() {
  console.log('🚀 Starting Politics write-ups insertion (Batch 2)\n')
  console.log(`📋 Countries: ${countriesData.map((c) => c.name).join(', ')}\n`)

  const results = []

  for (const countryData of countriesData) {
    try {
      console.log(`\n💾 Saving Politics summary for ${countryData.name}...`)

      await prisma.locationSummary.upsert({
        where: {
          name_type_category: {
            name: countryData.name,
            type: 'country',
            category: 'politics',
          },
        },
        update: {
          summary: countryData.summary,
          issues: JSON.stringify(countryData.issues),
          topStories: JSON.stringify([]),
          updatedAt: new Date(),
        },
        create: {
          name: countryData.name,
          type: 'country',
          country: countryData.name,
          lat: countryData.lat,
          lng: countryData.lng,
          category: 'politics',
          summary: countryData.summary,
          issues: JSON.stringify(countryData.issues),
          topStories: JSON.stringify([]),
          storyCount: 0,
        },
      })

      console.log(`✅ Saved Politics summary for ${countryData.name}`)
      console.log(`   - Length: ${countryData.summary.length} characters`)
      console.log(`   - Issues: ${countryData.issues.length}`)
      results.push(countryData.name)
    } catch (error) {
      console.error(`❌ Error saving Politics summary for ${countryData.name}:`, error)
    }
  }

  console.log('\n✅ Politics write-ups insertion complete!')
  console.log(`📊 Successfully saved: ${results.length}/${countriesData.length} countries`)
  console.log(`🏛️  Completed: ${results.join(', ')}`)
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
