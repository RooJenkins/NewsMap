import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const summary = `So here's the thing about New Zealand right now: Christopher Luxon's centre-right coalition government is having what you might call a "moment." And not the good kind. Picture this—it's November 2025, the polls have Labour ahead of National for the first time in ages, Winston Peters is lobbing grenades about asset sales from within the coalition, and Luxon is trying to hold together a three-party government that's starting to look like a group project where nobody's talking to each other. Meanwhile, the country just witnessed its largest strike since 1979, oil and gas exploration is back on the menu (much to Pacific neighbours' horror), and the international courts are basically telling New Zealand it might be breaking climate law. Welcome to Aotearoa's political pressure cooker.

**The Big Issue 1: Coalition Cracks and the Asset Sales Bombshell**

Let's talk about what happens when your coalition partner goes rogue on live television. Winston Peters—New Zealand First leader and the country's most seasoned political bomb-thrower—called Luxon's hints about asset sales a "tawdry, silly argument" in early November 2025, accusing National of wanting to "flog off" state assets because they'd "failed to run the economy properly." Now, Luxon tried to brush this off as coalition partners having "different views on the margins," which is political speak for "please stop making me look bad in front of the voters." But here's the rub: the Taxpayers Union Curia poll dropped a few days later showing Labour surging to 33.6% while National slid to 31.8%. With the Greens at 9.8% and Te Pāti Māori at 3.2%, we're looking at a hung parliament scenario. That's a nightmare for any sitting government, especially one trying to project strength going into an election year. Luxon insists all three coalition parties are "working incredibly hard" and "in this together," but when your deputy PM is publicly questioning your economic competence, that's not coalition unity—that's a slow-motion car crash. The parallels to 1997, when National rolled out a failing leader right before an election, are starting to write themselves. Nobody's wielding the knife yet, but you can bet they're sharpening it.

**The Big Issue 2: The Great Public Sector Revolt**

October 23, 2025—mark that date. More than 100,000 public sector workers walked off the job in the largest strike New Zealand has seen since 1979. Teachers, nurses, doctors, healthcare professionals—the people who literally keep the country running—downed tools to protest the government's pay cuts and a hiring freeze in public hospitals. This wasn't some fringe union action; this was a cross-sector uprising that exposed just how badly the Luxon government has misjudged the mood. The coalition came in promising fiscal discipline and "fixing the economy," but what workers are seeing is austerity by another name. And when you freeze hospital hiring while healthcare wait times balloon and your own health minister is dodging questions about patient safety, you've got a PR disaster that writes itself. Christopher Luxon tried to pivot by announcing expanded cost-of-living relief in mid-November—up to $200 weekly in housing assistance for families earning under $90,000, boosted first-home buyer grants (up to $30,000 for couples buying new builds), and higher childcare subsidies rolling out from November 15. But here's the political calculus problem: you can't starve public services with one hand while tossing cash with the other and expect voters not to notice. Labour's polling surge isn't happening in a vacuum—it's happening because teachers and nurses vote, and they're telling everyone they know that this government is squeezing them dry.

**The Big Issue 3: Drilling for Controversy—Oil, Gas, and Climate Backlash**

In July 2025, New Zealand's parliament voted 68-54 to lift Jacinda Ardern's 2018 ban on offshore oil and gas exploration. The Luxon government framed it as an energy security move—declining natural gas reserves, rising reliance on imported coal and diesel, all that. They even threw NZ$200 million over four years at co-investing in new gas fields to sweeten the pot for industry. Permits started going out in September. Sounds reasonable until you zoom out and see the geopolitical train wreck this creates. First, New Zealand signed the COP28 agreement in Dubai, which basically commits countries to phase out fossil fuels. Civil servants warned the government that reversing the exploration ban would breach that agreement and could endanger trade deals. Luxon went ahead anyway. Then, on November 13, 2025, a report dropped saying New Zealand's oil and gas decision could place it in breach of emerging international climate law—timing that couldn't be worse given that Pacific Island leaders just got backing from the International Court of Justice to hold countries accountable for climate risk. And here's where it gets really awkward: New Zealand is trying to cozy up to AUKUS Pillar II (the advanced tech and defense cooperation bit) while also maintaining its traditional role as the Pacific's trusted partner on climate. But Pacific nations—who view climate change as their single greatest security threat—are watching New Zealand reverse its climate commitments while Australia spends A$368 billion on nuclear submarines instead of financing fossil fuel transitions. The cognitive dissonance is screaming. Green MP Scott Willis has already promised to reinstate the ban and revoke all permits if elected, calling Luxon's government a "fossil fuel-obsessed regime." This isn't just a domestic policy spat; it's a values clash that threatens New Zealand's entire regional identity.

**The International Angle**

New Zealand's political wobbles have implications far beyond its shores. For starters, the AUKUS question is making Pacific Island nations deeply uncomfortable. They've been diplomatic about it, emphasizing their "Blue Pacific" ideals of climate action and a nuclear-free zone rather than directly criticizing Wellington. But the subtext is clear: if New Zealand joins AUKUS Pillar II, it's choosing militarization and Anglosphere alignment over Pacific solidarity. That's a generational foreign policy shift, and it would fundamentally alter how Australia and the U.S. interact with the region. Meanwhile, the oil and gas reversal is being watched closely in climate circles worldwide. If a small, wealthy democracy like New Zealand—which built its green brand under Ardern—can backslide this fast, what hope is there for binding international climate commitments? The ICJ's backing of Pacific nations' climate accountability push means New Zealand could face actual legal consequences, not just reputational damage. And then there's the economic signal: with Labour surging in polls and promising to re-ban exploration, investors looking at those new permits have to wonder if they're worth the paper they're printed on. Political instability doesn't just hurt Luxon—it undermines the entire policy framework he's trying to build.

**The Bottom Line**

Christopher Luxon is running out of political capital faster than New Zealand's gas reserves. His coalition is fracturing, public sector workers are in open revolt, the climate policies are alienating Pacific partners and potentially breaking international law, and Labour's eating his lunch in the polls. The November cost-of-living package might buy him a few weeks of goodwill, but it won't fix the structural problem: this government looks like it's lurching from crisis to crisis without a coherent narrative. Watch the next Curia poll—if Labour's lead widens, the whispers about replacing Luxon before the election will get a lot louder. And watch the Pacific Islands Forum meetings in early 2026; that's where New Zealand's AUKUS dalliance and oil-and-gas about-face will face their first real diplomatic test. The question isn't whether Luxon can survive the next few months. It's whether he can give voters a reason to believe he should.`;

  const issues = [
    "Coalition tensions over asset sales and economic management",
    "Massive public sector strikes and cost-of-living crisis",
    "Oil and gas exploration reversal threatens climate commitments",
    "AUKUS Pillar II considerations vs Pacific partnerships",
    "Labour polling surge and potential leadership crisis"
  ];

  const topStories = [
    {
      title: "Winston Peters attacks Luxon over asset sales within coalition",
      source: "RNZ",
      date: "November 2025",
      url: "https://www.rnz.co.nz/news/political/578503/christopher-luxon-brushes-off-winston-peters-asset-sales-attack"
    },
    {
      title: "Labour leads National 33.6% to 31.8% in latest Curia poll",
      source: "Taxpayers Union",
      date: "November 2025",
      url: "https://www.rnz.co.nz/news/political/569588/government-policies-working-to-fix-economy-raise-living-standards-luxon-says"
    },
    {
      title: "100,000+ public sector workers strike - largest since 1979",
      source: "Multiple",
      date: "October 23, 2025",
      url: "https://www.scoop.co.nz/stories/PO2511/S00042/how-the-2017-2023-labour-government-attacked-public-health-and-education-workers.htm"
    },
    {
      title: "Government announces expanded cost-of-living relief package",
      source: "Government",
      date: "November 15, 2025",
      url: "https://afsf.in/new-zealand-cost-of-living-relief-2025/"
    },
    {
      title: "Parliament lifts offshore oil and gas exploration ban",
      source: "Parliament",
      date: "July 31, 2025",
      url: "https://www.rnz.co.nz/news/political/574094/government-reopens-oil-and-gas-exploration-nationwide-greens-decry-climate-fire"
    },
    {
      title: "NZ oil and gas policy may breach international climate law",
      source: "Legal Analysis",
      date: "November 13, 2025",
      url: "https://home.nzcity.co.nz/news/article.aspx?id=433912"
    },
    {
      title: "Pacific leaders get ICJ backing on climate accountability",
      source: "International Court",
      date: "November 2025",
      url: "https://home.nzcity.co.nz/news/article.aspx?id=433912"
    },
    {
      title: "AUKUS Pillar II debate threatens Pacific partnerships",
      source: "Foreign Policy Analysis",
      date: "2025",
      url: "https://www.tandfonline.com/doi/full/10.1080/10357718.2024.2403735"
    },
    {
      title: "NZ allocates $200M for gas field co-investment",
      source: "Budget 2025",
      date: "2025",
      url: "https://thediplomat.com/2025/06/new-zealand-reverses-offshore-oil-and-gas-exploration-ban-amid-energy-security-concerns/"
    },
    {
      title: "Greens pledge to reinstate exploration ban if elected",
      source: "Green Party",
      date: "2025",
      url: "https://www.greenpeace.org/aotearoa/story/luxon-war-on-climate-deliberate-effort-increase-emissions/"
    }
  ];

  const result = await prisma.locationSummary.upsert({
    where: {
      name_type_category: {
        name: 'New Zealand',
        type: 'country',
        category: 'all'
      }
    },
    update: {
      summary,
      issues: JSON.stringify(issues),
      topStories: JSON.stringify(topStories),
      lat: -40.9006,
      lng: 174.8860,
      country: 'New Zealand',
      updatedAt: new Date(),
      storyCount: 10
    },
    create: {
      name: 'New Zealand',
      type: 'country',
      category: 'all',
      country: 'New Zealand',
      lat: -40.9006,
      lng: 174.8860,
      summary,
      issues: JSON.stringify(issues),
      topStories: JSON.stringify(topStories),
      storyCount: 10
    }
  });

  console.log('✓ Created/updated New Zealand summary');
  console.log('Summary length:', summary.length, 'characters');
  console.log('Issues extracted:', issues.length);
  console.log('Top stories:', topStories.length);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
