
import { redirect } from 'next/navigation';
import { createClient } from '@/lib/supabase/server';
import { prisma } from '@/lib/prisma';
import Link from 'next/link';
import LogoutButton from '@/components/LogoutButton';
import { Package, DollarSign, Clock, CheckCircle, Truck, XCircle, AlertCircle } from 'lucide-react';

// Format currency
const formatCurrency = (amount: number) => {
  return new Intl.NumberFormat('en-AU', {
    style: 'currency',
    currency: 'AUD',
  }).format(amount);
};

export default async function AdminDashboard() {
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

  // Fetch Data
  const orders = await prisma.order.findMany({
    orderBy: { createdAt: 'desc' },
    include: {
      items: true,
      user: true, // to get registered user details if linked
    },
    take: 50, // Limit to last 50 orders
  });

  // Calculate Stats
  const totalRevenue = orders.reduce((sum, order) => sum + Number(order.total), 0);
  const totalOrders = orders.length;
  const pendingOrders = orders.filter(o => o.status === 'PENDING').length;
  const completedOrders = orders.filter(o => o.status === 'DELIVERED').length;

  return (
    <div className="min-h-screen bg-slate-50 pb-12">
      {/* Top Navigation Bar for Admin */}
      <nav className="bg-white border-b border-slate-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <span className="text-xl font-bold text-slate-900">Admin Dashboard</span>
            </div>
            <div className="flex items-center gap-4">
              <Link href="/" className="text-sm text-slate-600 hover:text-blue-600">
                View Website
              </Link>
              <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-bold">
                A
              </div>
              <LogoutButton />
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 flex items-center gap-4">
            <div className="p-3 bg-blue-50 rounded-lg">
                <DollarSign className="w-6 h-6 text-blue-600" />
            </div>
            <div>
                <p className="text-sm text-slate-500 font-medium">Total Revenue</p>
                <h3 className="text-2xl font-bold text-slate-900">{formatCurrency(totalRevenue)}</h3>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 flex items-center gap-4">
            <div className="p-3 bg-purple-50 rounded-lg">
                <Package className="w-6 h-6 text-purple-600" />
            </div>
            <div>
                <p className="text-sm text-slate-500 font-medium">Total Orders</p>
                <h3 className="text-2xl font-bold text-slate-900">{totalOrders}</h3>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 flex items-center gap-4">
            <div className="p-3 bg-yellow-50 rounded-lg">
                <Clock className="w-6 h-6 text-yellow-600" />
            </div>
            <div>
                <p className="text-sm text-slate-500 font-medium">Pending</p>
                <h3 className="text-2xl font-bold text-slate-900">{pendingOrders}</h3>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 flex items-center gap-4">
             <div className="p-3 bg-green-50 rounded-lg">
                <CheckCircle className="w-6 h-6 text-green-600" />
            </div>
            <div>
                <p className="text-sm text-slate-500 font-medium">Delivered</p>
                <h3 className="text-2xl font-bold text-slate-900">{completedOrders}</h3>
            </div>
          </div>
        </div>

        {/* Recent Orders */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden">
            <div className="px-6 py-4 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
                <h2 className="text-lg font-bold text-slate-800">Recent Transactions</h2>
            </div>
            
            <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="bg-slate-50 text-slate-500 text-xs uppercase tracking-wider h-7">
                            <th className="px-6 py-3 font-medium">Order ID</th>
                            <th className="px-6 py-3 font-medium">Date</th>
                            <th className="px-6 py-3 font-medium">Customer</th>
                            <th className="px-6 py-3 font-medium">Status</th>
                            <th className="px-6 py-3 font-medium">Total</th>
                            <th className="px-6 py-3 font-medium text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                        {orders.length === 0 ? (
                             <tr>
                                <td colSpan={6} className="px-6 py-8 text-center text-slate-400">
                                    No orders found.
                                </td>
                            </tr>
                        ) : (
                            orders.map((order) => {
                                // Determine display status color
                                let statusColor = 'bg-gray-100 text-gray-800';
                                if (order.status === 'PENDING') statusColor = 'bg-yellow-100 text-yellow-800';
                                if (order.status === 'CONFIRMED' || order.status === 'PAID' as any) statusColor = 'bg-blue-100 text-blue-800'; // Cast for mixed types
                                if (order.status === 'SHIPPED') statusColor = 'bg-purple-100 text-purple-800';
                                if (order.status === 'DELIVERED') statusColor = 'bg-green-100 text-green-800';
                                if (order.status === 'CANCELLED') statusColor = 'bg-red-100 text-red-800';

                                return (
                                    <tr key={order.id} className="hover:bg-slate-50 transition-colors">
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <span className="font-mono text-xs font-bold text-slate-600 bg-slate-100 px-2 py-1 rounded">
                                                {order.orderNumber}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-600">
                                            {new Date(order.createdAt).toLocaleDateString()}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="text-sm font-medium text-slate-900">
                                                {order.shippingName || order.guestName || order.user?.name || 'Guest'}
                                            </div>
                                            <div className="text-xs text-slate-500">
                                                {order.guestEmail || order.user?.email}
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <span className={`inline-flex px-2 py-1 text-xs font-bold rounded-full ${statusColor}`}>
                                                {order.status}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-slate-900">
                                            {formatCurrency(Number(order.total))}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-right">
                                            <Link href={`/admin/orders/${order.id}`} className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                                                Manage
                                            </Link>
                                        </td>
                                    </tr>
                                );
                            })
                        )}
                    </tbody>
                </table>
            </div>
        </div>
      </main>
    </div>
  );
}
