'use client';

import Link from 'next/link';
import { X, Minus, Plus, ShoppingBag, ArrowRight } from 'lucide-react';
import { useCartStore } from '@/store/cartStore';

export default function CartSidebar() {
  const { items, isOpen, setIsOpen, removeItem, updateQuantity, getSubtotal } = useCartStore();

  if (!isOpen) return null;

  const subtotal = getSubtotal();

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 transition-opacity"
        onClick={() => setIsOpen(false)}
      />

      {/* Sidebar */}
      <div className="fixed right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl z-50 flex flex-col animate-slide-in-right">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-slate-200">
          <h3 className="text-xl font-bold text-slate-800 flex items-center gap-2">
            <ShoppingBag className="w-6 h-6" />
            Your Cart
            {items.length > 0 && (
              <span className="ml-1 text-sm bg-blue-100 text-blue-600 px-2 py-0.5 rounded-full">
                {items.reduce((sum, item) => sum + item.quantity, 0)}
              </span>
            )}
          </h3>
          <button
            onClick={() => setIsOpen(false)}
            className="w-10 h-10 rounded-full hover:bg-slate-100 flex items-center justify-center transition-colors"
          >
            <X className="w-6 h-6 text-slate-600" />
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-6">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <div className="w-24 h-24 bg-slate-100 rounded-full flex items-center justify-center mb-4">
                <ShoppingBag className="w-12 h-12 text-slate-400" />
              </div>
              <h4 className="text-xl font-semibold text-slate-800 mb-2">Your cart is empty</h4>
              <p className="text-slate-500 mb-6">Add some products to get started</p>
              <button
                onClick={() => setIsOpen(false)}
                className="inline-flex items-center gap-2 bg-linear-to-r from-blue-600 to-blue-700 text-white font-semibold px-6 py-3 rounded-xl transition-all hover:from-blue-700 hover:to-blue-800"
              >
                Start Shopping
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              {items.map((item) => (
                <div
                  key={item.variantId}
                  className="flex gap-4 p-4 bg-slate-50 rounded-xl"
                >
                  {/* Product Image Placeholder */}
                  <div className="w-20 h-20 bg-linear-to-br from-blue-100 to-blue-200 rounded-lg flex items-center justify-center shrink-0">
                    <span className="text-2xl">💊</span>
                  </div>

                  {/* Product Info */}
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-slate-800 truncate">{item.name}</h4>
                    <p className="text-sm text-slate-500">{item.variantName}</p>
                    <p className="text-lg font-bold text-blue-600 mt-1">${item.price}</p>
                  </div>

                  {/* Quantity Controls */}
                  <div className="flex flex-col items-end justify-between">
                    <button
                      onClick={() => removeItem(item.variantId)}
                      className="text-slate-400 hover:text-red-500 transition-colors"
                    >
                      <X className="w-5 h-5" />
                    </button>
                    <div className="flex items-center gap-2 bg-white rounded-lg border border-slate-200 p-1">
                      <button
                        onClick={() => updateQuantity(item.variantId, item.quantity - 1)}
                        className="w-7 h-7 flex items-center justify-center hover:bg-slate-100 rounded transition-colors"
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="w-8 text-center font-semibold">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.variantId, item.quantity + 1)}
                        className="w-7 h-7 flex items-center justify-center hover:bg-slate-100 rounded transition-colors"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="p-6 border-t border-slate-200 bg-white">
            <div className="flex items-center justify-between mb-2">
              <span className="text-slate-600">Subtotal</span>
              <span className="text-2xl font-bold text-slate-800">${subtotal.toFixed(2)}</span>
            </div>
            <p className="text-sm text-slate-500 mb-4">Shipping calculated at checkout</p>
            <div className="space-y-3">
              <Link
                href="/checkout"
                onClick={() => setIsOpen(false)}
                className="w-full flex items-center justify-center gap-2 bg-linear-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-4 rounded-xl transition-all duration-300"
              >
                Checkout
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/cart"
                onClick={() => setIsOpen(false)}
                className="w-full flex items-center justify-center gap-2 border border-slate-200 hover:border-slate-300 text-slate-700 font-semibold py-3 rounded-xl transition-all"
              >
                View Cart
              </Link>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

