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

    // Validate that all products and variants exist
    for (const item of data.items) {
      const product = await prisma.product.findUnique({ where: { id: item.productId } });
      if (!product) {
        return { success: false, error: `Product not found: ${item.name}. Please clear your cart and try again.` };
      }
      const variant = await prisma.productVariant.findUnique({ where: { id: item.variantId } });
      if (!variant) {
        return { success: false, error: `Variant not found for ${item.name}. Please clear your cart and try again.` };
      }
    }

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

  } catch (error: unknown) {
    console.error('Failed to create order:', error);
    const errorMessage = error instanceof Error ? error.message : 'Failed to create order';
    return { success: false, error: errorMessage };
  }
}

// ... related code ...

import { revalidatePath } from 'next/cache';
import { OrderStatus } from '@prisma/client';


import { createClient } from '@/lib/supabase/server';


export async function updateOrderStatus(orderId: string, status: OrderStatus) {
  try {
    // 1. Auth Check
    const supabase = await createClient();
    const { data: { user } } = await supabase.auth.getUser();

    if (!user) {
      return { success: false, error: 'Unauthorized: No user found' };
    }

    // 2. Role Check
    const dbUser = await prisma.user.findUnique({
      where: { id: user.id },
      select: { role: true }
    });

    if (dbUser?.role !== 'ADMIN') {
      return { success: false, error: 'Unauthorized: Insufficient permissions' };
    }

    // 3. Execute Update
    await prisma.order.update({
      where: { id: orderId },
      data: { status },
    });
    
    revalidatePath('/admin');
    revalidatePath(`/admin/orders/${orderId}`);
    return { success: true };
  } catch (error: unknown) {
    console.error('Failed to update status:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
    return { success: false, error: errorMessage };
  }
}
