-- Insert SCIENCE & RESEARCH summaries for countries 31-45
-- These are Ed Yong / Carl Zimmer style summaries focusing on research institutions, R&D spending, breakthroughs, STEM education

INSERT OR REPLACE INTO LocationSummary (id, name, type, country, lat, lng, category, summary, issues, topStories, storyCount, updatedAt, createdAt)
VALUES 
-- China
(
  'science-china-' || hex(randomblob(8)),
  'China',
  'country',
  'China',
  35.0,
  105.0,
  'science',
  'China''s scientific ambitions have crystallized into something remarkable and unsettling. The country now produces more research papers than any other nation, accounting for nearly a quarter of global scientific output. But this is not just about quantity. Chinese researchers are increasingly driving breakthroughs in fields from quantum computing to CRISPR gene editing, artificial intelligence to materials science. Tsinghua University and Peking University now rank among the world''s top institutions for engineering and computer science, while the Chinese Academy of Sciences coordinates research across hundreds of institutes employing over 60,000 scientists.

The numbers tell a compelling story: China invests 2.4% of its GDP in research and development - over $400 billion annually, second only to the United States in absolute terms. This sustained investment is yielding results. Chinese scientists have achieved quantum teleportation over record distances, developed the world''s fastest supercomputers, and made major advances in fusion energy research. The country leads in patent applications, particularly in AI and telecommunications, with Huawei and other firms challenging Western technological dominance.

Yet China''s scientific rise is inseparable from its authoritarian governance. The government prioritizes research in strategic sectors - semiconductors, biotechnology, aerospace - while maintaining tight control over academic freedom. Researchers face pressure to align their work with party directives. The brain drain that once plagued China has partially reversed through aggressive recruitment programs like the Thousand Talents Plan, luring overseas Chinese scientists home with generous funding. But concerns about intellectual property theft, lack of research transparency, and potential military applications of civilian research strain international scientific collaboration.

The STEM education pipeline is formidable: China graduates more engineering PhDs than any other country, and Chinese students dominate international science olympiads and standardized math assessments. Yet the system emphasizes rote learning and test-taking over creativity and critical thinking - skills essential for fundamental breakthroughs. Whether China can transition from fast follower to true innovator remains an open question. The upcoming decades will test whether authoritarian state planning can sustain scientific excellence, or whether innovation ultimately requires the messy freedom of open societies.',
  '["Intellectual property theft and research transparency concerns","Academic freedom restrictions and party control over research","Brain circulation - reversing drain but international collaboration strained","STEM education emphasizes testing over creativity and critical inquiry","Dual-use research raising military application concerns"]',
  '[]',
  0,
  datetime('now'),
  datetime('now')
);

