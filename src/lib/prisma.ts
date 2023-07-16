
// PrismaClient is attached to the `global` object in development to prevent
// exhausting your database connection limit.
//
// Read this bad boi: https://pris.ly/d/help/next-js-best-practices

import { PrismaClient } from '@prisma/client'
// export const prisma = new PrismaClient()

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined
}

export const prisma = globalForPrisma.prisma ?? new PrismaClient()


if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma
