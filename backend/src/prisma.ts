// backend/src/prisma.ts (Crie este arquivo para o Singleton)
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default prisma;