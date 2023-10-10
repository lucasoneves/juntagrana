import { PrismaClient } from '@prisma/client';
import { randomUUID } from 'crypto';

const prisma = new PrismaClient();

async function seed() {
  // Insert all data here
  const user = await prisma.user.create({
    data: {
      id: randomUUID().toString(),
      name: 'Tom Brady',
      email: 'tombrady@example.com',
      password: '123456',
      createdAt: new Date(),
      updatedAt: new Date()
    }
  })
}

try {
  await seed();
  await prisma.$disconnect();
} catch (e) {
  console.error(e);
  await prisma.$disconnect();
  process.exit(1);
}