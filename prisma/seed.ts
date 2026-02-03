
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const products = [
  {
    id: 'modalert-200',
    name: 'Modalert 200mg',
    slug: 'modalert-200mg',
    category: 'Modafinil',
    description: "Boost your productivity with Modalert 200mg, Australia's go-to smart choice for sharper focus and clear-headed energy.",
    image: '/images/Modalert-200mg.webp',
    variants: [
      { id: 'modalert-200-30', name: '30 pills', sku: 'AL-200-30', price: 120, quantity: 30 },
      { id: 'modalert-200-50', name: '50 pills', sku: 'AL-200-50', price: 200, quantity: 50 },
      { id: 'modalert-200-100', name: '100 pills', sku: 'AL-200-100', price: 350, quantity: 100 },
      { id: 'modalert-200-200', name: '200 pills', sku: 'AL-200-200', price: 600, quantity: 200 },
    ],
  },
  {
    id: 'modalert-100',
    name: 'Modalert 100mg',
    slug: 'modalert-100mg',
    category: 'Modafinil',
    description: "Power through your day with Modalert 100mg. Perfect for long workdays, study marathons, or anyone needing a sharp mental edge.",
    image: '/images/Modalert-100-1-scaled.webp',
    variants: [
      { id: 'modalert-100-30', name: '30 pills', sku: 'AL-100-30', price: 69, quantity: 30 },
      { id: 'modalert-100-50', name: '50 pills', sku: 'AL-100-50', price: 96, quantity: 50 },
      { id: 'modalert-100-100', name: '100 pills', sku: 'AL-100-100', price: 155, quantity: 100 },
      { id: 'modalert-100-200', name: '200 pills', sku: 'AL-100-200', price: 259, quantity: 200 },
    ],
  },
  {
    id: 'modafresh',
    name: 'Modafresh 200mg',
    slug: 'modafresh-200mg',
    category: 'Modafinil',
    description: "Power through your busiest days with Modafresh 200mg. Sharp focus, steady energy, and clean-minded alertness without the jitters.",
    image: '/images/Modafresh-200-4-scaled.webp',
    variants: [
      { id: 'modafresh-30', name: '30 pills', sku: 'FRE-200-30', price: 75, quantity: 30 },
      { id: 'modafresh-50', name: '50 pills', sku: 'FRE-200-50', price: 110, quantity: 50 },
      { id: 'modafresh-100', name: '100 pills', sku: 'FRE-200-100', price: 164, quantity: 100 },
      { id: 'modafresh-200', name: '200 pills', sku: 'FRE-200-200', price: 273, quantity: 200 },
    ],
  },
  {
    id: 'modvigil',
    name: 'Modvigil 200mg',
    slug: 'modvigil-200mg',
    category: 'Modafinil',
    description: "Your 'get it done' switch with clean wakefulness, crisp focus, and steady drive. Super affordable and Aussie-trusted.",
    image: '/images/Modvigil-200-5-scaled.webp',
    variants: [
      { id: 'modvigil-30', name: '30 pills', sku: 'VIG-200-30', price: 83, quantity: 30 },
      { id: 'modvigil-50', name: '50 pills', sku: 'VIG-200-50', price: 117, quantity: 50 },
      { id: 'modvigil-100', name: '100 pills', sku: 'VIG-200-100', price: 203, quantity: 100 },
      { id: 'modvigil-200', name: '200 pills', sku: 'VIG-200-200', price: 365, quantity: 200 },
    ],
  },
  {
    id: 'modawake',
    name: 'Modawake 200mg',
    slug: 'modawake-200mg',
    category: 'Modafinil',
    description: "Strong, long lasting focus and clean energy. Premium Modafinil trusted by students, professionals, and shift workers.",
    image: '/images/modawake-200mg.webp',
    variants: [
      { id: 'modawake-30', name: '30 pills', sku: 'WAK-200-30', price: 75, quantity: 30 },
      { id: 'modawake-50', name: '50 pills', sku: 'WAK-200-50', price: 101, quantity: 50 },
      { id: 'modawake-100', name: '100 pills', sku: 'WAK-200-100', price: 195, quantity: 100 },
      { id: 'modawake-200', name: '200 pills', sku: 'WAK-200-200', price: 327, quantity: 200 },
    ],
  },
  {
    id: 'modasmart',
    name: 'Modasmart 400mg',
    slug: 'modasmart-400mg',
    category: 'Modafinil',
    description: "If 200mg feels like it's not cutting it, Modafinil 400mg is the step up serious users go for. Stop fighting fatigue the hard way.",
    image: '/images/Modasmart-400-2-scaled.webp',
    variants: [
      { id: 'modasmart-50', name: '50 pills', sku: 'SMA-400-50', price: 152, quantity: 50 },
      { id: 'modasmart-100', name: '100 pills', sku: 'SMA-400-100', price: 244, quantity: 100 },
      { id: 'modasmart-200', name: '200 pills', sku: 'SMA-400-200', price: 411, quantity: 200 },
      { id: 'modasmart-300', name: '300 pills', sku: 'SMA-400-300', price: 548, quantity: 300 },
    ],
  },
  {
    id: 'modafinil-400',
    name: 'Modafinil 400mg Australia',
    slug: 'modafinil-400mg-australia',
    category: 'Modafinil',
    description: "If 200mg feels like it's not cutting it, Modafinil 400mg is the step up serious users go for. Ships Australia-wide, fast and discreet.",
    image: '/images/Modasmart-400-2-scaled.webp',
    variants: [
      { id: 'modafinil-400-50', name: '50 pills', sku: 'MAU-400-50', price: 152, quantity: 50 },
      { id: 'modafinil-400-100', name: '100 pills', sku: 'MAU-400-100', price: 244, quantity: 100 },
      { id: 'modafinil-400-200', name: '200 pills', sku: 'MAU-400-200', price: 411, quantity: 200 },
      { id: 'modafinil-400-300', name: '300 pills', sku: 'MAU-400-300', price: 548, quantity: 300 },
    ],
  },
];

async function main() {
  console.log('Start seeding...');

  try {
    // 0. Cleanup conflicting slugs if we want to force specific IDs
    // Only delete products that have matching slugs but DIFFERENT IDs than what we desire
    for (const p of products) {
      const existing = await prisma.product.findUnique({ where: { slug: p.slug } });
      if (existing && existing.id !== p.id) {
        console.log(`Deleting conflicting product with slug ${p.slug} and id ${existing.id}`);
        // Delete related variants first (due to cascade this might happen automatically but let's be safe if cascade isn't set)
        // Actually cascade is set on schema, so just delete product
        await prisma.product.delete({ where: { id: existing.id } });
      }
    }

    // 1. Create Category
    const category = await prisma.category.upsert({
      where: { slug: 'modafinil' },
      update: {},
      create: {
        name: 'Modafinil',
        slug: 'modafinil',
        description: 'Premium Modafinil products',
      },
    });

    // 2. Create Products
    for (const p of products) {
      console.log(`Upserting product: ${p.name}`);
      const product = await prisma.product.upsert({
        where: { id: p.id },
        update: {
          name: p.name,
          slug: p.slug,
          description: p.description,
          image: p.image,
        },
        create: {
          id: p.id,
          name: p.name,
          slug: p.slug,
          description: p.description,
          image: p.image,
          categoryId: category.id,
        },
      });

      // 3. Create Variants
      for (const v of p.variants) {
        await prisma.productVariant.upsert({
          where: { id: v.id }, 
          update: {
            name: v.name,
            price: v.price,
            stock: 100,
          },
          create: {
            id: v.id,
            productId: product.id,
            name: v.name,
            sku: v.sku,  // Ensure SKU is unique (can rely on static strings above)
            price: v.price,
            quantity: v.quantity,
            stock: 100,
          },
        });
      }
    }
    
    console.log('Seeding finished.');
  } catch (e) {
    console.error(e);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
}

main();
