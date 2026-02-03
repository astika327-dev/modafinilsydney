import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

// Order status constants (matching Prisma schema)
const ORDER_STATUS = {
  PENDING: 'PENDING',
  CONFIRMED: 'CONFIRMED',
  PROCESSING: 'PROCESSING',
  SHIPPED: 'SHIPPED',
  OUT_FOR_DELIVERY: 'OUT_FOR_DELIVERY',
  DELIVERED: 'DELIVERED',
  CANCELLED: 'CANCELLED',
  REFUNDED: 'REFUNDED',
} as const;

const PAYMENT_STATUS = {
  PENDING: 'PENDING',
  PAID: 'PAID',
  FAILED: 'FAILED',
  REFUNDED: 'REFUNDED',
} as const;

// Generate unique order number
function generateOrderNumber(): string {
  const timestamp = Date.now().toString(36).toUpperCase();
  const random = Math.random().toString(36).substring(2, 6).toUpperCase();
  return `MS-${timestamp}${random}`;
}

// GET /api/orders - Get all orders (for admin) or user's orders
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const userId = searchParams.get('userId');
    const orderNumber = searchParams.get('orderNumber');

    // If searching by order number (for tracking)
    if (orderNumber) {
      const order = await prisma.order.findUnique({
        where: { orderNumber },
        include: {
          items: true,
          tracking: {
            orderBy: { createdAt: 'desc' },
          },
        },
      });

      if (!order) {
        return NextResponse.json({ error: 'Order not found' }, { status: 404 });
      }

      return NextResponse.json(order);
    }

    // Get user's orders
    if (userId) {
      const orders = await prisma.order.findMany({
        where: { userId },
        include: {
          items: true,
        },
        orderBy: { createdAt: 'desc' },
      });

      return NextResponse.json(orders);
    }

    return NextResponse.json({ error: 'userId or orderNumber required' }, { status: 400 });
  } catch (error) {
    console.error('Error fetching orders:', error);
    return NextResponse.json({ error: 'Failed to fetch orders' }, { status: 500 });
  }
}

// POST /api/orders - Create a new order
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      userId,
      guestEmail,
      guestName,
      guestPhone,
      items,
      shippingAddress,
      paymentMethod,
      notes,
    } = body;

    // Validate required fields
    if (!items || items.length === 0) {
      return NextResponse.json({ error: 'Items are required' }, { status: 400 });
    }

    if (!shippingAddress) {
      return NextResponse.json({ error: 'Shipping address is required' }, { status: 400 });
    }

    // Calculate totals
    let subtotal = 0;
    const orderItems = [];

    for (const item of items) {
      const variant = await prisma.productVariant.findUnique({
        where: { id: item.variantId },
        include: { product: true },
      });

      if (!variant) {
        return NextResponse.json({ error: `Product variant not found: ${item.variantId}` }, { status: 400 });
      }

      const price = variant.salePrice ? Number(variant.salePrice) : Number(variant.price);
      const itemTotal = price * item.quantity;
      subtotal += itemTotal;

      orderItems.push({
        productId: variant.product.id,
        variantId: variant.id,
        quantity: item.quantity,
        price: price,
        total: itemTotal,
        productName: variant.product.name,
        variantName: variant.name,
        productImage: variant.product.image,
      });
    }

    // Calculate shipping (free over $150)
    const shippingCost = subtotal >= 150 ? 0 : 15;
    const total = subtotal + shippingCost;

    // Create order
    const order = await prisma.order.create({
      data: {
        orderNumber: generateOrderNumber(),
        userId: userId || null,
        guestEmail: guestEmail || null,
        guestName: guestName || null,
        guestPhone: guestPhone || null,
        shippingName: shippingAddress.name,
        shippingPhone: shippingAddress.phone,
        shippingStreet: shippingAddress.street,
        shippingCity: shippingAddress.city,
        shippingState: shippingAddress.state,
        shippingPostcode: shippingAddress.postcode,
        shippingCountry: shippingAddress.country || 'Australia',
        subtotal,
        shippingCost,
        total,
        status: ORDER_STATUS.PENDING,
        paymentStatus: PAYMENT_STATUS.PENDING,
        paymentMethod: paymentMethod || null,
        notes: notes || null,
        items: {
          create: orderItems,
        },
        tracking: {
          create: {
            status: ORDER_STATUS.PENDING,
            title: 'Order Placed',
            description: 'Your order has been received and is awaiting payment confirmation.',
          },
        },
      },
      include: {
        items: true,
        tracking: true,
      },
    });

    return NextResponse.json(order, { status: 201 });
  } catch (error) {
    console.error('Error creating order:', error);
    return NextResponse.json({ error: 'Failed to create order' }, { status: 500 });
  }
}
