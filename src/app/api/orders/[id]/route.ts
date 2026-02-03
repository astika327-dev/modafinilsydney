import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { OrderStatus, PaymentStatus } from '@prisma/client';

interface Params {
  params: Promise<{ id: string }>;
}

// GET /api/orders/[id] - Get order by ID or order number
export async function GET(request: NextRequest, { params }: Params) {
  try {
    const { id } = await params;

    // Try to find by order number first, then by ID
    const order = await prisma.order.findFirst({
      where: {
        OR: [
          { orderNumber: id },
          { id: id },
        ],
      },
      include: {
        items: true,
        tracking: {
          orderBy: { createdAt: 'desc' },
        },
        user: {
          select: {
            id: true,
            name: true,
            email: true,
          },
        },
      },
    });

    if (!order) {
      return NextResponse.json({ error: 'Order not found' }, { status: 404 });
    }

    return NextResponse.json(order);
  } catch (error) {
    console.error('Error fetching order:', error);
    return NextResponse.json({ error: 'Failed to fetch order' }, { status: 500 });
  }
}

// PATCH /api/orders/[id] - Update order status
export async function PATCH(request: NextRequest, { params }: Params) {
  try {
    const { id } = await params;
    const body = await request.json();
    const { status, trackingTitle, trackingDescription, trackingLocation, paymentStatus } = body;

    // Find the order
    const existingOrder = await prisma.order.findFirst({
      where: {
        OR: [
          { orderNumber: id },
          { id: id },
        ],
      },
    });

    if (!existingOrder) {
      return NextResponse.json({ error: 'Order not found' }, { status: 404 });
    }

    // Prepare update data
    interface UpdateData {
      status?: OrderStatus;
      paymentStatus?: PaymentStatus;
      paidAt?: Date;
      shippedAt?: Date;
      deliveredAt?: Date;
    }
    
    // Explicitly type the update object to match Prisma's expected input partially
    const updateData: UpdateData = {};

    if (status) {
      // Cast the string status to the Prisma Enum
      updateData.status = status as OrderStatus;
      
      // Set timestamps based on status
      if (status === 'CONFIRMED' || status === 'PROCESSING') {
        updateData.paidAt = new Date();
      }
      if (status === 'SHIPPED') {
        updateData.shippedAt = new Date();
      }
      if (status === 'DELIVERED') {
        updateData.deliveredAt = new Date();
      }
    }

    if (paymentStatus) {
       // Cast the string paymentStatus to the Prisma Enum
      updateData.paymentStatus = paymentStatus as PaymentStatus;
    }

    // Update order
    const order = await prisma.order.update({
      where: { id: existingOrder.id },
      data: updateData,
      include: {
        items: true,
        tracking: {
          orderBy: { createdAt: 'desc' },
        },
      },
    });

    // Add tracking entry if status changed
    if (status) {
      await prisma.orderTracking.create({
        data: {
          orderId: order.id,
          status: status as OrderStatus,
          title: trackingTitle || getDefaultTrackingTitle(status),
          description: trackingDescription || getDefaultTrackingDescription(status),
          location: trackingLocation || null,
        },
      });
    }

    // Fetch updated order with tracking
    const updatedOrder = await prisma.order.findUnique({
      where: { id: order.id },
      include: {
        items: true,
        tracking: {
          orderBy: { createdAt: 'desc' },
        },
      },
    });

    return NextResponse.json(updatedOrder);
  } catch (error) {
    console.error('Error updating order:', error);
    return NextResponse.json({ error: 'Failed to update order' }, { status: 500 });
  }
}

function getDefaultTrackingTitle(status: string): string {
  const titles: Record<string, string> = {
    PENDING: 'Order Placed',
    CONFIRMED: 'Order Confirmed',
    PROCESSING: 'Processing',
    SHIPPED: 'Shipped',
    OUT_FOR_DELIVERY: 'Out for Delivery',
    DELIVERED: 'Delivered',
    CANCELLED: 'Cancelled',
    REFUNDED: 'Refunded',
  };
  return titles[status] || status;
}

function getDefaultTrackingDescription(status: string): string {
  const descriptions: Record<string, string> = {
    PENDING: 'Your order has been received and is awaiting payment confirmation.',
    CONFIRMED: 'Payment received. Your order is confirmed.',
    PROCESSING: 'Your order is being prepared for shipment.',
    SHIPPED: 'Your order has been dispatched.',
    OUT_FOR_DELIVERY: 'Your package is out for delivery today.',
    DELIVERED: 'Your package has been delivered successfully.',
    CANCELLED: 'This order has been cancelled.',
    REFUNDED: 'A refund has been processed for this order.',
  };
  return descriptions[status] || '';
}
