'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useCartStore } from '@/store/cartStore';
import { createClient } from '@/lib/supabase/client';
import { createOrder } from '@/lib/actions/order';
import { Loader2, ShieldCheck, Truck, Lock } from 'lucide-react';
import Image from 'next/image';

export default function CheckoutPage() {
  const router = useRouter();
  const { items, clearCart } = useCartStore();
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState<any>(null);
  
  // Form State
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    postcode: '',
    notes: ''
  });

  // Calculate totals
  const subtotal = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shippingCost = subtotal > 150 ? 0 : 15; // Free shipping over $150
  const total = subtotal + shippingCost;

  useEffect(() => {
    // Check auth
    const supabase = createClient();
    supabase.auth.getUser().then(({ data }) => {
      if (data.user) {
        setUser(data.user);
        // Pre-fill email if logged in
        setFormData(prev => ({ ...prev, email: data.user.email || '' }));
      }
    });
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (items.length === 0) return;

    setLoading(true);

    try {
        const orderData = {
            userId: user?.id, // undefined if guest
            guestEmail: formData.email,
            guestName: `${formData.firstName} ${formData.lastName}`,
            guestPhone: formData.phone,
            shipping: {
                name: `${formData.firstName} ${formData.lastName}`,
                phone: formData.phone,
                street: formData.address,
                city: formData.city,
                state: formData.state,
                postcode: formData.postcode,
                country: 'Australia'
            },
            items: items.map(item => ({
                productId: item.productId, // Ensure these match what's in cart
                variantId: item.variantId,
                quantity: item.quantity,
                price: item.price,
                name: item.name,
                variantName: item.variantName,
                image: item.image
            })),
            totals: {
                subtotal,
                shipping: shippingCost,
                total
            }
        };

        const result = await createOrder(orderData);

        if (result.success) {
            clearCart();
            // Redirect to success page or payment instruction
            // For now, let's redirect to a success page with the ID
            router.push(`/checkout/success?orderId=${result.orderNumber}`);
        } else {
            alert('Failed to place order: ' + result.error);
        }

    } catch (error) {
        console.error(error);
        alert('An unexpected error occurred.');
    } finally {
        setLoading(false);
    }
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen pt-32 pb-12 bg-slate-50 text-center">
        <h1 className="text-3xl font-bold text-slate-800 mb-4">Your Cart is Empty</h1>
        <p className="text-slate-600 mb-8">It looks like you haven&apos;t added any items yet.</p>
        <Link href="/products" className="inline-block bg-blue-600 text-white px-8 py-3 rounded-xl font-bold hover:bg-blue-700 transition">
          Browse Products
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-12 bg-slate-50">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-extrabold text-slate-800 mb-8 border-b pb-4">Secure Checkout</h1>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column: Form */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Shipping Details */}
            <section className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
              <h2 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2">
                <Truck className="w-5 h-5 text-blue-600" />
                Shipping Information
              </h2>
              
              <form id="checkout-form" onSubmit={handleSubmit} className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">First Name</label>
                  <input
                    type="text"
                    name="firstName"
                    required
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    required
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                <div className="col-span-2">
                  <label className="block text-sm font-medium text-slate-700 mb-1">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                <div className="col-span-2">
                  <label className="block text-sm font-medium text-slate-700 mb-1">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                <div className="col-span-2">
                  <label className="block text-sm font-medium text-slate-700 mb-1">Street Address</label>
                  <input
                    type="text"
                    name="address"
                    required
                    value={formData.address}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="123 Example St"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">City</label>
                  <input
                    type="text"
                    name="city"
                    required
                    value={formData.city}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                
                <div className="grid grid-cols-2 gap-2">
                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">State</label>
                        <input
                            type="text"
                            name="state"
                            required
                            value={formData.state}
                            onChange={handleInputChange}
                            className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">Postcode</label>
                        <input
                            type="text"
                            name="postcode"
                            required
                            value={formData.postcode}
                            onChange={handleInputChange}
                            className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>
                </div>

                <div className="col-span-2">
                  <label className="block text-sm font-medium text-slate-700 mb-1">Order Notes (Optional)</label>
                  <textarea
                    name="notes"
                    value={formData.notes}
                    onChange={handleInputChange}
                    rows={3}
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </form>
            </section>

             {/* Payment Method */}
             <section className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
              <h2 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2">
                <Lock className="w-5 h-5 text-blue-600" />
                Payment Method
              </h2>
              
              <div className="p-4 border border-blue-200 bg-blue-50 rounded-lg flex items-start gap-3">
                <div className="mt-1">
                    <div className="w-4 h-4 rounded-full border-2 border-blue-600 bg-blue-600 relative">
                        <div className="absolute inset-0 m-auto w-1.5 h-1.5 bg-white rounded-full" />
                    </div>
                </div>
                <div>
                    <h3 className="font-bold text-slate-800">Bank Transfer / PayID / Crypto</h3>
                    <p className="text-sm text-slate-600 mt-1">
                        Instructions will be provided after you place your order. 
                        We use discreet billing descriptors.
                    </p>
                </div>
              </div>
            </section>
          </div>

          {/* Right Column: Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 sticky top-24">
              <h2 className="text-xl font-bold text-slate-800 mb-6">Order Summary</h2>
              
              <div className="space-y-4 mb-6 max-h-80 overflow-y-auto pr-2">
                {items.map((item) => (
                    <div key={item.id} className="flex gap-3">
                        <div className="relative w-16 h-16 bg-slate-100 rounded-md overflow-hidden shrink-0">
                             {/* Placeholder if no image */}
                             <div className="w-full h-full flex items-center justify-center text-xl">💊</div>
                        </div>
                        <div className="flex-1">
                            <h4 className="font-bold text-sm text-slate-800">{item.name}</h4>
                            <p className="text-xs text-slate-500">{item.variantName}</p>
                            <div className="flex justify-between items-center mt-1">
                                <span className="text-xs text-slate-500">Qty: {item.quantity}</span>
                                <span className="font-bold text-sm text-slate-800">${(item.price * item.quantity).toFixed(2)}</span>
                            </div>
                        </div>
                    </div>
                ))}
              </div>

              <div className="border-t border-slate-100 pt-4 space-y-2 text-sm text-slate-600">
                <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                    <span>Shipping</span>
                    <span>{shippingCost === 0 ? 'FREE' : `$${shippingCost.toFixed(2)}`}</span>
                </div>
                <div className="flex justify-between font-bold text-lg text-slate-900 pt-2 border-t border-slate-100 mt-2">
                    <span>Total</span>
                    <span>${total.toFixed(2)}</span>
                </div>
              </div>

              <button
                type="submit"
                form="checkout-form"
                disabled={loading}
                className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl shadow-lg shadow-blue-600/20 transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {loading ? (
                    <>
                        <Loader2 className="animate-spin w-5 h-5" />
                        Processing...
                    </>
                ) : (
                    <>
                        <ShieldCheck className="w-5 h-5" />
                        Place Secure Order
                    </>
                )}
              </button>

              <div className="mt-4 flex items-center justify-center gap-2 text-xs text-slate-400">
                <Lock className="w-3 h-3" />
                <span>2048-bit SSL Secure Checkout</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

