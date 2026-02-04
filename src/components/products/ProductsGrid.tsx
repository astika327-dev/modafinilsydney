'use client';

import Image from 'next/image';
import { useState } from 'react';
import Link from 'next/link';
import { Star, ShoppingCart } from 'lucide-react';
import { useCartStore } from '@/store/cartStore';

// Temporary static data - will be replaced with database data
const products = [
  {
    id: 'modalert-200',
    name: 'Modalert 200mg',
    slug: 'modalert-200mg',
    category: 'Modafinil',
    description: "Boost your productivity with Modalert 200mg, Australia's go-to smart choice for sharper focus and clear-headed energy.",
    image: '/images/Modalert-200mg.webp',
    badge: 'bestseller' as const,
    rating: 5,
    reviews: 47,
    variants: [
      { id: 'modalert-200-30', name: '30 pills', price: 120, quantity: 30 },
      { id: 'modalert-200-50', name: '50 pills', price: 200, quantity: 50 },
      { id: 'modalert-200-100', name: '100 pills', price: 350, quantity: 100 },
      { id: 'modalert-200-200', name: '200 pills', price: 600, quantity: 200 },
    ],
  },
  {
    id: 'modalert-100',
    name: 'Modalert 100mg',
    slug: 'modalert-100mg',
    category: 'Modafinil',
    description: "Power through your day with Modalert 100mg. Perfect for long workdays, study marathons, or anyone needing a sharp mental edge.",
    image: '/images/Modalert-100-1-scaled.webp',
    badge: 'popular' as const,
    rating: 5,
    reviews: 32,
    variants: [
      { id: 'modalert-100-30', name: '30 pills', price: 69, quantity: 30 },
      { id: 'modalert-100-50', name: '50 pills', price: 96, quantity: 50 },
      { id: 'modalert-100-100', name: '100 pills', price: 155, quantity: 100 },
      { id: 'modalert-100-200', name: '200 pills', price: 259, quantity: 200 },
    ],
  },
  {
    id: 'modafresh',
    name: 'Modafresh 200mg',
    slug: 'modafresh-200mg',
    category: 'Modafinil',
    description: "Power through your busiest days with Modafresh 200mg. Sharp focus, steady energy, and clean-minded alertness without the jitters.",
    image: '/images/Modafresh-200-4-scaled.webp',
    rating: 5,
    reviews: 28,
    variants: [
      { id: 'modafresh-30', name: '30 pills', price: 75, quantity: 30 },
      { id: 'modafresh-50', name: '50 pills', price: 110, quantity: 50 },
      { id: 'modafresh-100', name: '100 pills', price: 164, quantity: 100 },
      { id: 'modafresh-200', name: '200 pills', price: 273, quantity: 200 },
    ],
  },
  {
    id: 'modvigil',
    name: 'Modvigil 200mg',
    slug: 'modvigil-200mg',
    category: 'Modafinil',
    description: "Your 'get it done' switch with clean wakefulness, crisp focus, and steady drive. Super affordable and Aussie-trusted.",
    image: '/images/Modvigil-200-5-scaled.webp',
    rating: 5,
    reviews: 35,
    variants: [
      { id: 'modvigil-30', name: '30 pills', price: 83, quantity: 30 },
      { id: 'modvigil-50', name: '50 pills', price: 117, quantity: 50 },
      { id: 'modvigil-100', name: '100 pills', price: 203, quantity: 100 },
      { id: 'modvigil-200', name: '200 pills', price: 365, quantity: 200 },
    ],
  },
  {
    id: 'modawake',
    name: 'Modawake 200mg',
    slug: 'modawake-200mg',
    category: 'Modafinil',
    description: "Strong, long lasting focus and clean energy. Premium Modafinil trusted by students, professionals, and shift workers.",
    image: '/images/modawake-200mg.webp',
    rating: 5,
    reviews: 24,
    variants: [
      { id: 'modawake-30', name: '30 pills', price: 75, quantity: 30 },
      { id: 'modawake-50', name: '50 pills', price: 101, quantity: 50 },
      { id: 'modawake-100', name: '100 pills', price: 195, quantity: 100 },
      { id: 'modawake-200', name: '200 pills', price: 327, quantity: 200 },
    ],
  },
  {
    id: 'modasmart',
    name: 'Modasmart 400mg',
    slug: 'modasmart-400mg',
    category: 'Modafinil',
    description: "If 200mg feels like it's not cutting it, Modafinil 400mg is the step up serious users go for. Stop fighting fatigue the hard way.",
    image: '/images/Modasmart-400-2-scaled.webp',
    badge: 'new' as const,
    rating: 5,
    reviews: 18,
    variants: [
      { id: 'modasmart-50', name: '50 pills', price: 152, quantity: 50 },
      { id: 'modasmart-100', name: '100 pills', price: 244, quantity: 100 },
      { id: 'modasmart-200', name: '200 pills', price: 411, quantity: 200 },
      { id: 'modasmart-300', name: '300 pills', price: 548, quantity: 300 },
    ],
  },
  {
    id: 'modafinil-400',
    name: 'Modafinil 400mg Australia',
    slug: 'modafinil-400mg-australia',
    category: 'Modafinil',
    description: "If 200mg feels like it's not cutting it, Modafinil 400mg is the step up serious users go for. Ships Australia-wide, fast and discreet.",
    image: '/images/Modasmart-400-2-scaled.webp',
    badge: 'new' as const,
    rating: 5,
    reviews: 12,
    variants: [
      { id: 'modafinil-400-50', name: '50 pills', price: 152, quantity: 50 },
      { id: 'modafinil-400-100', name: '100 pills', price: 244, quantity: 100 },
      { id: 'modafinil-400-200', name: '200 pills', price: 411, quantity: 200 },
      { id: 'modafinil-400-300', name: '300 pills', price: 548, quantity: 300 },
    ],
  },
];



function ProductCard({ product }: { product: typeof products[0] }) {
  const [selectedVariant, setSelectedVariant] = useState(0);
  const { addItem, setIsOpen } = useCartStore();

  const variant = product.variants[selectedVariant];

  const handleAddToCart = () => {
    addItem({
      id: `${product.id}-${variant.id}`,
      productId: product.id,
      variantId: variant.id,
      name: product.name,
      variantName: variant.name,
      price: variant.price,
      image: product.image,
    });
    setIsOpen(true);
  };



  return (
    <div className="group bg-white rounded-2xl shadow-lg shadow-slate-200/50 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      {/* Image */}
      <Link href={`/products/${product.slug}`} className="block relative aspect-square bg-slate-50 overflow-hidden">

        <div className="w-full h-full flex items-center justify-center p-8 group-hover:scale-105 transition-transform duration-300 relative">
            <Image 
                src={product.image}
                alt={product.name}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
            />
        </div>
      </Link>

      {/* Info */}
      <div className="p-6">
        <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider">
          {product.category}
        </span>
        <Link href={`/products/${product.slug}`}>
          <h3 className="text-xl font-bold text-slate-800 mt-1 mb-2 hover:text-blue-600 transition-colors">{product.name}</h3>
        </Link>
        <p className="text-slate-500 text-sm mb-4 line-clamp-2">{product.description}</p>

        {/* Rating */}
        <div className="flex items-center gap-2 mb-4">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${i < product.rating ? 'text-amber-400 fill-amber-400' : 'text-slate-200'}`}
              />
            ))}
          </div>
          <span className="text-sm text-slate-500">({product.reviews.toLocaleString('en-AU')})</span>
        </div>

        {/* Variants */}
        <div className="grid grid-cols-3 gap-2 mb-4">
          {product.variants.map((v, index) => (
            <button
              key={v.id}
              onClick={() => setSelectedVariant(index)}
              className={`p-2 rounded-lg border-2 transition-all text-center ${
                selectedVariant === index
                  ? 'border-blue-600 bg-blue-50'
                  : 'border-slate-200 hover:border-slate-300'
              }`}
            >
              <span className="block text-xs text-slate-500">{v.name}</span>
              <span className="block text-sm font-bold text-slate-800">${v.price}</span>
            </button>
          ))}
        </div>

        {/* Add to Cart */}
        <button
          onClick={handleAddToCart}
          className="w-full flex items-center justify-center gap-2 bg-linear-to-r from-slate-800 to-slate-900 hover:from-blue-600 hover:to-blue-700 text-white font-semibold py-3 rounded-xl transition-all duration-300"
        >
          <ShoppingCart className="w-5 h-5" />
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default function ProductsGrid() {
  return (
    <section className="py-16 bg-linear-to-b from-white to-slate-50">
      <div className="container mx-auto px-4">
        {/* Header Text */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            Modafinil Products & Prices
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            View our range of Modafinil products from Modafinil Australia Direct designed to help you stay awake, alert and on top of your game. You can purchase these online and have them delivered directly to your door throughout Australia.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}

