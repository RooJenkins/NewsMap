import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient({
  log: ['query', 'info', 'warn', 'error'],
});

async function test() {
  console.log('\nTesting Prisma connection...');
  console.log(`DATABASE_URL from env: ${process.env.DATABASE_URL}`);

  const result = await prisma.$queryRaw`SELECT COUNT(*) as count FROM LocationSummary`;
  console.log('Result:', result);

  await prisma.$disconnect();
}

test();
