import { PrismaClient } from '@prisma/client';

// Tekil Prisma Client; development'ta hot-reload sırasında çoğalmayı önler
const globalForPrisma = globalThis as unknown as { prisma?: PrismaClient };

export const prisma: PrismaClient =
  globalForPrisma.prisma ??
  new PrismaClient({});

if (process.env.NODE_ENV !== 'production') {
  globalForPrisma.prisma = prisma;
}


