
import { PrismaClient } from '@prisma/client';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.resolve(__dirname, '../.env') });

const prisma = new PrismaClient();

async function check() {
  const products = await prisma.product.findMany({
    select: { name: true, image: true, slug: true }
  });
  console.log('--- CURRENT DATABASE IMAGES ---');
  products.forEach((p: any) => {
    console.log(`[${p.name}] => ${p.image}`);
  });
}

check()
  .catch(e => console.error(e))
  .finally(async () => await prisma.$disconnect());
