'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { Star, ShoppingCart } from 'lucide-react';
import { useCartStore } from '@/store/cartStore';

interface PriceOption {
  qty: number;
  price: number;
  perPill: number;
}

interface Product {
  id: string;
  name: string;
  category: string;
  description: string;
  image: string;
  badge?: 'bestseller' | 'popular' | 'new';
  rating: number;
  reviews: number;
  priceOptions: PriceOption[];
}

const products: Product[] = [
  {
    id: 'modalert-200',
    name: 'Modalert 200mg',
    category: 'Modafinil',
    description: "Boost your productivity with Modalert 200mg, Australia's go-to smart choice for sharper focus and clear-headed energy.",
    image: '/images/Modalert-200mg.webp',
    badge: 'bestseller',
    rating: 5,
    reviews: 47,
    priceOptions: [
      { qty: 30, price: 120, perPill: 4.00 },
      { qty: 100, price: 350, perPill: 3.50 },
      { qty: 200, price: 600, perPill: 3.00 },
    ],
  },
  {
    id: 'modalert-100',
    name: 'Modalert 100mg',
    category: 'Modafinil',
    description: "Power through your day with Modalert 100mg. Perfect for long workdays, study marathons, or anyone needing a sharp mental edge.",
    image: '/images/Modalert-100-1-scaled.webp',
    badge: 'popular',
    rating: 5,
    reviews: 32,
    priceOptions: [
      { qty: 30, price: 69, perPill: 2.30 },
      { qty: 100, price: 155, perPill: 1.55 },
      { qty: 200, price: 259, perPill: 1.30 },
    ],
  },
  {
    id: 'modafresh',
    name: 'Modafresh 200mg',
    category: 'Modafinil',
    description: "Power through your busiest days with Modafresh 200mg. Sharp focus, steady energy, and clean-minded alertness without the jitters.",
    image: '/images/Modafresh-200-4-scaled.webp',
    rating: 5,
    reviews: 28,
    priceOptions: [
      { qty: 30, price: 75, perPill: 2.50 },
      { qty: 100, price: 164, perPill: 1.64 },
      { qty: 200, price: 273, perPill: 1.37 },
    ],
  },
  {
    id: 'modvigil',
    name: 'Modvigil 200mg',
    category: 'Modafinil',
    description: "Your 'get it done' switch with clean wakefulness, crisp focus, and steady drive. Super affordable and Aussie-trusted.",
    image: '/images/Modvigil-200-5-scaled.webp',
    rating: 5,
    reviews: 35,
    priceOptions: [
        { qty: 30, price: 83, perPill: 2.77 },
        { qty: 100, price: 203, perPill: 2.03 },
        { qty: 200, price: 365, perPill: 1.83 },
    ],
  },
  {
    id: 'modawake',
    name: 'Modawake 200mg',
    category: 'Modafinil',
    description: "Strong, long lasting focus and clean energy. Premium Modafinil trusted by students, professionals, and shift workers.",
    image: '/images/modawake-200mg.webp',
    rating: 5,
    reviews: 24,
    priceOptions: [
        { qty: 30, price: 75, perPill: 2.50 },
        { qty: 100, price: 195, perPill: 1.95 },
        { qty: 200, price: 327, perPill: 1.64 },
    ],
  },
  {
    id: 'modasmart',
    name: 'Modasmart 400mg',
    category: 'Modafinil',
    description: "If 200mg feels like it's not cutting it, Modafinil 400mg is the step up serious users go for. Stop fighting fatigue the hard way.",
    image: '/images/Modasmart-400-2-scaled.webp',
    badge: 'new',
    rating: 5,
    reviews: 18,
    priceOptions: [
      { qty: 50, price: 152, perPill: 3.04 },
      { qty: 100, price: 244, perPill: 2.44 },
      { qty: 200, price: 411, perPill: 2.06 },
    ],
  },
  {
    id: 'modafinil-400',
    name: 'Modafinil 400mg Australia',
    category: 'Modafinil',
    description: "If 200mg feels like it's not cutting it, Modafinil 400mg is the step up serious users go for. Ships Australia-wide, fast and discreet.",
    image: '/images/Modasmart-400-2-scaled.webp',
    badge: 'new',
    rating: 5,
    reviews: 12,
    priceOptions: [
      { qty: 50, price: 152, perPill: 3.04 },
      { qty: 100, price: 244, perPill: 2.44 },
      { qty: 200, price: 411, perPill: 2.06 },
    ],
  },
];

function ProductCard({ product }: { product: Product }) {
  const [selectedOption, setSelectedOption] = useState(0);
  const { addItem, setIsOpen } = useCartStore();

  const handleAddToCart = () => {
    const option = product.priceOptions[selectedOption];
    addItem({
      id: `${product.id}-${option.qty}`,
      productId: product.id,
      variantId: `${product.id}-${option.qty}`,
      name: product.name,
      variantName: `${option.qty} pills`,
      price: option.price,
      image: product.image,
    });
    setIsOpen(true);
  };

  const badgeStyles = {
    bestseller: 'bg-linear-to-r from-amber-500 to-orange-500',
    popular: 'bg-linear-to-r from-blue-500 to-cyan-500',
    new: 'bg-linear-to-r from-emerald-500 to-green-500',
  };

  return (
    <div className="group bg-white rounded-2xl shadow-lg shadow-slate-200/50 overflow-hidden hover:shadow-xl hover:shadow-slate-200/60 transition-all duration-300 hover:-translate-y-1">
      {/* Image */}
      <div className="relative aspect-square bg-slate-50 overflow-hidden">
        {product.badge && (
          <span className={`absolute top-4 left-4 z-10 px-3 py-1 text-white text-xs font-bold uppercase rounded-full ${badgeStyles[product.badge]}`}>
            {product.badge === 'bestseller' ? 'Best Seller' : product.badge}
          </span>
        )}
        <div className="w-full h-full relative">
            <Image 
                src={product.image}
                alt={product.name}
                fill
                className="object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
            />
        </div>
      </div>

      {/* Info */}
      <div className="p-6">
        <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider">
          {product.category}
        </span>
        <h3 className="text-xl font-bold text-slate-800 mt-1 mb-2">{product.name}</h3>
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
          <span className="text-sm text-slate-500">({product.reviews.toLocaleString('en-AU')} reviews)</span>
        </div>

        {/* Price Options */}
        <div className="grid grid-cols-3 gap-2 mb-4">
          {product.priceOptions.map((option, index) => (
            <button
              key={option.qty}
              onClick={() => setSelectedOption(index)}
              className={`p-2 rounded-lg border-2 transition-all text-center ${
                selectedOption === index
                  ? 'border-blue-600 bg-blue-50'
                  : 'border-slate-200 hover:border-slate-300'
              }`}
            >
              <span className="block text-xs text-slate-500">{option.qty} pills</span>
              <span className="block text-sm font-bold text-slate-800">${option.price}</span>
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

export default function Products() {
  // Only show first 4 products on homepage
  const featuredProducts = products.slice(0, 4);
  
  return (
    <section id="products" className="py-20 bg-linear-to-b from-white to-slate-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-linear-to-r from-blue-100 to-cyan-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wider mb-4">
            Our Products
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-800 mb-4">
            Premium Modafinil Products
          </h2>
          <p className="text-xl text-slate-500 max-w-2xl mx-auto">
            Choose from our selection of pharmaceutical-grade cognitive enhancers
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* View All Products CTA */}
        <div className="text-center mt-12">
          <Link 
            href="/products" 
            className="inline-flex items-center gap-2 bg-linear-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-bold py-4 px-8 rounded-full shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40 transition-all duration-300 hover:-translate-y-1"
          >
            View All Products
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}

