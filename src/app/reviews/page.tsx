'use client';

import { Star, Quote, CheckCircle } from 'lucide-react';
import Link from 'next/link';

const reviews = [
  {
    id: 1,
    title: "SPEEDY delivery 🚚🚚🚚",
    content: "Was impressed from initial email inquiry to received my product. Trust is key when ordering Modafinil online and Steve and his team made me at ease the whole time.",
    author: "Sarah M.",
    location: "Sydney",
    rating: 5,
    product: "Modalert 200mg",
    verified: true,
  },
  {
    id: 2,
    title: "Modalert is it!!",
    content: "Kept crashing at work and couldn't focus for long periods and Modalert tablets did the job – you can trust these guys – they are quick to respond and on top of their game.",
    author: "James T.",
    location: "Melbourne",
    rating: 5,
    product: "Modalert 200mg",
    verified: true,
  },
  {
    id: 3,
    title: "Found the best site :))",
    content: "Looked around for ages but these guys at Modafinil Australia Direct are awesome. Seriously top service!!",
    author: "Mike R.",
    location: "Brisbane",
    rating: 5,
    product: "Modvigil 200mg",
    verified: true,
  },
  {
    id: 4,
    title: "You Rippa!!",
    content: "Finally found my favourite Modafinil site. Im a Perth resident & it was delivered quickly – Impressed with the fast communication. 5 stars :))",
    author: "Chris L.",
    location: "Perth",
    rating: 5,
    product: "Modalert 200mg",
    verified: true,
  },
  {
    id: 5,
    title: "WOW – it came to my PO BOX!!",
    content: "Thanks to everyone at Modafinil Australia and Steve for being so prompt – legend!!!",
    author: "Emma W.",
    location: "Adelaide",
    rating: 5,
    product: "Modafresh 200mg",
    verified: true,
  },
  {
    id: 6,
    title: "Steve was the best!!",
    content: "Communication with Steve ✅ Service ✅ Price ✅ Quality ✅ Great job guys 👍👍",
    author: "David K.",
    location: "Gold Coast",
    rating: 5,
    product: "Modawake 200mg",
    verified: true,
  },
  {
    id: 7,
    title: "WOW!!!",
    content: "Its been a while since I bought any Modafinil product online and Im super excited that I found Steven and his team at Modafinil Australia. Honest, reliable and always fast feedback to all my emails.",
    author: "Lisa P.",
    location: "Canberra",
    rating: 5,
    product: "Modalert 200mg",
    verified: true,
  },
  {
    id: 8,
    title: "Nice Work Guys!!",
    content: "5 star service and communication – always quick to reply to all emails.",
    author: "Tom H.",
    location: "Hobart",
    rating: 5,
    product: "Modvigil 200mg",
    verified: true,
  },
  {
    id: 9,
    title: "Well Done!!",
    content: "Suss at first but all was fine. Ordering was easy, tracking simple and got my Modasmart within 10 days.",
    author: "Ryan B.",
    location: "Sydney",
    rating: 5,
    product: "Modasmart 400mg",
    verified: true,
  },
  {
    id: 10,
    title: "10 out of 10",
    content: "Ordered online from Darwin and everything was perfect – no complaints!!",
    author: "Alex N.",
    location: "Darwin",
    rating: 5,
    product: "Modalert 100mg",
    verified: true,
  },
  {
    id: 11,
    title: "Finally Found a Modafinil Supplier I Can Trust in Australia",
    content: "After trying a few sketchy overseas sites that either never delivered or sent questionable products, finding Modafinil-Australia has been an absolute relief. From the first order, everything just felt professional — clear product info, fast customer support replies from Steve, and genuinely discreet packaging that arrived in less than 2 weeks.",
    author: "Mark S.",
    location: "Melbourne",
    rating: 5,
    product: "Modalert 200mg",
    verified: true,
  },
  {
    id: 12,
    title: "Communication was perfect",
    content: "I contacted Steve a few times and he was always quick to respond to all my questions about delivery etc. A bit worried at first about buying Modafresh 200 online but all I can say is its super-easy and a breeze 😊😊",
    author: "Jenny C.",
    location: "Perth",
    rating: 5,
    product: "Modafresh 200mg",
    verified: true,
  },
];

function ReviewCard({ review }: { review: typeof reviews[0] }) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-lg shadow-slate-200/50 hover:shadow-xl hover:shadow-slate-200/60 transition-all duration-300">
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-1">
          {[...Array(review.rating)].map((_, i) => (
            <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
          ))}
        </div>
        {review.verified && (
          <span className="flex items-center gap-1 text-xs font-medium text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full">
            <CheckCircle className="w-3 h-3" />
            Verified
          </span>
        )}
      </div>

      {/* Quote Icon */}
      <Quote className="w-8 h-8 text-blue-200 mb-3" />

      {/* Title */}
      <h3 className="text-lg font-bold text-slate-800 mb-2">{review.title}</h3>

      {/* Content */}
      <p className="text-slate-600 mb-4 leading-relaxed">{review.content}</p>

      {/* Product Badge */}
      <div className="mb-4">
        <span className="inline-block bg-blue-50 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full">
          {review.product}
        </span>
      </div>

      {/* Author */}
      <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
        <div className="w-10 h-10 rounded-full bg-linear-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white font-bold">
          {review.author.charAt(0)}
        </div>
        <div>
          <p className="font-semibold text-slate-800">{review.author}</p>
          <p className="text-sm text-slate-500">{review.location}, Australia</p>
        </div>
      </div>
    </div>
  );
}

export default function ReviewsPage() {
  return (
    <main className="min-h-screen bg-linear-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-linear-to-br from-blue-600 via-blue-700 to-cyan-600 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-block bg-white/20 text-white px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wider mb-4">
              Customer Reviews
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
              What Our Customers Say
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              Real reviews from real Australians who trust Modafinil Australia Direct for their cognitive enhancement needs.
            </p>
            <div className="flex items-center justify-center gap-2 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-8 h-8 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <p className="text-white font-semibold text-lg">
              4.9/5 Average Rating • {reviews.length}+ Verified Reviews
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-white border-b border-slate-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-2 gap-8 max-w-xl mx-auto">
            <div className="text-center">
              <p className="text-4xl font-extrabold text-blue-600 mb-2">4.9/5</p>
              <p className="text-slate-600 font-medium">Average Rating</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-extrabold text-blue-600 mb-2">98%</p>
              <p className="text-slate-600 font-medium">Satisfaction Rate</p>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((review) => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-linear-to-r from-blue-600 to-cyan-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
            Ready to Experience the Difference?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied Australian customers who trust us for their Modafinil needs.
          </p>
          <Link
            href="/products"
            className="inline-flex items-center gap-2 bg-white text-blue-600 font-bold py-4 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
          >
            Shop Now
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </Link>
        </div>
      </section>
    </main>
  );
}
