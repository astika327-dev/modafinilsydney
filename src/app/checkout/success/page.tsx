'use client';

import React, { Suspense } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import { CheckCircle, Copy, Loader2 } from 'lucide-react';

function CheckoutContent() {
  const searchParams = useSearchParams();
  const orderId = searchParams.get('orderId');

  return (
    <div className="bg-white rounded-2xl shadow-xl p-8 text-center border border-slate-100">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-10 h-10 text-green-600" />
          </div>
          
          <h1 className="text-3xl font-extrabold text-slate-900 mb-2">Order Received!</h1>
          <p className="text-slate-600 mb-8">
            Thank you for your purchase. We have received your order details.
          </p>

          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 mb-8 text-left">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-4 pb-4 border-b border-slate-200">
                <span className="text-slate-500 font-medium">Order Number:</span>
                <span className="text-xl font-mono font-bold text-blue-600">{orderId || 'PENDING'}</span>
            </div>

            <h3 className="font-bold text-slate-800 mb-4 mt-6">Payment Instructions (Bank Transfer)</h3>
            <div className="space-y-3 text-sm text-slate-700">
                <div className="flex justify-between">
                    <span className="text-slate-500">Bank Name:</span>
                    <Image
                      src="/images/commbank_black.svg"
                      alt="Commonwealth Bank"
                      width={160}
                      height={35}
                      className="h-7 w-auto"
                    />
                </div>
                <div className="flex justify-between">
                    <span className="text-slate-500">Account Name:</span>
                    <span className="font-medium">M S PTY LTD</span>
                </div>
                <div className="flex justify-between">
                    <span className="text-slate-500">BSB:</span>
                    <div className="flex items-center gap-2">
                        <span className="font-mono bg-white px-2 py-1 rounded border">062-000</span>
                        <Copy className="w-4 h-4 text-slate-400 cursor-pointer hover:text-blue-500" />
                    </div>
                </div>
                <div className="flex justify-between">
                    <span className="text-slate-500">Account Number:</span>
                    <div className="flex items-center gap-2">
                        <span className="font-mono bg-white px-2 py-1 rounded border">1234 5678</span>
                         <Copy className="w-4 h-4 text-slate-400 cursor-pointer hover:text-blue-500" />
                    </div>
                </div>
                <div className="flex justify-between items-center pt-2 mt-2 border-t border-slate-200">
                    <span className="text-slate-500">Reference:</span>
                    <span className="font-bold text-blue-600">{orderId?.split('-').slice(0,2).join('-') || 'Waiting...'}</span>
                </div>
            </div>
            
            <div className="mt-6 bg-yellow-50 text-yellow-800 text-xs p-3 rounded-lg border border-yellow-200">
                ⚠️ Please use the Order Number as the payment reference. Your order will be shipped immediately after funds clear.
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
                href="/products"
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-xl text-white bg-blue-600 hover:bg-blue-700 md:text-lg transition-all"
            >
                Continue Shopping
            </Link>
            <Link
                href="/account"
                className="inline-flex items-center justify-center px-6 py-3 border border-slate-200 text-base font-medium rounded-xl text-slate-700 bg-white hover:bg-slate-50 md:text-lg transition-all"
            >
                View Order Status
            </Link>
          </div>
        </div>
  );
}

export default function CheckoutSuccessPage() {
  return (
    <div className="min-h-screen pt-32 pb-12 bg-slate-50">
      <div className="container mx-auto px-4 max-w-2xl">
        <Suspense fallback={
          <div className="flex justify-center py-20">
            <Loader2 className="w-10 h-10 animate-spin text-blue-600" />
          </div>
        }>
          <CheckoutContent />
        </Suspense>
      </div>
    </div>
  );
}

