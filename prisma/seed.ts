
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

const products = [
  {
    name: 'Modalert 200mg',
    slug: 'modalert-200mg',
    description: "Boost your productivity with Modalert 200mg, Australia's go-to smart choice for sharper focus, longer alertness, and clear-headed energy without the jitters.",
    image: '/images/Modalert-200mg.webp',
    isActive: true,
    category: {
        connectOrCreate: {
            where: { slug: 'modafinil' },
            create: { name: 'Modafinil', slug: 'modafinil' }
        }
    },
    variants: [
      { name: '30 pills', sku: 'MOD-200-30', price: 120, quantity: 30 },
      { name: '50 pills', sku: 'MOD-200-50', price: 200, quantity: 50 },
      { name: '100 pills', sku: 'MOD-200-100', price: 350, quantity: 100 },
      { name: '200 pills', sku: 'MOD-200-200', price: 600, quantity: 200 },
      { name: '300 pills', sku: 'MOD-200-300', price: 750, quantity: 300 },
      { name: '500 pills', sku: 'MOD-200-500', price: 1000, quantity: 500 },
    ],
  },
  {
    name: 'Modalert 100mg',
    slug: 'modalert-100mg',
    description: "Power through your day with Modalert 100mg, the trusted Modafinil brand that keeps Aussies switched on. Perfect for long workdays, study marathons, or anyone needing a sharp mental edge.",
    image: '/images/Modalert-100-1-scaled.webp',
    isActive: true,
    category: {
        connectOrCreate: {
            where: { slug: 'modafinil' },
            create: { name: 'Modafinil', slug: 'modafinil' }
        }
    },
    variants: [
      { name: '30 pills', sku: 'MOD-100-30', price: 69, quantity: 30 },
      { name: '50 pills', sku: 'MOD-100-50', price: 96, quantity: 50 },
      { name: '100 pills', sku: 'MOD-100-100', price: 155, quantity: 100 },
      { name: '200 pills', sku: 'MOD-100-200', price: 259, quantity: 200 },
      { name: '300 pills', sku: 'MOD-100-300', price: 338, quantity: 300 },
      { name: '500 pills', sku: 'MOD-100-500', price: 540, quantity: 500 },
    ],
  },
  {
    name: 'Modafresh 200mg',
    slug: 'modafresh-200mg',
    description: "Power through your busiest days with Modafresh 200mg. A popular generic form of Modafinil known for steady, clear-headed alertness rather than the spiky buzz from energy drinks or coffee.",
    image: '/images/Modafresh-200-4-scaled.webp',
    isActive: true,
    category: {
        connectOrCreate: {
            where: { slug: 'modafinil' },
            create: { name: 'Modafinil', slug: 'modafinil' }
        }
    },
    variants: [
      { name: '30 pills', sku: 'FRESH-200-30', price: 75, quantity: 30 },
      { name: '50 pills', sku: 'FRESH-200-50', price: 110, quantity: 50 },
      { name: '100 pills', sku: 'FRESH-200-100', price: 164, quantity: 100 },
      { name: '200 pills', sku: 'FRESH-200-200', price: 273, quantity: 200 },
      { name: '300 pills', sku: 'FRESH-200-300', price: 383, quantity: 300 },
      { name: '500 pills', sku: 'FRESH-200-500', price: 585, quantity: 500 },
    ],
  },
  {
    name: 'Modvigil 200mg',
    slug: 'modvigil-200mg',
    description: "Your 'get it done' switch with clean wakefulness, crisp focus, and steady drive. One of the most affordable generic Modafinil options in Australia.",
    image: '/images/Modvigil-200-5-scaled.webp',
    isActive: true,
    category: {
        connectOrCreate: {
            where: { slug: 'modafinil' },
            create: { name: 'Modafinil', slug: 'modafinil' }
        }
    },
    variants: [
      { name: '30 pills', sku: 'VIGIL-200-30', price: 83, quantity: 30 },
      { name: '50 pills', sku: 'VIGIL-200-50', price: 117, quantity: 50 },
      { name: '100 pills', sku: 'VIGIL-200-100', price: 203, quantity: 100 },
      { name: '200 pills', sku: 'VIGIL-200-200', price: 365, quantity: 200 },
      { name: '300 pills', sku: 'VIGIL-200-300', price: 462, quantity: 300 },
      { name: '500 pills', sku: 'VIGIL-200-500', price: 720, quantity: 500 },
    ],
  },
  {
    name: 'Modawake 200mg',
    slug: 'modawake-200mg',
    description: "Strong, long lasting focus, clean energy, and that 'switched on' feeling. Premium Modafinil trusted by students, professionals, and shift workers.",
    image: '/images/modawake-200mg.webp',
    isActive: true,
    category: {
        connectOrCreate: {
            where: { slug: 'modafinil' },
            create: { name: 'Modafinil', slug: 'modafinil' }
        }
    },
    variants: [
      { name: '30 pills', sku: 'WAKE-200-30', price: 75, quantity: 30 },
      { name: '50 pills', sku: 'WAKE-200-50', price: 101, quantity: 50 },
      { name: '100 pills', sku: 'WAKE-200-100', price: 195, quantity: 100 },
      { name: '200 pills', sku: 'WAKE-200-200', price: 327, quantity: 200 },
      { name: '300 pills', sku: 'WAKE-200-300', price: 427, quantity: 300 },
      { name: '500 pills', sku: 'WAKE-200-500', price: 650, quantity: 500 },
    ],
  },
  {
    name: 'Modasmart 400mg',
    slug: 'modasmart-400mg',
    description: "If 200mg feels like it's not cutting it, Modafinil 400mg is the step up serious users go for. Stop fighting fatigue the hard way and go straight to the strength that keeps you switched on.",
    image: '/images/Modasmart-400-2-scaled.webp',
    isActive: true,
    category: {
        connectOrCreate: {
            where: { slug: 'modafinil' },
            create: { name: 'Modafinil', slug: 'modafinil' }
        }
    },
    variants: [
      { name: '50 pills', sku: 'SMART-400-50', price: 152, quantity: 50 },
      { name: '100 pills', sku: 'SMART-400-100', price: 244, quantity: 100 },
      { name: '200 pills', sku: 'SMART-400-200', price: 411, quantity: 200 },
      { name: '300 pills', sku: 'SMART-400-300', price: 548, quantity: 300 },
      { name: '400 pills', sku: 'SMART-400-400', price: 685, quantity: 400 },
      { name: '500 pills', sku: 'SMART-400-500', price: 792, quantity: 500 },
    ],
  },
  {
    name: 'Modafinil 400mg Australia',
    slug: 'modafinil-400mg-australia',
    description: "If 200mg feels like it's not cutting it, Modafinil 400mg is the step up serious users go for. Ships Australia-wide, fast and discreet.",
    image: '/images/Modasmart-400-2-scaled.webp',
    isActive: true,
    category: {
        connectOrCreate: {
            where: { slug: 'modafinil' },
            create: { name: 'Modafinil', slug: 'modafinil' }
        }
    },
    variants: [
      { name: '50 pills', sku: 'MOD-400-50', price: 152, quantity: 50 },
      { name: '100 pills', sku: 'MOD-400-100', price: 244, quantity: 100 },
      { name: '200 pills', sku: 'MOD-400-200', price: 411, quantity: 200 },
      { name: '300 pills', sku: 'MOD-400-300', price: 548, quantity: 300 },
      { name: '400 pills', sku: 'MOD-400-400', price: 685, quantity: 400 },
      { name: '500 pills', sku: 'MOD-400-500', price: 792, quantity: 500 },
    ],
  }
];

async function main() {
  console.log('Start seeding...');
  
  // Clean up existing data to avoid duplicates if re-running
  // Uncomment if you want to wipe data: 
  // await prisma.orderItem.deleteMany();
  // await prisma.productVariant.deleteMany();
  // await prisma.product.deleteMany();
  // await prisma.category.deleteMany();

  for (const p of products) {
    const product = await prisma.product.upsert({
      where: { slug: p.slug },
      update: {
        image: p.image, // Update image if product exists
        name: p.name,
        description: p.description
      },
      create: {
        name: p.name,
        slug: p.slug,
        description: p.description,
        image: p.image,
        isActive: p.isActive,
        category: p.category,
        variants: {
          create: p.variants
        }
      },
    });
    console.log(`Created product with id: ${product.id}`);
  }
  console.log('Seeding finished.');
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
