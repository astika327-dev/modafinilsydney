'use server';

import { PrismaClient } from '@prisma/client';
import { randomBytes } from 'crypto';

const prisma = new PrismaClient();

export type CreateOrderParams = {
  userId?: string; // Optional, if user is logged in
  guestEmail?: string;
  guestName?: string;
  guestPhone?: string;
  shipping: {
    name: string;
    phone: string;
    street: string;
    city: string;
    state: string;
    postcode: string;
    country: string;
  };
  items: {
    productId: string;
    variantId: string;
    quantity: number;
    price: number;
    name: string;
    variantName: string;
    image?: string;
  }[];
  totals: {
    subtotal: number;
    shipping: number;
    total: number;
  };
};

export async function createOrder(data: CreateOrderParams) {
  try {
    // Generate a simple Order Number (e.g., ORD-12345-ABC)
    const orderNumber = `ORD-${Date.now().toString().slice(-6)}-${randomBytes(2).toString('hex').toUpperCase()}`;

    // Database access via Prisma
    const order = await prisma.order.create({
      data: {
        orderNumber,
        userId: data.userId || null,
        guestEmail: data.guestEmail,
        guestName: data.guestName,
        guestPhone: data.guestPhone,
        
        // Shipping Snapshot
        shippingName: data.shipping.name,
        shippingPhone: data.shipping.phone,
        shippingStreet: data.shipping.street,
        shippingCity: data.shipping.city,
        shippingState: data.shipping.state,
        shippingPostcode: data.shipping.postcode,
        shippingCountry: data.shipping.country,

        // Totals
        subtotal: data.totals.subtotal,
        shippingCost: data.totals.shipping,
        total: data.totals.total,

        status: 'PENDING',
        paymentStatus: 'PENDING',
        paymentMethod: 'Bank Transfer', // Defaulting for now

        // Items
        items: {
          create: data.items.map((item) => ({
            productId: item.productId,
            variantId: item.variantId,
            quantity: item.quantity,
            price: item.price,
            total: item.price * item.quantity,
            productName: item.name,
            variantName: item.variantName,
            productImage: item.image,
          })),
        },
      },
    });

    return { success: true, orderId: order.id, orderNumber: order.orderNumber };

  } catch (error: any) {
    console.error('Failed to create order:', error);
    return { success: false, error: error.message || 'Failed to create order' };
  }
}
