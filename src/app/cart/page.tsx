'use client';

import Link from 'next/link';
import { Minus, Plus, X, ShoppingBag, ArrowRight, ArrowLeft, Truck, Shield } from 'lucide-react';
import { useCartStore } from '@/store/cartStore';

export default function CartPage() {
  const { items, removeItem, updateQuantity, getSubtotal } = useCartStore();
  const subtotal = getSubtotal();
  const shipping = subtotal >= 150 ? 0 : 15;
  const total = subtotal + shipping;

  if (items.length === 0) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center">
        <div className="text-center">
          <div className="w-24 h-24 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <ShoppingBag className="w-12 h-12 text-slate-400" />
          </div>
          <h1 className="text-2xl font-bold text-slate-800 mb-2">Your cart is empty</h1>
          <p className="text-slate-500 mb-8">Add some products to get started</p>
          <Link
            href="/products"
            className="inline-flex items-center gap-2 bg-linear-to-r from-blue-600 to-blue-700 text-white font-semibold px-8 py-4 rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all"
          >
            Browse Products
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-linear-to-b from-white to-slate-50 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-extrabold text-slate-800 mb-8">Shopping Cart</h1>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {items.map((item) => (
              <div
                key={item.variantId}
                className="bg-white rounded-xl shadow-md p-6 flex gap-6"
              >
                {/* Image */}
                <div className="w-24 h-24 bg-linear-to-br from-blue-100 to-blue-200 rounded-xl flex items-center justify-center shrink-0">
                  <span className="text-3xl">💊</span>
                </div>

                {/* Info */}
                <div className="flex-1">
                  <div className="flex justify-between mb-2">
                    <div>
                      <h3 className="font-bold text-slate-800">{item.name}</h3>
                      <p className="text-sm text-slate-500">{item.variantName}</p>
                    </div>
                    <button
                      onClick={() => removeItem(item.variantId)}
                      className="text-slate-400 hover:text-red-500 transition-colors"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>

                  <div className="flex items-center justify-between mt-4">
                    {/* Quantity */}
                    <div className="flex items-center border border-slate-200 rounded-lg overflow-hidden">
                      <button
                        onClick={() => updateQuantity(item.variantId, item.quantity - 1)}
                        className="w-10 h-10 flex items-center justify-center hover:bg-slate-100 transition-colors"
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="w-12 text-center font-semibold">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.variantId, item.quantity + 1)}
                        className="w-10 h-10 flex items-center justify-center hover:bg-slate-100 transition-colors"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>

                    {/* Price */}
                    <p className="text-xl font-bold text-slate-800">
                      ${(item.price * item.quantity).toFixed(2)}
                    </p>
                  </div>
                </div>
              </div>
            ))}

            <Link
              href="/products"
              className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium mt-4"
            >
              <ArrowLeft className="w-4 h-4" />
              Continue Shopping
            </Link>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-lg p-6 sticky top-24">
              <h2 className="text-xl font-bold text-slate-800 mb-6">Order Summary</h2>

              <div className="space-y-4 mb-6">
                <div className="flex justify-between">
                  <span className="text-slate-600">Subtotal</span>
                  <span className="font-semibold text-slate-800">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">Shipping</span>
                  <span className="font-semibold text-slate-800">
                    {shipping === 0 ? (
                      <span className="text-green-600">FREE</span>
                    ) : (
                      `$${shipping.toFixed(2)}`
                    )}
                  </span>
                </div>
                {subtotal < 150 && (
                  <p className="text-sm text-amber-600 bg-amber-50 p-3 rounded-lg">
                    Add ${(150 - subtotal).toFixed(2)} more for FREE shipping!
                  </p>
                )}
                <div className="border-t pt-4 flex justify-between">
                  <span className="font-bold text-slate-800">Total</span>
                  <span className="text-2xl font-bold text-slate-800">${total.toFixed(2)}</span>
                </div>
              </div>

              <Link
                href="/checkout"
                className="w-full flex items-center justify-center gap-2 bg-linear-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold py-4 rounded-xl transition-all shadow-lg shadow-blue-600/30"
              >
                Proceed to Checkout
                <ArrowRight className="w-5 h-5" />
              </Link>

              {/* Trust Badges */}
              <div className="mt-6 pt-6 border-t space-y-3">
                <div className="flex items-center gap-3 text-sm text-slate-600">
                  <Truck className="w-5 h-5 text-blue-600" />
                  <span>Free express shipping on orders $150+</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-600">
                  <Shield className="w-5 h-5 text-blue-600" />
                  <span>100% guaranteed delivery</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

