// lib/prisma.ts
import { PrismaClient } from "@prisma/client";

let prisma: PrismaClient;

if (process.env.NODE_ENV === "production") {
  prisma = new PrismaClient({ log: ["query"] });
} else {
  // @ts-expect-error
  if (!global.__prisma) {
    // @ts-expect-error
    global.__prisma = new PrismaClient({ log: ["query"] });
  }
  // @ts-expect-error
  prisma = global.__prisma;
}

export { prisma };
