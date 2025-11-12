import 'dotenv/config'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const FOUR_COUNTRIES = [
  {
    name: 'Kazakhstan',
    type: 'country',
    lat: 48.0196,
    lng: 66.9237,
    country: 'Kazakhstan',
    summary: `# Kazakhstan

President Tokayev's Kazakhstan is pivoting—deepening ties with Washington through $17 billion in U.S. deals while maintaining its strategic partnership with Moscow, all as the economy surges at 6.4% growth and Astana positions itself as Central Asia's indispensable mediator.

## Major Issues

### 1. Balancing Act: U.S. Engagement vs. Russian Alliance
**What's happening:**
- In November 2025, President Tokayev held talks with Putin in Moscow focusing on Russian-Kazakh strategic partnership in political, trade, economic, and cultural spheres
- Kazakhstan and the U.S. signed $17 billion worth of agreements, with Nvidia, Boeing, and OpenAI among U.S. companies establishing new partnerships with Kazakhstan
- Following talks with the U.S. President, Kazakhstan's Ministry of Foreign Affairs issued a statement on accession to the Abraham Accords, signaling a significant diplomatic shift
- Kazakhstan agreed to expand mutual trade in agricultural products with Russia at a meeting of their intergovernmental commission in Astana
- The Ministry of Finance successfully sold a $1.5 billion five-year Eurobond at a record-low 4.412% yield, attracting $4.4 billion in orders

**Why it matters:**
- Kazakhstan is threading the needle between its historical security guarantor (Russia) and economic opportunities with the West—a strategy tested by the Ukraine war and Western sanctions on Russia
- The $17 billion U.S. deals represent Kazakhstan's largest-ever American investment package, signaling Astana's bet on Western technology and capital to diversify away from resource dependence
- Abraham Accords accession positions Kazakhstan as a bridge between the Islamic world and Israel, potentially unlocking trade and investment from both Tel Aviv and Gulf states
- The Eurobond success demonstrates investor confidence in Kazakhstan's stability despite regional volatility, but also increases Western financial exposure
- Russia still provides security guarantees and controls critical export routes; antagonizing Moscow could trigger energy transit disruptions or border tensions

**Prospects:**
- Tokayev will continue hedging—taking U.S. investment while reassuring Putin of strategic loyalty, a balancing act that requires constant diplomatic calibration
- Watch for Russian pressure tactics if Kazakhstan deepens Western ties too aggressively: energy transit manipulation, manufactured border disputes, or weaponized migration
- The Abraham Accords accession may provoke backlash from Iran and Russia's allies, testing Kazakhstan's multi-vector foreign policy
- If U.S.-Russia tensions escalate, Kazakhstan's room for maneuver shrinks—it may be forced to choose sides, which Tokayev has desperately avoided
- Success in this balancing act makes Kazakhstan a model for Central Asian states navigating great power competition; failure could destabilize the region

### 2. Economic Surge and Structural Vulnerability
**What's happening:**
- Kazakhstan's economy grew 6.4% in the first ten months of 2025, one of the highest growth rates in the region
- The record-low Eurobond yield (4.412%, about 85 basis points above U.S. Treasuries) reflects strong investor confidence despite regional risks
- Prime Minister Olzhas Bektenov met with LanzaJet CEO to discuss a sustainable aviation fuel (SAF) project, part of Kazakhstan's green economy diversification push
- Russia-Kazakhstan trade in agricultural products is expanding, with both countries agreeing to deepen food security cooperation
- Kazakhstan is attracting tech investment from Nvidia, OpenAI, and other Silicon Valley firms seeking alternatives to China for AI infrastructure and data centers

**Why it matters:**
- Kazakhstan's growth is driven by energy exports (oil, gas), but the economy remains dangerously exposed to commodity price volatility
- The push for tech investment and sustainable aviation fuel signals Tokayev's recognition that Kazakhstan must diversify or face the resource curse that has plagued other petrostates
- Agricultural trade with Russia is critical for food security, but also creates dependency—if Moscow weaponizes food exports (as it has with Europe), Kazakhstan is vulnerable
- The Eurobond success is a double-edged sword: it provides capital for investment, but also increases Kazakhstan's debt burden in a region where fiscal crises are common
- Foreign investment in tech infrastructure (Nvidia, OpenAI) could position Kazakhstan as Central Asia's digital hub, but also raises questions about data sovereignty and Chinese influence

**Prospects:**
- If energy prices remain stable, Kazakhstan can sustain 5-6% growth through 2026, but a commodity crash would expose structural weaknesses
- Watch for execution on the sustainable aviation fuel project—if it succeeds, Kazakhstan could become a green energy exporter; if it stalls, it's another failed diversification attempt
- The tech investment boom depends on geopolitical stability—if U.S.-China tensions spill into Central Asia, American companies may pull back
- Food security cooperation with Russia is essential, but Kazakhstan should seek alternatives (India, Turkey, Gulf states) to reduce dependency
- Fiscal discipline is critical—if Kazakhstan overspends on prestige projects and commodity prices drop, the Eurobond debt could become unsustainable

### 3. Multi-Vector Diplomacy and Regional Leadership
**What's happening:**
- Kazakhstan's Abraham Accords accession positions Astana as a bridge between the Islamic world, Israel, and the West
- Tokayev's simultaneous engagement with Putin, the U.S. President, and Gulf leaders demonstrates Kazakhstan's role as a regional convener
- Kazakhstan is hosting meetings of the Russia-Kazakhstan intergovernmental commission, positioning itself as the diplomatic hub of Central Asia
- The country's success in attracting both Russian agricultural trade and U.S. tech investment shows its ability to play multiple sides without alienating either

**Why it matters:**
- Kazakhstan's multi-vector diplomacy is its core national security strategy—it prevents domination by any single power (Russia, China, U.S.) and maximizes leverage
- The Abraham Accords accession is a bold move for a Muslim-majority country with close ties to Russia and Iran—it signals Kazakhstan's willingness to break with regional consensus for strategic gain
- Regional leadership gives Kazakhstan outsized influence in Central Asia, allowing it to shape policy on water, energy, and security issues
- But multi-vector diplomacy is fragile—it requires all sides to tolerate Kazakhstan's hedging, and if one power demands exclusivity, the strategy collapses

**Prospects:**
- Kazakhstan's diplomatic model will be tested as U.S.-Russia and U.S.-China tensions intensify—hedging becomes harder when great powers demand alignment
- Abraham Accords accession could unlock economic benefits (Israeli tech, Gulf investment, U.S. support), but may provoke backlash from Iran and Russia's axis
- Watch for Kazakhstan's role in mediating regional conflicts (Caspian Sea disputes, Central Asian water issues)—success would cement its leadership
- If Tokayev's balancing act succeeds, other Central Asian states will emulate it; if it fails, the region could fracture into rival blocs
- The long-term risk is that Kazakhstan's refusal to choose sides leaves it without strong allies when a crisis hits

## Summary

Kazakhstan is booming—6.4% growth, $17 billion in U.S. deals, record-low Eurobond yields, and diplomatic breakthroughs from Moscow to Washington to Tel Aviv. Tokayev has mastered the art of the hedge, extracting maximum benefit from all sides without committing fully to any. But this is a high-wire act. The Ukraine war has made neutrality harder; U.S.-China decoupling is forcing tech choices; and Russia's willingness to tolerate Kazakh independence has limits. The next 12-18 months will test whether Kazakhstan's multi-vector diplomacy is a sustainable strategy or a precarious illusion. Watch for Russian pressure tactics, execution on U.S. tech investments, and Kazakhstan's Abraham Accords implementation. If Tokayev can maintain the balance, Kazakhstan will be Central Asia's undisputed leader. If the balance breaks, the fall will be hard.`,
    issues: JSON.stringify([
      'Balancing Act: U.S. Engagement vs. Russian Alliance',
      'Economic Surge and Structural Vulnerability',
      'Multi-Vector Diplomacy and Regional Leadership'
    ]),
    topStories: JSON.stringify([
      {
        title: 'Russia-Kazakhstan Bilateral Trade Relations: November 2025 Update',
        source: 'Russia\'s Pivot to Asia',
        link: 'https://russiaspivottoasia.com/russia-kazakhstan-bilateral-trade-relations-november-2025-update/',
        pubDate: new Date('2025-11-15').toISOString()
      },
      {
        title: 'Kazakhstan in 2025: strengthening the economy, sovereignty and external position',
        source: 'The Diplomat in Spain',
        link: 'https://thediplomatinspain.com/en/2025/01/23/kazakhstan-in-2025-strengthening-the-economy-sovereignty-and-external-position/',
        pubDate: new Date('2025-01-23').toISOString()
      },
      {
        title: 'Kazakhstan signs $17 billion worth of agreements with U.S.',
        source: 'The Astana Times',
        link: 'https://astanatimes.com/',
        pubDate: new Date('2025-11-08').toISOString()
      }
    ]),
    storyCount: 10
  },
  {
    name: 'Kenya',
    type: 'country',
    lat: -1.2921,
    lng: 36.8219,
    country: 'Kenya',
    summary: `# Kenya

William Ruto's presidency is a paradox—5% economic growth and single-digit inflation alongside 65 dead protesters, 89 enforced disappearances, and a government defending police brutality as democracy in action.

## Major Issues

### 1. Protests, Police Violence, and the Illusion of Democracy
**What's happening:**
- Nationwide protests beginning in June 2024 over the Finance Bill left 65 dead according to President Ruto, though human rights groups cite higher figures
- As of January 2025, the Kenya National Commission on Human Rights recorded 89 enforced disappearances and 63 extrajudicial killings since June 2024
- In a November 2025 Al Jazeera interview, Ruto defended police tactics, distinguishing between "legitimate protesters" and others he declined to characterize
- Human rights groups have accused the government of using excessive force, abductions, and extrajudicial killings to quell demonstrations
- In October 2025, the contentious Finance Bill was split into sections which have since been individually passed into law—the policies protesters died opposing are now enacted
- Activist Kasmuel McOure joined the opposition ODM party in November 2025, signaling the protest movement's transition from street mobilization to institutional politics

**Why it matters:**
- Ruto's response to protests reveals the limits of Kenyan democracy—when citizens challenge government policy, the state responds with lethal force and disappearances
- The 89 enforced disappearances are not random violence; they are a deliberate state strategy to terrorize opposition and prevent future mobilization
- Ruto's semantic distinction between "protesters" and others is classic authoritarian language—it creates legal gray zones where rights don't apply
- The Finance Bill's piecemeal passage shows the protests failed to change policy, only the packaging—Kenyans died for nothing, and the government faced no accountability
- McOure's ODM defection shows the regime's strategy is working: co-opt protest leaders, fragment the movement, and normalize repression

**Prospects:**
- Expect continued protests in 2026 as the Finance Bill measures bite—tax hikes, subsidy cuts, and austerity will generate sustained public anger
- If security forces continue disappearances and killings, Kenya risks international sanctions, aid cuts, and ICC scrutiny—but Ruto has shown he's willing to take that risk
- The protest movement is fracturing—McOure's institutionalization versus hardliners who reject engagement with a government that kills dissidents
- Ruto's bet is that economic growth will eventually dampen anger, but if growth slows or inequality widens, the next wave of protests will be worse
- Watch for regional spillover—if Kenya's model of violent repression succeeds, other East African governments will emulate it

### 2. Economic Growth vs. Cost of Living Crisis
**What's happening:**
- Kenya's economy is expected to grow over 5% in 2025, making it Africa's sixth largest economy according to Ruto
- Annualized inflation is below 4%, and the Kenyan shilling remains stable against the dollar
- Maize production increased by 50%, and the sugar sector underwent reforms under Ruto's administration
- Despite macroeconomic success, Kenya has witnessed waves of anti-government protests driven by high cost of living, tax hikes, and corruption allegations
- The Finance Bill's passage introduced new taxes to close budget gaps, hitting middle and lower-income Kenyans hardest

**Why it matters:**
- Kenya's economic data looks strong on paper, but the benefits are not reaching ordinary citizens—this is classic elite-captured growth
- High cost of living is not just an economic issue; it's a legitimacy crisis—when people can't afford food despite 5% GDP growth, they question the system
- The Finance Bill tax hikes were demanded by the IMF to stabilize Kenya's debt, but the political cost is mounting—austerity fuels unrest, which undermines stability
- Ruto's ability to deliver growth while maintaining repression shows Kenya is following the "Singapore model"—economic performance without political freedoms
- But unlike Singapore, Kenya has a history of contested democracy and civil society that won't accept authoritarian bargains easily

**Prospects:**
- If inflation stays low and growth continues, Ruto may weather the political storm—but distribution matters more than aggregate numbers
- Watch for food price shocks, currency instability, or drought—any economic disruption will reignite protests and expose the fragility of Ruto's model
- The IMF and Western donors face a dilemma: continue supporting Kenya's economic reforms despite human rights abuses, or cut aid and risk collapse
- Ruto's strategy is to deliver enough economic gains to split the opposition—buying off elites, middle class, and business while repressing the poor
- The 2027 elections will be the test—if Ruto can maintain growth and fragment opposition, he survives; if the economy stumbles, he's finished

### 3. The Co-optation Strategy and Democratic Backsliding
**What's happening:**
- Activist Kasmuel McOure's November 2025 defection to ODM is the clearest sign of Ruto's co-optation strategy—absorb opposition leaders into the system
- Ruto has dismissed censorship claims, insisting Kenya remains "a beacon of free expression" despite documented cases of journalist harassment and media pressure
- The government's rhetoric emphasizes democracy and rule of law while simultaneously defending extrajudicial killings and disappearances
- Kenya's international reputation as a stable democracy is eroding as evidence of state violence mounts, but Ruto is betting Western powers prioritize stability over accountability

**Why it matters:**
- Co-optation is more effective than repression alone—it splits movements, demoralizes grassroots activists, and gives the regime a veneer of legitimacy
- McOure's ODM membership will be used by the government to argue the protest movement is integrating into democratic institutions, justifying crackdown on "violent extremists" who refuse
- Ruto's "beacon of free expression" rhetoric is gaslighting—it allows him to deny reality while international observers document abuses
- Western governments face a choice: challenge Ruto's democratic backsliding or maintain Kenya as a stable partner in a volatile region
- Kenya's trajectory mirrors other "hybrid regimes"—regular elections, formal institutions, and brutal repression of dissent

**Prospects:**
- Expect more co-optation—Ruto will offer opposition figures positions, resources, and political survival in exchange for loyalty
- The protest movement will splinter further between those who accept Ruto's offers and those who reject any engagement
- International pressure will be muted—the U.S., UK, and EU need Kenya as a counterterrorism partner and regional anchor
- If Kenya's democratic backsliding continues unchecked, it sets a precedent for the region: elections + growth + repression = acceptable governance
- The 2027 elections are critical—if they are free and fair, Kenya's democracy survives; if they are rigged or violent, the authoritarian turn is complete

## Summary

Kenya under Ruto is a case study in authoritarian modernization—strong economic performance, IMF-approved reforms, and regional leadership, all built on a foundation of police violence, disappearances, and co-opted opposition. The Finance Bill protests showed Kenyans are willing to die for accountability, but the government's response showed it is willing to kill to maintain control. Ruto's gamble is that growth will eventually silence dissent, but history suggests otherwise—when citizens see their government murder protesters and lie about it, trust collapses. The next 18 months will reveal whether Kenya is consolidating authoritarianism or heading for a reckoning. Watch for economic indicators (inflation, currency stability, food prices), protest dynamics (co-optation vs. radicalization), and international pressure (aid conditions, sanctions threats). Kenya's trajectory will shape East Africa's democratic future—for better or worse.`,
    issues: JSON.stringify([
      'Protests, Police Violence, and the Illusion of Democracy',
      'Economic Growth vs. Cost of Living Crisis',
      'The Co-optation Strategy and Democratic Backsliding'
    ]),
    topStories: JSON.stringify([
      {
        title: 'Kenya\'s Ruto on protests, power, and the state of democracy',
        source: 'Al Jazeera',
        link: 'https://www.aljazeera.com/video/talk-to-al-jazeera/2025/11/9/kenyas-ruto-on-protests-power-and-the-state-of-democracy',
        pubDate: new Date('2025-11-09').toISOString()
      },
      {
        title: 'Kenyan President William Ruto Defends Police Tactics Amid Protest Violence and Rights Concerns',
        source: 'Lufkin Daily News',
        link: 'https://lufkindailynews.com/test/?s-news-7424978-2025-11-10-kenyan-president-william-ruto-defends-police-tactics-amid-protest-violence-and-rights-concerns=',
        pubDate: new Date('2025-11-10').toISOString()
      },
      {
        title: 'President Ruto Defends Record on Democracy, Economy, and Security Challenges',
        source: 'The Unfiltered',
        link: 'https://theunfiltered.co.ke/news/president-ruto-defends-record-on-democracy-economy-and-security-challenges',
        pubDate: new Date('2025-11-08').toISOString()
      }
    ]),
    storyCount: 11
  },
  {
    name: 'Kuwait',
    type: 'country',
    lat: 29.3759,
    lng: 47.9774,
    country: 'Kuwait',
    summary: `# Kuwait

Emir Sheikh Meshal's authoritarian gamble—suspending parliament indefinitely and revoking tens of thousands of citizenships—has delivered economic growth and stock market surges, but at the cost of Kuwait's democratic tradition and the citizenship of 42,000 people.

## Major Issues

### 1. Parliament Suspension and Constitutional Crisis
**What's happening:**
- In May 2024, Emir Sheikh Meshal al-Ahmad dissolved the National Assembly indefinitely and suspended constitutional articles for up to four years
- Kuwait's status declined from "Partly Free" to "Not Free" as the country was left without a functioning legislature and citizens without political representation
- In November 2025, Emir Sheikh Meshal attended a ceremony celebrating the constitution's 63rd anniversary—an ironic gesture given his suspension of key constitutional provisions
- The emir has taken action to revoke citizenship for up to 42,000 people (about 2.7% of Kuwait's 1.55 million citizens), targeting women naturalized through marriage, political opponents, tribal figures, and dual nationals
- A May 2024 report indicated the emir was considering reviving parliament in 2025, but as of November 2025, no concrete steps have been taken

**Why it matters:**
- Kuwait was the Gulf's only functioning parliamentary democracy—its National Assembly was boisterous, obstructionist, and often chaotic, but it was real political representation
- The suspension is not a temporary emergency measure; it's a fundamental restructuring of Kuwait's political system toward Gulf-style autocracy
- Revoking 42,000 citizenships is not about combating fraud; it's political purging—eliminating opposition, tribal rivals, and anyone who challenges al-Sabah family rule
- The citizenship revocations disproportionately target women naturalized through marriage, exposing the gendered dimension of Kuwait's authoritarian turn
- Celebrating the constitution while suspending it is classic authoritarian theater—it maintains the fiction of constitutional governance while gutting its substance

**Prospects:**
- The May 2025 deadline for parliament revival has passed with no action—expect the suspension to continue through 2026 and possibly become permanent
- If parliament is eventually restored, it will be a neutered institution—opposition figures will be purged, electoral rules rewritten, and royal prerogatives expanded
- The citizenship revocations will continue—watch for expansion to journalists, activists, and academics who criticize the regime
- International pressure will be minimal—Gulf allies support the move, and Western powers prioritize Kuwait as a strategic partner over democratic values
- Kuwait's democratic tradition is dying, and there is no organized opposition capable of stopping it

### 2. Economic Reforms and the Debt Law Breakthrough
**What's happening:**
- The IMF forecasts Kuwait's economy will grow 2.6% in 2025 and 3.4% in 2026, a modest recovery after years of political deadlock
- The Kuwait Stock Exchange recorded a historic 61% increase in profits in the first half of 2025 compared to the same period in 2024
- In March 2025, Kuwait passed its first public debt law in eight years—described by the Financial Times as a "fundamental turning point"—with a debt ceiling of KD30 billion ($97 billion)
- About 85% of the population is employed in the public sector, and about 80% of the national budget is spent on wages and subsidies, leaving only 9% for capital investment
- The emir's anti-corruption focus has been a central justification for the parliament suspension

**Why it matters:**
- The debt law passage shows the emir's strategy is working—eliminating parliamentary obstruction has unlocked fiscal reforms that were blocked for years
- The stock market surge reflects investor confidence in authoritarian stability over democratic uncertainty—markets prefer predictable autocracy to chaotic democracy
- But Kuwait's economic model is fundamentally unsustainable: 85% public sector employment, 80% budget spent on wages/subsidies, and only 9% for investment
- The debt ceiling of $97 billion gives Kuwait fiscal space, but also enables continued spending on bloated public sector instead of forcing structural reforms
- Anti-corruption rhetoric is the regime's legitimacy strategy—it justifies the parliament suspension as necessary to clean up a corrupt system

**Prospects:**
- Economic growth will continue in the short term—the parliament suspension removed a major source of policy paralysis
- But structural vulnerabilities remain: oil dependency, public sector bloat, and low productivity mean growth is fragile and unsustainable
- Watch for how the debt law is used—if it finances real investment (infrastructure, diversification), Kuwait could sustain growth; if it props up subsidies and public sector jobs, the crisis is delayed, not solved
- Investor confidence depends on stability—if opposition mobilizes or regional tensions escalate, capital flight could reverse gains quickly
- The economic reforms will be used to justify continued authoritarianism—"we need stability to grow" becomes a permanent argument

### 3. Citizenship Revocations and the Politics of Exclusion
**What's happening:**
- Up to 42,000 Kuwaitis—2.7% of the citizen population—face citizenship revocation under the emir's campaign
- Targets include women naturalized through marriage, political opponents, tribal figures, and dual nationals
- The revocations are presented as anti-fraud measures, but the scale and targeting suggest political motivations
- There is no transparent process, judicial review, or appeal mechanism—the revocations are decreed by executive authority
- The emir's focus on citizenship reflects broader Gulf anxiety about demographic composition and political loyalty

**Why it matters:**
- Citizenship revocation is the most severe form of political punishment—it erases identity, destroys livelihoods, and exiles people from their homes
- The 42,000 number is staggering—it's equivalent to revoking citizenship for 9 million Americans or 1.8 million Britons
- Women naturalized through marriage are particularly vulnerable—their citizenship is conditional on their husband's status, exposing systemic gender discrimination
- Tribal figures are targeted because they represent alternative power centers that could challenge al-Sabah family dominance
- The lack of due process means anyone can be stripped of citizenship without recourse—this creates a climate of fear and political compliance

**Prospects:**
- Expect the revocations to accelerate—the emir faces no domestic constraints and minimal international pressure
- The revoked citizens will become stateless or forced to claim citizenship in countries they have no connection to—a humanitarian crisis in waiting
- Opposition figures, journalists, and activists will face revocation as a tool of political repression
- Regional allies (Saudi Arabia, UAE, Bahrain) may adopt similar tactics, normalizing citizenship revocation as a governance tool
- If challenged internationally, Kuwait will frame revocations as sovereignty issues—"our citizens, our rules"

## Summary

Kuwait's democratic experiment is over. Emir Sheikh Meshal has suspended the parliament, revoked tens of thousands of citizenships, and consolidated authoritarian rule—all while celebrating the constitution and talking about reforms. The economic benefits are real: debt law passage, stock market gains, and modest growth. But the political cost is Kuwait's transformation from the Gulf's democratic outlier into another autocracy. The parliament suspension may become permanent, opposition will be purged, and citizenship will be a privilege granted by rulers, not a right. The next 12-18 months will determine whether this is a temporary stabilization or a permanent authoritarian turn. Watch for parliament revival signals (likely cosmetic), citizenship revocation expansion (likely accelerating), and economic performance (likely positive but fragile). Kuwait's lesson to the Gulf is clear: democracy is expendable when it obstructs power. And so far, no one is stopping it.`,
    issues: JSON.stringify([
      'Parliament Suspension and Constitutional Crisis',
      'Economic Reforms and the Debt Law Breakthrough',
      'Citizenship Revocations and the Politics of Exclusion'
    ]),
    topStories: JSON.stringify([
      {
        title: 'Will Kuwait\'s Parliamentary Democracy Be Restored, Reformed, or Repudiated?',
        source: 'Carnegie Endowment',
        link: 'https://carnegieendowment.org/research/2025/03/kuwaits-parliament-suspension-emir-democracy?lang=en',
        pubDate: new Date('2025-03-15').toISOString()
      },
      {
        title: 'Debt, Decree, and Development: Kuwait\'s Unnoticed Transitions',
        source: 'Foreign Policy Research Institute',
        link: 'https://www.fpri.org/article/2025/11/debt-decree-and-development-kuwaits-unnoticed-transitions/',
        pubDate: new Date('2025-11-12').toISOString()
      },
      {
        title: 'Kuwait: Freedom in the World 2025 Country Report',
        source: 'Freedom House',
        link: 'https://freedomhouse.org/country/kuwait/freedom-world/2025',
        pubDate: new Date('2025-01-30').toISOString()
      }
    ]),
    storyCount: 9
  },
  {
    name: 'Laos',
    type: 'country',
    lat: 19.8563,
    lng: 102.4955,
    country: 'Laos',
    summary: `# Laos

Six tourists dead from methanol poisoning, a $6 billion Chinese railway driving a tourism boom, and external debt payments doubling to $950 million—Laos is betting its future on Chinese-financed infrastructure and backpacker dollars, but the risks are mounting.

## Major Issues

### 1. Methanol Deaths and Tourism Crisis Management
**What's happening:**
- In late November 2024, six foreign tourists died from suspected methanol poisoning in Vang Vieng, Laos—two Australians, a British citizen, two Danes, and an American
- Victims reportedly visited Jaidee Bar before being found unconscious at Nana Backpackers Hostel; the tragedy exposed severe gaps in alcohol safety regulation
- The father of one Australian victim publicly urged the government to "protect others" from tainted alcohol, calling for systemic reforms
- The Laotian government has faced international pressure for a transparent and thorough investigation, but as of November 2025, no significant accountability measures have been announced
- Despite the tragedy, tourism is projected to grow significantly in 2025, with the government promoting Laos as Southeast Asia's "new hidden gem"

**Why it matters:**
- Methanol poisoning is not a one-off accident; it reflects endemic regulatory failure in Laos's hospitality sector, where oversight is weak and enforcement nonexistent
- Vang Vieng is a backpacker hub—the deaths threaten Laos's reputation in the budget tourism market, which is critical to economic growth
- The international outcry from Australia, UK, Denmark, and the U.S. puts diplomatic pressure on Vientiane, but the government's priority is containing reputational damage, not accountability
- Tourism accounts for a growing share of Laos's economy (projected 4.5% GDP growth in 2025), making visitor safety a strategic economic issue, not just a legal one
- If similar incidents occur, tourist arrivals could collapse, undermining the government's bet on tourism-led growth

**Prospects:**
- Expect cosmetic reforms—alcohol certification campaigns, bar inspections in tourist zones—but no systemic overhaul of regulation
- International pressure will fade as media attention shifts, allowing the Laotian government to avoid meaningful accountability
- Watch for another methanol incident—if it happens, Laos's tourism boom could collapse before it begins
- Insurance and travel advisory warnings from Western governments could deter visitors, slowing the tourism recovery despite infrastructure investments
- The incident reveals a broader governance problem: Laos can build infrastructure (thanks to Chinese loans), but it cannot regulate basic safety—a fatal combination for a tourism-dependent economy

### 2. China-Laos Railway: Growth Engine or Debt Trap?
**What's happening:**
- The $6 billion Lao-China Railway, financed as part of China's Belt and Road Initiative, has been operational since 2021 for domestic routes and 2023 for cross-border travel
- The railway connects Vientiane to Kunming in southern China and has handled over 48.6 million passenger trips and 54 million tons of goods as of February 2025
- In 2023, bilateral trade between China and Laos reached $7.1 billion, up 26.6% year-on-year, driven by railway logistics
- Tourism is growing on the railway, with increased ridership and connectivity boosting visitor arrivals in early 2025
- External debt payments have nearly doubled to $950 million in recent projections, with about half owed to China for infrastructure projects including the railway
- Time and logistics costs for freight transportation between China and Laos have significantly decreased, benefiting trade but raising questions about Laos's sovereignty over critical infrastructure

**Why it matters:**
- The railway is transforming Laos from a landlocked backwater into a transit corridor connecting China to Southeast Asia—but at the cost of massive debt
- Laos's external debt is unsustainable: $950 million in annual debt payments is about 10% of GDP for a country with limited export capacity
- China holds the leverage—if Laos defaults, Beijing could seize control of the railway or demand other concessions (ports, mines, military access)
- The railway benefits Chinese exporters and tourists more than Laotian businesses—profits flow north, while debt stays in Vientiane
- Laos is betting that increased trade and tourism will generate enough revenue to service debt, but if growth falters or China reduces engagement, the country faces a fiscal crisis

**Prospects:**
- Tourism and trade growth will continue in 2025-2026, driven by Chinese visitors and freight, but sustainability depends on Laos capturing economic value, not just facilitating transit
- If Laos cannot service debt, expect negotiations with China over restructuring—but Beijing will demand concessions (longer leases, equity stakes, policy alignment)
- The railway model is being replicated across Southeast Asia (Thailand, Vietnam)—Laos is the test case for whether BRI infrastructure generates growth or dependency
- Watch for political backlash—if Laotian citizens see Chinese tourists and companies benefiting while debt burdens locals, resentment will grow
- The railway's success as an economic engine depends on Laos developing complementary industries (logistics, hospitality, manufacturing)—without that, it's just expensive infrastructure

### 3. Economic Growth and Structural Vulnerability
**What's happening:**
- Laos's economy is projected to grow 4.2% in 2024 and 4.5% in 2025, driven by tourism, Chinese investment, and railway-enabled trade
- The government is focusing on infrastructure improvements, tourism promotions, and enhanced visitor experiences to position Laos as a breakthrough destination in 2025
- About half of Laos's $950 million in external debt payments is owed to China, a staggering burden for a small, low-income economy
- The World Bank's May 2025 Lao PDR Economic Monitor highlights growth opportunities but warns of fiscal risks from high debt and limited revenue diversification
- Laos remains dependent on Chinese capital, Chinese tourists, and Chinese-built infrastructure—there is no plan B if Beijing's priorities shift

**Why it matters:**
- Laos's growth is real but fragile—it depends on Chinese investment continuing, tourists arriving, and no major shocks (pandemics, regional conflict, debt crises)
- The economy is structurally dependent on China—if Beijing reduces BRI spending or redirects resources elsewhere, Laos faces immediate fiscal crisis
- Tourism is a volatile industry—one pandemic, natural disaster, or safety scandal can wipe out years of gains (as the methanol deaths demonstrate)
- The lack of revenue diversification means Laos has no cushion—if tourism and Chinese trade slow, the government has no alternative income sources to service debt
- Laos is effectively a Chinese economic satellite—strategic decisions are constrained by Beijing's preferences, and sovereignty is increasingly nominal

**Prospects:**
- If tourism and trade continue growing, Laos can sustain 4-5% growth through 2026, but structural vulnerabilities remain unaddressed
- The debt burden will become unsustainable unless Laos develops export industries to generate foreign exchange—tourism alone won't be enough
- Watch for Chinese policy shifts—if Beijing tightens BRI lending or pivots away from Laos, the country is in immediate trouble
- Regional competition is intensifying—Thailand, Vietnam, and Cambodia are also courting Chinese investment and tourists, and Laos has the weakest institutions and smallest economy
- The long-term risk is a debt crisis forcing Laos into deeper Chinese dependency—asset seizures, policy concessions, or political subordination

## Summary

Laos is at a crossroads. The China-Laos Railway has delivered growth, trade, and tourism, but also debt, dependency, and sovereignty questions. The methanol deaths expose governance failures that threaten the tourism boom the government is betting on. And the economy, while growing, is structurally vulnerable—dependent on Chinese goodwill, tourist arrivals, and infrastructure that Laos doesn't control. The next 18 months will reveal whether Laos can convert Chinese-financed infrastructure into sustainable development or whether it's just accumulating debt it can never repay. Watch for debt renegotiations with China, tourism recovery post-methanol scandal, and fiscal indicators. Laos's trajectory will signal whether BRI infrastructure is a development tool or a debt trap—and the answer matters far beyond Vientiane.`,
    issues: JSON.stringify([
      'Methanol Deaths and Tourism Crisis Management',
      'China-Laos Railway: Growth Engine or Debt Trap?',
      'Economic Growth and Structural Vulnerability'
    ]),
    topStories: JSON.stringify([
      {
        title: 'Laos\' methanol poisoning deaths send chill through backpacker paradise',
        source: 'Al Jazeera',
        link: 'https://www.aljazeera.com/news/2024/11/25/laos-tainted-alcohol-deaths-send-chill-through-backpacker-paradise',
        pubDate: new Date('2024-11-25').toISOString()
      },
      {
        title: 'China-Laos Railway Fuels Trade and Record Travel Boom in Early 2025',
        source: 'The China-Global South Project',
        link: 'https://chinaglobalsouth.com/2025/03/04/china-laos-railway-fuels-trade-and-record-travel-boom-in-early-2025-amid-scrutiny/',
        pubDate: new Date('2025-03-04').toISOString()
      },
      {
        title: 'Laos: Southeast Asia\'s New Hidden Gem Poised for a Tourism Boom in 2025',
        source: 'Travel And Tour World',
        link: 'https://www.travelandtourworld.com/news/article/laos-southeast-asias-new-hidden-gem-poised-for-a-tourism-boom-in-2025-whats-driving-the-transformation/',
        pubDate: new Date('2025-01-15').toISOString()
      }
    ]),
    storyCount: 10
  }
]

async function addFourCountries() {
  console.log('Adding Kazakhstan, Kenya, Kuwait, and Laos to database...\n')

  for (const country of FOUR_COUNTRIES) {
    console.log(`Processing: ${country.name}`)

    try {
      await prisma.locationSummary.upsert({
        where: {
          name_type: {
            name: country.name,
            type: country.type
          }
        },
        create: {
          name: country.name,
          type: country.type,
          country: country.country,
          lat: country.lat,
          lng: country.lng,
          summary: country.summary,
          issues: country.issues,
          topStories: country.topStories,
          storyCount: country.storyCount,
          updatedAt: new Date()
        },
        update: {
          summary: country.summary,
          issues: country.issues,
          topStories: country.topStories,
          storyCount: country.storyCount,
          updatedAt: new Date()
        }
      })

      console.log(`✅ ${country.name} added/updated successfully\n`)
    } catch (error) {
      console.error(`❌ Error processing ${country.name}:`, error)
    }
  }

  console.log('✅ All four countries processed!')
}

addFourCountries()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
