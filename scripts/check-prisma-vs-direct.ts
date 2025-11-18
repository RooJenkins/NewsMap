import { PrismaClient } from '@prisma/client';
import Database from 'better-sqlite3';

const prisma = new PrismaClient();

async function compare() {
  // Check via Prisma
  const prismaCategories = await prisma.locationSummary.groupBy({
    by: ['category'],
    _count: { category: true },
    orderBy: { category: 'asc' }
  });

  const prismaTotal = await prisma.locationSummary.count();

  console.log('\n=== Via Prisma Client ===');
  console.log(`Total: ${prismaTotal} entries`);
  prismaCategories.forEach(({ category, _count }) => {
    console.log(`  ${category}: ${_count.category}`);
  });

  // Check via direct SQLite
  const db = new Database('./prisma/dev.db', { readonly: true });
  const directCategories = db.prepare(`
    SELECT category, COUNT(*) as count
    FROM LocationSummary
    GROUP BY category
    ORDER BY category
  `).all();

  const directTotal = db.prepare('SELECT COUNT(*) as count FROM LocationSummary').get() as any;

  console.log('\n=== Via Direct SQLite ===');
  console.log(`Total: ${directTotal.count} entries`);
  directCategories.forEach((row: any) => {
    console.log(`  ${row.category}: ${row.count}`);
  });

  db.close();
  await prisma.$disconnect();

  // Check if they match
  if (prismaTotal !== directTotal.count) {
    console.log('\n⚠️  MISMATCH! Prisma and Direct SQLite show different counts!');
    console.log(`   Prisma: ${prismaTotal}`);
    console.log(`   Direct: ${directTotal.count}`);
  } else {
    console.log('\n✅ Prisma and Direct SQLite match!');
  }
}

compare();
