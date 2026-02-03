'use client';

import Image from 'next/image';
import { useState } from 'react';
import Link from 'next/link';
import { Star, ShoppingCart, Truck, Shield, Clock, ChevronRight, Minus, Plus, Check } from 'lucide-react';
import { useCartStore } from '@/store/cartStore';

interface Variant {
  id: string;
  name: string;
  price: number;
  quantity: number;
  perPill: number;
  stock: number;
}

interface Product {
  id: string;
  name: string;
  slug: string;
  category: string;
  manufacturer: string;
  description: string;
  longDescription: string;
  image: string;
  images: string[];
  badge?: string;
  rating: number;
  reviews: number;
  variants: Variant[];
}

export default function ProductDetail({ product }: { product: Product }) {
  const [selectedVariant, setSelectedVariant] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const { addItem, setIsOpen } = useCartStore();

  const variant = product.variants[selectedVariant];

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addItem({
        id: `${product.id}-${variant.id}`,
        productId: product.id,
        variantId: variant.id,
        name: product.name,
        variantName: variant.name,
        price: variant.price,
        image: product.image,
      });
    }
    setIsOpen(true);
  };

  const badgeStyles: Record<string, string> = {
    bestseller: 'bg-linear-to-r from-amber-500 to-orange-500',
    popular: 'bg-linear-to-r from-blue-500 to-cyan-500',
    new: 'bg-linear-to-r from-emerald-500 to-green-500',
  };

  return (
    <div className="min-h-screen bg-linear-to-b from-white to-slate-50">
      {/* Breadcrumb */}
      <div className="bg-slate-100 py-4">
        <div className="container mx-auto px-4">
          <nav className="flex items-center gap-2 text-sm">
            <Link href="/" className="text-slate-500 hover:text-blue-600">Home</Link>
            <ChevronRight className="w-4 h-4 text-slate-400" />
            <Link href="/products" className="text-slate-500 hover:text-blue-600">Products</Link>
            <ChevronRight className="w-4 h-4 text-slate-400" />
            <span className="text-slate-800 font-medium">{product.name}</span>
          </nav>
        </div>
      </div>

      {/* Product Detail */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Images */}
          <div className="space-y-4">
            <div className="relative aspect-square bg-linear-to-br from-slate-100 to-blue-50 rounded-2xl overflow-hidden">
              {product.badge && (
                <span className={`absolute top-4 left-4 z-10 px-3 py-1 text-white text-xs font-bold uppercase rounded-full ${badgeStyles[product.badge]}`}>
                  {product.badge === 'bestseller' ? 'Best Seller' : product.badge}
                </span>
              )}
              <div className="w-full h-full relative p-8">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-contain hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Info */}
          <div>
            <span className="inline-block text-sm font-semibold text-blue-600 uppercase tracking-wider mb-2">
              {product.category} • {product.manufacturer}
            </span>
            <h1 className="text-3xl md:text-4xl font-extrabold text-slate-800 mb-4">{product.name}</h1>
            
            {/* Rating */}
            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${i < Math.floor(product.rating) ? 'text-amber-400 fill-amber-400' : 'text-slate-200'}`}
                  />
                ))}
                <span className="ml-2 font-semibold text-slate-800">{product.rating}</span>
              </div>
              <span className="text-slate-500">({product.reviews.toLocaleString('en-AU')} reviews)</span>
            </div>

            <p className="text-lg text-slate-600 mb-8">{product.description}</p>

            {/* Variants Selection */}
            <div className="mb-8">
              <h3 className="text-sm font-semibold text-slate-800 mb-3">Select Package:</h3>
              <div className="grid grid-cols-3 gap-3">
                {product.variants.map((v, index) => (
                  <button
                    key={v.id}
                    onClick={() => setSelectedVariant(index)}
                    className={`p-4 rounded-xl border-2 transition-all text-center ${
                      selectedVariant === index
                        ? 'border-blue-600 bg-blue-50 ring-2 ring-blue-600/20'
                        : 'border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    <span className="block text-sm text-slate-500 mb-1">{v.name}</span>
                    <span className="block text-xl font-bold text-slate-800">${v.price}</span>
                    <span className="block text-xs text-slate-400">${v.perPill.toFixed(2)}/pill</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <h3 className="text-sm font-semibold text-slate-800 mb-3">Quantity:</h3>
              <div className="flex items-center gap-4">
                <div className="flex items-center border border-slate-200 rounded-xl overflow-hidden">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-12 h-12 flex items-center justify-center hover:bg-slate-100 transition-colors"
                  >
                    <Minus className="w-5 h-5" />
                  </button>
                  <span className="w-16 text-center font-semibold text-lg">{quantity}</span>
                  <button
                    onClick={() => setQuantity(Math.min(10, quantity + 1))}
                    className="w-12 h-12 flex items-center justify-center hover:bg-slate-100 transition-colors"
                  >
                    <Plus className="w-5 h-5" />
                  </button>
                </div>
                <span className="text-slate-500">
                  Total: <span className="font-bold text-slate-800">${(variant.price * quantity).toFixed(2)}</span>
                </span>
              </div>
            </div>

            {/* Add to Cart */}
            <button
              onClick={handleAddToCart}
              className="w-full flex items-center justify-center gap-3 bg-linear-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold py-4 rounded-xl transition-all duration-300 shadow-lg shadow-blue-600/30 hover:shadow-xl hover:shadow-blue-600/40 mb-6"
            >
              <ShoppingCart className="w-6 h-6" />
              Add to Cart - ${(variant.price * quantity).toFixed(2)}
            </button>

            {/* Trust Features */}
            <div className="grid grid-cols-3 gap-4">
              {[
                { icon: Truck, label: 'Free Express Shipping', subLabel: 'Orders $150+' },
                { icon: Shield, label: 'Guaranteed Delivery', subLabel: 'Or money back' },
                { icon: Clock, label: 'Fast Dispatch', subLabel: 'Same day shipping' },
              ].map((feature) => (
                <div key={feature.label} className="text-center p-4 bg-slate-50 rounded-xl">
                  <feature.icon className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                  <p className="text-xs font-semibold text-slate-800">{feature.label}</p>
                  <p className="text-xs text-slate-500">{feature.subLabel}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Product Description */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-slate-800 mb-6">Product Details</h2>
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="prose prose-slate max-w-none">
              {product.longDescription.split('\n').map((paragraph, index) => {
                if (paragraph.trim().startsWith('**') && paragraph.trim().endsWith('**')) {
                  return (
                    <h3 key={index} className="text-lg font-bold text-slate-800 mt-6 mb-3">
                      {paragraph.replace(/\*\*/g, '')}
                    </h3>
                  );
                }
                if (paragraph.trim().startsWith('-')) {
                  return (
                    <div key={index} className="flex items-start gap-2 ml-4 mb-2">
                      <Check className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                      <span className="text-slate-600">{paragraph.replace('-', '').trim()}</span>
                    </div>
                  );
                }
                if (paragraph.trim()) {
                  return <p key={index} className="text-slate-600 mb-4">{paragraph}</p>;
                }
                return null;
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
