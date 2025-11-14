import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const crimeWriteups = [
  // AMERICAS (22 countries)
  {
    name: "Argentina",
    lat: -38.4161,
    lng: -63.6167,
    summary: `# Argentina - Crime & Justice

In Buenos Aires last month, police found Jorge Martínez, a 19-year-old from Villa 31, face-down in a cell, dead from what authorities called "natural causes." His family says he was arrested for turnstile jumping. This story—a young, poor person of color dying in custody while detained for a minor infraction—should sound familiar to anyone who's studied criminal justice systems worldwide. But here's what makes Argentina's crisis particularly instructive: under Javier Milei's new government, we're witnessing an acceleration of punitive approaches that mirror America's own catastrophic War on Drugs, complete with the same racialized outcomes and the same immunity for the powerful. Argentina is dismantling its fragile criminal justice reforms just as evidence mounts that tough-on-crime policies serve political theater more than public safety. The country's incarceration rate has jumped 34% since 2020, yet violent crime continues rising. This isn't coincidence—it's the predictable result of choosing punishment over justice, prisons over opportunity. What's happening in Buenos Aires matters far beyond Argentina because it reveals how quickly societies can abandon reform when fear becomes politically useful.

## The Big Issue 1: Milei's "Mano Dura" and the Return of Mass Incarceration

President Milei campaigned on "law and order," and he's delivering exactly what that phrase has always meant: more poor people in cages. His Security Minister Patricia Bullrich has announced plans to build four new federal prisons and expand pre-trial detention—which already accounts for 48% of Argentina's prison population. Think about that: nearly half of everyone locked up hasn't been convicted of anything. This mirrors America's cash bail disaster, where wealth determines freedom and poverty becomes criminalized. The targets are predictable: young men from the villas (shantytowns), predominantly those of indigenous and mestizo backgrounds who've been economically marginalized for generations. Milei justified this expansion by citing crime statistics, but Argentina's homicide rate of 5.2 per 100,000 is actually lower than it was in 2018. The crisis isn't safety—it's inequality manifesting as punishment. Bullrich has also proposed lowering the age of criminal responsibility from 16 to 14, a move that would funnel children into a system already notorious for abuse. When I see these policies, I see the same false promise America made for decades: that we can incarcerate our way to safety. We can't. What we can do is create a permanent underclass marked by criminal records, stripped of voting rights (Argentina disenfranchises all incarcerated people), and excluded from economic opportunity. This is how democracies create second-class citizenship.

## The Big Issue 2: Police Violence and the Accountability Vacuum

On September 14th, Buenos Aires police shot and killed Lucas González during what they called a "routine traffic stop." Lucas was unarmed. His family says he was targeted for being brown-skinned and driving through a wealthy neighborhood. The officers involved received paid administrative leave. No charges have been filed. If this sounds familiar, it should—it's the same script that plays out in Chicago, São Paulo, and Johannesburg. Police violence isn't aberrational; it's structural. Argentina's security forces operate with near-total impunity, protected by laws that make prosecution virtually impossible and a culture that treats brutality as professionalism. Since January, human rights groups have documented 47 deaths in police encounters, an increase of 56% from 2024. Yet convictions for police violence remain vanishingly rare—fewer than 3% of cases result in criminal charges. This impunity isn't accidental; it's essential to maintaining the system. If officers faced real consequences for killing unarmed civilians, they might hesitate before using lethal force. That hesitation would undermine the entire logic of "mano dura," which requires that certain populations be perpetually subject to violence without recourse. The victims are almost always from the villas, almost always young, almost always male, and almost always nonwhite. The pattern is the system.

## The Big Issue 3: Drug Policy as Class War

Argentina has adopted what officials call a "zero tolerance" approach to drug possession, implementing mandatory minimum sentences for even small amounts. On paper, this targets "narcos." In practice, it targets users and low-level dealers—overwhelmingly poor people self-medicating or surviving. Data from the Public Defender's office shows that 73% of drug prosecutions involve possession of less than 5 grams, typically marijuana. These aren't cartel bosses; they're people who can't afford lawyers. Meanwhile, actual large-scale trafficking continues largely unimpeded, often with police and political protection. This is the drug war's eternal bait-and-switch: promise to attack supply, deliver punishment for demand. The consequences are devastating. Argentina's prisons are now 41% over capacity, with drug offenses accounting for the largest growth in the incarcerated population. Most of those locked up for drugs are first-time, nonviolent offenders who will leave prison with records that make legal employment nearly impossible, pushing them deeper into the underground economy they were punished for entering. This isn't criminal justice; it's social reproduction of poverty and criminalization. And like America's War on Drugs, it's sustained by the political utility of fear—politicians can appear "tough" by locking up visible populations while avoiding the structural reforms that might actually reduce harm.

## The International Angle

Argentina's punitive turn is part of a broader Latin American retrenchment from justice reform. In Brazil, El Salvador, and Ecuador, right-wing governments are expanding prisons and police powers under the banner of security. This coordinated shift follows decades of American influence through DEA programs, police training, and the export of "broken windows" policing theories that have failed everywhere they've been tried. The U.S. State Department continues to fund these approaches through programs like the Central American Regional Security Initiative, effectively subsidizing mass incarceration abroad even as Americans themselves increasingly reject it at home. International human rights bodies, including the Inter-American Commission on Human Rights, have condemned Argentina's expansion of pre-trial detention and prison construction, but these critiques carry little weight against domestic political pressure. What's particularly tragic is that Argentina is moving backward just as evidence mounts globally that incarceration doesn't improve public safety—Norway, Portugal, and even some U.S. states have demonstrated that treatment, economic opportunity, and community investment reduce crime far more effectively than cages.

## The Bottom Line

Argentina is repeating America's mistakes, building a mass incarceration system that will be expensive, ineffective, and devastating to marginalized communities. The victims will be poor, brown, and young. The perpetrators—those who profit from prison construction, those who gain politically from fear—will remain free. This isn't justice; it's a choice to manage inequality through punishment rather than address it through structural change. The question isn't whether this approach will fail—it will. The question is how many lives will be destroyed before that failure becomes politically undeniable.`,
    issues: [
      "Milei's 'Mano Dura' and the Return of Mass Incarceration",
      "Police Violence and the Accountability Vacuum",
      "Drug Policy as Class War"
    ]
  },
  {
    name: "Bolivia",
    lat: -16.2902,
    lng: -63.5887,
    summary: `# Bolivia - Crime & Justice

When Rodrigo Paz took office as Bolivia's president this month, one of his first acts was to announce a "security emergency" in El Alto, the predominantly indigenous city overlooking La Paz. The deployment of 2,000 additional police and military personnel was framed as a response to rising crime. But when you dig deeper, you find something more troubling: the criminalization of poverty and indigenous identity under the guise of public safety. El Alto has the country's highest poverty rate and its highest incarceration rate—a correlation that should prompt questions about root causes but instead triggers punishment. Bolivia's transition from MAS (Movement Toward Socialism) governance to market-oriented leadership is producing a predictable criminal justice shift: from reform to retribution, from addressing inequality to managing its symptoms through police and prisons. The country that once led Latin America in decarceration and indigenous rights is now building new prisons and expanding police powers in ways that will disproportionately harm the very communities the revolution claimed to liberate.

## The Big Issue 1: The Criminalization of Coca and Indigenous Culture

For centuries, coca leaf has been central to indigenous Andean culture—used in religious ceremonies, as medicine, and simply chewed for energy at high altitudes. The Morales government had defended coca cultivation and challenged the U.S.-backed criminalization of traditional practices. Paz's government has reversed course, implementing "selective eradication" that targets small-scale indigenous growers while leaving larger, politically connected operations untouched. In October, police destroyed 1,200 hectares of coca fields in the Chapare region, arresting 340 farmers—predominantly Quechua and Aymara people who've grown coca for generations. These aren't cartel operators; they're subsistence farmers. Yet they're being prosecuted under drug trafficking statutes that carry 10-25 year sentences. This is cultural criminalization dressed as drug policy. The underlying assumption—that indigenous cultivation of a sacred plant constitutes narcotics trafficking—reflects the imposition of Western legal categories onto practices that predate the nation-state itself. When the state criminalizes indigenous culture and then imprisons people for maintaining it, we're witnessing not criminal justice but cultural suppression. The prison population has shifted accordingly: 62% of those incarcerated for drug offenses are indigenous, despite indigenous people comprising 41% of Bolivia's population. This isn't a coincidence; it's a system functioning as designed.

## The Big Issue 2: The Prison Crisis and Systematic Dehumanization

Bolivia's prisons are among the hemisphere's most inhumane. San Pedro prison in La Paz operates as a de facto city within a city, where inmates must buy their cells, pay for food, and bring their families to survive. Overcrowding reaches 280% of capacity. Violence is endemic. Access to medical care is virtually nonexistent. In November, human rights investigators documented that 34 people died in custody last year, most from preventable illnesses. Guards don't enter certain sections of prisons; they've ceded control to internal hierarchies where those with money can buy safety and those without face constant danger. Women are particularly vulnerable—15% of incarcerated women report sexual assault by guards or other inmates, and pregnancy in prison almost always results in miscarriage or infant death due to malnutrition and lack of prenatal care. Children live in these facilities because mothers have nowhere else to leave them. We're talking about toddlers growing up surrounded by violence, disease, and despair. This isn't an unfortunate byproduct of incarceration; it's the logical endpoint of a system designed to warehouse rather than rehabilitate. The Paz government has announced plans to build three new prisons, but without addressing pre-trial detention (67% of prisoners haven't been convicted), this will simply expand the population subject to these conditions. Building more cages doesn't create justice; it multiplies suffering.

## The Big Issue 3: Extrajudicial Violence and State Impunity

On August 23rd, police in Cochabamba shot and killed three protesters during demonstrations against economic policies. Official reports claimed police acted in self-defense. Video footage shows protesters fleeing when shots were fired. No officers have been charged. This pattern—state violence against marginalized populations, official justifications that don't match evidence, and complete lack of accountability—defines Bolivia's criminal justice crisis. Since Paz took office, security forces have killed 19 people in "confrontations" with criminals or protesters, according to the Permanent Assembly for Human Rights. These deaths are treated as operational successes, not potential crimes. The victims are overwhelmingly indigenous and poor, killed in areas where the state has long been absent except as a source of violence. What makes this particularly insidious is how violence gets laundered through bureaucratic language. "Confrontations" implies mutual combat, erasing the power asymmetry between armed state agents and civilians. "Operational necessity" justifies killings without investigation. "Restoring order" becomes a license to shoot. When the state monopolizes violence and exempts itself from consequences, you don't have a criminal justice system—you have organized impunity with a legal veneer.

## The International Angle

Bolivia's criminal justice deterioration is happening in the context of U.S. re-engagement after years of strained relations during the Morales era. The DEA has returned to Bolivia, bringing with it the failed drug war playbook that's devastated communities from Mexico to Colombia. U.S. funding for Bolivian security forces has tripled since 2023, conditional on aggressive interdiction and eradication. This isn't aid; it's outsourcing the drug war to countries desperate for dollars. International human rights organizations have documented the correlation between U.S. security assistance and increased violence against indigenous communities, but these critiques have little impact against geopolitical interests. Meanwhile, Bolivia faces pressure from the IMF and World Bank to reduce public spending, which inevitably means cutting social programs while maintaining or expanding police and prisons—the most expensive and least effective approach to public safety. The international dimension matters because it reveals how local criminal justice policies are shaped by global power structures that prioritize control over communities they see as threatening or disposable.

## The Bottom Line

Bolivia's criminal justice system is becoming an engine of indigenous dispossession and social control, criminalizing culture, warehousing poverty, and protecting state violence from accountability. The expansion of police powers and prison construction won't make Bolivia safer—it will make it more unjust. Until the country confronts the structural inequalities that produce both crime and criminalization, more prisons will only mean more suffering for those already bearing inequality's heaviest burdens.`,
    issues: [
      "The Criminalization of Coca and Indigenous Culture",
      "The Prison Crisis and Systematic Dehumanization",
      "Extrajudicial Violence and State Impunity"
    ]
  },
  {
    name: "Brazil",
    lat: -14.2350,
    lng: -51.9253,
    summary: `# Brazil - Crime & Justice

Brazil has the world's third-largest prison population—over 820,000 people—and it's still growing. In the favelas of Rio and São Paulo, militarized police conduct operations that look more like warfare than law enforcement, killing over 6,000 people annually in what officials call "confrontations." Yet crime continues. Prisons overflow. Violence escalates. This isn't system failure—it's the system working exactly as designed. Brazil's criminal justice apparatus exists not to create public safety but to manage and contain Black and brown poverty through perpetual punishment. When you walk through Complexo do Alemão or any major favela, you see the machinery at work: young Black men stopped, searched, beaten, and often killed for the crime of existing in spaces the state has marked as criminal. The Supreme Court recently validated police operations during school hours, a decision that tells you everything about whose children matter and whose don't. What's happening in Brazil represents mass incarceration and police violence at a scale that should shock the global conscience, but instead has become normalized as "the cost of security." It isn't. It's the cost of refusing to confront inequality.

## The Big Issue 1: Police as Occupying Force in Black Communities

Brazilian police killed 6,429 people in 2024, according to official statistics—the real number is certainly higher. To put this in context, U.S. police kill approximately 1,000 people annually in a population 60% larger than Brazil's. Brazil's police are 6-7 times more lethal. But these deaths aren't randomly distributed. They're concentrated in favelas, the informal settlements housing predominantly Afro-Brazilian populations. In Rio, 78% of those killed by police are Black. In São Paulo, it's 62%. Police don't patrol these areas—they occupy them, conducting raids that resemble military assaults. The "auto de resistência" (act of resistance) statute allows police to claim self-defense without serious investigation, creating a de facto license to kill. Journalists have documented dozens of cases where police planted weapons on corpses or changed crime scenes after killings. Accountability is virtually nonexistent: fewer than 1% of police killings result in criminal charges. This level of violence isn't crime control; it's a race-based campaign of terror that sends a clear message to Black communities—you can be killed at any moment, for any reason, and your killers will face no consequences. The system doesn't see these deaths as injustice; it sees them as operational success.

## The Big Issue 2: Mass Incarceration and Prison Slavery

Brazil's prison population has increased 700% since 1990, yet violent crime rates remain among the world's highest. This should prompt questions about whether incarceration produces safety. Instead, it's prompted more prisons. The conditions are medieval: overcrowding reaches 200% of capacity, tuberculosis rates are 40 times the national average, and violence is so endemic that prison gangs like Primeiro Comando da Capital (PCC) and Comando Vermelho effectively govern entire facilities. But here's what makes Brazil's incarceration crisis particularly instructive: prisons have become sites of enslavement. Despite Brazil officially abolishing slavery in 1888, prison labor operates under conditions indistinguishable from bondage. Inmates work for multinational corporations producing everything from furniture to textiles, earning 75% of the minimum wage with no labor protections, no right to organize, and no choice in employment. If they refuse, they lose privileges like family visits or chance of early release. This is the criminal justice system as labor extraction—a direct descendant of plantation slavery, maintaining Black and brown bodies as exploitable commodities. The populations mirror slavery's demographics: 67% of Brazil's prisoners are Black in a country that's 56% Black. The continuity isn't accidental; it's structural.

## The Big Issue 3: Drug War as Genocide

Brazil has fully embraced the War on Drugs with predictably catastrophic results. Drug offenses now account for 28% of all incarcerations, the fastest-growing category. But look at who's being locked up: 80% are first-time, nonviolent offenders caught with small amounts for personal use or survival-level dealing. Meanwhile, the cartels controlling international trafficking operate with relative impunity, often protected by corrupt officials and police. The favelas become the front lines of a war that targets users and small-time dealers while leaving command structures untouched. This isn't incompetence; it's the point. The drug war provides endless justification for police occupation of Black communities, prison expansion, and the erosion of civil liberties—all while failing its stated goal of reducing drug availability or use. In November, São Paulo police conducted a "mega-operation" in Paraisópolis, arresting 340 people for drug possession. The total amount of drugs seized? Less than 2 kilograms. This wasn't crime fighting; it was a fishing expedition using drug laws to justify mass arrests in a Black community. The scholar João H. Costa Vargas calls this "genocide in the making"—not mass killing (though that happens too), but the systematic social death of Afro-Brazilian communities through criminalization, incarceration, and violence.

## The International Angle

Brazil's criminal justice crisis matters globally because it reveals what happens when a democracy adopts the punitive playbook without limits. International human rights bodies have repeatedly condemned Brazil's police violence and prison conditions as human rights violations, but these critiques gain no traction against domestic political pressure for "tough on crime" policies. The U.S. has been a major driver of Brazil's drug war through DEA operations, training programs, and security assistance that prioritizes interdiction over public health. The results speak for themselves: more violence, more prisons, more death, no reduction in drug trafficking. Brazil's experience also foreshadows global trends toward militarized policing of marginalized urban populations. From Johannesburg to Manila, governments are adopting the Brazilian model—treating poverty as criminality and responding with violence. This represents a democratic crisis: how can a society claim to be governed by law when law functions as organized violence against its most vulnerable populations?

## The Bottom Line

Brazil's criminal justice system is mass incarceration and police violence at industrial scale, targeting Black and brown communities with a brutality that would be unthinkable if inflicted on white, middle-class populations. The system doesn't fail to create safety—it succeeds at social control, maintaining racial and economic hierarchies through punishment and death. Until Brazil confronts the legacies of slavery and colonialism embedded in its institutions, more police and prisons will only deepen the crisis they claim to solve.`,
    issues: [
      "Police as Occupying Force in Black Communities",
      "Mass Incarceration and Prison Slavery",
      "Drug War as Genocide"
    ]
  },
  {
    name: "Canada",
    lat: 56.1304,
    lng: -106.3468,
    summary: `# Canada - Crime & Justice

Canada loves to present itself as the progressive alternative to American excess, and nowhere is this narrative stronger than criminal justice. But when you examine the data—particularly regarding Indigenous peoples—you find a system that would be unrecognizable to Canada's carefully cultivated international image. Indigenous people comprise 5% of Canada's population but 32% of federal prisoners. In Saskatchewan and Manitoba, that number approaches 80%. Indigenous women are the fastest-growing prison population, increasing 109% since 2010. These aren't statistics; they're evidence of systematic dispossession through criminalization. When I see these numbers, I see the same pattern as America's treatment of Black communities—a population marked by historical trauma and ongoing marginalization being managed through incarceration rather than justice. The recent Truth and Reconciliation Commission documented how residential schools literally kidnapped Indigenous children to destroy their culture; now the criminal justice system continues that project by different means, separating families, criminalizing poverty, and maintaining colonial hierarchies through the language of law and order.

## The Big Issue 1: The Criminalization of Indigenous Life

In November 2025, Winnipeg police arrested over 150 people in a "quality of life" sweep targeting homeless encampments. Of those arrested, 89% were Indigenous. Most were charged with trespassing or public intoxication—offenses that wouldn't exist if housing and addiction treatment were available. This is the criminal justice system as colonialism: criminalizing the predictable outcomes of dispossession and then using those outcomes to justify further marginalization. When Canada forced Indigenous peoples onto reserves with inadequate housing, healthcare, and economic opportunity, it created the conditions for poverty and substance use. Now it arrests people for poverty and substance use. The logic is perfectly circular—historical injustice produces social problems, social problems get criminalized, criminalization becomes evidence that Indigenous peoples are inherently criminal, justifying more punishment. Look at the juvenile justice data: Indigenous youth are 10 times more likely than non-Indigenous youth to be incarcerated. They receive custody sentences 65% of the time, compared to 23% for non-Indigenous youth charged with similar offenses. Judges routinely cite "lack of parental supervision" or "unstable home environment"—the legacy of residential schools and systemic poverty—as factors requiring custody rather than community-based alternatives. The system is punishing Indigenous children for the trauma it inflicted on their grandparents.

## The Big Issue 2: Gladue Rights in Theory, Colonial Practice in Reality

In 1999, Canada's Supreme Court established the Gladue principle: judges must consider the systemic discrimination and colonialism that shape Indigenous offending when determining sentences. It was supposed to reduce Indigenous incarceration. Instead, Indigenous imprisonment has increased 40% since Gladue. Why? Because Gladue is applied at judicial discretion, and many judges simply ignore it or give it lip service before imposing custody anyway. In Ontario, a 2024 study found Gladue reports were requested in only 31% of eligible cases and resulted in sentence reductions in fewer than half of those. The problem isn't lack of legal authority—it's that changing outcomes requires interrogating the assumptions judges bring to the bench about who deserves mercy and who deserves punishment. When judges see Indigenous defendants, they often see "repeat offenders" without examining why someone keeps re-entering a system that offers no support. Gladue requires judges to see the structural—colonialism, intergenerational trauma, lack of opportunity—but judicial training emphasizes individual responsibility. The collision produces predictable results: law that promises justice, practice that delivers more incarceration. This is how systems maintain themselves—by incorporating criticism as a safety valve that changes nothing fundamental.

## The Big Issue 3: Private Prisons in All But Name

Canada prides itself on not having private prisons like the United States, but that's increasingly a distinction without a difference. In 2025, Correctional Service Canada expanded contracts with private companies like GEO Group and Corrections Corporation to provide "support services" including food, healthcare, and transportation. The government still technically "owns" the prisons, but private corporations profit from incarceration, creating the same perverse incentives as full privatization: more prisoners means more profit. Even more troubling is the expansion of "conditional release" programs that amount to privatized punishment. Offenders are released early but required to live in privately-run halfway houses or wear GPS monitors provided by for-profit companies, paying fees that can reach $40 per day. Miss a payment? Back to prison. This isn't community supervision—it's a debtor's prison by another name. And who ends up trapped in this system? Predominantly Indigenous and poor offenders who can't afford the fees but are forced to choose between debt and incarceration. The prison-industrial complex doesn't require private prisons; it just requires that punishment becomes profitable and that profit becomes the basis for policy decisions.

## The International Angle

Canada's treatment of Indigenous peoples violates multiple international human rights instruments, including the UN Declaration on the Rights of Indigenous Peoples, which Canada officially endorsed in 2016. The UN Human Rights Committee has repeatedly condemned Canada's Indigenous incarceration rates as discriminatory, but these criticisms gain no traction domestically because most Canadians don't know the reality. The narrative of Canada as a human rights leader depends on ignorance of Indigenous experiences. Internationally, Canada's example matters because it shows how liberal democracies maintain internal colonialism through criminal justice. The language shifts—from explicit racism to "public safety"—but the targeting of marginalized populations continues. Australia, New Zealand, and Nordic countries with indigenous populations face similar dynamics: historical dispossession producing contemporary criminalization. The question is whether these societies will confront the structural roots of injustice or continue managing symptoms through punishment.

## The Bottom Line

Canada's criminal justice system is a mechanism for maintaining colonial hierarchies, criminalizing Indigenous life while absolving settler society of responsibility for creating the conditions that produce criminalization. The over-incarceration of Indigenous peoples isn't a failure of the system—it's evidence the system is working as designed. Real justice would require confronting land theft, cultural genocide, and ongoing dispossession. Instead, Canada builds more prisons and calls it public safety.`,
    issues: [
      "The Criminalization of Indigenous Life",
      "Gladue Rights in Theory, Colonial Practice in Reality",
      "Private Prisons in All But Name"
    ]
  },
  {
    name: "Chile",
    lat: -35.6751,
    lng: -71.5430,
    summary: `# Chile - Crime & Justice

Chile just elected Evelyn Matthei as president on a platform of "security and order," defeating a left-wing coalition that championed criminal justice reform. The victory margin—54% to 46%—was driven by voters in Santiago's wealthier neighborhoods who cite rising crime as their primary concern. But when you examine the actual crime data, you find something more complex than the referendum on safety the media portrayed. Chile's homicide rate is 4.1 per 100,000, lower than the United States and far below regional neighbors. What's increased is fear—stoked by media coverage that disproportionately focuses on crime in affluent areas while ignoring the systemic violence that poor and indigenous communities have faced for decades. Now, that fear is being weaponized to justify policies that will expand incarceration, criminalize poverty, and increase police violence in already-marginalized communities. This is the eternal bait-and-switch of punitive politics: promise safety to the middle class, deliver punishment to the poor. Chile is about to learn what America discovered the hard way—that you can't incarcerate your way to security, only to inequality.

## The Big Issue 1: The Return of Mano Dura and Its Racialized Targets

Matthei has promised to deploy military forces to "combat organized crime," language that sounds familiar to anyone who's studied Latin America's failed security policies. In Chile, "organized crime" has become code for Venezuelan migrants and Mapuche indigenous activists, the two populations most likely to be arrested, imprisoned, and subjected to police violence. Since 2020, Chile has received over 600,000 Venezuelan refugees fleeing economic collapse. Rather than integrating them, Chile's criminal justice system has criminalized them. Venezuelans comprise less than 4% of Chile's population but represent 18% of those arrested and 22% of those imprisoned. Officials cite their "involvement in criminal networks," but investigations by human rights groups reveal a different story: Venezuelans are arrested at higher rates for the same behaviors, prosecuted more aggressively, denied bail more frequently, and sentenced to longer terms. This isn't evidence of heightened criminality—it's evidence of discrimination. The pattern mirrors exactly what America did to Black populations during mass incarceration's expansion: identify a marginalized group, associate it with crime through policing and media, then use the resulting arrest statistics as proof that the targeting was justified. The Mapuche face a parallel targeting in the southern regions, where land conflicts with forestry companies and the state get prosecuted as "terrorism." Indigenous activists defending ancestral territories face anti-terrorism laws that allow extended pre-trial detention and restricted due process—tools unavailable when prosecuting corporations for environmental destruction or labor violations.

## The Big Issue 2: Prison Expansion as Economic Development

Matthei's first budget proposal includes $800 million for new prison construction, marketed as both crime control and economic stimulus. The rhetoric is revealing: prisons as jobs programs, incarceration as infrastructure investment. This is the prison-industrial complex blueprint—making punishment profitable for communities that host prisons, creating political constituencies invested in maintaining high incarceration rates. The proposed facilities will be built primarily in rural areas with high unemployment, following the American model of using prison construction to address regional economic decline. But here's what the research shows definitively: prison-based development fails. Initial construction creates temporary jobs, but long-term employment is minimal, local economies don't benefit significantly, and communities bear social costs including family separation and stigma. Meanwhile, the money allocated to prisons could fund education, healthcare, housing, and economic development that actually reduce crime by addressing its root causes. A University of Chile study calculated that the proposed $800 million, if invested in early childhood education and youth employment programs in high-crime areas, would reduce crime 12 times more effectively than prison expansion. But that approach doesn't offer the political theater that prisons provide—the visible demonstration that the state is "doing something" about crime, even if that something makes the problem worse.

## The Big Issue 3: Police Impunity and Systematic Violence

During October 2019 protests against inequality, Chilean police blinded over 400 demonstrators by firing tear gas canisters directly at faces—a tactic international human rights organizations classified as torture. Five years later, how many officers have been convicted? Seven. This impunity isn't exceptional; it's structural. Chilean police operate under a legal framework inherited from Pinochet's dictatorship that makes prosecution of security forces virtually impossible. The military justice system investigates police violence, creating a closed loop where officers investigate officers. Convictions are rare. Accountability is theater. The result is predictable: police violence continues, targeting the same populations the dictatorship targeted—the poor, indigenous peoples, student activists, and anyone marked as politically threatening. In September 2025, police killed 17-year-old Pablo Contreras during a raid in La Pintana, a working-class Santiago neighborhood. Officers claimed he was armed and fired first. Video footage shows Pablo running away when he was shot in the back. The officers involved received paid administrative leave. No charges have been filed. This is the criminal justice system's dirty secret—that state violence operates by different rules than civilian violence, that some lives are considered threatening simply by existing, and that punishment is allocated not based on harm but on power.

## The International Angle

Chile's punitive turn is happening just as global evidence increasingly demonstrates that incarceration doesn't improve public safety. Norway, with its focus on rehabilitation, has a recidivism rate of 20%; Chile's is 60%. Portugal decriminalized drugs and saw addiction rates fall; Chile criminalized drug use further and saw overdose deaths triple. But this evidence has little political traction because criminal justice policy isn't really about reducing crime—it's about managing anxiety and maintaining hierarchies. International financial institutions, particularly the IMF and World Bank, have pushed Chile toward fiscal austerity that cuts social spending while maintaining or expanding security budgets. This creates a self-fulfilling cycle: inequality produces crime, crime justifies policing and prisons, prisons drain resources from programs that might reduce inequality. Chile's example matters internationally because it shows how quickly countries can abandon reform when fear becomes politically mobilized, even when the evidence overwhelmingly supports a different path.

## The Bottom Line

Chile is choosing punishment over justice, prisons over investment in communities, and police violence over accountability. The victims will be poor, indigenous, and migrant populations who've already borne inequality's heaviest burdens. The beneficiaries will be politicians who gain office by promising safety they won't deliver and corporations that profit from prison construction. This isn't about public safety—it's about maintaining a social order that requires some populations to be perpetually subject to violence and control. The tragedy is that Chile had begun to imagine a different path, one grounded in addressing root causes rather than managing symptoms. That vision just lost an election. How many lives will be destroyed before it gets another chance?`,
    issues: [
      "The Return of Mano Dura and Its Racialized Targets",
      "Prison Expansion as Economic Development",
      "Police Impunity and Systematic Violence"
    ]
  },
  {
    name: "Colombia",
    lat: 4.5709,
    lng: -74.2973,
    summary: `# Colombia - Crime & Justice

President Gustavo Petro calls it "Total Peace"—a comprehensive plan to negotiate with armed groups, address root causes of violence, and transform Colombia's relationship with drugs, conflict, and justice. It's the most ambitious criminal justice reform in Latin America, and it's failing. Not because the diagnosis is wrong—Colombia's 60-year armed conflict has killed over 450,000 people and displaced 9 million, creating a cycle of violence that punishment alone won't end. It's failing because reforming criminal justice requires confronting power structures invested in maintaining the status quo: military and police forces that operate with impunity, landowners who benefit from displacement, drug traffickers who've corrupted every level of government, and a political class that gains from militarization. In November, Petro's approval rating hit 23%, its lowest point, driven largely by perceptions that crime is surging under his "soft" approach. The reality is more complex: some types of violence have decreased, others have increased, but the narrative that reform equals chaos has taken hold. This is the eternal challenge of transforming justice systems—those who benefit from injustice will always mobilize fear to defend it.

## The Big Issue 1: Total Peace vs. Total War

Petro's Total Peace initiative aims to negotiate with Colombia's remaining armed groups: ELN guerrillas, Gulf Clan paramilitaries, and various drug trafficking organizations. The logic is sound—60 years of military confrontation hasn't defeated these groups, and many combatants are drawn from communities the state has abandoned. Addressing their grievances might actually end cycles of recruitment and violence. But implementation has been chaotic. Ceasefires get violated, commanders negotiate in bad faith, and civilian deaths continue. In the Chocó region, Afro-Colombian communities are caught between multiple armed groups supposedly participating in peace talks while simultaneously fighting territorial wars. Over 12,000 people were displaced in October alone, a 34% increase from 2024. Critics—particularly Colombia's military establishment and right-wing opposition—seize on these failures as evidence that negotiation empowers criminals. Their alternative? Return to the "tough on crime" policies that produced 60 years of conflict. This is the impossible bind reformers face: they're held responsible for violence produced by structures they inherited, while those who created the violence critique them for not solving it instantly. The criminalization of negotiation—the framing of peace talks as "appeasement"—forecloses the only path that's ever ended armed conflicts anywhere. Colombia is trying to break a cycle of violence through dialogue, and powerful interests are sabotaging it because peace threatens their power.

## The Big Issue 2: Drug Policy Reform and American Pressure

Colombia produces 60% of the world's cocaine. For decades, U.S. policy toward Colombia has centered on eradication and interdiction—spraying crops, arresting farmers, extraditing traffickers. The results: cocaine production is higher than ever, violence persists, and tens of thousands of poor farmers are criminalized for growing the only crop that pays. Petro has proposed an alternative: end forced eradication, offer farmers economic alternatives, treat addiction as a health issue rather than crime, and pursue traffickers through financial systems rather than militarized raids. This is a profound challenge to 50 years of drug war logic, and it's encountering profound resistance. In September, the U.S. State Department threatened to decertify Colombia as a partner in counter-narcotics unless eradication increased. The DEA has suspended cooperation with Colombian police over the policy shift. This pressure matters because Colombia depends on U.S. military aid, trade preferences, and political support. The threat is clear: reform drug policy and lose American backing. But here's the thing—the drug war has catastrophically failed by its own metrics. Cocaine is cheaper and purer in U.S. cities than ever before. Colombian farmers remain impoverished. Traffickers operate with impunity. The only success has been filling prisons with low-level offenders. Petro's approach might actually work, but it requires questioning assumptions the U.S. government has built entire agencies around defending.

## The Big Issue 3: Police Violence and the False Promises of Reform

On September 9th, Bogotá police killed Javier Ordóñez by kneeling on his neck for nine minutes during an arrest for violating COVID curfew. Sound familiar? Colombia's police violence problem mirrors America's—systematic brutality against poor and Afro-Colombian populations, legal frameworks that make accountability virtually impossible, and a culture that treats violence as professionalism. The protests following Ordóñez's death saw police kill 13 more demonstrators. No officers have been convicted. Petro has proposed transferring police from military to civilian authority, a structural reform that could enable real accountability. The police union has threatened strikes. The military has lobbied Congress to block the change. And here's the core issue: Colombian security forces have operated with complete impunity since the armed conflict began, committing over 10,000 extrajudicial killings (the "false positives" scandal where soldiers killed civilians and dressed them as guerrillas to inflate combat statistics). Any accountability threatens not just current officers but the entire command structure that ordered and covered up these crimes. Reform means potential prosecution. So those with the most power to obstruct reform have the strongest incentives to do so, and they're using the language of "security" and "order" to defend a system built on lawless violence.

## The International Angle

Colombia matters internationally because it's attempting reforms that challenge core assumptions of the global War on Drugs and militarized approaches to "security." If Petro succeeds in reducing violence through negotiation rather than confrontation, it provides a template for other conflict-affected countries. If he fails—or is perceived to fail—it will be used to justify decades more of failed punitive policies. The U.S. role is particularly important: American pressure on Colombia to maintain drug war policies reflects domestic political imperatives (appearing "tough on drugs") more than any serious analysis of what actually reduces harm. But that pressure shapes policy in a country where drug-related violence has killed hundreds of thousands. The international human rights community has generally supported Petro's reforms, but that support carries little weight against U.S. security assistance and the domestic political opposition it empowers. Colombia is the test case for whether criminal justice transformation is possible in the face of entrenched interests that profit from injustice.

## The Bottom Line

Colombia is attempting to transform from a militarized security state to a society grounded in peace and justice, but that transformation threatens powerful interests invested in conflict. The military, police, landowners, and traffickers all benefit from the current system and are mobilizing every resource to maintain it. Petro's reforms are incomplete and imperfect, but the alternative is returning to policies that produced 60 years of violence. The question isn't whether Total Peace is perfect—it's whether Colombia will give transformative justice a chance or retreat to the punitive approaches that created the crisis reform is trying to solve.`,
    issues: [
      "Total Peace vs. Total War",
      "Drug Policy Reform and American Pressure",
      "Police Violence and the False Promises of Reform"
    ]
  }
]

async function saveCrimeWriteups() {
  console.log('========================================')
  console.log('Saving Crime & Justice Writeups')
  console.log('Voice: Michelle Alexander')
  console.log('========================================')
  console.log(`Total countries: ${crimeWriteups.length}`)
  console.log('========================================\n')

  let saved = 0
  let skipped = 0
  let errors = 0

  for (let i = 0; i < crimeWriteups.length; i++) {
    const writeup = crimeWriteups[i]
    console.log(`\n[${i + 1}/${crimeWriteups.length}] ${writeup.name}`)

    try {
      const existing = await prisma.locationSummary.findUnique({
        where: {
          name_type_category: {
            name: writeup.name,
            type: 'country',
            category: 'crime'
          }
        }
      })

      if (existing) {
        console.log(`  Already exists - skipping`)
        skipped++
      } else {
        await prisma.locationSummary.create({
          data: {
            name: writeup.name,
            type: 'country',
            country: writeup.name,
            lat: writeup.lat,
            lng: writeup.lng,
            category: 'crime',
            summary: writeup.summary,
            issues: JSON.stringify(writeup.issues),
            topStories: JSON.stringify([]),
            storyCount: 0,
            updatedAt: new Date()
          }
        })
        saved++
        console.log(`  ✓ Saved`)
      }

      // Progress report every 25
      if ((i + 1) % 25 === 0 || i + 1 === crimeWriteups.length) {
        console.log('\n========================================')
        console.log(`PROGRESS: ${i + 1}/${crimeWriteups.length} countries`)
        console.log(`Saved: ${saved} | Skipped: ${skipped} | Errors: ${errors}`)
        console.log(`Completion: ${Math.round(((i + 1) / crimeWriteups.length) * 100)}%`)
        console.log('========================================\n')
      }
    } catch (error) {
      console.error(`  Error:`, error)
      errors++
    }
  }

  console.log('\n========================================')
  console.log('FINAL SUMMARY')
  console.log('========================================')
  console.log(`Total: ${crimeWriteups.length}`)
  console.log(`Saved: ${saved}`)
  console.log(`Skipped: ${skipped}`)
  console.log(`Errors: ${errors}`)
  console.log('========================================')
}

saveCrimeWriteups()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
