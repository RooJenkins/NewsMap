import 'dotenv/config'
import { PrismaClient } from '@prisma/client'
import Anthropic from '@anthropic-ai/sdk'

const prisma = new PrismaClient()

const COUNTRIES = {
  UAE: {
    name: 'United Arab Emirates',
    type: 'country',
    lat: 23.4241,
    lng: 53.8478,
    country: 'United Arab Emirates'
  },
  UK: {
    name: 'United Kingdom',
    type: 'country',
    lat: 55.3781,
    lng: -3.4360,
    country: 'United Kingdom'
  },
  US: {
    name: 'United States',
    type: 'country',
    lat: 37.0902,
    lng: -95.7129,
    country: 'United States'
  },
  URUGUAY: {
    name: 'Uruguay',
    type: 'country',
    lat: -32.5228,
    lng: -55.7658,
    country: 'Uruguay'
  },
  UZBEKISTAN: {
    name: 'Uzbekistan',
    type: 'country',
    lat: 41.3775,
    lng: 64.5853,
    country: 'Uzbekistan'
  },
  VENEZUELA: {
    name: 'Venezuela',
    type: 'country',
    lat: 6.4238,
    lng: -66.5897,
    country: 'Venezuela'
  },
  VIETNAM: {
    name: 'Vietnam',
    type: 'country',
    lat: 14.0583,
    lng: 108.2772,
    country: 'Vietnam'
  },
  YEMEN: {
    name: 'Yemen',
    type: 'country',
    lat: 15.5527,
    lng: 48.5164,
    country: 'Yemen'
  },
  ZIMBABWE: {
    name: 'Zimbabwe',
    type: 'country',
    lat: -19.0154,
    lng: 29.1549,
    country: 'Zimbabwe'
  }
}

const NOVEMBER_2025_POLITICS_CONTEXTS = {
  UAE: `UNITED ARAB EMIRATES - POLITICS (NOVEMBER 2025):

AUTHORITARIAN GOVERNANCE STRUCTURE:
- UAE is an authoritarian state with no democratically elected institutions
- No political parties exist; no formal commitment to free speech
- President Mohammed bin Zayed Al Nahyan (MBZ) holds executive power
- Federal system of seven emirates, each with hereditary rulers
- Supreme Council of Rulers (7 emirs) elects President and Vice President for renewable five-year terms
- Presidential elections not open to public - internal royal process

FEDERAL NATIONAL COUNCIL (FNC):
- Advisory body with 40 members
- Half (20 members) elected by limited electoral college every 4 years
- Other half appointed by emirate rulers
- Most recent election: October 2023
- Next election expected: 2027
- FNC has consultative role only - no legislative power
- Limited reforms have expanded electoral college from 6,000+ to broader participation

POLITICAL INSTITUTIONS:
- No separation of powers in Western democratic sense
- Judicial system not independent - courts answer to rulers
- Freedom House rates UAE as "Not Free"
- No opposition parties or meaningful political competition
- Royal families of Abu Dhabi and Dubai dominate federal politics
- Prime Minister: Sheikh Mohammed bin Rashid Al Maktoum (also ruler of Dubai)

KEY POLITICAL DYNAMICS (2025):
- MBZ consolidating UAE's role as regional power broker
- Balancing relations between US, China, Iran, and Saudi Arabia
- Using economic leverage and soft power rather than military might
- Hosting COP28 (2023) enhanced international prestige
- Federal government investing heavily in AI, space, renewable energy
- Vision 2030 economic diversification strategy ongoing
- No meaningful political liberalization despite economic modernization

SUCCESSION AND STABILITY:
- Crown Prince of Abu Dhabi: Sheikh Khaled bin Mohamed bin Zayed Al Nahyan
- Smooth succession mechanisms within royal families
- Political stability high - no organized opposition or dissent tolerated
- Security services maintain tight control over political expression
- Expatriates comprise 88% of population - no political rights

HUMAN RIGHTS AND POLITICAL FREEDOM:
- Severe restrictions on freedom of expression and assembly
- Political prisoners held without due process
- Cybercrime laws used to suppress dissent
- No independent civil society organizations
- Media heavily censored and state-controlled`,

  UK: `UNITED KINGDOM - POLITICS (NOVEMBER 2025):

STARMER LEADERSHIP CRISIS:
- November 2025: Reports emerge of Labour MPs plotting to replace Keir Starmer as PM
- Just 17% approve of Starmer's job performance (YouGov polling)
- 73% disapprove - catastrophic approval ratings for newly elected PM
- Wes Streeting (Health Secretary) named as potential challenger
- Streeting publicly denied reports as "self-defeating nonsense"
- Crisis erupts just 2 weeks before crucial November 26 budget announcement
- Labour MPs gloomy about polls consistently showing Reform UK ahead of Labour

ECONOMIC AND FISCAL CHALLENGES:
- November 26 budget expected to break key election pledge
- Labour plans to increase basic rate of income tax for first time in half century
- Attempting to fill "fiscal black hole" inherited from Conservatives
- Unemployment risen to 5% (highest since 2016) - up from 4.8%
- Inflation remains stubbornly high
- Economic outlook subdued
- Growth projections disappointing

ELECTORAL CONTEXT:
- Labour won landslide victory in July 2024 general election
- Keir Starmer became PM with massive parliamentary majority
- Campaign focused on "change" after 14 years of Conservative government
- Only 17 months into government, facing catastrophic poll collapse
- Next general election due by 2029

REFORM UK SURGE:
- Nigel Farage's Reform UK party now leading in polls
- Right-wing populist party capitalizing on Labour's difficulties
- Farage positioned as anti-establishment outsider
- Reform breakthrough threatens Labour's "Red Wall" seats
- Conservative Party also struggling to define post-election identity

LABOUR PARTY MORALE:
- MPs "worn down by 16 months of unpopular policies and unforced errors"
- Winter fuel payment cuts deeply unpopular with elderly voters
- Welfare reforms controversial and poorly communicated
- Many Labour MPs "resigned to serving just a single term in parliament"
- Disconnect between party leadership and backbenchers growing

INSTITUTIONAL CONTEXT:
- Parliamentary system with PM requiring confidence of House of Commons
- Labour holds approximately 400 of 650 seats - massive majority
- Despite majority, internal dissent and low approval creating instability
- Cabinet government tradition - PM vulnerable to ministerial resignations
- 1922 Committee rules don't apply (Labour party has different mechanisms)
- Labour MPs can trigger leadership election with sufficient support

OPPOSITION PARTIES:
- Conservative Party led by Rishi Sunak in opposition
- Conservatives rebuilding after 2024 election defeat
- Liberal Democrats third party with 70+ seats
- SNP dominant in Scotland but facing own challenges
- Constitutional debates over Scottish independence ongoing

POLICY CHALLENGES:
- NHS waiting lists at record highs despite increased funding promises
- Housing crisis worsening - supply not keeping pace with demand
- Immigration numbers remain high despite promises to reduce
- UK-EU relations still challenging post-Brexit
- Cost of living crisis affecting middle and working class families`,

  US: `UNITED STATES - POLITICS (NOVEMBER 2025):

HISTORIC GOVERNMENT SHUTDOWN ENDS:
- November 12, 2025: Trump signs bill ending 43-day government shutdown
- Longest shutdown in American history (previous record: 35 days in 2018-19)
- House voted 222-209 to pass funding bill
- 6 Democrats joined Republicans voting yes; 2 Republicans joined Democrats voting no
- Approximately 900,000 federal employees furloughed
- Additional 2 million worked without pay throughout shutdown
- Legislation funds government through January 30, 2026 - another shutdown looms

CAUSES OF THE SHUTDOWN:
- Dispute over spending levels and policy riders
- Trump administration demanding deeper cuts to domestic programs
- SNAP food benefits disrupted - people ran out of food
- Air travel chaos: FAA forced to cut flights due to air traffic controller shortages
- Thousands of flights delayed or canceled nationwide
- Government services severely disrupted for 43 days

ACA SUBSIDIES CRISIS:
- Health insurance subsidies for 24 million Americans under Affordable Care Act expire end of year
- Trump administration announced will not renew subsidies
- Funding bill did NOT resolve this crisis
- 24 million Americans face losing health coverage or massive premium increases
- Democrats furious at exclusion from funding deal
- Issue becoming major flashpoint for 2026 midterms

TRUMP'S SECOND TERM:
- Trump began second term January 20, 2025 after 2024 election victory
- Republican trifecta: control of White House, Senate, and House
- House majority narrow - just 8-seat margin creating governing challenges
- Trump pursuing aggressive agenda: immigration enforcement, deregulation, spending cuts
- Cabinet more ideologically aligned than first term
- Using executive orders extensively

CONGRESSIONAL DYNAMICS:
- Senate Republicans hold 53-47 majority
- House Republicans 222-213 majority (very narrow)
- Speaker of the House: Mike Johnson (Louisiana)
- Senate Majority Leader: John Thune (South Dakota)
- Congressional Republicans divided between MAGA hardliners and traditional conservatives
- Freedom Caucus demanding deeper spending cuts
- Moderate Republicans concerned about 2026 re-election

DEMOCRATIC OPPOSITION:
- Democrats shell-shocked after 2024 defeat
- Recriminations about Biden's late withdrawal, Harris campaign strategy
- Party searching for new direction and leadership
- Senate Minority Leader: Chuck Schumer (New York)
- House Minority Leader: Hakeem Jeffries (New York)
- Progressive wing vs. moderate wing tensions
- 2026 midterms seen as crucial test

UPCOMING POLITICAL CALENDAR:
- January 30, 2026: Current funding expires - another shutdown possible
- November 2026: Midterm elections for all House seats, one-third of Senate
- Historically, party in White House loses seats in midterms
- Democrats hoping for "comeback" after Trump's first year chaos
- All 435 House seats up for election
- 33 Senate seats up (mix of Democrats and Republicans)

KEY POLITICAL FAULT LINES:
- Government spending and debt ceiling battles
- Healthcare coverage and ACA subsidies
- Immigration enforcement and border security
- Ukraine aid and foreign policy divisions
- Abortion rights post-Dobbs decision
- Economic inequality and inflation
- Climate policy and energy production
- China competition and trade policy

INSTITUTIONAL STRESS:
- Lengthy shutdown exposed fragility of federal government operations
- Public trust in government at historic lows
- Partisan polarization at peak levels
- Supreme Court controversies over ethics and legitimacy
- Debates over filibuster, court packing, electoral reform`,

  URUGUAY: `URUGUAY - POLITICS (NOVEMBER 2025):

ORSI'S FIRST YEAR IN OFFICE:
- Yamandú Orsi inaugurated March 1, 2025 as President
- Won November 24, 2024 runoff election with 49.8% vs. 45.9% for Álvaro Delgado
- Broad Front (Frente Amplio) coalition returned to power after 5 years in opposition
- 90% voter turnout - remarkable democratic participation
- Peaceful transfer of power from center-right National Party

ORSI'S BACKGROUND AND LEADERSHIP:
- 57-year-old former history teacher
- Two-term mayor with strong local government experience
- Political heir to José "Pepe" Mujica (former president, global icon)
- Campaigned on "modern left" platform
- Promised "change that will not be radical"
- Known for pragmatic, consensus-building approach

GOVERNING COALITION:
- Broad Front coalition of left-wing parties
- Includes socialists, communists, former Tupamaros guerrillas, social democrats
- Previously governed 2005-2020 under Tabaré Vázquez and Pepe Mujica
- Coalition proved stable and effective during previous terms
- Must work with opposition-controlled Senate committees

POLICY PRIORITIES (FIRST YEAR):
- Tackling homelessness and poverty reduction
- Crime reduction - major campaign issue for voters
- Economic growth while maintaining social programs
- Housing construction and urban development
- Education reform and quality improvement
- Healthcare system strengthening

OPPOSITION LANDSCAPE:
- National Party (Partido Nacional/Blancos) - main center-right opposition
- Colorado Party - traditional center-right party
- Opposition acceptance of election results - no fraud claims
- Mature democratic norms - losers conceded gracefully
- Coalition government experience helps facilitate dialogue

ELECTORAL SYSTEM:
- Presidential system with direct elections
- Two-round runoff system ensures majority support
- Proportional representation for legislature
- Five-year presidential term (one re-election allowed)
- General Assembly (bicameral): Chamber of Representatives and Senate
- Next presidential election: October 2029

POLITICAL INSTITUTIONS:
- Strong democratic institutions rated "Full Democracy" by Freedom House
- Independent judiciary and free press
- Low corruption levels by Latin American standards
- Professional civil service
- Transparent electoral processes
- Strong civil society and civic engagement

REGIONAL CONTEXT:
- Uruguay stands out for democratic stability in Latin America
- Avoided populist extremism afflicting neighbors
- No polarization comparable to Brazil, Argentina, or Chile
- Pragmatic center-left and center-right alternate power peacefully
- Consensus on core democratic values and institutions

KEY CHALLENGES FACING ORSI:
- Economic growth averaging only 1-2% annually
- Organized crime and drug trafficking concerns
- Youth unemployment around 20%
- Pension system sustainability
- Balancing social spending with fiscal responsibility
- Mercosur trade bloc negotiations
- Relations with China and United States
- Climate change impacts on agriculture

POLITICAL CULTURE:
- Strong democratic traditions dating to early 20th century
- Culture of dialogue and compromise
- Limited political violence or extremism
- High levels of social trust
- Progressive social policies (marijuana legalization, same-sex marriage, abortion rights)
- Political debates focused on pragmatic policy questions

UPCOMING POLITICAL EVENTS:
- Parliamentary elections scheduled alongside presidential elections in 2029
- Municipal elections for departmental governments
- Broad Front internal dynamics and faction management
- Opposition's strategy to rebuild for next election cycle`,

  UZBEKISTAN: `UZBEKISTAN - POLITICS (NOVEMBER 2025):

MIRZIYOYEV'S LEADERSHIP:
- President Shavkat Mirziyoyev in power since 2016 (after Islam Karimov's death)
- Re-elected in 2021 with 80.1% of vote
- New constitution approved 2023 extends term limits - can serve until 2040
- Concentrated power in presidency
- "New Uzbekistan" reform agenda balancing economic opening with political control
- Daughter Saida Mirziyoyeva heads Presidential Administration since 2025

GOVERNMENT RESTRUCTURING (NOVEMBER 2025):
- November 1: Cut 2,141 managerial positions in ministries and agencies
- 1,863 positions eliminated from budget organizations
- 278 positions cut from extra-budgetary funds
- Reforms aim to introduce digital technologies
- Optimize government functions
- Increase private sector involvement
- Streamline bureaucracy and reduce corruption

US-UZBEKISTAN SUMMIT (NOVEMBER 2025):
- November 6: Trump and Mirziyoyev summit in Washington
- Uzbekistan announced billions in US investments
- $8.5 billion contract for 22 Boeing 787 Dreamliner aircraft
- 30-day visa-free travel for US citizens starting 2026
- Deepening strategic partnership with United States
- Balancing relations between US, Russia, and China

POLITICAL SYSTEM:
- Presidential republic with authoritarian characteristics
- Mirziyoyev holds overwhelming executive power
- Bicameral legislature (Oliy Majlis) with limited powers
- Elections held but not free or fair by international standards
- Opposition parties restricted or banned
- Media controlled by state or government-affiliated entities
- Freedom House rates Uzbekistan as "Not Free"

DOMESTIC POLITICAL DYNAMICS:
- No meaningful opposition or political competition
- Civil society tightly controlled
- Security services (SNB) maintain surveillance state
- Gradual economic liberalization without political opening
- Limited space for independent voices or dissent
- Human rights situation remains poor despite some reforms

REFORMS UNDER MIRZIYOYEV:
- Released some political prisoners after 2016
- Ended forced labor in cotton harvest
- Improved relations with neighbors (Kazakhstan, Kyrgyzstan, Tajikistan)
- Economic reforms: currency convertibility, reduced bureaucracy
- Opened country to tourism and foreign investment
- "New Uzbekistan" rhetoric emphasizes modernization
- However, political system remains fundamentally authoritarian

PARLIAMENT AND ELECTIONS:
- Legislative Chamber (lower house): 150 members
- Senate (upper house): 100 members
- Most recent parliamentary elections: October 2024
- Elections not competitive - government controls outcomes
- Five registered parties all support president
- No genuine opposition representation

REGIONAL GEOPOLITICS:
- Central Asia's most populous country (36 million)
- Strategic location between Russia, China, and Afghanistan
- Multi-vector foreign policy balancing great powers
- Member of Shanghai Cooperation Organisation
- Not member of Russian-led EAEU (Eurasian Economic Union)
- Maintaining sovereignty while managing Russian influence

KEY POLITICAL ISSUES:
- Presidential succession unclear despite constitutional changes
- Regional tensions (Fergana Valley, Karakalpakstan autonomy)
- September 2022: Protests in Karakalpakstan violently suppressed
- Border demarcation disputes with Kyrgyzstan
- Water and energy resources management
- Cotton sector reforms and agricultural policy
- Corruption remains endemic despite anti-corruption campaigns

UPCOMING POLITICAL CALENDAR:
- 2026: Continued implementation of "New Uzbekistan" reforms
- Next presidential election scheduled for 2026
- Outcome predetermined - Mirziyoyev will win
- Constitutional changes allow him to serve two more seven-year terms
- Political system unlikely to democratize substantially`,

  VENEZUELA: `VENEZUELA - POLITICS (NOVEMBER 2025):

MADURO'S DISPUTED THIRD TERM:
- January 10, 2025: Nicolás Maduro sworn in for third presidential term
- July 2024 election widely considered fraudulent
- Maduro's government claimed victory with 51% of vote
- Opposition published precinct-level tabulations showing Edmundo González won 67%
- US, EU, and most Latin American countries rejected results
- International observers documented massive irregularities
- Venezuela's CNE (electoral council) never released detailed vote tallies

OPPOSITION IN DISARRAY:
- María Corina Machado remains in hiding inside Venezuela
- Won 2025 Nobel Peace Prize for democratic resistance
- Machado barred from running in 2024 election
- Edmundo González Urrutia was opposition unity candidate
- González fled to exile in Spain in September 2024 after arrest warrant
- Venezuela's attorney general charged González with conspiracy

OPPOSITION SPLITS (NOVEMBER 2025):
- Unitary Platform (PUD) divided over electoral participation strategy
- May and July 2025: Legislative and municipal elections held
- Most PUD parties boycotted elections
- Henrique Capriles faction encouraged participation
- Machado camp accused participants of "cooperating with regime"
- Bitter internal recriminations and accusations of betrayal
- Opposition unity fractured

REPRESSION AND HUMAN RIGHTS:
- As of September 29, 2025: 827 political prisoners (Foro Penal)
- Widespread arrests after July 2024 election protests
- Torture and forced disappearances documented
- Media censorship and internet restrictions
- NGOs and civil society under pressure
- Freedom House rates Venezuela "Not Free"

US ACTIONS (NOVEMBER 2025):
- Trump administration conducting strikes on alleged drug boats
- US forces gathering in Caribbean region
- State Department offering $50 million reward for Maduro's arrest
- Sanctions on Venezuelan oil maintained
- Recognition of Juan Guaidó as interim president ended
- US policy shifting toward more aggressive posture

MADURO GOVERNMENT STRUCTURE:
- PSUV (United Socialist Party) dominates all institutions
- National Assembly rubber-stamps Maduro decisions
- Supreme Court (TSJ) controlled by regime loyalists
- Armed forces key to Maduro's survival
- Cuban advisors embedded in intelligence services
- Colectivos (armed pro-government gangs) enforce control

ECONOMIC COLLAPSE CONTINUES:
- Hyperinflation reduced but economy remains shattered
- GDP declined approximately 75% from 2013-2020
- Over 7 million Venezuelans fled country (largest refugee crisis in hemisphere)
- Oil production at fraction of historical levels
- Informal dollarization of economy
- Widespread poverty and humanitarian crisis

INTERNATIONAL ISOLATION:
- Venezuela suspended from Mercosur
- OAS invoked Democratic Charter
- International Criminal Court investigating crimes against humanity
- China and Russia provide economic and diplomatic support
- Cuba maintains close alliance
- Iran provides technical assistance
- Turkey and other countries maintain some economic ties

REGIONAL DYNAMICS:
- Colombia's Petro government attempted mediation - failed
- Brazil's Lula criticized election but maintains dialogue
- Argentina's Milei government strongly opposes Maduro
- Caribbean countries divided on Venezuela
- Lima Group countries rejected election results

UPCOMING CHALLENGES:
- 2026: More legislative elections possible
- Opposition must decide participation strategy
- Economic crisis driving continued emigration
- Humanitarian situation deteriorating
- Military cohesion essential for regime survival
- US pressure likely to increase under Trump
- International Criminal Court proceedings advancing`,

  VIETNAM: `VIETNAM - POLITICS (NOVEMBER 2025):

TO LAM'S POWER CONSOLIDATION:
- General Secretary To Lam emerged as paramount leader after Nguyen Phu Trong's death (July 2024)
- Most powerful position: Communist Party General Secretary
- Previously served as President and Minister of Public Security
- Relinquished presidency in October 2024 to Luong Cuong
- Positioning to consolidate power at 14th CPV Congress (January 2026)
- Creating executive-style general secretary role - more proactive leadership

ADMINISTRATIVE "REVOLUTION":
- Cutting provinces from 63 to just 34
- Massive streamlining of party-state apparatus
- Working with Prime Minister Pham Minh Chinh
- Creating leaner, more efficient government
- January 2025 CPV Central Committee plenum set ambitious targets
- Revised 2025 GDP growth target from 6.5% to 8%
- Goal: double-digit annual GDP growth for 2026-2030

RELATIONS WITH CHINA (NOVEMBER 2025):
- November 13, 2025: To Lam received Li Shulei (CPC Central Committee)
- 20th theory seminar between CPV and CPC
- Maintaining complex relationship: economic partner, historic rival
- South China Sea disputes ongoing
- Balancing Chinese influence with multi-directional foreign policy

COMMUNIST PARTY STRUCTURE:
- CPV maintains monopoly on political power
- No opposition parties permitted
- Democratic centralism principle
- Politburo (15-19 members) makes key decisions
- Central Committee (200+ members) meets twice yearly
- Party Congress every five years sets direction
- 14th Party Congress scheduled January 2026

POLITICAL INSTITUTIONS:
- National Assembly: unicameral legislature, 500 deputies
- Elections held but CPV pre-approves all candidates
- Small number of "independent" candidates allowed with party permission
- Prime Minister heads government (currently Pham Minh Chinh)
- President ceremonial head of state (currently Luong Cuong)
- Cabinet ministers implement party decisions
- Judiciary not independent - party controls courts

"BLAZING FURNACE" ANTI-CORRUPTION CAMPAIGN:
- Ongoing since Trong launched it in 2016
- Continued under To Lam despite his security background
- Targeted high-level officials, business leaders, party members
- Used for both genuine anti-corruption and political purges
- Removed potential rivals to leadership
- Created fear within bureaucracy
- Economic side effects: officials reluctant to make decisions

LEADERSHIP DYNAMICS:
- "Four Pillars" power structure traditionally balanced party, government, presidency, assembly
- To Lam centralizing power in general secretary position
- Pham Minh Chinh (Prime Minister) focused on economic management
- Potential rivalry or cooperation between To Lam and Chinh
- Younger generation of leaders rising but still within party framework

CIVIL SOCIETY AND DISSENT:
- Severe restrictions on political expression
- Internet censorship and surveillance
- Independent journalists and bloggers jailed
- Facebook and social media monitored
- Environmental and land rights protests occasionally tolerated if non-political
- Catholic Church maintains limited space
- Overseas Vietnamese dissidents closely watched
- Freedom House rates Vietnam "Not Free"

UPCOMING 14TH PARTY CONGRESS (JANUARY 2026):
- Will formalize leadership structure for next five years
- To Lam expected to secure general secretary position
- Key personnel decisions for Politburo and Central Committee
- Economic plan for 2026-2030
- Foreign policy direction
- Social and cultural policies
- Anti-corruption campaign future

POLITICAL CHALLENGES:
- Managing economic growth while maintaining party control
- Youth unemployment and emigration
- South China Sea tensions
- Balancing US and China relations
- Environmental degradation and protests
- Corruption despite campaigns
- Succession planning within gerontocracy
- Adapting Marxist-Leninist ideology to market economy

FOREIGN POLICY AND GEOPOLITICS:
- "Bamboo diplomacy" - bending but not breaking
- Relations with US improved (Comprehensive Strategic Partnership 2023)
- Managing China relationship crucial
- ASEAN member state
- TPP/CPTPP participant
- Attracting foreign investment (Samsung, Apple supply chains)
- Not formally aligned with any major power`,

  YEMEN: `YEMEN - POLITICS (NOVEMBER 2025):

HOUTHI DOMINANCE:
- Houthis (Ansar Allah) control Sanaa (capital) and most populous regions
- Rule one-third of Yemen's territory with two-thirds of population
- Emerged as most powerful political and military actor
- De facto Houthi victory even without controlling entire country
- Abdul-Malik al-Houthi leads movement from hiding
- Established parallel government institutions in north

PRESIDENTIAL LEADERSHIP COUNCIL (PLC):
- Internationally recognized government
- Rashad al-Alimi chairs eight-member Presidential Leadership Council
- Formed April 2022 to replace President Abdrabbuh Mansur Hadi
- Loose-knit coalition of Yemeni political and military factions
- Backed by Saudi Arabia and UAE (sometimes competing interests)
- Controls southern regions including Aden (temporary capital)
- Weak central authority - regional commanders hold real power

STALLED PEACE PROCESS (NOVEMBER 2025):
- UN Special Envoy Hans Grundberg expressed frustration in May 2025
- 2022 ceasefire still technically holding but fragile
- 2023 peace roadmap agreed "in principle" by Houthis and PLC
- Roadmap promises: permanent ceasefire, oil revenue sharing, political framework
- Negotiated with Saudi and Omani support
- Implementation stalled - neither side fully committed
- Local violence continues despite national ceasefire

GAZA CEASEFIRE IMPACT (OCTOBER 2025):
- October 8: Israel-Hamas ceasefire announced
- Houthis stopped attacks on Israel and Red Sea shipping
- October 15: Grundberg told diplomats Gaza ceasefire creates "opportunity to reinforce regional stability"
- Window to "renew momentum toward peace in Yemen"
- Riyadh meeting: UN envoy met with Saudi, UAE, P5 ambassadors
- Coordinated approach to leverage Gaza ceasefire for Yemen peace

FRAGMENTED POLITICAL LANDSCAPE:
- Multiple power centers: Houthis, PLC, STC, tribal leaders
- Southern Transitional Council (STC) seeks southern independence
- UAE backs STC - tensions with Saudi-backed PLC
- Tribal confederations maintain local autonomy
- Al-Qaeda in Arabian Peninsula (AQAP) still present
- Islamic State remnants in some areas
- No unified state authority across Yemen

REGIONAL ACTORS:
- Saudi Arabia: Led intervention 2015-present, now seeking exit
- UAE: Intervened 2015, withdrew ground forces 2019, maintains influence
- Iran: Provides support to Houthis (weapons, advisors, diplomatic)
- Oman: Key mediator between Houthis and Saudi Arabia
- United States: Counterterrorism focus, supports Saudi coalition
- UK: Supports Saudi coalition, provides military assistance

HUMANITARIAN CATASTROPHE:
- Over a decade of civil war
- World Bank: 17+ million face food insecurity (half the population)
- 18 million lack access to safe water or sanitation
- Healthcare system collapsed
- Education disrupted for millions of children
- Cholera outbreaks recurrent
- Economy shattered - currency collapse in south

HOUTHI GOVERNANCE:
- Established taxation systems in controlled areas
- Zakat (religious tax) collection
- Control of ports (Hodeidah) generates revenue
- Repressive social controls (especially on women)
- Recruited thousands of child soldiers
- Crackdown on dissent and civil society
- Religious education mandatory in schools

PLC GOVERNANCE CHALLENGES:
- Weak institutions and limited capacity
- Corruption endemic
- Salary payments irregular for government employees
- Basic services barely functioning
- Competition between PLC members
- Saudi and Emirati interference
- Southern separatist pressure

POLITICAL ACTORS AND PARTIES:
- Houthis: Zaidi Shia movement, tribal base, revolutionary ideology
- General People's Congress (GPC): Former ruling party split between factions
- Yemeni Socialist Party: Southern-based leftist party
- Al-Islah: Sunni Islamist party aligned with Muslim Brotherhood
- Southern Movement: Coalition seeking southern independence
- Tribal confederations: Bakil and Hashid most influential

UPCOMING POLITICAL DYNAMICS:
- Potential for renewed peace talks leveraging Gaza ceasefire
- Saudi Arabia eager to exit militarily but maintain influence
- Houthis unlikely to give up gains without guarantees
- Southern independence question unresolved
- Oil revenue sharing key sticking point
- UN Security Council resolutions largely ignored
- 2026: Possible international conference if momentum builds`,

  ZIMBABWE: `ZIMBABWE - POLITICS (NOVEMBER 2025):

MNANGAGWA'S 2030 TERM EXTENSION:
- October 2025: ZANU-PF endorsed extending Mnangagwa's term to 2030
- Annual ZANU-PF conference delegates instructed government to draft constitutional amendments
- Mnangagwa currently 83 years old
- Constitution requires him to leave office in 2028 after two elected terms
- 2030 extension would add two extra years
- Constitutional amendment process will face legal challenges

INTERNAL ZANU-PF POWER STRUGGLE:
- Mnangagwa loyalists ("Lacoste" faction) pushing term extension
- Vice President Constantino Chiwenga (71) and allies openly resisting
- Chiwenga expected to challenge for presidency in 2028
- ZANU-PF spokesperson Christopher Mutsvangwa: "Zimbabwe is not a papacy"
- No constitutional provision for automatic vice president succession
- Factional battles within ruling party intensifying
- Military veterans divided between camps

"COME HOME" CAMPAIGN (NOVEMBER 2025):
- ZANU-PF claims 250,000 opposition members joined party
- "Dzokai Kumusha/Buyani Ekhaya" program targeting opposition
- November 12, 2025: Mnangagwa scheduled to meet 5,000 "returnees"
- Opposition disputes numbers, calls it propaganda
- ZANU-PF attempting to present image of growing support

CORRUPTION AND STATE CAPTURE:
- Businessman Kudakwashe Tagwirei pledged monthly $150,000 to ZANU-PF Harare structures
- Tagwirei connected to fuel cartels and Sakunda Holdings
- Concerns about oligarchic control over party and government
- Chinese nationals publicly declaring support for "Mnangagwa 2030"
- Videos showing foreign interference in domestic politics

OPPOSITION RESPONSE:
- Opposition parties promising court challenges to constitutional amendments
- Lawyer Tendai Biti: Will "defend the Constitution"
- Citizens Coalition for Change (CCC) led by Nelson Chamisa
- CCC weakened by internal divisions and state harassment
- August 2023 election widely criticized as neither free nor fair
- Chamisa received 44% of presidential vote vs. Mnangagwa's 53%

POLITICAL SYSTEM:
- Presidential republic with dominant party system
- Parliament: bicameral (National Assembly and Senate)
- ZANU-PF supermajority allows constitutional amendments
- Judiciary not independent - ruling party controls courts
- Electoral commission (ZEC) lacks credibility
- Media environment heavily controlled
- Freedom House rates Zimbabwe "Not Free"

HISTORICAL CONTEXT:
- ZANU-PF ruled since 1980 independence
- Robert Mugabe led 1980-2017 (37 years)
- November 2017: Military coup removed Mugabe
- Mnangagwa emerged from coup as president
- "Second Republic" rhetoric but continuity in practice
- Same ZANU-PF elites maintain power

ECONOMIC CRISIS:
- Zimbabwean dollar collapsed - multi-currency system
- Inflation rampant despite official statistics
- Unemployment estimated over 80% (informal economy)
- Mining sector (gold, lithium) benefits elites
- Ordinary Zimbabweans struggling with poverty
- Public services deteriorating
- Brain drain as professionals emigrate

HUMAN RIGHTS SITUATION:
- Political prisoners and arbitrary detentions
- Opposition activists abused and intimidated
- Freedom of assembly restricted
- Media censorship and harassment of journalists
- Police and security forces used against opposition
- Abductions of activists
- Impunity for state violence

INTERNATIONAL RELATIONS:
- SADC (Southern African Development Community) criticized 2023 election
- Relations with Western countries strained
- Sanctions regime maintained by US and EU
- China major investor and diplomatic ally
- "Look East" policy under both Mugabe and Mnangagwa
- Zimbabwe suspended from Commonwealth

UPCOMING POLITICAL CALENDAR:
- Constitutional amendment process for 2030 extension
- Court challenges expected from opposition and civil society
- 2028 presidential election (if constitution unchanged)
- Parliament will vote on term extension
- ZANU-PF has numbers to pass amendments
- Public protests likely but will face repression

MILITARY'S ROLE:
- Zimbabwe Defence Forces (ZDF) ultimate power broker
- Senior military figures hold key government positions
- Generals enriched through business interests
- Military veterans groups politically influential
- Chiwenga is former ZDF commander
- Military unlikely to accept leader they don't approve
- Succession ultimately determined by military-party nexus`
}

async function generatePoliticsSummary(countryKey: keyof typeof COUNTRIES) {
  const country = COUNTRIES[countryKey]
  const context = NOVEMBER_2025_POLITICS_CONTEXTS[countryKey]

  console.log(`\n${'='.repeat(70)}`)
  console.log(`Generating POLITICS summary for ${country.name}...`)
  console.log(`${'='.repeat(70)}\n`)

  const apiKey = process.env.ANTHROPIC_API_KEY
  if (!apiKey) {
    throw new Error('ANTHROPIC_API_KEY not found in environment variables')
  }

  const anthropic = new Anthropic({ apiKey })

  const prompt = `You are writing a POLITICS category analysis for ${country.name.toUpperCase()} in the voice of Rory Stewart from "The Rest is Politics" podcast - deeply analytical, conversational, insider Westminster/DC tone.

NOVEMBER 2025 POLITICAL CONTEXT:
${context}

Write a comprehensive POLITICS summary (3,000-4,500 characters) focusing on:
- Current government/leadership and power dynamics
- Opposition parties and key political figures
- Electoral system and recent/upcoming elections
- Political institutions and their health
- Key political debates and fault lines
- Corruption/transparency levels

TONE AND STYLE:
- Rory Stewart's conversational insider analysis
- Deep political analysis with Westminster/DC sophistication
- Explain power dynamics and institutional strengths/weaknesses
- Use specific names, dates, approval ratings, election results
- Connect political developments to real human impact
- Forward-looking: what should readers watch for next?

STRUCTURE:
[Opening Hook - 1 paragraph, ~150 words]
- Lead with most compelling recent political event
- Set scene with insider knowledge
- Political intrigue and power dynamics

**The Power Structure** (~400 words)
- Current leadership and how they hold power
- Government structure and key players
- Power dynamics and factional conflicts

**The Opposition and Political Competition** (~350 words)
- Opposition parties and leaders
- Electoral system and recent elections
- Political institutions and their credibility

**The Bottom Line** (~150 words)
- Synthesis of political situation
- What's at stake
- What to watch next

Generate the ${country.name} POLITICS summary now (3,000-4,500 characters):`

  try {
    const message = await anthropic.messages.create({
      model: 'claude-sonnet-4-20250514',
      max_tokens: 4000,
      messages: [{
        role: 'user',
        content: prompt
      }]
    })

    const summaryText = message.content[0].type === 'text' ? message.content[0].text : ''

    console.log(`\n=== GENERATED ${country.name.toUpperCase()} POLITICS SUMMARY ===\n`)
    console.log(summaryText)
    console.log('\n=== END SUMMARY ===\n')
    console.log(`Character count: ${summaryText.length}`)

    // Extract key political issues from the summary
    const issues: string[] = []

    // Look for bolded headers or key topics
    const headerMatches = summaryText.match(/\*\*([^*]+)\*\*/g) || []
    headerMatches.forEach(match => {
      const issue = match.replace(/\*\*/g, '').trim()
      if (issue && issue.length < 80 && !issue.toLowerCase().includes('bottom line')) {
        issues.push(issue)
      }
    })

    // If no issues found, extract from content
    if (issues.length < 3) {
      issues.length = 0
      if (summaryText.includes('leadership')) issues.push('Leadership and Power Dynamics')
      if (summaryText.includes('election')) issues.push('Electoral Politics')
      if (summaryText.includes('opposition')) issues.push('Opposition and Political Competition')
      if (summaryText.includes('corruption')) issues.push('Corruption and Governance')
    }

    console.log('\nExtracted Political Issues:', issues.slice(0, 5))

    // Save to database with category='politics'
    await prisma.locationSummary.upsert({
      where: {
        name_type_category: {
          name: country.name,
          type: country.type,
          category: 'politics'
        }
      },
      create: {
        name: country.name,
        type: country.type,
        country: country.country,
        lat: country.lat,
        lng: country.lng,
        category: 'politics',
        summary: summaryText,
        issues: JSON.stringify(issues.slice(0, 5)),
        topStories: JSON.stringify([]),
        storyCount: 0,
        updatedAt: new Date()
      },
      update: {
        summary: summaryText,
        issues: JSON.stringify(issues.slice(0, 5)),
        updatedAt: new Date()
      }
    })

    console.log(`\n✅ ${country.name} POLITICS summary saved to database!\n`)

  } catch (error) {
    console.error(`❌ Error generating ${country.name} POLITICS summary:`, error)
    throw error
  }
}

async function generateAllPoliticsSummaries() {
  console.log('\n' + '='.repeat(70))
  console.log('🏛️  GENERATING POLITICS SUMMARIES - BATCH 10 (FINAL)')
  console.log('='.repeat(70))
  console.log('\nCountries in this batch:')
  console.log('  1. United Arab Emirates')
  console.log('  2. United Kingdom')
  console.log('  3. United States')
  console.log('  4. Uruguay')
  console.log('  5. Uzbekistan')
  console.log('  6. Venezuela')
  console.log('  7. Vietnam')
  console.log('  8. Yemen')
  console.log('  9. Zimbabwe')
  console.log('')

  try {
    // Generate summaries sequentially to avoid rate limits
    await generatePoliticsSummary('UAE')
    await new Promise(resolve => setTimeout(resolve, 2000))

    await generatePoliticsSummary('UK')
    await new Promise(resolve => setTimeout(resolve, 2000))

    await generatePoliticsSummary('US')
    await new Promise(resolve => setTimeout(resolve, 2000))

    await generatePoliticsSummary('URUGUAY')
    await new Promise(resolve => setTimeout(resolve, 2000))

    await generatePoliticsSummary('UZBEKISTAN')
    await new Promise(resolve => setTimeout(resolve, 2000))

    await generatePoliticsSummary('VENEZUELA')
    await new Promise(resolve => setTimeout(resolve, 2000))

    await generatePoliticsSummary('VIETNAM')
    await new Promise(resolve => setTimeout(resolve, 2000))

    await generatePoliticsSummary('YEMEN')
    await new Promise(resolve => setTimeout(resolve, 2000))

    await generatePoliticsSummary('ZIMBABWE')

    console.log('\n' + '='.repeat(70))
    console.log('🎉 ALL POLITICS SUMMARIES GENERATED AND SAVED!')
    console.log('='.repeat(70))
    console.log('\n📊 BATCH 10 COMPLETE:')
    console.log('  ✓ United Arab Emirates - Politics')
    console.log('  ✓ United Kingdom - Politics')
    console.log('  ✓ United States - Politics')
    console.log('  ✓ Uruguay - Politics')
    console.log('  ✓ Uzbekistan - Politics')
    console.log('  ✓ Venezuela - Politics')
    console.log('  ✓ Vietnam - Politics')
    console.log('  ✓ Yemen - Politics')
    console.log('  ✓ Zimbabwe - Politics')
    console.log('\n🌍 ALL 128 COUNTRIES COMPLETED FOR POLITICS CATEGORY! 🌍')
    console.log('')

  } catch (error) {
    console.error('\n❌ Error in batch generation:', error)
    throw error
  }
}

generateAllPoliticsSummaries()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
