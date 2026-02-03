
import { redirect } from 'next/navigation';
import { createClient } from '@/lib/supabase/server';
import { prisma } from '@/lib/prisma';
import Link from 'next/link';
import { ArrowLeft, Package, User, MapPin, CreditCard, Calendar } from 'lucide-react';
import OrderStatusSelector from '@/components/admin/OrderStatusSelector';

// Format currency
const formatCurrency = (amount: number) => {
  return new Intl.NumberFormat('en-AU', {
    style: 'currency',
    currency: 'AUD',
  }).format(amount);
};

export default async function AdminOrderDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    redirect('/login');
  }

  // Verify Admin Role
  const dbUser = await prisma.user.findUnique({
    where: { id: user.id },
  });

  if (!dbUser || dbUser.role !== 'ADMIN') {
    redirect('/');
  }

  const order = await prisma.order.findUnique({
    where: { id },
    include: {
      items: true,
      user: true,
      address: true,
    },
  });

  if (!order) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Order Not Found</h1>
          <Link href="/admin" className="text-blue-600 hover:underline">
            Back to Dashboard
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 py-12">
      <div className="container mx-auto px-4 max-w-5xl">
        {/* Header */}
        <div className="mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <Link href="/admin" className="p-2 hover:bg-white rounded-full transition-colors">
                <ArrowLeft className="w-6 h-6 text-slate-600" />
            </Link>
            <div>
                <h1 className="text-2xl font-bold text-slate-800 flex items-center gap-3">
                    Order #{order.orderNumber}
                </h1>
                <p className="text-slate-500 text-sm">
                    Placed on {new Date(order.createdAt).toLocaleString()}
                </p>
            </div>
          </div>
          
          <div className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm border border-slate-100">
            <span className="text-sm font-medium text-slate-600">Status:</span>
            <OrderStatusSelector orderId={order.id} currentStatus={order.status} />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Order Details */}
            <div className="lg:col-span-2 space-y-6">
                {/* Items */}
                <div className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden">
                    <div className="px-6 py-4 border-b border-slate-100 bg-slate-50/50">
                        <h2 className="font-bold text-slate-800 flex items-center gap-2">
                            <Package className="w-5 h-5 text-blue-600" />
                            Order Items
                        </h2>
                    </div>
                    <div className="divide-y divide-slate-100">
                        {order.items.map((item) => (
                            <div key={item.id} className="p-6 flex items-center gap-4">
                                <div className="w-16 h-16 bg-slate-100 rounded-lg flex items-center justify-center text-2xl">
                                    💊
                                </div>
                                <div className="flex-1">
                                    <h3 className="font-bold text-slate-900">{item.productName}</h3>
                                    <p className="text-sm text-slate-500">{item.variantName}</p>
                                </div>
                                <div className="text-right">
                                    <p className="font-medium text-slate-900">{formatCurrency(Number(item.price))} x {item.quantity}</p>
                                    <p className="font-bold text-blue-600">{formatCurrency(Number(item.total))}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="px-6 py-4 bg-slate-50 border-t border-slate-100">
                        <div className="flex justify-between items-center text-sm mb-2">
                            <span className="text-slate-600">Subtotal</span>
                            <span className="font-medium">{formatCurrency(Number(order.subtotal))}</span>
                        </div>
                        <div className="flex justify-between items-center text-sm mb-2">
                            <span className="text-slate-600">Shipping</span>
                            <span className="font-medium">{Number(order.shippingCost) === 0 ? 'Free' : formatCurrency(Number(order.shippingCost))}</span>
                        </div>
                        <div className="flex justify-between items-center text-lg font-bold pt-2 border-t border-slate-200 mt-2">
                            <span className="text-slate-800">Total</span>
                            <span className="text-blue-600">{formatCurrency(Number(order.total))}</span>
                        </div>
                    </div>
                </div>

                {/* Notes */}
                {(order.notes) && (
                     <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-6">
                        <h3 className="font-bold text-slate-800 mb-2">Order Notes</h3>
                        <p className="text-slate-600 bg-yellow-50 p-4 rounded-lg border border-yellow-100 text-sm">
                            {order.notes}
                        </p>
                    </div>
                )}
            </div>

            {/* Right Column - Customer Info */}
            <div className="space-y-6">
                {/* Customer */}
                <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-6">
                    <h2 className="font-bold text-slate-800 flex items-center gap-2 mb-4">
                        <User className="w-5 h-5 text-blue-600" />
                        Customer Details
                    </h2>
                    <div className="space-y-3 text-sm">
                        <div>
                            <p className="text-slate-500">Name</p>
                            <p className="font-medium text-slate-900">{order.shippingName || order.guestName || 'N/A'}</p>
                        </div>
                        <div>
                            <p className="text-slate-500">Email</p>
                            <p className="font-medium text-slate-900 break-all">{order.guestEmail || order.user?.email || 'N/A'}</p>
                        </div>
                         <div>
                            <p className="text-slate-500">Phone</p>
                            <p className="font-medium text-slate-900">{order.shippingPhone || order.guestPhone || 'N/A'}</p>
                        </div>
                    </div>
                </div>

                {/* Shipping Address */}
                <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-6">
                    <h2 className="font-bold text-slate-800 flex items-center gap-2 mb-4">
                        <MapPin className="w-5 h-5 text-blue-600" />
                        Shipping Address
                    </h2>
                    <div className="text-sm text-slate-600 leading-relaxed">
                        <p>{order.shippingStreet}</p>
                        <p>{order.shippingCity}, {order.shippingState} {order.shippingPostcode}</p>
                        <p>{order.shippingCountry}</p>
                    </div>
                </div>

                {/* Payment Info */}
                <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-6">
                     <h2 className="font-bold text-slate-800 flex items-center gap-2 mb-4">
                        <CreditCard className="w-5 h-5 text-blue-600" />
                        Payment Details
                    </h2>
                     <div className="space-y-3 text-sm">
                        <div>
                            <p className="text-slate-500">Method</p>
                            <p className="font-medium text-slate-900">{order.paymentMethod || 'Bank Transfer'}</p>
                        </div>
                        <div>
                            <p className="text-slate-500">Payment Status</p>
                             <span className={`inline-flex px-2 py-1 text-xs font-bold rounded-full mt-1 ${
                                order.paymentStatus === 'PAID' ? 'bg-green-100 text-green-800' : 
                                order.paymentStatus === 'PENDING' ? 'bg-yellow-100 text-yellow-800' : 'bg-gray-100 text-gray-800'
                            }`}>
                                {order.paymentStatus}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}
