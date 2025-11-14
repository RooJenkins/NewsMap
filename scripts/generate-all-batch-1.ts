import 'dotenv/config'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const COUNTRIES = [
  { name: 'United States', lat: 40.7128, lng: -74.0060 },
  { name: 'Canada', lat: 56.1304, lng: -106.3468 },
  { name: 'Mexico', lat: 23.6345, lng: -102.5528 },
  { name: 'Brazil', lat: -14.2350, lng: -51.9253 },
  { name: 'Argentina', lat: -38.4161, lng: -63.6167 },
  { name: 'Chile', lat: -35.6751, lng: -71.5430 },
  { name: 'Colombia', lat: 4.5709, lng: -74.2973 },
  { name: 'Peru', lat: -9.1900, lng: -75.0152 },
  { name: 'Venezuela', lat: 6.4238, lng: -66.5897 },
  { name: 'Ecuador', lat: -1.8312, lng: -78.1834 },
]

const SUMMARIES: Record<string, { summary: string; issues: string[] }> = {
  'United States': {
    summary: `# United States

The United States enters late 2025 navigating profound political transitions alongside persistent economic challenges. With the 2024 presidential election concluded, the nation faces critical decisions on domestic policy, international alliances, and economic stability as inflation concerns moderate but remain elevated above historical norms.

## Political Landscape

The political environment remains deeply polarized following the 2024 election cycle. Congress continues wrestling with fundamental governance questions including federal spending, immigration reform, and the debt ceiling. The Supreme Court's conservative majority has reshaped legal precedents on abortion access, affirmative action, and regulatory authority, generating significant state-level policy divergence. Political violence and threats against officials have prompted enhanced security measures across government institutions.

The administration faces pressure on multiple fronts: managing U.S.-China strategic competition, supporting Ukraine while addressing domestic aid skepticism, and navigating Middle East tensions particularly around Israel-Gaza. Immigration policy remains contentious, with border management, asylum processing, and deportation enforcement dominating legislative debates.

## Economic Situation

The Federal Reserve maintains elevated interest rates as it balances inflation control against recession risks. While inflation has moderated from 2022-2023 peaks, core prices remain above the 2% target. The labor market shows resilience with unemployment near historic lows, though wage growth has slowed. Housing affordability crisis persists with mortgage rates deterring buyers and constraining inventory.

Technology sector faces regulatory scrutiny over AI development, antitrust concerns, and content moderation. Major companies including Meta, Google, Amazon, and Apple navigate DOJ investigations and potential structural remedies. The green energy transition accelerates with significant Inflation Reduction Act investments flowing to manufacturing, though fossil fuel production remains robust.

## Social and Cultural Dynamics

Education policy battles intensify around curriculum content, particularly regarding race, gender, and American history. Book bans and restrictions on LGBTQ+ content proliferate in conservative states while progressive jurisdictions expand protections. Higher education confronts challenges over campus antisemitism, free speech boundaries, and affirmative action alternatives post-Supreme Court ruling.

Healthcare access remains politically divisive. Abortion restrictions vary dramatically by state following Dobbs decision, creating healthcare deserts and interstate travel for services. Opioid epidemic continues with fentanyl deaths elevated, prompting debates over harm reduction versus enforcement approaches.

Climate impacts intensify with increased wildfire severity in the West, hurricane intensity in the Southeast, and extreme heat events nationwide, driving infrastructure investment debates and insurance market stress in high-risk areas.

The 2026 midterm elections already loom large, with early positioning suggesting continued political volatility and governance challenges ahead.`,
    issues: [
      'Political polarization and election integrity debates',
      'Inflation management and economic uncertainty',
      'Immigration policy and border security',
      'Foreign policy challenges (China, Ukraine, Middle East)',
      'Social policy battles over education, abortion, and rights'
    ]
  },

  'Canada': {
    summary: `# Canada

Canada confronts a challenging economic and political moment in late 2025, with Prime Minister Justin Trudeau's Liberal government facing declining approval ratings, affordability crises, and complex international relationships. The country balances its progressive social policies with economic headwinds and rising public discontent over cost of living.

## Political Environment

The Trudeau government, in power since 2015, faces its most precarious political position ahead of the 2025 federal election deadline. The Conservative Party, led by Pierre Poilievre, has surged in polling with messaging focused on affordability, housing costs, and government spending. The NDP under Jagmeet Singh maintains its confidence-and-supply agreement with the Liberals, though tensions over policy priorities create governing challenges.

Key political flashpoints include carbon pricing policy, which Poilievre promises to eliminate, and the government's handling of foreign interference allegations, particularly concerning China and India. The inquiry into Chinese election interference continues generating headlines, while diplomatic tensions with India over allegations of extraterritorial killings strain bilateral relations.

## Economic Challenges

Housing affordability has reached crisis levels in major metropolitan areas. Toronto, Vancouver, and other cities face median home prices exceeding $1 million, with rent increases outpacing wage growth. The federal government's housing strategy, including incentives for construction and first-time buyer programs, struggles to meet demand. Immigration targets of 500,000 annually intensify housing pressure despite economic benefits.

The Bank of Canada navigates inflation management with interest rates elevated but showing signs of potential reduction as inflation moderates toward the 2% target. Consumer debt levels remain concerning, with many households strained by mortgage renewal at significantly higher rates than initial terms.

Economic growth remains sluggish, with GDP expansion below 2% annually. Resource sectors (oil, gas, mining, forestry) face commodity price volatility and transition pressures toward decarbonization. The automotive sector undergoes electric vehicle transition with significant government investments in battery manufacturing, particularly in Ontario and Quebec.

## Social and Healthcare Issues

The public healthcare system faces severe strain with physician shortages, emergency room closures, and surgical backlogs remaining elevated post-pandemic. Provincial governments explore policy innovations including increased private sector involvement in delivery (while maintaining public payment), prompting debates over healthcare model sustainability.

The opioid crisis continues devastating communities, particularly in British Columbia, Alberta, and Ontario. Safe supply programs, supervised consumption sites, and decriminalization pilots generate political controversy while public health officials emphasize harm reduction approaches.

Climate policy remains contentious. Carbon pricing faces Western Canada resistance while climate impacts—including catastrophic wildfires in 2023-2024, flooding, and extreme weather—demand infrastructure adaptation. The transition away from fossil fuels creates regional economic tensions between producing provinces (Alberta, Saskatchewan) and climate-ambitious jurisdictions (Quebec, British Columbia).

Truth and reconciliation efforts with Indigenous peoples advance slowly, with ongoing negotiations over land claims, resource revenue sharing, and addressing intergenerational trauma from residential schools.`,
    issues: [
      'Housing affordability crisis and supply shortage',
      'Political uncertainty ahead of federal election',
      'Healthcare system strain and accessibility',
      'Carbon pricing policy and climate transition',
      'Foreign interference concerns and diplomatic tensions'
    ]
  },

  'Mexico': {
    summary: `# Mexico

Mexico undergoes historic political transition in 2025 as Claudia Sheinbaum Pardo assumes the presidency, becoming the nation's first female leader. Her administration inherits complex challenges including security violence, migration pressures, USMCA trade relationship management, and ambitious infrastructure and energy projects amid fiscal constraints.

## Political Transition

President Sheinbaum, inaugurated in December 2024, represents continuity with her predecessor Andrés Manuel López Obrador (AMLO) while establishing her distinct governing approach. The ruling Morena party's congressional supermajority enables constitutional reforms but raises concerns over checks and balances, particularly regarding judicial independence and electoral oversight.

Key political priorities include judicial reform proposals that could alter Supreme Court composition and selection processes, generating pushback from legal communities and international observers concerned about rule of law implications. The administration also advances energy sovereignty policies emphasizing state-owned enterprises CFE and Pemex, despite concerns over efficiency and climate commitments.

Relations with the United States remain complex, balancing economic interdependence through USMCA against migration management pressures and sovereignty sensitivities. The Sheinbaum government negotiates U.S. demands for enhanced border security and asylum processing while addressing domestic migration flows from Central America and beyond.

## Security and Violence

Organized crime violence continues plaguing multiple regions despite government security strategies. Cartel conflicts over drug trafficking routes, particularly fentanyl precursor smuggling and production, drive homicide rates that remain elevated above 25,000 annually. States including Guanajuato, Michoacán, Guerrero, and parts of the north experience persistent insecurity affecting daily life and economic activity.

The military's expanded public security role under AMLO continues under Sheinbaum, including National Guard deployment and infrastructure project involvement, raising questions about civilian authority and long-term security strategy effectiveness. Journalist safety remains critical, with Mexico among the world's most dangerous countries for media workers.

## Economic Landscape

Nearshoring presents significant opportunities as companies diversify supply chains away from Asia. Manufacturing investment flows to northern states (Nuevo León, Coahuila, Chihuahua) in automotive, electronics, and other sectors. Infrastructure constraints including electricity supply, water availability, and transportation networks require urgent investment to capitalize on this reshoring trend.

Pemex's financial difficulties persist with massive debt burden and declining production despite government support. The energy sector faces tension between nationalist resource control policies and clean energy transition demands. Private renewable energy development encounters regulatory obstacles despite Mexico's solar and wind potential.

Remittances from U.S.-based workers exceed $60 billion annually, providing crucial household income support. Tourism remains robust with Caribbean coast destinations (Cancún, Tulum, Playa del Carmen) and cultural centers (Mexico City, Oaxaca, Guanajuato) driving foreign exchange, though security perceptions affect some markets.

Inflation has moderated from recent peaks but cost of living increases strain household budgets, particularly for basic goods and energy. Poverty reduction progress has stalled with approximately 40% of the population experiencing some form of economic vulnerability.

## Social Priorities

Water scarcity affects major urban areas and agricultural regions, with infrastructure investment and sustainable management critical. Education quality, healthcare accessibility, and inequality reduction remain long-term challenges requiring sustained policy attention and resources.`,
    issues: [
      'Organized crime violence and security challenges',
      'Migration pressures and U.S. relationship',
      'Judicial reform and institutional independence concerns',
      'Energy sector tensions between nationalism and transition',
      'Nearshoring opportunities amid infrastructure constraints'
    ]
  },

  'Brazil': {
    summary: `# Brazil

Brazil navigates political stabilization under President Luiz Inácio Lula da Silva while confronting severe economic constraints, Amazon deforestation pressures, and deep societal divisions following years of polarization. The nation's global significance on climate, agriculture, and regional leadership faces tests from fiscal realities and governance challenges.

## Political Landscape

President Lula, inaugurated in January 2023 after narrowly defeating Jair Bolsonaro, governs through a broad but fractious coalition spanning center-left to center-right parties. This arrangement enables legislative progress but requires constant negotiation and compromise that can dilute policy ambitions. The administration prioritizes social spending restoration, environmental protection, and international re-engagement after Bolsonaro's isolation.

Tensions with Bolsonaro supporters persist, including ongoing investigations into the January 8, 2023 capital invasion and alleged coup plotting. The former president faces multiple legal proceedings while maintaining significant political influence and potential candidacy prospects depending on judicial outcomes. Political violence incidents and extremist rhetoric continue concerning democratic institutions.

Congress remains ideologically diverse with strong rural/agricultural caucus (bancada ruralista), evangelical bloc, and security-focused members often opposing Lula's environmental and social policies. The Supreme Court plays an active role in political disputes, including content moderation decisions and investigations into anti-democratic activities, generating debates over judicial overreach.

## Economic Challenges

Fiscal constraints dominate economic policy. Public debt exceeds 80% of GDP with mandatory spending consuming most revenue, leaving limited discretionary resources. The Lula administration struggles to balance social program expansion against market demands for fiscal responsibility. Interest rates remain elevated as the central bank combats persistent inflation, constraining growth and increasing debt service costs.

Tax reform approved in 2023 aims to simplify Brazil's notoriously complex system, transitioning to a value-added tax model over several years. Implementation challenges and transitional provisions will test effectiveness. Additional fiscal framework rules attempt to impose spending discipline while allowing targeted social investments.

Economic growth remains sluggish around 2% annually. Commodity exports (soybeans, iron ore, oil, beef, poultry) provide foreign exchange but create vulnerability to global price fluctuations and Chinese demand. Manufacturing competitiveness suffers from high costs (energy, logistics, taxation, labor) phenomenon termed "Custo Brasil."

Unemployment and informal employment remain elevated. Nearly 40% of workers operate outside formal structures without benefits or protections. Poverty and extreme poverty rates, reduced significantly during Lula's first presidency (2003-2010), increased during recent years and require renewed attention.

## Environmental Issues

Amazon deforestation represents Brazil's most globally significant challenge. After surging under Bolsonaro, deforestation rates have declined under Lula's renewed enforcement and international partnerships, but remain well above sustainable levels. Balancing economic development pressures in the Amazon region against global climate commitments and domestic environmental protection creates ongoing political tensions.

Agricultural expansion, cattle ranching, illegal logging, and mining drive deforestation despite government efforts. Indigenous land protection and demarcation face political opposition from agricultural interests. Climate impacts including droughts, floods, and changing precipitation patterns affect agriculture and urban water supplies, with major cities experiencing severe water stress.

## Social Dynamics

Inequality remains profound despite social programs. Violence, particularly in urban peripheries controlled by criminal factions, affects millions. Education quality gaps between public and private systems perpetuate class divisions. Healthcare access varies dramatically by region and socioeconomic status despite universal system principles.`,
    issues: [
      'Fiscal constraints limiting policy ambitions',
      'Amazon deforestation and climate commitments',
      'Political polarization and democratic stability',
      'Economic growth and competitiveness challenges',
      'Inequality and social program sustainability'
    ]
  },

  'Argentina': {
    summary: `# Argentina

Argentina experiences political and economic upheaval in 2025 under libertarian President Javier Milei, whose radical policy shifts aim to resolve decades of dysfunction through shock therapy measures. The nation faces its worst economic crisis in years with triple-digit inflation, poverty affecting over 50% of the population, and profound uncertainty about reform sustainability.

## Political Revolution

Javier Milei's presidency, beginning December 2023, represents a dramatic break from Argentina's traditional political establishment. The self-described "anarcho-capitalist" implements aggressive austerity measures, government restructuring, and market liberalization policies that generate intense debate and social resistance. His confrontational style and unconventional communication—including social media attacks on critics, cultural war positioning, and dramatic public statements—polarizes society.

Congress blocks some Milei initiatives while approving others through modified omnibus legislation. The president governs extensively through emergency decrees (DNUs) testing constitutional limits. Traditional Peronist opposition, though weakened by economic crisis responsibility, mobilizes protests and legal challenges against reforms affecting labor rights, subsidies, and public services.

Provincial relationships strain as federal transfers decrease, forcing governors to manage fiscal crises locally. Social movements, labor unions, and leftist organizations organize regular demonstrations against spending cuts and privatization plans. Milei's administration dismisses criticism as defense of failed status quo, framing reforms as necessary surgery to save the patient.

## Economic Crisis and Reform

Inflation exceeding 200% annually devastates purchasing power and savings. Milei's approach includes dramatic peso devaluation, central bank intervention reduction, and eventual currency competition plans potentially culminating in dollarization. Monthly inflation rates, while moderating from peaks, remain in double digits affecting basic goods access.

Fiscal deficit reduction stands as the primary policy target. Government ministries were cut from 18 to 9, public employment reduced, infrastructure projects suspended, and subsidies for energy, transportation, and other services slashed. These measures produce fiscal surplus for the first time in years but impose severe hardship on vulnerable populations.

Poverty rates exceed 50% with extreme poverty around 15%, levels not seen since 2001-2002 crisis. Food bank demand surges while social program spending decreases. The administration argues short-term pain is necessary for long-term stability, but social tolerance faces limits.

Central bank reserves remain critically low despite IMF program disbursements. The $44 billion IMF debt requires renegotiation with Milei seeking additional support for ambitious reforms. Capital controls (cepo cambiario) persist despite promises to eliminate them, maintaining exchange rate distortions and limiting economic activity.

Agricultural exports provide crucial foreign exchange with soybeans, wheat, corn, and beef generating most hard currency. However, sector competitiveness suffers from export taxes (retenciones) that Milei aims to reduce gradually.

## Structural Reforms

Labor market reform proposals face union opposition, seeking to reduce dismissal costs, enable part-time contracting, and limit strike impacts. Privatization plans target state airlines, energy companies, and other enterprises, though implementation proves complex.

Regulatory reduction through decree elimination aims to reduce bureaucracy and costs. Energy sector deregulation could unlock Vaca Muerta shale oil and gas potential with massive deposits rivaling major producers if investment materializes.

## Social Impact

Healthcare and education sectors face funding pressure as provincial budgets contract. University funding disputes generate protests. Crime and security concerns grow in major cities including Buenos Aires and Rosario, with drug trafficking and organized crime increasing.

The 2025 legislative elections will test Milei's popular support and determine whether he can expand congressional backing for deeper reforms or faces repudiation of his approach.`,
    issues: [
      'Hyperinflation and currency instability',
      'Extreme poverty and social hardship',
      'Radical economic reform sustainability',
      'Labor and social movement resistance',
      'Fiscal adjustment and IMF negotiations'
    ]
  },

  'Chile': {
    summary: `# Chile

Chile continues navigating political transformation following years of social upheaval, constitutional debates, and economic adjustment. President Gabriel Boric's left-wing government confronts constrained fiscal space, security challenges, and ongoing constitutional reform efforts after voters twice rejected new charter proposals, leaving the country seeking political consensus.

## Political Evolution

President Boric, elected in 2021 representing the leftist Frente Amplio coalition, governs amid challenging circumstances. His initial progressive agenda faced rejection when a proposed new constitution was defeated in September 2022 referendum by nearly 62%. A second constitutional process, producing a more conservative document, was similarly rejected in December 2023 referendum with 55% opposition.

These dual rejections left Chile with its Pinochet-era constitution (though significantly amended) and political system searching for reform pathways. A new constitutional council was established to attempt a third process, seeking middle ground between the two rejected proposals. Constitutional fatigue affects public engagement, though desires for pension, healthcare, and political system reforms persist.

Boric's government shifted toward centrist positioning after the initial referendum defeat, moderating some proposals and emphasizing governability. His Approval Dignidad coalition lacks congressional majorities, requiring negotiation with opposition parties including Christian Democrats, though the right-wing Republican Party led by José Antonio Kast opposes most government initiatives.

## Economic Management

Chile's economy faces moderate growth around 2-2.5% annually with inflation moderating from recent peaks toward the central bank's 3% target. Interest rate cycles affect mortgage markets and consumer spending. Copper exports, representing roughly 50% of export revenue, depend on global demand particularly from China, creating vulnerability to price fluctuations and Chinese economic slowdown.

Lithium resources position Chile advantageously for electric vehicle battery supply chains. The government's nationalization plans for lithium extraction seek to increase state participation and revenue while maintaining private sector involvement, but regulatory uncertainty affects investment. Current production from Atacama region brine operations faces competition from Australian hard rock mining with faster expansion timelines.

Pension system reform represents a critical political challenge. The current private AFP (pension fund administrator) system, implemented during Pinochet era, produces retirement benefits widely considered inadequate. Reform proposals generating political debate include increased employer contributions, greater state role, and solidarity mechanisms, but consensus remains elusive given ideological divisions.

Tax reform approved in 2023 increases revenue through wealth taxes, tax evasion measures, and corporate rate adjustments, though revenue impacts will develop over time. Fiscal discipline maintains Chile's investment-grade credit rating and macroeconomic stability despite political turbulence.

## Social and Security Challenges

Immigration, particularly from Venezuela, Haiti, and Colombia, creates integration challenges and strains public services in northern regions and Santiago. The government balances humanitarian responsibilities against public concerns over irregular migration, implementing more restrictive border policies.

Security issues have escalated in certain areas, particularly the Araucanía region where Mapuche land conflicts involve violence, arson attacks on forestry equipment, and complex historical grievances over indigenous territories. Drug trafficking and organized crime increase in urban areas including Santiago with foreign criminal groups establishing operations.

## Education and Healthcare

Public education and healthcare systems face quality and access concerns despite universal coverage principles. Long wait times for medical procedures and specialist care persist. Education quality gaps between public and private schools perpetuate inequality.

Climate impacts including megadrought affecting central and northern regions require water management innovations and agricultural adaptations. Santiago faces recurring air quality challenges from geographic conditions and emissions.`,
    issues: [
      'Constitutional reform impasse after dual rejections',
      'Pension system inadequacy requiring reform',
      'Immigration pressures and integration',
      'Araucanía security and Mapuche land conflicts',
      'Lithium policy and resource nationalism'
    ]
  },

  'Colombia': {
    summary: `# Colombia

Colombia undergoes significant policy shifts under President Gustavo Petro, the nation's first leftist leader, attempting ambitious reforms to address inequality, violence, and drug trafficking through negotiation and social investment. Implementation faces political constraints, fiscal limitations, and resistance from established interests, while security challenges persist despite peace efforts.

## Political Transformation

President Petro, inaugurated in August 2022, pursues a transformative agenda termed "Total Peace" seeking negotiated resolutions with remaining armed groups including ELN guerrillas, dissident FACA factions, and criminal organizations. This approach marks significant departure from predecessor's military-focused strategy, prioritizing dialogue and addressing root causes of violence.

However, Total Peace faces major obstacles. ELN negotiations advance intermittently with unilateral ceasefires collapsing amid mutual accusations of violations. Dissident groups demonstrate limited unified command, complicating negotiations. Criminal bands (GAOs - Organized Armed Groups) in drug trafficking and illegal mining show minimal interest in genuine demobilization.

Petro's relationship with Congress remains contentious. His coalition lacks stable majority, forcing constant negotiation and compromise that dilutes reform proposals. Opposition from traditional parties (Centro Democrático, conservatives), business sectors, and regional elites constrains policy implementation. Petro's confrontational rhetoric against these "oligarchies" and international criticism of traditional anti-drug approaches generates controversy.

## Security Landscape

Violence persists in peripheral regions despite peace efforts. Drug trafficking organizations, particularly Clan del Golfo, Segunda Marquetalia, and others, control territory in Pacific coast regions, Catatumbo, and parts of the Amazon. Coca cultivation remains elevated despite eradication policy shifts away from aerial spraying toward voluntary substitution programs that show limited results.

Forced displacement continues affecting rural communities caught between armed groups competing for territorial control and illegal economy revenue (drugs, illegal mining, extortion). Human rights defenders, social leaders, and former FARC combatants face targeted killings with hundreds murdered since the 2016 peace accord.

Border regions with Venezuela remain particularly volatile with armed groups operating across borders, smuggling, and Venezuelan irregular migration creating complex security dynamics. The humanitarian situation of Venezuelan migrants and refugees—Colombia hosts nearly 3 million—strains public services and generates social tensions.

## Economic Challenges

Economic growth remains modest around 2% annually with persistent inequality and informal employment affecting nearly 60% of workers. Oil and coal exports provide crucial revenue but face price volatility and declining production from aging fields requiring new exploration that environmental commitments complicate.

Fiscal constraints limit Petro's ambitious social spending plans. Tax reform approved in 2022 increased revenue from wealthy individuals and corporations, but collection challenges and economic impacts generate debate. Pension reform proposals face strong opposition from unions and middle-class beneficiaries of current system despite fiscal sustainability concerns.

Healthcare reform attempting to restructure the EPS (private health promoter) system stalls in Congress amid concerns over implementation feasibility and opposition from health sector interests. Education investment increases aim to expand access, but quality gaps persist.

## Energy Transition

Petro's commitment to ending new oil and gas exploration contracts provokes controversy. Critics argue Colombia requires hydrocarbon revenue for fiscal stability and lacks capacity to rapidly replace this income through alternative sectors. The government emphasizes renewable energy expansion, environmental protection, and Amazon conservation, positioning Colombia as climate leader.

## Social Dynamics

Urban protests over economic conditions, public services, and specific policies occur regularly. The 2021 national strike precedent affects government-society relations. Indigenous and Afro-Colombian communities demand greater autonomy, land rights, and protection from violence in their territories.`,
    issues: [
      'Total Peace strategy facing implementation challenges',
      'Persistent drug trafficking and violence',
      'Fiscal constraints limiting social reform ambitions',
      'Venezuelan migration humanitarian and integration challenges',
      'Energy policy tensions between oil dependence and climate goals'
    ]
  },

  'Peru': {
    summary: `# Peru

Peru endures profound political instability and governance crisis following the December 2022 ousting of President Pedro Castillo, whose removal sparked deadly protests and revealed deep regional, ethnic, and socioeconomic divisions. President Dina Boluarte's government struggles with legitimacy deficits, corruption investigations, and inability to address structural challenges while political system dysfunction perpetuates.

## Political Crisis

President Boluarte, Castillo's vice president who assumed office after his removal for attempting to dissolve Congress, governs with historically low approval ratings below 10%. Her administration faces demands for resignation, early elections, and constitutional reform from social movements, leftist parties, and particularly rural and indigenous populations in southern highland regions who supported Castillo.

The December 2022-January 2023 protests resulted in approximately 60 deaths, mostly in southern regions (Puno, Ayacucho, Apurímac) during confrontations with security forces. These deaths remain politically sensitive with limited accountability, fueling grievances. Roadblocks, strikes, and demonstrations continue periodically, particularly around mining conflicts and government policies.

Congress, deeply unpopular with approval ratings around 5%, resists calls for dissolution and early elections despite institutional crisis. Political fragmentation—no party holds more than 11% of seats—prevents stable coalitions and coherent policymaking. Short-term calculations, corruption allegations, and influence-peddling scandals affect multiple legislators and parties.

Investigations into Boluarte include "Rolexgate" scandal over luxury watch gifts, alleged illicit enrichment, and responsibility for protest deaths. The political system's dysfunction creates vacuum where urgent problems go unaddressed while political class focuses on survival and positioning.

## Economic Situation

Peru's economy grew robustly for decades until recent political instability affected investment and confidence. Growth projections for 2025 remain moderate around 2.5-3% as political uncertainty deters major investments despite strong fundamentals including fiscal discipline, inflation control, and export capacity.

Mining sector generates approximately 60% of export revenue with copper, gold, zinc, and silver production. However, social conflicts around mining projects create operational risks. Las Bambas copper mine faces periodic community blockades over environmental and revenue-sharing disputes. Tía María copper project in Arequipa remains blocked for years despite permits due to local opposition.

Informal employment affects 70%+ of workers, limiting tax revenue, labor protections, and productivity. Small-scale and artisanal miners operate in legal gray zones, with illegal gold mining causing environmental devastation in Madre de Dios Amazon region, involving mercury contamination and deforestation.

Infrastructure gaps constrain growth, particularly in rural areas where roads, electricity, water, and internet access remain limited. The government's capacity to execute investment projects is weakened by bureaucratic obstacles and corruption that previous administrations failed to fully address.

## Social and Regional Divisions

Deep inequalities persist between coastal urban areas (particularly Lima concentrating economic activity and political power) and highland/Amazon regions with higher poverty, indigenous populations, and limited state presence. This geographic dimension of inequality reinforces political disconnection and grievances.

Education quality gaps, healthcare access problems, and chronic underinvestment in public services affect peripheral regions disproportionately. The COVID-19 pandemic exposed these vulnerabilities with Peru experiencing among the world's highest per capita death rates.

## Security and Corruption

Criminal violence increases in urban areas with extortion, contract killings, and gang activity growing in Lima and other cities. Drug trafficking through VRAEM (Apurímac, Ene, and Mantaro River Valleys) region and ports like Callao involves Shining Path remnants and criminal organizations with connections to international cartels.

Corruption investigations affect current and former presidents. Pedro Castillo faces prosecution from prison for rebellion charges. Multiple former presidents including Alejandro Toledo, Ollanta Humala, and others face or faced corruption proceedings. This pattern reinforces public cynicism about political class.

The 2026 presidential and congressional elections approach with profound uncertainty about candidates, platforms, and whether the political system can produce effective governance.`,
    issues: [
      'Profound political crisis and legitimacy deficit',
      'Mining conflicts and community relations',
      'Geographic and ethnic inequalities',
      'Institutional dysfunction and corruption',
      'Social protest movements and unresolved grievances'
    ]
  },

  'Venezuela': {
    summary: `# Venezuela

Venezuela remains mired in complex humanitarian, political, and economic crisis under Nicolás Maduro's authoritarian government despite modest economic stabilization from catastrophic collapse levels. The 2024 presidential election's contested results, followed by Maduro's inauguration despite evidence of opposition victory, intensifies international isolation and domestic repression while millions of displaced Venezuelans create the hemisphere's largest refugee crisis.

## Political Authoritarianism

The July 2024 presidential election represented a critical juncture. Opposition candidate Edmundo González, unified behind María Corina Machado's movement after her disqualification, appeared to defeat Maduro based on opposition-collected voting tallies from polling station receipts. However, the Maduro-controlled National Electoral Council declared Maduro winner without publishing detailed results, prompting widespread international rejection and domestic protests.

Government repression of post-election demonstrations resulted in deaths, thousands of arrests, and torture allegations documented by human rights organizations. Opposition leaders face persecution: González fled to exile in Spain, while Machado remains in hiding facing arrest threats. The government criminalized dissent, prosecuting protesters under terrorism and conspiracy charges.

The regime maintains power through security forces loyalty (military, police, intelligence services, paramilitary colectivos), Cuban advisory support, and systematic repression apparatus. Economic patronage through PDVSA (state oil company), ministries, and mission programs keeps core supporters dependent on government largesse. International sanctions affect access to finance and technology but haven't dislodged Maduro.

## International Isolation

The United States, European Union, and most Latin American democracies reject Maduro's election claim and maintain or increase sanctions targeting regime officials and economic sectors. Recognition of González as legitimate president-elect by several countries creates parallel diplomatic dynamics. However, Russia, China, Iran, Cuba, and Nicaragua provide political support and economic lifelines.

Oil sanctions constrain Venezuela's primary revenue source, though enforcement gaps allow some exports particularly to China and black market sales. Gold exports to Turkey and UAE provide hard currency. Cryptocurrency adoption for international transactions attempts to circumvent financial system exclusion.

## Economic Partial Stabilization

After GDP collapse exceeding 75% from 2013-2020, representing one of history's worst peacetime economic contractions, Venezuela experienced modest recovery from catastrophically low baseline. GDP growth of 3-5% annually in 2023-2025 represents stabilization, not prosperity, with economy roughly one-quarter of 2013 level.

Dollarization occurred informally as hyperinflation destroyed bolivar utility. Approximately 60-70% of transactions occur in dollars, particularly for durable goods, real estate, and significant purchases. This reduces inflation from peak 130,000% annually to estimated 150-200% in 2025—still extremely high but no longer hyperinflation territory.

Oil production partially recovered to approximately 800,000-900,000 barrels per day from nadir below 500,000, but remains far below historical 3+ million bpd capacity. Industry decay from underinvestment, sanctions, corruption, and exodus of technical professionals requires massive capital injection unlikely given political circumstances.

Poverty affects approximately 80% of population with extreme poverty around 50%, translating to food insecurity, healthcare collapse, infrastructure breakdown, and service failures. Private sector operates where possible, particularly import commerce for those with dollar access, creating two-tier economy.

## Humanitarian Crisis

Healthcare system collapse creates medication shortages, equipment failures, and professional exodus. Preventable diseases resurge including measles, diphtheria, and malaria. Maternal and infant mortality rates increased dramatically. Those with resources seek private care or travel abroad while majority lacks basic healthcare access.

Education system suffers from teacher departures (seeking better pay), infrastructure deterioration, and student malnutrition affecting learning. University closures and restrictions on academic freedom damaged higher education.

Migration exceeds 7 million Venezuelans (nearly 25% of population) seeking refuge and opportunity throughout Latin America, North America, and beyond. This represents the hemisphere's largest displacement crisis with major concentrations in Colombia, Peru, Chile, Ecuador, Brazil, and the United States.

## Opposition Strategy

The opposition faces strategic dilemmas: how to pressure regime change without external military intervention (which they generally oppose), maintain international attention, prevent normalization of Maduro's fraudulent victory, and protect activists inside Venezuela from repression.`,
    issues: [
      'Fraudulent 2024 election and authoritarian consolidation',
      'Humanitarian crisis and economic devastation',
      'Mass migration creating regional refugee crisis',
      'International sanctions and isolation',
      'Opposition repression and limited domestic space'
    ]
  },

  'Ecuador': {
    summary: `# Ecuador

Ecuador confronts severe security deterioration as drug trafficking organizations transform the country into a violent battleground, shattering its reputation for relative tranquility. President Daniel Noboa's government attempts to restore order through aggressive security operations and international cooperation, while economic challenges, political dysfunction, and November 2025 elections create additional complexity.

## Security Crisis

Ecuador experienced shocking violence escalation beginning in 2021-2022 and intensifying through 2024-2025. Previously marginal criminal groups expanded dramatically as Mexican cartels (particularly Sinaloa and CJNG) established partnerships with local organizations to control cocaine transit routes from Colombia and Peru to international markets, especially through Guayana ports.

Major criminal groups including Los Choneros, Los Lobos, Tiguerones, and others engage in territorial wars inside prisons and communities, generating massacres, assassinations, and terror. Prison riots since 2021 killed hundreds of inmates through beheadings, burnings, and other brutal methods as authorities lost control of detention facilities.

President Noboa declared "internal armed conflict" in January 2024 following gang leader escape and television studio invasion during live broadcast—a shocking demonstration of criminal impudence. Security forces conduct operations to retake prison control, patrol high-crime neighborhoods, and disrupt criminal infrastructure.

However, violence persists with murder rates exceeding 45 per 100,000 inhabitants—among the highest in Latin America and dramatically above historical Ecuadorian levels around 5-6 per 100,000. Extortion affects businesses forcing closures, while assassinations target politicians, judges, prosecutors, and journalists. Fernando Villavicencio, presidential candidate, was murdered during the 2023 campaign.

International cooperation with the United States, Colombia, and others provides intelligence, equipment, and training. Joint naval operations intercept drug shipments, while police cooperation targets gang leadership. But corruption infiltration of security forces, judicial system, and politics undermines enforcement.

## Political Environment

President Noboa, elected in 2023 special election following Guillermo Lasso's dissolution of Congress, faces November 2025 regular elections with uncertain prospects. His security-focused governance shows some results but violence remains elevated. Constitutional referendum in April 2025 on security measures and constitutional reforms produced mixed results.

Noboa's relationship with the National Assembly is contentious. The Correísta bloc (supporters of former president Rafael Correa) represents the largest faction opposing Noboa's policies while indigenous movements (particularly CONAIE) mobilize against economic policies and resource extraction projects.

Vice President Verónica Abad faced suspension amid political infighting, raising questions about power dynamics and succession. Judicial independence concerns persist as attorney general selection and court appointments involve political maneuvering.

## Economic Challenges

Ecuador's dollarized economy provides price stability but eliminates monetary policy tools, requiring fiscal discipline. Economic growth remains moderate around 2-3% annually with employment creation insufficient for growing labor force. The security crisis affects tourism, foreign investment, and business confidence.

Oil exports from Amazon production provide crucial revenue, but declining reserves and environmental pressures create long-term challenges. Banana, shrimp, cacao, and flower exports diversify economy. Remittances from emigrant workers (United States, Spain, elsewhere) support household incomes.

Public debt approaches 60% of GDP with limited fiscal space for increased spending. IMF program requires fiscal targets constraining social investment. Fuel subsidy debates recur, with removal attempts sparking major protests in 2019 and periodic tensions.

## Social Dynamics

Indigenous movements demand consultation rights over mining and oil projects in ancestral territories. The Yasuní National Park oil exploitation decision despite earlier preservation commitments generates environmental controversy.

Migration both from Ecuador (particularly to the United States) and through Ecuador (Colombian, Venezuelan, and extra-regional migrants heading north) creates social and logistical challenges.

The November 2025 elections will determine whether Noboa's security approach gains endorsement or whether voters seek alternative strategies to address violence, corruption, and economic stagnation.`,
    issues: [
      'Extreme violence from drug trafficking organizations',
      'Prison system collapse and gang control',
      'Political instability and November 2025 elections',
      'Economic constraints under dollarization',
      'Corruption infiltration of state institutions'
    ]
  },
}

async function generateAllCategoryBatch1() {
  console.log('🚀 Generating ALL category summaries for Batch 1 (10 countries)\n')

  let successCount = 0
  let errorCount = 0

  for (const country of COUNTRIES) {
    try {
      const data = SUMMARIES[country.name]

      if (!data) {
        console.log(`❌ No summary data for ${country.name}`)
        errorCount++
        continue
      }

      console.log(`Processing: ${country.name}`)

      await prisma.locationSummary.upsert({
        where: {
          name_type_category: {
            name: country.name,
            type: 'country',
            category: 'all',
          },
        },
        create: {
          name: country.name,
          type: 'country',
          country: country.name,
          lat: country.lat,
          lng: country.lng,
          category: 'all',
          summary: data.summary,
          issues: JSON.stringify(data.issues),
          topStories: JSON.stringify([]),
          storyCount: 0,
          updatedAt: new Date(),
        },
        update: {
          summary: data.summary,
          issues: JSON.stringify(data.issues),
          topStories: JSON.stringify([]),
          storyCount: 0,
          updatedAt: new Date(),
        },
      })

      console.log(`✅ ${country.name} - Saved (${data.summary.length} chars)`)
      successCount++

    } catch (error) {
      console.error(`❌ Error saving ${country.name}:`, error)
      errorCount++
    }
  }

  console.log(`\n📊 Batch 1 Complete:`)
  console.log(`   ✅ Success: ${successCount}`)
  console.log(`   ❌ Errors: ${errorCount}`)
  console.log(`   📝 Total: ${COUNTRIES.length}`)
}

generateAllCategoryBatch1()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
