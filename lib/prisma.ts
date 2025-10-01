// lib/prisma.ts
import { PrismaClient } from "@prisma/client";

let prisma: PrismaClient;

if (process.env.NODE_ENV === "production") {
  prisma = new PrismaClient({ log: ["query"] });
} else {
  // @ts-expect-error -- allow global variable
  if (!global.__prisma) {
    // @ts-expect-error -- allow global variable
    global.__prisma = new PrismaClient({ log: ["query"] });
  }
  // @ts-expect-error -- allow global variable
  prisma = global.__prisma;
}

export { prisma };
