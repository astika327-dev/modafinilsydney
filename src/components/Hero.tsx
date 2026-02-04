'use client';

import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background with Image or Gradient Fallback */}
      <div className="absolute inset-0 z-0">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-linear-to-br from-slate-900 via-blue-900 to-slate-800" />
        
        {/* Background Image (when available) */}
        <div 
          className="absolute inset-0 bg-cover bg-top bg-no-repeat opacity-40"
          style={{
            backgroundImage: 'url(/images/hero_new3.png)',
          }}
        />
        
        {/* Animated Decorative Elements */}
        <div className="absolute top-20 right-20 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl animate-pulse delay-500" />
        
        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-linear-to-r from-slate-900/80 via-slate-900/60 to-transparent" />
        <div className="absolute inset-0 bg-linear-to-t from-slate-900/70 to-transparent" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6 mt-4 md:mt-24 animate-fade-in">
            <span className="text-2xl">🇦🇺</span>
            <span className="text-white/90 text-sm font-medium">Australia&apos;s Trusted Supplier</span>
          </div>

          {/* Title */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-tight">
            Premium{' '}
            <span className="bg-linear-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              Modafinil
            </span>
            <br />
            Delivered to Your Door
          </h1>

          {/* Subtitle */}
          <p className="text-xl text-white/80 mb-8 leading-relaxed max-w-2xl">
            Enhance your cognitive performance with pharmaceutical-grade Modafinil. 
            Fast, discreet shipping across Australia with guaranteed delivery.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 mb-12">
            <a
              href="#products"
              className="inline-flex items-center gap-2 bg-linear-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105 shadow-lg shadow-blue-600/30"
            >
              Shop Now
              <ArrowRight className="w-5 h-5" />
            </a>

          </div>

          {/* Features */}

        </div>
      </div>

      {/* Scroll Indicator */}

    </section>
  );
}

