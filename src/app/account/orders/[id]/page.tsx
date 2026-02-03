'use client';

import Link from 'next/link';
import { use } from 'react';
import { 
  ChevronLeft, Package, Truck, MapPin, Clock, 
  CheckCircle, Copy, Check, Download
} from 'lucide-react';
import { useState } from 'react';

// Mock order data
const mockOrderDetails: Record<string, {
  orderNumber: string;
  status: string;
  createdAt: string;
  paidAt: string;
  shippedAt: string | null;
  estimatedDelivery: string;
  paymentMethod: string;
  subtotal: number;
  shipping: number;
  total: number;
  items: { name: string; variant: string; quantity: number; price: number }[];
  shippingAddress: {
    name: string;
    street: string;
    city: string;
    state: string;
    postcode: string;
    country: string;
    phone: string;
  };
  tracking: {
    status: string;
    title: string;
    description: string;
    date: string;
    isCompleted: boolean;
  }[];
}> = {
  'MS-ABC123': {
    orderNumber: 'MS-ABC123',
    status: 'SHIPPED',
    createdAt: '2026-02-01 15:30',
    paidAt: '2026-02-01 15:35',
    shippedAt: '2026-02-02 09:00',
    estimatedDelivery: '2026-02-08',
    paymentMethod: 'Credit Card (Visa ****4242)',
    subtotal: 248,
    shipping: 0,
    total: 248,
    items: [
      { name: 'Modalert 200mg', variant: '60 pills', quantity: 1, price: 149 },
      { name: 'Artvigil 150mg', variant: '30 pills', quantity: 1, price: 99 },
    ],
    shippingAddress: {
      name: 'John Doe',
      street: '123 Main Street',
      city: 'Sydney',
      state: 'NSW',
      postcode: '2000',
      country: 'Australia',
      phone: '+61 412 345 678',
    },
    tracking: [
      { status: 'DELIVERED', title: 'Delivered', description: 'Package delivered', date: '', isCompleted: false },
      { status: 'IN_TRANSIT', title: 'In Transit', description: 'Package in transit to destination', date: '2026-02-03 14:30', isCompleted: true },
      { status: 'SHIPPED', title: 'Shipped', description: 'Package dispatched', date: '2026-02-02 09:00', isCompleted: true },
      { status: 'PROCESSING', title: 'Processing', description: 'Order being prepared', date: '2026-02-01 16:00', isCompleted: true },
      { status: 'CONFIRMED', title: 'Confirmed', description: 'Order confirmed', date: '2026-02-01 15:35', isCompleted: true },
    ],
  },
  'MS-DEF456': {
    orderNumber: 'MS-DEF456',
    status: 'DELIVERED',
    createdAt: '2026-01-15 10:00',
    paidAt: '2026-01-15 10:05',
    shippedAt: '2026-01-16 08:00',
    estimatedDelivery: '2026-01-22',
    paymentMethod: 'Bank Transfer',
    subtotal: 199,
    shipping: 0,
    total: 199,
    items: [
      { name: 'Modalert 200mg', variant: '100 pills', quantity: 1, price: 199 },
    ],
    shippingAddress: {
      name: 'John Doe',
      street: '123 Main Street',
      city: 'Sydney',
      state: 'NSW',
      postcode: '2000',
      country: 'Australia',
      phone: '+61 412 345 678',
    },
    tracking: [
      { status: 'DELIVERED', title: 'Delivered', description: 'Package delivered', date: '2026-01-20 11:30', isCompleted: true },
      { status: 'IN_TRANSIT', title: 'In Transit', description: 'Package in transit', date: '2026-01-18 09:00', isCompleted: true },
      { status: 'SHIPPED', title: 'Shipped', description: 'Package dispatched', date: '2026-01-16 08:00', isCompleted: true },
      { status: 'CONFIRMED', title: 'Confirmed', description: 'Order confirmed', date: '2026-01-15 10:05', isCompleted: true },
    ],
  },
  'MS-GHI789': {
    orderNumber: 'MS-GHI789',
    status: 'DELIVERED',
    createdAt: '2026-01-02 14:20',
    paidAt: '2026-01-02 14:25',
    shippedAt: '2026-01-03 10:00',
    estimatedDelivery: '2026-01-09',
    paymentMethod: 'Cryptocurrency (BTC)',
    subtotal: 149,
    shipping: 0,
    total: 149,
    items: [
      { name: 'Modvigil 200mg', variant: '60 pills', quantity: 1, price: 149 },
    ],
    shippingAddress: {
      name: 'John Doe',
      street: '123 Main Street',
      city: 'Sydney',
      state: 'NSW',
      postcode: '2000',
      country: 'Australia',
      phone: '+61 412 345 678',
    },
    tracking: [
      { status: 'DELIVERED', title: 'Delivered', description: 'Package delivered', date: '2026-01-07 15:00', isCompleted: true },
      { status: 'SHIPPED', title: 'Shipped', description: 'Package dispatched', date: '2026-01-03 10:00', isCompleted: true },
      { status: 'CONFIRMED', title: 'Confirmed', description: 'Order confirmed', date: '2026-01-02 14:25', isCompleted: true },
    ],
  },
};

const statusColors: Record<string, string> = {
  PENDING: 'bg-yellow-100 text-yellow-800',
  CONFIRMED: 'bg-blue-100 text-blue-800',
  PROCESSING: 'bg-purple-100 text-purple-800',
  SHIPPED: 'bg-indigo-100 text-indigo-800',
  DELIVERED: 'bg-green-100 text-green-800',
  CANCELLED: 'bg-red-100 text-red-800',
};

interface PageProps {
  params: Promise<{ id: string }>;
}

export default function OrderDetailPage({ params }: PageProps) {
  const { id } = use(params);
  const order = mockOrderDetails[id];
  const [copied, setCopied] = useState(false);

  const copyOrderNumber = () => {
    navigator.clipboard.writeText(order?.orderNumber || '');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (!order) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center">
        <div className="text-center">
          <Package className="w-16 h-16 text-slate-300 mx-auto mb-4" />
          <h1 className="text-2xl font-bold text-slate-800 mb-2">Order Not Found</h1>
          <p className="text-slate-500 mb-6">The order you&apos;re looking for doesn&apos;t exist.</p>
          <Link
            href="/account"
            className="inline-flex items-center gap-2 bg-blue-600 text-white font-semibold px-6 py-3 rounded-xl hover:bg-blue-700 transition-colors"
          >
            Back to Account
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-linear-to-b from-slate-50 to-white py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <Link href="/account" className="inline-flex items-center gap-2 text-slate-600 hover:text-blue-600 transition-colors mb-4">
              <ChevronLeft className="w-4 h-4" />
              Back to Account
            </Link>
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <h1 className="text-2xl font-extrabold text-slate-800">Order {order.orderNumber}</h1>
                  <button
                    onClick={copyOrderNumber}
                    className="p-1 hover:bg-slate-100 rounded transition-colors"
                    title="Copy order number"
                  >
                    {copied ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4 text-slate-400" />}
                  </button>
                </div>
                <p className="text-slate-500">Placed on {order.createdAt}</p>
              </div>
              <span className={`px-4 py-2 rounded-full font-semibold ${statusColors[order.status]}`}>
                {order.status}
              </span>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-6">
              {/* Tracking */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h2 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2">
                  <Truck className="w-5 h-5" />
                  Tracking
                </h2>
                <div className="relative">
                  {order.tracking.map((step, index) => (
                    <div key={index} className="relative pl-10 pb-6 last:pb-0">
                      {index < order.tracking.length - 1 && (
                        <div className={`absolute left-[14px] top-8 w-0.5 h-full ${
                          step.isCompleted ? 'bg-blue-500' : 'bg-slate-200'
                        }`} />
                      )}
                      <div className={`absolute left-0 top-1 w-7 h-7 rounded-full flex items-center justify-center ${
                        step.isCompleted ? 'bg-blue-500 text-white' : 'bg-slate-200 text-slate-400'
                      }`}>
                        {step.isCompleted ? <CheckCircle className="w-4 h-4" /> : <div className="w-2 h-2 rounded-full bg-current" />}
                      </div>
                      <div className={step.isCompleted ? '' : 'opacity-50'}>
                        <div className="flex flex-wrap items-baseline gap-2 mb-1">
                          <h3 className="font-semibold text-slate-800">{step.title}</h3>
                          {step.date && <span className="text-sm text-slate-500">{step.date}</span>}
                        </div>
                        <p className="text-slate-600 text-sm">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Items */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h2 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2">
                  <Package className="w-5 h-5" />
                  Order Items
                </h2>
                <div className="space-y-4">
                  {order.items.map((item, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-slate-50 rounded-xl">
                      <div className="flex items-center gap-4">
                        <div className="w-14 h-14 bg-linear-to-br from-blue-100 to-blue-200 rounded-lg flex items-center justify-center">
                          <span className="text-2xl">💊</span>
                        </div>
                        <div>
                          <p className="font-semibold text-slate-800">{item.name}</p>
                          <p className="text-sm text-slate-500">{item.variant} × {item.quantity}</p>
                        </div>
                      </div>
                      <p className="text-lg font-bold text-slate-800">${item.price}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-6">
              {/* Summary */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h2 className="text-lg font-bold text-slate-800 mb-4">Order Summary</h2>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-slate-500">Subtotal</span>
                    <span className="font-medium text-slate-800">${order.subtotal}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Shipping</span>
                    <span className="font-medium text-green-600">FREE</span>
                  </div>
                  <div className="flex justify-between pt-3 border-t">
                    <span className="font-bold text-slate-800">Total</span>
                    <span className="text-xl font-bold text-slate-800">${order.total}</span>
                  </div>
                </div>
              </div>

              {/* Shipping Address */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h2 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  Shipping Address
                </h2>
                <div className="text-sm text-slate-600">
                  <p className="font-semibold text-slate-800">{order.shippingAddress.name}</p>
                  <p>{order.shippingAddress.street}</p>
                  <p>{order.shippingAddress.city}, {order.shippingAddress.state} {order.shippingAddress.postcode}</p>
                  <p>{order.shippingAddress.country}</p>
                  <p className="mt-2">{order.shippingAddress.phone}</p>
                </div>
              </div>

              {/* Payment */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h2 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  Payment Info
                </h2>
                <div className="text-sm text-slate-600 space-y-2">
                  <div className="flex justify-between">
                    <span className="text-slate-500">Method</span>
                    <span className="font-medium text-slate-800">{order.paymentMethod}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Paid On</span>
                    <span className="font-medium text-slate-800">{order.paidAt}</span>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="space-y-3">
                <Link
                  href={`/track?order=${order.orderNumber}`}
                  className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl transition-colors"
                >
                  <Truck className="w-4 h-4" />
                  Track Order
                </Link>
                <button className="w-full flex items-center justify-center gap-2 border border-slate-200 hover:border-slate-300 text-slate-700 font-semibold py-3 rounded-xl transition-colors">
                  <Download className="w-4 h-4" />
                  Download Invoice
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
