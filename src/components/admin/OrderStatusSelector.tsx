'use client';

import { useState } from 'react';
import { updateOrderStatus } from '@/lib/actions/order';
import { OrderStatus } from '@prisma/client';
import { Check, ChevronDown, Loader2 } from 'lucide-react';

export default function OrderStatusSelector({ orderId, currentStatus }: { orderId: string, currentStatus: OrderStatus }) {
  const [status, setStatus] = useState<OrderStatus>(currentStatus);
  const [isLoading, setIsLoading] = useState(false);

  const handleStatusChange = async (newStatus: OrderStatus) => {
    if (newStatus === status) return;
    
    setIsLoading(true);
    const result = await updateOrderStatus(orderId, newStatus);
    
    if (result.success) {
      setStatus(newStatus);
    } else {
      alert('Failed to update status: ' + result.error);
    }
    setIsLoading(false);
  };

  const statuses: OrderStatus[] = [
    'PENDING',
    'CONFIRMED',
    'PROCESSING',
    'SHIPPED',
    'DELIVERED',
    'CANCELLED',
    'REFUNDED'
  ];

  return (
    <div className="relative inline-block text-left group">
      <div className="flex items-center gap-2">
        <select
          value={status}
          onChange={(e) => handleStatusChange(e.target.value as OrderStatus)}
          disabled={isLoading}
          className={`block w-full rounded-md border-0 py-1.5 pl-3 pr-10 ring-1 ring-inset focus:ring-2 focus:ring-blue-600 sm:text-sm sm:leading-6 ${
            isLoading ? 'bg-gray-100 text-gray-500 cursor-wait' : 'bg-white text-gray-900 shadow-sm ring-gray-300'
          }`}
        >
          {statuses.map((s) => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>
        {isLoading && <Loader2 className="w-4 h-4 animate-spin text-blue-600" />}
      </div>
    </div>
  );
}
