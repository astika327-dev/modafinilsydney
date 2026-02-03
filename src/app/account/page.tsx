
import { redirect } from 'next/navigation';
import { createClient } from '@/lib/supabase/server';
import { prisma } from '@/lib/prisma';
import Link from 'next/link';
import { Package } from 'lucide-react';

export default async function AccountPage() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    redirect('/login');
  }

  // CHECK ROLE: If user is ADMIN, redirect to Admin Dashboard
  const dbUser = await prisma.user.findUnique({
    where: { id: user.id },
    select: { role: true }
  });

  if (dbUser?.role === 'ADMIN') {
    redirect('/admin');
  }

  // Fetch User Orders
  const orders = await prisma.order.findMany({
    where: {
      OR: [
        { userId: user.id },
        { guestEmail: user.email } // Also match by email if they bought as guest before registration
      ]
    },
    orderBy: { createdAt: 'desc' },
    include: {
        items: true
    }
  });

  return (
    <div className="min-h-screen bg-slate-50 pt-24 pb-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-extrabold text-slate-800">My Account</h1>
            <div className="text-slate-600">
                Logged in as <span className="font-bold text-slate-900">{user.email}</span>
            </div>
        </div>

        {/* Orders List */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
            <div className="px-6 py-5 border-b border-slate-100 bg-slate-50/50">
                <h2 className="text-lg font-bold text-slate-800 flex items-center gap-2">
                    <Package className="w-5 h-5 text-blue-600" />
                    Order History
                </h2>
            </div>

            <div className="divide-y divide-slate-100">
                {orders.length === 0 ? (
                    <div className="p-12 text-center text-slate-500">
                        <p className="mb-4">You haven&apos;t placed any orders yet.</p>
                        <Link href="/products" className="text-blue-600 hover:text-blue-800 font-bold">
                            Start Shopping
                        </Link>
                    </div>
                ) : (
                    orders.map((order) => {
                         // Determine display status color
                         let statusColor = 'bg-gray-100 text-gray-800';
                         if (order.status === 'PENDING') statusColor = 'bg-yellow-100 text-yellow-800';
                         if (order.status === 'CONFIRMED' || order.status === 'PROCESSING') statusColor = 'bg-blue-100 text-blue-800';
                         if (order.status === 'SHIPPED') statusColor = 'bg-purple-100 text-purple-800';
                         if (order.status === 'DELIVERED') statusColor = 'bg-green-100 text-green-800';

                        return (
                            <div key={order.id} className="p-6 hover:bg-slate-50 transition-colors">
                                <div className="flex flex-col md:flex-row justify-between md:items-center gap-4 mb-4">
                                    <div>
                                        <div className="flex items-center gap-3 mb-1">
                                            <span className="font-mono font-bold text-slate-800">#{order.orderNumber}</span>
                                            <span className={`text-xs px-2 py-0.5 rounded-full font-bold ${statusColor}`}>
                                                {order.status}
                                            </span>
                                        </div>
                                        <div className="text-sm text-slate-500">
                                            Placed on {new Date(order.createdAt).toLocaleDateString()}
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <div className="font-bold text-lg text-slate-900">
                                            ${Number(order.total).toFixed(2)}
                                        </div>
                                        <div className="text-xs text-slate-500">
                                            {order.items.length} items
                                        </div>
                                    </div>
                                </div>
                                
                                {/* Item Previews */}
                                <div className="flex gap-2 overflow-x-auto pb-2">
                                    {order.items.map((item) => (
                                        <div key={item.id} className="shrink-0 w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center text-lg border border-slate-200" title={item.productName}>
                                            💊
                                        </div>
                                    ))}
                                </div>
                            </div>
                        );
                    })
                )}
            </div>
        </div>
      </div>
    </div>
  );
}
